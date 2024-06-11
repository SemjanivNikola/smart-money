import s from "./button.module.css"

type ButtonProps = {
    onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
    return <button onClick={onClick} className={`${s.button} ${s.save}`} type="submit">Save</button>
}

export default Button;