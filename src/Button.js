const Button = ({ val, callback }) => {
	return (
		<button className="flex-grow-1 border-0 bg-dark text-white py-2" onClick={callback}>
			{val}
		</button>
	)
}

export default Button;