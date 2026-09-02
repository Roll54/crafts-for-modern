ServerEvents.recipes(event => {

    const spawnerMods = [
        {
            file: "burning",
            mainhand: "minecraft:blaze_rod",
            stat_changes: [{ type: "apothic_spawners:burning", value: true }]
        },
        {
            file: "echoing",
            mainhand: "extended_industrialization:looting_module",
            stat_changes: [{ type: "apothic_spawners:echoing", value: 1, max: 3 }]
        },
        {
            file: "ignore_conditions",
            mainhand: "modern_industrialization:chrome_vanadium_steel_rotor",
            stat_changes: [{ type: "apothic_spawners:ignore_conditions", value: true }]
        },
        {
            file: "ignore_light",
            mainhand: "ae2:quartz_fixture",
            stat_changes: [{ type: "apothic_spawners:ignore_light", value: true }]
        },
        {
            file: "ignore_players",
            mainhand: "roll_mod:quantum_star",
            stat_changes: [{ type: "apothic_spawners:ignore_players", value: true }]
        },
        {
            file: "initial_health",
            mainhand: "modern_industrialization:aluminum_drill",
            stat_changes: [{ type: "apothic_spawners:initial_health", value: -0.05, min: 0.20 }]
        },
        {
            file: "max_delay",
            mainhand: "roll_mod:magnalium_engine",
            stat_changes: [{ type: "apothic_spawners:max_delay", value: -20, min: 20 }]
        },
        {
            file: "max_nearby",
            mainhand: "modern_industrialization:digital_circuit",
            stat_changes: [{ type: "apothic_spawners:max_nearby_entities", value: 2, max: 32 }]
        },
        {
            file: "min_delay",
            mainhand: "modern_industrialization:advanced_upgrade",
            stat_changes: [{ type: "apothic_spawners:min_delay", value: -10, min: 20 }]
        },
        {
            file: "player_range",
            mainhand: "modern_industrialization:advanced_pump",
            stat_changes: [{ type: "apothic_spawners:req_player_range", value: 4, max: 48 }]
        },
        {
            file: "redstone_control",
            mainhand: "modern_industrialization:redstone_control_module",
            stat_changes: [{ type: "apothic_spawners:redstone_control", value: true }]
        },
        {
            file: "silent",
            mainhand: "#minecraft:wool",
            stat_changes: [{ type: "apothic_spawners:silent", value: true }]
        },
        {
            file: "spawn_count",
            mainhand: "modern_industrialization:turbo_upgrade",
            stat_changes: [{ type: "apothic_spawners:spawn_count", value: 2, max: 16 }]
        },
        {
            file: "spawn_range",
            mainhand: "modern_industrialization:advanced_piston",
            stat_changes: [{ type: "apothic_spawners:spawn_range", value: 2, max: 32 }]
        },
        {
            file: "youthful",
            mainhand: "minecraft:turtle_egg",
            stat_changes: [{ type: "apothic_spawners:youthful", value: true }]
        },
        {
            file: "burning",
            mainhand: "minecraft:blaze_rod",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:burning", value: false }]
        },
        {
            file: "echoing",
            mainhand: "extended_industrialization:looting_module",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:echoing", value: -1, min: 0 }]
        },
        {
            file: "ignore_conditions",
            mainhand: "modern_industrialization:chrome_vanadium_steel_rotor",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_conditions", value: false }]
        },
        {
            file: "ignore_light",
            mainhand: "ae2:quartz_fixture",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_light", value: false }]
        },
        {
            file: "ignore_players",
            mainhand: "roll_mod:quantum_star",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_players", value: false }]
        },
        {
            file: "initial_health",
            mainhand: "modern_industrialization:aluminum_drill",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:initial_health", value: 0.05, max: 1 }]
        },
        {
            file: "max_delay",
            mainhand: "roll_mod:magnalium_engine",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:max_delay", value: 20, max: 1600 }]
        },
        {
            file: "max_nearby",
            mainhand: "modern_industrialization:digital_circuit",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:max_nearby_entities", value: -2, min: 1 }]
        },
        {
            file: "min_delay",
            mainhand: "modern_industrialization:advanced_upgrade",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:min_delay", value: 10, max: 1600 }]
        },
        {
            file: "player_range",
            mainhand: "modern_industrialization:advanced_pump",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:req_player_range", value: -4, min: 1 }]
        },
        {
            file: "redstone_control",
            mainhand: "modern_industrialization:redstone_control_module",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:redstone_control", value: false }]
        },
        {
            file: "spawn_count",
            mainhand: "modern_industrialization:turbo_upgrade",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:spawn_count", value: -2, min: 1 }]
        },
        {
            file: "spawn_range",
            mainhand: "modern_industrialization:advanced_piston",
            offhand: "minecraft:quartz",
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:spawn_range", value: -2, min: 1 }]
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
