import { chooseSingleWallpaper } from './chooseSingleWallpaper'
import * as mobilenet from '@tensorflow-models/mobilenet'
import fs from 'fs'
import jpeg from 'jpeg-js'
import * as tf from '@tensorflow/tfjs'

const MOBILENET_MODEL_PATH =
  // tslint:disable-next-line:max-line-length
  'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json'

export const chooseMultipleWallpapers = async (
  numberOfScreens: number,
  wallpaperDirectory: string,
  wallpaperList: string[],
) => {
  let mobilenet
  mobilenet = await tf.loadLayersModel(MOBILENET_MODEL_PATH)

  // Warmup the model. This isn't necessary, but makes the first prediction
  // faster. Call `dispose` to release the WebGL memory allocated for the return
  // value of `predict`.
  mobilenet.predict(tf.zeros([null, 224, 224, 3])).dispose()
}
