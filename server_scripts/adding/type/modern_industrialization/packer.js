ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.packer(2, 100)
        .itemIn("1x #c:ingots/aluminum")
        .itemIn("1x #c:ingots/black_steel")
        .itemIn("2x roll_mod:carbon_mesh")
        .itemOut("1x modern_industrialization:space_alloy_ingot")

    event.recipes.modern_industrialization.packer(16, 100)
        .itemIn("1x #c:plates/diamond")
        .itemIn("1x ae2:engineering_processor_press", 0.0)
        .itemOut("1x ae2:printed_engineering_processor")

    event.recipes.modern_industrialization.packer(16, 100)
        .itemIn("4x #c:gems/certus_quartz")
        .itemIn("1x ae2:calculation_processor_press", 0.0)
        .itemOut("1x ae2:printed_calculation_processor")

    event.recipes.modern_industrialization.packer(16, 100)
        .itemIn("1x #c:plates/gold")
        .itemIn("1x ae2:logic_processor_press", 0.0)
        .itemOut("1x ae2:printed_logic_processor")

    event.recipes.modern_industrialization.packer(16, 100)
        .itemIn("1x #c:plates/silicon")
        .itemIn("1x ae2:silicon_press", 0.0)
        .itemOut("1x ae2:printed_silicon")

    event.recipes.modern_industrialization.packer(16, 100)
        .itemIn("4x extendedae:entro_crystal")
        .itemIn("1x extendedae:concurrent_processor_press", 0.0)
        .itemOut("1x extendedae:concurrent_processor_print")

    event.recipes.modern_industrialization.packer(32, 200)
        .itemIn("1x roll_mod:multi_protecting_gravi_chestplate")
        .itemIn("1x extended_industrialization:nano_chestplate")
        .itemOut("1x extended_industrialization:nano_gravichestplate")
})
