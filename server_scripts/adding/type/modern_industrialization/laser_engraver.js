ServerEvents.recipes(event => {

event.recipes.modern_industrialization.laser_engraver(32, 400)
.itemIn("1x modern_industrialization:silicon_wafer")
.itemIn("1x roll_mod:energium_large_dirty_crystal", 0.0)
.itemOut("1x roll_mod:standard_wafer_pmic", 0.67)

event.recipes.modern_industrialization.laser_engraver(32, 400)
.itemIn("1x modern_industrialization:silicon_wafer")
.itemIn("1x roll_mod:red_lens", 0.0)
.itemOut("1x roll_mod:standard_wafer_not", 0.4)

event.recipes.modern_industrialization.laser_engraver(32, 400)
.itemIn("1x roll_mod:blue_wafer_cpu")
.itemIn("1x roll_mod:raw_crystal_chip")
.itemIn("1x roll_mod:green_lens", 0.0)
.itemOut("1x roll_mod:engraved_crystal_chip", 0.5)

event.recipes.modern_industrialization.laser_engraver(32, 400)
.itemIn("1x modern_industrialization:silicon_wafer")
.itemIn("64x ae2:charged_certus_quartz_crystal")
.itemIn("1x roll_mod:white_lens", 0.04)
.itemOut("1x roll_mod:standard_wafer_nand")


});