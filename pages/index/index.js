//index.js
//获取应用实例
// app.js
var heroes = require("./heros_json.js");
var Legion = require("./legion");
var Heros = require("./heros");
//const teamrelate = [{"Teammate":"viper","Enemy":"axe","TeamWin":1},{"Teammate":"viper","Enemy":"treant","TeamWin":1},{"Teammate":"viper","Enemy":"meepo","TeamWin":0},{"Teammate":"sven","Enemy":"axe","TeamWin":0},{"Teammate":"sven","Enemy":"treant","TeamWin":0},{"Teammate":"sven","Enemy":"meepo","TeamWin":1},{"Teammate":"puck","Enemy":"axe","TeamWin":0},{"Teammate":"puck","Enemy":"treant","TeamWin":0},{"Teammate":"puck","Enemy":"meepo","TeamWin":1},{"Teammate":"tiny","Enemy":"axe","TeamWin":1},{"Teammate":"tiny","Enemy":"treant","TeamWin":0},{"Teammate":"tiny","Enemy":"meepo","TeamWin":1}];

//const teamagainstorsupport = [{"hero":"shredder","idxValue":22.48,"Assist":["viper","sven","puck","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"elder_titan","idxValue":18.94,"Assist":["viper","sven","puck","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"leshrac","idxValue":18.51,"Assist":["viper","sven","puck","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"warlock","idxValue":16.51,"Assist":["viper","sven","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"winter_wyvern","idxValue":15.18,"Assist":["viper","sven","tiny"],"Anti":["treant","meepo"]},{"hero":"jakiro","idxValue":14.94,"Assist":["viper","sven"],"Anti":["axe","treant","meepo"]},{"hero":"death_prophet","idxValue":14.06,"Assist":["viper","sven","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"batrider","idxValue":13.91,"Assist":["viper","sven"],"Anti":["axe","treant","meepo"]},{"hero":"ursa","idxValue":13.54,"Assist":["viper","sven","puck","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"phoenix","idxValue":12.88,"Assist":["viper","sven","tiny"],"Anti":["axe","treant"]}];

var app = getApp();
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
        legion1_member: 0, 
        legion2_member: 0, 
        heros: {},
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
        },
        estimateAnimation: {},
        animated: false,
        refreshAnimation_legion1: {},
        refreshAnimation_legion2: {},
        rivalAnimation: {},
        userSideBarState: false
    },
    Legion1: Legion(5),
    Legion2: Legion(5),
    legionOnHandle: 1,
    Heros: Heros(),
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    toggleUserSideBar: function(){
        this.setData({
            userSideBarState: !this.data.userSideBarState
        });
    },
    clearHero: function(event){
        let team = event.currentTarget.dataset.team,
            legion = this[`Legion${team}`],
            heros = this.Heros;

        if(legion.length == 0) return;
        legion.getLegionCloned().forEach(function(elem){
            heros.quit(elem);
        });
        legion.clear();
        let obj = {};
        obj[`legion${team}`] = legion.getLegion();
        obj.heros = heros.extract();
        
        
        let animation = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 0.4,
            timingFunction: "linear",
            delay: 0
        });
        animation.rotateZ(180).step();
        animation.rotateZ(180).step();
        obj[`refreshAnimation_legion${team}`] = animation.export();
        this.setData(obj);
        this.requestData();
    },
    openHeroPanel: function(event) {
        var legion = event.currentTarget.dataset.legion;
        console.log(legion)
        this.setData({
            "heropicker": "ON"
        });
        this.legionOnHandle = legion;
    },

    hero_item_tap_handler2: function(event){
        let hero = event.currentTarget.id,
            heros = this.Heros,
            l = this.legionOnHandle,
            legion = this[`Legion${l}`],
            legion_other = this[`Legion${l==1?2:1}`];
        try
        {
            if(legion_other.has(hero)) return;

            if(legion.has(hero)){
                legion.del(hero);
                heros.quit(hero);
            }else{
                legion.push(hero);
                heros.enroll(hero, l);
            }

            let obj = {};
            //obj[`legion${l}`] = legion.getLegion();
            obj.heros = heros.extract();
            this.setData(obj);
        }
        catch(err){
            console.error(err);
        }
       
    },
    hero_recommand_handler: function(event){
        let hero = event.currentTarget.dataset.recommand,
            heros = this.Heros,
            legion = this.Legion1;
        if(legion.has(hero))return;
        try{
            legion.push(hero);
            heros.enroll(hero, 1);

            this.requestData();

            this.setData({
                legion1: legion.getLegion(),
                heros: heros.extract()
            })
        }catch(err){
            console.error(err);
        }

    },
    closeInfoLayer: function(event){
        let layer_state = this.data.informationLayer,
            code = layer_state.state_code;
        if(code === STATE_CODE.EXCEPRION){

        }
    },
    closepanel: function(event) {
        if (event.target.id == "HeroPanel") {

            let l = this.legionOnHandle,
                legion = this[`Legion${l}`],
                legion_old = this.data[`legion${l}`];

            let obj = {
                "heropicker": "OFF"
            };

            let arr = [];
            legion_old.forEach((elem) =>{
                if(elem)
                    arr.push(elem);
            })
            if(!legion.compareTo(arr)){
                this.setData(obj);
                return;
            }

            let legion_enemy = this[`Legion${l == 1?2:1}`];
            console.log(legion, legion_enemy);
                
            this.requestData();

            obj[`legion${l}`] = legion.getLegion();
            this.setData(obj);
        }
    },
    requestData: function(){
        this.setData({
            informationLayer: {
                state: "ON",
                msg: "Loading...",
                anim: "shining",
                state_code: STATE_CODE.LOADING
              }
        });
        var p1 = false, 
            p2 = false,
            p1f = false,
            p2f = false,
            that = this,
            legion = this.Legion1.getLegionCloned(),
            legion_enemy = this.Legion2.getLegionCloned();
        var resolve = function(){
          console.log(p1, p2);
            if(p1 && p2){
                console.log("加载完毕")
                that.setData({
                    informationLayer: {
                        state: "OFF",
                        msg: "Complete!",
                        anim: "shining",
                        state_code: STATE_CODE.NORMAL
                      }
                });
            }
        }
        var reject = function(){
            if(p1f || p2f){
                 that.setData({
                    informationLayer: {
                        state: "ON",
                        msg: "服务器让猴子偷走拉！",
                        anim: "none",
                        state_code: STATE_CODE.EXCEPRION
                      }
                });
            }
        }
         this.requestForRecommend(legion, legion_enemy, ()=>{
            p1 = true;
            console.log(`p1:${p1}`);
            resolve();
         }, ()=>{
            p1f = true;
            reject();
         });
         this.requestForGrid(legion, legion_enemy, ()=>{
            p2 = true;
            console.log(`p2:${p2}`);
            resolve();
         }, ()=>{
            p2f = true;
            reject();
         });
    },

    requestForRecommend: function(legion, legion_enemy, resolve, reject){
        let that = this;
        wx.request({
            url: "https://ddsupport.xyz/data/recommend",
            data: {
                Teammate: legion.join(','),
                Enemy: legion_enemy.join(',')
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                //console.log(`recommand:${res.data}`);
                that.setData({
                    recommandlist: res.data
                });
                resolve();
            },
            fail: function(err){
                console.log(err);
                reject();
            }
        }); 
    },

    requestForGrid: function(legion, legion_enemy, resolve, reject){
        let that = this;
        wx.request({
            url: "https://ddsupport.xyz/data/grid",
            data: {
                Teammate: legion.join(','),
                Enemy: legion_enemy.join(',')
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                //console.log(`grid:${res.data}`);
                let mat, grade;
                [mat, grade] = that.calculateTeamMatrix(legion, legion_enemy, res.data);
                console.log(mat, grade);
                that.setData({
                    relationMat: mat,
                    legiongrade: grade
                });
                resolve();
            },
            fail: function(err){
                console.log(err);
                reject();
            }
        }); 
    },

    requestForEstimation: function(legion, legion_enemy, resolve, reject){
        let that = this;
        wx.request({
            url: "https://ddsupport.xyz/data/score",
            data: {
                Teammate: legion.join(','),
                Enemy: legion_enemy.join(',')
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
               // console.log(`score:${res.data}`);

                resolve(res.data);
            },
            fail: function(err){
                console.log(err);
                reject();
            }
        }); 
    },


    estimate: function(){
      var that = this;
        
        if(this.Legion1.length === 0 || this.Legion2.length === 0 ){
            return;
        }
        this.setData({
            informationLayer: {
                state: "ON",
                msg: "Loading...",
                anim: "shining",
                state_code: STATE_CODE.LOADING
              }
        });
        var resolve = function(data){
            that.setData({
                informationLayer: {
                    state: "OFF",
                    msg: "",
                    anim: "none",
                    state_code: STATE_CODE.NORMAL
                  }
            });
            app.globalData.estimateScore = data;
            wx.navigateTo({
                url: '../estimate/estimate'
            });
        }

        var reject = function(){

        }

        this.requestForEstimation(
            this.Legion1.getLegionCloned(), 
            this.Legion2.getLegionCloned(),
            resolve, reject)
        
    },
    backtoRival: function(){


    },
    onLoad: function() {
        console.log('onLoad')
        var that = this,
            mat, grade;
            //调用应用实例的方法获取全局数据
        this.setData({
            heros: this.Heros.extract()
        });
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        });
        /*[mat, grade] = this.calculateTeamMatrix(this.data.legion1, this.data.legion2, teamrelate);
        console.log(mat);
        this.setData({
            relationMat: mat,
            legiongrade: grade
        });*/
    },
    calculateTeamMatrix: function(alliance, enemy, relation){
        if(!relation)
            return [
            [
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
            ],
            [
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
            ]
            ]
        let getRelationship = function(a, b){
            for(let i=0, len = relation.length; i < len;i++){
                if(relation[i].Teammate === a && relation[i].Enemy === b){
                    return relation[i].TeamWin;
                }
            }
        }
        let grid = [];
        let legionPoint =  [
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
            ]
        for(let i = 0;i < 5;i++){
            grid[i] = [undefined, undefined, undefined, undefined, undefined];
            for(let j = 0;j < 5;j++){
                if(alliance[j] && enemy[i]){
                    let allia = alliance[j]
                    let ene = enemy[i]
                    let res = getRelationship(allia, ene);
                    if(res === 0){
                        grid[i][j] = {
                            hero: ene,
                            team: 2
                        }
                    }
                       
                    if(res === 1){
                        grid[i][j] = {
                            team: 0
                        }
                    }

                    if(res === 2){
                        grid[i][j] = {
                            hero: allia,
                            team: 1
                        }

                    }

                }
            }
        }  

        for(let i = 0;i < 5;i++){
            legionPoint[1][i] = 0;
            legionPoint[0][i] = 0;
            for(let j = 0;j < 5;j++){
                if(grid[i][j]){
                    if(grid[i][j].team == 2) legionPoint[1][i] ++;
                    if(grid[i][j].team == 1) legionPoint[1][i] --;
                }
                if(grid[j][i]){
                    if(grid[j][i].team == 2) legionPoint[0][i] --;
                    if(grid[j][i].team == 1) legionPoint[0][i] ++;
                }
            }
            
        }


        return [grid, legionPoint];

    }
        
});