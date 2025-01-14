import styles from "./styles.module.css";

const Button = ({ children, className = "", onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
