export const zwebPrefix = "zweb"

export function globalColor(key: string): string {
  if (key == "transparent") {
    return "transparent"
  }
  return globalColorNormal.get(key) ?? ""
}

export function hasGlobalColor(key: string): boolean {
  return globalColorNormal.has(key)
}

const globalColorNormal: Map<string, string> = new Map([
  ["--zweb-white-01", "#ffffffff"],
  ["--zweb-white-02", "#ffffffe6"],
  ["--zweb-white-03", "#ffffffbf"],
  ["--zweb-white-04", "#ffffff80"],
  ["--zweb-white-05", "#ffffff4d"],
  ["--zweb-white-06", "#ffffff33"],
  ["--zweb-white-07", "#ffffff29"],
  ["--zweb-white-08", "#ffffff1f"],
  ["--zweb-white-09", "#ffffff1a"],

  ["--zweb-gray-01", "#000000ff"],
  ["--zweb-gray-02", "#1f1f1fff"],
  ["--zweb-gray-03", "#5c5c5cff"],
  ["--zweb-gray-04", "#999999ff"],
  ["--zweb-gray-05", "#c2c2c2ff"],
  ["--zweb-gray-06", "#d6d6d6ff"],
  ["--zweb-gray-07", "#e0e0e0ff"],
  ["--zweb-gray-08", "#ebebebff"],
  ["--zweb-gray-09", "#f5f5f5ff"],

  ["--zweb-grayBlue-01", "#0b0c0fff"],
  ["--zweb-grayBlue-02", "#1d2129ff"],
  ["--zweb-grayBlue-03", "#787e85ff"],
  ["--zweb-grayBlue-04", "#a9aeb8ff"],
  ["--zweb-grayBlue-05", "#bbc0c9ff"],
  ["--zweb-grayBlue-06", "#c9cdd4ff"],
  ["--zweb-grayBlue-07", "#dadee5ff"],
  ["--zweb-grayBlue-08", "#e5e6ebff"],
  ["--zweb-grayBlue-09", "#f2f3f5ff"],

  ["--zweb-techPurple-n-01", "#5343d0ff"],
  ["--zweb-techPurple-01", "#654aecff"],
  ["--zweb-techPurple-02", "#775ff2ff"],
  ["--zweb-techPurple-03", "#a087f4ff"],
  ["--zweb-techPurple-04", "#bca6f7ff"],
  ["--zweb-techPurple-05", "#d6c7fbff"],
  ["--zweb-techPurple-06", "#eadeffff"],
  ["--zweb-techPurple-07", "#f8f5ffff"],

  ["--zweb-techPink-n-01", "#c24499ff"],
  ["--zweb-techPink-01", "#ff58beff"],
  ["--zweb-techPink-02", "#ff75c5ff"],
  ["--zweb-techPink-03", "#ff92ceff"],
  ["--zweb-techPink-04", "#ffaed8ff"],
  ["--zweb-techPink-05", "#ffcbe4ff"],
  ["--zweb-techPink-06", "#ffe8f2ff"],
  ["--zweb-techPink-07", "#fff5f9ff"],

  ["--zweb-blackAlpha-01", "#000000e0"],
  ["--zweb-blackAlpha-02", "#000000e6"],
  ["--zweb-blackAlpha-03", "#000000bf"],
  ["--zweb-blackAlpha-04", "#00000080"],
  ["--zweb-blackAlpha-05", "#0000004d"],
  ["--zweb-blackAlpha-06", "#00000033"],
  ["--zweb-blackAlpha-07", "#00000029"],
  ["--zweb-blackAlpha-08", "#00000014"],
  ["--zweb-blackAlpha-09", "#0000000a"],

  ["--zweb-blue-n-01", "#083bc7ff"],
  ["--zweb-blue-01", "#134ae0ff"],
  ["--zweb-blue-02", "#175cebff"],
  ["--zweb-blue-03", "#1e6fffff"],
  ["--zweb-blue-04", "#5c99ffff"],
  ["--zweb-blue-05", "#99beffff"],
  ["--zweb-blue-06", "#c2d8ffff"],
  ["--zweb-blue-07", "#edf4ffff"],

  ["--zweb-purple-n-01", "#6f2fc4ff"],
  ["--zweb-purple-01", "#833fdfff"],
  ["--zweb-purple-02", "#8e4be0ff"],
  ["--zweb-purple-03", "#a55bf5ff"],
  ["--zweb-purple-04", "#c87ffaff"],
  ["--zweb-purple-05", "#dfb2fcff"],
  ["--zweb-purple-06", "#f0d6feff"],
  ["--zweb-purple-07", "#fbf2feff"],

  ["--zweb-red-n-01", "#c21f1fff"],
  ["--zweb-red-01", "#e02424ff"],
  ["--zweb-red-02", "#eb3639ff"],
  ["--zweb-red-03", "#ff4747ff"],
  ["--zweb-red-04", "#ff7272ff"],
  ["--zweb-red-05", "#ffa3a3ff"],
  ["--zweb-red-06", "#fcccccff"],
  ["--zweb-red-07", "#feeeeeff"],

  ["--zweb-green-n-01", "#006134ff"],
  ["--zweb-green-01", "#007a41ff"],
  ["--zweb-green-02", "#118f58ff"],
  ["--zweb-green-03", "#00aa5bff"],
  ["--zweb-green-04", "#00d689ff"],
  ["--zweb-green-05", "#66dfb0ff"],
  ["--zweb-green-06", "#d9ffeaff"],
  ["--zweb-green-07", "#ecfbf5ff"],

  ["--zweb-yellow-n-01", "#c76b00ff"],
  ["--zweb-yellow-01", "#e07800ff"],
  ["--zweb-yellow-02", "#eb9000ff"],
  ["--zweb-yellow-03", "#ffab00ff"],
  ["--zweb-yellow-04", "#ffcd00ff"],
  ["--zweb-yellow-05", "#ffe266ff"],
  ["--zweb-yellow-06", "#fff2a3ff"],
  ["--zweb-yellow-07", "#fffcebff"],

  ["--zweb-orange-n-01", "#c72c15ff"],
  ["--zweb-orange-01", "#e03118ff"],
  ["--zweb-orange-02", "#eb4825ff"],
  ["--zweb-orange-03", "#ff5e2fff"],
  ["--zweb-orange-04", "#ff8246ff"],
  ["--zweb-orange-05", "#ffb490ff"],
  ["--zweb-orange-06", "#ffd7bfff"],
  ["--zweb-orange-07", "#fff5f0ff"],

  ["--zweb-cyan-n-01", "#058bb2ff"],
  ["--zweb-cyan-01", "#069fccff"],
  ["--zweb-cyan-02", "#08a7ccff"],
  ["--zweb-cyan-03", "#0cc1e2ff"],
  ["--zweb-cyan-04", "#12ddf2ff"],
  ["--zweb-cyan-05", "#71ebf7ff"],
  ["--zweb-cyan-06", "#d1fcffff"],
  ["--zweb-cyan-07", "#effdfeff"],

  ["--zweb-brand-01", "#654aecff"],
  ["--zweb-brand-02", "#ff58beff"],
])
