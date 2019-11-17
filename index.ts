#!/usr/bin/env node
import program from 'commander'

program
  .description('An automated wallpaper switcher with Tensorflow!')
  .parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
