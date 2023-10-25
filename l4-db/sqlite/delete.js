const db = require("./db");
const { getCmdArgs } = require("./../utils/args");

async function deleteRow() {
    const [id] = getCmdArgs();
    db.run(`DELETE FROM users WHERE id = ?`, [id], function (error) {
        if (error) {
            return console.error(error.message);
        }
        console.log(`Row with the ID ${id} has been deleted`);
    });
}

deleteRow();