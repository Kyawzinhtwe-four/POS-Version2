import SingleItem from "./SingleItem.js";
const Items = (props) => {
  const cartItemDataHandler = (e) => {
    props.onGetCartItemObj(e);
  };
  return (
    <>
      {props.itemList.map((item) => (
        <SingleItem
          key={props.itemId}
          itemId={item.itemId}
          itemName={item.itemName}
          itemPrice={item.itemPrice}
          itemCat={item.itemCat}
          onGetCartitemData={cartItemDataHandler}
        />
      ))}
    </>
  );
};
export default Items;
