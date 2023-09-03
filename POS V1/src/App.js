import ReactDOM from "react-dom";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import OverLay from "./Components/UI/OverLay";
import Modal from "./Components/UI/Modal/Modal";
import { useState } from "react";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [itemList, setItemList] = useState([]);
  const overlayTrueState = (e) => {
    setOverlay(e);
  };
  const overlayFalseState = (e) => {
    setOverlay(e);
  };
  const allItemHandler = (e) => {
    setItemList((prevItems) => [e, ...prevItems]);
  };

  return (
    <>
      {overlay
        ? ReactDOM.createPortal(
            <OverLay onFalseOverlay={overlayFalseState} />,
            document.getElementById("overlay")
          )
        : ""}
      {overlay
        ? ReactDOM.createPortal(
            <Modal onGetAllItem={allItemHandler} />,
            document.getElementById("overlay")
          )
        : ""}

      <Header onTrueOverlay={overlayTrueState} />
      <Main itemList={itemList} />
    </>
  );
}

export default App;
