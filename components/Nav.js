import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.links}>
        <li className={navStyles.links__items}>
          <Link href="/">Home</Link>
        </li>
        <li className={navStyles.links__items}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
