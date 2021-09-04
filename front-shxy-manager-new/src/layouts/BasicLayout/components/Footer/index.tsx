import styles from './index.module.scss';

export default function Footer() {
    return (
        <p className={styles.footer}>
            <span className={styles.logo}>广州市中小学教师继续教育网</span>
            <br />
            <span className={styles.copyright}>gzteacher@gzedu.net</span>
        </p>
    );
}
