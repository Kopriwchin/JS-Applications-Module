let alwaysResolvingPromise = Promise.resolve('Yes');
let alwaysRejectingPromise = Promise.reject('No');

alwaysResolvingPromise
    .then(res => console.log(res))
    .catch((err) => console.log('Never used!'))
    .finally(() => {
        console.log('finally!');
    });

alwaysRejectingPromise
    .catch((err) => console.log('Rejecting Promise!'));


let multiplePromises = Promise.all([
    alwaysResolvingPromise,
    Promise.resolve('Yes2')
]);

multiplePromises.then(res => {
    console.log(res);
})