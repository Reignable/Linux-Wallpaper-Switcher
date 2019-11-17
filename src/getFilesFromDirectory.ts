import fs from 'fs'

export const getFilesFromDirectory = (path: string) => fs.readdirSync(path)
