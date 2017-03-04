//index.js
//获取应用实例
// app.js
var heroes = { axe: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/axe_hphover.png' },
  earthshaker: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/earthshaker_hphover.png' },
  pudge: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/pudge_hphover.png' },
  sand_king: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sand_king_hphover.png' },
  sven: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sven_hphover.png' },
  tiny: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tiny_hphover.png' },
  kunkka: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png' },
  slardar: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/slardar_hphover.png' },
  tidehunter: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tidehunter_hphover.png' },
  beastmaster: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/beastmaster_hphover.png' },
  skeleton_king: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/skeleton_king_hphover.png' },
  dragon_knight: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dragon_knight_hphover.png' },
  rattletrap: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/rattletrap_hphover.png' },
  life_stealer: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/life_stealer_hphover.png' },
  omniknight: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_hphover.png' },
  huskar: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/huskar_hphover.png' },
  night_stalker: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/night_stalker_hphover.png' },
  doom_bringer: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/doom_bringer_hphover.png' },
  spirit_breaker: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/spirit_breaker_hphover.png' },
  alchemist: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/alchemist_hphover.png' },
  lycan: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lycan_hphover.png' },
  brewmaster: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/brewmaster_hphover.png' },
  chaos_knight: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/chaos_knight_hphover.png' },
  treant: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/treant_hphover.png' },
  undying: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/undying_hphover.png' },
  wisp: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/wisp_hphover.png' },
  centaur: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/centaur_hphover.png' },
  magnataur: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/magnataur_hphover.png' },
  shredder: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shredder_hphover.png' },
  bristleback: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bristleback_hphover.png' },
  tusk: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tusk_hphover.png' },
  abaddon: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/abaddon_hphover.png' },
  elder_titan: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/elder_titan_hphover.png' },
  legion_commander: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/legion_commander_hphover.png' },
  earth_spirit: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/earth_spirit_hphover.png' },
  abyssal_underlord: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/abyssal_underlord_hphover.png' },
  phoenix: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phoenix_hphover.png' },
  antimage: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/antimage_hphover.png' },
  bloodseeker: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bloodseeker_hphover.png' },
  drow_ranger: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/drow_ranger_hphover.png' },
  juggernaut: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/juggernaut_hphover.png' },
  mirana: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/mirana_hphover.png' },
  morphling: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/morphling_hphover.png' },
  nevermore: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/nevermore_hphover.png' },
  phantom_lancer: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_lancer_hphover.png' },
  razor: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/razor_hphover.png' },
  vengefulspirit: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/vengefulspirit_hphover.png' },
  riki: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/riki_hphover.png' },
  sniper: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sniper_hphover.png' },
  venomancer: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/venomancer_hphover.png' },
  faceless_void: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/faceless_void_hphover.png' },
  phantom_assassin: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_assassin_hphover.png' },
  templar_assassin: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/templar_assassin_hphover.png' },
  viper: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/viper_hphover.png' },
  luna: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/luna_hphover.png' },
  clinkz: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/clinkz_hphover.png' },
  broodmother: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/broodmother_hphover.png' },
  bounty_hunter: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bounty_hunter_hphover.png' },
  weaver: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/weaver_hphover.png' },
  spectre: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/spectre_hphover.png' },
  ursa: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ursa_hphover.png' },
  gyrocopter: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/gyrocopter_hphover.png' },
  lone_druid: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lone_druid_hphover.png' },
  meepo: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/meepo_hphover.png' },
  nyx_assassin: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/nyx_assassin_hphover.png' },
  naga_siren: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/naga_siren_hphover.png' },
  slark: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/slark_hphover.png' },
  medusa: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/medusa_hphover.png' },
  troll_warlord: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/troll_warlord_hphover.png' },
  ember_spirit: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ember_spirit_hphover.png' },
  terrorblade: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/terrorblade_hphover.png' },
  arc_warden: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/arc_warden_hphover.png' },
  monkey_king: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_hphover.png' },
  bane: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bane_hphover.png' },
  crystal_maiden: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_hphover.png' },
  puck: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/puck_hphover.png' },
  storm_spirit: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/storm_spirit_hphover.png' },
  windrunner: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/windrunner_hphover.png' },
  zuus: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/zuus_hphover.png' },
  lina: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lina_hphover.png' },
  lion: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lion_hphover.png' },
  shadow_shaman: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_shaman_hphover.png' },
  witch_doctor: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/witch_doctor_hphover.png' },
  lich: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lich_hphover.png' },
  enigma: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/enigma_hphover.png' },
  tinker: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tinker_hphover.png' },
  necrolyte: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/necrolyte_hphover.png' },
  warlock: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/warlock_hphover.png' },
  queenofpain: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/queenofpain_hphover.png' },
  death_prophet: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/death_prophet_hphover.png' },
  pugna: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/pugna_hphover.png' },
  dazzle: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dazzle_hphover.png' },
  leshrac: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/leshrac_hphover.png' },
  furion: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/furion_hphover.png' },
  dark_seer: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dark_seer_hphover.png' },
  enchantress: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/enchantress_hphover.png' },
  jakiro: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/jakiro_hphover.png' },
  batrider: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/batrider_hphover.png' },
  chen: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/chen_hphover.png' },
  ancient_apparition: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ancient_apparition_hphover.png' },
  invoker: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/invoker_hphover.png' },
  silencer: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/silencer_hphover.png' },
  obsidian_destroyer: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/obsidian_destroyer_hphover.png' },
  shadow_demon: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_demon_hphover.png' },
  ogre_magi: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ogre_magi_hphover.png' },
  rubick: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/rubick_hphover.png' },
  disruptor: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/disruptor_hphover.png' },
  keeper_of_the_light: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/keeper_of_the_light_hphover.png' },
  visage: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/visage_hphover.png' },
  skywrath_mage: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/skywrath_mage_hphover.png' },
  techies: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/techies_hphover.png' },
  oracle: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/oracle_hphover.png' },
  winter_wyvern: { url: 'http://cdn.dota2.com/apps/dota2/images/heroes/winter_wyvern_hphover.png' } }
var app = getApp()
Page({
  data: {
    userInfo: {},
    heropicker: "OFF",
    legion1: [undefined, undefined, undefined,undefined,undefined],
    legion2: [undefined, undefined, undefined,undefined,undefined],
    legionOnHandle: 1,
    heros: heroes,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  openHeroPanel:function(event){
    var legion = event.currentTarget.dataset.legion;
    console.log(legion)
    this.setData({
      "heropicker": "ON",
      legionOnHandle: legion
    })
  },
  heroPickerHandler: function(event){
    if(event.target.id){
      var id = event.target.id,
          heros = this.data.heros,
          legion_num = this.data.legionOnHandle ,
          legion_old = legion_num == 1 ? this.data.legion1: this.data.legion2,
          legion_other = legion_num == 1 ? this.data.legion2: this.data.legion1,
          idx = legion_old.indexOf(id),
          legion_new = [],
          change = false,
          legion_state = false;

      if(idx == -1){
        if(legion_other.indexOf(id)==-1){
           for(var i =0;i<legion_old.length;i++){
            if(!legion_old[i]){
              legion_old[i] = id;
              change = true;
              legion_state = true;
              break;
            }
          }
        }
      }else{
        legion_old[idx] = undefined;
        change = true;
        legion_state = false;
      }

      if(change){
        for(var i =legion_old.length-1;i>=0;i--){
          legion_new[i] = legion_old[i];
        }
        var obj = {};

        var new_heros = JSON.parse(JSON.stringify(heros));
        var hero = heros[id];
        var hero_new = {
          url: hero.url
        }
        hero_new["legion"+legion_num] = legion_state;
        new_heros[id] = hero_new;
        obj[legion_num == 1?"legion1":"legion2"] = legion_new;
        obj.heros = new_heros;
        this.setData(obj);
      }
    }else{
      this.setData({
        "heropicker": "OFF"
      })
    }
   
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });

  }
})
