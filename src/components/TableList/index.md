# React Array - 表格数据

### 描述

根据原生数组动态渲染一个带行的表格。

* 渲染一个带有两列（`ID` and `Value`）的 `<table>` 元素
* 使用 `Array.prototype.map` 渲染 `data` 中的每一项作为一个 `<tr>` 元素，该元素包含了索引和值。使用索引和值的组合作为 `key`

### 实现

```jsx
function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val, i) => (
          <tr key={`${i}_${val}`}>
            <td>{i}</td>
            <td>{val}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### 使用

```jsx
const people = ['John', 'Jesse'];
ReactDOM.render(<DataTable data={people} />, document.getElementById('root'));
```

### 返回总目录
