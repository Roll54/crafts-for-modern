ServerEvents.recipes(event => {
    const itemsToRemove = [
        "hostilenetworks:data_center_io_port",
        'hostilenetworks:sim_chamber',
        'hostilenetworks:loot_fabricator',
        'hostilenetworks:data_center',
        'hostilenetworks:deep_learner',
        'hostilenetworks:blank_data_model',
        'hostilenetworks:prediction_matrix',
        'hostile_neural_industrialization:electric_simulation_chamber',
        'hostile_neural_industrialization:large_loot_fabricator',
        'hostile_neural_industrialization:large_simulation_chamber',
        'hostile_neural_industrialization:mono_loot_fabricator',
        'hostile_neural_industrialization:prediction_machine_casing',
        'hostilenetworks:overworld_prediction',
        'hostilenetworks:nether_prediction',
        'hostilenetworks:end_prediction',
        'minecraft:wither_skeleton_skull',
        'minecraft:dragon_egg'
    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });

    const predictions = [
        'hostilenetworks:overworld_prediction',
        'hostilenetworks:nether_prediction',
        'hostilenetworks:end_prediction'
    ];

    predictions.forEach(item => {
        event.remove({ input: item });
    });
});

// Рецепти симуляційної камери й фабрикатора HNI генеруються з моделей даних
// Hostile Networks, тому event.remove їх не бачить. Міняємо самі моделі.
ServerEvents.generateData('after_mods', event => {
    const model = (name, data) => event.json(`hostilenetworks:data_models/${name}`, data);

    // Повністю прибрані моделі
    [
        'vindicator',
        'polar_bear',
        'wither',
        'iron_golem',
        'blocks/iron_ore',
        'blocks/copper_ore',
        'blocks/gold_ore',
        'blocks/emerald_ore'
    ].forEach(name => model(name, { 'neoforge:conditions': [{ type: 'neoforge:false' }] }));

    // Що прибрати з дропу фабрикатора
    const removeDrops = {
        'zombie': ['minecraft:iron_ingot'],
        'drowned': ['minecraft:copper_ingot'],
        'zombified_piglin': ['minecraft:gold_ingot'],
        'evoker': ['minecraft:emerald'],
        'enderman': ['minecraft:end_crystal'],
        'ender_dragon': ['minecraft:dragon_egg'],
        'wither_skeleton': ['minecraft:wither_skeleton_skull'],
        'squid': ['croptopia:calamari'],
        'glow_squid': ['croptopia:glowing_calamari']
    };

    // Що додати в дроп фабрикатора
    const addDrops = {
        'shulker': [{ id: 'ends_delight:shulker_meat', count: 8 }],
        'ender_dragon': [{ id: 'ends_delight:dragon_leg', count: 2 }, { id: 'ends_delight:raw_dragon_meat', count: 16 }],
        'pig': [{ id: 'farmersdelight:ham', count: 8 }],
        'hoglin': [{ id: 'mynethersdelight:hoglin_loin', count: 8 }],
        'ghast': [{ id: 'mynethersdelight:ghasta', count: 8 }],
        'squid': [{ id: 'rusticdelight:calamari', count: 32 }],
        'glow_squid': [{ id: 'rusticdelight:calamari', count: 32 }]
    };

    // Оригінальні моделі Hostile Networks 6.5.1, у яких міняється дроп
    const models = {
        'zombie': {"entity":"minecraft:zombie","variants":["minecraft:husk","minecraft:zombie_villager","twilightforest:rising_zombie"],"name_color":"#3B622F","display":{},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:overworld_prediction"},"trivia":"hostilenetworks.trivia.zombie","fabricator_drops":[{"id":"minecraft:rotten_flesh","count":64},{"id":"minecraft:iron_ingot","count":8},{"id":"minecraft:carrot","count":16},{"id":"minecraft:potato","count":16},{"id":"reliquary:zombie_heart","optional":true,"count":2}]},
        'drowned': {"entity":"minecraft:drowned","variants":[],"name_color":"#3B6269","display":{"nbt":{"HandItems":[{"id":"minecraft:trident"},{}]}},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:overworld_prediction"},"trivia":"hostilenetworks.trivia.drowned","fabricator_drops":[{"id":"minecraft:rotten_flesh","count":64},{"id":"minecraft:copper_ingot","count":8}]},
        'zombified_piglin': {"entity":"minecraft:zombified_piglin","variants":["minecraft:piglin"],"name_color":"#3B992F","display":{},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:nether_prediction"},"trivia":"hostilenetworks.trivia.zombified_piglin","fabricator_drops":[{"id":"minecraft:rotten_flesh","count":64},{"id":"minecraft:gold_ingot","count":8}]},
        'evoker': {"entity":"minecraft:evoker","variants":[],"name_color":"#BCA341","display":{},"sim_cost":1024,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:overworld_prediction","count":1},"trivia":"hostilenetworks.trivia.evoker","fabricator_drops":[{"id":"minecraft:totem_of_undying","count":2},{"id":"minecraft:emerald","count":16}]},
        'enderman': {"entity":"minecraft:enderman","variants":["endermanoverhaul:badlands_enderman","endermanoverhaul:cave_enderman","endermanoverhaul:coral_enderman","endermanoverhaul:crimson_forest_enderman","endermanoverhaul:dark_oak_enderman","endermanoverhaul:desert_enderman","endermanoverhaul:end_enderman","endermanoverhaul:end_islands_enderman","endermanoverhaul:flower_fields_enderman","endermanoverhaul:ice_spikes_enderman","endermanoverhaul:mushroom_fields_enderman","endermanoverhaul:nether_wastes_enderman","endermanoverhaul:savanna_enderman","endermanoverhaul:snowy_enderman","endermanoverhaul:soulsand_valley_enderman","endermanoverhaul:swamp_enderman","endermanoverhaul:warped_forest_enderman","endermanoverhaul:windswept_hills_enderman"],"name_color":"#161616","display":{"scale":0.75},"sim_cost":512,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:end_prediction"},"trivia":"hostilenetworks.trivia.enderman","fabricator_drops":[{"id":"minecraft:ender_pearl","count":16},{"id":"minecraft:end_crystal","count":1},{"id":"evilcraft:ender_tear","optional":true,"count":4},{"id":"reliquary:nebulous_heart","optional":true,"count":2}]},
        'ender_dragon': {"entity":"minecraft:ender_dragon","variants":[],"name_color":"#CC00CC","display":{"y_offset":0.5,"scale":0.25},"sim_cost":4096,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:end_prediction"},"trivia":"hostilenetworks.trivia.ender_dragon","fabricator_drops":[{"id":"minecraft:dragon_breath","count":16},{"id":"minecraft:dragon_egg","count":1}],"data_gained":{"faulty":3,"basic":12,"advanced":30,"superior":45}},
        'wither_skeleton': {"entity":"minecraft:wither_skeleton","variants":[],"name_color":"#343434","display":{"scale":0.85},"sim_cost":768,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:nether_prediction"},"trivia":"hostilenetworks.trivia.wither_skeleton","fabricator_drops":[{"id":"wstweaks:fragment","optional":true,"count":32},{"id":"minecraft:bone","count":24},{"id":"minecraft:coal","count":32},{"id":"minecraft:wither_skeleton_skull","count":3},{"id":"reliquary:withered_rib","optional":true,"count":2}]},
        'squid': {"entity":"minecraft:squid","variants":[],"name_color":"#546D80","display":{"y_offset":1.0},"sim_cost":32,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:overworld_prediction","count":1},"trivia":"hostilenetworks.trivia.squid","fabricator_drops":[{"id":"minecraft:ink_sac","count":32},{"id":"croptopia:calamari","optional":true,"count":32},{"id":"reliquary:squid_beak","optional":true,"count":2}]},
        'glow_squid': {"entity":"minecraft:glow_squid","variants":[],"name_color":"#32A1A1","display":{"y_offset":1.0},"sim_cost":32,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:overworld_prediction","count":1},"trivia":"hostilenetworks.trivia.glow_squid","fabricator_drops":[{"id":"croptopia:glowing_calamari","optional":true,"count":32},{"id":"minecraft:glow_ink_sac","count":32}]},
        'shulker': {"entity":"minecraft:shulker","variants":[],"name_color":"#976797","display":{},"sim_cost":512,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:end_prediction"},"trivia":"hostilenetworks.trivia.shulker","fabricator_drops":[{"id":"minecraft:shulker_shell","count":8},{"id":"minecraft:end_rod","count":4}]},
        'pig': {"entity":"minecraft:pig","variants":["twilightforest:boar","naturalist:boar"],"name_color":"#EEA5A4","display":{},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:overworld_prediction","count":1},"trivia":"hostilenetworks.trivia.pig","fabricator_drops":[{"id":"minecraft:porkchop","count":32},{"id":"hexerei:animal_fat","optional":true,"count":16}]},
        'hoglin': {"entity":"minecraft:hoglin","variants":["minecraft:zoglin"],"name_color":"#E8A074","display":{},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:nether_prediction","count":1},"trivia":"hostilenetworks.trivia.hoglin","fabricator_drops":[{"id":"minecraft:porkchop","count":32},{"id":"minecraft:leather","count":16}]},
        'ghast': {"entity":"minecraft:ghast","variants":["twilightforest:carminite_ghastguard","twilightforest:carminite_ghastling"],"name_color":"#F0F0F0","display":{"y_offset":4.0,"scale":0.25},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"base_drop":{"id":"hostilenetworks:nether_prediction"},"trivia":"hostilenetworks.trivia.ghast","fabricator_drops":[{"id":"minecraft:ghast_tear","count":16},{"id":"minecraft:gunpowder","count":32},{"id":"reliquary:catalyzing_gland","optional":true,"count":2}]}
    };

    Object.keys(models).forEach(name => {
        const data = models[name];
        const removed = removeDrops[name] || [];
        data.fabricator_drops = data.fabricator_drops
            .filter(drop => removed.indexOf(drop.id) == -1)
            .concat(addDrops[name] || []);
        model(name, data);
    });
});
