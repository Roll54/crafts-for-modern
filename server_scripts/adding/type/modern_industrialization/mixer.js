ServerEvents.recipes(event => {

/*    
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("4x #c:dusts/zinc", 1)
    .itemIn("2x #c:dusts/sulfur", 1)
    .itemOut("1x roll_mod:zinc_sulfur_mixture")
*/
    
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("#c:dusts/redstone", 1)
    .fluidIn("modern_industrialization:creosote", 500)
    .fluidOut("modern_industrialization:lubricant", 500)

event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("#c:dusts/redstone", 1)
    .fluidIn("modern_industrialization:naphtha", 500)
    .fluidOut("modern_industrialization:lubricant", 500)

event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("#c:dusts/redstone", 1)
    .fluidIn("modern_industrialization:plant_oil", 500)
    .fluidOut("modern_industrialization:lubricant", 500)

  event.recipes.modern_industrialization.mixer(32, 400)
  .itemIn("1x minecraft:honeycomb")
  .itemIn("1x modern_industrialization:titanium_hot_ingot")
  .itemIn("1x minecraft:magma_cream")
  .fluidIn("minecraft:water", 1000)
  .itemOut("4x roll_mod:hot_titanium_gum")

  event.recipes.modern_industrialization.mixer(2, 200)
  .itemIn("1x #c:dusts/redstone")
  .itemIn("2x minecraft:glowstone_dust")
  .itemOut("2x extendedcrafting:luminessence")

event.recipes.modern_industrialization.mixer(16, 200)
  .itemIn("2x #c:dusts/redstone")
  .itemIn("1x minecraft:slime_ball")
  .itemIn("2x #createcybernetics:graphene")
  .itemOut("4x createcybernetics:graphene_elastomer")
  
// Пил
  event.recipes.modern_industrialization.mixer(2, 100)
  .itemIn("2x roll_mod:clay_dust")
  .itemIn("2x modern_industrialization:brick_dust")
  .itemIn("2x #c:dusts/bauxite")
  .itemOut("6x modern_industrialization:fire_clay_dust")

    event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("1x modern_industrialization:tin_dust")
    .itemIn("1x roll_mod:bismuth_dust")
    .itemOut("2x modern_industrialization:soldering_alloy_dust")

        event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("1x modern_industrialization:tin_dust")
    .itemIn("1x modern_industrialization:silver_dust")
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
  .fluidIn("extended_industrialization:distilled_water", 10000)
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
  .fluidIn("extended_industrialization:distilled_water", 2000)
  .itemIn("10x roll_mod:agar_dust")
  .itemIn("6x roll_mod:calcium_dust")
  .itemIn("4x modern_industrialization:salt_dust")
  .fluidOut("modern_industrialization:raw_nutrient_solution", 2000)

  event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("32x minecraft:magma_cream")
  .itemIn("2x roll_mod:sulfur_jam")
  .itemIn("2x roll_mod:sulfur_berry_pie")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("modern_industrialization:sulfuric_acid", 2000)
  .itemOut("1x roll_mod:injection_fire_resistance")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("4x minecraft:obsidian")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("modern_industrialization:adrenaline", 1000)
  .itemOut("1x roll_mod:injection_resistance")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("8x minecraft:sugar")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("modern_industrialization:adrenaline", 1000)
  .itemOut("1x roll_mod:injection_haste")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("8x roll_mod:sulfur_berry")
  .itemIn("3x minecraft:black_wool")
  .itemIn("3x minecraft:red_wool")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("modern_industrialization:lubricant", 2000)
  .itemOut("1x roll_mod:injection_resistance")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("1x minecraft:cactus")
  .itemIn("16x modern_industrialization:gold_ring")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("modern_industrialization:adrenaline", 1000)
  .itemOut("1x roll_mod:injection_speed")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("1x minecraft:ghast_tear")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("modern_industrialization:adrenaline", 1000)
  .itemOut("1x roll_mod:injection_regen")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("8x roll_mod:sulfur_berry")
  .itemIn("1x minecraft:magma_cream")
  .itemIn("4x roll_mod:sulfur_dust")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("modern_industrialization:adrenaline", 1000)
  .itemOut("1x roll_mod:injection_fire_resistance")

//альтернативні крафти, не заміна
  event.recipes.modern_industrialization.mixer(64, 200)
  .itemIn("8x #c:dusts/redstone")
  .itemIn("4x #c:dusts/diamond")
  .itemIn("4x modern_industrialization:silicon_dust")
  .itemOut("16x roll_mod:energium_dust")

event.recipes.modern_industrialization.mixer(64, 200)
.itemIn("16x #c:dusts/ruby")
.itemIn("4x #c:dusts/diamond")
.itemIn("4x modern_industrialization:silicon_dust")
.itemOut("16x roll_mod:energium_dust")




event.recipes.modern_industrialization.mixer(4, 100)
.itemIn("5x modern_industrialization:steel_dust")
.itemIn("3x #c:dusts/nickel")
.itemIn("1x #c:dusts/gold")
.itemIn("1x #c:dusts/silver")
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

event.recipes.modern_industrialization.mixer(2, 200)
.itemIn("4x extendedae:entro_dust")
.itemIn("4x ae2:fluix_crystal")
.fluidIn("modern_industrialization:creosote", 1000, 0.0)
.itemOut("4x extendedae:entro_crystal")
  
event.recipes.modern_industrialization.mixer(24, 100)
.fluidIn("10000x minecraft:water")
.fluidIn("1000x modern_industrialization:nitrogen")
.itemIn("1x roll_mod:potassium_dust")
.itemIn("1x modern_industrialization:phosphorus_dust")
.fluidOut("extended_industrialization:npk_fertilizer", 16000)

event.recipes.modern_industrialization.mixer(24, 100)
.itemIn("8x ae2:ender_dust")
.itemIn("4x #c:dusts/lead")
.itemIn("1x modern_industrialization:tin_dust")
.itemIn("1x modern_industrialization:platinum_dust")
.itemOut("4x modern_industrialization:enderium_dust")

event.recipes.modern_industrialization.mixer(4, 200)
.itemIn("2x #c:dusts/saltpeter")
.itemIn("3x #c:dusts/sulfur")
.itemOut("5x roll_mod:sulfur_saltpeter_mixture")

event.recipes.modern_industrialization.mixer(4, 100)
.itemIn("5x #c:dusts/copper")
.itemIn("2x #c:dusts/silver")
.itemIn("2x #c:dusts/gold")
.itemOut("9x modern_industrialization:black_bronze_dust")

event.recipes.modern_industrialization.mixer(4, 100)
.itemIn("4x #c:dusts/copper")
.itemIn("3x #c:dusts/zinc")
.itemIn("2x #c:dusts/bismuth")
.itemOut("9x modern_industrialization:bismuth_bronze_dust")
})
