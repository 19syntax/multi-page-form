import { Link } from "react-router-dom";
import { useState } from "react";

function Page1() {
  const [input, setInput] = useState("");
  function handleSubmit() {}
  return (
    <div className="h-screen flex items-center justify-center">
      <section className="border flex bg-white gap-16 w-600 p-4 rounded-lg">
        <div className="w-17 py-8 pl-6 bg-desktop-sidebar rounded-lg text-white">
          <div className="flex items-center mb-6 gap-4">
            <div className="flex justify-center items-center font-bold text-MarineBlue w-8 h-8 border rounded-full bg-Light">
              1
            </div>
            <div>
              <p className="opacity-60">STEP 1</p>
              <p className="font-semibold ">YOUR INFO</p>
            </div>
          </div>
          <div className="flex items-center mb-6 gap-4">
            <Link to="/page2">
              <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full border">
                2
              </div>
            </Link>
            <div>
              <p className="opacity-60">STEP 2</p>
              <p className="font-semibold ">SELECT PLAN</p>
            </div>
          </div>
          <div className="flex items-center mb-6 gap-4">
            <Link to="/page3">
              <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full border">
                3
              </div>
            </Link>

            <div>
              <p className="opacity-60">STEP 3</p>
              <p className="font-semibold ">ADD-ONS</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/page4">
              <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full border">
                4
              </div>
            </Link>

            <div>
              <p className="opacity-60">STEP 4</p>
              <p className="font-semibold ">SUMMARY</p>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-10">
          <h3 className="text-2xl font-extrabold text-MarineBlue">
            Personal info
          </h3>
          <p className="opacity-60">
            Please provide your name, email address, and phone number
          </p>
          <form onSubmit={handleSubmit} className="text-MarineBlue">
            <div className="mt-8">
              <p>Name</p>
              <input
                className="border mt-2 outline-none focus:border-MarineBlue w-full px-3 py-2 rounded-md"
                name="name"
                type="text"
                value={input}
                placeholder="e.g Stephen King"
              />
            </div>
            <div className="mt-5">
              <p>Email Address</p>
              <input
                className="border mt-2  outline-none focus:border-MarineBlue w-full px-3 py-2 rounded-md"
                type="email"
                placeholder="e.g stephenking@gmail.com"
              />
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <p>Phone Number</p>
              </div>

              <input
                className="border mt-2 outline-none focus:border-MarineBlue w-full px-3 py-2 rounded-md"
                type="tel"
                placeholder="e.g +1 234 567 890"
              />
            </div>
            <Link to="page2">
              <button className="mt-20 border py-2 px-4 rounded-lg bg-MarineBlue text-white float-end">
                Next Step
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page1;
