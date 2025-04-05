import { useState } from "react";
import dropDownLight from "../../../assets/dropDown-light.svg";
import dropDownDark from "../../../assets/dropDown-dark.svg";
export default function Filter({ setFilterBR, filterBR }) {
  let [isOpen, setOpen] = useState(false),
    regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div className="relative flex justify-between text-[var(--text-color)] items-center p-[18px] pl-6  w-[200px] rounded-[5px] bg-[var(--continer-bg)] shadow-[0_2px_9px_0_rgba(0,0,0,0.05)]">
      <h6
        onClick={() => setOpen(!isOpen)}
        className="text-sm font-normal cursor-pointer select-none"
      >
        {filterBR}
      </h6>
      <img
        src={document.body.classList[0] ? dropDownLight : dropDownDark}
        alt="image not found"
        onClick={() => setOpen(!isOpen)}
        className={
          "cursor-pointer select-none duration-500 " +
          (isOpen ? "rotate-0" : "rotate-90")
        }
      />
      <ul
        className={
          "w-full mt-1 absolute left-0 top-[56px] rounded-[5px] px-6 py-4 flex flex-col gap-2 bg-[var(--continer-bg)] shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] z-10 duration-500 overflow-hidden " +
          (isOpen ? "h-[192px] opacity-100 visible" : "h-0 opacity-0 invisible")
        }
      >
        {regions.map((e, i) => {
          return (
            <li
              key={i}
              className="text-sm duration-500 cursor-pointer hover:translate-x-1"
              onClick={(e) => {
                setOpen(!isOpen);
                setFilterBR(e.target.innerText);
              }}
            >
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
