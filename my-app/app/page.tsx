"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "./Components/ProductCard";
import Services from "../app/About/Components/Services";
import HPCarousel from "./Components/Carousel";
import FlashSales from "./Components/FlashSales";
import Sidebar from "./Components/Sidebar";
import ViewAllProdButton from "./Components/ViewAllProdButton";
import Categories from "./Components/Categories"
import ThisMonth from "./Components/ThisMonth";
import LargeImage from "./Components/LargeImage";
import OurProducts from "./Components/OurProducts";
import NewArrival from "./Components/NewArrival";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5 gap-5">
      <div className="mt-[-60px]"></div>

      {/*first container*/}
      <div className="container mx-auto  px-4 flex items-center">
        <Sidebar />
        <HPCarousel />
      </div>
      {/*first container*/}

      {/*flash sales container*/}
      <div className="container2 absolute left-12 justify-start ml-[48px] top-[500px]">
        <FlashSales />
      </div>
      {/*flash sales container*/}

      <div className="mt-[150px]"></div>

      {/*btn view all products*/}
      <ViewAllProdButton />
      {/*btn view all products*/}

      {/*horizontal line*/}
      <hr className="w-[1170px]  mt-12 h-px rotate-180 opacity-30 border border-black" />
      {/*horizontal line*/}

      <div className="mt-[20px]"></div>
      {/*categories */}
        <Categories/>
      {/*categories */}

      {/*horizontal line*/}
      <hr className="w-[1170px]  mt-9 h-px rotate-180 opacity-30 border border-black" />
      {/*horizontal line*/}

      <div className="mt-[20px]"></div>

      <div className="mt-[10px]"></div>
      {/*this month */}
      <ThisMonth/>
      <div className="inline-flex gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/*this month */}

      <div className="mt-[40px]"></div>

      {/* large image */}
     <LargeImage/>
      {/* large image */}

      <div className="mt-[100px]"></div>

      {/* our Products */}
     <OurProducts/>
      <div className="inline-flex  mt-5 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="inline-flex  mt-5 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ViewAllProdButton />
      {/* our Products */}
      
      <div className="mt-[200px]"></div>

      {/*New arrival */}
     <NewArrival/>
      {/*New arrival */}

      {/*Services  */}
      <div className="-mt-[-420px]">
        <Services />
      </div>
      {/*Services  */}

      <div className="mt-[96px]"></div>
    </main>
  );
}
