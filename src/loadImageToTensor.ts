import fs from 'fs'
import tf from '@tensorflow/tfjs-node'

export const loadImageToTensor = (path: string) => {
  const buffer = fs.readFileSync(path)
  const tensor = tf.node.decodeImage(buffer)
  console.log(tensor)
}
