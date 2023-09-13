import Link from "next/link";

export default function NavPanel() {
  return(
    <main>
      <div className="w-48 h-72 relative">
          <p className="left-0 top-0 absolute text-black text-base font-medium leading-normal">
            Manage My Account
          </p>
          <p className="left-0 top-[152px] absolute text-black text-base font-medium leading-normal">
            My Orders
          </p>
          <Link
            href="/Wishlist"
            className="w-24 h-6 left-0 top-[264px] absolute text-black text-base font-medium leading-normal"
          >
            My WishList
          </Link>
          <div className="w-40 h-20 left-[35px] top-[40px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <Link
              href="/Account"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              My Profile
            </Link>
            <Link
              href="/Account"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              Address Book
            </Link>
            <Link
              href="/Account"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              My Payment Options
            </Link>
          </div>
          <div className="w-36 h-14 left-[35px] top-[192px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <Link
              href="/Cart"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              My Returns
            </Link>
            <Link
              href="/Cart"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              My Cancellations
            </Link>
          </div>
        </div>
    </main>
  )
}