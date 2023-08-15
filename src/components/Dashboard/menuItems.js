const userId = localStorage.getItem("userId");

const menuItems = [
  { label: "FacultyHome", to: `/faculty/home/${userId}` },
  { label: "View Profile", to: `/faculty/view-profile/${userId}` },
  // { label: "Add Publication", to: "/faculty/add-publication"},
  // { label: "Add Patent", to: "/faculty/add-patent" },
  { label: "Edit/Update Profile", to: `/faculty/edit-profile/${userId}` },
  { label: "Logout", to: "/logout" },
];

export default menuItems;
