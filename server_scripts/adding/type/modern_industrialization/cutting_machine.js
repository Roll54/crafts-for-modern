ServerEvents.recipes(event => {

// Жахливе дерево ПОЧАТОК

    const woodTypes = [
        { log: 'ad_astra:glacian_log', wood: null, planks: 'ad_astra:glacian_planks', slab: 'ad_astra:glacian_slab', stripped_log: 'ad_astra:stripped_glacian_log', stripped_wood: null, tag: 'ad_astra:glacian_logs' },
        
        { log: 'nomansland:pine_log', wood: 'nomansland:pine_wood', planks: 'nomansland:pine_planks', slab: 'nomansland:pine_slab', stripped_log: 'nomansland:stripped_pine_log', stripped_wood: 'nomansland:stripped_pine_wood', tag: 'nomansland:pine_logs' },
        { log: 'nomansland:maple_log', wood: 'nomansland:maple_wood', planks: 'nomansland:maple_planks', slab: 'nomansland:maple_slab', stripped_log: 'nomansland:stripped_maple_log', stripped_wood: 'nomansland:stripped_maple_wood', tag: 'nomansland:maple_logs' },
        { log: 'nomansland:walnut_log', wood: 'nomansland:walnut_wood', planks: 'nomansland:walnut_planks', slab: 'nomansland:walnut_slab', stripped_log: 'nomansland:stripped_walnut_log', stripped_wood: 'nomansland:stripped_walnut_wood', tag: 'nomansland:walnut_logs' },
        { log: 'nomansland:willow_log', wood: 'nomansland:willow_wood', planks: 'nomansland:willow_planks', slab: 'nomansland:willow_slab', stripped_log: 'nomansland:stripped_willow_log', stripped_wood: 'nomansland:stripped_willow_wood', tag: 'nomansland:willow_logs' }
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

event.recipes.modern_industrialization.cutting_machine(8, 800)
    .itemIn("1x roll_mod:treated_log")
    .itemOut("6x roll_mod:treated_planks")
    
// Жахливе дерево КІНЕЦЬ

event.recipes.modern_industrialization.cutting_machine(8, 800)
    .itemIn("1x roll_mod:meteorite_metal_ingot")
    .fluidIn("modern_industrialization:lubricant")
    .itemOut("2x roll_mod:meteorite_metal_rod")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
    .itemIn("1x roll_mod:blue_wafer_ram")
    .fluidIn("1000x extended_industrialization:distilled_water")
    .itemOut("48x roll_mod:blue_chip_ram")
  
// Шестерні
  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x modern_industrialization:tunstensteel_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:tunstensteel_gear")
    
  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x modern_industrialization:bronze_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:bronze_gear")
    
  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x #c:storage_blocks/gold")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:gold_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x #c:storage_blocks/iron")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:iron_gear")

   event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x #c:storage_blocks/tin")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:tin_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x #c:storage_blocks/copper")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:copper_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x modern_industrialization:invar_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:invar_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x modern_industrialization:steel_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:steel_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 800)
  .itemIn("1x modern_industrialization:aluminum_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:aluminum_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 800)
  .itemIn("1x modern_industrialization:magnalium_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:magnalium_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:stainless_steel_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:stainless_steel_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x #c:storage_blocks/netherite")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:netherite_gear")
    
  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:titanium_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:titanium_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:chrome_vanadium_steel_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:chrome_vanadium_steel_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:polytetrafluoroethylene_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:polytetrafluoroethylene_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:incoloy_block")
  .fluidIn("20x modern_industrialization:lubricant")
  .itemOut("4x modern_industrialization:incoloy_gear")

// Ротори
 
event.recipes.modern_industrialization.cutting_machine(512, 600)
  .itemIn("4x modern_industrialization:tunstensteel_large_plate")
  .fluidIn("200x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:tunstensteel_rotor")
    
   event.recipes.modern_industrialization.cutting_machine(512, 600)
  .itemIn("4x modern_industrialization:chrome_vanadium_steel_large_plate")
  .fluidIn("200x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:chrome_vanadium_steel_rotor")
    
  event.recipes.modern_industrialization.cutting_machine(512, 600)
  .itemIn("4x modern_industrialization:incoloy_large_plate")
  .fluidIn("200x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:incoloy_rotor")

  event.recipes.modern_industrialization.cutting_machine(96, 300)
  .itemIn("4x modern_industrialization:aluminum_large_plate")
  .fluidIn("100x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:aluminum_rotor")

  event.recipes.modern_industrialization.cutting_machine(64, 200)
  .itemIn("4x modern_industrialization:bronze_large_plate")
  .fluidIn("100x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:bronze_rotor")

  event.recipes.modern_industrialization.cutting_machine(64, 200)
  .itemIn("4x modern_industrialization:copper_large_plate")
  .fluidIn("100x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:copper_rotor")

  event.recipes.modern_industrialization.cutting_machine(64, 200)
  .itemIn("4x modern_industrialization:tin_large_plate")
  .fluidIn("100x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:tin_rotor")

  event.recipes.modern_industrialization.cutting_machine(256, 600)
  .itemIn("4x modern_industrialization:stainless_steel_large_plate")
  .fluidIn("200x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:stainless_steel_rotor")

  event.recipes.modern_industrialization.cutting_machine(512, 600)
  .itemIn("4x modern_industrialization:titanium_large_plate")
  .fluidIn("200x modern_industrialization:lubricant")
  .itemOut("5x modern_industrialization:titanium_rotor")

  event.recipes.modern_industrialization.cutting_machine(2, 100)
  .itemIn("1x roll_mod:treated_planks")
  .itemOut("3x roll_mod:treated_plate")

event.recipes.modern_industrialization.cutting_machine(2, 100)
  .itemIn("1x roll_mod:treated_log")
  .itemOut("12x roll_mod:treated_plate")

event.recipes.modern_industrialization.cutting_machine(2, 100)
.itemIn("1x roll_mod:treated_plate")
.itemOut("4x railcraft:wooden_tie")

event.recipes.modern_industrialization.cutting_machine(128, 100)
.itemIn("1x roll_mod:lapotron_battery_t1")
.fluidIn("240x modern_industrialization:lubricant")
.itemOut("4x roll_mod:lapotron_lens")

event.recipes.modern_industrialization.cutting_machine(2, 100)
.itemIn("1x modern_industrialization:tin_bolt")
.itemOut("8x ae2:cable_anchor")

  
// Компоненти
  /*


  event.recipes.modern_industrialization.cutting_machine(64, 100)
  .fluidIn("8x modern_industrialization:lubricant")
  .itemIn("1x ae2:quartz_glass")
  .itemOut("4x roll_mod:petri_dish")



// СТАРІ КРАФТИ
  event.recipes.modern_industrialization.cutting_machine(8, 200)
  .fluidIn("10x modern_industrialization:lubricant")
  .itemIn("1x modern_industrialization:ruthenium_plate")
  .itemOut("1x roll_mod:ruthenium_coin")
*/

event.recipes.modern_industrialization.cutting_machine(24, 200)
.itemIn("1x roll_mod:standard_wafer_pmic")
.fluidIn("200x extended_industrialization:distilled_water")
.itemOut("8x roll_mod:standard_chip_pmic")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:purple_boule")
.fluidIn("1000x extended_industrialization:distilled_water")
.itemOut("64x roll_mod:purple_wafer")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:purple_wafer_accumulation")
.fluidIn("1000x extended_industrialization:distilled_water")
.itemOut("48x roll_mod:purple_chip_accumulation")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:purple_wafer_qubit")
.fluidIn("1000x extended_industrialization:distilled_water")
.itemOut("48x roll_mod:purple_chip_qubit")

event.recipes.modern_industrialization.cutting_machine(16, 100)
.itemIn("1x roll_mod:alumina_ceramic_plate")
.fluidIn("160x modern_industrialization:lubricant")
.itemOut("3x roll_mod:alumina_small_ceramic_plate")

event.recipes.modern_industrialization.cutting_machine(24, 200)
.itemIn("1x roll_mod:standard_wafer_not")
.fluidIn("1000x extended_industrialization:distilled_water")
.itemOut("8x roll_mod:standard_chip_not")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:blue_boule")
.fluidIn("1000x extended_industrialization:distilled_water")
.itemOut("48x roll_mod:blue_wafer")

event.recipes.modern_industrialization.cutting_machine(8, 1600)
.itemIn("1x roll_mod:blue_wafer_cpu")
.fluidIn("1000x extended_industrialization:distilled_water")
.itemOut("48x roll_mod:blue_chip_cpu")

event.recipes.modern_industrialization.cutting_machine(32, 100)
.itemIn("1x roll_mod:standard_wafer_nand")
.fluidIn("1000x extended_industrialization:distilled_water")
.itemOut("16x roll_mod:standard_chip_nand")
})
