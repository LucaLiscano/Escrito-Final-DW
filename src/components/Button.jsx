import { Link } from "react-router-dom";

const Button = (props) => {
    return (
    <Link to={props.link} className="bg-blue-500 p-5 rounded-2xl m-5 hover:bg-sky-600 font-bold text-white">{props.texto}</Link>
  )
}

export default Button;
