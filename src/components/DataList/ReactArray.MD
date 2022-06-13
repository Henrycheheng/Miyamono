# ReactArray

### 描述

使用一个原始数组中的数据渲染出一个列表元素。

* 使用 `isOrdered` 属性值来判断渲染的是 `<ol>` 列表，还是 `<ul>` 列表
* 使用 `Array.prototype.map` 渲染 `data` 中的每一项作为一个 `<li>` 元素，根据每一项的索引和值生成一个 `key`
* `isOrdered` 属性的默认值为 false，使用 `<ul>` 列表进行渲染

### 实现

```jsx
function DataList({ isOrdered, data }) {
  const list = data.map((val, i) => <li key={`${i}_${val}`}>{val}</li>);
  return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
}
```

### 使用

```jsx
const names = ['John', 'Paul', 'Mary'];
ReactDOM.render(<DataList data={names} />, document.getElementById('root'));
ReactDOM.render(<DataList data={names} isOrdered />, document.getElementById('root'));
```
