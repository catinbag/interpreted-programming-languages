// цепочка вызовов

function chain() {
	new Promise(function (resolve, reject) {
		setTimeout(() => resolve(1), 1000); // (*)
	}).then(function (result) { // (**)
		console.log(result); // 1
		return result * 2;
	}).then(function (result) { // (***)
		console.log(result); // 2
		return result * 2;
	}).then(function (result) {
		console.log(result); // 4
		return result * 2;
	});
}

// chain()

function wrong() {
	const promise = new Promise(function (resolve, reject) {
		setTimeout(() => resolve(1), 1000);
	});

	promise.then(function (result) {
		console.log(result); // 1
		return result * 2;
	});

	promise.then(function (result) {
		console.log(result); // 1
		return result * 2;
	});

	promise.then(function (result) {
		console.log(result); // 1
		return result * 2;
	});
}

// wrong()

function promiseInPromise() {
	new Promise(function (resolve, reject) {
		setTimeout(() => resolve(1), 1000);
	}).then(function (result) {
		console.log(result); // 1
		return new Promise((resolve, reject) => { // (*)
			setTimeout(() => resolve(result * 2), 1000);
		});
	}).then(function (result) { // (**)
		console.log(result); // 2
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(result * 2), 1000);
		});
	}).then(function (result) {
		console.log(result); // 4
	});
}

// promiseInPromise()

function fetchChain() {
	fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((result) => {
			console.log('format user')

			return result.json()
		})
		.then((user) => console.log(user))
}

fetchChain()