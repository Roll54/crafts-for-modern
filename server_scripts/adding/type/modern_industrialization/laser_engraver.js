ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.laser_engraver(32, 400)
  .itemIn("1x modern_industrialization:silicon_wafer")
  .itemIn("1x roll_mod:energium_large_dirty_crystal", 0.0)
  .itemOut("1x roll_mod:standard_wafer_pmic", 0.67)
});