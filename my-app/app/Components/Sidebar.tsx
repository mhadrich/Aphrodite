import Link from "next/link";

export default function Sidebar () {
    return(
        <div className="w-56 h-80 flex-col justify-start items-start  gap-5 ml-16 inline-flex mt-[-2px] lg:left-0 p-2">
        <Link href="/AllProducts">Makeup</Link>
        <Link href="/AllProducts">Parfumes</Link>
        <Link href="/AllProducts">Hygiene</Link>
        <Link href="/AllProducts">Skin Care</Link>
        <Link href="/AllProducts">Hair Care</Link>
      </div>
    )
}