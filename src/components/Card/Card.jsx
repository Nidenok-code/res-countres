import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Card(props) {
  let { image, name, population, region, capital, item } = props;
  let [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal ? <Modal element={item} setOpenModal={setOpenModal} /> : ""}
      <div
        onClick={() => setOpenModal(true)}
        className="cursor-pointer select-none w-[264px] h-[336px] bg-[var(--continer-bg)] text-[var(--text-color)] rounded-[5px] shadow-[0_0_7px_2px_rgba(0,0,0,0.03)]"
      >
        <div className="w-full h-[160px] overflow-hidden rounded-t-[5px]">
          <img className="w-full h-[160px]" src={image} alt='' />
        </div>
        <div className="pt-6 pl-6">
          <h6 className="mb-4 text-lg font-extrabold">{name}</h6>
          <ul className="flex flex-col gap-2">
            <li className="text-sm font-semibold">
              <span className="font-light">Population:</span>
              {" " + population}
            </li>
            <li className="text-sm font-semibold">
              <span className="font-light">Region:</span>
              {" " + region}
            </li>
            <li className="text-sm font-semibold">
              <span className="font-light">Capital:</span>
              {" " + capital}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
