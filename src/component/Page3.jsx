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
            <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full border text-MarineBlue bg-Light">
              3
            </div>

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
            Pick add-ons
          </h3>
          <p className="opacity-60">
            Add-ons helps you enhance your gaming experience.
          </p>
          <form className="text-MarineBlue">
            <div className="flex w-500 mt-4 p-4 rounded-lg border hover:border-MarineBlue justify-between items-center">
              <div className="flex gap-6 items-center">
                <input type="checkbox" name="" id="" />
                <div>
                  <p className="font-bold">Online Service</p>
                  <p className="text-black opacity-65">
                    Access to multiplayer games
                  </p>
                </div>
              </div>
              <p className="text-sm">+$1/mo</p>
            </div>
            <div className="flex w-500 mt-4 p-4 rounded-lg border hover:border-MarineBlue justify-between items-center">
              <div className="flex gap-6 items-center">
                <input type="checkbox" name="" id="" />
                <div>
                  <p className="font-bold">Larger storage</p>
                  <p className="text-black opacity-65">
                    Extra 1TB of cloud save
                  </p>
                </div>
              </div>
              <p className="text-sm">+$2/mo</p>
            </div>
            <div className="flex w-500 mt-4 p-4 rounded-lg border hover:border-MarineBlue justify-between items-center">
              <div className="flex gap-6 items-center">
                <input type="checkbox" name="" id="" />
                <div>
                  <p className="font-bold">Customizable profile</p>
                  <p className="text-black opacity-65">
                    Custom theme on your profile
                  </p>
                </div>
              </div>
              <p className="text-sm">+$2/mo</p>
            </div>
            <div className="flex mt-20 justify-between items-center">
              <Link to="/page2">
                <button className=" border font-semibold cursor-pointer py-2 px-4 rounded-lg text-black opacity-55">
                  Go Back
                </button>
              </Link>
              <Link to="/page4">
                <button className="border py-2 px-4 rounded-lg cursor-pointer bg-MarineBlue text-white">
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
