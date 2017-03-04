//index.js
//获取应用实例
// app.js
var heroes = 
{ axe:
   { name: 'axe',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/axe_hphover.png' },
  earthshaker:
   { name: 'earthshaker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/earthshaker_hphover.png' },
  pudge:
   { name: 'pudge',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/pudge_hphover.png' },
  sand_king:
   { name: 'sand_king',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sand_king_hphover.png' },
  sven:
   { name: 'sven',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sven_hphover.png' },
  tiny:
   { name: 'tiny',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tiny_hphover.png' },
  kunkka:
   { name: 'kunkka',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png' },
  slardar:
   { name: 'slardar',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/slardar_hphover.png' },
  tidehunter:
   { name: 'tidehunter',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tidehunter_hphover.png' },
  beastmaster:
   { name: 'beastmaster',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/beastmaster_hphover.png' },
  skeleton_king:
   { name: 'skeleton_king',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/skeleton_king_hphover.png' },
  dragon_knight:
   { name: 'dragon_knight',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dragon_knight_hphover.png' },
  rattletrap:
   { name: 'rattletrap',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/rattletrap_hphover.png' },
  life_stealer:
   { name: 'life_stealer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/life_stealer_hphover.png' },
  omniknight:
   { name: 'omniknight',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_hphover.png' },
  huskar:
   { name: 'huskar',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/huskar_hphover.png' },
  night_stalker:
   { name: 'night_stalker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/night_stalker_hphover.png' },
  doom_bringer:
   { name: 'doom_bringer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/doom_bringer_hphover.png' },
  spirit_breaker:
   { name: 'spirit_breaker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/spirit_breaker_hphover.png' },
  alchemist:
   { name: 'alchemist',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/alchemist_hphover.png' },
  lycan:
   { name: 'lycan',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lycan_hphover.png' },
  brewmaster:
   { name: 'brewmaster',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/brewmaster_hphover.png' },
  chaos_knight:
   { name: 'chaos_knight',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/chaos_knight_hphover.png' },
  treant:
   { name: 'treant',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/treant_hphover.png' },
  undying:
   { name: 'undying',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/undying_hphover.png' },
  wisp:
   { name: 'wisp',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/wisp_hphover.png' },
  centaur:
   { name: 'centaur',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/centaur_hphover.png' },
  magnataur:
   { name: 'magnataur',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/magnataur_hphover.png' },
  shredder:
   { name: 'shredder',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shredder_hphover.png' },
  bristleback:
   { name: 'bristleback',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bristleback_hphover.png' },
  tusk:
   { name: 'tusk',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tusk_hphover.png' },
  abaddon:
   { name: 'abaddon',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/abaddon_hphover.png' },
  elder_titan:
   { name: 'elder_titan',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/elder_titan_hphover.png' },
  legion_commander:
   { name: 'legion_commander',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/legion_commander_hphover.png' },
  earth_spirit:
   { name: 'earth_spirit',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/earth_spirit_hphover.png' },
  abyssal_underlord:
   { name: 'abyssal_underlord',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/abyssal_underlord_hphover.png' },
  phoenix:
   { name: 'phoenix',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phoenix_hphover.png' },
  antimage:
   { name: 'antimage',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/antimage_hphover.png' },
  bloodseeker:
   { name: 'bloodseeker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bloodseeker_hphover.png' },
  drow_ranger:
   { name: 'drow_ranger',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/drow_ranger_hphover.png' },
  juggernaut:
   { name: 'juggernaut',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/juggernaut_hphover.png' },
  mirana:
   { name: 'mirana',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/mirana_hphover.png' },
  morphling:
   { name: 'morphling',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/morphling_hphover.png' },
  nevermore:
   { name: 'nevermore',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/nevermore_hphover.png' },
  phantom_lancer:
   { name: 'phantom_lancer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_lancer_hphover.png' },
  razor:
   { name: 'razor',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/razor_hphover.png' },
  vengefulspirit:
   { name: 'vengefulspirit',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/vengefulspirit_hphover.png' },
  riki:
   { name: 'riki',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/riki_hphover.png' },
  sniper:
   { name: 'sniper',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sniper_hphover.png' },
  venomancer:
   { name: 'venomancer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/venomancer_hphover.png' },
  faceless_void:
   { name: 'faceless_void',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/faceless_void_hphover.png' },
  phantom_assassin:
   { name: 'phantom_assassin',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_assassin_hphover.png' },
  templar_assassin:
   { name: 'templar_assassin',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/templar_assassin_hphover.png' },
  viper:
   { name: 'viper',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/viper_hphover.png' },
  luna:
   { name: 'luna',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/luna_hphover.png' },
  clinkz:
   { name: 'clinkz',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/clinkz_hphover.png' },
  broodmother:
   { name: 'broodmother',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/broodmother_hphover.png' },
  bounty_hunter:
   { name: 'bounty_hunter',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bounty_hunter_hphover.png' },
  weaver:
   { name: 'weaver',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/weaver_hphover.png' },
  spectre:
   { name: 'spectre',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/spectre_hphover.png' },
  ursa:
   { name: 'ursa',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ursa_hphover.png' },
  gyrocopter:
   { name: 'gyrocopter',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/gyrocopter_hphover.png' },
  lone_druid:
   { name: 'lone_druid',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lone_druid_hphover.png' },
  meepo:
   { name: 'meepo',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/meepo_hphover.png' },
  nyx_assassin:
   { name: 'nyx_assassin',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/nyx_assassin_hphover.png' },
  naga_siren:
   { name: 'naga_siren',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/naga_siren_hphover.png' },
  slark:
   { name: 'slark',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/slark_hphover.png' },
  medusa:
   { name: 'medusa',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/medusa_hphover.png' },
  troll_warlord:
   { name: 'troll_warlord',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/troll_warlord_hphover.png' },
  ember_spirit:
   { name: 'ember_spirit',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ember_spirit_hphover.png' },
  terrorblade:
   { name: 'terrorblade',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/terrorblade_hphover.png' },
  arc_warden:
   { name: 'arc_warden',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/arc_warden_hphover.png' },
  monkey_king:
   { name: 'monkey_king',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_hphover.png' },
  bane:
   { name: 'bane',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bane_hphover.png' },
  crystal_maiden:
   { name: 'crystal_maiden',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_hphover.png' },
  puck:
   { name: 'puck',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/puck_hphover.png' },
  storm_spirit:
   { name: 'storm_spirit',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/storm_spirit_hphover.png' },
  windrunner:
   { name: 'windrunner',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/windrunner_hphover.png' },
  zuus:
   { name: 'zuus',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/zuus_hphover.png' },
  lina:
   { name: 'lina',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lina_hphover.png' },
  lion:
   { name: 'lion',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lion_hphover.png' },
  shadow_shaman:
   { name: 'shadow_shaman',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_shaman_hphover.png' },
  witch_doctor:
   { name: 'witch_doctor',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/witch_doctor_hphover.png' },
  lich:
   { name: 'lich',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lich_hphover.png' },
  enigma:
   { name: 'enigma',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/enigma_hphover.png' },
  tinker:
   { name: 'tinker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tinker_hphover.png' },
  necrolyte:
   { name: 'necrolyte',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/necrolyte_hphover.png' },
  warlock:
   { name: 'warlock',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/warlock_hphover.png' },
  queenofpain:
   { name: 'queenofpain',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/queenofpain_hphover.png' },
  death_prophet:
   { name: 'death_prophet',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/death_prophet_hphover.png' },
  pugna:
   { name: 'pugna',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/pugna_hphover.png' },
  dazzle:
   { name: 'dazzle',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dazzle_hphover.png' },
  leshrac:
   { name: 'leshrac',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/leshrac_hphover.png' },
  furion:
   { name: 'furion',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/furion_hphover.png' },
  dark_seer:
   { name: 'dark_seer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dark_seer_hphover.png' },
  enchantress:
   { name: 'enchantress',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/enchantress_hphover.png' },
  jakiro:
   { name: 'jakiro',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/jakiro_hphover.png' },
  batrider:
   { name: 'batrider',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/batrider_hphover.png' },
  chen:
   { name: 'chen',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/chen_hphover.png' },
  ancient_apparition:
   { name: 'ancient_apparition',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ancient_apparition_hphover.png' },
  invoker:
   { name: 'invoker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/invoker_hphover.png' },
  silencer:
   { name: 'silencer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/silencer_hphover.png' },
  obsidian_destroyer:
   { name: 'obsidian_destroyer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/obsidian_destroyer_hphover.png' },
  shadow_demon:
   { name: 'shadow_demon',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_demon_hphover.png' },
  ogre_magi:
   { name: 'ogre_magi',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ogre_magi_hphover.png' },
  rubick:
   { name: 'rubick',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/rubick_hphover.png' },
  disruptor:
   { name: 'disruptor',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/disruptor_hphover.png' },
  keeper_of_the_light:
   { name: 'keeper_of_the_light',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/keeper_of_the_light_hphover.png' },
  visage:
   { name: 'visage',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/visage_hphover.png' },
  skywrath_mage:
   { name: 'skywrath_mage',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/skywrath_mage_hphover.png' },
  techies:
   { name: 'techies',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/techies_hphover.png' },
  oracle:
   { name: 'oracle',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/oracle_hphover.png' },
  winter_wyvern:
   { name: 'winter_wyvern',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/winter_wyvern_hphover.png' } }


var app = getApp()
Page({
  data: {
    userInfo: {},
    heropicker: "OFF",
    legion1: [undefined, undefined, undefined, undefined, undefined],
    legion2: [undefined, undefined, undefined, undefined, undefined],
    legionOnHandle: 1,
    heros: heroes,
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  openHeroPanel: function (event) {
    var legion = event.currentTarget.dataset.legion;
    console.log(legion)
    this.setData({
      "heropicker": "ON",
      legionOnHandle: legion
    })
  },
  hero_item_tap_handler: function(event){
    console.log(event.currentTarget.id);
    let id = event.currentTarget.id,
        heros = this.data.heros,
        model_old = heros[id],
        legion_num = this.data.legionOnHandle,
        legion_old = legion_num == 1 ? this.data.legion1 : this.data.legion2,
        legion_new = [],
        change = false;

      for (var i = legion_old.length - 1; i >= 0; i--) {
        legion_new[i] = legion_old[i];
      }

    if(model_old.legion){
      if(model_old.legion == legion_num) {
        change = true; 
        model_old.legion = undefined;
        legion_new[legion_new.indexOf(id)] = undefined;
      }
    }else{
       for (var i = 0; i < legion_new.length; i++) {
        if (!legion_new[i]) {
          legion_new[i] = id;
          change = true;
          model_old.legion = legion_num;
          break;
        }
      }
    }
    if(change){
      let obj = {}
      obj[legion_num == 1 ? "legion1" : "legion2"] = legion_new;
      obj.heros = JSON.parse(JSON.stringify(heros));
      this.setData(obj);
    }

  },
  closepanel: function(event){
    if (event.target.id=="HeroPanel") {
        this.setData({
          "heropicker": "OFF"
        })
    }
  },

  heroPickerHandler: function (event) {
    console.log("id=" + event.target.id);
    if (event.target.id && event.target.id != "HeroPanel") {
      var id = event.target.id,
        heros = this.data.heros,
        legion_num = this.data.legionOnHandle,
        legion_old = legion_num == 1 ? this.data.legion1 : this.data.legion2,
        legion_other = legion_num == 1 ? this.data.legion2 : this.data.legion1,
        idx = legion_old.indexOf(id),
        legion_new = [],
        change = false,
        legion_state = false;

      if (idx == -1) {
        if (legion_other.indexOf(id) == -1) {
          for (var i = 0; i < legion_old.length; i++) {
            if (!legion_old[i]) {
              legion_old[i] = id;
              change = true;
              legion_state = true;
              break;
            }
          }
        }
      } else {
        legion_old[idx] = undefined;
        change = true;
        legion_state = false;
      }

      if (change) {
        for (var i = legion_old.length - 1; i >= 0; i--) {
          legion_new[i] = legion_old[i];
        }
        var obj = {};

        var new_heros = JSON.parse(JSON.stringify(heros));
        var hero = heros[id];
        var hero_new = {
          url: hero.url
        }
        hero_new["legion" + legion_num] = legion_state;
        new_heros[id] = hero_new;
        obj[legion_num == 1 ? "legion1" : "legion2"] = legion_new;
        obj.heros = new_heros;
        this.setData(obj);
      }
    } 
    
    if(event.target.id=="HeroPanel") {
      this.setData({
        "heropicker": "OFF"
      })
    }
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });

  }
})
