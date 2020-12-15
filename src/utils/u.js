
const U = (() => {


    return {
        //ф-ция должна возвращать Promise, который будет resolved когда скрипт из url будет загружен
        loadScript(url) {
            
        },

        confirm(msg) {
            return new Promise((resolve, reject) => {
                //надо показать диалог, сделать самому диалог, у которого есть 2 кнопки - ok/cancel
                //promise должен резолвится после нажатия кнопок со значением true/false
                // true - confirmed, false - not confirmed
            });
        },

        formatFileSize(sizeInBytes) {
            const byteUnits = [' kB'/*nls*/, ' MB'/*nls*/, ' GB'/*nls*/, ' TB'/*nls*/, 'PB'/*nls*/, 'EB'/*nls*/, 'ZB'/*nls*/, 'YB'/*nls*/];
            //1kB === 1024B

        },

        //cmpFn получает на вход (obj1, obj2) и возвращает 1 если obj1 > obj2, -1 если obj1 < obj2, 0 если obj1 == obj2
        minInArray(array, cmpFn) {

        },

        //ф-ция принимает на вход 2 числа, но они могут быть и не заданы, те можно использовать ф-цию так
        // randomInt(), если min не задан тогда считать его равным 0, если max не задан - то считать его равным Number.MAX_SAFE_INTEGER
        randomInt(min, max) {
            
        },

        //ф-ция принимает на вход массив и callback
        //возвращает новый массив, элементы которого будут преобразованы fn
        //если fn возвращает null, то элемент не надо включать в результирующий массив
        filteredMap(array, fn) {
            const result = [];
            //
            return result;
        }
    };
})();