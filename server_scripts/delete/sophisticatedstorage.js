ServerEvents.recipes(event => {
    const itemsToRemove = [
        "sophisticatedstorage:advanced_compacting_upgrade",
        "sophisticatedstorage:advanced_feeding_upgrade",
        "sophisticatedstorage:advanced_filter_upgrade",
        "sophisticatedstorage:advanced_jukebox_upgrade",
        "sophisticatedstorage:advanced_magnet_upgrade",
        "sophisticatedstorage:advanced_pickup_upgrade",
        "sophisticatedstorage:advanced_pump_upgrade",
        "sophisticatedstorage:auto_blasting_upgrade",
        "sophisticatedstorage:auto_smelting_upgrade",
        "sophisticatedstorage:auto_smoking_upgrade",
        "sophisticatedstorage:blasting_upgrade",
        "sophisticatedstorage:compression_upgrade",
        "sophisticatedstorage:crafting_upgrade",
        "sophisticatedstorage:xp_pump_upgrade",
        "sophisticatedstorage:feeding_upgrade",
        "sophisticatedstorage:filter_upgrade",
        "sophisticatedstorage:jukebox_upgrade",
        "sophisticatedstorage:magnet_upgrade",
        "sophisticatedstorage:pickup_upgrade",
        "sophisticatedstorage:pump_upgrade",
        "sophisticatedstorage:smelting_upgrade",
        "sophisticatedstorage:smoking_upgrade",
        "sophisticatedstorage:stonecutter_upgrade",
        "sophisticatedstorage:infinity_upgrade",
        "sophisticatedstorage:survival_infinity_upgrade",
        "sophisticatedstorage:alchemy_upgrade",
        "sophisticatedstorage:advanced_alchemy_upgrade",
        "sophisticatedstorage:hopper_upgrade",
        "sophisticatedstorage:advanced_hopper_upgrade",
        "sophisticatedstorage:chipped/carpenters_table_upgrade",
        "sophisticatedstorage:chipped/loom_table_upgrade",
        "sophisticatedstorage:chipped/mason_table_upgrade",
        "sophisticatedstorage:chipped/alchemy_bench_upgrade",
        "sophisticatedstorage:chipped/glassblower_upgrade",
        "sophisticatedstorage:chipped/botanist_workbench_upgrade",
        "sophisticatedstorage:chipped/tinkering_table_upgrade"
    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });
});
