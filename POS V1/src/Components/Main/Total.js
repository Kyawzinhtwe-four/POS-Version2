import classes from "./Total.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Total = (props) => {
  return (
    <Card className={classes["right-section-bottom"]}>
      <span>Total Amount : </span>
      <span>{props.totalAmount} </span>
      <span> - MMK</span>
      <Button className={classes["btn-buy"]}>Buy</Button>
    </Card>
  );
};
export default Total;
