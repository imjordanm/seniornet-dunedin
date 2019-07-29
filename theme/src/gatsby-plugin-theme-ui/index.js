/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
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
  fontSizes: [14, 18, 22, 28, 36, 48, 64],
  fontWeights: {
    regular: "400",
    bold: "700",
  },
  letterSpacings: {
    heading: "-0.05em",
    caps: "0.2em",
  },
  lineHeights: {
    body: "1.45",
    heading: "1.1",
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      overflowWrap: "break-word",
    },
    caps: {
      fontWeight: "bold",
      letterSpacing: "caps",
      textTransform: "uppercase",
      fontFamily: "heading",
      fontSize: [0, 0, 1],
    },
  },
  sizes: {
    default: "90vw",
    container: 1400,
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 6, 12, 24, 36, 48, 64, 128, 256, 512],
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
      pt: 5,
      pb: 5,
      ul: {
        padding: 0,
        margin: 0,
        listStyle: "none",
      },
      li: {
        display: "inline-block",
        mr: 5,
        "&:last-of-type": {
          mr: 0,
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
      variant: "textStyles.heading",
      fontSize: [3, 4, 5],
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: [2, 3, 4],
    },
    p: {
      fontSize: [0, 1, 2],
    },
  },
}
