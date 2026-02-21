import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/design.module.css';

export const metadata = {
  title: 'Development',
};

export default function Development() {
  return (
    <Layout>
      <section className={styles.projects}>
        <h1 className={styles.projectTitle}>Full-stack web applications</h1>
        <div className={styles.projectBox}>
          <a
            className={`${styles.designProject} ${styles.devOne}`}
            href="https://mealize.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={styles.projectImages}
              src="/images/Mealize.png"
              width={425}
              height={425}
              alt="Mealize"
            />
          </a>
          <a
            className={`${styles.designProject} ${styles.devTwo}`}
            href="https://find-table.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={styles.projectImages}
              src="/images/FindTable.png"
              width={425}
              height={425}
              alt="FindTable"
            />
          </a>
          <a
            className={`${styles.designProject} ${styles.devThree}`}
            href="https://aa-cooknook.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={styles.projectImages}
              src="/images/CookNook.png"
              width={425}
              height={425}
              alt="CookNook"
            />
          </a>
          <a
            className={`${styles.designProject} ${styles.devFour}`}
            href="https://shuttr-aa.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={styles.projectImages}
              src="/images/Shuttr.png"
              width={425}
              height={425}
              alt="Shuttr"
            />
          </a>
        </div>
      </section>
    </Layout>
  );
}
