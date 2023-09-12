"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserDropDown() {
  const [toggle, setToggle] = useState(false);
  const [hide, setHide] = useState("");

  useEffect(() => {
    if (toggle) {
      setHide("");
    } else {
      setHide("hidden");
    }
  }, [toggle]);

  return (
    <main>
      <button
        onClick={() => setToggle(!toggle)}
        className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 "
        type="button"
      >
        <img
          className="w-8 h-8 mr-2 rounded-full"
          src="https://media.licdn.com/dms/image/D4E03AQG-2KOmnx4wQA/profile-displayphoto-shrink_800_800/0/1676026445864?e=2147483647&v=beta&t=dKX55fHtcqbM9ZJ8Bq4eUKvmYJxdzVQhzBzU-a7JVQY"
          alt="user photo"
        />
        <p className="text-black">Malek</p>
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* DROPDOWN MENU */}
      <div className={hide}>
        <div className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <div className="px-4 py-3 text-sm text-gray-900">
            <div className="font-medium ">Malek Hadrich</div>
            <div className="truncate">mhadrich@gmail.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link
                href="./Account"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                My account
              </Link>
            </li>
            <li>
              <Link
                href="./Wishlist"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="./Cart"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Cart
              </Link>
            </li>
          </ul>
          <div className="py-2 hover:bg-red-500 rounded-b-lg">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
      {/* DROPDOWN MENU */}
    </main>
  );
}
