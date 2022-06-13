import React from 'react'
import ClickInside from './components/ClickInside/ClickInside';
import { DataList } from './components/DataList/DataList';
import TableListRender from './components/TableList/TableList';

const App: React.FC = (data) => {
  return (
    <>
      <DataList data={data} isOrdered />
      {/* <ClickInside onClickInsilde={() => console.log('点击了内部')}></ClickInside>
      <TableListRender></TableListRender> */}
    </>
  )
}

export default App
