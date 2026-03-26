ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.distillation_tower(12, 200)
  .fluidIn("modern_industrialization:acidic_osmium_solution", 2000)
  .fluidOut("modern_industrialization:osmium_tetroxide", 5000)
  .fluidOut("modern_industrialization:hydrochloric_acid", 1000)
  .fluidOut("minecraft:water", 1000)

  event.recipes.modern_industrialization.distillation_tower(8, 100)
  .fluidIn("modern_industrialization:diluted_hydrochloric_acid", 2000)
  .fluidOut("modern_industrialization:hydrochloric_acid", 1000)
  .fluidOut("minecraft:water", 1000)

  event.recipes.modern_industrialization.distillation_tower(16, 200)
  .fluidIn("modern_industrialization:liquid_moon_air", 1000)
  .fluidOut("modern_industrialization:helium", 800)
  .fluidOut("modern_industrialization:sunnarium_nitride", 400)
  .fluidOut("modern_industrialization:xenon", 2)
  .fluidOut("modern_industrialization:helium_3", 5)
/*
  event.recipes.modern_industrialization.distillation_tower(96, 200)
  .fluidIn("modern_industrialization:wood_tar", 1000)
  .fluidOut("modern_industrialization:benzene", 400)
  .fluidOut("modern_industrialization:creosote", 250)
  .fluidOut("modern_industrialization:methane", 150)
  .fluidOut("modern_industrialization:toluene", 100)
  .fluidOut("modern_industrialization:phenol", 100)
*/
  event.recipes.modern_industrialization.distillation_tower(16, 200)
  .fluidIn("modern_industrialization:ethanol_containing_liquid", 1000)
  .fluidOut("modern_industrialization:distilled_water", 175)
  .fluidOut("modern_industrialization:ethanol", 200)
  .fluidOut("modern_industrialization:carbon_dioxide", 625)
})