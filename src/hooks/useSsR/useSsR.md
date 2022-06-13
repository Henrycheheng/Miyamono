### 描述

一个可以检查代码代码运行在浏览器端还是服务端的 hook。

- 创建一个可以返回适当对象的自定义 hook，
- 使用 `typeof window`，`window.document` 和 `window.document.createElement` 来检查代码是否运行在浏览器中
- 使用 `React.useState()` hook 定义 `inBrowser` 状态变量
- 使用 `React.useEffect()` hook 来更新 `inBrowser` 的状态变量及最终的清除
- 使用 `React.useMemo()` 记住自定义 hook 返回的值

### 实现

```jsx
const isDOMavailable = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const useSSR = (callback, delay) => {
  const [inBrowser, setInBrowser] = React.useState(isDOMavailable)

  React.useEffect(() => {
    setInBrowser(isDOMavailable)
    return () => {
      setInBrowser(false)
    }
  }, [])

  const useSSRObject = React.useMemo(
    () => ({
      isBrowser: inBrowser,
      isServer: !inBrowser,
      canUseWorkers: typeof Worker !== 'undefined',
      canUseEventListeners: inBrowser && !!window.addEventListener,
      canUseViewport: inBrowser && !!window.screen,
    }),
    [inBrowser]
  )

  return React.useMemo(() => Object.assign(Object.values(useSSRObject), useSSRObject), [inBrowser])
}
```

### 使用

```jsx
const SSRChecker = (props) => {
  let { isBrowser, isServer } = useSSR()

  return <p>{isBrowser ? 'Running on browser' : 'Running on server'}</p>
}

ReactDOM.render(<SSRChecker />, document.getElementById('root'))
```
