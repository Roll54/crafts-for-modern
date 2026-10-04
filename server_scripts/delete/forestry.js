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
            'forestry:worktable',
            'forestry:peat_engine',
            'forestry:biogas_engine',
            'forestry:clockwork_engine',
            'forestry:combustion_engine',
            'forestry:solar_engine',
            'forestry:solar_panel',
            'forestry:smelter',
            'forestry:carpenter',
            'forestry:centrifuge',
            'forestry:fermenter',
            'forestry:moistener',
            'forestry:squeezer',
            'forestry:still',
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
