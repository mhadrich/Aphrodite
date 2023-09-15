import { PrismaClient } from ".prisma/client";
import ProdDetailView from "./Components/ProdDetailView";

const prisma = new PrismaClient();

const fetchProdById = async (id: number) => {
  try {
    const mainProd = await prisma.product.findFirst({
      where: {
        id,
      },
      include:{
        images:true,
      },
    });
    return mainProd || { 
      id: 0,
      name: "",
      ratings: null,
      description: null,
      category: "",
      status: false,
      price: 0,
      images: [],
    };
  } catch (error) {
    return { 
      id: 0,
      name: "",
      ratings: null,
      description: null,
      category: "",
      status: false,
      price: 0,
      images: [],
    };
  } finally {
    prisma.$disconnect();
  }
};

const fetchProdByCategory = async (category: string) => {
  try {
    const relatedProd = await prisma.product.findMany({
      where: {
        category,
      },
      include:{
        images:true,
      },
    });
    return relatedProd || [];
  } catch (error) {
    return [];
  } finally {
    prisma.$disconnect();
  }
};

interface Image {
  id: number;
  url: string;
  productId: number;
}

interface Product {
  id: number;
  name: string;
  ratings: number | null;
  description: string | null;
  category: string;
  status: boolean;
  price: number;
  images: Image[];
}

interface Props {
  mainProduct: Product | null;
  relatedProducts: Product[] | null;
}

export default async function ProductDetail({ params }: { params: { slug: string }}) {
  const mainProduct = await fetchProdById(parseInt(params.slug));
  const relatedProducts = await fetchProdByCategory(mainProduct?.category || '');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <ProdDetailView mainData={mainProduct} relatedData={relatedProducts}/>
    </main>
  );
}
