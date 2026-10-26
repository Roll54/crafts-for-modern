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

    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
    event.remove({ id: "hostile_neural_industrialization:/mono_loot_fabricator/minecraft/enderman/minecraft/end_crystal" })
});
