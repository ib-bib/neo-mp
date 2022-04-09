const Button = ({ icon, theme, onClick }) => {
	const darkStyle = {
		color: "white",
		backGroundColor: "black",
	};
	const lightStyle = {
		color: "black",
		backGroundColor: "white",
	};
	return (
		<button
			type="button"
			style={theme === "light" ? lightStyle : darkStyle}
			className="inline-block lg:mx-12 md:mx-10 sm:mx-5 xsm:mx-3 rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out btn"
			onClick={onClick}
		>
			{icon}
		</button>
	);
};

export default Button;
