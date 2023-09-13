import Link from "next/link";

export default function ThisMonth() {
  return (
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
  );
}
