import Link from "next/link";

export default function Categories() {
  return (
    <div className="w-97 h-80  flex-col  ml-1 mr-20 justify-start items-start gap-14 inline-flex">
      <div className="justify-start  mr-19 items-end gap-96 ">
        <div className="flex-col justify-start items-start gap-5 inline-flex ml-32">
          <div className="justify-start  items-center gap-5 ">
            <div className="w-5 h-10 relative">
              <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
            </div>
            <div className="text-red-500 text-base font-semibold leading-tight">
              Categories
            </div>
            <div className="text-black text-2xl font-semibold leading-10 tracking-wider">
              Browse-By-Category
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-7 inline-flex  mt-14 ml-36">
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
    </div>
  );
}
