import { globalColor, zwebPrefix } from "@zweb-design/theme"
import { css } from "@emotion/react"

export function applyImageCss(
  objFit: "fill" | "contain" | "cover" | "none" | "scale-down",
  radius: string,
) {
  return css`
    object-fit: ${objFit};
    border-radius: ${radius};
  `
}

export function applyDefaultFallback(
  width: string | number,
  height: string | number,
  radius: string,
) {
  return css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${globalColor(`--${zwebPrefix}-grayBlue-09`)};
    border-radius: ${radius};
    width: ${width};
    height: ${height};
  `
}

export const applyOuterCss = css`
  vertical-align: middle;
  display: inline-flex;
`
