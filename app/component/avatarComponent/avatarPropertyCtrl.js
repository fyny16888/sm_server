/**
 * Date: 2019/7/23
 * Author: admin
 * Description:
 */
var util = require('util');
var Component = _require('../component');
var avatarProperty = _require('./avatarProperty');

let AvatarPropertyCtrl = function (entity) {
    Component.call(this, entity);
};

util.inherits(AvatarPropertyCtrl, Component);
module.exports = AvatarPropertyCtrl;

let pro = AvatarPropertyCtrl.prototype;

pro.init = function (opts) {
    this._initPersistProperties(opts);
    this._dirtyProp = {};
};

pro._initPersistProperties = function (opts) {
    let persistProperties = avatarProperty.persistProperties;
    let entity = this.entity;
    for (let key in persistProperties) {
        if (key in opts && opts[key] !== undefined) {
            entity[key] = opts[key];
        }
        else {
            entity[key] = persistProperties[key];
        }
    }
};

pro.getPersistProp = function () {
    let persistProperties = avatarProperty.persistProperties;
    let props = {};
    for (let key in persistProperties) {
        props[key] = this.entity[key];
    }
    return props;
};
