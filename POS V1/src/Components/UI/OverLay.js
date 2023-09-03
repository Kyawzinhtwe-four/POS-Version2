import classes from "./OverLay.module.css";
const OverLay = (props) => {
  const removeOverLayHandler = () => {
    props.onFalseOverlay(false);
  };
  return (
    <div className={classes["back-drop"]} onClick={removeOverLayHandler}></div>
  );
};
export default OverLay;
