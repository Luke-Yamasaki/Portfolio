'use client';
import Link from "next/link";
import Image from "next/image";

//Components
import { NavLinks } from "./navLinks";
import { HamburgerMenu } from "./hamburgerMenu";

//CSS
import styles from '@/styles/navigation.module.css';

export const NavBar = ({ visited }: { visited: boolean }) => {
  return (
    <nav className={visited ? styles.regNav : styles.welcomeNav}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${styles.navLogo}`}>
          <Link href="/" className={styles.homeLink}>
            <div className={styles.logoBox}>
              <Image
                priority
                className={styles.logo}
                src="/images/LKY_Logo.png"
                height={30}
                width={30}
                alt="Luke Yamasaki's logo"
              />
              <div className={styles.logoType}>LUKE YAMASAKI</div>
            </div>
          </Link>
        </li>
        <li className={`${styles.navItem} ${styles.navMenu}`}>
          <HamburgerMenu />
        </li>
        <li className={`${styles.navItem} ${styles.navLinks}`}>
          <NavLinks />
        </li>
      </ul>
    </nav>
  );
};

