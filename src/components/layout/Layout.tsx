import Header from "./Header/Header";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default Layout;
