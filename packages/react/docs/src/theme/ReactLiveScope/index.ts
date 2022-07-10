import React from 'react'
import * as MiyaComponents from 'miya-ui-react'
import * as MdIcons from '@quasar/extras/material-icons'
import * as MdiV6Icons from '@quasar/extras/mdi-v6'

const ReactLiveScope = {
  React,
  ...React,
  ...MiyaComponents,
  MdIcons,
  MdiV6Icons,
}

export default ReactLiveScope
