//Next.js
import Link from "next/link";

//Context
import { useVisited } from "../context/index";

//CSS
import styles from "../styles/navigation.module.css";

export const NavLinks = () => {
  const { setVisited } = useVisited();

  const handleNavigation = () => {
    sessionStorage.setItem("visited", "true");
    return setVisited(true);
  };

  return (
    <div className={styles.navLinksBox}>
      <Link
        href="/design"
        onClick={handleNavigation}
        className={styles.navLink}
      >
        Design
      </Link>
      <Link
        href="/development"
        onClick={handleNavigation}
        className={styles.navLink}
      >
        Development
      </Link>
      <Link href="/about" onClick={handleNavigation} className={styles.navLink}>
        About
      </Link>
      <Link
        href="/contact"
        onClick={handleNavigation}
        className={styles.navLink}
      >
        Contact
      </Link>
    </div>
  );
};

