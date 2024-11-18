const FilterBox = ({ label }: { label: string }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <input type="checkbox" className="checkbox checkbox-sm" id={label} />
        <label htmlFor={label}>{label}</label>
      </div>
    </>
  );
};

export default FilterBox;
