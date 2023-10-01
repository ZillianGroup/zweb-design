import { ReactNode } from "react"
import { CopyIcon, SuccessCircleIcon } from "@zweb-design/icon"
import { globalColor, zwebPrefix } from "@zweb-design/theme"

export class Copyable {
  copyIcon: ReactNode = (
    <CopyIcon color={globalColor(`--${zwebPrefix}-grayBlue-01`)} />
  )
  copiedIcon: ReactNode = (
    <SuccessCircleIcon color={globalColor(`--${zwebPrefix}-green-03`)} />
  )
  copiedToolTip: boolean | string | ReactNode
  copyToolTip: boolean | string | ReactNode
  onCopy?: () => void
}

export class CopyableBuilder {
  private config: Copyable = new Copyable()

  public copyIcon(copyIcon: ReactNode): CopyableBuilder {
    this.config.copyIcon = copyIcon
    return this
  }

  public copiedIcon(copiedIcon: ReactNode): CopyableBuilder {
    this.config.copiedIcon = copiedIcon
    return this
  }

  public copiedTooltip(
    copiedTooltip: boolean | string | ReactNode,
  ): CopyableBuilder {
    this.config.copiedToolTip = copiedTooltip
    return this
  }

  public copyTooltip(
    copyToolTip: boolean | string | ReactNode,
  ): CopyableBuilder {
    this.config.copyToolTip = copyToolTip
    return this
  }

  public onCopy(onCopy: () => void): CopyableBuilder {
    this.config.onCopy = onCopy
    return this
  }

  public create(): Copyable {
    return this.config
  }
}
