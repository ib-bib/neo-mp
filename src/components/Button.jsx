const Button = ({ icon, onClick, id }) => {
	return (
		<button
			id={id}
			type="button"
			className="text-black bg-white dark:bg-black dark:text-white active:scale-90 hover:bg-gray-200 dark:hover:bg-gray-900 mx-4 rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-shadow hover:duration-150 ease-in-out btn"
			onClick={onClick}
		>
			{icon}
		</button>
	);
};

export default Button;
