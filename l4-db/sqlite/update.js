const db = require("./db");
const { getCmdArgs } = require("./../utils/args");

function updateRow() {
    const [id, name] = getCmdArgs();
    db.run(
        `UPDATE users SET name = ? WHERE id = ?`,
        [name, id],
        function (error) {
            if (error) {
                console.error(error.message);
            }
            console.log(`Row ${id} has been updated`);
        }
    );
}

updateRow();