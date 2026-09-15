ServerEvents.recipes(event => {
  event.recipes.extended_industrialization.composter(4, 200)
  .itemIn("2x roll_mod:latex_dandelion_stem")
  .itemOut("3x roll_mod:raw_latex")
  .itemOut("1x roll_mod:raw_latex", 0.5)
  
  event.recipes.extended_industrialization.composter(4, 200)
  .itemIn("4x roll_mod:latex_dandelion_flower")
  .itemOut("3x roll_mod:raw_latex")
  .itemOut("1x minecraft:yellow_dye", 0.5)

  event.recipes.extended_industrialization.composter(4, 100)
  .itemIn("8x roll_mod:biomass")
  .itemIn("1x minecraft:soul_sand")
  .itemOut("1x mynethersdelight:letios_compost")

  event.recipes.extended_industrialization.composter(4, 100)
  .itemIn("8x roll_mod:biomass")
  .itemIn("1x minecraft:dirt")
  .itemOut("1x farmersdelight:organic_compost")
})
