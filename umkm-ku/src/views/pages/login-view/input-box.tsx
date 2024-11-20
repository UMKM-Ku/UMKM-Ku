export default function InputBox({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label: string;
}) {
  return (
    <>
      <div className="relative">
        <input
          name={name}
          type={type}
          id={name}
          className="px-2.5 py-2 w-full text-base text-gray-500 rounded-lg border-2 border-grey-600 appearance-none bg-accent-50 focus:outline-none focus:ring-0 focus:border-accent-700 peer"
          placeholder=""
        ></input>

        <label
          htmlFor="name"
          className="absolute text-base font-medium text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-accent-100 px-2 peer-focus:px-2 peer-focus:border-accent-700  peer-focus:text-accent-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 pointer-events-none"
        >
          {label}
        </label>
      </div>
    </>
  );
}
