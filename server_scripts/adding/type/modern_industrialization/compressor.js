ServerEvents.recipes(event => {
  
  event.recipes.modern_industrialization.compressor(2, 200)
  .itemIn("1x roll_mod:rubber_ingot")
  .itemOut("2x modern_industrialization:rubber_sheet")

  event.recipes.modern_industrialization.compressor(2, 800)
  .itemIn("5x modern_industrialization:diamond_dust")
  .itemOut("2x modern_industrialization:diamond_plate")

  event.recipes.modern_industrialization.compressor(2, 400)
    .itemIn("ad_astra:ostrum_ingot")
    .itemOut("ad_astra:ostrum_plate")

  event.recipes.modern_industrialization.compressor(2, 400)
    .itemIn("ad_astra:desh_ingot")
    .itemOut("ad_astra:desh_plate")

  event.recipes.modern_industrialization.compressor(2, 400)
    .itemIn("ad_astra:calorite_ingot")
    .itemOut("ad_astra:calorite_plate")

  /* Tech Reborn
  event.recipes.modern_industrialization.compressor(32, 800)
  .itemIn("8x kubejs:energium_dust")
  .itemOut("1x kubejs:energium_tiny_crystal")
  */
})
