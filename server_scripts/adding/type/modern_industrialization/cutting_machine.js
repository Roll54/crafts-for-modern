ServerEvents.recipes(event => {

// Шестерні
  event.recipes.modern_industrialization.cutting_machine(8, 400)
  .itemIn("1x modern_industrialization:bronze_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:bronze_gear")

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

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:stainless_steel_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:stainless_steel_gear")

  event.recipes.modern_industrialization.cutting_machine(8, 1600)
  .itemIn("1x modern_industrialization:titanium_block")
  .fluidIn("modern_industrialization:lubricant", 20)
  .itemOut("4x modern_industrialization:titanium_gear")

// Ротори

  event.recipes.modern_industrialization.cutting_machine(96, 300)
  .itemIn("4x modern_industrialization:aluminum_large_plate")
  .fluidIn("modern_industrialization:lubricant", 100)
  .itemOut("5x modern_industrialization:aluminum_rotor")

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

})