ServerEvents.recipes(event => {
//соляри
  /*
  event.recipes.modern_industrialization.blast_furnace(128, 800)
  .itemIn("8x modern_industrialization:magnesium_dust")
  .itemIn("2x roll_mod:sunnarium_glass_mk1")
  .fluidIn("modern_industrialization:argon", 1000)
  .itemOut("1x roll_mod:sunnarium_glass_mk2")
    
  event.recipes.modern_industrialization.blast_furnace(128, 800)
  .itemIn("4x modern_industrialization:sunnarium_dust")
  .itemIn("2x roll_mod:sunnarium_glass_mk2")
  .fluidIn("modern_industrialization:helium", 2500)
  .itemOut("1x roll_mod:sunnarium_glass_mk3")
    
  event.recipes.modern_industrialization.blast_furnace(512, 800)
  .itemIn("16x modern_industrialization:plutonium_dust")
  .itemIn("3x roll_mod:sunnarium_glass_mk3")
  .fluidIn("modern_industrialization:xenon", 500)
  .itemOut("1x roll_mod:sunnarium_glass_mk4")

  event.recipes.modern_industrialization.blast_furnace(512, 3200)
  .itemIn("4x megacells:bulk_cell_component")
  .itemIn("4x roll_mod:sunnarium_glass_mk4")
  .fluidIn("kubejs:blockbenchiy", 500)
  .itemOut("1x roll_mod:sunnarium_glass_mk5")    
*/    
// Пил у злитки
  event.recipes.modern_industrialization.blast_furnace(8, 100)
  .itemIn("1x modern_industrialization:electrum_dust")
  .itemOut("1x modern_industrialization:electrum_ingot")

  event.recipes.modern_industrialization.blast_furnace(64, 200)
  .itemIn("1x modern_industrialization:stainless_steel_dust")
  .itemOut("1x modern_industrialization:stainless_steel_ingot")

  event.recipes.modern_industrialization.blast_furnace(64, 400)
  .itemIn("1x modern_industrialization:palladium_dust")
  .itemOut("1x modern_industrialization:palladium_ingot")

  event.recipes.modern_industrialization.blast_furnace(64, 200)
  .itemIn("1x modern_industrialization:ruthenium_dust")
  .itemOut("1x modern_industrialization:ruthenium_ingot")

  event.recipes.modern_industrialization.blast_furnace(256, 100)
  .itemIn("1x modern_industrialization:rhodium_dust")
  .itemOut("1x modern_industrialization:rhodium_hot_ingot")
    
  event.recipes.modern_industrialization.blast_furnace(64, 200)
  .itemIn("1x modern_industrialization:sunnarium_dust")
  .fluidIn("modern_industrialization:helium", 500)
  .itemOut("1x modern_industrialization:sunnarium_ingot")    
  

// Пил у рідини
  event.recipes.modern_industrialization.blast_furnace(4, 1200)
  .itemIn("1x modern_industrialization:soldering_alloy_block")
  .fluidOut("modern_industrialization:soldering_alloy", 1000)

  event.recipes.modern_industrialization.blast_furnace(96, 100)
  .itemIn("1x minecraft:glowstone_dust")
  .itemIn("1x roll_mod:1_circuit", 0.0)
  .fluidOut("modern_industrialization:molten_glowstone", 250)

  event.recipes.modern_industrialization.blast_furnace(96, 300)
  .itemIn("1x minecraft:glowstone")
  .itemIn("1x roll_mod:1_circuit", 0.0)
  .fluidOut("modern_industrialization:molten_glowstone", 1000)

  event.recipes.modern_industrialization.blast_furnace(4, 1200)
  .itemIn("1x minecraft:redstone_block")
  .fluidOut("modern_industrialization:molten_redstone", 1000)

  event.recipes.modern_industrialization.blast_furnace(256, 800)
  .itemIn("1x modern_industrialization:rhodium_plated_palladium_dust")
  .itemOut("1x modern_industrialization:rhodium_plated_palladium_hot_ingot")

  event.recipes.modern_industrialization.blast_furnace(128, 200)
  .itemIn("1x modern_industrialization:chrome_vanadium_steel_dust")
  .itemOut("1x modern_industrialization:chrome_vanadium_steel_hot_ingot")

  event.recipes.modern_industrialization.blast_furnace(512, 200)
  .itemIn("1x modern_industrialization:osmiridium_dust")
  .itemOut("1x modern_industrialization:osmiridium_hot_ingot")

  event.recipes.modern_industrialization.blast_furnace(256, 200)
  .itemIn("1x modern_industrialization:niobium_titanium_alloy_dust")
  .itemOut("1x modern_industrialization:niobium_titanium_alloy_hot_ingot")

  event.recipes.modern_industrialization.blast_furnace(512, 200)
  .itemIn("1x modern_industrialization:titanium_64_dust")
  .itemOut("1x modern_industrialization:titanium_64_hot_ingot")

  event.recipes.modern_industrialization.blast_furnace(128, 1200)
  .itemIn("4x modern_industrialization:tungsten_wire")
  .itemIn("4x modern_industrialization:titanium_tiny_dust")
  .itemOut("4x modern_industrialization:tungsten_cable")

  event.recipes.modern_industrialization.blast_furnace(256, 200)
  .itemIn("1x modern_industrialization:incoloy_dust")
  .itemOut("1x modern_industrialization:incoloy_hot_ingot")

  //інша ххрінь
event.recipes.modern_industrialization.blast_furnace(64, 400)
  .itemIn("10x roll_mod:ilmenite_dust")
  .itemIn("4x modern_industrialization:carbon_dust")
  .itemOut("6x roll_mod:rutile_iron")

  event.recipes.modern_industrialization.blast_furnace(128, 400)
  .itemIn("2x modern_industrialization:magnesium_dust")
  .itemOut("1x modern_industrialization:titanium_hot_ingot")
  .fluidIn("modern_industrialization:titanium_tetrachloride", 1000)
  .fluidOut("modern_industrialization:magnesium_chloride", 1500)

  event.recipes.modern_industrialization.blast_furnace(512, 500)
  .itemIn("2x modern_industrialization:raw_tantalum")
  .itemIn("10x modern_industrialization:carbon_dust")
  .fluidIn("modern_industrialization:sulfuric_acid", 1000)
  .fluidOut("modern_industrialization:molten_rhenium", 50)

  event.recipes.modern_industrialization.blast_furnace(512, 500)
  .itemIn("1x modern_industrialization:raw_tungsten")
  .itemIn("10x modern_industrialization:carbon_dust")
  .fluidIn("modern_industrialization:sulfuric_acid", 1000)
  .fluidOut("modern_industrialization:molten_rhenium", 50) 

    event.recipes.modern_industrialization.blast_furnace(96, 100)
  .itemIn("1x minecraft:ancient_debris")
  .itemOut("6x minecraft:netherite_scrap")
  .itemOut("6x minecraft:netherite_scrap", 0.5)

  event.recipes.modern_industrialization.blast_furnace(128, 100)
  .itemIn("1x modern_industrialization:magnalium_dust")
  .itemOut("1x modern_industrialization:magnalium_ingot")

  event.recipes.modern_industrialization.blast_furnace(128, 20)
  .itemIn("2x roll_mod:vanadium_magnetite_dust")
  .itemOut("3x roll_mod:vanadium_slag_dust")

  event.recipes.modern_industrialization.blast_furnace(32, 200)
    .itemIn("7x roll_mod:tungstic_acid_dust")
    .itemOut("4x roll_mod:tungsten_trioxide")

event.recipes.modern_industrialization.blast_furnace(128, 800)
    .itemIn("4x roll_mod:tungsten_trioxide")
    .fluidIn("modern_industrialization:hydrogen", 6000)
    .itemOut("1x modern_industrialization:tungsten_ingot")

    event.recipes.modern_industrialization.blast_furnace(32, 100)
  .itemIn("4x modern_industrialization:quartz_dust")
  .itemIn("3x roll_mod:sodium_carbonate")
  .itemOut("3x ae2:quartz_glass")

      event.recipes.modern_industrialization.blast_furnace(64, 100)
  .itemIn("4x ae2:quartz_glass")
  .itemIn("12x ae2:fluix_dust")
  .itemOut("4x ae2:quartz_vibrant_glass")

event.recipes.modern_industrialization.blast_furnace(8, 100)
.itemIn("1x #c:sands")
.itemIn("1x roll_mod:sodium_carbonate")
.itemOut("5x minecraft:glass")

event.recipes.modern_industrialization.blast_furnace(32, 100)
.itemIn("8x #c:glass_blocks")
.itemIn("4x #c:dusts/certus_quartz")
.itemOut("5x ae2:quartz_fiber")

event.recipes.modern_industrialization.blast_furnace(8, 100)
.itemIn("4x #c:dusts/lapis")
.itemIn("1x modern_industrialization:silver_ingot")
.itemOut("2x silentgear:azure_electrum_ingot")


event.recipes.modern_industrialization.blast_furnace(48, 100)
.itemIn("1x roll_mod:energium_dust")
.fluidOut("modern_industrialization:molten_energium", 50)

event.recipes.modern_industrialization.blast_furnace(48, 100)
.itemIn("1x modern_industrialization:enderium_dust")
.fluidIn("extended_industrialization:blazing_essence", 60)
.itemOut("1x modern_industrialization:enderium_ingot")

event.recipes.modern_industrialization.blast_furnace(48, 16000)
.itemIn("64x #c:dusts/ruby")
.fluidIn("6000x modern_industrialization:nitrogen")
.itemOut("1x roll_mod:red_lens")

event.recipes.modern_industrialization.blast_furnace(48, 16000)
.itemIn("64x #c:dusts/emerald")
.fluidIn("6000x modern_industrialization:nitrogen")
.itemOut("1x roll_mod:green_lens")

event.recipes.modern_industrialization.blast_furnace(48, 16000)
.itemIn("64x #c:dusts/topaz")
.fluidIn("6000x modern_industrialization:nitrogen")
.itemOut("1x roll_mod:yellow_lens")

event.recipes.modern_industrialization.blast_furnace(48, 16000)
.itemIn("64x #c:dusts/salt")
.fluidIn("6000x modern_industrialization:nitrogen")
.itemOut("1x roll_mod:white_lens")


event.recipes.modern_industrialization.blast_furnace(128, 200)
.itemIn("64x modern_industrialization:silicon_ingot")
.itemIn("1x minecraft:quartz")
.itemOut("1x modern_industrialization:monocrystalline_silicon")
.fluidIn("modern_industrialization:helium", 1250)

event.recipes.modern_industrialization.blast_furnace(256, 200)
.itemIn("1x modern_industrialization:monocrystalline_silicon")
.itemIn("2x roll_mod:lapotron_large_crystal")
.itemOut("1x roll_mod:blue_boule")
.fluidIn("modern_industrialization:helium", 500)

event.recipes.modern_industrialization.blast_furnace(512, 200)
.itemIn("1x roll_mod:blue_boule")
.itemIn("64x ae2:fluix_pearl")
.itemOut("1x roll_mod:purple_boule")
.fluidIn("modern_industrialization:helium", 1500)

event.recipes.modern_industrialization.blast_furnace(128, 100)
.itemIn("64x minecraft:sugar")
.itemIn("16x modern_industrialization:plutonium_ingot")
.itemOut("1x roll_mod:very_nutritious_candy")

})