//сделать класс Ringer(используя прототипы) который будет воспроизводить аудиофайл, с повторением через заданный интервал в миллисекундах
//options { audio: 'path/to/audio', interval: 1000}
//документацию можно найти тут
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
//создать страничку с 2 инпутами и 2 кнопками start/stop
//в 1 инпут вводим путь к аудио файлу, в 2й инпут вводим интервал через который аудио будет повторяться
// по нажатию на start начинаем воспроизводить аудио/ по stop - останавливаем
// загвоздка в том что audio.play - возвращает промис
// и могут быть ситуации когда в приложении метод stop может быть вызван до того как аудио начнет воспроизводиться, в этом случае мы получим ошибку, но нам так не надо)
// задача написать логику вокруг audio.play/audio.stop таким образом что-бы аудио начинало воспроизводиться и останавливалось без ошибок
function Ringer(options) {
    this.audio = new Audio(options.audio);

}

Ringer.prototype.start = function() {
    this.audio.play();
};

Ringer.prototype.stop = function() {
    this.audio.pause();
};

var ringer = new Ringer({
    audio: 'some file',
    interval: 1500,
});

ringer.start();

setTimeout(function() {
    ringer.stop();
}, 10000);
