import Link from "next/link";
import Menu from "../Menu/Menu";
import Logo from "../../dumbs/Logo/Logo";
import styles from "./header.module.css";

const Header = () => (
  <div className="wil-container">
    <div className={styles.demo}>
      <Logo />
      <Menu />
    </div>
  </div>
);

export default Header;
