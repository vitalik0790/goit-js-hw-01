'use strict'

const credits = 23580;
const pricePerDroid = 3000;
const number = prompt('Please enter the number of droids');

const totalPrice = number * pricePerDroid;

if (number === null) {
    console.log('Отменено пользователем!');
} else {
    if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log(`Вы купили ${number} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}
}












// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение
// 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение
// 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

