// server_scripts/forestry/assembler.js
// Forestry: carpenter + thermionic_fabricator + metal_plating -> modern_industrialization:assembler
// Кожен рецепт записаний окремо, щоб його можна було змінювати вручну.
// EU/t = 16 для всіх; тривалість: carpenter = max(100, time*10), fabricator = 200.

ServerEvents.recipes(event => {
  const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');
  if (!IS_FORESTRY_LOADED) return;
  console.info('[forestry assembler] loaded (v4, explicit recipes)');

  // ============================================================
  // CARPENTER (forestry:carpenter)
  // ============================================================

  // ash_brick
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("2x forestry:ash")
    .fluidIn("minecraft:water", 50)
    .itemOut("1x forestry:ash_brick");

  // bog_earth
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("4x minecraft:dirt")
    .itemIn("4x #c:sands")
    .itemIn("1x forestry:mulch")
    .fluidIn("minecraft:water", 1000)
    .itemOut("8x forestry:bog_earth");

  // candles
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("4x forestry:beeswax")
    .itemIn("1x minecraft:string")
    .itemOut("4x minecraft:candle");

  // carton
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("4x forestry:wood_pulp")
    .fluidIn("minecraft:water", 1000)
    .itemOut("2x forestry:carton");

  // cork
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("4x #c:sawdust")
    .fluidIn("minecraft:water", 200)
    .itemOut("4x forestry:cork");

  // dissipation_charge
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("2x forestry:honeydew")
    .itemIn("4x forestry:royal_jelly")
    .itemIn("1x forestry:can")
    .itemIn("2x minecraft:gunpowder")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:dissipation_charge");

  // ender_pearl
  event.recipes.modern_industrialization.assembler(16, 1000)
    .itemIn("5x forestry:pulsating_mesh")
    .itemOut("1x minecraft:ender_pearl");

  // escritoire
  event.recipes.modern_industrialization.assembler(16, 500)
    .itemIn("6x #minecraft:planks")
    .fluidIn("forestry:seed_oil", 500)
    .itemOut("1x forestry:escritoire");

  // hardened_casing
  event.recipes.modern_industrialization.assembler(16, 750)
    .itemIn("4x #c:gems/diamond")
    .itemIn("1x forestry:sturdy_casing")
    .fluidIn("minecraft:water", 5000)
    .itemOut("1x forestry:hardened_casing");

  // humus
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("8x minecraft:dirt")
    .itemIn("1x forestry:mulch")
    .fluidIn("minecraft:water", 1000)
    .itemOut("9x forestry:humus");

  // impregnated_casing
  event.recipes.modern_industrialization.assembler(16, 500)
    .itemIn("8x #minecraft:logs")
    .fluidIn("forestry:seed_oil", 250)
    .itemOut("1x forestry:impregnated_casing");

  // impregnated_stick
  event.recipes.modern_industrialization.assembler(16, 500)
    .itemIn("2x #minecraft:logs")
    .fluidIn("forestry:seed_oil", 100)
    .itemOut("2x forestry:impregnated_stick");

  // iodine_charge
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("2x forestry:honey_drop")
    .itemIn("4x forestry:pollen_cluster")
    .itemIn("1x forestry:can")
    .itemIn("2x minecraft:gunpowder")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:iodine_capsule");

  // kit_axe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("3x #c:ingots/bronze")
    .itemIn("2x minecraft:stick")
    .itemIn("1x forestry:carton")
    .itemOut("1x forestry:axe_kit");

  // kit_hoe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x #c:ingots/bronze")
    .itemIn("2x minecraft:stick")
    .itemIn("1x forestry:carton")
    .itemOut("1x forestry:hoe_kit");

  // kit_pickaxe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("3x #c:ingots/bronze")
    .itemIn("2x minecraft:stick")
    .itemIn("1x forestry:carton")
    .itemOut("1x forestry:pickaxe_kit");

  // kit_shovel
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x #c:ingots/bronze")
    .itemIn("2x minecraft:stick")
    .itemIn("1x forestry:carton")
    .itemOut("1x forestry:shovel_kit");

  // kit_sword
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x #c:ingots/bronze")
    .itemIn("1x minecraft:stick")
    .itemIn("1x forestry:carton")
    .itemOut("1x forestry:sword_kit");

  // paper
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("2x forestry:wood_pulp")
    .fluidIn("minecraft:water", 250)
    .itemOut("1x minecraft:paper");

  // plywood
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("3x #minecraft:wooden_slabs")
    .itemIn("3x #c:sawdust")
    .fluidIn("minecraft:water", 100)
    .itemOut("24x forestry:plywood");

  // portable_analyzer
  event.recipes.modern_industrialization.assembler(16, 1000)
    .itemIn("4x #c:ingots/tin")
    .itemIn("2x #c:glass_panes")
    .itemIn("2x #c:dusts/redstone")
    .itemIn("1x #c:gems/diamond")
    .fluidIn("minecraft:water", 2000)
    .itemOut("1x forestry:portable_analyzer");

  // reclaim_bronze_axe
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("1x forestry:broken_survivalists_axe")
    .itemOut("2x forestry:bronze_ingot");

  // reclaim_bronze_hoe
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("1x forestry:broken_survivalists_hoe")
    .itemOut("1x forestry:bronze_ingot");

  // reclaim_bronze_pickaxe
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("1x forestry:broken_survivalists_pickaxe")
    .itemOut("2x forestry:bronze_ingot");

  // reclaim_bronze_shovel
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("1x forestry:broken_survivalists_shovel")
    .itemOut("1x forestry:bronze_ingot");

  // reclaim_bronze_sword
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("1x forestry:broken_survivalists_sword")
    .itemOut("1x forestry:bronze_ingot");

  // scented_paneling
  event.recipes.modern_industrialization.assembler(16, 500)
    .itemIn("1x forestry:royal_jelly")
    .itemIn("3x #minecraft:planks")
    .itemIn("2x forestry:beeswax")
    .itemIn("1x forestry:pollen_cluster")
    .fluidIn("forestry:honey", 500)
    .itemOut("1x forestry:scented_paneling");

  // soldering_iron
  event.recipes.modern_industrialization.assembler(16, 400)
    .itemIn("3x #c:ingots/iron")
    .itemIn("1x #c:ingots/bronze")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:soldering_iron");

  // turf_blocks
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x minecraft:grass_block")
    .fluidIn("minecraft:water", 100)
    .itemOut("4x forestry:turf_block");

  // wood_pulp
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("1x #minecraft:logs")
    .fluidIn("minecraft:water", 250)
    .itemOut("4x forestry:wood_pulp");

  // woven_silk
  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("4x forestry:silk_wisp")
    .fluidIn("minecraft:water", 500)
    .itemOut("1x forestry:woven_silk");

  // circuits/basic
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("6x #c:dusts/redstone")
    .itemIn("1x #c:ingots/tin")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:basic_circuit_board[minecraft:custom_data={T:0}]");

  // circuits/enhanced
  event.recipes.modern_industrialization.assembler(16, 400)
    .itemIn("6x #c:dusts/redstone")
    .itemIn("3x #c:ingots/bronze")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:enhanced_circuit_board[minecraft:custom_data={T:1}]");

  // circuits/intricate
  event.recipes.modern_industrialization.assembler(16, 800)
    .itemIn("6x #c:dusts/redstone")
    .itemIn("3x #c:ingots/gold")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:intricate_circuit_board[minecraft:custom_data={T:3}]");

  // circuits/refined
  event.recipes.modern_industrialization.assembler(16, 800)
    .itemIn("6x #c:dusts/redstone")
    .itemIn("3x #c:ingots/iron")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:refined_circuit_board[minecraft:custom_data={T:2}]");

  // crates/empty
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x #minecraft:logs")
    .fluidIn("minecraft:water", 1000)
    .itemOut("24x forestry:crate");

  // ============================================================
  // THERMIONIC FABRICATOR: сонячна комірка та електронні лампи
  // ============================================================

  // solar_cell
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x #c:nuggets/tin")
    .itemIn("2x #c:gems/lapis")
    .itemIn("1x forestry:phosphorescent_jelly")
    .itemIn("1x #c:silicon")
    .fluidIn("forestry:liquid_glass", 50)
    .itemOut("1x forestry:solar_cell");

  // electron_tubes/amber
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:gems/amber")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:amber_electron_tube");

  // electron_tubes/apatite
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:gems/apatite")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:apatine_electron_tube");

  // electron_tubes/blaze
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x minecraft:blaze_powder")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:blazing_electron_tube");

  // electron_tubes/bronze
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:ingots/bronze")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:bronze_electron_tube");

  // electron_tubes/copper
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:ingots/copper")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:copper_electron_tube");

  // electron_tubes/diamond
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:gems/diamond")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:diamantine_electron_tube");

  // electron_tubes/emerald
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:gems/emerald")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:emerald_electron_tube");

  // electron_tubes/ender
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x minecraft:end_stone")
    .itemIn("2x minecraft:ender_eye")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:ender_electron_tube");

  // electron_tubes/flexible_casing
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x #c:ingots/bronze")
    .itemIn("2x #c:gems/emerald")
    .itemIn("2x #c:slimeballs")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("1x forestry:flexible_casing");

  // electron_tubes/gold
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:ingots/gold")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:golden_electron_tube");

  // electron_tubes/iron
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:ingots/iron")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:iron_electron_tube");

  // electron_tubes/lapis
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:gems/lapis")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:lapis_electron_tube");

  // electron_tubes/obsidian
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x minecraft:obsidian")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:obsidian_electron_tube");

  // electron_tubes/silicon
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:silicon")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:silicon_electron_tube");

  // electron_tubes/tin
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("5x #c:ingots/tin")
    .itemIn("2x #c:dusts/redstone")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("4x forestry:tin_electron_tube");

  // ============================================================
  // ВОГНЕТРИВКЕ ДЕРЕВО: колоди (forestry:fabricator/fireproof/log)
  // ============================================================

  // acacia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:acacia_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:acacia_fireproof_log");

  // balsa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:balsa_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:balsa_fireproof_log");

  // baobab
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:baobab_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:baobab_fireproof_log");

  // beech
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:beech_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:beech_fireproof_log");

  // birch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:birch_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:birch_fireproof_log");

  // camelthorn
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:camelthorn_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:camelthorn_fireproof_log");

  // cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:cherry_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cherry_fireproof_log");

  // chestnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:chestnut_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:chestnut_fireproof_log");

  // cocobolo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:cocobolo_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cocobolo_fireproof_log");

  // coconut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:coconut_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:coconut_fireproof_log");

  // dark_oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:dark_oak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dark_oak_fireproof_log");

  // dogwood
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:dogwood_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dogwood_fireproof_log");

  // ebony
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ebony_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ebony_fireproof_log");

  // elm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:elm_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:elm_fireproof_log");

  // feijoa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:feijoa_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:feijoa_fireproof_log");

  // fir
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:fir_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:fir_fireproof_log");

  // giant_sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:giant_sequoia_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:giant_sequoia_fireproof_log");

  // ginkgo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ginkgo_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ginkgo_fireproof_log");

  // greenheart
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:greenheart_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:greenheart_fireproof_log");

  // ipe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ipe_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ipe_fireproof_log");

  // jacaranda
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:jacaranda_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jacaranda_fireproof_log");

  // jungle
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:jungle_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jungle_fireproof_log");

  // kapok
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kapok_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kapok_fireproof_log");

  // kauri
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kauri_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kauri_fireproof_log");

  // larch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:larch_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:larch_fireproof_log");

  // lemon
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lemon_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lemon_fireproof_log");

  // lime
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lime_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lime_fireproof_log");

  // macrocarpa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:macrocarpa_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:macrocarpa_fireproof_log");

  // mahoe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahoe_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahoe_fireproof_log");

  // mahogany
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahogany_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahogany_fireproof_log");

  // maple
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:maple_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:maple_fireproof_log");

  // oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:oak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:oak_fireproof_log");

  // olive
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:olive_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:olive_fireproof_log");

  // orange
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:orange_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:orange_fireproof_log");

  // padauk
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:padauk_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:padauk_fireproof_log");

  // palm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:palm_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:palm_fireproof_log");

  // papaya
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:papaya_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:papaya_fireproof_log");

  // pear
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pear_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pear_fireproof_log");

  // pewen
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pewen_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pewen_fireproof_log");

  // pine
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pine_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pine_fireproof_log");

  // plum
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:plum_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:plum_fireproof_log");

  // poplar
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:poplar_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:poplar_fireproof_log");

  // sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sequoia_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sequoia_fireproof_log");

  // sour_cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sour_cherry_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sour_cherry_fireproof_log");

  // spruce
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:spruce_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:spruce_fireproof_log");

  // teak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:teak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:teak_fireproof_log");

  // walnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:walnut_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:walnut_fireproof_log");

  // wenge
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:wenge_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:wenge_fireproof_log");

  // willow
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:willow_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:willow_fireproof_log");

  // zebrano
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:zebrano_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:zebrano_fireproof_log");

  // ============================================================
  // ВОГНЕТРИВКЕ ДЕРЕВО: дошки (forestry:fabricator/fireproof/planks)
  // ============================================================

  // acacia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:acacia_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:acacia_fireproof_planks");

  // balsa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:balsa_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:balsa_fireproof_planks");

  // baobab
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:baobab_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:baobab_fireproof_planks");

  // beech
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:beech_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:beech_fireproof_planks");

  // birch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:birch_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:birch_fireproof_planks");

  // camelthorn
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:camelthorn_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:camelthorn_fireproof_planks");

  // cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:cherry_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:cherry_fireproof_planks");

  // chestnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:chestnut_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:chestnut_fireproof_planks");

  // cocobolo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:cocobolo_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:cocobolo_fireproof_planks");

  // coconut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:coconut_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:coconut_fireproof_planks");

  // dark_oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:dark_oak_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:dark_oak_fireproof_planks");

  // dogwood
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:dogwood_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:dogwood_fireproof_planks");

  // ebony
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:ebony_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:ebony_fireproof_planks");

  // elm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:elm_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:elm_fireproof_planks");

  // feijoa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:feijoa_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:feijoa_fireproof_planks");

  // fir
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:fir_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:fir_fireproof_planks");

  // giant_sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:giant_sequoia_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:giant_sequoia_fireproof_planks");

  // ginkgo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:ginkgo_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:ginkgo_fireproof_planks");

  // greenheart
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:greenheart_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:greenheart_fireproof_planks");

  // ipe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:ipe_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:ipe_fireproof_planks");

  // jacaranda
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:jacaranda_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:jacaranda_fireproof_planks");

  // jungle
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:jungle_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:jungle_fireproof_planks");

  // kapok
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:kapok_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:kapok_fireproof_planks");

  // kauri
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:kauri_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:kauri_fireproof_planks");

  // larch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:larch_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:larch_fireproof_planks");

  // lemon
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:lemon_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:lemon_fireproof_planks");

  // lime
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:lime_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:lime_fireproof_planks");

  // macrocarpa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:macrocarpa_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:macrocarpa_fireproof_planks");

  // mahoe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:mahoe_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:mahoe_fireproof_planks");

  // mahogany
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:mahogany_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:mahogany_fireproof_planks");

  // maple
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:maple_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:maple_fireproof_planks");

  // oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:oak_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:oak_fireproof_planks");

  // olive
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:olive_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:olive_fireproof_planks");

  // orange
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:orange_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:orange_fireproof_planks");

  // padauk
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:padauk_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:padauk_fireproof_planks");

  // palm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:palm_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:palm_fireproof_planks");

  // papaya
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:papaya_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:papaya_fireproof_planks");

  // pear
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:pear_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:pear_fireproof_planks");

  // pewen
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:pewen_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:pewen_fireproof_planks");

  // pine
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:pine_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:pine_fireproof_planks");

  // plum
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:plum_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:plum_fireproof_planks");

  // poplar
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:poplar_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:poplar_fireproof_planks");

  // sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:sequoia_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:sequoia_fireproof_planks");

  // sour_cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:sour_cherry_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:sour_cherry_fireproof_planks");

  // spruce
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:spruce_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:spruce_fireproof_planks");

  // teak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:teak_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:teak_fireproof_planks");

  // walnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:walnut_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:walnut_fireproof_planks");

  // wenge
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:wenge_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:wenge_fireproof_planks");

  // willow
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:willow_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:willow_fireproof_planks");

  // zebrano
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:zebrano_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:zebrano_fireproof_planks");

  // ============================================================
  // ВОГНЕТРИВКЕ ДЕРЕВО: обтесані колоди (forestry:fabricator/fireproof/stripped_log)
  // ============================================================

  // acacia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_acacia_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:acacia_fireproof_stripped_log");

  // balsa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:balsa_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:balsa_fireproof_stripped_log");

  // baobab
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:baobab_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:baobab_fireproof_stripped_log");

  // beech
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:beech_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:beech_fireproof_stripped_log");

  // birch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_birch_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:birch_fireproof_stripped_log");

  // camelthorn
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:camelthorn_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:camelthorn_fireproof_stripped_log");

  // cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_cherry_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cherry_fireproof_stripped_log");

  // chestnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:chestnut_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:chestnut_fireproof_stripped_log");

  // cocobolo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:cocobolo_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cocobolo_fireproof_stripped_log");

  // coconut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:coconut_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:coconut_fireproof_stripped_log");

  // dark_oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_dark_oak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dark_oak_fireproof_stripped_log");

  // dogwood
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:dogwood_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dogwood_fireproof_stripped_log");

  // ebony
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ebony_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ebony_fireproof_stripped_log");

  // elm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:elm_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:elm_fireproof_stripped_log");

  // feijoa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:feijoa_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:feijoa_fireproof_stripped_log");

  // fir
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:fir_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:fir_fireproof_stripped_log");

  // giant_sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:giant_sequoia_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:giant_sequoia_fireproof_stripped_log");

  // ginkgo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ginkgo_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ginkgo_fireproof_stripped_log");

  // greenheart
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:greenheart_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:greenheart_fireproof_stripped_log");

  // ipe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ipe_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ipe_fireproof_stripped_log");

  // jacaranda
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:jacaranda_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jacaranda_fireproof_stripped_log");

  // jungle
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_jungle_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jungle_fireproof_stripped_log");

  // kapok
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kapok_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kapok_fireproof_stripped_log");

  // kauri
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kauri_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kauri_fireproof_stripped_log");

  // larch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:larch_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:larch_fireproof_stripped_log");

  // lemon
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lemon_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lemon_fireproof_stripped_log");

  // lime
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lime_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lime_fireproof_stripped_log");

  // macrocarpa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:macrocarpa_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:macrocarpa_fireproof_stripped_log");

  // mahoe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahoe_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahoe_fireproof_stripped_log");

  // mahogany
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahogany_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahogany_fireproof_stripped_log");

  // maple
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:maple_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:maple_fireproof_stripped_log");

  // oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_oak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:oak_fireproof_stripped_log");

  // olive
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:olive_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:olive_fireproof_stripped_log");

  // orange
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:orange_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:orange_fireproof_stripped_log");

  // padauk
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:padauk_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:padauk_fireproof_stripped_log");

  // palm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:palm_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:palm_fireproof_stripped_log");

  // papaya
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:papaya_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:papaya_fireproof_stripped_log");

  // pear
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pear_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pear_fireproof_stripped_log");

  // pewen
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pewen_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pewen_fireproof_stripped_log");

  // pine
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pine_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pine_fireproof_stripped_log");

  // plum
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:plum_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:plum_fireproof_stripped_log");

  // poplar
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:poplar_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:poplar_fireproof_stripped_log");

  // sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sequoia_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sequoia_fireproof_stripped_log");

  // sour_cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sour_cherry_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sour_cherry_fireproof_stripped_log");

  // spruce
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_spruce_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:spruce_fireproof_stripped_log");

  // teak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:teak_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:teak_fireproof_stripped_log");

  // walnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:walnut_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:walnut_fireproof_stripped_log");

  // wenge
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:wenge_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:wenge_fireproof_stripped_log");

  // willow
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:willow_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:willow_fireproof_stripped_log");

  // zebrano
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:zebrano_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:zebrano_fireproof_stripped_log");

  // ============================================================
  // ВОГНЕТРИВКЕ ДЕРЕВО: обтесана деревина (forestry:fabricator/fireproof/stripped_wood)
  // ============================================================

  // acacia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_acacia_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:acacia_fireproof_stripped_wood");

  // balsa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:balsa_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:balsa_fireproof_stripped_wood");

  // baobab
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:baobab_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:baobab_fireproof_stripped_wood");

  // beech
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:beech_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:beech_fireproof_stripped_wood");

  // birch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_birch_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:birch_fireproof_stripped_wood");

  // camelthorn
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:camelthorn_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:camelthorn_fireproof_stripped_wood");

  // cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_cherry_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cherry_fireproof_stripped_wood");

  // chestnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:chestnut_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:chestnut_fireproof_stripped_wood");

  // cocobolo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:cocobolo_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cocobolo_fireproof_stripped_wood");

  // coconut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:coconut_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:coconut_fireproof_stripped_wood");

  // dark_oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_dark_oak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dark_oak_fireproof_stripped_wood");

  // dogwood
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:dogwood_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dogwood_fireproof_stripped_wood");

  // ebony
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ebony_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ebony_fireproof_stripped_wood");

  // elm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:elm_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:elm_fireproof_stripped_wood");

  // feijoa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:feijoa_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:feijoa_fireproof_stripped_wood");

  // fir
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:fir_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:fir_fireproof_stripped_wood");

  // giant_sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:giant_sequoia_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:giant_sequoia_fireproof_stripped_wood");

  // ginkgo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ginkgo_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ginkgo_fireproof_stripped_wood");

  // greenheart
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:greenheart_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:greenheart_fireproof_stripped_wood");

  // ipe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ipe_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ipe_fireproof_stripped_wood");

  // jacaranda
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:jacaranda_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jacaranda_fireproof_stripped_wood");

  // jungle
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_jungle_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jungle_fireproof_stripped_wood");

  // kapok
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kapok_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kapok_fireproof_stripped_wood");

  // kauri
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kauri_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kauri_fireproof_stripped_wood");

  // larch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:larch_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:larch_fireproof_stripped_wood");

  // lemon
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lemon_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lemon_fireproof_stripped_wood");

  // lime
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lime_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lime_fireproof_stripped_wood");

  // macrocarpa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:macrocarpa_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:macrocarpa_fireproof_stripped_wood");

  // mahoe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahoe_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahoe_fireproof_stripped_wood");

  // mahogany
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahogany_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahogany_fireproof_stripped_wood");

  // maple
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:maple_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:maple_fireproof_stripped_wood");

  // oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_oak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:oak_fireproof_stripped_wood");

  // olive
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:olive_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:olive_fireproof_stripped_wood");

  // orange
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:orange_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:orange_fireproof_stripped_wood");

  // padauk
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:padauk_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:padauk_fireproof_stripped_wood");

  // palm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:palm_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:palm_fireproof_stripped_wood");

  // papaya
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:papaya_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:papaya_fireproof_stripped_wood");

  // pear
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pear_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pear_fireproof_stripped_wood");

  // pewen
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pewen_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pewen_fireproof_stripped_wood");

  // pine
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pine_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pine_fireproof_stripped_wood");

  // plum
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:plum_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:plum_fireproof_stripped_wood");

  // poplar
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:poplar_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:poplar_fireproof_stripped_wood");

  // sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sequoia_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sequoia_fireproof_stripped_wood");

  // sour_cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sour_cherry_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sour_cherry_fireproof_stripped_wood");

  // spruce
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_spruce_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:spruce_fireproof_stripped_wood");

  // teak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:teak_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:teak_fireproof_stripped_wood");

  // walnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:walnut_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:walnut_fireproof_stripped_wood");

  // wenge
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:wenge_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:wenge_fireproof_stripped_wood");

  // willow
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:willow_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:willow_fireproof_stripped_wood");

  // zebrano
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:zebrano_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:zebrano_fireproof_stripped_wood");

  // ============================================================
  // ВОГНЕТРИВКЕ ДЕРЕВО: деревина (forestry:fabricator/fireproof/wood)
  // ============================================================

  // acacia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:acacia_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:acacia_fireproof_wood");

  // balsa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:balsa_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:balsa_fireproof_wood");

  // baobab
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:baobab_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:baobab_fireproof_wood");

  // beech
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:beech_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:beech_fireproof_wood");

  // birch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:birch_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:birch_fireproof_wood");

  // camelthorn
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:camelthorn_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:camelthorn_fireproof_wood");

  // cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:cherry_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cherry_fireproof_wood");

  // chestnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:chestnut_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:chestnut_fireproof_wood");

  // cocobolo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:cocobolo_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cocobolo_fireproof_wood");

  // coconut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:coconut_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:coconut_fireproof_wood");

  // dark_oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:dark_oak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dark_oak_fireproof_wood");

  // dogwood
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:dogwood_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dogwood_fireproof_wood");

  // ebony
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ebony_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ebony_fireproof_wood");

  // elm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:elm_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:elm_fireproof_wood");

  // feijoa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:feijoa_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:feijoa_fireproof_wood");

  // fir
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:fir_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:fir_fireproof_wood");

  // giant_sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:giant_sequoia_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:giant_sequoia_fireproof_wood");

  // ginkgo
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ginkgo_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ginkgo_fireproof_wood");

  // greenheart
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:greenheart_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:greenheart_fireproof_wood");

  // ipe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ipe_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ipe_fireproof_wood");

  // jacaranda
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:jacaranda_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jacaranda_fireproof_wood");

  // jungle
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:jungle_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jungle_fireproof_wood");

  // kapok
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kapok_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kapok_fireproof_wood");

  // kauri
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kauri_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kauri_fireproof_wood");

  // larch
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:larch_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:larch_fireproof_wood");

  // lemon
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lemon_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lemon_fireproof_wood");

  // lime
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lime_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lime_fireproof_wood");

  // macrocarpa
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:macrocarpa_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:macrocarpa_fireproof_wood");

  // mahoe
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahoe_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahoe_fireproof_wood");

  // mahogany
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahogany_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahogany_fireproof_wood");

  // maple
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:maple_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:maple_fireproof_wood");

  // oak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:oak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:oak_fireproof_wood");

  // olive
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:olive_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:olive_fireproof_wood");

  // orange
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:orange_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:orange_fireproof_wood");

  // padauk
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:padauk_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:padauk_fireproof_wood");

  // palm
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:palm_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:palm_fireproof_wood");

  // papaya
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:papaya_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:papaya_fireproof_wood");

  // pear
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pear_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pear_fireproof_wood");

  // pewen
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pewen_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pewen_fireproof_wood");

  // pine
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pine_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pine_fireproof_wood");

  // plum
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:plum_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:plum_fireproof_wood");

  // poplar
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:poplar_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:poplar_fireproof_wood");

  // sequoia
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sequoia_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sequoia_fireproof_wood");

  // sour_cherry
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sour_cherry_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sour_cherry_fireproof_wood");

  // spruce
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:spruce_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:spruce_fireproof_wood");

  // teak
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:teak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:teak_fireproof_wood");

  // walnut
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:walnut_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:walnut_fireproof_wood");

  // wenge
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:wenge_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:wenge_fireproof_wood");

  // willow
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:willow_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:willow_fireproof_wood");

  // zebrano
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:zebrano_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:zebrano_fireproof_wood");

  // ============================================================
  // МЕТАЛЕВІ ПАНЕЛІ (forestry:fabricator, metal_plating)
  // ============================================================

  // black_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/black")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_black");

  // blue_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/blue")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_blue");

  // bronze_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:bronze_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_bronze");

  // brown_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/brown")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_brown");

  // copper_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:copper_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_copper");

  // cyan_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/cyan")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_cyan");

  // gold_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:gold_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_gold");

  // gray_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/gray")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_gray");

  // green_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/green")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_green");

  // iron_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:iron_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_iron");

  // light_blue_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/light_blue")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_light_blue");

  // light_gray_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/light_gray")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_light_gray");

  // lime_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/lime")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_lime");

  // magenta_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/magenta")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_magenta");

  // netherite_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:netherite_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_netherite");

  // orange_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/orange")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_orange");

  // pink_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/pink")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_pink");

  // purple_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/purple")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_purple");

  // red_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/red")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_red");

  // tin_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:tin_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_tin");

  // white_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/white")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_white");

  // yellow_metal_plating
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/yellow")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_yellow");
})
