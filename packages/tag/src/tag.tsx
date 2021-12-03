/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { TagColorScheme, TagProps, TagVariant } from "./interface"
import { css } from "@emotion/react"
import { CloseIcon } from "@illa-design/icon"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { omit } from "@illa-design/system"

// style
const tagContainer = css`
  display: inline-flex;
  vertical-align: middle;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
`

function applyTagSizeLarge(variant: TagVariant): SerializedStyles {
  return css`
    padding: ${variant == "outline" ? "4px 7px" : "5px 8px"};
  `
}

function applyTagSizeMedium(variant: TagVariant): SerializedStyles {
  return css`
    padding: ${variant == "outline" ? "2px 7px" : "3px 8px"};
  `
}

function applyTagSizeSmall(variant: TagVariant): SerializedStyles {
  return css`
    padding: ${variant == "outline" ? "0px 7px" : "1px 8px"};
  `
}

const leftIcon = css`
  width: 12px;
  height: 12px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
`

const closeIcon = css`
  margin-left: 4px;
`

const colors: TagColorScheme[] = [
  "white", "blackAlpha", "gray", "grayBlue", "red", "orange", "yellow", "green", "blue", "cyan", "purple", "techBlue",
]

function tagOutlinePrepare(color: TagColorScheme): SerializedStyles {
  if (color == "gray") {
    return css`
      border-radius: 1px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 1px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-01`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

function tagFillPrepare(color: TagColorScheme): SerializedStyles {
  return css`
    background-color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    border-radius: 1px;
  `
}

function tagLightPrepare(color: TagColorScheme): SerializedStyles {
  if (color == "gray") {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-06`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

function tagFillNormal(color: Extract<TagColorScheme, string>): SerializedStyles {
  return css`
    border-radius: 1px;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    background-color: ${color};
  `
}

function tagOutlineNormal(color: Extract<TagColorScheme, string>): SerializedStyles {
  return css`
    border-radius: 1px;
    color: ${color};
    border: solid 1px ${color};
  `
}

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {

  const {
    visible = true,
    colorScheme = "gray",
    size = "small",
    variant = "light",
    closable = false,
    ...rest
  } = props

  const otherProps = omit(rest, ["onClose", "icon"])

  let variantCss: SerializedStyles

  // variant
  if (colors.includes(colorScheme)) {
    switch (variant) {
      case "light": {
        variantCss = tagLightPrepare(colorScheme)
        break
      }
      case "fill": {
        variantCss = tagFillPrepare(colorScheme)
        break
      }
      case "outline": {
        variantCss = tagOutlinePrepare(colorScheme)
        break
      }
    }
  } else {
    switch (variant) {
      case "light":
      case "fill": {
        variantCss = tagFillNormal(colorScheme)
        break
      }
      case "outline": {
        variantCss = tagOutlineNormal(colorScheme)
        break
      }
    }
  }

  // size
  let sizeCss: SerializedStyles
  switch (size) {
    case "small": {
      sizeCss = applyTagSizeSmall(variant)
      break
    }
    case "medium": {
      sizeCss = applyTagSizeMedium(variant)
      break
    }
    case "large": {
      sizeCss = applyTagSizeLarge(variant)
      break
    }
  }

  const finalStyle = css`
    ${tagContainer};
    ${variantCss};
    ${sizeCss};
  `

  return visible ? <div css={finalStyle} ref={ref} {...otherProps}>
    {props.icon && <span css={leftIcon}>{props.icon}</span>}
    <span css={css`
      font-size: 14px;
      line-height: 22px;
    `}>{props.children}</span>
    {props.closable && <CloseIcon size="7px" css={closeIcon} onClick={() => {
      if (props.onClose != undefined) {
        props.onClose()
      }
    }} />}
  </div> : null
})