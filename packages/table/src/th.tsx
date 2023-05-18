import * as React from "react"
import { forwardRef, useContext, useRef } from "react"
import { ThProps } from "./interface"
import {
  applyBorderStyle,
  applyContentContainer,
  applySizeStyle,
  applyThStyle,
  thContentStyle,
} from "./style"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"
import { mergeRefs } from "@illa-design/system"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Th = forwardRef<HTMLTableHeaderCellElement, ThProps>(
  (props, ref) => {
    const {
      size,
      borderedCell,
      striped,
      align = "center",
      children,
      showFooter,
      showHeader,
      colIndex,
      rowIndex,
      lastCol,
      lastRow,
      ...otherProps
    } = props

    const tableContext = useContext(TableContext)

    return (
      <th
        css={css(
          applyThStyle(),
          applySizeStyle(size ?? tableContext?.size ?? "medium"),
          applyBorderStyle(
            borderedCell ?? tableContext?.borderedCell,
            striped ?? tableContext?.striped,
            colIndex,
            rowIndex,
            lastCol,
            lastRow,
          ),
          applyContentContainer(align ?? tableContext?.align ?? "left"),
          thContentStyle,
          applyBoxStyle(props),
        )}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {children}
      </th>
    )
  },
)

Th.displayName = "Th"
