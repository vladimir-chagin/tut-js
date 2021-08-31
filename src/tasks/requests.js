/*
 * используя браузерный XmlHttpRequest реализовать 2 ф-ции
 * */
const requests = {
  /*
   * данная ф-ция должна выполнять GET запрос используя аргументы
   * @param {string} url - адрес запроса
   * @params {object} params - параметры запроса, это объект с параметрами, которые должны добавиться к url
   * @params {object} options - опции для запроса, headers, timeout, sync, возможно что-то ещё добавим
   * @param {function(error, response)} cb - callback который должен быть вызван после успешного выполнения запроса или ошибки
   * если всё выполнилось хорошо, тогда надо вызвать cb(null, response) если была ошибка - cb(error)
   * */
  httpGet(url, params, options, cb) { },

  /**
   * смотреть описание httpGet
   * метод будет делать почти то же самое только данные будут отправляться через POST
   */
  httpPost(url, params, options, cb) { },

  /**
   * ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....
   */
  objectToQuery(obj) { },
  /**
   * ф-ция на вход получает строку в виде key1=value1&key2=value2.... и возваращет объект {key1: value1, key2: value2,.... }
   */
  queryToObject(query) {

  }
};
