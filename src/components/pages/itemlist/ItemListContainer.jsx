import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => console.log(res))
      .catch(console.log(err));
  }, []);

  return (
    <div>
      <h1>Estoy en el SHOP</h1>
    </div>
  );
};
