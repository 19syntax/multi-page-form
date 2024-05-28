import { Link } from "react-router-dom";

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
            <Link to="/page2">
              <div className="flex justify-center items-center font-bold w-8 h-8  rounded-full border ">
                2
              </div>
            </Link>

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
            <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full border text-MarineBlue bg-Light">
              4
            </div>
            <div>
              <p className="opacity-60">STEP 4</p>
              <p className="font-semibold ">SUMMARY</p>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-10">
          <h3 className="text-2xl font-extrabold text-MarineBlue">
            Finishing up
          </h3>
          <p className="opacity-60">
            Double-check everything looks OK before confirming.
          </p>
          <form className="text-MarineBlue">
            <div className="mt-8 w-500 bg-Magnolia p-5">
              <div className="flex justify-between items-center pb-4 border-Gray border-b-2">
                <span>
                  <p className="font-bold">Arcade (Monthly)</p>
                  <Link to="/page2">
                    <p className="text-black font-semibold underline opacity-50">
                      Change
                    </p>
                  </Link>
                </span>
                <p className="font-bold text-xl">$9/mo</p>
              </div>
              <div className="pt-4 flex justify-between">
                <p className="text-black font-semibold opacity-50">
                  Online service
                </p>
                <p>+$1/mo</p>
              </div>
              <div className="pt-4 flex justify-between">
                <p className="text-black font-semibold opacity-50">
                  Larger storage
                </p>
                <p>+$2/mo</p>
              </div>
            </div>
            <div className=" p-4 pt-6 flex justify-between">
              <p className="text-black font-semibold opacity-65">
                Total (per month)
              </p>
              <p className="text-2xl font-semibold">+$12/mo</p>
            </div>
            <div className="flex mt-20 justify-between items-center">
              <Link to="/page3">
                <button className=" border font-semibold cursor-pointer py-2 px-4 rounded-lg text-black opacity-55">
                  Go Back
                </button>
              </Link>
              <Link to="">
                <button className="border py-2 px-4 rounded-lg cursor-pointer bg-MarineBlue text-white">
                  Confirm
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
