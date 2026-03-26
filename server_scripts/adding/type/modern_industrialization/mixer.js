ServerEvents.recipes(event => {

// Пил
  event.recipes.modern_industrialization.mixer(2, 100)
  .itemIn("2x minecraft:clay_ball")
  .itemIn("2x modern_industrialization:brick_dust")
  .itemIn("2x modern_industrialization:bauxite_dust")
  .itemOut("6x modern_industrialization:fire_clay_dust")

  event.recipes.modern_industrialization.mixer(2, 100)
  .itemIn("1x modern_industrialization:silver_dust")
  .itemIn("1x modern_industrialization:tin_dust")
  .itemOut("2x modern_industrialization:soldering_alloy_dust")

  event.recipes.modern_industrialization.mixer(8, 100)
  .itemIn("3x modern_industrialization:iridium_dust")
  .itemIn("1x modern_industrialization:osmium_dust")
  .itemOut("4x modern_industrialization:osmiridium_dust")

  event.recipes.modern_industrialization.mixer(8, 100)
  .itemIn("4x modern_industrialization:iron_dust")
  .itemIn("1x modern_industrialization:chromium_dust")
  .itemIn("4x modern_industrialization:aluminum_tiny_dust")
  .itemOut("4x modern_industrialization:kanthal_dust")

  event.recipes.modern_industrialization.mixer(16, 200)
  .itemIn("7x modern_industrialization:iron_dust")
  .itemIn("1x roll_mod:vanadium_dust_clean")
  .itemIn("1x modern_industrialization:chromium_dust")
  .itemIn("3x modern_industrialization:silicon_tiny_dust")
  .itemOut("9x modern_industrialization:chrome_vanadium_steel_dust")

  event.recipes.modern_industrialization.mixer(16, 200)
  .itemIn("7x modern_industrialization:titanium_dust")
  .itemIn("2x modern_industrialization:aluminum_dust")
  .itemIn("1x roll_mod:vanadium_dust_clean")
  .itemOut("10x modern_industrialization:titanium_64_dust")

  event.recipes.modern_industrialization.mixer(8, 100)
  .itemIn("2x modern_industrialization:titanium_dust")
  .itemIn("2x modern_industrialization:niobium_dust")
  .itemOut("4x modern_industrialization:niobium_titanium_alloy_dust")

  event.recipes.modern_industrialization.mixer(8, 100)
  .itemIn("3x modern_industrialization:iridium_dust")
  .itemIn("1x modern_industrialization:osmium_dust")
  .itemOut("4x modern_industrialization:osmiridium_dust")

event.recipes.modern_industrialization.mixer(16, 200)
.itemIn("6x modern_industrialization:iron_dust")
.itemIn("4x modern_industrialization:chromium_dust")
.itemIn("2x modern_industrialization:titanium_dust")
.itemIn("2x modern_industrialization:yttrium_dust")
.itemOut("14x modern_industrialization:incoloy_dust")
// Пальне
  event.recipes.modern_industrialization.mixer(32, 400)
  .fluidIn("modern_industrialization:dimethylhydrazine", 1000)
  .fluidIn("modern_industrialization:dinitrogen_tetroxide", 1000)
  .fluidOut("modern_industrialization:rocket_propellant", 2000)

// Ін'єкції
  event.recipes.modern_industrialization.mixer(24, 100)
  .fluidIn("modern_industrialization:distilled_water", 10000)
  .itemIn("1x roll_mod:1_circuit", 0.0)
  .itemIn("1x modern_industrialization:salt_dust")
  .fluidOut("modern_industrialization:saline_solution", 10000)

// Живтек
  event.recipes.modern_industrialization.mixer(24, 300)
  .fluidIn("minecraft:water", 4000)
  .fluidIn("modern_industrialization:sodium_hydroxide", 250)
  .itemIn("64x minecraft:kelp")
  .fluidOut("modern_industrialization:diluted_agar_solution", 250)

  event.recipes.modern_industrialization.mixer(24, 300)
  .fluidIn("modern_industrialization:distilled_water", 2000)
  .itemIn("10x roll_mod:agar_dust")
  .itemIn("6x roll_mod:calcium_dust")
  .itemIn("4x modern_industrialization:salt_dust")
  .fluidOut("modern_industrialization:raw_nutrient_solution", 2000)

// Tech Reborn
  event.recipes.modern_industrialization.mixer(64, 200)
  .itemIn("8x minecraft:redstone")
  .itemIn("4x modern_industrialization:diamond_dust")
  .itemIn("4x modern_industrialization:silicon_dust")
  .itemOut("16x roll_mod:energium_dust")





event.recipes.modern_industrialization.mixer(4, 100)
.itemIn("5x modern_industrialization:steel_dust")
.itemIn("3x modern_industrialization:nickel_dust")
.itemIn("1x modern_industrialization:gold_dust")
.itemIn("1x modern_industrialization:silver_dust")
.itemOut("10x modern_industrialization:black_steel_dust")

event.recipes.modern_industrialization.mixer(32, 600)
.fluidIn("modern_industrialization:nitric_acid", 1000)
.fluidIn("modern_industrialization:hydrochloric_acid", 2000)
.fluidOut("modern_industrialization:aqua_regia", 3000)

event.recipes.modern_industrialization.mixer(8, 100)
.itemIn("3x modern_industrialization:palladium_dust")
.itemIn("2x modern_industrialization:rhodium_dust")
.itemOut("5x modern_industrialization:rhodium_plated_palladium_dust")


    event.recipes.modern_industrialization.mixer(2, 200)
  .itemIn("1x roll_mod:raw_latex")
  .itemIn("3x modern_industrialization:coal_tiny_dust")
  .itemOut("2x roll_mod:raw_rubber")

event.recipes.modern_industrialization.mixer(16, 200)
.itemIn("4x modern_industrialization:aluminum_dust")
.itemIn("1x modern_industrialization:magnesium_dust")
.itemOut("5x modern_industrialization:magnalium_dust")

    event.recipes.modern_industrialization.mixer(2, 300)
  .itemIn("1x #minecraft:logs")
.fluidIn("modern_industrialization:creosote", 4000)
.itemOut("1x roll_mod:treated_log")
  
event.recipes.modern_industrialization.mixer(24, 100)
.fluidIn("10000x minecraft:water")
.fluidIn("1000x modern_industrialization:nitrogen")
.itemIn("1x roll_mod:potassium_dust")
.itemIn("1x modern_industrialization:phosphorus_dust")
.fluidOut("extended_industrialization:npk_fertilizer", 16000)

event.recipes.modern_industrialization.mixer(24, 100)
.itemIn("4x ae2:ender_dust")
.itemIn("2x roll_mod:lead_dust")
.itemIn("1x modern_industrialization:tin_dust")
.itemIn("1x modern_industrialization:platinum_dust")
.itemOut("4x modern_industrialization:enderium_dust")
})
