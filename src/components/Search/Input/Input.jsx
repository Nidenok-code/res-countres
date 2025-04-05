import searchIconDark from "../../../assets/search-icon-dark.svg";
import searchIconLight from "../../../assets/search-icon-light.svg";
export default function Input({ value, setValue }) {
  return (
    <div className="flex items-center gap-6 py-[18px] px-8 rounded-[10px] w-[480px] bg-[var(--continer-bg)] shadow-[0_2px_9px_0_rgba(0,0,0,0.05)]">
      <label
        htmlFor="search"
        className="min-w-[18px] min-h-[18px] cursor-pointer"
      >
        <img
          src={document.body.classList[0] ? searchIconLight : searchIconDark}
          alt="image not found"
        />
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        autoComplete="off"
        type="text"
        id="search"
        placeholder="Search for a country…"
        className="text-sm text-[var(--placeholder-color)] w-full outline-0 bg-transparent placeholder:text-[var(--placeholder-color)]"
      />
    </div>
  );
}
