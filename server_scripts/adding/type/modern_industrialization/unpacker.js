ServerEvents.recipes(event => {
  
  event.recipes.modern_industrialization.unpacker(2, 100)
    .itemIn("1x extended_industrialization:nano_gravichestplate")
    .itemOut("1x extended_industrialization:nano_chestplate")
    .itemOut("1x roll_mod:multi_protecting_gravi_chestplate")

  event.recipes.modern_industrialization.packer(2, 100)
    .itemIn("9x #c:dusts/sulfur")
    .itemIn("1x modern_industrialization:packer_block_template", 0.0)
    .itemOut("1x modern_industrialization:sulfur_block")
  
  event.recipes.modern_industrialization.packer(2, 100)
    .itemIn("9x #c:tiny_dusts/sulfur")
    .itemOut("1x roll_mod:sulfur_dust")
  
})
