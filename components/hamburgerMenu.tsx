'use client';
import Link from "next/link";
import { useState } from "react";
import { useVisited } from '@/context/index';
import styles from '@/styles/navigation.module.css';

export const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { visited, setVisited } = useVisited();

  const handleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return setShowMenu(!showMenu);
  };

  const handleNavigation = () => {
    if (!visited) {
      sessionStorage.setItem("visited", "true");
      return setVisited(true);
    }
  };

  return (
    <aside
      className={
        showMenu
          ? `${styles.hamburgerContainer} ${styles.shownContainer}`
          : styles.hamburgerContainer
      }
    >
      <div
        className={
          showMenu
            ? `${styles.hamburgerBox} ${styles.shownBox}`
            : styles.hamburgerBox
        }
        onClick={handleMenu}
      >
        <div
          className={
            showMenu
              ? `${styles.hamburgerLine} ${styles.shownOne}`
              : styles.hamburgerLine
          }
        ></div>
        <div
          className={
            showMenu
              ? `${styles.hamburgerLine} ${styles.shownTwo}`
              : styles.hamburgerLine
          }
        ></div>
        <div
          className={
            showMenu
              ? `${styles.hamburgerLine} ${styles.shownThree}`
              : styles.hamburgerLine
          }
        ></div>
      </div>
      <menu
        className={
          showMenu
            ? `${styles.dropDownMenu} ${styles.menuShown}`
            : styles.dropDownMenu
        }
      >
        <Link
          href="/design"
          onClick={handleNavigation}
          className={
            showMenu
              ? `${styles.dropDownLink} ${styles.linkShown}`
              : styles.dropDownLink
          }
        >
          Design
        </Link>
        <Link
          href="/development"
          onClick={handleNavigation}
          className={
            showMenu
              ? `${styles.dropDownLink} ${styles.linkShown}`
              : styles.dropDownLink
          }
        >
          Development
        </Link>
        <Link
          href="/about"
          onClick={handleNavigation}
          className={
            showMenu
              ? `${styles.dropDownLink} ${styles.linkShown}`
              : styles.dropDownLink
          }
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={handleNavigation}
          className={
            showMenu
              ? `${styles.dropDownLink} ${styles.linkShown}`
              : styles.dropDownLink
          }
        >
          Contact
        </Link>
      </menu>
    </aside>
  );
};

