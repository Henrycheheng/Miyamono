import { useRef } from 'react'
import { useClickInside } from '../../hooks/useClickInside/useClickInside';

interface IClickInside {
	onClickInsilde: Function;
}

const ClickInside = ({ onClickInsilde }: IClickInside) => {

	const clickRef = useRef<HTMLDivElement>(null);
	// console.log('clickRef :>> ', clickRef.current);
	useClickInside(clickRef, onClickInsilde);

	return (
		<div>
			<button>点击内部元素</button>
		</div>
	)
}

export default ClickInside


