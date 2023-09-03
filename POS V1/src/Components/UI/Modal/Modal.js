import classes from "./Modal.module.css";
import Card from "../Card";
import ModalHeader from "./ModalHeader";
import NewItemForm from "./NewItemForm";
import ModalFooter from "./ModalFooter";
const Modal = (props) => {
  const newItemDataHandler = (e) => {
    props.onGetAllItem(e);
  };
  return (
    <Card className={classes["modal-box"]}>
      <ModalHeader />
      <NewItemForm onNewItemData={newItemDataHandler} />
      <ModalFooter />
    </Card>
  );
};

export default Modal;
