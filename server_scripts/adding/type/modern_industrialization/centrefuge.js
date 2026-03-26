ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.centrifuge(32, 400)
  .itemIn("6x roll_mod:rutile_iron")
  .itemOut("4x roll_mod:rutile_dust")
  .itemOut("2x modern_industrialization:iron_dust")
  .itemOut("1x modern_industrialization:iron_dust", 0.5)

  event.recipes.modern_industrialization.centrifuge(16, 200)
  .fluidIn("modern_industrialization:salt_water", 2000)
  .fluidOut("minecraft:water", 1000)
  .itemOut("2x modern_industrialization:salt_dust")


  event.recipes.modern_industrialization.centrifuge(32, 800)
  .itemIn("4x stellaris:moon_sand")
  .itemOut("1x modern_industrialization:silicon_dust", 0.25)
  .itemOut("2x modern_industrialization:aluminum_tiny_dust")
  .itemOut("1x modern_industrialization:iron_tiny_dust")
  .fluidOut("modern_industrialization:helium_3", 20)

  event.recipes.modern_industrialization.centrifuge(32, 800)
  .fluidIn("modern_industrialization:aqua_regia", 4000)
  .itemIn("12x roll_mod:platinum_group_sludge")
  .itemOut("3x roll_mod:raw_platinum_dust")
  .itemOut("3x roll_mod:raw_palladium_dust")
  .itemOut("2x roll_mod:inert_metal_mixture")
  .itemOut("1x roll_mod:rarest_metal_dust")

  event.recipes.modern_industrialization.centrifuge(32, 400)
  .itemIn("5x roll_mod:iridium_metal_residue")
  .itemOut("4x roll_mod:iridium_chloride")

  event.recipes.modern_industrialization.centrifuge(64, 200)
  .fluidIn("modern_industrialization:diluted_agar_solution", 8000)
  .itemOut("1x roll_mod:agar_gel")

  event.recipes.modern_industrialization.centrifuge(32, 200)
  .itemIn("1x roll_mod:raw_latex")
  .itemOut("3x roll_mod:raw_rubber")
  .itemOut("2x modern_industrialization:wood_pulp")
  .fluidOut("modern_industrialization:glue", 200)
  
  /*
  ТРЕБА ЗМІНИТИ НА СВІЙ ПИЛ!!!
  event.recipes.modern_industrialization.centrifuge(32, 200)
  .itemIn("1x minecraft:soul_sand")
  .itemOut("1x modern_industrialization:calcium_sulfate_dust", 0.5)
  .itemOut("1x techreborn:clay_dust", 0.5)
  .itemOut("1x minecraft:sand")
  .fluidOut("modern_industrialization:crude_oil", 500)
    
  event.recipes.modern_industrialization.centrifuge(32, 200)
  .itemIn("1x minecraft:soul_soil")
  .itemOut("1x modern_industrialization:calcium_sulfate_dust", 0.5)
  .itemOut("1x techreborn:clay_dust", 0.5)
  .itemOut("1x minecraft:sand")
  .fluidOut("modern_industrialization:crude_oil", 500)
  */

  event.recipes.modern_industrialization.centrifuge(32, 100)
  .itemIn("2x roll_mod:cinnabar_dust")
  .itemOut("1x modern_industrialization:sulfur_dust")
  .fluidOut("modern_industrialization:mercury", 1000)

  event.recipes.modern_industrialization.centrifuge(32, 100)
  .itemIn("8x roll_mod:tetrahedrite_dust")
  .itemOut("3x modern_industrialization:copper_dust")
  .itemOut("3x modern_industrialization:sulfur_dust")
  .itemOut("1x modern_industrialization:antimony_dust")
  .itemOut("1x modern_industrialization:iron_dust")

  event.recipes.modern_industrialization.centrifuge(128, 100)
  .itemIn("6x roll_mod:pitchblende_dust")
  .fluidOut("modern_industrialization:radon", 150)
  .fluidOut("modern_industrialization:helium", 100)
  .itemOut("3x roll_mod:uraninite_dust")
  .itemOut("1x roll_mod:thorium_dust")
  .itemOut("1x roll_mod:lead_dust")

  event.recipes.modern_industrialization.centrifuge(16, 800)
  .fluidIn("modern_industrialization:uranium_hexafluoride", 1000)
  .fluidOut("modern_industrialization:depleted_uranium_hexafluoride", 800)
  .fluidOut("modern_industrialization:enriched_uranium_hexafluoride", 200)
  .fluidOut("modern_industrialization:radon", 50)
  .fluidOut("modern_industrialization:helium", 50)

  event.recipes.modern_industrialization.centrifuge(16, 100)
  .fluidIn("modern_industrialization:depleted_uranium_hexafluoride", 1000)
  .fluidOut("modern_industrialization:fluorine", 6000)
  .itemOut("1x modern_industrialization:uranium_238_dust")

  event.recipes.modern_industrialization.centrifuge(16, 100)
  .fluidIn("modern_industrialization:enriched_uranium_hexafluoride", 1000)
  .fluidOut("modern_industrialization:fluorine", 6000)
  .itemOut("1x modern_industrialization:uranium_235_dust")

  event.recipes.modern_industrialization.centrifuge(1, 1)
  .fluidIn("modern_industrialization:oxygen", 1000)
  .fluidOut("stellaris:oxygen", 1000)

  event.recipes.modern_industrialization.centrifuge(1, 1)
  .fluidIn("modern_industrialization:rocket_propellant", 1000)
  .fluidOut("stellaris:fuel", 1000)

event.recipes.modern_industrialization.centrifuge(8, 200)
.itemIn("1x roll_mod:sulfur_berry")
.fluidOut("modern_industrialization:sulfuric_acid", 1000)


  
})