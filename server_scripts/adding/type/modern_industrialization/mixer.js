ServerEvents.recipes(event => {

event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("5x modern_industrialization:tungsten_dust")    
    .itemIn("2x modern_industrialization:steel_dust")
    .itemOut("3x modern_industrialization:tunstensteel_dust")
    
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("3x minecraft:slime_ball")    
    .itemIn("3x createcybernetics:graphene_elastomer")
    .itemIn("3x minecraft:bone_meal")
    .itemOut("1x createcybernetics:muscleupgrades_ballisticgel")
    
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("4x #c:dusts/redstone")
    .itemIn("4x #c:dusts/iron")
    .itemOut("6x modern_industrialization:redstone_alloy_dust")
    
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("4x #c:dusts/diamond")
    .itemIn("2x #c:dusts/electrum")
    .itemIn("1x #c:dusts/nickel")
    .itemOut("4x roll_mod:diamond_alloy_dust")

event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("8x #c:dusts/bort")
    .itemIn("2x #c:dusts/electrum")
    .itemIn("1x #c:dusts/nickel")
    .itemOut("4x roll_mod:diamond_alloy_dust")
    
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("1x minecraft:cobblestone")
    .itemIn("1x #c:tiny_dusts/silicon")
    .itemIn("1x #c:tiny_dusts/iron")
    .fluidIn("1000x minecraft:water", 0.0)
    .fluidIn("1000x minecraft:lava", 0.0)
    .itemOut("3x ae2:sky_stone_block")
    
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("1x minecraft:cobblestone")
    .itemIn("1x #c:dusts/sulfur")
    .itemIn("1x #roll_mod:netherrack_craft_dust")
    .fluidIn("500x minecraft:lava", 0.0)
    .itemOut("3x minecraft:netherrack")
 
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("4x #c:dusts/zinc")
    .itemIn("2x #c:dusts/sulfur")
    .itemOut("6x roll_mod:zinc_sulfur_mixture")
    
event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("#c:dusts/redstone")
    .fluidIn("500x modern_industrialization:creosote")
    .fluidOut("500x modern_industrialization:lubricant")

event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("#c:dusts/redstone")
    .fluidIn("500x modern_industrialization:naphtha")
    .fluidOut("500x modern_industrialization:lubricant")

event.recipes.modern_industrialization.mixer(2, 100)
    .itemIn("#c:dusts/redstone")
    .fluidIn("500x modern_industrialization:plant_oil")
    .fluidOut("500x modern_industrialization:lubricant")

  event.recipes.modern_industrialization.mixer(32, 400)
  .itemIn("1x minecraft:honeycomb")
  .itemIn("1x modern_industrialization:titanium_hot_ingot")
  .itemIn("1x minecraft:magma_cream")
  .fluidIn("1000x minecraft:water")
  .itemOut("4x roll_mod:hot_titanium_gum")

  event.recipes.modern_industrialization.mixer(2, 200)
  .itemIn("1x #c:dusts/redstone")
  .itemIn("2x #roll_mod:glowstone_dust")
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
  .itemIn("3x #c:dusts/iridium")
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
  .fluidIn("1000x modern_industrialization:dimethylhydrazine")
  .fluidIn("1000x modern_industrialization:dinitrogen_tetroxide")
  .fluidOut("2000x modern_industrialization:rocket_propellant")

// Ін'єкції
  event.recipes.modern_industrialization.mixer(24, 100)
  .fluidIn("10000x extended_industrialization:distilled_water")
  .itemIn("1x roll_mod:1_circuit", 0.0)
  .itemIn("1x modern_industrialization:salt_dust")
  .fluidOut("10000x modern_industrialization:saline_solution")

// Живтек
  event.recipes.modern_industrialization.mixer(24, 300)
  .fluidIn("4000x minecraft:water")
  .fluidIn("250x modern_industrialization:sodium_hydroxide")
  .itemIn("64x minecraft:kelp")
  .fluidOut("250x modern_industrialization:diluted_agar_solution")

  event.recipes.modern_industrialization.mixer(24, 300)
  .fluidIn("2000x extended_industrialization:distilled_water")
  .itemIn("10x roll_mod:agar_dust")
  .itemIn("6x roll_mod:calcium_dust")
  .itemIn("4x modern_industrialization:salt_dust")
  .fluidOut("2000x modern_industrialization:raw_nutrient_solution")

  event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("32x minecraft:magma_cream")
  .itemIn("2x roll_mod:sulfur_jam")
  .itemIn("2x roll_mod:sulfur_berry_pie_slice")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("2000x modern_industrialization:sulfuric_acid")
  .itemOut("1x roll_mod:injection_fire_resistance")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("4x minecraft:obsidian")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("1000x modern_industrialization:adrenaline")
  .itemOut("1x roll_mod:injection_resistance")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("8x minecraft:sugar")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("1000x modern_industrialization:adrenaline")
  .itemOut("1x roll_mod:injection_haste")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("8x roll_mod:sulfur_berry")
  .itemIn("3x minecraft:black_wool")
  .itemIn("3x minecraft:red_wool")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("2000x modern_industrialization:lubricant")
  .itemOut("1x roll_mod:injection_resistance")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("1x minecraft:cactus")
  .itemIn("16x modern_industrialization:gold_ring")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("1000x modern_industrialization:adrenaline")
  .itemOut("1x roll_mod:injection_speed")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("1x minecraft:ghast_tear")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("1000x modern_industrialization:adrenaline")
  .itemOut("1x roll_mod:injection_regen")

event.recipes.modern_industrialization.mixer(24, 300)
  .itemIn("8x roll_mod:sulfur_berry")
  .itemIn("1x minecraft:magma_cream")
  .itemIn("4x roll_mod:sulfur_dust")
  .itemIn("1x roll_mod:syringe")
  .fluidIn("1000x modern_industrialization:adrenaline")
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
.itemIn("2x #c:dusts/electrum")
.itemOut("10x modern_industrialization:black_steel_dust")

event.recipes.modern_industrialization.mixer(32, 600)
.fluidIn("1000x modern_industrialization:nitric_acid")
.fluidIn("2000x modern_industrialization:hydrochloric_acid")
.fluidOut("3000x modern_industrialization:aqua_regia")

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
.fluidIn("4000x modern_industrialization:creosote")
.itemOut("1x roll_mod:treated_log")

event.recipes.modern_industrialization.mixer(2, 200)
.itemIn("4x extendedae:entro_dust")
.itemIn("4x ae2:fluix_crystal")
.fluidIn("1000x modern_industrialization:creosote", 0.0)
.itemOut("4x extendedae:entro_crystal")
  
event.recipes.modern_industrialization.mixer(24, 100)
.fluidIn("10000x minecraft:water")
.fluidIn("1000x modern_industrialization:nitrogen")
.itemIn("1x roll_mod:potassium_dust")
.itemIn("1x modern_industrialization:phosphorus_dust")
.fluidOut("16000x extended_industrialization:npk_fertilizer")

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
.itemIn("4x #c:dusts/electrum")
.itemOut("9x modern_industrialization:black_bronze_dust")

event.recipes.modern_industrialization.mixer(4, 100)
.itemIn("4x #c:dusts/copper")
.itemIn("3x #c:dusts/zinc")
.itemIn("2x #c:dusts/bismuth")
.itemOut("9x modern_industrialization:bismuth_bronze_dust")



event.recipes.modern_industrialization.mixer(16, 200)
.itemIn("4x #c:dusts/tantalum")
.itemIn("2x #c:dusts/rhenium")
.itemOut("6x modern_industrialization:tantalum_rhenium_dust")
})
