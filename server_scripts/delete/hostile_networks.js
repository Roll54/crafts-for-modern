ServerEvents.recipes(event => {
event.remove({ output: "hostilenetworks:prediction_matrix" })
event.remove({ output: "hostilenetworks:loot_fabricator" })
event.remove({ output: "hostilenetworks:sim_chamber" })
event.remove({ output: "hostilenetworks:deep_learner" })
event.remove({ output: "hostilenetworks:blank_data_model" })
event.remove({ output: "hostile_neural_industrialization:mono_loot_fabricator" })
event.remove({ output: "hostile_neural_industrialization:electric_simulation_chamber" })


})