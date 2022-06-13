import { IProps } from '../../interface/DataList'
import { reactArray } from '../../types/reactArray';


export function DataList({ isOrdered, data }: IProps): JSX.Element {
	const list = data.map((val: reactArray, i: number) => <li key={`${i}_${val}`}>{val}</li>);
	console.log('list :>> ', list);
	return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
}
