import React from 'react'
import Playground from '@theme/Playground'
import CodeBlock from '@theme-init/CodeBlock'
import ReactLiveScope from '@theme/ReactLiveScope'


const withLiveEditor = ({ Component }: { Component: any }) => {
  function WrappedComponent(props: { live: any }) {
    if (props.live) {
      return (
        <div className='custom-wrapper'>
          <Playground scope={ReactLiveScope}
            {...props}
          ></Playground>
        </div>
      )
    }

    return <Component {...props}></Component>
  }
  return WrappedComponent
}

export default withLiveEditor({ Component: CodeBlock })
