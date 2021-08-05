/*
Зробити свій розпорядок дня.

У вас має бути більше 10 асинхронних дій з рандомними затримками.
Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

Напиклад.
Прикнутись - 0.3с
Поснідати - 1с
Піти в душ - 0.5с
Дочекатись автобус - 3с
Пообідати - 1с

І так далі
 */

function wakeUp(timeInHours) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeInHours >= 7 && timeInHours <= 23) {
                const result = `1. I wake up at ${timeInHours}.`;
                console.log(result);
                resolve(result);
            } else {
                const result = '1. Error: I sleep.'
                console.log(result);
                reject(result);
            }
        }, 300);
    });
}

function getShower(water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (water) {
                const result = '2. I get shower.'
                console.log(result);
                resolve(result);
            } else {
                const result = '2. Error: no water.'
                console.log(result);
                reject(result);
            }
        }, 200);
    });
}

function haveBreakfast(hunger) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hunger) {
                const result = '3. I have a breakfast.'
                console.log(result);
                resolve(result);
            } else {
                const result = '3. Error: I\`m not hungry.'
                console.log(result);
                reject(result);
            }
        }, 600);
    });
}

function waitBus(timeInMinutes, trafficJam) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeInMinutes < 60) {
                if (trafficJam) {
                    const result = '4. Error: I walk because there is a traffic jam on the road.'
                    console.log(result);
                    reject(result);
                } else {
                    const result = '4. I go by bus because I have no time.'
                    console.log(result);
                    resolve(result);
                }
            } else {
                const result = '4. Error: I walk because I have spare time.'
                console.log(result);
                reject(result);
            }
        }, 500);
    });
}

function work(tasks) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tasks && tasks.length !== 0) {
                let tasksStr = tasks.join(', ');
                const result = `5. I work on my tasks: ${tasksStr}.`
                console.log(result);
                resolve(result);
            } else {
                const result = '5. Error: I have no tasks.'
                console.log(result);
                reject(result);
            }
        }, 100);
    });
}

function goToShop(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 100) {
                const result = `6. I have ${money} hrn. I buy bread and meat.`
                console.log(result);
                resolve(result);
            } else if (money > 20 && money < 100) {
                const result = `6. I have ${money} hrn. I buy only bread.`
                console.log(result);
                resolve(result);
            } else {
                const result = '6. Error: I have no enough money.'
                console.log(result);
                reject(result);
            }
        }, 400);
    });
}

// wakeUp(9);
// getShower('water');
// haveBreakfast('I\'m hungry');
// waitBus(59, '');
// work(['task1', 'task2', 'task3']);
// goToShop(99);
// goToShop(100);

// with errors

// wakeUp(6);
// getShower('');
// haveBreakfast('');
// waitBus(59, 'traffic jam');
// waitBus(60, 'traffic jam');
// waitBus(60, '');
// work([]);
// work('');
// goToShop(20);

wakeUp(9)
    .then(result => {
        console.log(result);
        return getShower('water');
    })
    .then(result => {
        console.log(result);
        return haveBreakfast('I\'m hungry');
    })
    .then(result => {
        console.log(result);
        return waitBus(59, '');  // wait bus
    })
    .then(result => {
        console.log(result);
        return work(['task1', 'task2', 'task3']);
    })
    .then(result => {
        console.log(result);
        return goToShop(100);
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

// myDay();
// async function myDay() {
//     try {
//         const result1 = await wakeUp(7);
//         console.log(result1);
//         const result2 = await getShower('water');
//         console.log(result2);
//         const result3 = await haveBreakfast('I\'m hungry');
//         console.log(result3);
//         const result4 = await waitBus(40, '');
//         console.log(result4);
//         const result5 = await work(['task1', 'task2', 'task3']);
//         console.log(result5);
//         const result6 = await goToShop(100);
//         console.log(result6);
//     } catch (err) {
//         console.log(err);
//     }
// }

// with errors

// wakeUp(9)
//     .then(result => {
//         console.log(result);
//         return getShower('water');
//     })
//     .then(result => {
//         console.log(result);
//         return haveBreakfast('I\'m hungry');
//     })
//     .then(result => {
//         console.log(result);
//         return waitBus(60, '');  // wait bus
//     })
//     .then(result => {
//         console.log(result);
//         return work([]);
//     })
//     .then(result => {
//         console.log(result);
//         return goToShop(10);
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// myDay();
// async function myDay() {
//     try {
//         const result1 = await wakeUp(7);
//         console.log(result1);
//         const result2 = await getShower('');
//         console.log(result2);
//         const result3 = await haveBreakfast('I\'m hungry');
//         console.log(result3);
//         const result4 = await waitBus(40, '');
//         console.log(result4);
//         const result5 = await work(['task1', 'task2', 'task3']);
//         console.log(result5);
//         const result6 = await goToShop(5);
//         console.log(result6);
//     } catch (err) {
//         console.log(err);
//     }
// }
