function Title(props) {
  return (
    <>
      <div
        id={props.id}
        className={`border-b-[1px] ${props.bgColor} px-[16px] lg:px-[40px] pt-[56px] pb-[16px]`}
      >
        <h2 className="text-neutral-50 font-semibold tracking-tight">
          {props.text}
        </h2>
      </div>
    </>
  );
}
export default Title;
