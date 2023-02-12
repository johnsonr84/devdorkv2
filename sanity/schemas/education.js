export default {
    name: "school",
    title: "School",
    type: "document",
    fields: [
      {
        name: "schoolIndex",
        title: "SchoolIndex",
        type: "number",
      },
      {
        name: "degreeTitle",
        title: "DegreeTitle",
        type: "string",
      },
      {
        name: "degreeImage",
        title: "Degree Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "school",
        title: "School",
        type: "text",
      },
      {
        name: "dateStarted",
        title: "DateStarted",
        type: "date",
      },
      {
        name: "dateEnded",
        title: "DateEnded",
        type: "date",
      },
      {
        name: "points",
        title: "Points",
        type: "array",
        of: [{ type: "string" }],
      },
    ],
  };