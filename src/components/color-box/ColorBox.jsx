import { StyledBox } from './styles';
import { useState } from 'react';

const ColorBox = () => {
	const [color, setColor] = useState('black');
	return (
		<div>
			<h1>Color box</h1>
			<StyledBox color={color}></StyledBox>
			<button onClick={() => setColor('red')}>rojo</button>
			<button onClick={() => setColor('pink')}>rosa</button>
			<button onClick={() => setColor('yellow')}>amarillo</button>
		</div>
	);
};

export default ColorBox;
