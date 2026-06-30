ServerEvents.recipes(event => {

// Жахливе дерево ПОЧАТОК

    const woodTypes = [
        { log: 'silentgear:netherwood_log', wood: 'silentgear:netherwood_wood' },
        { log: 'ad_astra:glacian_log', wood: null },
        { log: 'biomeswevegone:pale_mud', wood: null },
        { log: 'biomeswevegone:aspen_log', wood: 'biomeswevegone:aspen_wood' },
        { log: 'biomeswevegone:baobab_log', wood: 'biomeswevegone:baobab_wood' },
        { log: 'biomeswevegone:blue_enchanted_log', wood: 'biomeswevegone:blue_enchanted_wood' },
        { log: 'biomeswevegone:cika_log', wood: 'biomeswevegone:cika_wood' },
        { log: 'biomeswevegone:cypress_log', wood: 'biomeswevegone:cypress_wood' },
        { log: 'biomeswevegone:ebony_log', wood: 'biomeswevegone:ebony_wood' },
        { log: 'biomeswevegone:fir_log', wood: 'biomeswevegone:fir_wood' },
        { log: 'biomeswevegone:florus_stem', wood: 'biomeswevegone:florus_wood' },
        { log: 'biomeswevegone:green_enchanted_log', wood: 'biomeswevegone:green_enchanted_wood' },
        { log: 'biomeswevegone:holly_log', wood: 'biomeswevegone:holly_wood' },
        { log: 'biomeswevegone:ironwood_log', wood: 'biomeswevegone:ironwood_wood' },
        { log: 'biomeswevegone:jacaranda_log', wood: 'biomeswevegone:jacaranda_wood' },
        { log: 'biomeswevegone:mahogany_log', wood: 'biomeswevegone:mahogany_wood' },
        { log: 'biomeswevegone:maple_log', wood: 'biomeswevegone:maple_wood' },
        { log: 'biomeswevegone:palm_log', wood: 'biomeswevegone:palm_wood' },
        { log: 'biomeswevegone:pine_log', wood: 'biomeswevegone:pine_wood' },
        { log: 'biomeswevegone:rainbow_eucalyptus_log', wood: 'biomeswevegone:rainbow_eucalyptus_wood' },
        { log: 'biomeswevegone:redwood_log', wood: 'biomeswevegone:redwood_wood' },
        { log: 'biomeswevegone:sakura_log', wood: 'biomeswevegone:sakura_wood' },
        { log: 'biomeswevegone:skyris_log', wood: 'biomeswevegone:skyris_wood' },
        { log: 'biomeswevegone:spirit_log', wood: 'biomeswevegone:spirit_wood' },
        { log: 'biomeswevegone:white_mangrove_log', wood: 'biomeswevegone:white_mangrove_wood' },
        { log: 'biomeswevegone:willow_log', wood: 'biomeswevegone:willow_wood' },
        { log: 'biomeswevegone:witch_hazel_log', wood: 'biomeswevegone:witch_hazel_wood' },
        { log: 'biomeswevegone:zelkova_log', wood: 'biomeswevegone:zelkova_wood' },
        { log: 'biomeswevegone:palo_verde_log', wood: 'biomeswevegone:palo_verde_wood' }
    ];
    
    woodTypes.forEach(wood => {
        const name = wood.log.split(':')[1].replace('_log', '').replace('_stem', '').replace('_mud', '');
        
        event.recipes.modern_industrialization.cutting_machine(100, 2)
            .itemIn(`1x ${wood.log}`)
            .fluidIn("modern_industrialization:lubricant", 1)
            .itemOut(`6x ${wood.log.replace('_log', '_planks').replace('_stem', '_planks').replace('_mud', '_planks')}`);
    
        if (wood.wood) {
            event.recipes.modern_industrialization.cutting_machine(100, 2)
                .itemIn(`1x ${wood.wood}`)
                .fluidIn("modern_industrialization:lubricant", 1)
                .itemOut(`6x ${wood.wood.replace('_wood', '_planks')}`);
        }
    });
    
    event.recipes.modern_industrialization.cutting_machine(100, 2)
        .itemIn("1x minecraft:bamboo_block")
        .fluidIn("modern_industrialization:lubricant", 1)
        .itemOut("2x minecraft:bamboo_planks");
    
    event.recipes.modern_industrialization.cutting_machine(100, 2)
        .itemIn("1x minecraft:stripped_bamboo_block")
        .fluidIn("modern_industrialization:lubricant", 1)
        .itemOut("2x minecraft:bamboo_planks");
    
    event.recipes.modern_industrialization.cutting_machine(100, 2)
        .itemIn("1x minecraft:bamboo_planks")
        .fluidIn("modern_industrialization:lubricant", 1)
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
