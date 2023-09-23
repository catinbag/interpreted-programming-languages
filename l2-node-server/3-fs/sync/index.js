const { readFileSync } = require('fs')
const { join } = require('path')

let content

const filepath = join(__dirname, 'index.html')
const options = 'utf-8'

function main() {
    try {
        content = readFileSync(filepath, options)
        console.log(content)
    } catch (e) {
        throw new Error(e)
    }
}

main()