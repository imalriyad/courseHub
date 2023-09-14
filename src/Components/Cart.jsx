import PropTypes from "prop-types"; // ES6
const Cart = ({ infoCart, credit, price, remainingCredit }) => {
 
  return (
    <div className=" bg-white rounded-lg py-6 mx-4">
      <h1 className="text-[#2F80ED] font-bold text-xl">
        Credit Hour Remaining {remainingCredit} hours
      </h1>
      <hr className="my-4 mx-4" />
      <div className="text-left ml-7">
        <h1 className="text-[#1C1B1B] font-bold text-xl my-2">Course Name:</h1>
        {infoCart.map((item) => {
          return (
            <li key={item.id} className="list-decimal bg-gray-100 rounded-md p-2 mt-2 list-inside mr-5">
              {item.courseTitle}
            </li>
          );
        })}
         <hr className="border-[1px] border-gray-100 mt-5 mx-auto"/>
        <div className="mt-2 text-lg font-semibold">
          Total Credit Hour : {credit} Hours
        </div>
        <div className="text-lg font-semibold">Total Price : ${price} USD</div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  infoCart: PropTypes.array,
  credit: PropTypes.number,
  remainingCredit: PropTypes.number,
  price: PropTypes.number,
};

export default Cart;
