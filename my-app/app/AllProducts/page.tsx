'use client'
import ProductCard from "../Components/ProductCard";

// interface Image {
//   url: string;
// }

// interface Product {
//   name: string;
//   images: Image[];
// }

interface Props{
  dataz:[]
}

function AllProducts(props:Props) {
  const { dataz } = props;
  console.log('filtered data',props);
  
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("api/products");
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching the products", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20">
      <div className="inline-grid grid-cols-4 gap-6">
        {dataz.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </main>
  );
}

export default AllProducts;
