import LeftMenu from "./LeftMenu";
import SelectFields from "./SelectFields";
import "./AdminPanel.css";
const AdminPanel = () => {
  return (
    <>
      <div className="side-content">
        <LeftMenu />
        <div className="main-content">
          <SelectFields />
        </div>
      </div>
    </>
  );
};
export default AdminPanel;
