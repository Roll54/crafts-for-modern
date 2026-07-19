ServerEvents.recipes(event => {

// Жахливе дерево ПОЧАТОК

    const woodTypes = [
        { log: 'silentgear:netherwood_log', wood: 'silentgear:netherwood_wood', planks: 'silentgear:netherwood_planks', slab: 'silentgear:netherwood_slab', stripped_log: 'silentgear:stripped_netherwood_log', stripped_wood: 'silentgear:stripped_netherwood_wood', tag: 'silentgear:netherwood_logs' },
        { log: 'ad_astra:glacian_log', wood: null, planks: 'ad_astra:glacian_planks', slab: 'ad_astra:glacian_slab', stripped_log: 'ad_astra:stripped_glacian_log', stripped_wood: null, tag: 'ad_astra:glacian_logs' },
        { log: 'biomeswevegone:pale_mud', wood: null, planks: null, slab: null, stripped_log: null, stripped_wood: null, tag: null },
        { log: 'biomeswevegone:aspen_log', wood: 'biomeswevegone:aspen_wood', planks: 'biomeswevegone:aspen_planks', slab: 'biomeswevegone:aspen_slab', stripped_log: 'biomeswevegone:stripped_aspen_log', stripped_wood: 'biomeswevegone:stripped_aspen_wood', tag: 'biomeswevegone:aspen_logs' },
        { log: 'biomeswevegone:baobab_log', wood: 'biomeswevegone:baobab_wood', planks: 'biomeswevegone:baobab_planks', slab: 'biomeswevegone:baobab_slab', stripped_log: 'biomeswevegone:stripped_baobab_log', stripped_wood: 'biomeswevegone:stripped_baobab_wood', tag: 'biomeswevegone:baobab_logs' },
        { log: 'biomeswevegone:blue_enchanted_log', wood: 'biomeswevegone:blue_enchanted_wood', planks: 'biomeswevegone:blue_enchanted_planks', slab: 'biomeswevegone:blue_enchanted_slab', stripped_log: 'biomeswevegone:stripped_blue_enchanted_log', stripped_wood: 'biomeswevegone:stripped_blue_enchanted_wood', tag: 'biomeswevegone:blue_enchanted_logs' },
        { log: 'biomeswevegone:cika_log', wood: 'biomeswevegone:cika_wood', planks: 'biomeswevegone:cika_planks', slab: 'biomeswevegone:cika_slab', stripped_log: 'biomeswevegone:stripped_cika_log', stripped_wood: 'biomeswevegone:stripped_cika_wood', tag: 'biomeswevegone:cika_logs' },
        { log: 'biomeswevegone:cypress_log', wood: 'biomeswevegone:cypress_wood', planks: 'biomeswevegone:cypress_planks', slab: 'biomeswevegone:cypress_slab', stripped_log: 'biomeswevegone:stripped_cypress_log', stripped_wood: 'biomeswevegone:stripped_cypress_wood', tag: 'biomeswevegone:cypress_logs' },
        { log: 'biomeswevegone:ebony_log', wood: 'biomeswevegone:ebony_wood', planks: 'biomeswevegone:ebony_planks', slab: 'biomeswevegone:ebony_slab', stripped_log: 'biomeswevegone:stripped_ebony_log', stripped_wood: 'biomeswevegone:stripped_ebony_wood', tag: 'biomeswevegone:ebony_logs' },
        { log: 'biomeswevegone:fir_log', wood: 'biomeswevegone:fir_wood', planks: 'biomeswevegone:fir_planks', slab: 'biomeswevegone:fir_slab', stripped_log: 'biomeswevegone:stripped_fir_log', stripped_wood: 'biomeswevegone:stripped_fir_wood', tag: 'biomeswevegone:fir_logs' },
        { log: 'biomeswevegone:florus_stem', wood: 'biomeswevegone:florus_wood', planks: 'biomeswevegone:florus_planks', slab: 'biomeswevegone:florus_slab', stripped_log: 'biomeswevegone:stripped_florus_stem', stripped_wood: 'biomeswevegone:stripped_florus_wood', tag: 'biomeswevegone:florus_stems' },
        { log: 'biomeswevegone:green_enchanted_log', wood: 'biomeswevegone:green_enchanted_wood', planks: 'biomeswevegone:green_enchanted_planks', slab: 'biomeswevegone:green_enchanted_slab', stripped_log: 'biomeswevegone:stripped_green_enchanted_log', stripped_wood: 'biomeswevegone:stripped_green_enchanted_wood', tag: 'biomeswevegone:green_enchanted_logs' },
        { log: 'biomeswevegone:holly_log', wood: 'biomeswevegone:holly_wood', planks: 'biomeswevegone:holly_planks', slab: 'biomeswevegone:holly_slab', stripped_log: 'biomeswevegone:stripped_holly_log', stripped_wood: 'biomeswevegone:stripped_holly_wood', tag: 'biomeswevegone:holly_logs' },
        { log: 'biomeswevegone:ironwood_log', wood: 'biomeswevegone:ironwood_wood', planks: 'biomeswevegone:ironwood_planks', slab: 'biomeswevegone:ironwood_slab', stripped_log: 'biomeswevegone:stripped_ironwood_log', stripped_wood: 'biomeswevegone:stripped_ironwood_wood', tag: 'biomeswevegone:ironwood_logs' },
        { log: 'biomeswevegone:jacaranda_log', wood: 'biomeswevegone:jacaranda_wood', planks: 'biomeswevegone:jacaranda_planks', slab: 'biomeswevegone:jacaranda_slab', stripped_log: 'biomeswevegone:stripped_jacaranda_log', stripped_wood: 'biomeswevegone:stripped_jacaranda_wood', tag: 'biomeswevegone:jacaranda_logs' },
        { log: 'biomeswevegone:mahogany_log', wood: 'biomeswevegone:mahogany_wood', planks: 'biomeswevegone:mahogany_planks', slab: 'biomeswevegone:mahogany_slab', stripped_log: 'biomeswevegone:stripped_mahogany_log', stripped_wood: 'biomeswevegone:stripped_mahogany_wood', tag: 'biomeswevegone:mahogany_logs' },
        { log: 'biomeswevegone:maple_log', wood: 'biomeswevegone:maple_wood', planks: 'biomeswevegone:maple_planks', slab: 'biomeswevegone:maple_slab', stripped_log: 'biomeswevegone:stripped_maple_log', stripped_wood: 'biomeswevegone:stripped_maple_wood', tag: 'biomeswevegone:maple_logs' },
        { log: 'biomeswevegone:palm_log', wood: 'biomeswevegone:palm_wood', planks: 'biomeswevegone:palm_planks', slab: 'biomeswevegone:palm_slab', stripped_log: 'biomeswevegone:stripped_palm_log', stripped_wood: 'biomeswevegone:stripped_palm_wood', tag: 'biomeswevegone:palm_logs' },
        { log: 'biomeswevegone:pine_log', wood: 'biomeswevegone:pine_wood', planks: 'biomeswevegone:pine_planks', slab: 'biomeswevegone:pine_slab', stripped_log: 'biomeswevegone:stripped_pine_log', stripped_wood: 'biomeswevegone:stripped_pine_wood', tag: 'biomeswevegone:pine_logs' },
        { log: 'biomeswevegone:rainbow_eucalyptus_log', wood: 'biomeswevegone:rainbow_eucalyptus_wood', planks: 'biomeswevegone:rainbow_eucalyptus_planks', slab: 'biomeswevegone:rainbow_eucalyptus_slab', stripped_log: 'biomeswevegone:stripped_rainbow_eucalyptus_log', stripped_wood: 'biomeswevegone:stripped_rainbow_eucalyptus_wood', tag: 'biomeswevegone:rainbow_eucalyptus_logs' },
        { log: 'biomeswevegone:redwood_log', wood: 'biomeswevegone:redwood_wood', planks: 'biomeswevegone:redwood_planks', slab: 'biomeswevegone:redwood_slab', stripped_log: 'biomeswevegone:stripped_redwood_log', stripped_wood: 'biomeswevegone:stripped_redwood_wood', tag: 'biomeswevegone:redwood_logs' },
        { log: 'biomeswevegone:sakura_log', wood: 'biomeswevegone:sakura_wood', planks: 'biomeswevegone:sakura_planks', slab: 'biomeswevegone:sakura_slab', stripped_log: 'biomeswevegone:stripped_sakura_log', stripped_wood: 'biomeswevegone:stripped_sakura_wood', tag: 'biomeswevegone:sakura_logs' },
        { log: 'biomeswevegone:skyris_log', wood: 'biomeswevegone:skyris_wood', planks: 'biomeswevegone:skyris_planks', slab: 'biomeswevegone:skyris_slab', stripped_log: 'biomeswevegone:stripped_skyris_log', stripped_wood: 'biomeswevegone:stripped_skyris_wood', tag: 'biomeswevegone:skyris_logs' },
        { log: 'biomeswevegone:spirit_log', wood: 'biomeswevegone:spirit_wood', planks: 'biomeswevegone:spirit_planks', slab: 'biomeswevegone:spirit_slab', stripped_log: 'biomeswevegone:stripped_spirit_log', stripped_wood: 'biomeswevegone:stripped_spirit_wood', tag: 'biomeswevegone:spirit_logs' },
        { log: 'biomeswevegone:white_mangrove_log', wood: 'biomeswevegone:white_mangrove_wood', planks: 'biomeswevegone:white_mangrove_planks', slab: 'biomeswevegone:white_mangrove_slab', stripped_log: 'biomeswevegone:stripped_white_mangrove_log', stripped_wood: 'biomeswevegone:stripped_white_mangrove_wood', tag: 'biomeswevegone:white_mangrove_logs' },
        { log: 'biomeswevegone:willow_log', wood: 'biomeswevegone:willow_wood', planks: 'biomeswevegone:willow_planks', slab: 'biomeswevegone:willow_slab', stripped_log: 'biomeswevegone:stripped_willow_log', stripped_wood: 'biomeswevegone:stripped_willow_wood', tag: 'biomeswevegone:willow_logs' },
        { log: 'biomeswevegone:witch_hazel_log', wood: 'biomeswevegone:witch_hazel_wood', planks: 'biomeswevegone:witch_hazel_planks', slab: 'biomeswevegone:witch_hazel_slab', stripped_log: 'biomeswevegone:stripped_witch_hazel_log', stripped_wood: 'biomeswevegone:stripped_witch_hazel_wood', tag: 'biomeswevegone:witch_hazel_logs' },
        { log: 'biomeswevegone:zelkova_log', wood: 'biomeswevegone:zelkova_wood', planks: 'biomeswevegone:zelkova_planks', slab: 'biomeswevegone:zelkova_slab', stripped_log: 'biomeswevegone:stripped_zelkova_log', stripped_wood: 'biomeswevegone:stripped_zelkova_wood', tag: 'biomeswevegone:zelkova_logs' },
        { log: 'biomeswevegone:palo_verde_log', wood: 'biomeswevegone:palo_verde_wood', planks: 'minecraft:birch_planks', slab: 'minecraft:birch_slab', stripped_log: 'biomeswevegone:stripped_palo_verde_log', stripped_wood: 'biomeswevegone:stripped_palo_verde_wood', tag: 'biomeswevegone:palo_verde_logs' }
    ];
    
    woodTypes.forEach(wood => {
        if (wood.planks && wood.tag) {
            event.custom({
                type: "modern_industrialization:cutting_machine",
                duration: 100,
                eu: 2,
                fluid_inputs: [
                    {
                        amount: 1,
                        fluid: "modern_industrialization:lubricant"
                    }
                ],
                item_inputs: [
                    {
                        amount: 1,
                        tag: wood.tag
                    }
                ],
                item_outputs: [
                    {
                        amount: 6,
                        item: wood.planks
                    }
                ]
            });
        }
    
        if (wood.wood && wood.planks) {
            event.custom({
                type: "modern_industrialization:cutting_machine",
                duration: 100,
                eu: 2,
                fluid_inputs: [
                    {
                        amount: 1,
                        fluid: "modern_industrialization:lubricant"
                    }
                ],
                item_inputs: [
                    {
                        amount: 1,
                        item: wood.wood
                    }
                ],
                item_outputs: [
                    {
                        amount: 6,
                        item: wood.planks
                    }
                ]
            });
        }

        if (wood.stripped_log) {
            event.custom({
                type: "modern_industrialization:cutting_machine",
                duration: 100,
                eu: 2,
                fluid_inputs: [
                    {
                        amount: 1,
                        fluid: "modern_industrialization:lubricant"
                    }
                ],
                item_inputs: [
                    {
                        amount: 1,
                        item: wood.log
                    }
                ],
                item_outputs: [
                    {
                        amount: 1,
                        item: wood.stripped_log
                    }
                ]
            });
        }

        if (wood.stripped_wood && wood.wood) {
            event.custom({
                type: "modern_industrialization:cutting_machine",
                duration: 100,
                eu: 2,
                fluid_inputs: [
                    {
                        amount: 1,
                        fluid: "modern_industrialization:lubricant"
                    }
                ],
                item_inputs: [
                    {
                        amount: 1,
                        item: wood.wood
                    }
                ],
                item_outputs: [
                    {
                        amount: 1,
                        item: wood.stripped_wood
                    }
                ]
            });
        }

        if (wood.planks && wood.slab) {
            event.custom({
                type: "modern_industrialization:cutting_machine",
                duration: 100,
                eu: 2,
                fluid_inputs: [
                    {
                        amount: 1,
                        fluid: "modern_industrialization:lubricant"
                    }
                ],
                item_inputs: [
                    {
                        amount: 1,
                        item: wood.planks
                    }
                ],
                item_outputs: [
                    {
                        amount: 2,
                        item: wood.slab
                    }
                ]
            });
        }
    });
    
    event.custom({
        type: "modern_industrialization:cutting_machine",
        duration: 100,
        eu: 2,
        fluid_inputs: [
            {
                amount: 1,
                fluid: "modern_industrialization:lubricant"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "minecraft:bamboo_block"
            }
        ],
        item_outputs: [
            {
                amount: 2,
                item: "minecraft:bamboo_planks"
            }
        ]
    });
    
    event.custom({
        type: "modern_industrialization:cutting_machine",
        duration: 100,
        eu: 2,
        fluid_inputs: [
            {
                amount: 1,
                fluid: "modern_industrialization:lubricant"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "minecraft:stripped_bamboo_block"
            }
        ],
        item_outputs: [
            {
                amount: 2,
                item: "minecraft:bamboo_planks"
            }
        ]
    });
    
    event.custom({
        type: "modern_industrialization:cutting_machine",
        duration: 100,
        eu: 2,
        fluid_inputs: [
            {
                amount: 1,
                fluid: "modern_industrialization:lubricant"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "minecraft:bamboo_planks"
            }
        ],
        item_outputs: [
            {
                amount: 2,
                item: "minecraft:bamboo_slab"
            }
        ]
    });

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
.itemOut("48x roll_mod:blue_chip_cpu")

event.recipes.modern_industrialization.cutting_machine(32, 100)
.itemIn("1x roll_mod:standard_wafer_nand")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("16x roll_mod:standard_chip_nand")
})
