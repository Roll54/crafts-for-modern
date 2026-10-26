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

ServerEvents.generateData('after_mods', event => {
    const model = (name, json) => event.json(`hostilenetworks:data_models/${name}`, json);
    const disabled = { 'neoforge:conditions': [{ type: 'neoforge:false' }] };

    [
        'vindicator',
        'polar_bear',
        'wither',
        'blocks/iron_ore',
        'blocks/copper_ore',
        'blocks/gold_ore',
        'blocks/emerald_ore'
    ].forEach(name => model(name, disabled));

    model('zombie', {
        entity: 'minecraft:zombie',
        variants: ['minecraft:husk', 'minecraft:zombie_villager', 'twilightforest:rising_zombie'],
        name_color: '#3B622F',
        display: {},
        sim_cost: 128,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:overworld_prediction' },
        trivia: 'hostilenetworks.trivia.zombie',
        fabricator_drops: [
            { id: 'minecraft:rotten_flesh', count: 64 },
            { id: 'minecraft:carrot', count: 16 },
            { id: 'minecraft:potato', count: 16 },
            { id: 'reliquary:zombie_heart', optional: true, count: 2 }
        ]
    });

    model('iron_golem', {
        entity: 'minecraft:iron_golem',
        variants: [],
        name_color: '#CFB198',
        display: {},
        sim_cost: 1024,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:overworld_prediction', count: 1 },
        trivia: 'hostilenetworks.trivia.iron_golem',
        fabricator_drops: [
            { id: 'minecraft:poppy', count: 24 }
        ]
    });

    model('drowned', {
        entity: 'minecraft:drowned',
        variants: [],
        name_color: '#3B6269',
        display: { nbt: { HandItems: [{ id: 'minecraft:trident' }, {}] } },
        sim_cost: 128,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:overworld_prediction' },
        trivia: 'hostilenetworks.trivia.drowned',
        fabricator_drops: [
            { id: 'minecraft:rotten_flesh', count: 64 }
        ]
    });

    model('zombified_piglin', {
        entity: 'minecraft:zombified_piglin',
        variants: ['minecraft:piglin'],
        name_color: '#3B992F',
        display: {},
        sim_cost: 256,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:nether_prediction' },
        trivia: 'hostilenetworks.trivia.zombified_piglin',
        fabricator_drops: [
            { id: 'minecraft:rotten_flesh', count: 64 }
        ]
    });

    model('evoker', {
        entity: 'minecraft:evoker',
        variants: [],
        name_color: '#BCA341',
        display: {},
        sim_cost: 1024,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:overworld_prediction', count: 1 },
        trivia: 'hostilenetworks.trivia.evoker',
        fabricator_drops: [
            { id: 'minecraft:totem_of_undying', count: 2 }
        ]
    });

    model('enderman', {
        entity: 'minecraft:enderman',
        variants: [
            'endermanoverhaul:badlands_enderman',
            'endermanoverhaul:cave_enderman',
            'endermanoverhaul:coral_enderman',
            'endermanoverhaul:crimson_forest_enderman',
            'endermanoverhaul:dark_oak_enderman',
            'endermanoverhaul:desert_enderman',
            'endermanoverhaul:end_enderman',
            'endermanoverhaul:end_islands_enderman',
            'endermanoverhaul:flower_fields_enderman',
            'endermanoverhaul:ice_spikes_enderman',
            'endermanoverhaul:mushroom_fields_enderman',
            'endermanoverhaul:nether_wastes_enderman',
            'endermanoverhaul:savanna_enderman',
            'endermanoverhaul:snowy_enderman',
            'endermanoverhaul:soulsand_valley_enderman',
            'endermanoverhaul:swamp_enderman',
            'endermanoverhaul:warped_forest_enderman',
            'endermanoverhaul:windswept_hills_enderman'
        ],
        name_color: '#161616',
        display: { scale: 0.75 },
        sim_cost: 512,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:end_prediction' },
        trivia: 'hostilenetworks.trivia.enderman',
        fabricator_drops: [
            { id: 'minecraft:ender_pearl', count: 16 },
            { id: 'evilcraft:ender_tear', optional: true, count: 4 },
            { id: 'reliquary:nebulous_heart', optional: true, count: 2 }
        ]
    });
});
