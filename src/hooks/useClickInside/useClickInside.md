### React Hooks - 使用内部点击

### 描述

一个 hook，可以处理包装在组建内部的点击事件。

* 创建一个自定义的 hook，使用 `ref` 和 `callback` 来处理 `click` 事件
* 使用 `React.useEffect()` hook 来添加或清除 `click` 事件
* 使用 `React.useRef()` hook 为你的点击组建创建一个 `ref`，并将他作为参数传递给 `useClickInside` hook

### 实现

```jsx
const useClickInside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
```

### 使用

```jsx
const ClickBox = ({ onClickInside }) => {
  const clickRef = React.useRef();
  useClickInside(clickRef, onClickInside);
  return (
    <div
      className="click-box"
      ref={clickRef}
      style={{
        border: '2px dashed orangered',
        height: 200,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p>Click inside this element</p>
    </div>
  );
};

ReactDOM.render(
  <ClickBox onClickInside={() => alert('click inside')} />,
  document.getElementById('root')
);
```
