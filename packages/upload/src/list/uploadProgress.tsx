import { FC, useContext } from "react"
import { STATUS, UploadProgressProps } from "../interface"
import { Progress } from "@zweb-design/progress"
import { UploadIcon, SuccessIcon } from "@zweb-design/icon"
import { isFunction } from "@zweb-design/system"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@zweb-design/config-provider"
import {
  successIconStyle,
  uploadProgressFailStyle,
  uploadProgressStatus,
} from "../style"
import { handleKeyDown } from "../utils"
import { globalColor, zwebPrefix } from "@zweb-design/theme"

const UploadProgress: FC<UploadProgressProps> = (props) => {
  const { file, progressProps, progressRender, onReupload, onUpload } = props
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.upload ?? def.upload
  const { status, percent = 0 } = file
  const progressStatus =
    status === STATUS.FAIL
      ? "error"
      : status === STATUS.SUCCESS
      ? "success"
      : "normal"

  const handleFileReupload = () => {
    onReupload && onReupload(file)
  }

  const dom = (
    <>
      {status === STATUS.FAIL && props.reuploadIcon !== null && (
        <span
          onClick={handleFileReupload}
          css={uploadProgressFailStyle}
          tabIndex={0}
          role="button"
          aria-label={locale.retry}
          onKeyDown={(e) => handleKeyDown(e, handleFileReupload)}
        >
          {props.reuploadIcon ||
            (props.listType === "picture-card" ? <UploadIcon /> : locale.retry)}
        </span>
      )}

      {status === STATUS.SUCCESS && props.successIcon !== null && (
        <span css={successIconStyle}>
          {props.successIcon || <SuccessIcon />}
        </span>
      )}

      {status !== STATUS.SUCCESS && status !== STATUS.FAIL && (
        <div css={uploadProgressStatus}>
          <Progress
            showText={false}
            type="miniCircle"
            w="16px"
            h="16px"
            status={progressStatus}
            percent={percent}
            color={globalColor(`--${zwebPrefix}-blue-03`)}
            trailColor={globalColor(`--${zwebPrefix}-blue-06`)}
            {...progressProps}
          />
        </div>
      )}
    </>
  )

  return isFunction(progressRender) ? progressRender(file, dom) : dom
}

export default UploadProgress
