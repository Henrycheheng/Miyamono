import { useMemo } from 'react'
import { MSize, MTheme } from 'miya-types'

export default ({
  size = 'md',
  theme = 'primary',
  prefix
}: {
  size: MSize
  theme?: MTheme
  prefix: string,
}) => {
  return useMemo(
    () => [prefix, `${prefix}--theme-${theme}`, `${prefix}--size-${size}`],
    [size, theme]
  )
}
