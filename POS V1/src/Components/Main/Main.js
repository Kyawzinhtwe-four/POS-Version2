import classes from "./Main.module.css";
import Card from "../UI/Card";
import Items from "./Items";
import CartItem from "./CartItem";
import Total from "./Total";
import { useState } from "react";

const Main = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const totalPriceArr = cartItems.map((item) => +item.itemPrice);
  const totalAmount = totalPriceArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const cartItemObjHandler = (e) => {
    setCartItems((prevCartArr) => [e, ...prevCartArr]);
  };

  return (
    <main className={classes.main}>
      <Card className={classes["left-section"]}>
        <Items
          itemList={props.itemList}
          onGetCartItemObj={cartItemObjHandler}
        />
      </Card>
      <Card className={classes["right-section-top"]}>
        <CartItem cartItems={cartItems} />
      </Card>
      <Total totalAmount={totalAmount} />
    </main>
  );
};
export default Main;
