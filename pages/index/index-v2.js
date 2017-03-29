let heros = require("./heros_json");
let Legion = require("./legion");
const app = getApp();

var STATE_CODE = {
    NORMAL: 0,
    LOADING: 1,
    EXCEPRION: 2,
}

Page({
    data: {
        userInfo: {},
        heropicker: "OFF",
        legion1: [undefined, undefined, undefined, undefined, undefined],
        legion2: [undefined, undefined, undefined, undefined, undefined],
        legionOnHandle: 1,
        heros: heroes,
        relationMat: [
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined]
            ],
        legiongrade:   [
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined]
            ],
        recommandlist: [],
        informationLayer: {
            state: "OFF",
            msg: "Loading...",
            anim: "shining",
            state_code: STATE_CODE.NORMAL
        }
    },

});