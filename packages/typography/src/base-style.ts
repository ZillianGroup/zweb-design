import { TypographyColorScheme } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, zwebPrefix } from "@zweb-design/theme"

const colorSchemes = [
  "white",
  "blackAlpha",
  "gray",
  "grayBlue",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "cyan",
  "purple",
]

export const applyOperationSpan = css`
  display: inline-block;
`

export const applyCopyContainer = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export function applyFontColor(
  colorScheme: TypographyColorScheme,
): SerializedStyles {
  const color = colorSchemes.includes(colorScheme)
    ? globalColor(`--${zwebPrefix}-${colorScheme}-02`)
    : colorScheme

  return css`
    color: ${color};
  `
}

export function applyFontContentStyle(
  bold?: boolean,
  mark?: boolean | TypographyColorScheme,
  underline?: boolean,
  deleted?: boolean,
  disabled?: boolean,
): SerializedStyles {
  let finalCss = css``

  if (bold) {
    finalCss = css`
      ${finalCss};
      font-weight: bold;
    `
  }

  if (mark && typeof mark != "string") {
    finalCss = css`
      ${finalCss};
      background-color: ${globalColor(`--${zwebPrefix}-yellow-06`)};
    `
  }
  if (typeof mark == "string") {
    const bgColor = colorSchemes.includes(mark)
      ? globalColor(`--${zwebPrefix}-${mark}-06`)
      : mark
    finalCss = css`
      ${finalCss};
      background-color: ${bgColor};
    `
  }

  finalCss = css`
    ${finalCss};
    text-decoration: ${underline && "underline"} ${deleted && "line-through"};
  `

  if (disabled) {
    finalCss = css`
      ${finalCss};
      cursor: not-allowed;
      color: ${globalColor(`--${zwebPrefix}-grayBlue-05`)};
      user-select: none;
    `
  }

  return finalCss
}

export function applyExpandLabelCss(): SerializedStyles {
  return css`
    cursor: pointer;
    margin: 0 4px;
    text-decoration: none;
    color: ${globalColor(`--${zwebPrefix}-blue-03`)};
  `
}

export function applyCopyableContainerSize(): SerializedStyles {
  return css`
    cursor: pointer;
    margin-left: 4px;
    color: ${globalColor(`--${zwebPrefix}-grayBlue-02`)};
  `
}

export const applyCopyableIconSize = css`
  cursor: pointer;
  font-size: 0.75em;
  margin-left: 4px;
  color: ${globalColor(`--${zwebPrefix}-grayBlue-02`)};
  display: inline-flex;
  align-items: center;
`
