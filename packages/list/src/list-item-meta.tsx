import { forwardRef } from "react"
import { ListItemMetaProps } from "./interface"
import {
  applyItemMetaAvatar,
  applyItemMetaContainer,
  applyListItemMetaTitleStyle,
  applyTypoStyle,
} from "./style"
import { Avatar } from "@zweb-design/avatar"
import { Paragraph, Text, Typography } from "@zweb-design/typography"
import {
  applyBoxStyle,
  deleteCssProps,
  globalColor,
  zwebPrefix,
} from "@zweb-design/theme"

export const ListItemMeta = forwardRef<HTMLDivElement, ListItemMetaProps>(
  (props, ref) => {
    const { title, avatar, description, ...otherProps } = props
    return (
      <div
        css={[applyItemMetaContainer(), applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {avatar && (
          <Avatar
            css={applyItemMetaAvatar}
            size="medium"
            shape="square"
            src={avatar}
          />
        )}
        <Typography css={applyTypoStyle}>
          {title && typeof title === "string" ? (
            <Text fs="14px" fw="500" colorScheme="gray">
              {title}
            </Text>
          ) : (
            <div css={applyListItemMetaTitleStyle}>{title}</div>
          )}
          {title && description && <div style={{ height: "4px" }} />}
          {description && (
            <Paragraph
              fs="14px"
              colorScheme={
                title == undefined
                  ? globalColor(`--${zwebPrefix}-grayBlue-02`)
                  : globalColor(`--${zwebPrefix}-grayBlue-04`)
              }
            >
              {description}
            </Paragraph>
          )}
        </Typography>
      </div>
    )
  },
)

ListItemMeta.displayName = "ListItemMeta"
