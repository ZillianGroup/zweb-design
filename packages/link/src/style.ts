import { css } from "@emotion/react"
import { LinkColorScheme } from "./interface"
import { globalColor, zwebPrefix } from "@zweb-design/theme"

export const colorSchemes: LinkColorScheme[] = [
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
  "techPink",
  "techPurple",
]

export function applyLinkContainer(
  colorScheme: LinkColorScheme,
  hoverable: boolean,
) {
  const hoverBgColor =
    colorScheme == "white"
      ? globalColor(`--${zwebPrefix}-white-06`)
      : globalColor(`--${zwebPrefix}-grayBlue-09`)
  let hoverCss
  if (hoverable) {
    hoverCss = css`
      &:hover {
        background-color: ${hoverBgColor};
      }
    `
  }
  return css`
    transition: background-color 200ms ease-in-out;
    vertical-align: middle;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    padding: 1px 4px;
    font-size: 14px;
    line-height: 22px;
    ${hoverCss};
  `
}

export const applyLeftIcon = css`
  margin-right: 4px;
`

export function applyDisable(colorScheme: LinkColorScheme, disabled?: boolean) {
  const textColor = colorSchemes.includes(colorScheme)
    ? globalColor(`--${zwebPrefix}-${colorScheme}-02`)
    : colorScheme
  const finalColor = disabled
    ? globalColor(`--${zwebPrefix}-${colorScheme}-05`)
    : textColor
  const cursor = disabled ? "not-allowed" : "pointer"
  return css`
    color: ${finalColor};
    cursor: ${cursor};
  `
}
