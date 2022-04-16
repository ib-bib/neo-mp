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
## Week Two - Tailwind config file and customizations, Tailwind dark mode, and more React components :
The tailwind config file is a js file, that allows you to define custom properties for stylistic choices that can be made throug Tailwind. It also allows you to override already pre-defined properties.
The example below shows custom break-point media query for 'extra small screens'

tailwind.config.js
```javascript
module.exports = {
	darkMode: "class",
	// This is an explicit definition for dark mode being a manually toggleable class
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xsm: "510px",
			// We see here an example of a custom tailwind class
			// This class in particular is for a screen media query
		},
		extend: {},
	},
	plugins: [],
};

```
We can apply that 'xsm' class with whatever stylistic choice we want applied at the breakpoint, like this
```html
<div className="mr-12 xsm:mr-6">foo bar</div>
<!-- As an example, we change the margin-right value if the break-point is detected -->
```
As for applying dark mode to a page, you simply toggle the class 'dark' on a parent of an element which you desire the mode to be applied on
A very easy approach is just toggling the class on the body tag of the html
```javascript react
<button title="Toggle Theme" className="text-3xl mr-5 p-1 hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 transition-all duration-500 active:rotate-180 focus:duration-700"
	onClick={() => {
		if (tm === "light") {
			setTheme("dark");
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
			setTheme("light");
		}
	}}
>
	{tm === "light" ? BsMoon() : CgSun()}
</button>
```
