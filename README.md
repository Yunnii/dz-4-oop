# Домашнее задание по лекции JavaScript ООП

Пользуясь наработками домашних заданий 2 и 3 необходимо сделать следующее:

  * Сделать "Абстрактный" конструктор Model представляющий из себя абстрактный объект
  и имеющий возможность работать с любыми объектами (основа любых объектов)

```javascript
var Model = function (data) {

};

Model.prototype.set = function (fieldName, fieldValue) {};
Model.prototype.get = function (fieldName) {};
Model.prototype.validate = function (fieldName, fieldType) {};
// Другие необходимые вам поля
```

  * Необходимо унаследовать от Абстракнтого конструктора Model ваш объект Event

```javascript
var Event = function (data) {
    Model.apply(this, arguments);
};
inherit(Event, Model);

// Event.prototype.
// Другие необходимые вам поля
```

  * Cоздать абстрактную коллекцию Collection представляющую из себя набор объектов Model каждый вызов метода Collection
  должен создавать новую коллекцию, а не изменять текущую

```javascript
var Collection = function (items) {

};

/**
 * @return {Collection}
 */
Collection.prototype.add = function (model) {};
/**
 * @return {Collection}
 */
Collection.prototype.find = function (fieldName, fieldValue) {};
/**
 * @return {Collection}
 */
Collection.prototype.sortBy = function (fieldName) {};
// Другие необходимые вам поля
```

Что бы можно было делать так:

```javascript
new Collection()
.add(item)
.find('name', 'value')
.sortBy('name');
```

  * На основе Collection вам необходимо создать вашу коллекцию Events и добавить в нее функции, которые вы сделали в домашнем задании
  3 лекции

```javascript
var Events = function (items) {
    Collection.apply(this, arguments);
};

/**
 * @return {Events}
 */
Events.prototype.findOnlyMyEvents = function () {};
/**
 * @return {Events}
 */
Events.prototype.findFutureEvents = function () {};
/**
 * @return {Events}
 */
Events.prototype.findPastEvents = function () {};
/**
 * @return {Events}
 */
Events.prototype.sortByName = function () {};
// Другие необходимые вам поля
```