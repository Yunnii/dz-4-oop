﻿/*global alert: true*/

function isDate(date) {
    "use strict";

    if (typeof date === 'undefined') {
        return false;
    }
    if (typeof date.getMonth !== 'function') {
        return false;
    }
    return true;
}

function inherits(constructor, superconstructor) {
    var func = function() {};

    func.prototype = superconstructor.prototype;
    constructor.prototype = new func();
}

var Event = function (data) {
    Model.apply(this, arguments);
    };

    inherits(Event, Model);
/**
 * Возвращает объект event, либо undefined, если в объекте  отсутвуют обязательные поля
 * eventObject{
 *            name - название события
 *            start  - начало
 *            end - окончание
 *            location - место
 *            remindTime - за сколько минут до события напомнить
 *            description - описание
 * }
 
 * @param {object} obj             Объект
 * @example
 *    Event({
 *          name: "Пара по веб-технологиям",
 *          start: new Date("2012-10-20 10:00:00"),
 *          end: new Date("2012-10-20 12:50:00"),
 *          location: "5 этаж",
 *          remindTime: 10,
 *          description: "Взять бумагу и ручку, не брать бук!"
 *    })
 *
 * @return {Object}
 */
Event.prototype.validate = function () {
    "use strict";

    var remindTime = this.remindTime || 0;
    this.raiting = this.raiting || 0;

    if (!isDate(this.get("start"))) {
       throw new Error('Field "start" must be Date format');
    }

    if (!isDate(this.end)) {
        this.end = this.start;
    }

    if (this.end < this.start) {
        this.end = this.start;
    }

    return {
        "name": this.name || "(Нет темы)",
        "start": this.start,
        "end": this.end,
        "location": this.location || "",
        "remindTime": remindTime,
        "description": this.description || "(отсутствует)",
        "raiting": this.raiting
    };
}