ServerEvents.recipes(event => {

    const spawnerMods = [
        {
            mainhand: "modern_industrialization:advanced_piston",
            stat_changes: [{ type: "apothic_spawners:spawn_range", value: 2, max: 32 }]
        },
        {
            mainhand: "modern_industrialization:advanced_piston",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:spawn_range", value: -2, min: 1 }]
        },
        {
            mainhand: "modern_industrialization:redstone_control_module",
            stat_changes: [{ type: "apothic_spawners:redstone_control", value: true }]
        },
        {
            mainhand: "modern_industrialization:redstone_control_module",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:redstone_control", value: false }]
        },
        {
            mainhand: "ae2:quartz_fixture",
            stat_changes: [{ type: "apothic_spawners:ignore_light", value: true }]
        },
        {
            mainhand: "ae2:quartz_fixture",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_light", value: false }]
        },
        {
            mainhand: "modern_industrialization:aluminum_drill",
            stat_changes: [{ type: "apothic_spawners:initial_health", value: -0.05, min: 0.20 }]
        },
        {
            mainhand: "modern_industrialization:aluminum_drill",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:initial_health", value: 0.05, max: 1 }]
        },
        {
            mainhand: "extended_industrialization:looting_module",
            stat_changes: [{ type: "apothic_spawners:echoing", value: 1, max: 3 }]
        },
        {
            mainhand: "extended_industrialization:looting_module",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:echoing", value: -1, min: 0 }]
        },
        {
            mainhand: "modern_industrialization:advanced_upgrade",
            stat_changes: [{ type: "apothic_spawners:min_delay", value: -10, min: 20 }]
        },
        {
            mainhand: "modern_industrialization:advanced_upgrade",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:min_delay", value: 10, max: 1600 }]
        },
        {
            mainhand: "roll_mod:quantum_star",
            stat_changes: [{ type: "apothic_spawners:ignore_players", value: true }]
        },
        {
            mainhand: "roll_mod:quantum_star",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_players", value: false }]
        },
        {
            mainhand: "modern_industrialization:large_motor",
            stat_changes: [{ type: "apothic_spawners:max_delay", value: -20, min: 20 }]
        },
        {
            mainhand: "modern_industrialization:large_motor",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:max_delay", value: 20, max: 1600 }]
        },
        {
            mainhand: "modern_industrialization:large_pump",
            stat_changes: [{ type: "apothic_spawners:max_nearby_entities", value: 2, max: 32 }]
        },
        {
            mainhand: "modern_industrialization:large_pump",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:max_nearby_entities", value: -2, min: 1 }]
        },
        {
            mainhand: "roll_mod:energium_battery",
            stat_changes: [{ type: "apothic_spawners:spawn_count", value: 2, max: 16 }]
        },
        {
            mainhand: "roll_mod:energium_battery",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:spawn_count", value: -2, min: 1 }]
        },
        {
            mainhand: "modern_industrialization:large_advanced_pump",
            stat_changes: [{ type: "apothic_spawners:req_player_range", value: 4, max: 48 }]
        },
        {
            mainhand: "modern_industrialization:large_advanced_pump",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:req_player_range", value: -4, min: 1 }]
        },
        {
            mainhand: "modern_industrialization:conduit",
            stat_changes: [{ type: "apothic_spawners:ignore_conditions", value: true }]
        },
        {
            mainhand: "modern_industrialization:conduit",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_conditions", value: false }]
        },
        {
            mainhand: "modern_industrialization:advanced_motor",
            stat_changes: [{ type: "apothic_spawners:burning", value: true }]
        },
        {
            mainhand: "modern_industrialization:advanced_motor",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:burning", value: false }]
        }
    ];

    spawnerMods.forEach(mod => {
        const recipe = {
            type: "apothic_spawners:spawner_modifier",
            mainhand: {
                item: mod.mainhand
            },
            stat_changes: mod.stat_changes
        };

        if (mod.offhand) {
            recipe.offhand = {
                item: mod.offhand
            };
            recipe.consumes_offhand = mod.consumes_offhand !== undefined ? mod.consumes_offhand : false;
        }

        event.custom(recipe);
    });

});
