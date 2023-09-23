// async fn
async function f() {
    return 1;
}

// f().then(console.log);

function err() {
    // работает только внутри async–функций
    // const value = await promise;
}

async function asyncFn() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready!"), 1000)
    });

    const result = await promise; // будет ждать, пока промис не выполнится

    console.log(result);
}

// asyncFn();

async function handleError() {
    try {
        await fetch('http://no-such-url.com');
    } catch (err) {
        console.log(err);
    }
}

// handleError()

async function unhandleError() {
    await fetch('http://no-such-url'); // вернёт промис в состоянии rejected
}

// unhandleError().catch(console.log);