import Layout from '@/components/layout';
import styles from '@/styles/contact.module.css';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contact}>
        <div className={styles.contactBox}>
          <h1 className={styles.contactInfo}>
            Email:{' '}
            <a
              className={styles.contactLink}
              href="mailto:dreamandbuild@lukeyamasaki.com"
              target="_blank"
              rel="noreferrer"
            >
              DreamAndBuild@lukeyamasaki.com
            </a>
          </h1>
          <h1 className={styles.contactInfo}>
            Phone:{' '}
            <a className={styles.contactLink} href="tel:7209498111" target="_blank" rel="noreferrer">
              (720) 949-8111
            </a>
          </h1>
        </div>
      </section>
    </Layout>
  );
}
