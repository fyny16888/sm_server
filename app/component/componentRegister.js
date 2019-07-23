/**
 * Date: 2019/7/23
 * Author: admin
 * Description: 负责component注册
 */
var LoggerComponent = _require('./entityComponent/loggerComponent');
var AvatarPropertyCtrl = _require('./avatarComponent/avatarPropertyCtrl');

var componentClass = {
	logger: LoggerComponent,
	avatarProp: AvatarPropertyCtrl,
};

var componentRegister = module.exports;

componentRegister.getComponent = function (name) {
    return componentClass[name];
};
