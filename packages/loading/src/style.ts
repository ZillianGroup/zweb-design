import { css, SerializedStyles, keyframes } from "@emotion/react"
import { getColor, globalColor, zwebPrefix } from "@zweb-design/theme"
import { LoadingColorScheme, LoadingSize } from "./interface"

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export function applyLoadingStyle(
  colorScheme: LoadingColorScheme,
  size: LoadingSize,
): SerializedStyles {
  let sizeCss
  switch (size) {
    case "small":
      sizeCss = css`
        width: 12px;
        height: 12px;
      `
      break
    case "large":
      sizeCss = css`
        width: 24px;
        height: 24px;
      `
      break
    default:
      sizeCss = css`
        width: 16px;
        height: 16px;
      `
  }
  return css`
    ${sizeCss};
    color: ${getColor(colorScheme, "02")};
  `
}
