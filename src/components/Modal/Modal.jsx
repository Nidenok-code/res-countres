import { useCallback } from "react";
import closeIconLight from "../../assets/close-icon-light.svg";
import closeIconDark from "../../assets/close-icon-dark.svg";
import InfoList from "./InfoList/InfoList";

export default function Modal({ element, setOpenModal }) {
  let leftInfo = {
      "Native Name": Object.entries(element.name.nativeName).at(-1)[1].common,
      Population: element.population.toLocaleString(),
      Region: element.region,
      "Sub Region": element.subregion,
      Capital: element.capital.join(" "),
    },
    rightInfo = {
      "Top Level Domain": element.tld.join(" "),
      Currencies: Object.entries(element.currencies)[0][1].name,
      Languages: Object.entries(element.languages)
        .map((item) => {
          return Object.entries(item)[1][1];
        })
        .join(","),
    },
    borders = element.borders ? element.borders : ["null"];
  return (
    <div className="px-[45px] z-10 fixed top-0 bottom-0 left-0 right-0 backdrop-blur-[10px] bg-[rgba(0,0,0,0.8)]">
      <div className="flex items-center px-[70px] w-full max-w-[1350px] h-[77%] bg-[var(--modal-bg)] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[10px]">
        <img
          onClick={() => setOpenModal(false)}
          className="cursor-pointer absolute right-[35px] top-[35px]"
          src={document.body.classList[0] ? closeIconLight : closeIconDark}
          alt="close"
        />
        <div className="w-full flex gap-[120px]">
          <img
            className="block w-[560px] h-[400px]"
            src={element.flags.svg}
            alt={element.flags.alt}
          />
          <div className="w-full text-[var(--text-color)]">
            <h6 className="font-extrabold text-[32px] mb-[23px]">
              {element.name.common}
            </h6>
            <div className="flex justify-between mb-[68px]">
              <InfoList infoObj={leftInfo} />
              <InfoList infoObj={rightInfo} />
            </div>
            <div className="flex items-center gap-[10px] flex-wrap justify-start">
              <span className="mr-[5px] font-semibold leading-[200%] ">
                Border Countries:
              </span>
              {borders.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="cursor-pointer bg-[var(--continer-bg)] px-[5px] flex items-center justify-center min-w-[96px] h-[28px] font-light text-[14px] rounded-[2px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1)]"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
