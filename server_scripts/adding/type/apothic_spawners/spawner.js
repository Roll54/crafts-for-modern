ServerEvents.recipes(event => {

    const spawnerMods = [
        {
            file: "burning",
            mainhand: { item: "minecraft:blaze_rod" },
            stat_changes: [{ type: "apothic_spawners:burning", value: true }]
        },
        {
            file: "echoing",
            mainhand: { item: "extended_industrialization:looting_module" },
            stat_changes: [{ type: "apothic_spawners:echoing", value: 1, max: 3 }]
        },
        {
            file: "ignore_conditions",
            mainhand: { item: "modern_industrialization:chrome_vanadium_steel_rotor" },
            stat_changes: [{ type: "apothic_spawners:ignore_conditions", value: true }]
        },
        {
            file: "ignore_light",
            mainhand: { item: "ae2:quartz_fixture" },
            stat_changes: [{ type: "apothic_spawners:ignore_light", value: true }]
        },
        {
            file: "ignore_players",
            mainhand: { item: "roll_mod:quantum_star" },
            stat_changes: [{ type: "apothic_spawners:ignore_players", value: true }]
        },
        {
            file: "initial_health",
            mainhand: { item: "modern_industrialization:aluminum_drill" },
            stat_changes: [{ type: "apothic_spawners:initial_health", value: -0.05, min: 0.20 }]
        },
        {
            file: "max_delay",
            mainhand: { item: "roll_mod:magnalium_engine" },
            stat_changes: [{ type: "apothic_spawners:max_delay", value: -20, min: 20 }]
        },
        {
            file: "max_nearby",
            mainhand: { item: "modern_industrialization:digital_circuit" },
            stat_changes: [{ type: "apothic_spawners:max_nearby_entities", value: 2, max: 32 }]
        },
        {
            file: "min_delay",
            mainhand: { item: "modern_industrialization:advanced_upgrade" },
            stat_changes: [{ type: "apothic_spawners:min_delay", value: -10, min: 20 }]
        },
        {
            file: "player_range",
            mainhand: { item: "modern_industrialization:advanced_pump" },
            stat_changes: [{ type: "apothic_spawners:req_player_range", value: 4, max: 48 }]
        },
        {
            file: "redstone_control",
            mainhand: { item: "modern_industrialization:redstone_control_module" },
            stat_changes: [{ type: "apothic_spawners:redstone_control", value: true }]
        },
        {
            file: "silent",
            mainhand: { item: "minecraft:white_wool" },
            stat_changes: [{ type: "apothic_spawners:silent", value: true }]
        },
        {
            file: "spawn_count",
            mainhand: { item: "modern_industrialization:turbo_upgrade" },
            stat_changes: [{ type: "apothic_spawners:spawn_count", value: 2, max: 16 }]
        },
        {
            file: "spawn_range",
            mainhand: { item: "modern_industrialization:advanced_piston" },
            stat_changes: [{ type: "apothic_spawners:spawn_range", value: 2, max: 32 }]
        },
        {
            file: "youthful",
            mainhand: { item: "minecraft:turtle_egg" },
            stat_changes: [{ type: "apothic_spawners:youthful", value: true }]
        },
        {
            file: "burning_remove",
            mainhand: { item: "minecraft:blaze_rod" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:burning", value: false }]
        },
        {
            file: "echoing_remove",
            mainhand: { item: "extended_industrialization:looting_module" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:echoing", value: -1, min: 0 }]
        },
        {
            file: "ignore_conditions_remove",
            mainhand: { item: "modern_industrialization:chrome_vanadium_steel_rotor" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_conditions", value: false }]
        },
        {
            file: "ignore_light_remove",
            mainhand: { item: "ae2:quartz_fixture" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_light", value: false }]
        },
        {
            file: "ignore_players_remove",
            mainhand: { item: "roll_mod:quantum_star" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:ignore_players", value: false }]
        },
        {
            file: "initial_health_remove",
            mainhand: { item: "modern_industrialization:aluminum_drill" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:initial_health", value: 0.05, max: 1 }]
        },
        {
            file: "max_delay_remove",
            mainhand: { item: "roll_mod:magnalium_engine" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:max_delay", value: 20, max: 1600 }]
        },
        {
            file: "max_nearby_remove",
            mainhand: { item: "modern_industrialization:digital_circuit" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:max_nearby_entities", value: -2, min: 1 }]
        },
        {
            file: "min_delay_remove",
            mainhand: { item: "modern_industrialization:advanced_upgrade" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:min_delay", value: 10, max: 1600 }]
        },
        {
            file: "player_range_remove",
            mainhand: { item: "modern_industrialization:advanced_pump" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:req_player_range", value: -4, min: 1 }]
        },
        {
            file: "redstone_control_remove",
            mainhand: { item: "modern_industrialization:redstone_control_module" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:redstone_control", value: false }]
        },
        {
            file: "spawn_count_remove",
            mainhand: { item: "modern_industrialization:turbo_upgrade" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:spawn_count", value: -2, min: 1 }]
        },
        {
            file: "spawn_range_remove",
            mainhand: { item: "modern_industrialization:advanced_piston" },
            offhand: { item: "minecraft:quartz" },
            consumes_offhand: false,
            stat_changes: [{ type: "apothic_spawners:spawn_range", value: -2, min: 1 }]
        }
    ];

    spawnerMods.forEach(mod => {
        const recipe = {
            type: "apothic_spawners:spawner_modifier",
            mainhand: mod.mainhand,
            stat_changes: mod.stat_changes
        };

        if (mod.offhand) {
            recipe.offhand = mod.offhand;
            recipe.consumes_offhand = mod.consumes_offhand !== undefined ? mod.consumes_offhand : false;
        }

        event.custom(recipe);
    });

});
