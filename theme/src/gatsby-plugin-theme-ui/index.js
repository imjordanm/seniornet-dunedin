/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#232129",
    background: "#fff",
    primary: "#639",
    secondary: "#555",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 22, 28, 36, 48],
  lineHeights: {
    body: "1.45",
    heading: "1.1",
  },
  sizes: {
    default: "90vw",
    container: 800,
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "body",
    },
    Header: {
      background:
        "linear-gradient(180deg, rgba(6, 100, 130, 0.7) 0%, rgba(6, 100, 130, 0.94) 100%)",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      padding: 3,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        width: "default",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "default",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      color: "text",
      fontSize: [3, 4, 5],
      lineHeight: "heading",
      overflowWrap: "break-word",
    },
    ul: {
      padding: 0,
      listStyle: "none",
    },
    li: {
      display: "inline-block",
      a: {
        textDecoration: "none",
        color: "inherit",
        "&:focus-within, &:hover": {
          opacity: "0.8",
        },
      },
    },
  },
}
