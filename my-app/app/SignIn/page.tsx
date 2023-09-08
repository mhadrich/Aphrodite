import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">

      <div className="flex gap-16 mx-auto my-10 w-full max-w-6xl">
      <div className="w-1/2 flex pt-20 bg-cbe4e8 justify-end items-center rounded-r-md">
    <img
        className="object-cover w-full h-full min-h-full min-w-full rounded-r-md"
        src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11435/b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg"
        alt="Cosmetics"
    />
</div>
        <div className="flex flex-col gap-12 w-full max-w-lg p-10 bg-white rounded shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="text-black text-4xl font-medium leading-loose tracking-wider">Log in to Exclusive</div>
            <div className="text-black text-base font-normal leading-normal">Enter your details below</div>
          </div>
          <div className="flex flex-col gap-10">
            {['Email or Phone Number', 'Password'].map((label, idx) => (
              <div className="flex flex-col gap-2" key={idx}>
                <label className="opacity-40 text-black text-base font-normal leading-normal" htmlFor={label}>{label}</label>
                <input
                  id={label}
                  name={label}
                  type={label === 'Password' ? 'password' : 'text'}
                  className="w-full border-b border-black opacity-50 py-2"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-10">
            <button className="w-full px-32 py-4 bg-red-500 rounded text-white text-base font-medium">Log In</button>
            <a href="#forget-password" className="text-red-500 text-base font-normal leading-normal">Forget Password?</a>
          </div>
        </div>
      </div>

    </main>
  );
}
