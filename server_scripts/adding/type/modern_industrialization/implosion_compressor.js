ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.implosion_compressor(1, 10)
  .itemIn("4x roll_mod:nether_star_dust")
  .itemIn("1x modern_industrialization:industrial_tnt")
  .itemOut("3x minecraft:nether_star")

  event.recipes.modern_industrialization.implosion_compressor(1, 10)
  .itemIn("64x #c:dusts/lapis_lazuli")
  .itemIn("16x extendedcrafting:luminessence")
  .itemIn("1x roll_mod:energium_battery")
  .itemIn("16x modern_industrialization:industrial_tnt")
  .itemOut("1x roll_mod:lapotron_large_crystal")

  event.recipes.modern_industrialization.implosion_compressor(1, 10)
  .itemIn("4x minecraft:gold_block")
  .itemIn("1x modern_industrialization:industrial_tnt")
  .itemIn("1x minecraft:apple")
  .itemOut("1x minecraft:enchanted_golden_apple")

  event.recipes.modern_industrialization.implosion_compressor(1, 10)
  .itemIn("16x minecraft:gold_block")
  .itemIn("1x modern_industrialization:industrial_tnt")
  .itemIn("1x minecraft:bread")
  .itemOut("1x roll_mod:golden_baton")

  event.recipes.modern_industrialization.implosion_compressor(1, 10)
  .itemIn("1x roll_mod:mixed_cosmic_t2")
  .itemIn("1x modern_industrialization:industrial_tnt")
  .itemOut("3x modern_industrialization:cosmic_alloy_two_ingot")

  event.recipes.modern_industrialization.implosion_compressor(1, 10)
  .itemIn("8x modern_industrialization:ultradense_metal_ball")
  .itemIn("4x modern_industrialization:block_blencium_plate")
  .itemIn("64x modern_industrialization:nuke")
  .itemOut("1x modern_industrialization:singularity")
  
event.recipes.modern_industrialization.implosion_compressor(1, 1024)
.itemIn("16x modern_industrialization:enderium_plate")
.itemIn("8x modern_industrialization:iridium_plate")
.itemIn("4x roll_mod:quantum_star")
.itemIn("4x modern_industrialization:industrial_tnt")
.itemOut("1x megacells:accumulation_processor_press")
})