import { HTMLAttributes, ReactNode } from "react"
import { DropdownProps } from "@zweb-design/dropdown"
import { BoxProps } from "@zweb-design/theme"

export type RouteProps = {
  path?: string
  breadcrumbName?: string
  children?: {
    path?: string
    breadcrumbName?: string
  }[]
}

export interface BreadcrumbProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  separator?: string | ReactNode
  routes?: RouteProps[]
  blockRouterChange?: boolean
  maxCount?: number
  onClickPath?: (path: string, last: boolean) => void
}

export interface BreadcrumbItemProps
  extends HTMLAttributes<HTMLAnchorElement>,
    BoxProps {
  last?: boolean
  href?: string
  blockRouterChange?: boolean
  dropList?: ReactNode
  dropdownProps?: DropdownProps
}
