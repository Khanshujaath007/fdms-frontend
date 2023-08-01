const questions = [
  {
    section: 0, // Set section to 0 for user data
    items: [
      {
        label: "First Name",
        type: "text",
        value: "firstName",
      },
      {
        label: "Last Name",
        type: "text",
        value: "lastName",
      },
      {
        label: "Email",
        type: "email",
        value: "email",
      },
      {
        label: "Password",
        type: "password",
        value: "password",
      },
      {
        label: "Age",
        type: "number",
        value: "age",
      },
      {
        label: "Date of Birth",
        type: "date",
        value: "dateOfBirth",
      },
      {
        label: "Username",
        type: "text",
        value: "username",
      },
      {
        label: "Full Address",
        type: "text",
        value: "fullAddress",
      },
      {
        label: "City",
        type: "text",
        value: "city",
      },
      {
        label: "State",
        type: "text",
        value: "state",
      },
      {
        label: "Contact",
        type: "number",
        value: "contact",
      },
      {
        label: "University",
        type: "text",
        value: "university",
      },
      {
        label: "University ID",
        type: "text",
        value: "universityId",
      },
      {
        label: "Department",
        type: "text",
        value: "department",
      },
    ],
  },
  {
    section: 2, // Set section to 2 for publication data
    items: [
      {
        label: "WOS Subject ID",
        type: "text",
        value: "wosSubjectId",
      },
      {
        label: "WOS Subject",
        type: "text",
        value: "wosSubject",
      },
      {
        label: "Expertise ID",
        type: "text",
        value: "expertiseId",
      },
      {
        label: "Expertise",
        type: "text",
        value: "expertise",
      },
      {
        label: "Brief Expertise",
        type: "text",
        value: "briefExpertise",
      },
      {
        label: "Qualification",
        type: "text",
        value: "qualification",
      },
      {
        label: "Subject",
        type: "text",
        value: "subject",
      },
      {
        label: "Organization",
        type: "text",
        value: "organization",
      },
      {
        label: "Organization Type",
        type: "text",
        value: "organizationType",
      },
      {
        label: "Organization URL",
        type: "text",
        value: "organizationURL",
      },
      {
        label: "Working From Month",
        type: "text",
        value: "workingFromMonth",
      },
      {
        label: "Working From Year",
        type: "text",
        value: "workingFromYear",
      },
      {
        label: "ORCID ID",
        type: "text",
        value: "orcidId",
      },
      {
        label: "Researcher ID",
        type: "text",
        value: "researcherId",
      },
      {
        label: "Scopus ID",
        type: "text",
        value: "scopusId",
      },
      {
        label: "Google Scholar ID",
        type: "text",
        value: "googleScholarId",
      },
      {
        label: "Patent Application ID",
        type: "text",
        value: "patentApplicationId",
      },
      {
        label: "Status of Patent",
        type: "text",
        value: "statusOfPatent",
      },
      {
        label: "Inventor's Name",
        type: "text",
        value: "inventorsName",
      },
      {
        label: "Title of Patent",
        type: "text",
        value: "titleOfPatent",
      },
      {
        label: "Applicants Number",
        type: "text",
        value: "applicantsNumber",
      },
      {
        label: "Patent Filled Date",
        type: "date",
        value: "patentFilledDate",
      },
      {
        label: "Patent Published Date",
        type: "date",
        value: "patentPublishedDate",
      },
      {
        label: "Patent Granted Date",
        type: "date",
        value: "patentGrantedDate",
      },
      {
        label: "Patent Published Number",
        type: "text",
        value: "patentPublishedNumber",
      },
      {
        label: "Patent Granted Number",
        type: "text",
        value: "patentGrantedNumber",
      },
      {
        label: "Assignee Name",
        type: "text",
        value: "assigneeName",
      },
    ],
  },
  {
    section: 3, // Set section to 3 for development programme data
    items: [
      {
        label: "Faculty Name",
        type: "text",
        value: "name",
      },
      {
        label: "Title of Programme",
        type: "text",
        value: "titleOfProgramme",
      },
      {
        label: "Duration of Programme (From)",
        type: "date",
        value: "durationOfProgramme.from",
      },
      {
        label: "Duration of Programme (To)",
        type: "date",
        value: "durationOfProgramme.to",
      },
    ],
  },
];

export default questions;
