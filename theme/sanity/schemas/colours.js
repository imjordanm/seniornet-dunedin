export default {
  name: "colours",
  type: "object",
  title: "Colours",
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: "colourText",
      type: "color",
      title: "Text",
    },
    {
      name: "colourPrimary",
      type: "color",
      title: "Primary",
    },
    {
      name: "colourSecondary",
      type: "color",
      title: "Secondary",
    },
    {
      name: "colourBG",
      type: "color",
      title: "Background",
    },
  ],
}
