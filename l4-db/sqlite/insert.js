const db = require("./db");
const { getCmdArgs } = require("./../utils/args");

function insertRow() {
    const [name, color, weight] = getCmdArgs();
    db.run(
        `INSERT INTO users (name,  age) VALUES (?, ?)`,
        [name, color, weight],
        function (error) {
            if (error) {
                console.error(error.message);
            }
            console.log(`Inserted a row with the ID: ${this.lastID}`);
        }
    );
}

insertRow();