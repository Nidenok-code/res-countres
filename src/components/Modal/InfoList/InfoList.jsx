export default function InfoList({ infoObj }) {
  return (
    <ul>
      {Object.entries(infoObj).map((item, index) => {
        return (
          <li key={index} className="font-light leading-[200%] ">
            <span className="font-semibold">{item[0]}:</span> {item[1]}
          </li>
        );
      })}
    </ul>
  );
}
