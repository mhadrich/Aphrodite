"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "./Components/ProductCard";
import Image from "next/image";
import image from "../assets/image1.jpg";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState<number>(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <div className="mt-[-60px]"></div>
      {/*first container*/}
      <div className="container mx-auto  px-4 flex items-center">
        <div className="w-56 h-80 flex-col justify-start items-start gap-4 inline-flex mt-[-2px] lg:left-0 p-2">
          <Link href="/">Makeup</Link>
          <Link href="/">Parfumes</Link>
          <Link href="/">Hygiene</Link>
          <Link href="/">Skin Care</Link>
          <Link href="/">Hair Care</Link>
        </div>

        <div>
          <Image
            className="object-contain mr-9 w-[-1500px] h-[400px] ml-9 h-80 "
            src={image}
            alt="Beauty products"
          />
        </div>
      </div>
      {/*first container*/}

      {/*flash sales container*/}

      <div className="container2  absolute left-12 justify-start top-[600px]">
        <div className="w-96 h-24 justify-start items-end gap-96 inline-flex ml-5">
          <div className="top-3 left-0 items-end gap-20 flex">
            <div className="h-24 flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 relative left-3">
                  <div className="w-5 h-10 left-0 top-2 absolute bg-red-500 rounded" />
                </div>
                <div className="text-red-500 text-base font-semibold leading-tight">
                  Today's
                </div>
              </div>
              <div className="text-black text-2xl font-semibold leading-10 tracking-wider">
                FlashSales
              </div>
            </div>
            <div className="w-72 h-12 relative">
              <div className="w-11 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-8 text-black text-xs font-medium leading-none">
                  Days
                </div>
                <div className="w-11 h-7 text-black text-3xl font-bold leading-loose tracking-wider">
                  06
                </div>
              </div>
              <div className="w-10 h-12 left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-9 text-black text-xs font-medium leading-none">
                  Hours
                </div>
                <div className="text-black text-3xl font-bold leading-loose tracking-wider">
                  20
                </div>
              </div>
              <div className="w-12 h-12 left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-12 text-black text-xs font-medium leading-none">
                  Minutes
                </div>
                <div className="w-10 h-7 text-black text-3xl font-bold leading-loose tracking-wider">
                  24
                </div>
              </div>
              <div className="w-12 h-12 left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-12 text-black text-xs font-medium leading-none">
                  Seconds
                </div>
                <div className="text-black text-3xl font-bold leading-loose tracking-wider">
                  55
                </div>
              </div>
              <div className="left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-1 h-1 bg-red-400 rounded-full" />
                <div className="w-1 h-1 bg-red-400 rounded-full" />
              </div>
              <div className="left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-1 h-1 bg-red-400 rounded-full" />
                <div className="w-1 h-1 bg-red-400 rounded-full" />
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-2 flex">
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
      </div>

      {/*flash sales container*/}

      <div className="mt-[400px]"></div>
      {/*cart*/}
      <div className="inline-flex gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/*cart*/}
      <div className="mt-[20px]"></div>

      {/*btn view all products*/}
      <div className="w-60 h-14 px-12 py-4 bg-red-500 mt-20 rounded justify-center items-center gap-2.5 inline-flex">
        <div className="text-neutral-50 text-base font-medium leading-normal">
          View All Products
        </div>
      </div>
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
          <div className="justify-start ml-35 mr-50 items-start gap-1 flex">
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
        <div className="justify-start items-start gap-7 inline-flex">
          <div className="w-44 h-36 px-14 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-end gap-4 inline-flex">
            <div className="w-14 h-14 relative flex-col justify-start items-start flex"></div>
            <div className="text-black  text-base font-normal leading-normal">
              <img
                src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/38/beauty_hand_drawn_icon_illustration_-12-512.png"
                alt=""
              />
              Makeup
            </div>
          </div>
          <div className="w-44 h-36 px-10 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
            <div className="w-14 h-14 relative flex-col justify-start items-start flex" />
            <div className="text-black text-base font-normal leading-normal">
              <img
                src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/40/beauty_hand_drawn_icon_illustration_-14-512.png"
                alt=""
              />
              Skin Care
            </div>
          </div>
          <div className="w-44 h-36 pl-8 pr-9 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
            <div className="w-14 h-14 relative flex-col justify-start items-start flex">
              <div className="w-2.5 h-3 justify-start items-end gap-1 inline-flex"></div>
            </div>
            <div className="text-black mt-[-8px] text-base font-normal leading-normal">
              <img
                src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/43/beauty_hand_drawn_icon_illustration_-13-512.png"
                alt=""
              />
              Hair Care
            </div>
          </div>

          <div className="w-44 h-36 pl-8 pr-9 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
            <div className="w-14 h-14 relative flex-col justify-start items-start flex" />

            <div className="text-black text-base font-normal leading-normal">
              <img src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/42/beauty_hand_drawn_icon_illustration_-15-512.png"></img>
              Hygiene
            </div>
          </div>
          <div className="w-44 h-36 pl-8 pr-9 py-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
            <div className="w-14 h-14 relative flex-col justify-start items-start flex" />
            <div className="text-black text-base font-normal leading-normal">
              <img
                src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/37/beauty_hand_drawn_icon_illustration_-22-512.png"
                alt=""
              />
              Parfumes
            </div>
          </div>
        </div>
      </div>

      {/*categories */}

      {/*horizontal line*/}
      <hr className="w-[1170px]  mt-12 h-px rotate-180 opacity-30 border border-black" />
      {/*horizontal line*/}
      <div className="mt-[20px]"></div>

      <div className="mt-[50px]"></div>
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
        <div className="w-40 h-14 left-3 right-3 px-12 py-4 bg-red-500 rounded  items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-base font-medium leading-normal">
            View All
          </div>
        </div>
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
        <div className="w-96 left-[56px] top-[121px] absolute text-black text-5xl font-semibold leading-10 tracking-widest">
          Enhance Your Music Experience
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
        <div className="px-12 py-4 left-[56px] top-[375px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-base font-medium leading-normal">
            {" "}
            <Link href="/Cart"> Buy Now! </Link>{" "}
          </div>
        </div>
        <div className="left-[56px] top-[69px] absolute text-red-500 text-base font-semibold leading-tight">
          Categories
        </div>
        <div className="mt-37 ml-526">
          <img
            src="https://media.istockphoto.com/id/537507182/photo/perfume.jpg?s=612x612&w=0&k=20&c=uxlWVVB6JD_Vt4-Ss1EfseslCiSVs01AtCyegeuNOdU="
            alt=""
          />
        </div>
      </div>

      {/* large image */}

      <div className="mt-[200px]"></div>

      {/* our Products */}
      <div className="w-96 h-28 justify-start items-end mt-[1px] ml-[-760px] gap-196 inline-flex">
        <div className="flex-col justify-start items-start gap-5 inline-flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 relative">
              <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
            </div>
            <div className="text-red-500 text-base font-semibold leading-tight">
              Our Products
            </div>
          </div>
          <div className="text-black text-3xl inline font-semibold leading-20 tracking-wider">
            Explore Our Products
          </div>
        </div>
        <div className="justify-start items-start ml-20 gap-2 flex">
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
      <div className="w-60 h-14 px-12 py-4 bg-red-500  mt-5 rounded justify-center items-center gap-2.5 inline-flex">
        <div className="text-neutral-50 text-base font-medium leading-normal">
          <Link href="AllProducts"> View All Products </Link>
        </div>
      </div>
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
      <div
        className="--tw-border-opacity: 1;
        border-color: rgba(17, 24, 39, var(--tw-border-opacity))"
      >
        <img src="https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/378124/1.jpg?4483" />
      </div>

      {/*New arrival */}
      <div className="mt-[200px]"></div>
      {/*livraison */}

      {/*livraison */}

      <div className="mt-[200px]"></div>
    </main>
  );
}
