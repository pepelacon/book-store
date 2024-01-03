import React, { ReactNode } from "react";
import Header from "./Header/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />

      {children}
    </div>
  );
};

export default Layout;
