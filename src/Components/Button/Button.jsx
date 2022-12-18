export function Button(props) {
  const { className, text, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
