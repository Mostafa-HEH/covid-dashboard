import SearchIcon from "../../icons/search";
import BellIcon from "../../icons/bell";
import DonateIcon from "../../icons/donate";

import classes from "./styles.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.search}>
        <label htmlFor="search">
          <SearchIcon />
        </label>
        <input type="text" id="search" placeholder="Search Anything…." />
      </div>
      <div className={classes.noti}>
        <span className={classes.oval} />
        <BellIcon />
      </div>
      <a href="#" className={classes.button}>
        <span>
          <DonateIcon />
        </span>
        <span>Donate for Covid-19</span>
      </a>
    </header>
  );
};

export default Header;
