const questions = [
  {
    section: 1,
    items: [
      {
        label: "Enter username",
        type: "text",
        value: "username",
      },
      {
        label: "Enter password",
        type: "password",
        value: "password",
      },
      {
        label: "Enter age",
        type: "number",
        value: "age",
      },
    ],
  },
  {
    section: 2,
    items: [
      {
        label: "Publication",
        type: "text",
        value: "Publication",
      },
      {
        label: "Patent ID",
        type: "text",
        value: "patentID",
      },
    ],
  },
  {
    section: 3,
    items: [
      {
        label: "Check all the fields before Submitting",
        type: "information",
      },
    ],
  },
];

export default questions;
