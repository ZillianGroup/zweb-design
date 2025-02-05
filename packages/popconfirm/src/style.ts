import { css } from "@emotion/react"
import { TriggerColorScheme } from "@zweb-design/trigger"
import { globalColor, zwebPrefix } from "@zweb-design/theme"

export const applyTypographyContainer = css`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 16px;
`

export const applyButtonGroupStyle = css`
  align-self: end;
`

export function applyHeaderStyle(colorScheme: TriggerColorScheme) {
  const textColor =
    colorScheme == "white"
      ? globalColor(`--${zwebPrefix}-grayBlue-02`)
      : globalColor(`--${zwebPrefix}-white-02`)
  return css`
    color: ${textColor};
    font-size: 16px;
    font-weight: 500;
  `
}
