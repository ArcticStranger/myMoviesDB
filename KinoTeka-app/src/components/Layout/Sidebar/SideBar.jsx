import { Drawer } from "antd";
import { drawerStyles } from "../../../styles/drawerStyles.js";

export default function SideBar({ isOpen, onClose, title = "Меню", children }) {
  return (
    <Drawer
      title={title}
      placement="right"
      size="large"
      open={isOpen}
      onClose={onClose}
      styles={drawerStyles}
    >
      {children}
    </Drawer>
  );
}
