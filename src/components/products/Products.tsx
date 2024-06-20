import axios from "axios";
import React, { useEffect, useState } from "react";
import "../products/Products.css";

interface ProductSchema {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  university: string;
}

const Products: React.FC = () => {
  let API: string = "https://dummyjson.com";
  let [productData, setProductData] = useState<null | ProductSchema[]>(null);
  useEffect(() => {
    axios
      .get(`${API}/users`, { params: { limit: 4, skip: 10 } })
      .then((res) => setProductData(res.data.users))
      .catch((err) => console.log(err));
  }, []);
  let product: JSX.Element[] | undefined = productData?.map(
    (e: ProductSchema) => (
      <div key={e.id} className="product_card">
        <div className="user_image">
          <img width={255} height={255} src={e.image} alt="product" />
        </div>
        <h3>
          {e.firstName} {e.lastName}
        </h3>
        <p>{e.university}</p>
      </div>
    )
  );
  return (
    <div className="products">
      <div className="container">
        <div className="product_contents">
          <h2>Meet our team</h2>
          <div className="product_cards">{product}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
