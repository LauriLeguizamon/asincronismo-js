const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do Something Async'), 3200)
        : reject(new Error('whoops!'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before 1 ');
doSomething();
console.log('After 1 ');

const anotherFunction =  async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch {
        console.error(error)
    }
} 

console.log('Before 2');
anotherFunction();
console.log('After 2');

