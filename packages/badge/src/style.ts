import { css, keyframes, SerializedStyles } from "@emotion/react"
import { globalColor, zwebPrefix } from "@zweb-design/theme"
import { isObject } from "@zweb-design/system"
import { BadgeColorScheme, BadgeStatus } from "./interface"
import { ReactNode } from "react"

const statusColor = {
  default: `--${zwebPrefix}-grayBlue-06`,
  processing: `--${zwebPrefix}-blue-03`,
  success: `--${zwebPrefix}-green-03`,
  warning: `--${zwebPrefix}-yellow-03`,
  error: `--${zwebPrefix}-red-03`,
}

export const badgeScale = keyframes`
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
`
export const applyBadge = css`
  display: inline-block;
  position: relative;
  line-height: 1;
`

export function applyBadgeDot(
  color: string,
  hasChildren: boolean,
  hasStatus?: boolean,
): SerializedStyles {
  let position: string = ``
  if (!hasStatus && hasChildren) {
    position += `
      position: absolute;
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
      right: 0px;
    `
  }
  return css`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: solid 1px ${globalColor(`--${zwebPrefix}-white-01`)};
    background-color: ${color};
    display: inline-block;
    ${position}
  `
}

export function applyBadgeNumberOrText(
  color: string,
  hasChildren: boolean,
  length: number,
): SerializedStyles {
  const padding = length > 1 ? "padding: 0 6px;" : ""
  const position = hasChildren
    ? `
    position: absolute;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    right: 0px;
  `
    : ""
  return css`
    min-width: 20px;
    height: 20px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    transition: 0.15s all linear;
    border: solid 2px ${globalColor(`--${zwebPrefix}-white-01`)};
    background-color: ${color};
    color: ${globalColor(`--${zwebPrefix}-white-01`)};
    text-align: center;
    white-space: pre;
    ${position + padding}
  `
}

export function applyBadgeScale(isChanged: boolean = false): SerializedStyles {
  return isChanged
    ? css`
        animation-name: ${badgeScale};
        animation-timing-function: cubic-bezier(0.3, 1.3, 0.3, 1);
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-play-state: running;
      `
    : css``
}

export const applyBadgeStatusWrapper = css`
  display: inline-flex;
  align-items: center;
`

export const applyBadgeStatusText = css`
  margin-left: 9px;
  font-size: 12px;
  line-height: 1.33;
  color: ${globalColor(`--${zwebPrefix}-grayBlue-02`)};
`

export function getDotColor(
  count: number | ReactNode,
  colorScheme?: BadgeColorScheme,
  status?: BadgeStatus,
): string {
  let colorStyle
  if (colorScheme) {
    colorStyle = globalColor(`--${zwebPrefix}-${colorScheme}-03`)
    if (!colorStyle) {
      colorStyle = colorScheme
    }
  }
  if (status) {
    colorStyle = globalColor(statusColor[status])
  }
  colorStyle = colorStyle
    ? colorStyle
    : isObject(count)
    ? globalColor(`--${zwebPrefix}-white-01`)
    : globalColor(`--${zwebPrefix}-red-03`)
  return colorStyle
}
