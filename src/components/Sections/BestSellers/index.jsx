import { useEffect, useState } from "react";
import Card from "../../Card";

const BestSellers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then(shopData => setData(shopData));
  },[])
  const itemsToDisplay = data.slice(0, 5);

  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div className="text-4xl text-center">Best Sellers</div>
      <div className="w-full flex justify-center mt-4">
        <div className="bg-red-600 w-16 h-1"></div>
      </div>

      <div className="grid grid-cols-5 mt-10">
        {itemsToDisplay.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
