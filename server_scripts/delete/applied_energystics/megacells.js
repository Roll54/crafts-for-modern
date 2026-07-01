ServerEvents.recipes(event => {
    const megaItems = [
        "megacells:sky_steel_ingot",
        "megacells:sky_steel_block",
        "megacells:accumulation_processor_press",
        "megacells:printed_accumulation_processor",
        "megacells:accumulation_processor",
        "megacells:mega_interface",
        "megacells:mega_pattern_provider",
        "megacells:mega_item_cell_housing",
        "megacells:mega_fluid_cell_housing",
        "megacells:cell_component_1m",
        "megacells:cell_component_4m",
        "megacells:cell_component_16m",
        "megacells:cell_component_64m",
        "megacells:cell_component_256m",
        "megacells:bulk_cell_component",
        "megacells:bulk_item_cell"
    ];

    const megaPairs = [
        { input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_1m' },
        { input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_4m' },
        { input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_16m' },
        { input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_64m' },
        { input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_256m' },
        { input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_1m' },
        { input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_4m' },
        { input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_16m' },
        { input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_64m' },
        { input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_256m' }
    ];

    megaItems.forEach(item => {
        event.remove({ output: item });
    });

    megaPairs.forEach(pair => {
        event.remove({ input: pair.input, output: pair.output });
    });
});
