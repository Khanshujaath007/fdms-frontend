import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import SelectFields from "./SelectFields";
import styles from "./AdminPanel.module.css";

const AdminPanel = () => {
  const user = {
    name: "Tejas",
    email: "tejas@example.com",
    profilePicture: null,
  };

  const menuItems = [
    { label: "Home", component: null },
    { label: "View All Faculty details", component: null },
    { label: "Create a dynamic template", component: SelectFields },
    { label: "Logout", component: null },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const SelectedComponent =
    menuItems.find((item) => item.label === selectedMenuItem)?.component ||
    null;

  return (
    <>
      <div className={styles["side-content"]}>
        <LeftMenu
          dashboardTitle="My Dashboard"
          user={user}
          menuItems={menuItems}
          onItemClick={handleMenuItemClick}
        />
        <div className={styles["main-content"]}>
          {SelectedComponent && <SelectedComponent />}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
