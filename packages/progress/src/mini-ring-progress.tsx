import { forwardRef } from "react"
import { ProgressProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import {
  applyContainer,
  applyProgressContainer,
  applyProgressContainerBg,
  applySvgContainer,
} from "./common-style"
import { applyBoxStyle } from "@illa-design/theme"

export const MiniRingProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type = "line",
      steps,
      status = "normal",
      color = "blue",
      w = "16px",
      strokeWidth = "4px",
      trailColor = "gray",
      showText = true,
      formatText = (percent: number) => {
        return `${percent}%`
      },
      percent = 0,
      ...otherProps
    } = props

    const radius = `calc((${w} - ${strokeWidth}) / 2)`
    const center = `calc(${w} / 2)`

    let finalColor: string

    switch (status) {
      case "normal":
        finalColor = color
        break
      case "success":
        finalColor = "green"
        break
      case "error":
        finalColor = "red"
        break
    }

    return (
      <div
        css={[applyContainer(w), applyBoxStyle(props)]}
        ref={ref}
        {...otherProps}
      >
        <Trigger disabled={!showText} content={formatText(percent)}>
          <svg css={applySvgContainer(w)}>
            <circle
              css={applyProgressContainerBg(trailColor, w, strokeWidth)}
              fill="none"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <circle
              css={applyProgressContainer(finalColor, w, strokeWidth, percent)}
              fill="none"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
          </svg>
        </Trigger>
      </div>
    )
  },
)

MiniRingProgress.displayName = "MiniRingProgress"
