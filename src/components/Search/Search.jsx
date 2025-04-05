import Wrapper from "../Wrapper/Wrapper";
import Input from "./Input/Input";
import Filter from "./Filter/Filter";

export default function Search({ value, setValue, setFilterBR, filterBR }) {
  return (
    <div className="py-12">
      <Wrapper
        classNames="flex justify-between"
        content={
          <>
            <Input setValue={setValue} value={value} />
            <Filter setFilterBR={setFilterBR} filterBR={filterBR} />
          </>
        }
      />
    </div>
  );
}
