
/**
 * 添加react的数组可能的type
 */
export type reactArray =
	string |
	number |
	boolean |
	React.ReactElement<any, string | React.JSXElementConstructor<any>> |
	React.ReactFragment |
	React.ReactPortal |
	null |
	undefined