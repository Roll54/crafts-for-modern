ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.compressor(2, 200)
        .itemIn("1x roll_mod:rubber_ingot")
        .itemOut("2x #c:plates/rubber")

    event.recipes.modern_industrialization.compressor(2, 800)
        .itemIn("5x #c:dusts/diamond")
        .itemOut("2x #c:plates/diamond")

    event.recipes.modern_industrialization.compressor(2, 400)
        .itemIn("1x #c:ingots/ostrum")
        .itemOut("1x #c:plates/ostrum")

    event.recipes.modern_industrialization.compressor(2, 400)
        .itemIn("1x #c:ingots/desh")
        .itemOut("1x #c:plates/desh")

    event.recipes.modern_industrialization.compressor(2, 400)
        .itemIn("1x #c:ingots/calorite")
        .itemOut("1x #c:plates/calorite")
})
