// export default function AllProducts() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">

//       AllProducts

//     </main>
//   );
// }

// components/AllProducts.js
// components/AllProducts.tsx
"use client"
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  ratings:Number;
  price: number;
  imageUrl: string | null;
}

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/products');
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h2>{product.description}</h2>
          <p>{product.price}</p>
          <p>{product.ratings.toString()}</p>
          {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
