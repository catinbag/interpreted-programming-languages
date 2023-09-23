const { readFile } = require('fs').promises
const { join } = require('path')

let content

const filepath = join(__dirname, 'index.html')
const options = 'utf-8'

async function main() {
    try {
        content = await readFile(filepath, options)
        console.log(content)
    } catch (e) {
        throw new Error(e)
    }
}

main()