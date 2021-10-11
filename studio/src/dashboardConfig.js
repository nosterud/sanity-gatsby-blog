export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6164026c797c583f30ba0684",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-z5hqbp1c",
                  apiId: "06d802ce-ec38-4758-9695-fede832eed20",
                },
                {
                  buildHookId: "6164026c31ee6c715a1c78ef",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6oxrmf9i",
                  apiId: "dacc7c0f-059d-472f-91f3-49112cb26a50",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nosterud/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6oxrmf9i.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
