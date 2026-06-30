ServerEvents.recipes(event => {

// Жахливе дерево ПОЧАТОК

    const woodTypes = [
        { log: 'silentgear:netherwood_log', wood: 'silentgear:netherwood_wood', planks: 'silentgear:netherwood_planks' },
        { log: 'ad_astra:glacian_log', wood: null, planks: 'ad_astra:glacian_planks' },
        { log: 'biomeswevegone:pale_mud', wood: null, planks: null },
        { log: 'biomeswevegone:aspen_log', wood: 'biomeswevegone:aspen_wood', planks: 'biomeswevegone:aspen_planks' },
        { log: 'biomeswevegone:baobab_log', wood: 'biomeswevegone:baobab_wood', planks: 'biomeswevegone:baobab_planks' },
        { log: 'biomeswevegone:blue_enchanted_log', wood: 'biomeswevegone:blue_enchanted_wood', planks: 'biomeswevegone:blue_enchanted_planks' },
        { log: 'biomeswevegone:cika_log', wood: 'biomeswevegone:cika_wood', planks: 'biomeswevegone:cika_planks' },
        { log: 'biomeswevegone:cypress_log', wood: 'biomeswevegone:cypress_wood', planks: 'biomeswevegone:cypress_planks' },
        { log: 'biomeswevegone:ebony_log', wood: 'biomeswevegone:ebony_wood', planks: 'biomeswevegone:ebony_planks' },
        { log: 'biomeswevegone:fir_log', wood: 'biomeswevegone:fir_wood', planks: 'biomeswevegone:fir_planks' },
        { log: 'biomeswevegone:florus_stem', wood: 'biomeswevegone:florus_wood', planks: 'biomeswevegone:florus_planks' },
        { log: 'biomeswevegone:green_enchanted_log', wood: 'biomeswevegone:green_enchanted_wood', planks: 'biomeswevegone:green_enchanted_planks' },
        { log: 'biomeswevegone:holly_log', wood: 'biomeswevegone:holly_wood', planks: 'biomeswevegone:holly_planks' },
        { log: 'biomeswevegone:ironwood_log', wood: 'biomeswevegone:ironwood_wood', planks: 'biomeswevegone:ironwood_planks' },
        { log: 'biomeswevegone:jacaranda_log', wood: 'biomeswevegone:jacaranda_wood', planks: 'biomeswevegone:jacaranda_planks' },
        { log: 'biomeswevegone:mahogany_log', wood: 'biomeswevegone:mahogany_wood', planks: 'biomeswevegone:mahogany_planks' },
        { log: 'biomeswevegone:maple_log', wood: 'biomeswevegone:maple_wood', planks: 'biomeswevegone:maple_planks' },
        { log: 'biomeswevegone:palm_log', wood: 'biomeswevegone:palm_wood', planks: 'biomeswevegone:palm_planks' },
        { log: 'biomeswevegone:pine_log', wood: 'biomeswevegone:pine_wood', planks: 'biomeswevegone:pine_planks' },
        { log: 'biomeswevegone:rainbow_eucalyptus_log', wood: 'biomeswevegone:rainbow_eucalyptus_wood', planks: 'biomeswevegone:rainbow_eucalyptus_planks' },
        { log: 'biomeswevegone:redwood_log', wood: 'biomeswevegone:redwood_wood', planks: 'biomeswevegone:redwood_planks' },
        { log: 'biomeswevegone:sakura_log', wood: 'biomeswevegone:sakura_wood', planks: 'biomeswevegone:sakura_planks' },
        { log: 'biomeswevegone:skyris_log', wood: 'biomeswevegone:skyris_wood', planks: 'biomeswevegone:skyris_planks' },
        { log: 'biomeswevegone:spirit_log', wood: 'biomeswevegone:spirit_wood', planks: 'biomeswevegone:spirit_planks' },
        { log: 'biomeswevegone:white_mangrove_log', wood: 'biomeswevegone:white_mangrove_wood', planks: 'biomeswevegone:white_mangrove_planks' },
        { log: 'biomeswevegone:willow_log', wood: 'biomeswevegone:willow_wood', planks: 'biomeswevegone:willow_planks' },
        { log: 'biomeswevegone:witch_hazel_log', wood: 'biomeswevegone:witch_hazel_wood', planks: 'biomeswevegone:witch_hazel_planks' },
        { log: 'biomeswevegone:zelkova_log', wood: 'biomeswevegone:zelkova_wood', planks: 'biomeswevegone:zelkova_planks' },
        { log: 'biomeswevegone:palo_verde_log', wood: 'biomeswevegone:palo_verde_wood', planks: 'biomeswevegone:palo_verde_planks' }
    ];
    
    woodTypes.forEach(wood => {
        if (wood.planks) {
            event.recipes.modern_industrialization.cutting_machine(100, 2)
                .itemIn(`1x ${wood.log}`)
                .fluidIn("1x modern_industrialization:lubricant")
                .itemOut(`6x ${wood.planks}`);
        }
    
        if (wood.wood && wood.planks) {
            event.recipes.modern_industrialization.cutting_machine(100, 2)
                .itemIn(`1x ${wood.wood}`)
                .fluidIn("1x modern_industrialization:lubricant")
                .itemOut(`6x ${wood.planks}`);
        }
    });
    
    event.recipes.modern_industrialization.cutting_machine(100, 2)
        .itemIn("1x minecraft:bamboo_block")
        .fluidIn("1x modern_industrialization:lubricant")
        .itemOut("2x minecraft:bamboo_planks");
    
    event.recipes.modern_industrialization.cutting_machine(100, 2)
        .itemIn("1x minecraft:stripped_bamboo_block")
        .fluidIn("1x modern_industrialization:lubricant")
        .itemOut("2x minecraft:bamboo_planks");
    
    event.recipes.modern_industrialization.cutting_machine(100, 2)
        .itemIn("1x minecraft:bamboo_planks")
        .fluidIn("1x modern_industrialization:lubricant")
        .itemOut("2x minecraft:bamboo_slab");

// Жахливе дерево КІНЕЦЬ

event.recipes.modern_industrialization.cutting_machine(8, 1600)
    .itemIn("1x roll_mod:blue_wafer_ram")
    .fluidIn("extended_industrialization:distilled_water", 1000)
    .itemOut("48x roll_mod:blue_chip_ram")
  
// Шестерні
  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x modern_industrialization:bronze_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:bronze_gear")
    
  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x #c:storage_blocks/gold")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:gold_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x #c:storage_blocks/iron")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:iron_gear")

   event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x #c:storage_blocks/tin")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:tin_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x #c:storage_blocks/copper")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:copper_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x modern_industrialization:invar_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:invar_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x modern_industrialization:steel_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:steel_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 800)
  .itemIn("1x modern_industrialization:aluminum_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:aluminum_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 800)
  .itemIn("1x modern_industrialization:magnalium_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:magnalium_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:stainless_steel_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:stainless_steel_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x #c:storage_blocks/netherite")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:netherite_gear")
    
  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:titanium_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:titanium_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:titanium_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:titanium_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:chrome_vanadium_steel_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:chrome_vanadium_steel_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:polytetrafluoroethylene_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:polytetrafluoroethylene_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:incoloy_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:incoloy_gear")

// Ротори

   event.recipes.modern_industrialization.cutting_machine(512, 600)
  .itemIn("4x modern_industrialization:chrome_vanadium_steel_large_plate")
  .fluidIn("modern_industrialization:lubricant", 200)
  .itemOut("5x modern_industrialization:chrome_vanadium_steel_rotor")
    
  event.recipes.modern_industrialization.cutting_machine(512, 600)
  .itemIn("4x modern_industrialization:incoloy_large_plate")
  .fluidIn("modern_industrialization:lubricant", 200)
  .itemOut("5x modern_industrialization:incoloy_rotor")

  event.recipes.modern_industrialization.cutting_machine(96, 300)
  .itemIn("4x modern_industrialization:aluminum_large_plate")
  .fluidIn("modern_industrialization:lubricant", 100)
  .itemOut("5x modern_industrialization:aluminum_rotor")

  event.recipes.modern_industrialization.cutting_machine(64, 200)
  .itemIn("4x modern_industrialization:bronze_large_plate")
  .fluidIn("modern_industrialization:lubricant", 100)
  .itemOut("5x modern_industrialization:bronze_rotor")

  event.recipes.modern_industrialization.cutting_machine(64, 200)
  .itemIn("4x modern_industrialization:copper_large_plate")
  .fluidIn("modern_industrialization:lubricant", 100)
  .itemOut("5x modern_industrialization:copper_rotor")

  event.recipes.modern_industrialization.cutting_machine(64, 200)
  .itemIn("4x modern_industrialization:tin_large_plate")
  .fluidIn("modern_industrialization:lubricant", 100)
  .itemOut("5x modern_industrialization:tin_rotor")

  event.recipes.modern_industrialization.cutting_machine(256, 600)
  .itemIn("4x modern_industrialization:stainless_steel_large_plate")
  .fluidIn("modern_industrialization:lubricant", 200)
  .itemOut("5x modern_industrialization:stainless_steel_rotor")

  event.recipes.modern_industrialization.cutting_machine(512, 600)
  .itemIn("4x modern_industrialization:titanium_large_plate")
  .fluidIn("modern_industrialization:lubricant", 200)
  .itemOut("5x modern_industrialization:titanium_rotor")

  event.recipes.modern_industrialization.cutting_machine(2, 100)
  .itemIn("1x roll_mod:treated_planks")
  .itemOut("3x roll_mod:treated_plate")

event.recipes.modern_industrialization.cutting_machine(2, 100)
  .itemIn("1x roll_mod:treated_log")
  .itemOut("14x roll_mod:treated_plate")

event.recipes.modern_industrialization.cutting_machine(2, 100)
.itemIn("1x roll_mod:treated_plate")
.itemOut("4x railcraft:wooden_tie")

event.recipes.modern_industrialization.cutting_machine(128, 100)
.itemIn("1x roll_mod:lapotron_battery_t1")
.fluidIn("modern_industrialization:lubricant", 240)
.itemOut("4x roll_mod:lapotron_lens")

event.recipes.modern_industrialization.cutting_machine(2, 100)
.itemIn("1x modern_industrialization:tin_bolt")
.itemOut("8x ae2:cable_anchor")

  
// Компоненти
  /*
  event.recipes.modern_industrialization.cutting_machine(8, 200)
  .fluidIn("modern_industrialization:lubricant", 1)
  .itemIn("1x minecraft:glass_pane")
  .itemOut("1x roll_mod:syringe")


  event.recipes.modern_industrialization.cutting_machine(64, 100)
  .fluidIn("modern_industrialization:lubricant", 8)
  .itemIn("1x ae2:quartz_glass")
  .itemOut("4x roll_mod:petri_dish")



// СТАРІ КРАФТИ
  event.recipes.modern_industrialization.cutting_machine(8, 200)
  .fluidIn("modern_industrialization:lubricant", 10)
  .itemIn("1x modern_industrialization:ruthenium_plate")
  .itemOut("1x roll_mod:ruthenium_coin")
*/

event.recipes.modern_industrialization.cutting_machine(24, 200)
.itemIn("1x roll_mod:standard_wafer_pmic")
.fluidIn("extended_industrialization:distilled_water", 200)
.itemOut("8x roll_mod:standard_chip_pmic")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:purple_boule")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("64x roll_mod:purple_wafer")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:purple_wafer_accumulation")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("48x roll_mod:purple_chip_accumulation")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:purple_wafer_qubit")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("48x roll_mod:purple_chip_qubit")

event.recipes.modern_industrialization.cutting_machine(16, 100)
.itemIn("1x roll_mod:alumina_ceramic_plate")
.fluidIn("modern_industrialization:lubricant", 160)
.itemOut("3x roll_mod:alumina_small_ceramic_plate")

event.recipes.modern_industrialization.cutting_machine(24, 200)
.itemIn("1x roll_mod:standard_wafer_not")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("8x roll_mod:standard_chip_not")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:blue_boule")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("48x roll_mod:blue_wafer")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:blue_wafer_cpu")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("4x roll_mod:blue_chip_cpu")

event.recipes.modern_industrialization.cutting_machine(32, 100)
.itemIn("1x roll_mod:standard_wafer_nand")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("16x roll_mod:standard_chip_nand")
})
