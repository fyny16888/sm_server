/**
 * Date: 2019/7/23
 * Author: admin
 * Description: 常量文件
 */
module.exports = {
    ENABLE_GM: true,

    Code: {
        OK: 1,
        FAIL: 0
    },

    // 平台
    Platform: {
        WIN: "win",
        WECHAT: "wechat",
    },

    ServerList: {
        STATUS_CLOSED: 0,  // 维护
        STATUS_NEW: 1,  // 新服
        STATUS_BUSY: 2,  // 繁忙
        STATUS_HOT: 3,  // 火爆
    },

    Login: {
        OK: 200,
        RELAY: 201,
        MAINTAIN: 202,  // 维护
        FAIL: 500
    },

    CheckInResult: {
        SUCCESS: 0,  // 成功
        ALREADY_ONLINE: 1,  // 已经在线
    },
}