ServerEvents.generateData('after_mods', event => {
    const model = (name, json) => event.json(`hostilenetworks:data_models/${name}`, json);

    model('shulker', {
        entity: 'minecraft:shulker',
        variants: [],
        name_color: '#976797',
        display: {},
        sim_cost: 512,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:end_prediction' },
        trivia: 'hostilenetworks.trivia.shulker',
        fabricator_drops: [
            { id: 'minecraft:shulker_shell', count: 8 },
            { id: 'minecraft:end_rod', count: 4 },
            { id: 'ends_delight:shulker_meat', count: 8 }
        ]
    });

    // Без яйця дракона: delete/hostilenetworks.js прибирає всі його крафти
    model('ender_dragon', {
        entity: 'minecraft:ender_dragon',
        variants: [],
        name_color: '#CC00CC',
        display: { y_offset: 0.5, scale: 0.25 },
        sim_cost: 4096,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:end_prediction' },
        trivia: 'hostilenetworks.trivia.ender_dragon',
        fabricator_drops: [
            { id: 'minecraft:dragon_breath', count: 16 },
            { id: 'ends_delight:dragon_leg', count: 2 },
            { id: 'ends_delight:raw_dragon_meat', count: 16 }
        ],
        data_gained: { faulty: 3, basic: 12, advanced: 30, superior: 45 }
    });

    model('pig', {
        entity: 'minecraft:pig',
        variants: ['twilightforest:boar', 'naturalist:boar'],
        name_color: '#EEA5A4',
        display: {},
        sim_cost: 64,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:overworld_prediction', count: 1 },
        trivia: 'hostilenetworks.trivia.pig',
        fabricator_drops: [
            { id: 'minecraft:porkchop', count: 32 },
            { id: 'farmersdelight:ham', count: 8 },
            { id: 'hexerei:animal_fat', optional: true, count: 16 }
        ]
    });

    model('hoglin', {
        entity: 'minecraft:hoglin',
        variants: ['minecraft:zoglin'],
        name_color: '#E8A074',
        display: {},
        sim_cost: 256,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:nether_prediction', count: 1 },
        trivia: 'hostilenetworks.trivia.hoglin',
        fabricator_drops: [
            { id: 'minecraft:porkchop', count: 32 },
            { id: 'minecraft:leather', count: 16 },
            { id: 'mynethersdelight:hoglin_loin', count: 8 }
        ]
    });

    model('ghast', {
        entity: 'minecraft:ghast',
        variants: ['twilightforest:carminite_ghastguard', 'twilightforest:carminite_ghastling'],
        name_color: '#F0F0F0',
        display: { y_offset: 4.0, scale: 0.25 },
        sim_cost: 256,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:nether_prediction' },
        trivia: 'hostilenetworks.trivia.ghast',
        fabricator_drops: [
            { id: 'minecraft:ghast_tear', count: 16 },
            { id: 'minecraft:gunpowder', count: 32 },
            { id: 'mynethersdelight:ghasta', count: 8 },
            { id: 'reliquary:catalyzing_gland', optional: true, count: 2 }
        ]
    });

    // Кальмар Rustic Delight замість Croptopia
    model('squid', {
        entity: 'minecraft:squid',
        variants: [],
        name_color: '#546D80',
        display: { y_offset: 1.0 },
        sim_cost: 32,
        input: { item: 'hostilenetworks:prediction_matrix' },
        base_drop: { id: 'hostilenetworks:overworld_prediction', count: 1 },
        trivia: 'hostilenetworks.trivia.squid',
        fabricator_drops: [
            { id: 'minecraft:ink_sac', count: 32 },
            { id: 'rusticdelight:calamari', count: 32 },
            { id: 'reliquary:squid_beak', optional: true, count: 2 }
        ]
    });
});
