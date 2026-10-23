ServerEvents.recipes(event => {
    const itemsToRemove = [
      "hostilenetworks:data_center_io_port",
      'hostilenetworks:sim_chamber',
      'hostilenetworks:loot_fabricator',
      'hostilenetworks:data_center',
      'hostilenetworks:deep_learner',
      'hostilenetworks:blank_data_model',
      'hostilenetworks:prediction_matrix'
    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });
});
