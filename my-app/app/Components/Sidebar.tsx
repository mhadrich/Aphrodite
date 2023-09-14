import Link from "next/link";
import { useEffect, useState } from "react";
import AllProducts from "../AllProducts/page";

interface Props {
  data: [];
}

export default function Sidebar (props:Props) {
  const { data } = props;
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  console.log('the godamn data',query);

  useEffect(()=>{
    setFiltered(data.filter((elem)=>elem.category===query))
  },[query])

  return(
    <div className="w-56 h-80 flex-col justify-start items-start  gap-5  inline-flex">
      <Link onClick={()=>setQuery('Makeup')} className="hover:text-red-500" href="/AllProducts">Makeup</Link>
      <Link onClick={()=>setQuery('Perfumes')} className="hover:text-red-500" href="/AllProducts">Perfumes</Link>
      <Link onClick={()=>setQuery('Hygiene')} className="hover:text-red-500" href="/AllProducts">Hygiene</Link>
      <Link onClick={()=>setQuery('Skin Care')} className="hover:text-red-500" href="/AllProducts">Skin Care</Link>
      <Link onClick={()=>setQuery('Hair Care')} className="hover:text-red-500" href="/AllProducts">Hair Care</Link>
      <div className="opacity-0"><AllProducts dataz={filtered}/></div>
    </div>
  )
}