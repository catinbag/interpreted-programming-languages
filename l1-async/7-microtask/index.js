function demo() {
    const promise = Promise.resolve();

    promise.then(() => console.log("promise done"));

    console.log("code done"); // показывается первым
}

// demo()

function demoCorrect() {
    const promise = Promise.resolve();

    promise
        .then(() => console.log("promise done"))
        .then(() => console.log("code done"));
}

demoCorrect()