import { useState } from 'react';

/* 
const counter = 0
const setCounter = (newCounter)=>{
    console.log(newCounter)
}
setCounter(0)
*/
const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<h1>Click Counter</h1>
			<p>{counter}</p>
			<button onClick={() => setCounter(counter - 1)}>DECREMENT</button>
			<button onClick={() => setCounter(0)}>RESET</button>
			<button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
		</div>
	);
};
export default Counter;
