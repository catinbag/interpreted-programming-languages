function race() {
	Promise.race([
		new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
		new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
		new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
	]).then(console.log); // 1
}

race()