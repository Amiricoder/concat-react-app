import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Concat App</h1>
      <p>
        <a href="#">Contact app</a> | React.js Full Course
      </p>
    </div>
  );
}

export default Header;
