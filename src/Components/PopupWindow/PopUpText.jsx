export function PopupTextWithImg(props) {
  const { title, text, src } = props;
  return (
    <>
      <img className=" max-w-sm m-5 rounded-md" src={src} />
      <p className="text-slate-100 pt-10 pb-10">
        <span>{title}</span>
        <br />
        {text}
      </p>
    </>
  );
}

export function PopupText(props) {
  const { text } = props;
  return (
    <>
      <p className="text-slate-100 p-3 text-xl">{text}</p>
    </>
  );
}

export function CustomPopupText(props) {
  const { text, className } = props;
  return (
    <>
      <p className={className}>{text}</p>
    </>
  );
}

export default PopupTextWithImg;
