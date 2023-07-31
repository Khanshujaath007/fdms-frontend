import LeftMenu from "./LeftMenu";
import SelectFields from "./SelectFields";
import "./AdminPanel.css";
const AdminPanel = () => {
  const user = {
    name: "Tejas",
    email: "tejas@example.com",
    profilePicture: null,
  }
  const menuItems = ["Home", "Profile", "Edit/Update profile", "Logout"];

  return (
    <>
      <div className="side-content">
      <LeftMenu dashboardTitle="My Dashboard" user={user} menuItems={menuItems} />
        <div className="main-content">
          <SelectFields />
        </div>
      </div>
    </>
  );
};
export default AdminPanel;
