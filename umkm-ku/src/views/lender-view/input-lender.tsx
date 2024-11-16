const InputLender = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label: string;
}) => {
  return (
    <>
      <div className="my-5">
        <label htmlFor={name} className="font-bold">
          {label}
        </label>
        <input
          name={name}
          id={name}
          type={type}
          className="px-2.5 py-2 w-full text-base text-gray-500 rounded-lg border-2 border-grey-600 appearance-none bg-white focus:outline-none focus:ring-0 focus:border-accent-700 peer"
        />
      </div>
    </>
  );
};

export default InputLender;
