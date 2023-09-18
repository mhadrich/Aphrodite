// import ProductCard from "../Components/ProductCard";



// export default function Wishlist() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
//       <ProductCard />
//     </main>
//   );
// }
 



"use client"
import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import{ GET} from '../api/whishlist/route'; // Import the API route function
// import { Product } from '@prisma/client';

// Update the Product type definition
interface image {
  id : number;
  url : string;
  productId : number
}

interface Product {
  id: number;
  name: string;
  ratings: number | null;
  description: string | null;
  category: string;
  status: boolean;
  price: number;
  images: image[]; // Add the images property
}

export default function Wishlist() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const addToFavorites = (product: Product) => {
    if (!favorites.some((favProduct) => favProduct.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (product: Product) => {
    const updatedFavorites = favorites.filter(
      (favProduct) => favProduct.id !== product.id
    );
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    setLoading(true);

    // Fetch data from the API route using the fetch function
    fetch("/api/wishlist/route")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        setFavorites(data); // Set the fetched favorite items in state
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <h1 className="text-2xl font-semibold mb-4">My Wishlist</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
         {favorites.map((product) => (
  <ProductCard
    key={product.id}
    product={product} 
    isFavorite={favorites.some((favProduct) => favProduct.id === product.id)}
    onToggleFavorite={() => {
      if (favorites.some((favProduct) => favProduct.id === product.id)) {
        removeFromFavorites(product);
      } else {
        addToFavorites(product);
      }
    }}
  />
))}
        </div>
      )}
      <div className="mt-4">
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              {product.name}
              <button
                onClick={() => removeFromFavorites(product)}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
