import { forwardRef, useContext } from "react"
import { Image } from "@zweb-design/image"
import { EmptyIcon } from "@zweb-design/icon"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@zweb-design/config-provider"
import { applyDescriptionStyle, applyEmptyContainerStyle } from "./style"
import { EmptyProps } from "./interface"
import {
  applyBoxStyle,
  deleteCssProps,
  globalColor,
  zwebPrefix,
} from "@zweb-design/theme"

export const Empty = forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.empty ?? def.empty

  const {
    icon = (
      <EmptyIcon
        size="48px"
        color={globalColor(`--${zwebPrefix}-grayBlue-04`)}
      />
    ),
    imgSrc,
    divideSize = "16px",
    paddingVertical = "23px",
    description = locale["noData"],
    ...rest
  } = props

  return (
    <div
      ref={ref}
      css={[applyEmptyContainerStyle(paddingVertical), applyBoxStyle(props)]}
      {...deleteCssProps(rest)}
    >
      <div>
        {imgSrc ? (
          <Image src={imgSrc} objectFit="contain" width="48px" height="48px" />
        ) : (
          icon
        )}
      </div>
      <div css={applyDescriptionStyle(divideSize)}>{description}</div>
    </div>
  )
})

Empty.displayName = "Empty"
