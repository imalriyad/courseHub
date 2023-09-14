import PropTypes from "prop-types"; // ES6
const Cart = ({ infoCart }) => {

  return (
    <div className=" bg-white rounded-lg py-6 mx-4">
      <h1 className="text-[#2F80ED] font-bold text-xl">
        Credit Hour Remaining 7 hours
      </h1>
      <hr className="my-4 mx-4" />
      <div className="text-left ml-7">
        <h1 className="text-[#1C1B1B] font-bold text-xl my-2">Course Name:</h1>
       
         {
            infoCart.map((item)=>{
                return  <li key={item.id} className="list-decimal mt-1 list-inside">{item.courseTitle}</li> 
            })
         }
    
      </div>
    </div>
  );
};

Cart.propTypes = {
    infoCart: PropTypes.array,
};

export default Cart;
