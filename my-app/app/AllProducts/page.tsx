// export default function AllProducts() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">

//       AllProducts

//     </main>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

interface Image {
  url: string;
}

interface Product {
  name: string;
  images: Image[];
}

function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching the products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <div className="inline-flex gap-5">
        {products.map((product, productIndex) => (
          <ProductCard key={productIndex} data={product} />
        ))}
      </div>
    </main>
  );
}

export default AllProducts;
