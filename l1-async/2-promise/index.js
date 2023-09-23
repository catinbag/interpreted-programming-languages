// успех

function sleep() {
	const promise = new Promise(function (resolve, reject) {
		setTimeout(() => resolve("done"), 1000);
	});

	return promise
}

sleep().then((result) => {
	console.log('result', result)
})

// ошибка

function doError() {
	const promise = new Promise(function (resolve, reject) {
		setTimeout(() => reject(new Error("Whoops!")), 1000);
	});

	return promise
}

doError().catch((error) => {
	console.log('error', error)
})