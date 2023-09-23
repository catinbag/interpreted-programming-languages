function loadScript(src, callback) {
	const script = document.createElement('script');
	script.src = src;
	script.onload = () => callback(script);
	document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
	console.log(`Script ${script.src} loaded`);
	console.log(_);
});