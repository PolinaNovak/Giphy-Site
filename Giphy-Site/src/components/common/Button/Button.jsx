import styles from "./styles.module.css";

export default function Button({ children, className = "", onClick }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
