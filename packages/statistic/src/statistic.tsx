import {
  forwardRef,
  useMemo,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from "react"
import { StatisticProps } from "./interface"
import { animate, AnimationPlaybackControls } from "framer-motion"
import { Skeleton } from "@zweb-design/skeleton"
import dayjs, { Dayjs } from "dayjs"
import {
  statisticStyle,
  statisticContentStyle,
  applyStatisticDecoratorStyle,
  statisticTitleStyle,
  statisticValueStyle,
  statisticExtraStyle,
} from "./style"
import { isObject } from "@zweb-design/system"
import { applyBoxStyle, deleteCssProps } from "@zweb-design/theme"

type StatisticHandle = {
  onCountUp: () => void
}

export const Statistic = forwardRef<any, StatisticProps>((props, ref) => {
  const {
    title,
    value = 0,
    decimalSeparator = ".",
    format,
    groupSeparator = ",",
    loading,
    precision,
    suffix,
    prefix,
    extra,
    countUp,
    countFrom = 0,
    countDuration = 2000,
    ...restProps
  } = props

  const [currentValue, setValue] = useState<string | number | Dayjs>(value)

  const controlRef = useRef<AnimationPlaybackControls | null>()

  function onCountUp(from = countFrom, to = value) {
    if (from !== to) {
      controlRef.current = animate(from, Number(to), {
        duration: Math.floor(countDuration / 1000),
        ease: "easeOut",
        onUpdate: (latest) => {
          setValue(latest)
        },
        onComplete: () => {
          setValue(to)
        },
      })
    }
  }

  useEffect(() => {
    if (props.countUp) {
      if (controlRef.current) {
        controlRef.current.stop()
      }
      if (currentValue !== value) {
        onCountUp(Number(currentValue), value)
      } else {
        onCountUp()
      }
    } else {
      setValue(value)
    }

    return () => {
      controlRef.current && controlRef.current.stop()
      controlRef.current = null
    }
  }, [value])

  useImperativeHandle<any, StatisticHandle>(ref, () => ({
    onCountUp,
  }))

  const renderValue = useMemo<string | number | Dayjs>(() => {
    if (format) {
      return dayjs(currentValue).format(format)
    }
    let temp: number | string = Number(currentValue)
    if (!isFinite(temp)) {
      return currentValue
    }
    if (precision !== void 0) {
      temp = temp.toFixed(precision)
    }
    let [int, decimal] = String(temp).split(".")
    int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator)

    return decimal !== void 0 ? int + decimalSeparator + decimal : int
  }, [format, value, groupSeparator, decimalSeparator, precision, currentValue])

  return (
    <div
      css={[statisticStyle, applyBoxStyle(props)]}
      {...deleteCssProps(restProps)}
    >
      {title && <div css={statisticTitleStyle}>{title}</div>}
      <div>
        <Skeleton
          animation
          visible={!!loading}
          text={{ rows: 1, width: "100%" }}
        >
          <div css={statisticContentStyle}>
            {prefix && (
              <span css={applyStatisticDecoratorStyle(true, !isObject(prefix))}>
                {prefix}
              </span>
            )}
            <span css={statisticValueStyle}>{renderValue.toString()}</span>
            {suffix && (
              <span
                css={applyStatisticDecoratorStyle(false, !isObject(suffix))}
              >
                {suffix}
              </span>
            )}
          </div>
        </Skeleton>
        {extra && <div css={statisticExtraStyle}>{extra}</div>}
      </div>
    </div>
  )
})

Statistic.displayName = "Statistic"
