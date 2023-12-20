import Header from "./Header/Header";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default Layout;
