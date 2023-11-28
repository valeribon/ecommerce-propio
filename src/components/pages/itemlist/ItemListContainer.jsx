import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        console.log(res.docs);
        console.log(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Estoy en el SHOP</h1>
    </div>
  );
};
