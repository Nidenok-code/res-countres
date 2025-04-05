import Wrapper from "../../Wrapper/Wrapper";

export default function ShowMore({ cards, setCards }) {
  return (
    <Wrapper
      classNames="text-center"
      content=<>
        <button
          className="text-[var(--text-color)] cursor-pointer py-2 px-6 bg-[var(--continer-bg)] rounded-[5px] shadow-[0_0_7px_2px_rgba(0,0,0,0.03)]"
          onClick={() => setCards(cards + 8)}
        >
          show more
        </button>
      </>
    />
  );
}
