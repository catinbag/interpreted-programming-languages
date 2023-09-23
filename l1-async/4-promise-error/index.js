function throwError() {
    new Promise((resolve, reject) => {
        throw new Error("Ошибка!");
    }).catch(console.log);
}

// throwError()

function rejectError() {
    new Promise((resolve, reject) => {
        reject(new Error("Ошибка!"));
    }).catch(console.log);
}

// rejectError()

function errorInThen() {
    new Promise((resolve, reject) => {
        resolve("ок");
    }).then((result) => {
        throw new Error("Ошибка!");
    }).catch(console.log);
}

// errorInThen()

function unknownFn() {
    new Promise((resolve, reject) => {
        resolve("ок");
    }).then((result) => {
        nonExistingFn();
    }).catch(console.log);
}

// unknownFn()

function throwingErrors() {
    // the execution: catch -> then
    new Promise((resolve, reject) => {
        throw new Error("Ошибка!");
    }).catch(function (error) {
        console.log("Ошибка обработана");
    }).then(() => console.log("Успех"));
}

// throwingErrors()

function doubleCatch() {
    // the execution: catch -> catch -> then
    new Promise((resolve, reject) => {
        throw new Error("Ошибка!");
    }).catch(function (error) { // (*)
        if (error instanceof URIError) {
            // обрабатываем ошибку
        } else {
            console.log("Не могу обработать ошибку");
            throw error;
        }
    }).then(function () {
        /* не выполнится */
    }).catch(error => { // (**)
        console.log(`Неизвестная ошибка: ${error}`);
    });
}

// doubleCatch()

function noHandle() {
    new Promise(function () {
        nonExistingFn(); // Ошибка
    }).then(() => {
        // обработчики .then, один или более
    }); // без .catch в самом конце
}

// noHandle()