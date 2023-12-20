import { SlUser } from "react-icons/sl";
import { IoBagOutline } from "react-icons/io5";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.column}>
        <h1>Hello</h1>
      </div>

      <div className={styles.column}>
        <button>Books</button>
        <button>AudioBooks</button>
      </div>
      <div className={styles.column}>
        <div className="pr-4 justify-between">
          <button>
            <SlUser color="#36454F" size={25} />
          </button>
          <button>
            <IoBagOutline color="#36454F" size={25} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
