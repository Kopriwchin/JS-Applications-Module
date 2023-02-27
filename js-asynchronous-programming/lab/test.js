console.log('Start');

setTimeout(() => {
    console.log('Done2');
}, 2000);

setTimeout(() => {
    console.log('Done1');
}, 0);

console.log('End');