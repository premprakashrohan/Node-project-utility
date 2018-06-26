const other_data = [
    { from: 'Prem Rohan', priority: 'normal', subject: 'Payment due' },
    { from: 'krish', priority: 'normal', subject: 'Payment due' },
    { from: 'Ishi', priority: 'normal', subject: 'Payment due' },
    { from: 'Sahil', priority: 'normal', subject: 'Payment due' },
    { from: 'Manisha', priority: 'normal', subject: 'Payment due' },
    { from: 'Prem Rohan', priority: 'high', subject: 'Payment due' },
    { from: 'krish', priority: 'high', subject: 'Payment due' },
    { from: 'Ishi', priority: 'high', subject: 'Payment due' },
    { from: 'Sahil', priority: 'high', subject: 'Payment due' },
    { from: 'Manisha', priority: 'high', subject: 'Payment due' }
];
const fakAPi = function () {
    return new Promise((resolve,reject) => {
        resolve(other_data);
    });
};


const getHighPriorityPayments = function() {
    fakAPi().then((other_data: any) => {
        const highPriority = [];
        for (let i = 0, length = other_data.length; i < length; i++) {
            if (other_data[i].priority.includes('high')) {
                highPriority.push(other_data[i]);
            }
        }
        return highPriority;
    }).then((other_data: any) => {
        const payment = [];
        for (let i = 0, length = other_data.length; i < length; i++) {
            if (other_data[i].subject.includes('Payment')) {
                payment.push(other_data[i]);
            }
        }
        return payment;
    }).then((getHighPriorityPayments: any) => {
        console.log(getHighPriorityPayments);
    }).catch(error => console.error(error));
}
getHighPriorityPayments();


import * as R from 'ramda';
const getPaymentReminderThroughRamda = function (priority, subject) {
    return fakAPi()
        .then(R.filter(R.propEq('priority', priority)))
        .then(R.filter(R.where({ subject: R.contains(subject) })))
        .then(R.sortBy(R.prop('from')));
}

getPaymentReminderThroughRamda('high', 'Payment').then(list => console.log(list)).catch(error => console.error(error));
