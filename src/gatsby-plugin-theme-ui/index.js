export default {
  breakpoints: ["660px", "860px", "1380px", "1760px"],
  sizes: {
    mobile: "75vw",
    tablet: "80vw",
    desktop: "85vw",
    maxSmall: 850,
    maxLarge: 1000,
    outer: 1216,
    navigation: 1432,
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
    muted: "#ececec",
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
    caps: "0.1em",
  },
  lineHeights: {
    body: "1.75",
    bodyMobile: "1.65",
    smallBody: "1.5",
    heading: "1.2",
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
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
    li: {
      mr: [null, null, null, 6],
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
  buttons: {
    base: {
      py: 5,
      px: [6, 7],
      fontSize: ["0.633em", 0],
      textDecoration: "none",
      variant: "textStyles.caps",
      cursor: "pointer",
      bg: "transparent",
      width: ["100%", "initial"],
    },
    primary: {
      variant: "buttons.base",
      bg: "rgba(255,255,255,0.15)",
      color: "#fff",
      border: "none",
      fontSize: ["0.633em", 0],
      px: [5, 6],
      boxShadow: theme => `0px 2px 8px ${theme.colors.text}85`,
    },
    secondary: {
      variant: "buttons.base",
      border: theme => `3px solid ${theme.colors.secondary}`,
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
      width: [
        "mobile",
        "tablet",
        "tablet",
        theme => `calc(${theme.sizes.desktop} - 220px)`,
      ],
      maxWidth: ["maxSmall", null, null, "maxLarge"],
      py: [8, 10, null, 11],
    },
  },
  grid: {
    base: {
      display: "grid",
    },
    one: {
      variant: "grid.base",
      mt: 4,
      mb: [6, 8, null, 9],
      gridRowGap: [6, 8, null, 9],
    },
    two: {
      variant: "grid.base",
      gridTemplateColumns: ["none", "none", "repeat(2, 1fr)"],
      ml: [null, null, null, "-110px"],
      mt: 4,
      mb: [6, 8, null, 9],
      width: ["100%", null, null, "calc(100% + 220px)"],
      gridColumnGap: [0, 0, 6, 9],
      gridRowGap: [6, 8, null, 9],
    },
  },
  smallcaps: {
    variant: "textStyles.caps",
    fontFamily: "body",
    fontSize: ["0.633em", null, null, 0],
    color: "#c3c3c3",
    mb: [5, 6, null, 7],
    mt: [-1, -4],
    display: "block",
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: ["bodyMobile", null, "body"],
    },
    Header: {
      zIndex: 2,
      color: "primary",
      fontWeight: "bold",
      py: [4, null, 5, null, 6],
      variant: "navigation",
      position: "relative",
    },
    Main: {},
    Footer: {
      bg: "primary",
      color: "background",
      fontWeight: "bold",
      py: [8, 9, null, 10],
      variant: "navigation",
    },
    h1: {
      variant: "textStyles.heading",
      fontSize: [3, 4, 5, 6],
      mb: 3,
    },
    h2: {
      variant: "textStyles.caps",
      color: "secondary",
      position: "relative",
      fontSize: [1, 2, 2, 3],
      mb: [4, 5],
      ml: [0, 7, 7, 0],
      "::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: [0, -7],
        px: [0, 4],
        bg: "secondary",
        height: 4,
      },
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: [1, 2, null, 3],
      mb: [2, 3],
    },
    p: {
      fontSize: [null, 2, null, 3],
      mb: 4,
      "&:last-child": {
        mb: 0,
      },
    },
    ul: {
      pl: 4,
    },
    li: {
      fontSize: [null, 2, null, 3],
      pl: 2,
    },
  },
}
