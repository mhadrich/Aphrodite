import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">

      <div className="flex gap-16 mx-auto my-10 w-full max-w-6xl">
        <div className="flex flex-col items-center bg-slate-300 rounded-tr rounded-br pt-20">
          <img className="w-full h-96 object-cover rounded-tr rounded-br" src="https://via.placeholder.com/919x706" alt="Placeholder" />
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
