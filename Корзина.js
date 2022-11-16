function cart(basketAmount, countGoods, promo = null) {

    if (promo = 'В подарок 400' && basketAmount < 300) {
        totalAmount = 0;
        console.log('Стоимость: ' + totalAmount);
    } else if (promo = 'В подарок 400') {
        const totalAmount = basketAmount - 300;
        console.log('Стоимость : ' + totalAmount);
    } else if (countGoods >= 10) {
        const countFiveProcent = basketAmount/100*5;
        totalAmount = basketAmount - countFiveProcent;
        console.log('Стоимость: ' + totalAmount);
    } else if (basketAmount > 50000) {
        const countTwentyProcent = basketAmount/100*20;
        const countDifference = basketAmount - 50000;
        totalAmount = countDifference - countTwentyProcent;
        console.log('Стоимость: ' + totalAmount);
    } else if (promo = 'СКИДКА15' && basketAmount >= 20000) {
        const countFifteenProcent = basketAmount/100*15;
        totalAmount = basketAmount - countFifteenProcent;
        console.log('Стоимость: ' + totalAmount);
    }

}

cart(1000, 2, 'В подарок 400');