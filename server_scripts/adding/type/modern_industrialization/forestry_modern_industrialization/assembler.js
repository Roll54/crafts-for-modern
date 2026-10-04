ServerEvents.recipes(event => {
    const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');

    if (IS_FORESTRY_LOADED) {
        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("1x ae2:quartz_glass")
          .itemIn("8x modern_industrialization:cupronickel_wire")
          .itemIn("4x modern_industrialization:platinum_plate")
          .fluidIn("extended_industrialization:blazing_essence", 100)
          .itemOut("1x forestry:blazing_electron_tube")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("1x ae2:quartz_glass")
          .itemIn("8x modern_industrialization:cupronickel_wire")
          .itemIn("8x roll_mod:lapis_lazuli_dust")
          .fluidIn("extended_industrialization:blazing_essence", 100)
          .itemOut("1x forestry:lapis_electron_tube")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("1x ae2:quartz_glass")
          .itemIn("16x modern_industrialization:cupronickel_wire")
          .fluidIn("extended_industrialization:blazing_essence", 100)
          .itemOut("1x forestry:apatite_electron_tube")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("1x ae2:quartz_glass")
          .itemIn("8x modern_industrialization:cupronickel_wire")
          .itemIn("4x modern_industrialization:emerald_plate")
          .itemOut("1x forestry:emerald_electron_tube")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("1x ae2:quartz_glass")
          .itemIn("8x modern_industrialization:cupronickel_wire")
          .itemIn("4x modern_industrialization:diamond_plate")
          .itemOut("1x forestry:diamantine_electron_tube")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("1x ae2:quartz_glass")
          .itemIn("8x modern_industrialization:cupronickel_wire")
          .itemIn("4x modern_industrialization:annealed_copper_plate")
          .itemOut("1x forestry:copper_electron_tube")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("1x ae2:quartz_glass")
          .itemIn("8x modern_industrialization:cupronickel_wire")
          .itemIn("4x modern_industrialization:gold_plate")
          .itemOut("1x forestry:golden_electron_tube")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("4x modern_industrialization:emerald_plate")
          .itemIn("4x modern_industrialization:tin_cable")
          .itemIn("1x modern_industrialization:analog_circuit")
          .itemOut("1x forestry:basic_circuit_board")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("4x modern_industrialization:emerald_plate")
          .itemIn("4x modern_industrialization:copper_cable")
          .itemIn("1x modern_industrialization:electronic_circuit")
          .itemOut("1x forestry:enhanced_circuit_board")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("4x modern_industrialization:emerald_plate")
          .itemIn("4x modern_industrialization:silver_cable")
          .itemIn("1x modern_industrialization:electronic_circuit")
          .itemOut("1x forestry:refined_circuit_board")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("4x modern_industrialization:emerald_plate")
          .itemIn("4x modern_industrialization:kanthal_cable")
          .itemIn("1x modern_industrialization:digital_circuit")
          .itemOut("1x forestry:intricate_circuit_board")

        event.recipes.modern_industrialization.assembler(16, 200)
          .itemIn("4x modern_industrialization:large_advanced_motor")
          .itemIn("4x modern_industrialization:processing_unit")
          .itemIn("16x modern_industrialization:osmiridium_plate")
          .itemIn("6x roll_mod:gravi_engine_mk_1")
          .itemIn("8x roll_mod:carbon_mesh")
          .itemOut("1x forestry:rainmaker")
    }
})
