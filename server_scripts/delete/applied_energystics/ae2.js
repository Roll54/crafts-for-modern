ServerEvents.recipes(event => {
    const baseItems = [
        "ae2:silicon",
        "ae2:sky_dust",
        "ae2:quartz_glass",
        "ae2:quartz_vibrant_glass",
        "ae2:cable_anchor",
        "ae2:quartz_fiber",
        "ae2:printed_silicon",
        "ae2:printed_logic_processor",
        "ae2:printed_engineering_processor",
        "ae2:printed_calculation_processor",
        "ae2:item_cell_housing",
        "ae2:fluid_cell_housing",
        "ae2:cell_component_1k",
        "ae2:cell_component_4k",
        "ae2:cell_component_16k",
        "ae2:cell_component_64k",
        "ae2:cell_component_256k",
        "ae2:spatial_cell_component_2",
        "ae2:spatial_cell_component_16",
        "ae2:spatial_cell_component_128",
        "ae2:tiny_tnt",
        "ae2:crank",
        "ae2:charged_staff",
        "ae2:entropy_manipulator",
        "ae2:matter_cannon",
        "ae2:sky_stone_tank",
        "ae2:quartz_fixture",
        "ae2:crystal_resonance_generator",
        "ae2:vibration_chamber",
        "ae2:charger",
        "ae2:inscriber",
        "ae2:cell_workbench",
        "ae2:wireless_receiver",
        "ae2:wireless_access_point",
        "ae2:spatial_anchor",
        "ae2:spatial_pylon",
        "ae2:energy_cell",
        "ae2:basic_card",
        "ae2:advanced_card",
        "ae2:wireless_booster",
        "ae2:spatial_io_port",
        "ae2:molecular_assembler",
        "ae2:formation_core",
        "ae2:annihilation_core",
        "ae2:formation_plane",
        "ae2:annihilation_plane",
        "ae2:me_p2p_tunnel",
        "ae2:blank_pattern",
        "ae2:drive",
        "ae2:memory_card",
        "ae2:chest",
        "ae2:crafting_unit",
        "ae2:io_port",
        "ae2:growth_accelerator",
        "ae2:condenser",
        "ae2:quantum_ring",
        "ae2:quantum_link",
        "ae2:controller"
    ];

    const basePairs = [
        { input: 'ae2:fluix_glass_cable', output: 'ae2:fluix_covered_cable' },
        { input: 'ae2:fluix_covered_dense_cable', output: 'ae2:fluix_smart_dense_cable' },
        { input: 'minecraft:redstone', output: 'ae2:fluix_smart_cable' },
        { input: 'minecraft:iron_ingot', output: 'ae2:view_cell' },
        { input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_1k' },
        { input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_4k' },
        { input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_16k' },
        { input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_64k' },
        { input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_256k' },
        { input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_1k' },
        { input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_4k' },
        { input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_16k' },
        { input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_64k' },
        { input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_256k' },
        { input: 'minecraft:iron_ingot', output: 'ae2:spatial_storage_cell_2' },
        { input: 'minecraft:iron_ingot', output: 'ae2:spatial_storage_cell_16' },
        { input: 'minecraft:iron_ingot', output: 'ae2:spatial_storage_cell_128' },
        { input: 'minecraft:iron_ingot', output: 'ae2:pattern_provider' },
        { input: 'minecraft:copper_ingot', output: 'ae2:energy_acceptor' },
        { input: 'ae2:quartz_fiber', output: 'ae2:fluix_glass_cable' }
    ];

    event.remove({ type: 'ae2:charger' });
    event.remove({ type: 'ae2:inscriber' });
    event.remove({ output: '#ae2:knife' });

    baseItems.forEach(item => {
        event.remove({ output: item });
    });

    basePairs.forEach(pair => {
        event.remove({ input: pair.input, output: pair.output });
    });
});
