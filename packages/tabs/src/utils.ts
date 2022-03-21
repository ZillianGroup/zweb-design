import { TabPosition } from "./interface"
export const isHorizontalLayout = (tabPosition?: TabPosition) => {
  return tabPosition === "left" || tabPosition === "right"
}

export const isAhead = (tabPosition?: TabPosition) => {
  return tabPosition === "top" || tabPosition === "left"
}

export function getChildrenHeightArr(parent: HTMLDivElement) {
  const children = parent.children
  const len = children?.length ?? 0
  const heightArr: number[] = []
  for (let i = 0; i < len; i++) {
    heightArr.push(children?.item(i)?.clientHeight ?? 0)
  }
  return heightArr
}

export function getChildrenWidthArr(parent: HTMLDivElement | null) {
  if (!parent) return []
  const children = parent.children
  const len = children?.length ?? 0
  const widthArr: number[] = []
  for (let i = 0; i < len; i++) {
    widthArr.push(children?.item(i)?.clientWidth ?? 0)
  }
  return widthArr
}

export const getTargetPosition = (
  childrenWidth: number[],
  tabWidth: number,
  currentPosition: number,
) => {
  let position = 0
  const len = childrenWidth.length
  if (currentPosition == 0) {
    let i
    for (i = 0; i < len && position < tabWidth; i++) {
      position += childrenWidth[i]
    }
    return position - childrenWidth[i - 1]
  } else {
    let m
    let n
    for (m = 0; m < len && position < currentPosition; m++) {
      position += childrenWidth[m]
    }
    let distance = 0
    for (n = m + 1; n < len && distance < tabWidth; n++) {
      distance += childrenWidth[n]
    }
    return position + distance - childrenWidth[n - 1]
  }
}

export const getLeftTargetPosition = (
  childrenWidth: number[],
  tabWidth: number,
  currentPosition: number,
) => {
  let i
  const len = childrenWidth.length
  const target = currentPosition - tabWidth
  let distance = 0
  for (i = 0; i < len && distance < target; i++) {
    distance += childrenWidth[i]
  }
  return distance - childrenWidth[i - 1]
}
