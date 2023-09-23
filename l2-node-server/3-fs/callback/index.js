const { readFile } = require('fs')
const { join } = require('path')

let content

const filepath = join(__dirname, 'index.html')
const options = 'utf-8'

function main() {
    readFile(filepath, options, (err, data) => {
        if (err !== null) {
            throw new Error(err)
        }

        content = data
        console.log(data)
    })
}

main()