#!/usr/bin/env node
import wallpaper from 'wallpaper'
import program from 'commander'
import { resolveHome } from './resolveHome'
import { getFilesFromDirectory } from './getFilesFromDirectory'
import { getNumberOfScreens } from './getNumberOfScreens'

const parsePath = (path: string) => {
  const homeResolved = resolveHome(path)
  if (homeResolved[homeResolved.length] !== '/') {
    return `${homeResolved}/`
  }
  return homeResolved
}

const secondsToMilliseconds = (seconds: number) => seconds * 1000

program
  .requiredOption(
    '-p, --path <path>',
    'The path to your wallpaper directory',
    parsePath,
  )
  .option(
    '-i, --interval <interval>',
    'The interval between wallpaper changes in seconds',
    secondsToMilliseconds,
    60000,
  )
  .parse(process.argv)

const runSwitcher = async () => {
  const wallpaperList = getFilesFromDirectory(program.path)
  const numberOfWallpapers = wallpaperList.length
  const numberOfScreens = await getNumberOfScreens()
  console.log(numberOfScreens)

  const chooseWallpaper = () =>
    `${program.path}${
      wallpaperList[Math.floor(Math.random() * Math.floor(numberOfWallpapers))]
    }`
  wallpaper.set(chooseWallpaper())
}

setInterval(runSwitcher, program.interval)
