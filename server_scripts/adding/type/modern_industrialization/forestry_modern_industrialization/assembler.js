ServerEvents.recipes(event => {
  const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');
  if (!IS_FORESTRY_LOADED) return;
  console.info('[forestry assembler] loaded (v4, explicit recipes)');
  
   event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x ae2:quartz_glass")
    .itemIn("8x modern_industrialization:cupronickel_wire")
    .itemIn("4x modern_industrialization:platinum_plate")
    .fluidIn("extended_industrialization:blazing_essence", 100)
    .itemOut("1x forestry:blazing_electron_tube")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x ae2:quartz_glass")
    .itemIn("8x modern_industrialization:cupronickel_wire")
    .itemIn("8x roll_mod:lapis_lazuli_dust")    
    .fluidIn("extended_industrialization:blazing_essence", 100)
    .itemOut("1x forestry:lapis_electron_tube")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x ae2:quartz_glass")
    .itemIn("16x modern_industrialization:cupronickel_wire")
    .fluidIn("extended_industrialization:blazing_essence", 100)
    .itemOut("1x forestry:apatine_electron_tube")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x ae2:quartz_glass")
    .itemIn("8x modern_industrialization:cupronickel_wire")
    .itemIn("4x modern_industrialization:emerald_plate")
    .itemOut("1x forestry:emerald_electron_tube")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x ae2:quartz_glass")
    .itemIn("8x modern_industrialization:cupronickel_wire")
    .itemIn("4x modern_industrialization:diamond_plate")
    .itemOut("1x forestry:diamantine_electron_tube")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x ae2:quartz_glass")
    .itemIn("8x modern_industrialization:cupronickel_wire")
    .itemIn("4x modern_industrialization:annealed_copper_plate")
    .itemOut("1x forestry:copper_electron_tube")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x ae2:quartz_glass")
    .itemIn("8x modern_industrialization:cupronickel_wire")
    .itemIn("4x modern_industrialization:gold_plate")
    .itemOut("1x forestry:golden_electron_tube")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x modern_industrialization:emerald_plate")
    .itemIn("4x modern_industrialization:tin_cable")
    .itemIn("1x modern_industrialization:analog_circuit")
    .itemOut("1x forestry:basic_circuit_board")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x modern_industrialization:emerald_plate")
    .itemIn("4x modern_industrialization:copper_cable")
    .itemIn("1x modern_industrialization:electronic_circuit")
    .itemOut("1x forestry:enhanced_circuit_board")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x modern_industrialization:emerald_plate")
    .itemIn("4x modern_industrialization:silver_cable")
    .itemIn("1x modern_industrialization:electronic_circuit")
    .itemOut("1x forestry:refined_circuit_board")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x modern_industrialization:emerald_plate")
    .itemIn("4x modern_industrialization:kanthal_cable")
    .itemIn("1x modern_industrialization:digital_circuit")
    .itemOut("1x forestry:intricate_circuit_board")

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x modern_industrialization:large_advanced_motor")
    .itemIn("4x modern_industrialization:processing_unit")
    .itemIn("16x modern_industrialization:osmiridium_plate")
    .itemIn("6x roll_mod:gravi_engine_mk_1")
    .itemIn("8x roll_mod:carbon_mesh")
    .itemOut("1x forestry:rainmaker")

  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("4x forestry:beeswax")
    .itemIn("1x minecraft:string")
    .itemOut("4x minecraft:candle");

  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("4x modern_industrialization:wood_pulp")
    .fluidIn("minecraft:water", 1000)
    .itemOut("2x forestry:carton");

  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("2x forestry:honeydew")
    .itemIn("4x forestry:royal_jelly")
    .itemIn("1x forestry:can")
    .itemIn("2x minecraft:gunpowder")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:dissipation_charge");

  event.recipes.modern_industrialization.assembler(16, 1000)
    .itemIn("5x forestry:pulsating_mesh")
    .itemOut("1x minecraft:ender_pearl");

  event.recipes.modern_industrialization.assembler(16, 500)
    .itemIn("6x #minecraft:planks")
    .fluidIn("forestry:seed_oil", 500)
    .itemOut("1x forestry:escritoire");

  event.recipes.modern_industrialization.assembler(16, 500)
    .itemIn("8x #minecraft:logs")
    .fluidIn("forestry:seed_oil", 250)
    .itemOut("1x forestry:impregnated_casing");

  event.recipes.modern_industrialization.assembler(16, 500)
    .itemIn("2x #minecraft:logs")
    .fluidIn("forestry:seed_oil", 100)
    .itemOut("2x forestry:impregnated_stick");

  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("2x forestry:honey_drop")
    .itemIn("4x forestry:pollen_cluster")
    .itemIn("1x forestry:can")
    .itemIn("2x minecraft:gunpowder")
    .fluidIn("minecraft:water", 1000)
    .itemOut("1x forestry:iodine_capsule");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x ae2:monitor")
    .itemIn("16x modern_industrialization:redstone_alloy_fine_wire")
    .itemIn("8x modern_industrialization:electronic_circuit")
    .itemIn("4x modern_industrialization:aluminum_plate")
    .itemOut("1x forestry:portable_analyzer")

  event.recipes.modern_industrialization.assembler(16, 500)
    .itemIn("1x forestry:royal_jelly")
    .itemIn("3x #minecraft:planks")
    .itemIn("2x forestry:beeswax")
    .itemIn("1x forestry:pollen_cluster")
    .fluidIn("forestry:honey", 500)
    .itemOut("1x forestry:scented_paneling");
  
  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("1x minecraft:lever")
    .itemIn("2x modern_industrialization:kanthal_wire")
    .itemIn("4x modern_industrialization:rubber_sheet")
    .itemIn("4x modern_industrialization:kanthal_plate")
    .itemIn("2x modern_industrialization:steel_rod")
    .itemIn("4x modern_industrialization:resistor")
    .itemOut("1x forestry:soldering_iron")

  event.recipes.modern_industrialization.assembler(16, 100)
    .itemIn("4x forestry:silk_wisp")
    .fluidIn("minecraft:water", 500)
    .itemOut("1x forestry:woven_silk");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("4x #minecraft:logs")
    .fluidIn("minecraft:water", 1000)
    .itemOut("24x forestry:crate");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:acacia_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:acacia_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:balsa_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:balsa_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:baobab_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:baobab_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:beech_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:beech_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:birch_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:birch_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:camelthorn_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:camelthorn_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:cherry_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cherry_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:chestnut_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:chestnut_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:cocobolo_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cocobolo_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:coconut_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:coconut_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:dark_oak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dark_oak_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:dogwood_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dogwood_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ebony_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ebony_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:elm_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:elm_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:feijoa_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:feijoa_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:fir_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:fir_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:giant_sequoia_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:giant_sequoia_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ginkgo_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ginkgo_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:greenheart_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:greenheart_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ipe_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ipe_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:jacaranda_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jacaranda_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:jungle_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jungle_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kapok_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kapok_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kauri_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kauri_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:larch_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:larch_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lemon_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lemon_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lime_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lime_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:macrocarpa_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:macrocarpa_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahoe_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahoe_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahogany_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahogany_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:maple_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:maple_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:oak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:oak_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:olive_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:olive_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:orange_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:orange_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:padauk_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:padauk_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:palm_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:palm_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:papaya_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:papaya_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pear_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pear_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pewen_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pewen_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pine_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pine_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:plum_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:plum_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:poplar_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:poplar_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sequoia_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sequoia_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sour_cherry_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sour_cherry_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:spruce_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:spruce_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:teak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:teak_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:walnut_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:walnut_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:wenge_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:wenge_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:willow_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:willow_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:zebrano_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:zebrano_fireproof_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:acacia_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:acacia_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:balsa_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:balsa_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:baobab_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:baobab_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:beech_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:beech_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:birch_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:birch_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:camelthorn_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:camelthorn_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:cherry_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:cherry_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:chestnut_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:chestnut_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:cocobolo_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:cocobolo_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:coconut_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:coconut_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:dark_oak_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:dark_oak_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:dogwood_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:dogwood_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:ebony_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:ebony_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:elm_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:elm_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:feijoa_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:feijoa_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:fir_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:fir_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:giant_sequoia_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:giant_sequoia_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:ginkgo_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:ginkgo_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:greenheart_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:greenheart_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:ipe_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:ipe_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:jacaranda_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:jacaranda_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:jungle_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:jungle_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:kapok_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:kapok_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:kauri_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:kauri_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:larch_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:larch_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:lemon_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:lemon_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:lime_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:lime_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:macrocarpa_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:macrocarpa_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:mahoe_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:mahoe_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:mahogany_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:mahogany_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:maple_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:maple_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:oak_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:oak_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:olive_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:olive_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:orange_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:orange_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:padauk_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:padauk_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:palm_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:palm_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:papaya_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:papaya_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:pear_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:pear_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:pewen_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:pewen_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:pine_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:pine_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:plum_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:plum_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:poplar_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:poplar_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:sequoia_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:sequoia_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:sour_cherry_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:sour_cherry_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:spruce_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:spruce_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:teak_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:teak_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:walnut_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:walnut_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:wenge_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:wenge_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:willow_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:willow_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:zebrano_planks")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("8x forestry:zebrano_fireproof_planks");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_acacia_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:acacia_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:balsa_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:balsa_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:baobab_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:baobab_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:beech_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:beech_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_birch_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:birch_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:camelthorn_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:camelthorn_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_cherry_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cherry_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:chestnut_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:chestnut_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:cocobolo_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cocobolo_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:coconut_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:coconut_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_dark_oak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dark_oak_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:dogwood_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dogwood_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ebony_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ebony_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:elm_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:elm_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:feijoa_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:feijoa_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:fir_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:fir_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:giant_sequoia_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:giant_sequoia_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ginkgo_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ginkgo_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:greenheart_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:greenheart_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ipe_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ipe_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:jacaranda_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jacaranda_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_jungle_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jungle_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kapok_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kapok_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kauri_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kauri_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:larch_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:larch_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lemon_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lemon_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lime_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lime_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:macrocarpa_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:macrocarpa_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahoe_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahoe_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahogany_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahogany_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:maple_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:maple_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_oak_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:oak_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:olive_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:olive_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:orange_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:orange_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:padauk_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:padauk_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:palm_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:palm_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:papaya_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:papaya_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pear_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pear_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pewen_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pewen_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pine_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pine_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:plum_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:plum_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:poplar_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:poplar_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sequoia_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sequoia_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sour_cherry_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sour_cherry_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_spruce_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:spruce_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:teak_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:teak_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:walnut_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:walnut_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:wenge_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:wenge_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:willow_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:willow_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:zebrano_stripped_log")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:zebrano_fireproof_stripped_log");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_acacia_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:acacia_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:balsa_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:balsa_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:baobab_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:baobab_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:beech_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:beech_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_birch_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:birch_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:camelthorn_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:camelthorn_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_cherry_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cherry_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:chestnut_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:chestnut_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:cocobolo_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cocobolo_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:coconut_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:coconut_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_dark_oak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dark_oak_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:dogwood_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dogwood_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ebony_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ebony_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:elm_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:elm_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:feijoa_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:feijoa_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:fir_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:fir_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:giant_sequoia_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:giant_sequoia_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ginkgo_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ginkgo_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:greenheart_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:greenheart_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ipe_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ipe_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:jacaranda_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jacaranda_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_jungle_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jungle_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kapok_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kapok_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kauri_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kauri_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:larch_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:larch_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lemon_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lemon_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lime_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lime_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:macrocarpa_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:macrocarpa_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahoe_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahoe_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahogany_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahogany_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:maple_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:maple_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_oak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:oak_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:olive_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:olive_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:orange_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:orange_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:padauk_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:padauk_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:palm_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:palm_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:papaya_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:papaya_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pear_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pear_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pewen_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pewen_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pine_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pine_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:plum_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:plum_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:poplar_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:poplar_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sequoia_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sequoia_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sour_cherry_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sour_cherry_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:stripped_spruce_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:spruce_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:teak_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:teak_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:walnut_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:walnut_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:wenge_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:wenge_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:willow_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:willow_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:zebrano_stripped_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:zebrano_fireproof_stripped_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:acacia_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:acacia_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:balsa_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:balsa_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:baobab_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:baobab_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:beech_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:beech_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:birch_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:birch_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:camelthorn_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:camelthorn_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:cherry_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cherry_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:chestnut_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:chestnut_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:cocobolo_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:cocobolo_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:coconut_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:coconut_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:dark_oak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dark_oak_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:dogwood_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:dogwood_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ebony_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ebony_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:elm_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:elm_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:feijoa_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:feijoa_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:fir_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:fir_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:giant_sequoia_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:giant_sequoia_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ginkgo_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ginkgo_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:greenheart_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:greenheart_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:ipe_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:ipe_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:jacaranda_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jacaranda_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:jungle_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:jungle_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kapok_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kapok_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:kauri_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:kauri_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:larch_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:larch_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lemon_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lemon_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:lime_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:lime_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:macrocarpa_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:macrocarpa_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahoe_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahoe_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:mahogany_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:mahogany_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:maple_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:maple_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:oak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:oak_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:olive_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:olive_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:orange_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:orange_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:padauk_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:padauk_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:palm_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:palm_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:papaya_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:papaya_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pear_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pear_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pewen_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pewen_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:pine_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:pine_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:plum_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:plum_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:poplar_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:poplar_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sequoia_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sequoia_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:sour_cherry_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:sour_cherry_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x minecraft:spruce_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:spruce_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:teak_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:teak_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:walnut_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:walnut_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:wenge_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:wenge_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:willow_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:willow_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("2x forestry:zebrano_wood")
    .itemIn("1x forestry:refractory_wax")
    .fluidIn("forestry:liquid_glass", 500)
    .itemOut("2x forestry:zebrano_fireproof_wood");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/black")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_black");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/blue")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_blue");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:bronze_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_bronze");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/brown")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_brown");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:copper_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_copper");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/cyan")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_cyan");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:gold_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_gold");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/gray")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_gray");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/green")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_green");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:iron_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_iron");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/light_blue")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_light_blue");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/light_gray")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_light_gray");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/lime")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_lime");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/magenta")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_magenta");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x minecraft:netherite_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_netherite");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/orange")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_orange");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/pink")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_pink");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/purple")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_purple");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/red")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_red");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x forestry:tin_ingot")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_tin");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/white")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_white");

  event.recipes.modern_industrialization.assembler(16, 200)
    .itemIn("8x #forestry:metal_plating")
    .itemIn("1x #c:dyes/yellow")
    .fluidIn("forestry:wax", 50)
    .itemOut("8x forestry:metal_plating_yellow");
})
