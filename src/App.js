import Nav from "./components/Nav";

const App = () => {
	return (
		<div className="grid justify-center text-center h-screen overflow-y-auto bg-gray-300 dark:bg-gray-800 dark:text-white transition-colors duration-500">
			<Nav />
		</div>
	);
};

export default App;
