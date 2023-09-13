import ProductCard from "@/app/Components/ProductCard";
import ProdDetailMain from "./ProdDetailsMain";

interface Image {
  url: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  images: Image[];
}

interface ProductCardProps {
  data: Product;
}

export default function ProdDetailView(props): React.FC<ProductCardProps> {
  const { mainData, relatedData } = props;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <ProdDetailMain data={mainData} />
      {/* RELATED */}
      <div className="absolute left-52 top-[740px] justify-start items-center gap-4 inline-flex">
        <div className="w-5 h-10 bg-red-500 rounded" />
        <p className="text-red-500 text-base font-semibold leading-tight">
          Related Item
        </p>
      </div>
      <div className="pt-32 gap-5 inline-flex">
        {relatedData &&
          relatedData.map((prod) => {
            <ProductCard data={prod} />;
          })}
      </div>
      {/* RELATED */}
    </main>
  );
}
