import React, { CSSProperties } from 'react'
import clsx from "clsx";
import { MSize, MTheme, MSlot } from 'miya-types'
import { useSizeThemeClass } from 'miya-ui-react';


interface MButtonProps {
  /**
   * 按钮里的文案
   */
  label: string
  /**
   * 是否表现为轮廓样式，默认：`false`
   * @default false
   */
  outlined?: boolean
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 按钮尺寸
   */
  size?: MSize
  /**
   * 是否为圆角
   */
  rounded?: boolean
  /**
   * 是否为圆弧
   */
  round?: boolean
  /**
   * 是否为块级
   */
  block?: boolean
  /**
   * 按钮主题
   */
  theme?: MTheme
  /**
   * 按钮是否处于加载中状态
   */
  loading?: boolean
  /**
   * 是否表现为图标按钮
   */
  icon?: boolean
  /**
   * 自定义样式
   */
  style?: CSSProperties
}

interface MButtonJSXProps {
  /**
   * 额外样式类
   */
  className?: string
  /**
   * 点击事件触发
   */
  onClick?: () => void
  /**
   * 是否使用自定义其他加载动画
   */
  customLoading?: JSX.Element
  /**
   * 子元素内容，该项会覆盖<code>label</code>属性
   */
  children?: MSlot
}

const MButton = ({
  size = 'md',
  label = '',
  className = '',
  outlined = false,
  disabled = false,
  rounded = false,
  round = false,
  block = false,
  loading = false,
  onClick,
  icon = false,
  children,
  style,
  theme
}: MButtonProps & MButtonJSXProps) => {
  return (
    <button
      style={style}
      className={clsx(
        ...useSizeThemeClass({ size, theme, prefix: 'm-button' }),
        block && 'm-button--block',
        rounded && `m-rounded-${size}`,
        round && 'm-button--round',
        outlined && 'm-button--outlined',
        loading && 'm-button--loading',
        icon && 'm-button--icon',
        `m-font-${size}`,
        `m-px-${size}`,
        `m-h-${size}`,
        className
      )}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onClick?.()
        }
      }}
    >
      <div className={clsx('m-button--content-wrapper')}>
        {children ? children : label}
      </div>
    </button>
  )
}

export default MButton
