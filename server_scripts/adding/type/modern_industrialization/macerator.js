ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.macerator(16, 800)
        .itemIn("1x #c:obsidian")
        .itemOut("1x roll_mod:obsidian_dust")
        .itemOut("1x roll_mod:obsidian_dust", 0.5)

    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn("1x roll_mod:agar_gel")
        .itemOut("1x roll_mod:agar_dust")

    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn("1x #c:clay_balls")
        .itemOut("1x roll_mod:clay_dust")

    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn("1x #c:mushrooms")
        .itemOut("1x #c:dusts/yeast", 0.1)
        .itemOut("1x #c:dusts/yeast", 0.1)
        .itemOut("1x #c:dusts/yeast", 0.1)

    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn("1x #c:foods/berries")
        .itemOut("1x #c:dusts/yeast", 0.1)
        .itemOut("1x #c:dusts/yeast", 0.1)

    event.recipes.modern_industrialization.macerator(32, 200)
        .itemIn("1x #c:nether_stars")
        .itemOut("1x roll_mod:nether_star_dust")

    event.recipes.modern_industrialization.macerator(64, 20)
        .itemIn("4x roll_mod:vanadium_slag_dust")
        .itemOut("1x roll_mod:iron_iii_vanadate")
        .itemOut("1x roll_mod:calcium_metavanadate")
        .itemOut("1x roll_mod:sodium_metavanadate")
        .itemOut("1x roll_mod:vanadium_pentoxide")

    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn("6x roll_mod:sulfur_berry")
        .itemOut("1x #c:dusts/sulfur")
        .itemOut("1x #c:dusts/sulfur", 0.5)

    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn("1x #c:flint")
        .itemOut("1x roll_mod:flint_dust")

    event.recipes.modern_industrialization.macerator(2, 600)
        .itemIn("1x railcraft:quarried_stone")
        .itemOut("2x roll_mod:marble_dust")
        .itemOut("2x roll_mod:calcite_dust")
        .itemOut("2x roll_mod:marble_dust", 0.5)
        .itemOut("2x roll_mod:calcite_dust", 0.5)

    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn("1x #c:calcite")
        .itemOut("4x roll_mod:calcite_dust")
})
