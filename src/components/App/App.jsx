import Navbar from "../Navbar/Navbar";
import Search from "../Search/search";
import Countries from "../Countires/Countries";
import { useCallback, useEffect, useMemo, useState } from "react";

function App() {
  let [theme, setTheme] = useState(false);
  const [value, setValue] = useState("");
  const [filterBR, setFilterBR] = useState("Filter by Region");

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Search
        setValue={setValue}
        value={value}
        setFilterBR={setFilterBR}
        filterBR={filterBR}
      />
      <Countries filterBR={filterBR} value={value} />
    </>
  );
}

export default App;