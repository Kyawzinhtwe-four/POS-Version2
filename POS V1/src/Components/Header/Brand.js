import classes from "./Brand.module.css";
import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
const Brand = (props) => {
  return (
    <Card className={classes.logo}>
      <FontAwesomeIcon icon={faAppleAlt} className={classes["logo-icon"]} />
      <h2 className={classes.title}>My POS</h2>
    </Card>
  );
};
export default Brand;
