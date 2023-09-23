function promisify(f) {
	return function (...args) { // возвращает функцию обертку
		return new Promise((resolve, reject) => {
			function callback(err, result) { // колбэк для f
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			}

			args.push(callback); // добавление колбэка в аргументы

			f.call(this, ...args); // вызов оригинальнрй функции
		});
	};
};