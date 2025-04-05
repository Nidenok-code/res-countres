import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import ShowMore from "./ShowMore/ShowMore";
import Wrapper from "../Wrapper/Wrapper";

export default function Countries({ filterBR, value }) {
  let [button, setButton] = useState(true);
  let [cards, setCards] = useState(8);
  let [date, setDate] = useState(null);
  let searchFilter = date?.filter((item) => {
    return item.name.common.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/${
        filterBR === "Filter by Region" || filterBR === "All"
          ? "all"
          : "region/" + filterBR
      }`
    )
      .then((res) => res.json())
      .then((dates) => setDate(dates));
  }, [filterBR]);

  return (
    <div className="mb-12">
      <Wrapper
        classNames="flex flex-wrap gap-x-[60px] gap-y-[75px] justify-between mb-10"
        content={searchFilter?.slice(0, cards).map((element, index) => {
          return (
            <Card
              item={element}
              key={index}
              image={element.flags.svg}
              name={element.name.common}
              population={element.population.toLocaleString()}
              region={element.region}
              capital={element.capital}
            />
          );
        })}
      />
      {searchFilter?.length > cards ? <ShowMore cards={cards} setCards={setCards} /> : ""}
    </div>
  );
}
