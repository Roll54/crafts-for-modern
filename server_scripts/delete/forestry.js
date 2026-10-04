ServerEvents.recipes(event => {
    const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');

    const removeItems = [
        "functionalstorage_three_drawers:framed_fluid_3",
        "functionalstorage:fluid_4",
        "functionalstorage_three_drawers:fluid_3",
        "functionalstorage:fluid_2",
        "functionalstorage:fluid_1",
        "functionalstorage:framed_fluid_4",
        "functionalstorage:framed_fluid_2",
        "functionalstorage:framed_fluid_1",
        "functionalstorage:dripping_upgrade",
        "functionalstorage:water_generator_upgrade",
        'functionalstorage:obsidian_upgrade',
        'functionalstorage_three_drawers:bamboo_3'
    ];

    if (IS_FORESTRY_LOADED) {
        removeItems.push(
            '64x forestry:worktable',
            '64x forestry:peat_engine',
            '64x forestry:biogas_engine',
            '64x forestry:clockwork_engine',
            '64x forestry:combustion_engine',
            '64x forestry:solar_engine',
            '64x forestry:solar_panel',
            '64x forestry:smelter',
            '64x forestry:carpenter',
            '64x forestry:centrifuge',
            '64x forestry:fermenter',
            '64x forestry:moistener',
            '64x forestry:squeezer',
            '64x forestry:still',
            'forestry:rainmaker',
            'forestry:woven_forester_backpack',
            'forestry:woven_hunter_backpack',
            'forestry:woven_adventurer_backpack',
            'forestry:woven_builder_backpack',
            'forestry:woven_brewer_backpack',
            'forestry:miner_backpack',
            'forestry:digger_backpack',
            'forestry:forester_backpack',
            'forestry:hunter_backpack',
            'forestry:adventurer_backpack',
            'forestry:brewer_backpack',
            'forestry:woven_miner_backpack',
            'forestry:woven_digger_backpack',
            'forestry:builder_backpack',
            'forestry:bronze_ingot'
        );
    }

    removeItems.forEach(item => {
        event.remove({ output: item });
    });
});
