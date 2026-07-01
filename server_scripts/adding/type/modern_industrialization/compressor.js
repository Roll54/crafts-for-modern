ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.compressor(2, 200)
        .itemIn("1x roll_mod:rubber_ingot")
        .itemOut("2x modern_industrialization:rubber_sheet")

    event.recipes.modern_industrialization.compressor(2, 800)
        .itemIn("5x #c:dusts/diamond")
        .itemOut("2x modern_industrialization:diamond_plate")

    event.recipes.modern_industrialization.compressor(2, 400)
        .itemIn("1x #c:ingots/ostrum")
        .itemOut("1x ad_astra:ostrum_plate")

    event.recipes.modern_industrialization.compressor(2, 400)
        .itemIn("1x #c:ingots/desh")
        .itemOut("1x ad_astra:desh_plate")

    event.recipes.modern_industrialization.compressor(2, 400)
        .itemIn("1x #c:ingots/calorite")
        .itemOut("1x ad_astra:calorite_plate")
})
