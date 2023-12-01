import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Estoy en el SHOP</h1>

      {products.map((product) => {
        return (
          <Link key={product.id}>
            <div style={{ border: "2px solid black" }}>
              <img src={product.image} style={{ width: "200px" }} alt="" />
              <h4>{product.title}</h4>
              <h4>{product.unit_price}</h4>
              <h4>{product.stock}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
