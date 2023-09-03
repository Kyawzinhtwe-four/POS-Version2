import classes from "./Header.module.css";
import Brand from "./Brand";
import SearchInput from "./SearchInput";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Header = (props) => {
  const newItemBtnHandler = () => {
    props.onTrueOverlay(true);
  };
  return (
    <header className={classes.header}>
      <Brand />
      <SearchInput />
      <Button
        className={`${classes.btn} ${classes["newItem-btn"]}`}
        onClick={newItemBtnHandler}
      >
        New Item
      </Button>
      {/* <button className="btn newItem-btn">New Item</button> */}
      <Card className={classes.profile}>
        <img
          src="./img/profile.jpg"
          alt="Seller Profile"
          className={classes["profile-img"]}
        />
      </Card>
    </header>
  );
};
export default Header;
