//index.js
//获取应用实例
// app.js
var heroes = { axe:
   { name: 'axe',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/axe_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/axe_icon.png' },
  earthshaker:
   { name: 'earthshaker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/earthshaker_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/earthshaker_icon.png' },
  pudge:
   { name: 'pudge',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/pudge_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/pudge_icon.png' },
  sand_king:
   { name: 'sand_king',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sand_king_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/sand_king_icon.png' },
  sven:
   { name: 'sven',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sven_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/sven_icon.png' },
  tiny:
   { name: 'tiny',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tiny_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/tiny_icon.png' },
  kunkka:
   { name: 'kunkka',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/kunkka_icon.png' },
  slardar:
   { name: 'slardar',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/slardar_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/slardar_icon.png' },
  tidehunter:
   { name: 'tidehunter',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tidehunter_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/tidehunter_icon.png' },
  beastmaster:
   { name: 'beastmaster',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/beastmaster_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/beastmaster_icon.png' },
  skeleton_king:
   { name: 'skeleton_king',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/skeleton_king_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/skeleton_king_icon.png' },
  dragon_knight:
   { name: 'dragon_knight',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dragon_knight_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/dragon_knight_icon.png' },
  rattletrap:
   { name: 'rattletrap',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/rattletrap_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/rattletrap_icon.png' },
  life_stealer:
   { name: 'life_stealer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/life_stealer_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/life_stealer_icon.png' },
  omniknight:
   { name: 'omniknight',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/omniknight_icon.png' },
  huskar:
   { name: 'huskar',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/huskar_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/huskar_icon.png' },
  night_stalker:
   { name: 'night_stalker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/night_stalker_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/night_stalker_icon.png' },
  doom_bringer:
   { name: 'doom_bringer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/doom_bringer_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/doom_bringer_icon.png' },
  spirit_breaker:
   { name: 'spirit_breaker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/spirit_breaker_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/spirit_breaker_icon.png' },
  alchemist:
   { name: 'alchemist',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/alchemist_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/alchemist_icon.png' },
  lycan:
   { name: 'lycan',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lycan_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/lycan_icon.png' },
  brewmaster:
   { name: 'brewmaster',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/brewmaster_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/brewmaster_icon.png' },
  chaos_knight:
   { name: 'chaos_knight',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/chaos_knight_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/chaos_knight_icon.png' },
  treant:
   { name: 'treant',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/treant_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/treant_icon.png' },
  undying:
   { name: 'undying',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/undying_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/undying_icon.png' },
  wisp:
   { name: 'wisp',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/wisp_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/wisp_icon.png' },
  centaur:
   { name: 'centaur',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/centaur_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/centaur_icon.png' },
  magnataur:
   { name: 'magnataur',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/magnataur_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/magnataur_icon.png' },
  shredder:
   { name: 'shredder',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shredder_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/shredder_icon.png' },
  bristleback:
   { name: 'bristleback',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bristleback_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/bristleback_icon.png' },
  tusk:
   { name: 'tusk',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tusk_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/tusk_icon.png' },
  abaddon:
   { name: 'abaddon',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/abaddon_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/abaddon_icon.png' },
  elder_titan:
   { name: 'elder_titan',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/elder_titan_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/elder_titan_icon.png' },
  legion_commander:
   { name: 'legion_commander',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/legion_commander_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/legion_commander_icon.png' },
  earth_spirit:
   { name: 'earth_spirit',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/earth_spirit_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/earth_spirit_icon.png' },
  abyssal_underlord:
   { name: 'abyssal_underlord',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/abyssal_underlord_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/abyssal_underlord_icon.png' },
  phoenix:
   { name: 'phoenix',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phoenix_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/phoenix_icon.png' },
  antimage:
   { name: 'antimage',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/antimage_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/antimage_icon.png' },
  bloodseeker:
   { name: 'bloodseeker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bloodseeker_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/bloodseeker_icon.png' },
  drow_ranger:
   { name: 'drow_ranger',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/drow_ranger_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/drow_ranger_icon.png' },
  juggernaut:
   { name: 'juggernaut',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/juggernaut_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/juggernaut_icon.png' },
  mirana:
   { name: 'mirana',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/mirana_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/mirana_icon.png' },
  morphling:
   { name: 'morphling',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/morphling_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/morphling_icon.png' },
  nevermore:
   { name: 'nevermore',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/nevermore_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/nevermore_icon.png' },
  phantom_lancer:
   { name: 'phantom_lancer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_lancer_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/phantom_lancer_icon.png' },
  razor:
   { name: 'razor',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/razor_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/razor_icon.png' },
  vengefulspirit:
   { name: 'vengefulspirit',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/vengefulspirit_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/vengefulspirit_icon.png' },
  riki:
   { name: 'riki',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/riki_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/riki_icon.png' },
  sniper:
   { name: 'sniper',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/sniper_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/sniper_icon.png' },
  venomancer:
   { name: 'venomancer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/venomancer_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/venomancer_icon.png' },
  faceless_void:
   { name: 'faceless_void',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/faceless_void_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/faceless_void_icon.png' },
  phantom_assassin:
   { name: 'phantom_assassin',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_assassin_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/phantom_assassin_icon.png' },
  templar_assassin:
   { name: 'templar_assassin',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/templar_assassin_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/templar_assassin_icon.png' },
  viper:
   { name: 'viper',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/viper_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/viper_icon.png' },
  luna:
   { name: 'luna',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/luna_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/luna_icon.png' },
  clinkz:
   { name: 'clinkz',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/clinkz_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/clinkz_icon.png' },
  broodmother:
   { name: 'broodmother',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/broodmother_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/broodmother_icon.png' },
  bounty_hunter:
   { name: 'bounty_hunter',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bounty_hunter_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/bounty_hunter_icon.png' },
  weaver:
   { name: 'weaver',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/weaver_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/weaver_icon.png' },
  spectre:
   { name: 'spectre',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/spectre_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/spectre_icon.png' },
  ursa:
   { name: 'ursa',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ursa_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/ursa_icon.png' },
  gyrocopter:
   { name: 'gyrocopter',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/gyrocopter_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/gyrocopter_icon.png' },
  lone_druid:
   { name: 'lone_druid',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lone_druid_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/lone_druid_icon.png' },
  meepo:
   { name: 'meepo',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/meepo_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/meepo_icon.png' },
  nyx_assassin:
   { name: 'nyx_assassin',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/nyx_assassin_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/nyx_assassin_icon.png' },
  naga_siren:
   { name: 'naga_siren',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/naga_siren_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/naga_siren_icon.png' },
  slark:
   { name: 'slark',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/slark_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/slark_icon.png' },
  medusa:
   { name: 'medusa',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/medusa_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/medusa_icon.png' },
  troll_warlord:
   { name: 'troll_warlord',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/troll_warlord_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/troll_warlord_icon.png' },
  ember_spirit:
   { name: 'ember_spirit',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ember_spirit_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/ember_spirit_icon.png' },
  terrorblade:
   { name: 'terrorblade',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/terrorblade_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/terrorblade_icon.png' },
  arc_warden:
   { name: 'arc_warden',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/arc_warden_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/arc_warden_icon.png' },
  monkey_king:
   { name: 'monkey_king',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/monkey_king_icon.png' },
  bane:
   { name: 'bane',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/bane_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/bane_icon.png' },
  crystal_maiden:
   { name: 'crystal_maiden',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/crystal_maiden_icon.png' },
  puck:
   { name: 'puck',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/puck_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/puck_icon.png' },
  storm_spirit:
   { name: 'storm_spirit',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/storm_spirit_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/storm_spirit_icon.png' },
  windrunner:
   { name: 'windrunner',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/windrunner_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/windrunner_icon.png' },
  zuus:
   { name: 'zuus',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/zuus_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/zuus_icon.png' },
  lina:
   { name: 'lina',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lina_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/lina_icon.png' },
  lion:
   { name: 'lion',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lion_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/lion_icon.png' },
  shadow_shaman:
   { name: 'shadow_shaman',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_shaman_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/shadow_shaman_icon.png' },
  witch_doctor:
   { name: 'witch_doctor',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/witch_doctor_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/witch_doctor_icon.png' },
  lich:
   { name: 'lich',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/lich_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/lich_icon.png' },
  enigma:
   { name: 'enigma',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/enigma_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/enigma_icon.png' },
  tinker:
   { name: 'tinker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/tinker_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/tinker_icon.png' },
  necrolyte:
   { name: 'necrolyte',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/necrolyte_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/necrolyte_icon.png' },
  warlock:
   { name: 'warlock',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/warlock_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/warlock_icon.png' },
  queenofpain:
   { name: 'queenofpain',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/queenofpain_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/queenofpain_icon.png' },
  death_prophet:
   { name: 'death_prophet',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/death_prophet_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/death_prophet_icon.png' },
  pugna:
   { name: 'pugna',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/pugna_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/pugna_icon.png' },
  dazzle:
   { name: 'dazzle',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dazzle_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/dazzle_icon.png' },
  leshrac:
   { name: 'leshrac',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/leshrac_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/leshrac_icon.png' },
  furion:
   { name: 'furion',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/furion_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/furion_icon.png' },
  dark_seer:
   { name: 'dark_seer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/dark_seer_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/dark_seer_icon.png' },
  enchantress:
   { name: 'enchantress',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/enchantress_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/enchantress_icon.png' },
  jakiro:
   { name: 'jakiro',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/jakiro_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/jakiro_icon.png' },
  batrider:
   { name: 'batrider',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/batrider_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/batrider_icon.png' },
  chen:
   { name: 'chen',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/chen_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/chen_icon.png' },
  ancient_apparition:
   { name: 'ancient_apparition',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ancient_apparition_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/ancient_apparition_icon.png' },
  invoker:
   { name: 'invoker',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/invoker_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/invoker_icon.png' },
  silencer:
   { name: 'silencer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/silencer_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/silencer_icon.png' },
  obsidian_destroyer:
   { name: 'obsidian_destroyer',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/obsidian_destroyer_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/obsidian_destroyer_icon.png' },
  shadow_demon:
   { name: 'shadow_demon',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_demon_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/shadow_demon_icon.png' },
  ogre_magi:
   { name: 'ogre_magi',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/ogre_magi_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/ogre_magi_icon.png' },
  rubick:
   { name: 'rubick',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/rubick_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/rubick_icon.png' },
  disruptor:
   { name: 'disruptor',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/disruptor_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/disruptor_icon.png' },
  keeper_of_the_light:
   { name: 'keeper_of_the_light',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/keeper_of_the_light_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/keeper_of_the_light_icon.png' },
  visage:
   { name: 'visage',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/visage_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/visage_icon.png' },
  skywrath_mage:
   { name: 'skywrath_mage',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/skywrath_mage_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/skywrath_mage_icon.png' },
  techies:
   { name: 'techies',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/techies_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/techies_icon.png' },
  oracle:
   { name: 'oracle',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/oracle_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/oracle_icon.png' },
  winter_wyvern:
   { name: 'winter_wyvern',
     url: 'http://cdn.dota2.com/apps/dota2/images/heroes/winter_wyvern_hphover.png',
     surl: 'http://www.dota2.com.cn/images/heroes/winter_wyvern_icon.png' } }
//const teamrelate = [{"Teammate":"viper","Enemy":"axe","TeamWin":1},{"Teammate":"viper","Enemy":"treant","TeamWin":1},{"Teammate":"viper","Enemy":"meepo","TeamWin":0},{"Teammate":"sven","Enemy":"axe","TeamWin":0},{"Teammate":"sven","Enemy":"treant","TeamWin":0},{"Teammate":"sven","Enemy":"meepo","TeamWin":1},{"Teammate":"puck","Enemy":"axe","TeamWin":0},{"Teammate":"puck","Enemy":"treant","TeamWin":0},{"Teammate":"puck","Enemy":"meepo","TeamWin":1},{"Teammate":"tiny","Enemy":"axe","TeamWin":1},{"Teammate":"tiny","Enemy":"treant","TeamWin":0},{"Teammate":"tiny","Enemy":"meepo","TeamWin":1}];

//const teamagainstorsupport = [{"hero":"shredder","idxValue":22.48,"Assist":["viper","sven","puck","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"elder_titan","idxValue":18.94,"Assist":["viper","sven","puck","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"leshrac","idxValue":18.51,"Assist":["viper","sven","puck","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"warlock","idxValue":16.51,"Assist":["viper","sven","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"winter_wyvern","idxValue":15.18,"Assist":["viper","sven","tiny"],"Anti":["treant","meepo"]},{"hero":"jakiro","idxValue":14.94,"Assist":["viper","sven"],"Anti":["axe","treant","meepo"]},{"hero":"death_prophet","idxValue":14.06,"Assist":["viper","sven","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"batrider","idxValue":13.91,"Assist":["viper","sven"],"Anti":["axe","treant","meepo"]},{"hero":"ursa","idxValue":13.54,"Assist":["viper","sven","puck","tiny"],"Anti":["axe","treant","meepo"]},{"hero":"phoenix","idxValue":12.88,"Assist":["viper","sven","tiny"],"Anti":["axe","treant"]}];

var app = getApp()

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
            anim: "shining"
        }
    },

    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
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
    hero_item_tap_handler: function(event) {
        console.log(event.currentTarget.id);
        let id = event.currentTarget.id,
            heros = this.data.heros,
            model_old = heros[id],
            legion_num = this.data.legionOnHandle,
            legion_old = this.data[`legion${legion_num}`]
            legion_new = [undefined, undefined, undefined, undefined, undefined],
            change = false;

        for (var i = 4; i >= 0; i--) {
            legion_new[i] = legion_old[i];
        }

        if (model_old.legion) {
            if (model_old.legion == legion_num) {
                change = true;
                model_old.legion = undefined;
                legion_new[legion_new.indexOf(id)] = undefined;
            }
        } else {
            for (var i = 0; i < 5; i++) {
                if (!legion_new[i]) {
                    legion_new[i] = id;
                    change = true;
                    model_old.legion = legion_num;
                    break;
                }
            }
        }
        if (change) {
            let obj = {},
                heros_new = app.cloneObject(heros),
                model_new = app.cloneObject(model_old);
            heros_new[id] = model_new;
            obj[legion_num == 1 ? "legion1" : "legion2"] = legion_new;
            obj.heros = heros_new;
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
            model_new;

        if(legion_old.some((elem)=>{return elem === hero;}) || legion_enemy.some((elem)=>{return elem === hero;})){
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

        this.setData(obj);
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

            for(let len = legion.length, i=0; i< len; i++){
                if(!legion_old.some((elem) =>{return elem == legion[i]})){
                    change = true;
                }
            }
            
            let obj = {
                "heropicker": "OFF"
            };

            if(!change){
                this.setData(obj);
                return;
            }

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
                anim: "shining"
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
                that.setData({
                    informationLayer: {
                        state: "OFF",
                        msg: "Loading...",
                        anim: "shining"
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
                        anim: "none"
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

        /*var p1 = new Promise((resolve, reject) => {
            this.requestForRecommend(legion, legion_enemy, resolve, reject);
        });
        var p2 = new Promise((resolve, reject) => {
            this.requestForGrid(legion, legion_enemy, resolve, reject);
        });

        Promise.all([p1, p2]).then(()=>{
            this.setData({
                informationLayer: {
                    state: "OFF",
                    msg: "Loading...",
                    anim: "shining"
                  }
            });
        }).catch(()=>{
            this.setData({
                informationLayer: {
                    state: "OFF",
                    msg: "Loading...",
                    anim: "none"
                  }
            });
        })*/
    },

    requestForRecommend: function(legion, legion_enemy, resolve, reject){
        let that = this;
        wx.request({
            url: "https://1e6u766990.iok.la:25972/data/recommend",
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
            url: "https://1e6u766990.iok.la:25972/data/grid",
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



















