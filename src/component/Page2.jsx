import { Link } from "react-router-dom";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

function Page1() {
  return (
    <div className="h-screen flex items-center justify-center">
      <section className="border flex bg-white gap-16 w-600 p-4 rounded-lg">
        <div className="w-17 py-8 pl-6 bg-desktop-sidebar rounded-lg text-white">
          <div className="flex items-center cursor-pointer mb-6 gap-4">
            <Link to="/">
              <div className="flex justify-center items-center font-bold w-8 h-8 border rounded-full">
                1
              </div>
            </Link>
            <div>
              <p className="opacity-60">STEP 1</p>
              <p className="font-semibold ">YOUR INFO</p>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mb-6 gap-4">
            <div className="flex justify-center items-center font-bold w-8 h-8  rounded-full border text-MarineBlue bg-Light">
              2
            </div>

            <div>
              <p className="opacity-60">STEP 2</p>
              <p className="font-semibold ">SELECT PLAN</p>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mb-6 gap-4">
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
          <div className="flex items-center cursor-pointer gap-4">
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
            Select your plan
          </h3>
          <p className="opacity-60">
            You have the option of monthly or yearly billing.
          </p>
          <form className="text-MarineBlue">
            <div className="flex justify-between mt-8 gap-4 items-center">
              <div className="w-32 p-4 border border-MarineBlue cursor-pointer rounded-lg">
                <img className="mt-2" src={Arcade} alt="" />
                <h3 className="pt-8 font-bold">Arcade</h3>
                <p className="text-sm opacity-65 text-black">$9/mo</p>
              </div>
              <div className="w-32 p-4 border hover:border-MarineBlue cursor-pointer rounded-lg">
                <img className="mt-2" src={Advanced} alt="" />
                <h3 className="pt-8 font-bold">Advanced</h3>
                <p className="text-sm opacity-65 text-black">$12/mo</p>
              </div>
              <div className="w-32 p-4 border hover:border-MarineBlue cursor-pointer rounded-lg">
                <img className="mt-2" src={Pro} alt="" />
                <h3 className="pt-8 font-bold">Pro</h3>
                <p className="text-sm opacity-65 text-black">$15/mo</p>
              </div>
            </div>
            <div className="bg-Magnolia mt-8 p-4 flex justify-center">
              <p className="font-semibold">Monthly</p>
              <input type="radio" />
              <p className="font-semibold text-black opacity-55">Yearly</p>
            </div>
            <div className="flex mt-24 justify-between items-center">
              <Link to="/">
                <button className=" border font-semibold cursor-pointer py-2 px-4 rounded-lg text-black opacity-55">
                  Go Back
                </button>
              </Link>
              <Link to="/page3">
                <button className="border py-2 px-4 rounded-lg bg-MarineBlue text-white">
                  Next Step
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page1;
