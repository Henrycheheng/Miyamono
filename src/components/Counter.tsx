import React, { MouseEventHandler, useState } from 'react'
/* @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'


const Counter: React.FC = () => {

	const [counter, setCounter] = useState(0);
	const changeCounter: MouseEventHandler = () => { setCounter(counter + 1) };
	return (
		<>
			<h2>{counter}</h2>
			<button
				css={css`
					padding: 0;
					color: black;
					background-color: #ccc;
				`}
				onClick={changeCounter}
			>click to plus 1</button>
		</>
	)
}

export default Counter
