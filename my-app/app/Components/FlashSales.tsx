import Stopwatch from "./Stopwatch";

export default function Sidebar () {
    return (
        <div className="w-96 h-24 justify-start items-end gap-96 inline-flex ml-10">
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
    )
}