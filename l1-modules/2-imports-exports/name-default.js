function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// аналогично синтаксису, если бы мы добавили "export default" перед функцией
export { sayHi as default };