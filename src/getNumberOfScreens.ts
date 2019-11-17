import wallpaper from 'wallpaper'

export const getNumberOfScreens = async () => {
  const numberOfScreens = await wallpaper.screens()
  return numberOfScreens.length
}
