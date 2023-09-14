import ProductCard from "./ProductCard";
import Stopwatch from "./Stopwatch";
import ViewAllProdButton from "./ViewAllProdButton";

export default function Sidebar() {
  return (
    <div className="flex-col justify-center items-start gap-6 inline-flex">
      <div className="justify-start items-center gap-4 inline-flex">
        <div className="w-5 h-10 bg-red-500 rounded" />
        <p className="text-red-500 text-base font-semibold leading-tight">
          Today's
        </p>
      </div>
      <div className="inline-flex gap-5">
        <p className="text-4xl font-semibold tracking-wider">FlashSales</p>
        <div className="relative top-[-11px]">
          <Stopwatch />
        </div>
      </div>
      <div className="inline-flex gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
