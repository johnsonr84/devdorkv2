export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
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
  // orderings: [
  //   {
  //     title: 'projectIndex, Low',
  //     name: 'projectIndexDesc',
  //     by: [
  //       {field: 'projectIndex', direction: 'desc'}
  //     ]
  //   },
  //   {
  //     title: 'projectIndex, High',
  //     name: 'projectIndexAsc',
  //     by: [
  //       {field: 'projectIndex', direction: 'asc'}
  //     ]
  //   },
  // ]
}
