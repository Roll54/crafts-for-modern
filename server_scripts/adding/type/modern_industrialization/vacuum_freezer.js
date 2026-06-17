ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.vacuum_freezer(8, 100)
  .fluidIn("modern_industrialization:polytetrafluoroethylene", 100)
  .itemOut("1x modern_industrialization:polytetrafluoroethylene_ingot")

  event.recipes.modern_industrialization.vacuum_freezer(32, 1600)
  .itemIn("1x roll_mod:superconducting_magnet_base")
  .itemOut("1x roll_mod:superconducting_magnet")
    
})
