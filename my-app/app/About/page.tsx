import Link from "next/link";
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
      <div className="w-screen mt-5 mb-20 w-96 h-96 justify-center items-center gap-20 inline-flex">
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
      <div className="mb-20 w-100 h-56 justify-start items-start gap-7 inline-flex">
        {/* 1 */}
        <div className="group w-[300px] h-[300px]">
          <div className="px-12 py-7 rounded border border-black border-opacity-30 justify-center items-center flex group-hover:bg-red-500 group-hover:drop-shadow-xl">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute">
                  <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full group-hover:bg-gray-400" />
                  <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-white" />
                </div>
                <div className="w-10 h-10 px-1 py-1 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                  <svg
                    className="w-8 h-7 relative group-hover:invert"
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
                <p className="text-black text-3xl font-bold leading-loose tracking-wider group-hover:invert">
                  10.5k
                </p>
                <p className="text-center text-black text-base font-normal leading-normal group-hover:invert">
                  Brands and Items
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 1 */}
        {/* 2 */}
        <div className="group w-[300px] h-[300px]">
          <div className="px-12 py-7 rounded border border-black border-opacity-30 justify-center items-center flex group-hover:bg-red-500 group-hover:drop-shadow-xl">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute">
                  <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full group-hover:bg-gray-400" />
                  <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-white" />
                </div>
                <div className="w-10 h-10 px-1 py-1 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                  <svg
                    className="w-8 h-8 relative group-hover:invert"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 37.2727C29.5395 37.2727 37.2727 29.5395 37.2727 20C37.2727 10.4605 29.5395 2.72726 20 2.72726C10.4605 2.72726 2.72728 10.4605 2.72728 20C2.72728 29.5395 10.4605 37.2727 20 37.2727Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M25.0909 14.547C24.7615 13.9758 24.283 13.5049 23.7065 13.1847C23.13 12.8646 22.4773 12.7071 21.8182 12.7293H18.1818C17.2174 12.7293 16.2925 13.1123 15.6105 13.7941C14.9286 14.4758 14.5455 15.4005 14.5455 16.3647C14.5455 17.3288 14.9286 18.2535 15.6105 18.9352C16.2925 19.617 17.2174 20 18.1818 20H21.8182C22.7826 20 23.7075 20.383 24.3895 21.0648C25.0714 21.7465 25.4545 22.6712 25.4545 23.6353C25.4545 24.5995 25.0714 25.5241 24.3895 26.2059C23.7075 26.8877 22.7826 27.2707 21.8182 27.2707H18.1818C17.5227 27.2928 16.87 27.1354 16.2935 26.8152C15.717 26.4951 15.2385 26.0242 14.9091 25.453"
                      stroke="white"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 8.18182V12.1212M20 27.8788V31.8182"
                      stroke="white"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-3 flex">
                <p className="text-black text-3xl font-bold leading-loose tracking-wider group-hover:invert">
                  30k
                </p>
                <p className="text-center text-black text-base font-normal leading-normal group-hover:invert">
                  Mounthly sales
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        {/* 3 */}
        <div className="group w-[300px] h-[300px]">
          <div className="px-12 py-7 rounded border border-black border-opacity-30 justify-center items-center flex group-hover:bg-red-500 group-hover:drop-shadow-xl">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute">
                  <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full group-hover:bg-gray-400" />
                  <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-white" />
                </div>
                <div className="w-10 h-10 px-1 py-1 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                  <svg
                    className="w-8 h-7 relative group-hover:invert"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6667 11.6667V8.33333C11.6667 7.36812 11.9461 6.42356 12.4711 5.61364C12.9961 4.80373 13.7444 4.16309 14.6255 3.76906C15.5066 3.37503 16.4829 3.24444 17.4366 3.39307C18.3903 3.5417 19.2806 3.96319 20 4.60666C20.7194 3.96319 21.6097 3.5417 22.5634 3.39307C23.5171 3.24444 24.4934 3.37503 25.3745 3.76906C26.2556 4.16309 27.0039 4.80373 27.5289 5.61364C28.0539 6.42356 28.3333 7.36812 28.3333 8.33333V11.6667H30.8333C31.4964 11.6667 32.1323 11.9301 32.6011 12.3989C33.0699 12.8677 33.3333 13.5036 33.3333 14.1667V30.8417C33.3333 32.3865 32.7196 33.8682 31.6272 34.9606C30.5348 36.053 29.0532 36.6667 27.5083 36.6667H13.3333C11.5652 36.6667 9.86954 35.9643 8.61929 34.714C7.36905 33.4638 6.66667 31.7681 6.66667 30V14.1667C6.66667 13.5036 6.93006 12.8677 7.3989 12.3989C7.86775 11.9301 8.50363 11.6667 9.16667 11.6667H11.6667ZM22.725 34.1667C22.0451 33.1913 21.6815 32.0306 21.6833 30.8417V14.1667H9.16667V30C9.16667 30.5472 9.27445 31.089 9.48384 31.5945C9.69323 32.1 10.0001 32.5594 10.3871 32.9463C10.774 33.3332 11.2333 33.6401 11.7388 33.8495C12.2443 34.0589 12.7862 34.1667 13.3333 34.1667H22.725ZM19.1667 11.6667V8.33333C19.1667 7.67028 18.9033 7.0344 18.4344 6.56556C17.9656 6.09672 17.3297 5.83333 16.6667 5.83333C16.0036 5.83333 15.3677 6.09672 14.8989 6.56556C14.4301 7.0344 14.1667 7.67028 14.1667 8.33333V11.6667H19.1667ZM21.6667 11.6667H25.8333V8.33333C25.8334 7.81872 25.6746 7.31663 25.3787 6.8956C25.0828 6.47457 24.6642 6.15511 24.18 5.98082C23.6958 5.80654 23.1696 5.78593 22.6733 5.9218C22.1769 6.05767 21.7346 6.3434 21.4067 6.73999C21.575 7.23999 21.6667 7.77666 21.6667 8.33333V11.6667ZM24.1833 30.8417C24.1833 31.7235 24.5337 32.5692 25.1572 33.1928C25.7808 33.8163 26.6265 34.1667 27.5083 34.1667C28.3902 34.1667 29.2359 33.8163 29.8595 33.1928C30.483 32.5692 30.8333 31.7235 30.8333 30.8417V14.1667H24.1833V30.8417Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-3 flex">
                <p className="text-black text-3xl font-bold leading-loose tracking-wider group-hover:invert">
                  45k
                </p>
                <p className="text-center text-black text-base font-normal leading-normal group-hover:invert">
                  Active customers in our site
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        {/* 4 */}
        <div className="group w-[300px] h-[300px]">
          <div className="px-12 py-7 rounded border border-black border-opacity-30 justify-center items-center flex group-hover:bg-red-500 group-hover:drop-shadow-xl">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute">
                  <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full group-hover:bg-gray-400" />
                  <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-white" />
                </div>
                <div className="w-10 h-10 px-1 py-1 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                  <svg
                    className="w-8 h-7 relative group-hover:invert"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9275 18.1456V18.6456L21.4275 18.6456C22.0912 18.6456 22.7386 18.8514 23.2806 19.2346C23.8226 19.6178 24.2324 20.1596 24.4537 20.7853C24.4723 20.8382 24.4804 20.8942 24.4774 20.9501C24.4744 21.0062 24.4604 21.0611 24.4362 21.1117C24.412 21.1623 24.3781 21.2077 24.3363 21.2452C24.2946 21.2827 24.2459 21.3117 24.193 21.3303C24.1401 21.349 24.084 21.3571 24.0279 21.3541C23.9719 21.3511 23.917 21.3371 23.8664 21.3129C23.7641 21.2641 23.6855 21.1766 23.6477 21.0697L23.6477 21.0694C23.4853 20.6104 23.1845 20.213 22.7869 19.9319C22.3893 19.6509 21.9143 19.5 21.4273 19.5001L20.9275 19.5003V20.0001V23.7092V24.2092H21.4275C22.2786 24.2092 23.0948 24.5473 23.6966 25.1491C24.2984 25.7509 24.6365 26.5671 24.6365 27.4182C24.6365 28.2693 24.2984 29.0856 23.6966 29.6874C23.0948 30.2892 22.2786 30.6273 21.4275 30.6273H20.9275V31.1273V31.5545H20.0729V31.1273V30.6273L19.5729 30.6273C18.9092 30.6273 18.2618 30.4215 17.7198 30.0383C17.1779 29.6551 16.768 29.1133 16.5467 28.4876L16.5469 28.4875L16.5418 28.4744C16.5213 28.4211 16.5116 28.3642 16.5134 28.3071C16.5153 28.25 16.5285 28.1939 16.5524 28.142C16.5763 28.0901 16.6104 28.0435 16.6526 28.005C16.6948 27.9665 16.7443 27.9369 16.7982 27.9178C16.852 27.8988 16.9092 27.8908 16.9662 27.8942C17.0232 27.8976 17.079 27.9125 17.1302 27.9378C17.1814 27.9632 17.2269 27.9986 17.2642 28.0419C17.3015 28.0851 17.3297 28.1355 17.3472 28.1898L17.3495 28.1969L17.352 28.2039C17.6765 29.1186 18.548 29.7728 19.5729 29.7728H20.0729V29.2728V25.5637V25.0637H19.5729C18.7218 25.0637 17.9056 24.7256 17.3038 24.1238C16.702 23.522 16.3639 22.7058 16.3639 21.8547C16.3639 21.0036 16.702 20.1873 17.3038 19.5855C17.9056 18.9837 18.7218 18.6456 19.5729 18.6456H20.0729V18.1456V17.7184H20.9275V18.1456ZM20.0729 20.0001V19.5001H19.5729C18.9485 19.5001 18.3496 19.7482 17.908 20.1898C17.4665 20.6313 17.2184 21.2302 17.2184 21.8547C17.2184 22.4791 17.4665 23.078 17.908 23.5196C18.3496 23.9611 18.9485 24.2092 19.5729 24.2092H20.0729V23.7092V20.0001ZM20.9275 29.2728V29.7728H21.4275C22.0519 29.7728 22.6508 29.5247 23.0924 29.0831C23.5339 28.6416 23.782 28.0427 23.782 27.4182C23.782 26.7938 23.5339 26.1949 23.0924 25.7533C22.6508 25.3118 22.0519 25.0637 21.4275 25.0637H20.9275V25.5637V29.2728Z"
                      fill="#FAFAFA"
                      stroke="#FAFAFA"
                    />
                    <path
                      d="M27.7695 12.5772L28.0001 12.8202C29.8981 14.821 31.4858 17.0947 32.7105 19.5658L32.7115 19.5677C33.9873 22.1703 34.7037 24.8133 34.5867 27.13L34.5867 27.1301C34.4723 29.3912 33.5716 31.3572 31.5218 32.8059L31.5218 32.806C29.4129 34.296 25.9467 35.3335 20.5354 35.3335C15.1198 35.3335 11.6397 34.3141 9.51316 32.8421L9.51293 32.842C7.44943 31.4119 6.53763 29.472 6.41014 27.2373L27.7695 12.5772ZM27.7695 12.5772L27.457 12.698M27.7695 12.5772L27.457 12.698M27.457 12.698C23.1083 14.3797 17.8707 14.3797 13.5219 12.6998L13.3417 13.1662L12.9752 12.8261C11.1573 14.7855 9.46566 17.1897 8.25095 19.6928L8.25091 19.6929M27.457 12.698L8.25091 19.6929M8.25091 19.6929C6.98037 22.3123 6.2784 24.9431 6.41013 27.2371L8.25091 19.6929ZM30.3428 6.18135C30.7832 6.3992 31.1642 6.60756 31.4775 6.79425L28.3457 11.3725L28.114 11.7111L28.4009 12.0044C30.3394 13.9861 32.1697 16.5163 33.4805 19.1919C34.7935 21.8721 35.5679 24.6624 35.441 27.1735C35.3151 29.6637 34.3054 31.8862 32.0163 33.5035C29.7051 35.1363 26.0382 36.1881 20.5364 36.1881C15.0332 36.1881 11.3544 35.1551 9.02802 33.5441C6.72448 31.9489 5.6991 29.7543 5.55803 27.2856C5.41571 24.7951 6.17576 22.0152 7.48354 19.3201C8.7889 16.6299 10.6229 14.0598 12.5812 11.9992L12.8589 11.7071L12.6323 11.3737L9.52247 6.79788C9.67984 6.70518 9.8536 6.60743 10.043 6.50653L10.043 6.50653L10.0447 6.50561C10.2353 6.40313 10.4408 6.29764 10.6614 6.1901L10.8573 6.09455C13.1034 5.02398 16.6645 3.80942 20.5364 3.80942C24.4385 3.80942 27.9975 5.0428 30.2165 6.12003L30.3412 6.18054C30.3417 6.18081 30.3423 6.18108 30.3428 6.18135ZM29.7117 7.86174L30.2968 7.00632L29.2631 7.08075C26.6696 7.26748 23.6003 7.87476 20.6554 8.72737C18.6714 9.30053 16.4387 9.21926 14.3339 8.83103C13.8046 8.7329 13.279 8.6161 12.758 8.48083L11.4726 8.14709L12.2188 9.24571L13.9991 11.8671L14.091 12.0023L14.245 12.0572C18.1692 13.4543 22.7996 13.4542 26.7245 12.0591L26.5571 11.588L26.9698 11.8703L29.7117 7.86174ZM14.4877 7.99043L14.4881 7.99051C16.523 8.36532 18.6079 8.42976 20.4168 7.90579L20.4175 7.90558C22.3859 7.33213 24.388 6.88113 26.4122 6.55517L26.4768 5.58276C24.7353 5.05842 22.6905 4.66394 20.5354 4.66394C17.2536 4.66394 14.2063 5.57784 12.08 6.48032L10.8004 7.02344L12.1328 7.41982C12.8897 7.64498 13.6821 7.84129 14.4877 7.99043Z"
                      fill="#FAFAFA"
                      stroke="#FAFAFA"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-3 flex">
                <p className="text-black text-3xl font-bold leading-loose tracking-wider group-hover:invert">
                  25k
                </p>
                <p className="text-center text-black text-base font-normal leading-normal group-hover:invert">
                  Annual gross sale in our site
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
      </div>
      {/* STATS */}
      {/* TEAM */}
      <div className="w-screen p-24 h-96 justify-start items-start gap-5 inline-flex">
        {/* AHLEM */}
        <div className="w-96 h-96 flex-col justify-start items-start gap-2 inline-flexq">
          <img src="https://media.licdn.com/dms/image/D5603AQGh2swep-WeEw/profile-displayphoto-shrink_800_800/0/1679521802821?e=2147483647&v=beta&t=yNaDyr9jfb7RurvSs0Dlb47sFeJu56G8i4qCxsGPlDs" />
          <div className="flex-col justify-start items-start gap-2 flex">
            <p className="text-black text-3xl font-medium leading-loose tracking-wider">
              Ahlem Selmi
            </p>
            <p className="text-black text-base font-normal leading-normal">
              Scrum Sensei
            </p>
            <div className="justify-start items-start gap-3 inline-flex">
              <Link href="https://www.facebook.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_facebook-1024.png"
                />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Instagram-1024.png"
                />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_LinkedIn-1024.png"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* OUMA */}
        <div className="w-96 h-96 flex-col justify-start items-start gap-2 inline-flex">
          <img src="https://media.licdn.com/dms/image/D4E03AQGdLSwh4hD1XQ/profile-displayphoto-shrink_800_800/0/1669902582467?e=2147483647&v=beta&t=yQVnW9cCJWpTsB7GFA5VxSf5B6pXzdmSv-Sx0-3XB8Q" />
          <div className="flex-col justify-start items-start gap-2 flex">
            <p className="text-black text-3xl font-medium leading-loose tracking-wider">
              Ouma
            </p>
            <p className="text-black text-base font-normal leading-normal">
              3rd in the fam
            </p>
            <div className="justify-start items-start gap-3 inline-flex">
              <Link href="https://www.facebook.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_facebook-1024.png"
                />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Instagram-1024.png"
                />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_LinkedIn-1024.png"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* GHAZI */}
        <div className="w-96 h-96 flex-col justify-start items-start gap-2 inline-flex">
          <img src="https://img.ifunny.co/images/7338743b41d089bb48e22452ff6c5a5297c6b39c2c1c4ca818be770173615bb9_1.jpg" />
          <div className="flex-col justify-start items-start gap-2 flex">
            <p className="text-black text-3xl font-medium leading-loose tracking-wider">
              Ghazi Bentini
            </p>
            <p className="text-black text-base font-normal leading-normal">
              Came late
            </p>
            <div className="justify-start items-start gap-3 inline-flex">
              <Link href="https://www.facebook.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_facebook-1024.png"
                />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Instagram-1024.png"
                />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_LinkedIn-1024.png"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* MALEK */}
        <div className="w-96 h-96 flex-col justify-start items-start gap-2 inline-flex">
          <img src="https://media.licdn.com/dms/image/D4E03AQG-2KOmnx4wQA/profile-displayphoto-shrink_800_800/0/1676026445864?e=2147483647&v=beta&t=dKX55fHtcqbM9ZJ8Bq4eUKvmYJxdzVQhzBzU-a7JVQY" />
          <div className="flex-col justify-start items-start gap-2 flex">
            <p className="text-black text-3xl font-medium leading-loose tracking-wider">
              Malek Hadrich
            </p>
            <p className="text-black text-base font-normal leading-normal">
              Blasphemous
            </p>
            <div className="justify-start items-start gap-3 inline-flex">
              <Link href="https://www.facebook.com" target="_blank">
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_facebook-1024.png"
                />
              </Link>
              <Link
                href="https://www.instagram.com/whityxx/?hl=en"
                target="_blank"
              >
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Instagram-1024.png"
                />
              </Link>
              <Link
                href="https://tn.linkedin.com/in/malek-hadrich-ba820141"
                target="_blank"
              >
                <img
                  className="w-6 h-6 relative"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_LinkedIn-1024.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* TEAM */}
      {/* SERVICES */}
      <div className="pt-96 w-screen h-40 justify-center items-center gap-20 inline-flex">
        {/* 1 */}
        <div className="group">
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
              <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-red-500" />
              <svg
                className="w-10 h-10 left-[18px] top-[18px] absolute"
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_585)">
                  <path
                    d="M12.1667 31.6667C14.0076 31.6667 15.5 30.1743 15.5 28.3333C15.5 26.4924 14.0076 25 12.1667 25C10.3257 25 8.83334 26.4924 8.83334 28.3333C8.83334 30.1743 10.3257 31.6667 12.1667 31.6667Z"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.83331 28.3335H7.49998C6.39541 28.3335 5.49998 27.4381 5.49998 26.3335V21.6668M3.83331 8.3335H20.1666C21.2712 8.3335 22.1666 9.22893 22.1666 10.3335V28.3335M15.5 28.3335H25.5M32.1667 28.3335H33.5C34.6046 28.3335 35.5 27.4381 35.5 26.3335V18.3335M35.5 18.3335H22.1666M35.5 18.3335L31.0826 10.9712C30.7211 10.3688 30.0701 10.0002 29.3676 10.0002H22.1666"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 28H7.16667C6.0621 28 5.16667 27.1046 5.16667 26V21.3333M3.5 8H19.8333C20.9379 8 21.8333 8.89543 21.8333 10V28M15.5 28H25.1667M32.5 28H33.1667C34.2712 28 35.1667 27.1046 35.1667 26V18M35.1667 18H21.8333M35.1667 18L30.7493 10.6377C30.3878 10.0353 29.7368 9.66667 29.0343 9.66667H21.8333"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5 11.8182H12.1667"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.31818 15.4545H8.98484"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5 19.0909H12.1667"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_585">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex-col justify-start items-center gap-2 flex">
              <p className="text-black text-xl font-semibold leading-7">
                FREE AND FAST DELIVERY
              </p>
              <p className="text-center text-black text-sm font-normal leading-tight">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="group">
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
              <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-red-500" />
              <svg
                className="w-10 h-10 left-[18px] top-[18px] absolute"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1156_134)">
                  <path
                    d="M13.3337 25.0001C13.3337 23.1591 11.8413 21.6667 10.0003 21.6667C8.15938 21.6667 6.66699 23.1591 6.66699 25.0001V28.3334C6.66699 30.1744 8.15938 31.6667 10.0003 31.6667C11.8413 31.6667 13.3337 30.1744 13.3337 28.3334V25.0001Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33.3337 25.0001C33.3337 23.1591 31.8413 21.6667 30.0003 21.6667C28.1594 21.6667 26.667 23.1591 26.667 25.0001V28.3334C26.667 30.1744 28.1594 31.6667 30.0003 31.6667C31.8413 31.6667 33.3337 30.1744 33.3337 28.3334V25.0001Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66699 25.0001V20.0001C6.66699 16.4639 8.07175 13.0725 10.5722 10.572C13.0727 8.07151 16.4641 6.66675 20.0003 6.66675C23.5365 6.66675 26.9279 8.07151 29.4284 10.572C31.9289 13.0725 33.3337 16.4639 33.3337 20.0001V25.0001"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 31.6667C30 32.9928 28.9464 34.2646 27.0711 35.2023C25.1957 36.14 22.6522 36.6667 20 36.6667"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1156_134">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex-col justify-start items-center gap-2 flex">
              <p className="text-black text-xl font-semibold leading-7">
                24/7 CUSTOMER SERVICE
              </p>
              <p className="text-center text-black text-sm font-normal leading-tight">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="group">
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
              <div className="w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full group-hover:bg-red-500" />
              <svg
                className="w-10 h-10 left-[19px] top-[19px] absolute"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.09943 30.5992L8.0992 30.5991C7.22647 29.9483 6.42586 28.9206 5.84306 27.759C5.26022 26.5973 4.91699 25.3451 4.91699 24.2666V11.8666C4.91699 9.50736 6.67182 6.96177 8.89149 6.13513L8.89245 6.13477L17.2087 3.01826C17.2088 3.01823 17.2089 3.0182 17.2089 3.01817C17.9624 2.73661 18.9619 2.5874 19.9837 2.5874C21.0054 2.5874 22.0049 2.73661 22.7584 3.01817C22.7585 3.0182 22.7585 3.01823 22.7586 3.01826L31.0749 6.13477L31.0758 6.13513C33.2955 6.96177 35.0503 9.50736 35.0503 11.8666V24.2499C35.0503 25.3371 34.7069 26.5892 34.1244 27.7483C33.5419 28.9073 32.7414 29.9313 31.8681 30.5824L31.8679 30.5826L24.7012 35.9326L24.7012 35.9325L24.695 35.9373C23.4123 36.9264 21.7243 37.4332 20.0003 37.4332C18.2777 37.4332 16.5855 36.927 15.2652 35.9486C15.265 35.9484 15.2649 35.9483 15.2647 35.9482L8.09943 30.5992ZM17.7422 4.43145L17.7415 4.4317L9.42487 7.54837L9.42416 7.54863C8.59658 7.86019 7.85535 8.52248 7.32443 9.29061C6.79333 10.059 6.43366 10.9898 6.43366 11.8832V24.2666C6.43366 25.161 6.74424 26.1892 7.20124 27.101C7.65813 28.0126 8.29361 28.8722 9.00118 29.4005L9.00122 29.4006L16.1676 34.7503C17.2296 35.5445 18.6286 35.9249 20.0024 35.9249C21.3764 35.9249 22.7786 35.5445 23.8481 34.7516L23.8494 34.7506L31.0161 29.4006L31.017 29.3999C31.7317 28.8638 32.3672 28.005 32.8225 27.0943C33.2779 26.1837 33.5837 25.16 33.5837 24.2666V11.8666C33.5837 10.9804 33.2232 10.0538 32.6929 9.28645C32.1624 8.51889 31.4226 7.85396 30.5979 7.5338L30.598 7.53376L30.5925 7.5317L22.2758 4.41503L22.2758 4.41495L22.2667 4.41174C21.6286 4.18651 20.8005 4.08314 20.001 4.08532C19.2024 4.0875 18.3755 4.19514 17.7422 4.43145Z"
                  fill="#FAFAFA"
                  stroke="#FAFAFA"
                />
                <path
                  d="M17.4135 21.0536L17.7671 21.4071L18.1206 21.0536L24.4039 14.7703C24.692 14.4822 25.1754 14.4822 25.4635 14.7703C25.7516 15.0583 25.7516 15.5417 25.4635 15.8298L18.2968 22.9965C18.1455 23.1478 17.9583 23.2167 17.7671 23.2167C17.5758 23.2167 17.3886 23.1478 17.2373 22.9965L14.5539 20.3131C14.2659 20.0251 14.2659 19.5417 14.5539 19.2536C14.842 18.9655 15.3254 18.9655 15.6135 19.2536L17.4135 21.0536Z"
                  fill="#FAFAFA"
                  stroke="#FAFAFA"
                />
              </svg>
            </div>
            <div className="flex-col justify-start items-center gap-2 flex">
              <p className="text-black text-xl font-semibold leading-7">
                FREE AND FAST DELIVERY
              </p>
              <p className="text-center text-black text-sm font-normal leading-tight">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <Footer />
    </main>
  );
}
