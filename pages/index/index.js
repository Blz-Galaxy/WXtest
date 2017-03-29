//index.js
//获取应用实例
// app.js
var heroes = require("./heros_json.js");
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
        legionOnHandle: 1,
        legion1_member: 0, 
        legion2_member: 0, 
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
        },
        estimateAnimation: {},
        animated: false,
        rivalAnimation: {},
        estimateScore: {
            visible: false,
            msg: "xxxxxxxx",
            score: 3.45
        }
    },

    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    clearHero: function(event){
        let team = event.currentTarget.dataset.team;
        let obj = {};
        let cloneObject = app.cloneObject;
        let heros = cloneObject(this.data.heros);
        let legion_old =  this.data[`legion${team}`];

        legion_old.forEach((elem) => {
            if(elem){
              let hero = cloneObject(heros[elem]);
              hero.legion = undefined;
              heros[elem] = hero;
            }
        });

        obj[`legion${team}`] = [undefined, undefined, undefined, undefined, undefined];
        obj[`legion${team}_member`] = 0;
        obj.heros = heros;
        this.setData(obj);
    },
    openHeroPanel: function(event) {
        var legion = event.currentTarget.dataset.legion;
        console.log(legion)
        this.setData({
            "heropicker": "ON",
            legionOnHandle: legion
        })
    },

    hero_item_tap_handler2: function(event){
        let id = event.currentTarget.id,
            heros = this.data.heros,
            model_old = heros[id],
            legion_num = this.data.legionOnHandle,
            legion_member = this.data[`legion${legion_num}_member`],
            change = false;
            console.log(legion_member)

        if (model_old.legion) {
            if (model_old.legion == legion_num) {
                change = true;
                model_old.legion = undefined;
                legion_member -= 1;
            }
        } else{
            if(legion_member < 5){
                change = true;
                model_old.legion = legion_num;
                legion_member += 1;
            }  
        }
        if(change){
            let obj = {},
                heros_new = app.cloneObject(heros),
                model_new = app.cloneObject(model_old);
            
            heros_new[id] = model_new;
            obj.heros = heros_new;
            obj[`legion${legion_num}_member`] = legion_member;
             console.log(obj)
            this.setData(obj);
        }
    },
    hero_recommand_handler: function(event){
      console.log("recommandlist clink!!!!")
        let hero = event.currentTarget.dataset.recommand,
            heros = this.data.heros,
            model_old = heros[hero],
            legion_old = this.data.legion1,
            legion_new = [],
            legion_enemy = this.data.legion2,
            that = this,
            obj = {},
            heros_new = app.cloneObject(heros),
            model_new,
            legion_member = this.data.legion1_member;

        if(legion_member >= 5 || legion_old.some((elem)=>{return elem === hero;}) || legion_enemy.some((elem)=>{return elem === hero;})){
            return ;
        }

        for (var i = 0; i < 5; i++) {
            if(legion_old[i]){
                legion_new[i] = legion_old[i];
            }else{
                legion_new[i] = hero;
                break;
            }
        }

        this.requestData(legion_new, legion_enemy);


        app.fillBlank(legion_new, 5);

        model_old.legion = 1;
        model_new = app.cloneObject(model_old)
        heros_new[hero] = model_new;
        obj.heros = heros_new;
        obj.legion1 = legion_new;
        obj.legion1_member = legion_member + 1;
        this.setData(obj);
    },
    closeInfoLayer: function(event){
        let layer_state = this.data.informationLayer,
            code = layer_state.state_code;
        if(code === STATE_CODE.EXCEPRION){

        }
    },
    closepanel: function(event) {
        if (event.target.id == "HeroPanel") {
            let heros = this.data.heros,
                legion = [],
                legion_num = this.data.legionOnHandle,
                legion_old = this.data[`legion${legion_num}`],
                legion_enemy = this.data[`legion${legion_num == 1?2:1}`],
                that = this,
                change = false;

            for(let idx in heros){
                let hero = heros[idx]; 
                if(hero.legion == legion_num){
                    legion.push(hero.name);
                }
            }

            let real_l = app.getRealLength(legion_old);
            console.log(`real_l${real_l}`);
            if(legion.length !== real_l){
                change = true;
            }else{
                for(let len = legion.length, i=0; i< len; i++){
                    let hero = legion[i]; 
                    if(!legion_old.some((elem) =>{return elem == hero})){
                        change = true;
                        break;
                    }
                }
            }  
            
            let obj = {
                "heropicker": "OFF"
            };

            if(!change){
                this.setData(obj);
                return;
            }
            //let enemy_list = app.truncateBlank(legion_enemy);

            console.log(`legion${legion}`)
            console.log(`enemy_list${legion_enemy}`);
            if(legion_num == 1){
                this.requestData(legion, legion_enemy);
            }else{
                this.requestData(legion_enemy, legion);
            }
            
            //Teammate=viper,sven,puck,tiny&Enemy=axe,treant,meepo 

            app.fillBlank(legion, 5);     
            obj[`legion${legion_num}`] = legion;
            this.setData(obj);
        }
    },
    requestData: function(legion, legion_enemy){
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
            that = this;
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
                Teammate: app.truncateBlank(legion),
                Enemy: app.truncateBlank(legion_enemy)
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(`recommand:${res.data}`);
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
                Teammate: app.truncateBlank(legion),
                Enemy: app.truncateBlank(legion_enemy)
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(`grid:${res.data}`);
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
                Teammate: app.truncateBlank(legion),
                Enemy: app.truncateBlank(legion_enemy)
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(`score:${res.data}`);

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
        
        if(this.data.legion1_member === 0 || this.data.legion1_member === 0 ){
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

        this.requestForEstimation(this.data.legion1, this.data.legion2, resolve, reject)
        
    },
    backtoRival: function(){


    },
    onLoad: function() {
        console.log('onLoad')
        var that = this,
            mat, grade;
            //调用应用实例的方法获取全局数据
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



















