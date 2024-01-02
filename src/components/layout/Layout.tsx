import React, { ReactNode } from "react";
import Header from "./Header/Header";
import styles from "./Layout.module.scss";
import Shelf from "../Shelf/Shelf";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="my-auto pb-12">
        <Shelf />

        {/* {children} */}
      </div>
    </div>
  );
};

export default Layout;
