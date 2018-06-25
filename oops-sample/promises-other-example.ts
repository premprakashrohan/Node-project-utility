
interface IData {
    [prop: string]: any
}

function getData(){
    const data = {
         address: {
            city: 'Bangalore',
            country: 'india'
        }
    };
    return new Promise((resolve, reject) => {
        if(!data) {
            reject();
        } else {
            resolve(data);
        }
    });
}

getData().then((response: IData) => {
    console.log(response);
});
/*
getData().then((response: IData) => {
    delete response.address;
    console.log(response.address.city);
});

getData().then((response: IData) => {
    delete response.address;
    console.log(response.address.city);
}, error => console.error (error)
);
*/
getData().then((response: IData) => {
    delete response.address;
    console.log(response.address.city);
}).catch(error => console.error(error));