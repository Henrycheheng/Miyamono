const path = require('path')
const docgen = require('react-docgen-typescript');
const fg = require('fast-glob');
const flagRef = require('./flagRef')

const cliProgress = require('cli-progress') // cli的进度条

const colors = require('ansi-colors') // 用于转化color

// 创建一个新的progress bar
const b1 = new cliProgress.SingleBar({
  format:
    'Doc parsing |' +
    colors.cyan('{bar}') +
    '| {precentage}% || {value}/{total} Parsed',
  barCompleteChar: '\u2588', // Unicode完成时的转码
  barIncompleteChar: '\u2591', // 进行中的转码
  hideCursor: true,
})

/** @type {*}
(method) NodeJS.Process.cwd(): string (+1 overload)
The process.cwd() method returns the current working directory of the Node.js process.
  import { cwd } from 'process';
  console.log(`Current directory: ${cwd()}`)
*/
const CWD_PATH = process.cwd()
console.log(`Current directory: ${process.cwd()}`);

module.exports = async function MiyaComponentsDoc() {
  return {
    name: 'miya-components-doc',
    async loadContent() {
      if (flagRef.value) {
        return {}
      }
      const files = await fg(['../ui/src/componetns/**/*.tsx'])
      b1.start(files.length, 0)

      const content = files.reduce((doc, filePath) => {
        const name = filePath.split('/').at(-1).replace(/\.tsx/, '.json')
        const res = {
          ...doc,
          [name]: docgen.parse(path.resolve(CWD_PATH, filePath)),
        }
        b1.increment();
        return res
      }, {})
      b1.stop()
      return content
    },
    contentLoaded: async ({ content, actions: { createData } }) => {
      if (flagRef.value) {
        return
      }
      flagRef.value = true
      for (const key in content) {
        if (Object.hasOwnProperty.call(content, key)) {
          await createData(k, JSON.stringify(content[key]))
        }
      }
    }
  }
}
