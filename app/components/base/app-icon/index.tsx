import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
      }}
    >
      <img src="https://yt3.googleusercontent.com/FdL1tzKY6ERA0yDEJyI8ClULS1aWlz9CvD1R5ZwhlWr8Kkmk_2WaCHVRbVKyM0AGqWsqPxIXOA=s900-c-k-c0x00ffffff-no-rj" alt="" />
    </span>
  )
}

export default AppIcon
