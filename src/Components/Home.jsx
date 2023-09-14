import { useState } from "react";
import Card from "./Card.Jsx";
import { useEffect } from "react";
import Cart from "./Cart";
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [data, setData] = useState([]);
  const [infoCart, setName] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainingCredit, setRemaingcredit] = useState(20);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // add course name trough select button
  const handleSelect = (info) => {
    const newInfoCart = [...infoCart, info];
    const isExist = infoCart.find((item) => {
      return item.id == info.id;
    });
    if (isExist) {
      return toast.error("You have already purchased this Course!")
    }
    else{
      setName(newInfoCart);
      const newCredit = credit + info.courseCredit;
      setCredit(newCredit);
      const newremainingCredit = remainingCredit - info.courseCredit;
      setRemaingcredit(newremainingCredit);
      const newPrice = price + info.coursePrice;
      setPrice(newPrice);
      return toast.success("You have successfully purchased this Course!")
    }

   
  };
  return (
    <div>
       
      <div className="max-w-screen-2xl lg:flex">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-3/4 my-4">
          {data.map((info) => {
            return (
              <Card key={info.id} info={info} handleSelect={handleSelect} />
            );
          })}
        </div>
        <div className="text-center lg:w-1/4 my-4">
          <Cart
            infoCart={infoCart}
            credit={credit}
            remainingCredit={remainingCredit}
            price={price}
          />
        </div>
      </div>
      <Toaster toastOptions={{
    // Define default options
    className: '',
    duration: 1300,
   

  }}/>
    </div>
  );
};

export default Home;
