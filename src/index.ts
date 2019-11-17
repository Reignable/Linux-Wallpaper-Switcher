#!/usr/bin/env node
import program from 'commander'
import wallpaper from 'wallpaper'
import { chooseMultipleWallpapers } from './chooseMultipleWallpapers'
import { chooseSingleWallpaper } from './chooseSingleWallpaper'
import { getFilesFromDirectory } from './getFilesFromDirectory'
import { getNumberOfScreens } from './getNumberOfScreens'
import { resolveHome } from './resolveHome'
// require('@tensorflow/tfjs-node')

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

const wallpaperList = getFilesFromDirectory(program.path)

const runSwitcher = async () => {
  const numberOfScreens = await getNumberOfScreens()
  // if (numberOfScreens > 1) {
  chooseMultipleWallpapers(numberOfScreens, program.path, wallpaperList)
  // } else {
  wallpaper.set(chooseSingleWallpaper(program.path, wallpaperList))
  // }
}

runSwitcher()
// setInterval(runSwitcher, program.interval)
