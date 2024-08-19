import "./Button.css";

function Button({ text, classButton }) {
  return <button className={`${classButton} button`}>{text}</button>;
}

export default Button;
