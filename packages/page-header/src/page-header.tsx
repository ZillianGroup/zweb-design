import { forwardRef, useMemo } from "react"
import { PageHeaderProps } from "./interface"
import {
  divideStyle,
  headerCss,
  separateCss,
  subTitleCss,
  titleStyle,
} from "./style"
import { Breadcrumb } from "@zweb-design/breadcrumb"
import { PreviousIcon } from "@zweb-design/icon"
import { applyBoxStyle, deleteCssProps } from "@zweb-design/theme"
import { Divider } from "@zweb-design/divider"

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  (props, ref) => {
    const {
      title,
      subTitle,
      breadcrumb,
      backIcon,
      extra,
      onBack,
      ...otherProps
    } = props

    const backEle = useMemo(() => {
      return typeof backIcon === "boolean" ? (
        backIcon ? (
          <PreviousIcon
            onClick={(e) => {
              onBack?.(e)
            }}
          />
        ) : (
          <span
            onClick={(e) => {
              onBack?.(e)
            }}
          >
            {backIcon}
          </span>
        )
      ) : (
        <></>
      )
    }, [backIcon, onBack])

    return (
      <div ref={ref} css={applyBoxStyle(props)} {...deleteCssProps(otherProps)}>
        {breadcrumb && <Breadcrumb {...breadcrumb} />}
        <div css={headerCss}>
          {backEle}
          {title && <div css={titleStyle}>{title}</div>}
          {subTitle && (
            <>
              <Divider direction="vertical" ml="12px" mr="12px" />
              <div css={subTitleCss}>{subTitle}</div>
            </>
          )}
          <div css={divideStyle} />
          {extra}
        </div>
      </div>
    )
  },
)

PageHeader.displayName = "PageHeader"
