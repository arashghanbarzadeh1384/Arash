import styles from "./button.module.css";

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: () => void;
}

export default function Button({ href, text, onClick }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={`${styles.button} ${styles["learn-more"]}`}
        onClick={onClick}
      >
        <span className={styles.circle} aria-hidden="true">
          <span className={`${styles.icon} ${styles.arrow}`} />
        </span>
        <span className={styles.buttonText}>{text}</span>
      </a>
    );
  }
  return (
    <button className={`${styles.button} ${styles["learn-more"]}`} onClick={onClick}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`} />
      </span>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}
