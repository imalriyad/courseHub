import { useState } from "react";
import Card from "./Card.Jsx";
import { useEffect } from "react";
import Cart from "./Cart";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

// add course name trough select button
  const [infoCart,setName] = useState([])
  const handleSelect = (info) => {
      const newName = [...infoCart,info]
      setName(newName)
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
          <Cart infoCart={infoCart}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
