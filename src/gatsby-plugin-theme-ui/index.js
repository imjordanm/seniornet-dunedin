/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  breakpoints: ["680px", "1160px"],
  sizes: {
    mobile: "85vw",
    desktop: "75vw",
    content: 1000,
    outer: 1216,
  },
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
    "20em",
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
    muted: "#F3F3F3",
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
    heading: "0em",
    caps: "0.15em",
  },
  lineHeights: {
    body: "1.75",
    smallBody: "1.5",
    heading: "1.25",
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "heading",
      overflowWrap: "break-word",
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
      fontSize: 0,
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
    li: {
      fontSize: 2,
      mr: [4, 6],
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
  buttons: {
    base: {
      py: [4, 5],
      px: [6, 7],
      fontSize: 0,
      textDecoration: "none",
      variant: "textStyles.caps",
      cursor: "pointer",
    },
    primary: {
      variant: "buttons.base",
      bg: "rgba(255,255,255,0.15)",
      border: "none",
      color: "#fff",
      py: [4, 5],
      px: [5, 6],
      boxShadow: theme => `0px 2px 8px ${theme.colors.text}85`,
    },
    secondary: {
      variant: "buttons.base",
      border: theme => `3px solid ${theme.colors.secondary}`,
      bg: "transparent",
      color: "#bfca1d",
      position: "relative",

      "::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: -6,
        px: [0, 5],
        bg: "#bfca1d",
        height: 3,
        transition: "transform 0.25s 0.1s",
      },
      ":hover": {
        "::before": {
          transform: "translateY(-50%) translateX(20%)",
        },
      },
    },
  },
  sections: {
    base: {
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      width: ["mobile", "mobile", "desktop"],
      maxWidth: "content",
      py: [9, 10, 11],
    },
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
        "linear-gradient(180deg, rgba(6, 100, 130, 0.7) 0%, rgba(15, 117, 150, 1) 100%)",
      boxShadow: "0px 3px 4px rgba(4, 77, 101, 0.25)",
      zIndex: 2,
      color: "background",
      fontWeight: "bold",
      pt: 6,
      pb: 6,
      variant: "navigation",
    },
    Main: {},
    Footer: {
      bg: "primary",
      color: "background",
      fontWeight: "bold",
      pt: [8, 10],
      pb: [8, 10],
      variant: "navigation",
    },
    h1: {
      variant: "textStyles.heading",
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: "textStyles.caps",
      color: "secondary",
      position: "relative",
      fontSize: [2, 2, 3],
      mb: [4, 5, 6],
      ml: [0, 7, 0],
      "::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: [0, -7],
        px: [0, 4, 4],
        bg: "secondary",
        height: 4,
      },
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: [1, 2, 3],
      mb: [2, 3],
    },
    p: {
      fontSize: [1, 2, 3],
      mb: 6,
      "&:last-of-type": {
        mb: 0,
      },
    },
    ul: {
      fontSize: [1, 2, 3],
      pl: 4,
    },
    li: {
      pl: 2,
      mb: 2,
      "&:last-of-type": {
        mb: 0,
      },
    },
  },
}
