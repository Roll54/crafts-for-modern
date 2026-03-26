ServerEvents.recipes(event => {

  // ===== AE2 PROCESSORS =====

  event.recipes.modern_industrialization.photolithographer(64, 100)
    // catalysts
    .itemIn("1x roll_mod:lapotron_laser", 0.0)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.0)
    .itemIn("1x ae2:calculation_processor_press", 0.0)
    // main
    .itemIn("32x ae2:charged_certus_quartz_crystal")
    .itemIn("16x #c:dusts/redstone")
    .itemIn("32x modern_industrialization:silicon_plate")
    .itemOut("32x ae2:calculation_processor")

  event.recipes.modern_industrialization.photolithographer(64, 100)
    // catalysts
    .itemIn("1x roll_mod:lapotron_laser", 0.0)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.0)
    .itemIn("1x ae2:logic_processor_press", 0.0)
    // main
    .itemIn("32x modern_industrialization:gold_plate")
    .itemIn("16x minecraft:redstone")
    .itemIn("32x modern_industrialization:silicon_plate")
    .itemOut("32x ae2:logic_processor")

  event.recipes.modern_industrialization.photolithographer(64, 100)
    // catalysts
    .itemIn("1x roll_mod:lapotron_laser", 0.0)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.0)
    .itemIn("1x ae2:engineering_processor_press", 0.0)
    // main
    .itemIn("32x modern_industrialization:diamond_plate")
    .itemIn("16x minecraft:redstone")
    .itemIn("32x modern_industrialization:silicon_plate")
    .itemOut("32x ae2:engineering_processor")

  // ===== ACCUMULATION PROCESSORS =====

  event.recipes.modern_industrialization.photolithographer(32, 200)
    // catalysts
    .itemIn("1x roll_mod:lapotron_laser", 0.005)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.0)
    .itemIn("1x roll_mod:quartz_lamp", 0.0)
    // main
    .itemIn("2x ae2:printed_silicon")
    .itemIn("1x ae2:fluix_pearl")
    .itemIn("1x modern_industrialization:niobium_titanium_alloy_fine_wire")
    .itemOut("2x megacells:accumulation_processor")

  event.recipes.modern_industrialization.photolithographer(32, 200)
    // catalysts
    .itemIn("1x roll_mod:lapotron_laser", 0.005)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.0)
    .itemIn("1x megacells:accumulation_processor_press", 0.0)
    // main
    .itemIn("32x ae2:printed_silicon")
    .itemIn("16x ae2:fluix_pearl")
    .itemIn("16x modern_industrialization:niobium_titanium_alloy_fine_wire")
    .itemOut("32x megacells:accumulation_processor")

  // ===== SPATIAL COMPONENTS =====

  event.recipes.modern_industrialization.photolithographer(256, 400)
    // catalysts
    .itemIn("1x roll_mod:lapotron_laser", 0.005)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.005)
    .itemIn("1x roll_mod:quartz_lamp", 0.0)
    // main
    .itemIn("8x roll_mod:purple_chip_qubit")
    .itemIn("8x ae2:fluix_pearl")
    .itemIn("1x ae2:engineering_processor")
    .fluidIn("modern_industrialization:molten_glowstone", 4000)
    .itemOut("1x ae2:spatial_cell_component_2")

  event.recipes.modern_industrialization.photolithographer(256, 400)
    .itemIn("1x roll_mod:lapotron_laser", 0.005)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.005)
    .itemIn("1x roll_mod:quartz_lamp", 0.0)
    .itemIn("4x roll_mod:purple_chip_accumulation")
    .itemIn("4x ae2:spatial_cell_component_2")
    .itemIn("1x ae2:engineering_processor")
    .fluidIn("modern_industrialization:molten_glowstone", 4000)
    .itemOut("1x ae2:spatial_cell_component_16")

  event.recipes.modern_industrialization.photolithographer(256, 400)
    .itemIn("1x roll_mod:lapotron_laser", 0.005)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.005)
    .itemIn("1x roll_mod:quartz_lamp", 0.0)
    .itemIn("12x roll_mod:purple_chip_accumulation")
    .itemIn("4x ae2:spatial_cell_component_16")
    .itemIn("1x ae2:engineering_processor")
    .fluidIn("modern_industrialization:molten_glowstone", 4000)
    .itemOut("1x ae2:spatial_cell_component_128")

  // ===== QUANTUM TECH =====

  event.recipes.modern_industrialization.photolithographer(256, 100)
    .itemIn("2x roll_mod:lapotron_laser", 0.005)
    .itemIn("4x roll_mod:advanced_robot_arm", 0.005)
    .itemIn("1x roll_mod:quartz_lamp", 0.005)
    .itemIn("1x roll_mod:fr4_sheet")
    .itemIn("1x modern_industrialization:tantalum_dust")
    .fluidIn("modern_industrialization:argon", 500)
    .itemOut("1x modern_industrialization:quantum_circuit_board")

  event.recipes.modern_industrialization.photolithographer(256, 200)
    .itemIn("2x roll_mod:lapotron_laser", 0.005)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.005)
    .itemIn("1x roll_mod:quantum_star")
    .itemIn("1x roll_mod:purple_wafer")
    .itemIn("24x roll_mod:carbon_fiber")
    .itemIn("24x modern_industrialization:palladium_fine_wire")
    .itemIn("16x modern_industrialization:phosphorus_dust")
    .itemIn("16x modern_industrialization:antimony_dust")
    .fluidIn("modern_industrialization:argon", 500)
    .itemOut("1x roll_mod:purple_wafer_accumulation")

  event.recipes.modern_industrialization.photolithographer(256, 100)
    .itemIn("2x roll_mod:lapotron_laser", 0.005)
    .itemIn("1x roll_mod:advanced_robot_arm", 0.0)
    .itemIn("1x roll_mod:quartz_lamp", 0.005)
    .itemIn("8x roll_mod:purple_chip_qubit")
    .itemIn("1x modern_industrialization:niobium_titanium_alloy_fine_wire")
    .fluidIn("modern_industrialization:argon", 500)
    .itemOut("4x modern_industrialization:qubit")

  event.recipes.modern_industrialization.photolithographer(32, 200)
    .itemIn("1x roll_mod:lapotron_laser", 0.0)
    .itemIn("4x roll_mod:advanced_robot_arm", 0.005)
    .itemIn("1x roll_mod:quartz_lamp", 0.0)
    .itemIn("8x modern_industrialization:quantum_circuit_board")
    .itemIn("16x modern_industrialization:qubit")
    .itemIn("16x modern_industrialization:cooling_cell")
    .itemIn("16x modern_industrialization:processing_unit")
    .itemOut("8x modern_industrialization:quantum_circuit")

  // ===== MISC =====

  event.recipes.modern_industrialization.photolithographer(64, 300)
    .itemIn("2x roll_mod:lapotron_laser", 0.005)
    .itemIn("2x roll_mod:advanced_robot_arm", 0.005)
    .itemIn("1x roll_mod:quartz_lamp", 0.005)
    .itemIn("4x modern_industrialization:emerald_plate")
    .itemIn("2x modern_industrialization:silicon_n_doped_plate")
    .itemIn("2x modern_industrialization:silicon_p_doped_plate")
    .fluidIn("modern_industrialization:helium", 350)
    .itemOut("4x roll_mod:engraved_crystal_chip")

event.recipes.modern_industrialization.photolithographer(256, 400)
// catalysts
.itemIn("1x roll_mod:lapotron_laser", 0.005)
.itemIn("1x roll_mod:advanced_robot_arm", 0.005)
.itemIn("1x roll_mod:quartz_lamp", 0.0)
// main
.itemIn("1x roll_mod:purple_wafer")
.itemIn("32x modern_industrialization:annealed_copper_fine_wire")
.itemIn("32x modern_industrialization:niobium_titanium_alloy_fine_wire")
.itemIn("16x minecraft:prismarine_shard")
.fluidIn("modern_industrialization:molten_glowstone", 4000)
.fluidIn("modern_industrialization:helium", 1000)
.itemOut("1x roll_mod:purple_wafer_qubit")

})
