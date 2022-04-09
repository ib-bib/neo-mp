# IEEE SusTech Student Branch - Project Team - Front End

Here I will upload my progress on learning React.js, Redux and Tailwind on a set schedule. I am attempting to build a music player to apply what I learn along the way.

## Week One - Intro to Tailwind, React props and state management :
Example below shows Tailwind classes and passing a property value to a custom React component
```javascript
function App() {
	return (
		<div className="grid justify-center text-center h-screen overflow-hidden">
      // Here I apply tailwind classes to style the div to be rendered
			<h1>Music Player Demo</h1>
			<Cover />
			<ButtonPanel theme={"light"} />
      // Here I pass a prop to a custom component
		</div>
	);
}
```
Example below shows an example of React state management using an arrow function component
```javascript
const ButtonPanel = ({ theme }) => {
const [play, setPlay] = useState(true);
// The function setPlay is bound to the play variable
	return (
		/*
		Code ...
               */
	       <Button
			onClick={() => {
				setPlay(!play);
                                // Here we use the setPlay function to change the state of our component
			}}
			icon={play ? FaPlay() : FaPause()}
		/>
		/*
		Code ...
		*/
```
