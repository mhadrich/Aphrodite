import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Item from "./Components/Item";

export default function Cart() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5 gap-4">
      <NavBar />
      {/* TITLE BAR */}
      <div className="w-[1170px] h-16 px-10 py-6 bg-white rounded shadow justify-center items-center inline-flex">
        <div className="justify-start items-center gap-72 inline-flex">
          <p className="text-black text-base font-normal leading-normal">
            Product
          </p>
          <p className="text-black text-base font-normal leading-normal">
            Price
          </p>
          <p className="text-black text-base font-normal leading-normal">
            Quantity
          </p>
          <p className="text-black text-base font-normal leading-normal">
            Subtotal
          </p>
        </div>
      </div>
      {/* TITLE BAR */}
      {/* ITEMS */}
      <Item />
      <Footer />
    </main>
  );
}
