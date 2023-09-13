import Link from "next/link";

export default function Categories() {
  return (
    <div className="w-96 h-28 justify-start items-end  ml-[-690px]  inline-flex">
      <div className="  items-start gap-5   mr-96 ">
        <div className="justify-start  gap-4 inline-flex">
          <div className="w-5 h-10 relative">
            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
          </div>
          <div className="text-red-500 text-base font-semibold leading-tight">
            Our Products
          </div>
        </div>
        <div className="text-black w-3 text-2xl inline font-semibold leading-20 tracking-wider">
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
  );
}
