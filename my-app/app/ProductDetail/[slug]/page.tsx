
export default function ProductDetail() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <div className="inline-flex gap-5">
        {/* LEFT IMAGES */}
        <div className="w-28 h-96 flex flex-col gap-5">
          <div>
            <img
              className="w-28 h-28  rounded justify-center items-center border opacity-80 hover:opacity-100"
              src="https://c-co.niceshops.com/upload/image/product/large/default/29272_f54416ea.1024x1024.png"
            />
          </div>
          <div>
            <img
              className="w-28 h-28  rounded justify-center items-center border opacity-80 hover:opacity-100"
              src="https://c-co.niceshops.com/upload/image/product/large/default/xerjoff-erba-pura-eau-de-parfum-392922-fr.png"
            />
          </div>
          <div>
            <img
              className="w-28 h-28  rounded justify-center items-center border opacity-80 hover:opacity-100"
              src="https://c-co.niceshops.com/upload/image/product/large/default/xerjoff-erba-pura-eau-de-parfum-392936-fr.jpg"
            />
          </div>
          <div>
            <img
              className="w-28 h-28  rounded justify-center items-center opacity-80 hover:opacity-100"
              src="https://c-co.niceshops.com/upload/image/product/large/default/xerjoff-erba-pura-eau-de-parfum-392943-fr.jpg"
            />
          </div>
        </div>
        {/* LEFT IMAGES */}
        {/* MAIN IMAGE */}
        <div className="flex">
          <img
            className="w-[507px] h-[507px] rounded"
            src="https://c-co.niceshops.com/upload/image/product/large/default/xerjoff-erba-pura-eau-de-parfum-392943-fr.jpg"
          />
        </div>
        {/* MAIN IMAGE */}
        {/* DETAILS */}
        <div className="w-96 h-96 flex-col justify-center items-center">
          <p className="text-black text-2xl font-semibold leading-normal tracking-wide">
            Smell like a bitch
          </p>
          <p className="opacity-60 text-green-500 text-sm font-normal leading-tight">
            In Stock
          </p>
          <p className="text-black text-2xl font-normal leading-normal tracking-wide pb-4">
            $1920.00
          </p>

          <p className="w-96 text-black text-sm font-normal leading-tight pb-4">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="w-72 h-8 justify-start items-center gap-4 inline-flex">
            <p className="text-black text-xl font-normal leading-tight tracking-wide">
              Size:
            </p>
            <div className="justify-start items-start gap-2 flex">
              <div className="group w-12 h-8 px-1.5 py-1.5 rounded border border-black border-opacity-50 justify-center items-center flex group-hover:bg-red-500 group-hover:border-opacity-0">
                <p className="text-black text-sm font-medium leading-tight group-hover:text-neutral-50">
                  30ml
                </p>
              </div>
              <div className="w-12 h-8 py-1.5 rounded border border-black border-opacity-50 justify-center items-center flex group-hover:bg-red-500 group-hover:border-opacity-0">
                <p className="text-black text-sm font-medium leading-tight group-hover:text-neutral-50">
                  50ml
                </p>
              </div>
              <div className="group w-12 h-8 px-2.5 py-1.5 border border-black border-opacity-50 rounded justify-center items-center flex group-hover:bg-red-500 group-hover:border-opacity-0">
                <p className="text-black text-sm font-medium leading-tight group-hover:text-neutral-50">
                  75ml
                </p>
              </div>
              <div className="w-12 h-8 py-1.5 rounded border border-black border-opacity-50 justify-center items-center flex group-hover:bg-red-500 group-hover:border-opacity-0">
                <p className="text-black text-sm font-medium leading-tight group-hover:text-neutral-50">
                  100ml
                </p>
              </div>
              <div className="w-12 h-8 px-2 py-1.5 rounded border border-black border-opacity-50 justify-center items-center flex group-hover:bg-red-500 group-hover:border-opacity-0">
                <p className="text-black text-sm font-medium leading-tight group-hover:text-neutral-50">
                  200ml
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 h-px opacity-50 justify-center items-center inline-flex">
            <div className="w-96 h-px border border-black"></div>
          </div>
          <div className="w-40 h-11 justify-start items-start inline-flex">
            <div className="w-10 h-11 px-2 py-2.5 rounded-tl rounded-bl border border-black border-opacity-50 flex-col justify-center items-center inline-flex">
              <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
            </div>
            <div className="h-11 py-2 border-t border-b border-black border-opacity-50 justify-center items-center flex">
              <div className="text-black text-xl font-medium leading-7">2</div>
            </div>
            <div className="w-10 h-11 px-2 py-2.5 bg-red-500 rounded-tr rounded-br flex-col justify-center items-center inline-flex">
              <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
            </div>
          </div>
          <div className="w-40 h-11 px-12 py-2.5 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <p className="text-neutral-50 text-base font-medium leading-normal">
              Buy Now
            </p>
          </div>
          <div className="w-10 h-10 p-1 rounded border border-black border-opacity-50 justify-center items-center inline-flex">
            <div className="w-8 h-8 relative flex-col justify-start items-start flex" />
          </div>
          <div className="w-96 h-44 rounded border border-black border-opacity-50">
            <div className="w-96 h-px opacity-50 justify-center items-center inline-flex">
              <div className="w-96 h-px border border-black"></div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative" />
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <p className="text-black text-base font-medium leading-normal">
                  Free Delivery
                </p>
                <p className="text-black text-xs font-medium underline leading-none">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative" />
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-black text-base font-medium leading-normal">
                  Return Delivery
                </div>
                <div>
                  <p className="text-black text-xs font-medium leading-none">
                    Free 30 Days Delivery Returns.{" "}
                  </p>
                  <p className="text-black text-xs font-medium underline leading-none">
                    Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DETAILS */}
      </div>
    </main>
  );
}
