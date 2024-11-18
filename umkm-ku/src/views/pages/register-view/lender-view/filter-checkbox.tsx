import FilterBox from "./filter-box";

const FilterCheckbox = ({
  title,
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  labelFive,
  labelSix,
}: {
  title: string;
  labelOne: string;
  labelTwo: string;
  labelThree: string;
  labelFour?: string;
  labelFive?: string;
  labelSix?: string;
}) => {
  return (
    <>
      <div className="collapse border-2 border-gray-200 collapse-arrow my-5 shadow-md">
        <input type="checkbox" defaultChecked />
        <div className="collapse-title font-medium">{title}</div>
        <div className="collapse-content flex flex-col gap-4 ">
          <FilterBox label={labelOne} />
          <FilterBox label={labelTwo} />
          <FilterBox label={labelThree} />
          {labelFour ? <FilterBox label={labelFour} /> : ""}
          {labelFive && labelSix ? (
            <>
              <FilterBox label={labelFive} />
              <FilterBox label={labelSix} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default FilterCheckbox;
