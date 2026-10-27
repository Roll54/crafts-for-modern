ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.distillation_tower(12, 200)
  .fluidIn("2000x modern_industrialization:acidic_osmium_solution")
  .fluidOut("5000x modern_industrialization:osmium_tetroxide")
  .fluidOut("1000x modern_industrialization:hydrochloric_acid")
  .fluidOut("1000x minecraft:water")

  event.recipes.modern_industrialization.distillation_tower(8, 100)
  .fluidIn("2000x modern_industrialization:diluted_hydrochloric_acid")
  .fluidOut("1000x modern_industrialization:hydrochloric_acid")
  .fluidOut("1000x minecraft:water")

  event.recipes.modern_industrialization.distillation_tower(16, 200)
  .fluidIn("1000x modern_industrialization:liquid_moon_air")
  .fluidOut("800x modern_industrialization:helium")
  .fluidOut("400x modern_industrialization:sunnarium_nitride")
  .fluidOut("2x modern_industrialization:xenon")
  .fluidOut("5x modern_industrialization:helium_3")
/*
  event.recipes.modern_industrialization.distillation_tower(96, 200)
  .fluidIn("1000x modern_industrialization:wood_tar")
  .fluidOut("400x modern_industrialization:benzene")
  .fluidOut("250x modern_industrialization:creosote")
  .fluidOut("150x modern_industrialization:methane")
  .fluidOut("100x modern_industrialization:toluene")
  .fluidOut("100x modern_industrialization:phenol")
*/
  event.recipes.modern_industrialization.distillation_tower(16, 200)
  .fluidIn("1000x modern_industrialization:ethanol_containing_liquid")
  .fluidOut("175x extended_industrialization:distilled_water")
  .fluidOut("200x modern_industrialization:ethanol")
  .fluidOut("625x modern_industrialization:carbon_dioxide")
})
