ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.blast_furnace(8, 100)
        .itemIn("1x #c:dusts/electrum")
        .itemOut("1x #c:ingots/electrum")

    event.recipes.modern_industrialization.blast_furnace(64, 200)
        .itemIn("1x #c:dusts/stainless_steel")
        .itemOut("1x #c:ingots/stainless_steel")

    event.recipes.modern_industrialization.blast_furnace(64, 400)
        .itemIn("1x #c:dusts/palladium")
        .itemOut("1x #c:ingots/palladium")

    event.recipes.modern_industrialization.blast_furnace(64, 200)
        .itemIn("1x #c:dusts/ruthenium")
        .itemOut("1x #c:ingots/ruthenium")

    event.recipes.modern_industrialization.blast_furnace(256, 100)
        .itemIn("1x #c:dusts/rhodium")
        .itemOut("1x modern_industrialization:rhodium_hot_ingot")

    event.recipes.modern_industrialization.blast_furnace(64, 200)
        .itemIn("1x modern_industrialization:sunnarium_dust")
        .fluidIn("modern_industrialization:helium", 500)
        .itemOut("1x modern_industrialization:sunnarium_ingot")

    event.recipes.modern_industrialization.blast_furnace(4, 100)
        .itemIn("1x #c:dusts/redstone")
        .fluidOut("modern_industrialization:molten_redstone", 90)

    event.recipes.modern_industrialization.blast_furnace(4, 1200)
        .itemIn("1x #c:storage_blocks/soldering_alloy")
        .fluidOut("modern_industrialization:soldering_alloy", 1000)

    event.recipes.modern_industrialization.blast_furnace(96, 100)
        .itemIn("1x #c:dusts/glowstone")
        .itemIn("1x roll_mod:1_circuit", 0.0)
        .fluidOut("modern_industrialization:molten_glowstone", 250)

    event.recipes.modern_industrialization.blast_furnace(96, 300)
        .itemIn("1x #c:glowstone")
        .itemIn("1x roll_mod:1_circuit", 0.0)
        .fluidOut("modern_industrialization:molten_glowstone", 1000)

    event.recipes.modern_industrialization.blast_furnace(4, 1200)
        .itemIn("1x #c:redstone_blocks")
        .fluidOut("modern_industrialization:molten_redstone", 1000)

    event.recipes.modern_industrialization.blast_furnace(256, 800)
        .itemIn("1x #c:dusts/rhodium_plated_palladium")
        .itemOut("1x modern_industrialization:rhodium_plated_palladium_hot_ingot")

    event.recipes.modern_industrialization.blast_furnace(128, 200)
        .itemIn("1x #c:dusts/chrome_vanadium_steel")
        .itemOut("1x modern_industrialization:chrome_vanadium_steel_hot_ingot")

    event.recipes.modern_industrialization.blast_furnace(512, 200)
        .itemIn("1x #c:dusts/osmiridium")
        .itemOut("1x modern_industrialization:osmiridium_hot_ingot")

    event.recipes.modern_industrialization.blast_furnace(256, 200)
        .itemIn("1x #c:dusts/niobium_titanium_alloy")
        .itemOut("1x modern_industrialization:niobium_titanium_alloy_hot_ingot")

    event.recipes.modern_industrialization.blast_furnace(512, 200)
        .itemIn("1x #c:dusts/titanium_64")
        .itemOut("1x modern_industrialization:titanium_64_hot_ingot")

    event.recipes.modern_industrialization.blast_furnace(128, 1200)
        .itemIn("4x #c:wires/tungsten")
        .itemIn("4x #c:dusts/titanium")
        .itemOut("4x #c:cables/tungsten")

    event.recipes.modern_industrialization.blast_furnace(256, 200)
        .itemIn("1x #c:dusts/incoloy")
        .itemOut("1x modern_industrialization:incoloy_hot_ingot")

    event.recipes.modern_industrialization.blast_furnace(2, 120)
        .itemIn("5x roll_mod:sulfur_saltpeter_mixture")
        .fluidIn("minecraft:water", 1000)
        .fluidOut("modern_industrialization:sulfuric_acid", 1000)

    event.recipes.modern_industrialization.blast_furnace(64, 400)
        .itemIn("10x roll_mod:ilmenite_dust")
        .itemIn("4x #c:dusts/carbon")
        .itemOut("6x roll_mod:rutile_iron")

    event.recipes.modern_industrialization.blast_furnace(128, 400)
        .itemIn("2x #c:dusts/magnesium")
        .itemOut("1x modern_industrialization:titanium_hot_ingot")
        .fluidIn("modern_industrialization:titanium_tetrachloride", 1000)
        .fluidOut("modern_industrialization:magnesium_chloride", 1500)

    event.recipes.modern_industrialization.blast_furnace(512, 500)
        .itemIn("2x #c:raw_materials/tantalum")
        .itemIn("10x #c:dusts/carbon")
        .fluidIn("modern_industrialization:sulfuric_acid", 1000)
        .fluidOut("modern_industrialization:molten_rhenium", 50)

    event.recipes.modern_industrialization.blast_furnace(512, 500)
        .itemIn("1x #c:raw_materials/tungsten")
        .itemIn("10x #c:dusts/carbon")
        .fluidIn("modern_industrialization:sulfuric_acid", 1000)
        .fluidOut("modern_industrialization:molten_rhenium", 50)

    event.recipes.modern_industrialization.blast_furnace(96, 100)
        .itemIn("1x #c:ancient_debris")
        .itemOut("6x #c:netherite_scraps")
        .itemOut("6x #c:netherite_scraps", 0.5)

    event.recipes.modern_industrialization.blast_furnace(128, 100)
        .itemIn("1x #c:dusts/magnalium")
        .itemOut("1x #c:ingots/magnalium")

    event.recipes.modern_industrialization.blast_furnace(128, 20)
        .itemIn("2x roll_mod:vanadium_magnetite_dust")
        .itemOut("3x roll_mod:vanadium_slag_dust")

    event.recipes.modern_industrialization.blast_furnace(32, 200)
        .itemIn("7x roll_mod:tungstic_acid_dust")
        .itemOut("4x roll_mod:tungsten_trioxide")

    event.recipes.modern_industrialization.blast_furnace(128, 800)
        .itemIn("4x roll_mod:tungsten_trioxide")
        .fluidIn("modern_industrialization:hydrogen", 6000)
        .itemOut("1x #c:ingots/tungsten")

    event.recipes.modern_industrialization.blast_furnace(32, 100)
        .itemIn("4x #c:dusts/quartz")
        .itemIn("3x roll_mod:sodium_carbonate")
        .itemOut("3x ae2:quartz_glass")

    event.recipes.modern_industrialization.blast_furnace(64, 100)
        .itemIn("4x ae2:quartz_glass")
        .itemIn("12x ae2:fluix_dust")
        .itemOut("4x ae2:quartz_vibrant_glass")

    event.recipes.modern_industrialization.blast_furnace(8, 100)
        .itemIn("1x #c:sands")
        .itemIn("1x roll_mod:sodium_carbonate")
        .itemOut("5x #c:glass_blocks")

    event.recipes.modern_industrialization.blast_furnace(32, 100)
        .itemIn("8x #c:glass_blocks")
        .itemIn("4x #c:dusts/certus_quartz")
        .itemOut("5x ae2:quartz_fiber")

    event.recipes.modern_industrialization.blast_furnace(8, 100)
        .itemIn("4x #c:dusts/lapis")
        .itemIn("1x #c:ingots/silver")
        .itemOut("2x silentgear:azure_electrum_ingot")

    event.recipes.modern_industrialization.blast_furnace(48, 100)
        .itemIn("1x roll_mod:energium_dust")
        .fluidOut("modern_industrialization:molten_energium", 50)

    event.recipes.modern_industrialization.blast_furnace(48, 100)
        .itemIn("1x #c:dusts/enderium")
        .fluidIn("extended_industrialization:blazing_essence", 60)
        .itemOut("1x #c:ingots/enderium")

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

    event.recipes.modern_industrialization.blast_furnace(48, 16000)
        .itemIn("64x #c:dusts/lazurite")
        .fluidIn("6000x modern_industrialization:nitrogen")
        .itemOut("1x roll_mod:light_blue_lens")

    event.recipes.modern_industrialization.blast_furnace(128, 200)
        .itemIn("64x #c:ingots/silicon")
        .itemIn("1x #c:quartz")
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
        .itemIn("64x #c:sugar")
        .itemIn("16x #c:ingots/plutonium")
        .itemOut("1x roll_mod:very_nutritious_candy")

    event.recipes.modern_industrialization.blast_furnace(128, 200)
        .itemIn("4x roll_mod:alumina_dust")
        .itemOut("1x roll_mod:alumina_ceramic_plate")

    event.recipes.modern_industrialization.blast_furnace(128, 100)
        .itemIn("64x roll_mod:nether_star_dust")
        .fluidIn("8000x extended_industrialization:blazing_essence")
        .itemOut("1x roll_mod:pale_lens")

    event.recipes.modern_industrialization.blast_furnace(128, 60)
        .itemIn("2x #c:dusts/carbon")
        .itemIn("3x roll_mod:flint_dust")
        .itemOut("1x #c:dusts/silicon")
        .fluidOut("modern_industrialization:carbon_dioxide", 4000)
})
