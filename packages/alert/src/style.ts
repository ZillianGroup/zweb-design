import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, zwebPrefix } from "@zweb-design/theme"
import { AlertType } from "./interface"

export const colorMap = {
  info: `${globalColor(`--${zwebPrefix}-blue-07`)}`,
  success: `${globalColor(`--${zwebPrefix}-green-07`)}`,
  warning: `${globalColor(`--${zwebPrefix}-orange-07`)}`,
  error: `${globalColor(`--${zwebPrefix}-red-07`)}`,
}

export const iconColorMap = {
  info: `${globalColor(`--${zwebPrefix}-blue-03`)}`,
  success: `${globalColor(`--${zwebPrefix}-green-03`)}`,
  warning: `${globalColor(`--${zwebPrefix}-orange-03`)}`,
  error: `${globalColor(`--${zwebPrefix}-red-03`)}`,
}

export const leftContentStyle = css`
  display: flex;
  flex-grow: 1;
  margin-right: 8px;
  flex-direction: column;
`

export const leftIconStyle = css`
  margin-right: 8px;
  font-size: 16px;
`

export const leftIconSizeStyle = css`
  flex-shrink: 0;
`

export const titleContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const titleStyle = css`
  font-size: 14px;
  color: ${getColor("gray", "02")};
`

export const contentStyle = css`
  font-size: 14px;
  margin-top: 4px;
  color: ${getColor("gray", "04")};
`

export const closeIconStyle = css`
  margin-left: 8px;
`

export function applyAlertContainer(
  type: AlertType,
  showBanner?: boolean,
  hasContent?: boolean,
): SerializedStyles {
  const radius = showBanner
    ? css``
    : css`
        border-radius: 8px;
      `
  return css`
    display: flex;
    flex-direction: row;
    padding: 9px 16px;
    font-size: 14px;
    align-items: ${hasContent ? "flex-start" : "center"};
    background-color: ${colorMap[type]};
    ${radius};
  `
}
