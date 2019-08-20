export default {
  widgets: [
    {
      name: "project-info",
    },
    {
      name: "project-users",
    },
    {
      name: "netlify",
      options: {
        title: "Website Hosting (Netlify)",
        sites: [
          {
            title: "SeniorNet Website",
            apiId: "058e206e-a0b6-477b-ae36-4c7637c0c443",
            buildHookId:
              "https://api.netlify.com/build_hooks/5d5b879f46c1d7515fc8c180",
            name: "seniornetdunedin",
          },
        ],
      },
    },
  ],
}
