import { css, SerializedStyles } from "@emotion/react"
import { ProgressColorScheme } from "./interface"
import { getColor } from "@zweb-design/theme"

export const applyCircleStatus = css`
  display: inline-flex;
  font-size: 16px;
`

export function applyCircleSvgContainer(
  width: string,
  trailColorScheme: ProgressColorScheme,
): SerializedStyles {
  let color
  if (trailColorScheme == "gray" || trailColorScheme == "grayBlue") {
    color = getColor(trailColorScheme, "08")
  } else {
    color = getColor(trailColorScheme, "06")
  }
  return css`
    width: ${width};
    height: ${width};
    border-radius: 50%;
    background-color: ${color};
  `
}

export function applyCircleProgressContainer(
  colorScheme: ProgressColorScheme,
  width: string,
  percent: number,
): SerializedStyles {
  const perimeter = `calc(${Math.PI} * 2 * ${width} / 2)`

  let color
  if (colorScheme == "gray" || colorScheme == "grayBlue") {
    color = getColor(colorScheme, "02")
  } else {
    color = getColor(colorScheme, "03")
  }

  return css`
    transition: stroke-dashoffset 200ms;
    stroke: ${color};
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: ${perimeter};
    stroke-dashoffset: calc(${perimeter} - (${percent} / 100 * ${perimeter}));
  `
}
