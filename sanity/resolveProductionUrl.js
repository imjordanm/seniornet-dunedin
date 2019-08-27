const isDraft = id => id.includes("drafts")

export default function resolveProductionUrl(document) {
  // First, we select a specific type of document
  if (document._type === "pages") {
    // Then we get its ID
    let id = document._id
    // if it's a draft, we split its _id with the "drafts." substring, which will return an array,
    // and get the second item in it, which will be the isolated _id without "drafts."
    if (isDraft(id)) {
      id = document._id.split("drafts.")[1]
    }
    // And return a template string reflecting the URL structure we want. In this case, we're doing a
    // simple conditional to return '&isDraft=true' as a param for drafts as we'll query them
    // differently in the front-end
    return `http://seniornetdunedin.netlify.com/preview?pageId=${id}${
      isDraft(document._id) ? "&isDraft=true" : ""
    }`
  }
  return undefined
}

/*
const isDraft = id => id.includes('drafts')

export default function resolveProductionUrl(document) {
  if (!isDraft(document._id)) return undefined

  if (document._type === 'recipe') {
    return `http://localhost:8080/rezept/${document.slug.current}?id=${
      document._id
    }`
  }

  if (document._type === 'page') {
    return `http://localhost:8080/${document.slug.current}?id=${document._id}`
  }

  return undefined
}

`
*/
