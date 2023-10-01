import { ImgHTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@zweb-design/theme"

export interface ImageProps
  extends ImgHTMLAttributes<HTMLDivElement>,
    BoxProps {
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"
  fallback?: ReactNode
  fallbackSrc?: string
  radius?: string
}
