"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "./Components/ProductCard";
import Services from "../app/About/Components/Services";
import HPCarousel from "./Components/Carousel";
import Stopwatch from "./Components/Stopwatch";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5 gap-5">
      <div className="mt-[-60px]"></div>

      {/*first container*/}
      <div className="container mx-auto  px-4 flex items-center">
        <div className="w-56 h-80 flex-col justify-start items-start  gap-5 ml-16 inline-flex mt-[-2px] lg:left-0 p-2">
          <Link href="/AllProducts">Makeup</Link>
          <Link href="/AllProducts">Parfumes</Link>
          <Link href="/AllProducts">Hygiene</Link>
          <Link href="/AllProducts">Skin Care</Link>
          <Link href="/AllProducts">Hair Care</Link>
        </div>
        <HPCarousel />
      </div>
      {/*first container*/}

      {/*flash sales container*/}

      <div className="container2 absolute left-12 justify-start ml-[48px] top-[500px]">
        <div className="w-96 h-24 justify-start items-end gap-96 inline-flex ml-5">
          <div className="h-24 flex-col justify-start items-start gap-6 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-10 relative left-3">
                <div className="w-5 h-10 left-0 top-2 absolute bg-red-500 rounded" />
              </div>
              <div className="text-red-500 text-base font-semibold leading-tight">
                Today's
              </div>
            </div>
            <div className="text-black text-4xl font-semibold leading-10 tracking-wider">
              FlashSales
            </div>
          </div>

          <div className="inline-flex ml-[-270px] text-1xl gap-7 font-semibold mb-16">
            <p>Days</p>
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>
          <div className="ml-72  absolute  top-4">
            <Stopwatch />
          </div>
        </div>
      </div>

      {/*flash sales container*/}

      <div className="mt-[150px]"></div>

      {/*btn view all products*/}
      <Link href="/AllProducts">
        <div className="w-60 h-14 px-12 py-4 bg-red-500 mt-10 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-base font-medium leading-normal">
            View All Products
          </div>
        </div>
      </Link>
      {/*btn view all products*/}

      {/*horizontal line*/}
      <hr className="w-[1170px]  mt-12 h-px rotate-180 opacity-30 border border-black" />
      {/*horizontal line*/}

      <div className="mt-[20px]"></div>
      {/*categories */}
      <div className="w-97 h-80  flex-col  ml-1 mr-20 justify-start items-start gap-14 inline-flex">
        <div className="justify-start  mr-19 items-end gap-96 inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="justify-start  items-center gap-4 inline-flex">
              <div className="w-5 h-10 relative">
                <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
              </div>
              <div className="text-red-500 text-base font-semibold leading-tight">
                Categories
              </div>
            </div>
            <div className="text-black text-2xl font-semibold leading-10 tracking-wider">
              Browse-By-Category
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-7 inline-flex ">
          {/*makeup  cart*/}
          <Link href="/AllProducts" className="group">
            <div className="w-44 h-36 px-14 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-end gap-4 inline-flex group-hover:bg-red-500">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
              <div className="text-black  text-base font-normal leading-normal gap-5 ">
                <img
                  className="w-16 h-16 group-hover:invert"
                  src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/38/beauty_hand_drawn_icon_illustration_-12-512.png"
                  alt=""
                />
                <p className="text-black group-hover:text-white">Makeup</p>
              </div>
            </div>
          </Link>
          {/*makeup cart */}
          {/*SkinCare Cart*/}
          <Link href="/AllProducts" className="group">
            <div className="w-44 h-36 px-10 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex group-hover:bg-red-500">
              <div className="w-12 h-14 relative flex-col justify-start items-start flex" />
              <div className="text-black text-base font-normal leading-normal">
                <img
                  className="w-16 h-16 group-hover:invert"
                  src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/40/beauty_hand_drawn_icon_illustration_-14-512.png"
                  alt=""
                />
                <p className="text-black group-hover:text-white">Skin Care</p>
              </div>
            </div>
          </Link>
          {/*SkinCare Cart*/}
          {/*haircare Cart*/}
          <Link href="/AllProducts" className="group">
            <div className="w-44 h-36 pl-8 pr-9 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex group-hover:bg-red-500">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <div className="w-40 h-3 justify-start items-end gap-1 inline-flex"></div>
              </div>
              <div className="text-black mt-[-8px] text-base font-normal leading-normal">
                <img
                  className="w-16 h-16  ml-4 group-hover:invert"
                  src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/43/beauty_hand_drawn_icon_illustration_-13-512.png"
                  alt=""
                />
                <p className="text-black group-hover:text-white ml-4">
                  HairCare{" "}
                </p>
              </div>
            </div>
          </Link>
          {/*haircare Cart*/}
          {/*hygiene Cart*/}
          <Link href="/AllProducts" className="group">
            <div className="w-44 h-36 pl-8 pr-9 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex group-hover:bg-red-500">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex" />

              <div className="text-black text-base font-normal leading-normal">
                <img
                  className="w-16 h-16  group-hover:invert"
                  src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/42/beauty_hand_drawn_icon_illustration_-15-512.png"
                ></img>
                <p className="text-black group-hover:text-white">Hygiene</p>
              </div>
            </div>
          </Link>
          {/*hygiene Cart*/}
          {/*parfume Cart*/}
          <Link href="/AllProducts" className="group">
            <div className="w-44 h-36 pl-8 pr-9 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-5 inline-flex group-hover:bg-red-500">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex" />
              <div className="text-black text-base font-normal leading-normal">
                <img
                  className="w-16 h-16 ml-4 group-hover:invert"
                  src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/37/beauty_hand_drawn_icon_illustration_-22-512.png"
                  alt=""
                />
                <p className="text-black group-hover:text-white ml-4">
                  Parfumes
                </p>
              </div>
            </div>
          </Link>
          {/*parfume Cart*/}
        </div>
      </div>

      {/*categories */}

      {/*horizontal line*/}
      <hr className="w-[1170px]  mt-12 h-px rotate-180 opacity-30 border border-black" />
      {/*horizontal line*/}
      <div className="mt-[20px]"></div>

      <div className="mt-[10px]"></div>
      {/*this month */}
      <div className="flex-col ml-[-800px] justify-start  items-start gap-3 inline-flex">
        <div className="justify-start inline-flex items-center gap-4 inline-flex">
          <div className="w-5 h-10 relative">
            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
          </div>
          <div className="text-red-500 text-base font-semibold leading-tight">
            This Month
          </div>
        </div>
        <Link href="/AllProducts">
          <div className="w-40 h-14 absolute  right-[96px] px-12 py-4 bg-red-500 rounded items-center gap-3 ">
            <div className="text-neutral-50 text-base font-medium leading-normal">
              View All
            </div>
          </div>
        </Link>
        <div className="text-black text-2xl font-semibold leading-10 tracking-wider">
          Best Selling Products
        </div>
      </div>
      <div className="inline-flex gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/*this month */}

      <div className="mt-[40px]"></div>

      {/* large image */}
      <div className="w-[1170px] h-[500px] relative bg-black">
        <div className="w-96 h-96 left-[552px] top-0 absolute opacity-30 bg-zinc-300 rounded-full blur-3xl" />
        <div className="w-96 left-[56px] top-[121px] absolute text-white text-5xl font-semibold leading-10 tracking-widest">
          Get Your Unique Parfum
        </div>
        <div className="left-[56px] top-[273px] absolute justify-start items-start gap-6 inline-flex">
          <div className="w-16 h-16 relative">
            <div className="w-16 h-16 left-0 top-0 absolute bg-white rounded-full" />
            <div className="left-[15px] top-[14px] absolute flex-col justify-start items-center inline-flex">
              <div className="text-black text-base font-semibold leading-tight">
                23
              </div>
              <div className="w-8 text-black text-xs font-normal leading-none">
                Hours
              </div>
            </div>
          </div>
          <div className="w-16 h-16 relative">
            <div className="w-16 h-16 left-0 top-0 absolute bg-white rounded-full" />
            <div className="left-[17px] top-[14px] absolute flex-col justify-start items-center inline-flex">
              <div className="text-black text-base font-semibold leading-tight">
                05
              </div>
              <div className="w-7 text-black text-xs font-normal leading-none">
                Days
              </div>
            </div>
          </div>
          <div className="w-16 h-16 relative">
            <div className="w-16 h-16 left-0 top-0 absolute bg-white rounded-full" />
            <div className="h-8 left-[10px] top-[14px] absolute flex-col justify-start items-center inline-flex">
              <div className="text-black text-base font-semibold leading-tight">
                59
              </div>
              <div className="w-11 text-black text-xs font-normal leading-none">
                Minutes
              </div>
            </div>
          </div>
          <div className="w-16 h-16 relative">
            <div className="w-16 h-16 left-0 top-0 absolute bg-white rounded-full" />
            <div className="h-8 left-[7px] top-[14px] absolute flex-col justify-start items-center inline-flex">
              <div className="text-black text-base font-semibold leading-tight">
                35
              </div>
              <div className="w-12 text-black text-xs font-normal leading-none">
                Seconds
              </div>
            </div>
          </div>
        </div>
        <Link href="/AllProducts">
          <div className="px-12 py-4 left-[56px] top-[375px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-base font-medium leading-normal">
              Buy Now!
            </div>
          </div>
        </Link>
        <div className="left-[56px] top-[69px] absolute text-red-500 text-base font-semibold leading-tight">
          Categories
        </div>
        <div className="mt-[50px] ml-[500px]  w-90px">
          <img
            className="border-opacity-100"
            src="https://media.istockphoto.com/id/537507182/photo/perfume.jpg?s=612x612&w=0&k=20&c=uxlWVVB6JD_Vt4-Ss1EfseslCiSVs01AtCyegeuNOdU="
            alt=""
          />
        </div>
      </div>
      {/* large image */}

      <div className="mt-[200px]"></div>

      {/* our Products */}
      <div className="w-96 h-28 justify-start items-end mt-[1px] ml-[-760px] gap-198 inline-flex">
        <div className="flex-col  items-start gap-5 inline-flex  mr-96 ">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 relative">
              <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
            </div>
            <div className="text-red-500 text-base font-semibold leading-tight">
              Our Products
            </div>
          </div>
          <div className="text-black w-3 text-3xl inline font-semibold leading-20 tracking-wider">
            Explore Our Products
          </div>
        </div>



        <div className="  ml-96 mr-[10px]  gap-2 flex  object-left">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
            <path
              d="M22 16L15 23L22 30M15 23H31"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
            <path
              d="M14.5 23H31M31 23L24 16M31 23L24 30"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
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
      <Link href="AllProducts">
        <div className="w-60 h-14 px-12 py-4 bg-red-500  mt-5 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-base font-medium leading-normal">
            View All Products
          </div>
        </div>
      </Link>
      {/* our Products */}
      <div className="mt-[200px]"></div>

      {/*New arrival */}
      <div className="w-96 h-96 flex-col justify-start mt-[-100px] ml-[-660px] items-start gap-14 inline-flex">
        <div className="flex-col justify-start  ml-0 items-start gap-5 flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 relative">
              <div className="w-5 h-10 left-0 top-0  bg-red-500 rounded" />
            </div>
            <div className="text-red-500 text-base font-semibold leading-tight">
              Featured
            </div>
          </div>
          <div className="text-black text-4xl font-semibold leading-10 tracking-wider">
            New Arrival
          </div>
        </div>
      </div>
      <div className="inline flex gap-16 justify-center item-center mr-[-150px]">
        <div className="object-top-left mr-50 mt-[-250px] ml-[-250px]">
          <img
            className=" ml-[100px] "
            src="https://img.freepik.com/photos-gratuite/bouteille-parfum-mot-parfum-dessus_1340-37484.jpg"
          />
        </div>

        <div className="flex flex-col">
          <div className=" mr-50 mt-[-250px] ml-[-50px]">
            <img
              className=" ml-[15px] w-[450px] h-[300px]"
              src="https://cdn.shopify.com/s/files/1/0502/9393/2199/files/RD_Forever_Mood_Gamme_750x620_89691c93-0576-4e87-9f51-fe7312825e95.jpg?v=1692761458"
            />
          </div>
          <div className="inline-flex gap-16 mt-[270px]">
            <div className=" mr-30 mt-[-250px] ml-[-50px]">
              <img
                className=" ml-[15px] w-[210px] h-[305px]"
                src="https://media-afr-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F42343%2F42343_3.png%3Fversion%3D1620376200&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30"
              />
            </div>
            <div className=" mr-30 mt-[-250px] ml-[-50px]">
              <img
                className=" ml-[15px] w-[210px] h-[305px]"
                src="https://media-afr-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F42343%2F42343_3.png%3Fversion%3D1620376200&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30"
              />
            </div>
          </div>
        </div>
      </div>
      {/*New arrival */}

      {/*Services  */}
      <div className="-mt-44">
        <Services />
      </div>
      {/*Services  */}

      <div className="mt-[96px]"></div>
    </main>
  );
}
