export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectIndex",
      title: "ProjectIndex",
      type: "number",
    },
    {
      name: "title",
      title: "title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "string",
    },
    {
      name: "linkToGithub",
      title: "LinkToGithub",
      type: "string",
    },
    {
      name: "linkToDeployment",
      title: "LinkToDeployment",
      type: "string",
    },
    {
      name: "linkToDemo",
      title: "LinkToDemo",
      type: "string",
    },
  ],
}
