import classes from "./NewItemForm.module.css";
import { useRef } from "react";

const DUMMY_CATEGORY = [
  { id: 1, category: "Health" },
  { id: 2, category: "Beauty" },
  { id: 3, category: "Electronic Device" },
  { id: 4, category: "Fashion" },
  { id: 5, category: "Home and Life Style" },
];

const NewItemForm = (props) => {
  const refItemName = useRef();
  const refItemCat = useRef();
  const refItemQty = useRef();
  const refItemPrice = useRef();

  const newItemFormHandler = (e) => {
    e.preventDefault();
    const itemCat = refItemCat.current.value;
    const itemPrice = refItemPrice.current.value;
    const itemQty = refItemQty.current.value;
    const itemName = refItemName.current.value;
    if (
      itemCat.length > 0 &&
      itemName.length > 0 &&
      itemPrice.length > 0 &&
      itemQty.length > 0
    ) {
      const newItem = {
        itemId: Math.random(),
        itemCat: itemCat,
        itemName: itemName,
        itemPrice: itemPrice,
        itemQty: itemQty,
      };
      props.onNewItemData(newItem);
    }

    refItemCat.current.value = "";
    refItemPrice.current.value = "";
    refItemQty.current.value = "";
    refItemName.current.value = "";
  };

  return (
    <form
      action=""
      className={classes["new-item-form"]}
      onSubmit={newItemFormHandler}
    >
      <label htmlFor="item-cat">Category Name</label>
      <select name="" id="item-cat" ref={refItemCat}>
        {DUMMY_CATEGORY.map((cat) => (
          <option value={cat.id} key={cat.id}>
            {cat.category}
          </option>
        ))}
      </select>
      <label htmlFor="item-name">Item Name</label>
      <input type="text" id="item-name" ref={refItemName} />
      <label htmlFor="item-price">Price</label>
      <input type="number" id="item-price" ref={refItemPrice} />
      <label htmlFor="item-qty">Quantity</label>
      <input type="number" id="item-qty" ref={refItemQty} />
      <button className={classes.btn}>Confirm</button>
    </form>
  );
};
export default NewItemForm;
