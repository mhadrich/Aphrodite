import Link from "next/link";

export default function LargeImage() {
return (
    <div className="w-[1140px] h-[500px] relative bg-black">
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
  </div>)
}