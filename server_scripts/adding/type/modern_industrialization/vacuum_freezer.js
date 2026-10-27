ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.vacuum_freezer(8, 100)
  .fluidIn("100x modern_industrialization:polytetrafluoroethylene")
  .itemOut("1x modern_industrialization:polytetrafluoroethylene_ingot")
  
  event.recipes.modern_industrialization.vacuum_freezer(128, 200)
    .biome("ad_astra:orbit")
    .itemIn("1x yet_another_industrialization:tempproof_air_intake", 0.0)
    .fluidOut("1000x modern_industrialization:moon_air")

  event.recipes.modern_industrialization.vacuum_freezer(32, 1600)
    .itemIn("1x roll_mod:superconducting_magnet_base")
    .itemOut("1x roll_mod:superconducting_magnet")
    
  event.recipes.modern_industrialization.vacuum_freezer(512, 100)
  .fluidIn("1000x modern_industrialization:molten_rhenium")
  .itemOut("1x modern_industrialization:rhenium_dust")

})
