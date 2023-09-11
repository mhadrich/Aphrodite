// export default function AllProducts() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">

//       AllProducts

//     </main>
//   );
// }


"use client"
import React, { useEffect, useState } from 'react';

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
        const response = await fetch('api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the products', error);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product, productIndex) => (
        <div key={productIndex}>
          <h2>{product.name}</h2>
          {product.images.map((image, imageIndex) => (
            <img key={imageIndex} src={image.url} alt={`${product.name} ${imageIndex + 1}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
