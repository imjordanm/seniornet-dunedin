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
      'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 22, 28, 36, 48],
  fontWeights: {
    regular: "400",
    bold: "700"
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.1em',
  },
  lineHeights: {
    body: "1.45",
    heading: "1.1",
  },
  sizes: {
    default: "90vw",
    container: 1200,
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
      pt: 4,
      pb: 4,
      ul: {
        padding: 0,
        margin: 0,
        listStyle: "none",
      },
      li: {
        display: "inline-block",
        mr: 3,
        "&:last-of-type": {
          mr: 0
        },
        a: {
          textDecoration: "none",
          color: "inherit",
          "&:focus-within, &:hover": {
            opacity: "0.8",
          },
        },
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "default",
    },
    Footer: {
      background:
        "linear-gradient(180deg, rgba(6, 100, 130, 0.7) 0%, rgba(6, 100, 130, 0.94) 100%)",
      color: "background",
      fontWeight: "bold",
      pt: 4,
      pb: 4,
    },
    h1: {
      color: "text",
      fontSize: [3, 4, 5],
      lineHeight: "heading",
      overflowWrap: "break-word",
    },
    
  },
}
