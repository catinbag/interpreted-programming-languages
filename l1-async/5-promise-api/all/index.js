function all() {
	Promise.all([
		new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
		new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
		new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
	]).then(console.log); // 1,2,3
}

// all()

function allFetch() {
	const urls = [
		'https://jsonplaceholder.typicode.com/users/1',
		'https://jsonplaceholder.typicode.com/users/2',
		'https://jsonplaceholder.typicode.com/users/3'
	];

	const requests = urls.map(url => fetch(url));

	// Promise.all будет ожидать выполнения всех промисов
	Promise.all(requests)
		.then(responses => responses.forEach(
			response => console.log(`${response.url}: ${response.status}`)
		));
}

// allFetch()

function allWithError() {
	Promise.all([
		new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
		new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
		new Promise((_, reject) => setTimeout(() => reject(new Error(3)), 1000))  // 3
	]).catch((error) => console.log('got error', error));
}

// allWithError()

function allWithNonIterable() {
	Promise.all([
		new Promise((resolve, reject) => {
			setTimeout(() => resolve(1), 1000)
		}),
		2,
		3
	]).then(console.log); // 1, 2, 3
}

// allWithNonIterable()