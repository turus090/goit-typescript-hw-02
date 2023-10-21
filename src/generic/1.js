function getPromise() {
    return new Promise(function (resolve) {
        resolve(["Text", 50]);
    });
}
getPromise().then(function (data) {
    console.log(data);
});
