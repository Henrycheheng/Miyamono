import { useState } from 'react'
import { reactArray } from '../../types/reactArray'

interface ITableList {
	data: any[]
}

const TableHeadRender: React.FunctionComponent<ITableList> = ({ data }: ITableList) => {
	return (
		<thead>
			{
				data.map((item, i) => {
					return (
						<tr
							key={`${i}_${item}`}
						>
							<th>{item}</th>
						</tr>
					)
				})
			}
		</thead>
	)
}

const TbodyRender = ({ data }: ITableList): JSX.Element => {
	return (
		<tbody>
			{
				data.map((val: reactArray, i: number) => {
					return (
						<tr key={`${i}_${val}`}>
							<td>{i}</td>
							<td>{val}</td>
						</tr>
					)
				})
			}
		</tbody>
	)
}

const TableListRender = (): JSX.Element => {
	const [tBodyData, setTBodyData] = useState(['John', 'Paul', 'Mary']);
	const [tHeadData, setTHeadData] = useState(['ID', 'value'])
	return (
		<table>
			<TableHeadRender data={tHeadData} />
			<TbodyRender data={tBodyData} />
		</table>
	)
}

export default TableListRender
