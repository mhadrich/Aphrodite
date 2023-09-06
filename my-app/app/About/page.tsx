import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <NavBar />
      {/* MAP */}
      <div className="mt-10 mr-100 h-5 justify-start items-center gap-3 inline-flex">
        <div className="opacity-50 text-black text-sm font-normal leading-tight">
          Home
        </div>
        <div className="opacity-50 text-black text-sm font-normal leading-tight">
          /
        </div>
        <div className="text-black text-sm font-normal leading-tight">
          About
        </div>
      </div>
      {/* MAP */}
      {/* OUR STORY */}
      <div className="mt-5 mb-20 w-96 h-96 justify-center items-center gap-20 inline-flex">
        <div className="w-96 h-80 flex-col justify-start items-start gap-10 inline-flex">
          <div className="text-justify text-black text-5xl font-semibold leading-10 tracking-widest">
            Our Story
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-96 text-black text-base font-normal leading-relaxed">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </div>
            <div className="w-96 text-black text-base font-normal leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </div>
        </div>
        <img
          className="w-96 h-96"
          src="https://fian-indonesia.org/wp-content/uploads/2020/01/makeup-banner-kit.jpg"
        />
      </div>
      {/* OUR STORY */}
      {/* STATS */}
      <div  className="w-96 h-56 justify-start items-start gap-7 inline-flex">
        {/* BG COLOR DIV */}
        <div className="px-12 py-7 rounded border border-black border-opacity-30 justify-center items-center flex hover:bg-red-500">
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <div className="w-20 h-20 left-0 top-0 absolute">
                <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full hover:bg-gray-400" />
                <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full hover:bg-white" />
              </div>
              <div className="w-10 h-10 px-1 py-1 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                <svg
                  className="w-8 h-7 relative"
                  width="35"
                  height="32"
                  viewBox="0 0 35 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.6417 1H24.9883L25.8217 9.33333C25.8217 9.33333 27.4883 11 29.9883 11C31.3007 11.0017 32.5685 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7788 9.30156C33.8225 9.16596 33.831 9.02145 33.8033 8.88167L32.6267 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1063 1.08404 31.8778 1.00024 31.6417 1V1Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M24.9883 1L25.8217 9.33333C25.8217 9.33333 24.155 11 21.655 11C19.155 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z"
                    stroke="#FAFAFA"
                    stroke-width="2"
                  />
                  <path
                    d="M17.4883 1V9.33333C17.4883 9.33333 15.8217 11 13.3217 11C10.8217 11 9.155 9.33333 9.155 9.33333L9.98833 1H17.4883Z"
                    stroke="#FAFAFA"
                    stroke-width="2"
                  />
                  <path
                    d="M9.98833 1H3.33667C3.09999 0.999912 2.87095 1.08377 2.69029 1.23666C2.50963 1.38955 2.38905 1.60157 2.35 1.835L1.175 8.88333C1.14754 9.02311 1.15607 9.16758 1.19981 9.30315C1.24354 9.43873 1.32103 9.56095 1.425 9.65833C1.97166 10.1417 3.19333 11.0017 4.98833 11.0017C7.48833 11.0017 9.155 9.335 9.155 9.335L9.98833 1.00167V1Z"
                    stroke="#FAFAFA"
                    stroke-width="2"
                  />
                  <path
                    d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11"
                    stroke="#FAFAFA"
                    stroke-width="2"
                  />
                  <path
                    d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.643C20.6202 18.0178 19.7724 17.6667 18.8883 17.6667H15.555C14.671 17.6667 13.8231 18.0178 13.198 18.643C12.5729 19.2681 12.2217 20.1159 12.2217 21V31"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-miterlimit="16"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-3 flex">
              <p className="text-black text-3xl font-bold leading-loose tracking-wider">
                10.5k
              </p>
              <p className="text-center text-black text-base font-normal leading-normal">
                Sallers active our site
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* STATS */}
      <Footer />
    </main>
  );
}
