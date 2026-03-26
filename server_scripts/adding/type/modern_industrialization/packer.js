ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.packer(2, 100)
  .itemIn("1x modern_industrialization:aluminum_ingot")
  .itemIn("1x modern_industrialization:black_steel_ingot")
  .itemIn("2x roll_mod:carbon_mesh")
  .itemOut("1x modern_industrialization:space_alloy_ingot")


event.recipes.modern_industrialization.packer(16, 100)
.itemIn("1x modern_industrialization:diamond_plate")
.itemIn("1x ae2:engineering_processor_press", 0.0)
.itemOut("1x ae2:printed_engineering_processor")

event.recipes.modern_industrialization.packer(16, 100)
.itemIn("4x ae2:certus_quartz_crystal")
.itemIn("1x ae2:calculation_processor_press", 0.0)
.itemOut("1x ae2:printed_calculation_processor")

event.recipes.modern_industrialization.packer(16, 100)
.itemIn("1x modern_industrialization:gold_plate")
.itemIn("1x ae2:logic_processor_press", 0.0)
.itemOut("1x ae2:printed_logic_processor")

event.recipes.modern_industrialization.packer(16, 100)
.itemIn("1x modern_industrialization:silicon_plate")
.itemIn("1x ae2:silicon_press", 0.0)
.itemOut("1x ae2:printed_silicon")

event.recipes.modern_industrialization.packer(16, 100)
.itemIn("4x extendedae:entro_crystal")
.itemIn("1x extendedae:concurrent_processor_press", 0.0)
.itemOut("1x extendedae:concurrent_processor_print")
})