export default function Wrapper(props) {
  let { classNames, content } = props;
  return (
    <div
      className={
        "max-w-[1312px] px-4 mx-auto " + (classNames ? classNames : "")
      }
    >
      {content}
    </div>
  );
}
