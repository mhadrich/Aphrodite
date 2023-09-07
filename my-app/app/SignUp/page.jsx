import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <NavBar />
      <div className="flex gap-6 mx-auto my-10 max-w-screen-lg">
        <div className="w-1/2 flex pt-20 bg-cbe4e8 justify-end items-center rounded-r-md">
          <img
            className="object-cover w-full h-full min-h-full min-w-full rounded-r-md"
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11435/b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg"
            alt="Cosmetics"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-6 p-10 bg-white rounded shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="text-black text-4xl font-medium leading-loose tracking-wider">
              Create an account
            </div>
            <div className="text-black text-base font-normal leading-normal">
              Enter your details below
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {["Name", "Email or Phone Number", "Password"].map((label, idx) => (
              <div className="flex flex-col gap-2" key={idx}>
                <label
                  className="opacity-40 text-black text-base font-normal leading-normal"
                  htmlFor={label}
                >
                  {label}
                </label>
                <input
                  id={label}
                  name={label}
                  type={label === "Password" ? "password" : "text"}
                  className="w-full border-b border-black opacity-50 py-2"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-6">
            <button className="w-full px-32 py-4 bg-red-500 rounded text-neutral-50 text-base font-medium">
              Create Account
            </button>
            <div className="flex flex-col gap-6 items-start">
              <button className="w-full px-20 py-4 border border-black border-opacity-40 rounded flex items-center gap-4 justify-center">
                <div className="w-6 h-6 bg-gray-300"></div>
                Sign up with Google
              </button>
              <div className="flex flex-col items-start gap-1">
                <div className="opacity-70 text-black text-base font-normal">
                  Already have an account?
                </div>
                <button className="opacity-70 text-black text-base font-medium underline">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
