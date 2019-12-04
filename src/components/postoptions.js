/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Grid from "./grid"

export default class PostOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //{ by: "default", fn: (a, b) => a } })
      currentCategory: "All",
      filteredPosts: props.posts,
    }

    this.sortPosts = this.sortPosts.bind(this)
    this.filterPosts = this.filterPosts.bind(this)
  }

  // Method for fetching data and updating state
  sortPosts(e) {
    e.preventDefault()

    let field = e.target.value
    let direction = e.target[e.target.selectedIndex].id
    let ascSort = (a, b) => a[field].localeCompare(b[field])
    let descSort = (a, b) => b[field].localeCompare(a[field])

    if (direction === "asc") {
      let items = [...this.state.filteredPosts.items].sort(ascSort)

      items = { items, numColumns: "one" }

      this.setState({
        filteredPosts: items,
      })
    } else if (direction === "desc") {
      let items = [...this.state.filteredPosts.items].sort(descSort)
      items = { items, numColumns: "one" }

      this.setState({ filteredPosts: items })
    }
  }

  filterPosts(e) {
    e.preventDefault()
    let filter = e.currentTarget.id

    if (filter === "All") {
      this.setState({
        currentCategory: "All",
        filteredPosts: this.props.posts,
      })
    } else {
      let items = this.props.posts.items.filter(
        post => post.category === filter
      )

      items = { items, numColumns: "one" }
      this.setState({
        currentCategory: filter,
        filteredPosts: items,
      })
    }
  }

  render() {
    return (
      <>
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <div sx={filterStyles}>
            <button
              id="All"
              className={this.state.currentCategory === "All" && "active"}
              onClick={this.filterPosts}
            >
              All
            </button>
            <button
              id="News"
              className={this.state.currentCategory === "News" && "active"}
              onClick={this.filterPosts}
            >
              News
            </button>
            <button
              id="Help"
              className={this.state.currentCategory === "Help" && "active"}
              onClick={this.filterPosts}
            >
              Help
            </button>
          </div>

          <div sx={sortStyles}>
            <label for="sort">Sort by</label>
            <select id="sort" onChange={this.sortPosts}>
              <option id="desc" value="publishedAt">
                Newest First
              </option>
              <option id="asc" value="publishedAt">
                Oldest First
              </option>
              <option id="asc" value="title">
                Title (A - Z)
              </option>
              <option id="desc" value="title">
                Title (Z - A)
              </option>
            </select>
          </div>
        </div>
        {this.state.filteredPosts.items.length > 0 && (
          <Grid node={this.state.filteredPosts} parent={this.props.parent} />
        )}
      </>
    )
  }
}

const filterStyles = {
  display: "flex",
  button: {
    background: "none",
    border: "none",
    outline: 0,
    variant: "smallcaps",
    my: "0 !important",
    mr: [4, 5, 6],
    cursor: "pointer",

    "&.active, &:hover": {
      color: "primary",
    },
  },
}

const sortStyles = {
  label: {
    fontSize: ["0.633em", 0],
  },
  select: {
    border: "1px solid #e4e4e4",
    py: [1, 2],
    px: [2, 3],
    ml: [2, 3],
    color: "text",
    fontSize: ["0.633em", 0],
  },
}

// tasks.length > 0 ? (
// tasks.sort(currentSort.fn).map((task, index) => (
