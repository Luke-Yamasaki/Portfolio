'use client';
//Context
import { useVisited } from '@/context/index';
//Components
import { NavBar } from './navbar';
//CSS
import styles from '@/styles/layout.module.css';
//Lottie
import Lottie from 'react-lottie-player';
import openingLottie from '@/animation/data.json';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const { visited } = useVisited();

  return (
    <div className={styles.landing}>
      {home ? (
        <>
          {!visited && (
            <div className={styles.anim}>
              <Lottie
                animationData={openingLottie}
                play
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
              />
            </div>
          )}
          <NavBar visited={visited} />
          <main className={visited ? styles.homeMain : styles.welcomeMain}>{children}</main>
        </>
      ) : (
        <>
          <NavBar visited={visited} />
          <main className={styles.projectsContainer}>{children}</main>
        </>
      )}
    </div>
  );
}

