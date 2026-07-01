ServerEvents.recipes(event => {
    const extendedItems = [
        "extendedae:concurrent_processor_print",
        "extendedae:ex_charger",
        "extendedae:ex_inscriber",
        "extendedae:interface_upgrade",
        "extendedae:pattern_provider_upgrade",
        "extendedae:machine_frame",
        "extendedae:ex_drive",
        "extendedae:drive_upgrade",
        "extendedae:infinity_cell",
        "extendedae:crystal_assembler",
        "extendedae:ex_molecular_assembler",
        "extendedae:wireless_tool",
        "extendedae:crystal_fixer",
        "extendedae:assembler_matrix_wall",
        "extendedae:assembler_matrix_glass"
    ];

    const extendedPairs = [
        { input: 'ae2:logic_processor', output: 'extendedae:ex_interface' },
        { input: 'ae2:engineering_processor', output: 'extendedae:ex_pattern_provider' }
    ];

    event.remove({ type: 'extendedae:ex_charger' });
    event.remove({ type: 'extendedae:assebler' });

    extendedItems.forEach(item => {
        event.remove({ output: item });
    });

    extendedPairs.forEach(pair => {
        event.remove({ input: pair.input, output: pair.output });
    });
});
