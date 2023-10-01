import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, zwebPrefix } from "@zweb-design/theme"
import { TriggerColorScheme } from "@zweb-design/trigger"

export function applyListCss(): SerializedStyles {
  return css`
    position: relative;
    border-radius: 8px;
    overflow: auto;
    background-color: ${globalColor(`--${zwebPrefix}-white-01`)};
    padding: 8px 0;
  `
}

export function applyItemCss(
  colorScheme: TriggerColorScheme,
  hoverColorScheme: TriggerColorScheme,
  isDisabled?: boolean,
  selected?: boolean,
  deleted?: boolean,
): SerializedStyles {
  const hoverCss = css`
    color: ${deleted ? getColor("red", "01") : getColor("grayBlue", "02")};

    &:hover {
      cursor: pointer;
      background-color: ${deleted
        ? getColor("red", "07")
        : getColor(hoverColorScheme, "09")};
    }
  `

  const disabledCss = css`
    cursor: not-allowed;
    color: ${globalColor(`--${zwebPrefix}-grayBlue-05`)};
  `

  const selectedStyle = css`
    color: ${getColor(colorScheme, "01")};
    background: ${getColor(colorScheme, "07")};
  `

  let finalStyle

  if (selected) {
    finalStyle = selectedStyle
  } else {
    if (isDisabled) {
      finalStyle = disabledCss
    } else {
      finalStyle = hoverCss
    }
  }

  return css`
    font-size: 14px;
    line-height: 32px;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    padding: 0 16px;
    ${finalStyle};
  `
}
