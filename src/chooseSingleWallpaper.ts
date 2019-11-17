export const chooseSingleWallpaper = (
  wallpaperDirectory: string,
  wallpaperList: string[],
) =>
  `${wallpaperDirectory}${
    wallpaperList[Math.floor(Math.random() * Math.floor(wallpaperList.length))]
  }`
