import React from "react"
import * as queryString from "query-string"
import PreviewTemplate from "../templates/preview"
const sanityClient = require("@sanity/client")
const imageUrlBuilder = require("@sanity/image-url")

export class PagePreview extends React.Component {
  // Initial state
  state = {
    isLoading: true,
    data: undefined,
  }

  // Method for fetching data and updating state
  fetchData = async () => {
    // Parse the query from the location prop
    const query = queryString.parse(this.props.location.search)
    // Get the pageId and isDraft from the generated object
    const { pageId, isDraft } = query
    // Fetch data from Sanity by using a helper function
    const sanityData = await fetchDataFromSanity(pageId, isDraft)
    console.log(sanityData)

    // If there's data, send it to state
    if (sanityData) {
      this.setState({
        isLoading: false,
        data: sanityData,
      })
    } else {
      this.setState({
        isLoading: false,
      })
    }
  }

  // When the component is first rendered, fetch data and,
  // if it's a draft, listen to changes
  componentDidMount() {
    const query = queryString.parse(this.props.location.search)
    const { pageId, isDraft } = query
    this.fetchData()
  }
  render() {
    const {
      state: { isLoading, data },
    } = this
    if (isLoading) {
      // If the data is still being fetched for the first time, return a loading
      // component (just a centralized h1 with "Loading..." as content)
      return <div>Loading...</div>
    }
    if (!data) {
      console.log("Data not found")
      return null
    } else {
      // Finally, if it's not loading and there's data, render the desired
      // PageTemplate. Here you could do conditionals on the document type
      // and render different templates as needed ;)
      return <PreviewTemplate data={data} />
    }
  }
}

const fetchDataFromSanity = async (pageId, isDraft) => {
  const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true,
    // If it's a draft, we want to use credentials to
    // access non-published documents. In order for this
    // to work, you'll have to whitelist your domain!
    withCredentials: isDraft,
  })
  const query = `
    *[_id == '${isDraft ? `drafts.${pageId}` : pageId}']`
  const crudeData = await client.fetch(query)
  if (crudeData && crudeData[0]) {
    const builder = imageUrlBuilder(client)
    const getImageURL = image => builder.image(image).url()
    const normalizedData = await normalizeSanityData({
      data: crudeData[0],
      getImageURL,
    })
    if (normalizedData) {
      return normalizedData
    }
  } else {
    return {
      data: undefined,
      getImageURL: undefined,
    }
  }
}

const normalizeSanityData = ({ data, getImageURL }) => {
  if (data && getImageURL) {
    return analyzeField(data, getImageURL)
  } else {
    return undefined
  }
}

const isImagelessObject = field =>
  typeof field == "object" && field._type !== "image"

const isImage = field => {
  return (
    typeof field == "object" &&
    field._type &&
    field._type === "image" &&
    field.asset
  )
}

const saveImage = async (field, getImageURL) => {
  // Build the URL for the image using Sanity's package
  const imageUrl = await getImageURL(field)
  let newField = { ...field }
  if (imageUrl) {
    newField = {
      ...field,
      imageUrl,
    }
  } else {
    console.error(`Error while saving the image.`)
  }

  return newField
}

const analyzeField = async (field, getImageURL) => {
  let finalField = field
  for (const key of Object.keys(field)) {
    let newField = field[key]
    if (isImagelessObject(field[key])) {
      // if it's an object without an image, we want to go deeper
      // into its structure to check for images there
      newField = await analyzeField(newField, getImageURL)
    } else if (isImage(field[key])) {
      // If it's an image field with an asset, save the image
      newField = await saveImage(newField, getImageURL)
    } else {
      // If not an object, we simply skip this key
      continue
    }

    // swap out the previous field with the new one
    finalField = Object.assign(finalField, {
      [key]: newField,
    })
  }
  return finalField
}

export default PagePreview
