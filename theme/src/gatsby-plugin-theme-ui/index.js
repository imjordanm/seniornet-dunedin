/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  breakpoints: ["680px", "1040px"],
  space: [
    "0",
    "0.25em",
    "0.5em",
    "0.75em",
    "1em",
    "1.5em",
    "2em",
    "3em",
    "4em",
    "6em",
    "8em",
    "12em",
    "16em",
    "24em",
  ],
  fontSizes: [
    "0.844em",
    "1.125em",
    "1.5em",
    "2em",
    "2.665em",
    "3.5em",
    "4.73em",
    "6.3em",
  ],
  colors: {
    text: "#054C63",
    background: "#fff",
    primary: "#066482",
    secondary: "#D5E02D",
  },
  fonts: {
    body: '"Inter", Roboto, sans-serif',
    heading: '"Gilroy", Roboto, sans-serif',
    default:
      '"Inter", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontWeights: {
    regular: "400",
    bold: "700",
  },
  letterSpacings: {
    heading: "-0.05em",
    caps: "0.2em",
  },
  lineHeights: {
    body: "1.75",
    heading: "1.25",
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "heading",
      overflowWrap: "break-word",
      mb: 0,
    },
    caps: {
      fontWeight: "bold",
      lineHeight: "heading",
      letterSpacing: "caps",
      textTransform: "uppercase",
      fontFamily: "heading",
    },
  },
  navigation: {
    ul: {
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
    li: {
      display: "inline-block",
      mr: [4, 6, 7],
      "&:last-of-type": {
        mr: 0,
      },
      a: {
        textDecoration: "none",
        color: "background",
        "&:focus-within, &:hover": {
          opacity: "0.8",
        },
      },
    },
  },
  sizes: {
    default: "80vw",
    container: 1200,
  },
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
      pt: 7,
      pb: 7,
      variant: "navigation",
    },
    Main: {
      margin: "0 auto",
      pt: 13,
      pb: 13,
      maxWidth: "container",
      width: "default",
    },
    Footer: {
      background:
        "linear-gradient(180deg, rgba(6, 100, 130, 0.7) 0%, rgba(6, 100, 130, 0.94) 100%)",
      color: "background",
      fontWeight: "bold",
      pt: 11,
      pb: 11,
      variant: "navigation",
    },
    h1: {
      variant: "textStyles.heading",
      fontSize: [3, 5, 6],
    },
    h2: {
      variant: "textStyles.caps",
      color: "secondary",
      fontSize: [2, 2, 3],
      mb: [2, 3, 4],
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: [1, 2, 3],
    },
    p: {
      fontSize: [1, 2, 3],
    },
  },
}
