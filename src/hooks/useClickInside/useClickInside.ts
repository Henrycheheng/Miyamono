import { useEffect } from 'react';



/**
 *
 * 一个 hook，可以处理包装在组建内部的点击事件。
 * 使用 `ref` 和 `callback` 来处理 `click` 事件
 * 使用 `React.useEffect()` hook 来添加或清除 `click` 事件
 * 使用 `React.useRef()` hook 为你的点击组建创建一个 `ref`，并将他作为参数传递给 `useClickInside` hook
 * @param {{ current: any }} ref
 * @param {*} callback
 */
export const useClickInside = (ref: { current: any }, callback: any) => {
	const handleClick = (e: any) => {
		if (ref.current && ref.current.contains(e.target)) {
			callback()
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		}
	})
}