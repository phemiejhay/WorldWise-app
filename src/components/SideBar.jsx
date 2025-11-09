import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./SideBar.module.css";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Copyright by worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
export default SideBar;
