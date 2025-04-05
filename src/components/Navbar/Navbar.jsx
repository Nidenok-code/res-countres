import light from "../../assets/navbar-light.svg";
import dark from "../../assets/navbar-dark.svg";
import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="py-6 bg-[var(--continer-bg)] text-[var(--text-color)] shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] select-none">
      <Wrapper
        classNames="flex justify-between items-center"
        content={
          <>
            <div className="text-2xl font-extrabold cursor-pointer">
              Where in the world?
            </div>
            <div
              onClick={() => {
                setTheme(!theme);
                document.body.classList.toggle("dark");
              }}
              className="flex items-center gap-[10px] cursor-pointer select-none"
            >
              {theme ? (
                <>
                  <img src={light} alt="image not fount" />
                  <h6 className="font-semibold">Light Mode</h6>
                </>
              ) : (
                <>
                  <img src={dark} alt="image not fount" />
                  <h6 className="font-semibold">Dark Mode</h6>
                </>
              )}
            </div>
          </>
        }
      />
    </nav>
  );
}
