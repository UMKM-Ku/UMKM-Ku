import InputBox from "../../login-view/input-box";

export default function RegisterBox({
  link,
  desc1,
  desc2,
  label1,
  label2,
}: {
  link: string;
  desc1: string;
  desc2: string;
  label1: string;
  label2: string;
}) {
  return (
    <>
      <section className="w-lvw md:w-full md:h-lvh h-screen flex justify-center items-center bg-white">
        <div className="w-4/6">
          <img
            src="https://i.ibb.co.com/ThfCXmV/Group-18261.png"
            alt="logo"
            className="h-14 xl:-translate-y-4 md:-translate-y-28 md:mx-auto lg:mt-10 xl:mt-5 lg:-translate-y-36 cursor-pointer"
          />

          <div className="md:flex md:flex-col md:items-center md:mb-0 ">
            <img
              src={link}
              alt="background"
              className="md:w-[60%] w-96 hidden md:block"
            />
            <h5 className="md:text-base md:text-gray-600 text-center xl:mt-5 md:mt-0">
              {desc1}
            </h5>
            <h5 className="text-gray-600 md:text-base text-center -mb-12 md:mb-0">
              {desc2}
            </h5>
          </div>
        </div>

        <div className="w-2/6 bg-accent-100 h-lvh flex flex-col justify-center px-7">
          <h6 className="text-gray-800 font-bold text-3xl">{label1}</h6>
          <p className="text-gray-600 mt-2">{label2}</p>
          <InputBox name="email" type="text" label="Email" />
          <InputBox name="password" type="password" label="Password" />
          <button className="mt-4 bg-accent-700 rounded-lg p-2 text-white font-semibold hover:bg-accent-800 transition-colors duration-300 ease-out">
            Register
          </button>
          <h6 className="text-gray-700 text-sm mt-2 text-center">
            Already have account?
            <span>
              <a href="" className="text-accent-700 font-semibold ml-1">
                Login
              </a>
            </span>
          </h6>
        </div>
      </section>
    </>
  );
}
