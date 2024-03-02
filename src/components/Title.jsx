function Title({ id, text }) {
  return (
    <div
      id={id}
      className="border-y bg-primary px-4 pb-2 pt-14 text-neutral-50 lg:px-8"
    >
      <h2>{text}</h2>
    </div>
  );
}
export default Title;
