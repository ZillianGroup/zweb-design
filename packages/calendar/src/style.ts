import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@zweb-design/theme"

export function applyDividerStyle(): SerializedStyles {
  return css`
    width: 100%;
    border-top: 1px solid ${getColor("grayBlue", "08")};
  `
}
