import SelectFields from "./SelectFields";

const menuItems = [
    { label: "Home", to: "/faculty/home" },
    { label: "View Profile", to: "/faculty/view-profile", component: SelectFields},
    { label: "Add Publication or Patent", to: "/faculty/add-publication" },
    { label: "Edit/Update Profile", to: "/faculty/edit-profile", component: SelectFields },
    { label: "Logout", to: "/logout" },
];

export default menuItems;