import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BreadcrumbProps } from "@zweb-design/breadcrumb"
import { BoxProps } from "@zweb-design/theme"

export interface PageHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    BoxProps {
  title?: ReactNode
  subTitle?: ReactNode
  breadcrumb?: BreadcrumbProps
  backIcon?: ReactNode | boolean
  extra?: ReactNode
  onBack?: (e: MouseEvent) => void
}
