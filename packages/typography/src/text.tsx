import { Children, forwardRef } from "react"
import { TextProps } from "./interface"
import { Base } from "./base"
import { Trigger } from "@zweb-design/trigger"
import { mergedToString } from "@zweb-design/system"
import { applyBoxStyle, deleteCssProps } from "@zweb-design/theme"

export const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  // get props
  const {
    colorScheme = "blackAlpha",
    ellipsis,
    bold,
    disabled,
    mark,
    underline,
    deleted,
    code,
    copyable,
    fs = "14px",
    ...otherProps
  } = props

  const showTooltip =
    !disabled &&
    (ellipsis == true || (typeof ellipsis == "object" && ellipsis.tooltip))
  const base = (
    <Base
      colorScheme={colorScheme}
      ellipsis={ellipsis}
      bold={bold}
      disabled={disabled}
      mark={mark}
      underline={underline}
      deleted={deleted}
      copyable={copyable}
    >
      {props.children}
    </Base>
  )

  const text = code ? (
    <code
      css={[applyBoxStyle(props)]}
      ref={ref}
      {...deleteCssProps(otherProps)}
    >
      {base}
    </code>
  ) : (
    <div css={[applyBoxStyle(props)]} ref={ref} {...deleteCssProps(otherProps)}>
      {base}
    </div>
  )

  if (showTooltip) {
    return (
      <Trigger content={mergedToString(Children.toArray(props.children))}>
        {text}
      </Trigger>
    )
  } else {
    return text
  }
})

Text.displayName = "Text"
