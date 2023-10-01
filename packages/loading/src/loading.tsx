import { forwardRef } from "react"
import { css } from "@emotion/react"
import { LoadingProps } from "./interface"
import { applyLoadingStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@zweb-design/theme"
import { LoadingIcon } from "@zweb-design/icon"

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref) => {
    const { colorScheme = "gray", size = "medium", ...restProps } = props
    return (
      <LoadingIcon
        spin={true}
        css={css(applyLoadingStyle(colorScheme, size), applyBoxStyle(props))}
        {...deleteCssProps(restProps)}
      />
    )
  },
)

Loading.displayName = "Loading"
