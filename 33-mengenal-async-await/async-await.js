function myPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("janjiku dah diselesain ;)");
        }, 3000);
    });
}

function mySecondPromise(time) {
    return new Promise((resolve, reject) => {
        if (time > 3000) {
            reject("janjimu kelamaan :(");
        } else {
            setTimeout(() => {
                resolve("janjiku dah diselesain ;)");
            }, 3000);
        }
    });
}

// handle promise pake then/catch
myPromise().then((value) => {
    console.log(value);
});

// handle promise pake async/await
async function jalaninAsync() {
    const janjiku = await myPromise();
    console.log(janjiku);
}

// panggil async func nya
jalaninAsync();

// pake then/catch
mySecondPromise(3000)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

// pake async/await
async function jalaninAsyncKedua() {
    // pake try/catch buat handle error
    try {
        const janjiku = await mySecondPromise(3000);
        console.log(janjiku);
    } catch (error) {
        console.log(error);
    }
}
// panggil async func nya
jalaninAsyncKedua();
