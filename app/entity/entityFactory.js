/**
 * Date: 2019/7/23
 * Author: admin
 * Description:
 */
var Avatar = _require("./avatar")

var entityClasses = {
	Avatar: Avatar,
}

var entityFactory = module.exports;

entityFactory.createEntity = function (entityType, entityid, entitycontent) {
    entitycontent = entitycontent || {}
    if (entityid)
        entitycontent["_id"] = entityid;
    var entityCreator = entityClasses[entityType];
    return new entityCreator(entitycontent);
};
