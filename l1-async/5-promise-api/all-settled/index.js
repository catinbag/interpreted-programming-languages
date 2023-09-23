function allSettled() {
	const urls = [
		'https://jsonplaceholder.typicode.com/users/1',
		'https://jsonplaceholder.typicode.com/users/2',
		'https://jsonplaceholder.typicode.com/users/3'
	];

	const requests = urls.map(url => fetch(url));

	Promise.allSettled(requests)
		.then(results => {
			results.forEach((result, num) => {
				if (result.status == "fulfilled") {
					console.log(`${urls[num]}: ${result.value.status}`);
				}
				if (result.status == "rejected") {
					console.log(`${urls[num]}: ${result.reason}`);
				}
			});
		});
}

allSettled()