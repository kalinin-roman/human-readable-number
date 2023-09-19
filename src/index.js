module.exports = function toReadable (number) {

    //список цифр
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    //список чисел от 10 до 19
    const afterTen = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    
    //десятки после 19
    const tens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    
    //преобразование числа в строку
    const getStringOfNum = String(number);
    
    switch (getStringOfNum.length) {
        //фнукция для числа до десяти
        case 1:
            return getNumbers(getStringOfNum);
        //функция для десятичных чисел (от 10 до 99)
        case 2:
            return `${makeTens(getStringOfNum)}${addPrimitive(getStringOfNum)}`
        //фукнция для чисел от 100 до 999
        case 3:
            return `${makeHundred(getStringOfNum)}${addPrimitive(getStringOfNum.slice(1))}`
        //если число выше 999 будет 
        default:
        throw console.log('Число выше 999')
    }

    //фнукция для получения числа от 0 до 9
    function getNumbers(num) {
        return numbers[num];
    }

    //фнукция получения для числа 10 до 19
    function getTens(num) {
        return tens[num];
    }

    //фнукция получения десятков, начиная с 20
    function getAfterTen(num) {
        return afterTen[num];
    }

    //функция для получения десятка числа от 20 до 90
    function makeTens(x) {
        const first = x[0];
        // console.log(first)
        return first === '1' ? getAfterTen(x) : getTens(first);
    }
    
    //функция получения последней цифры числа
    function addPrimitive(x) {
        const first = x[0];
        const last = x.slice(1);
        // console.log(first)
        // console.log(last)
        return first > 1 && last !== '0' ? ` ${getNumbers(last)}` : '';
    }
    
    //функция получения сотых + десятка числа (без последней цифры числа)
    function makeHundred(x) {
        const first = x[0];
        const last = x.slice(1);

        return last === '00' ? `${getNumbers(first)} hundred` : `${getNumbers(first)} hundred ${addNumber(last)}`;
    }
    //функция для получния последних дву чисел от сотых чисел
    function addNumber(x) {
        return x < 10 ? `${getNumbers(x[1])}` : makeTens(x);
    }


}
