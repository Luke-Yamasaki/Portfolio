import Layout from '@/components/layout';
import styles from '@/styles/design.module.css';

export const metadata = {
  title: 'Design',
};

export default function Design() {
  return (
    <Layout>
      <section className={styles.projects}>
        <h1 className={styles.projectTitle}>Design systems</h1>
        <div className={styles.projectBox}>
          <a
            className={styles.designProject}
            href="https://www.behance.net/gallery/146034665/Ark-Brand-Guidelines"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.designOne}></div>
          </a>
          <a
            className={styles.designProject}
            href="https://www.behance.net/gallery/146037025/Peer-Review-Brand-Identity"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.designTwo}></div>
          </a>
          <a
            className={styles.designProject}
            href="https://www.behance.net/luke_yamasaki"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.designThree}></div>
          </a>
          <a
            className={styles.designProject}
            href="https://www.behance.net/gallery/146037531/SLC-Winter-Olympic-Design-System-Student-Project?tracking_source=project_owner_other_projects"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.designFour}></div>
          </a>
        </div>
      </section>
    </Layout>
  );
}
