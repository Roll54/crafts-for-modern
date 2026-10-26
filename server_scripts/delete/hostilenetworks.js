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

    // Оригінальні моделі Hostile Networks 6.5.1 з узагальненим передбаченням (без base_drop)
    const models = {
        'allthemodium/piglich': {"neoforge:conditions":[{"type":"neoforge:mod_loaded","modid":"allthemodium"}],"entity":"allthemodium:piglich","variants":[],"name_color":"#D3D3D3","display":{"scale":0.85},"sim_cost":16384,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.piglich","fabricator_drops":[{"id":"allthemodium:piglich_heart","count":4}]},
        'ars_nouveau/wilden_mobs': {"neoforge:conditions":[{"type":"neoforge:mod_loaded","modid":"ars_nouveau"}],"entity":"ars_nouveau:wilden_hunter","variants":["ars_nouveau:wilden_stalker","ars_nouveau:wilden_guardian"],"name":{"translate":"name.hostilenetworks.ars_wilden"},"name_color":"#55FF55","display":{},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.ars_wilden","fabricator_drops":[{"id":"ars_nouveau:wilden_spike","count":16},{"id":"ars_nouveau:wilden_wing","count":16},{"id":"ars_nouveau:wilden_horn","count":16}]},
        'artifacts/mimic': {"neoforge:conditions":[{"type":"neoforge:mod_loaded","modid":"artifacts"}],"entity":"artifacts:mimic","variants":[],"name_color":"#55FF55","display":{},"sim_cost":2560,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.mimic","fabricator_drops":[{"id":"artifacts:steadfast_spikes","count":1},{"id":"artifacts:shock_pendant","count":1},{"id":"artifacts:crystal_heart","count":1},{"id":"artifacts:superstitious_hat","count":1},{"id":"artifacts:power_glove","count":1},{"id":"artifacts:night_vision_goggles","count":1},{"id":"artifacts:kitty_slippers","count":1},{"id":"artifacts:flame_pendant","count":1},{"id":"artifacts:charm_of_sinking","count":1},{"id":"artifacts:villager_hat","count":1},{"id":"artifacts:lucky_scarf","count":1},{"id":"artifacts:fire_gauntlet","count":1},{"id":"artifacts:feral_claws","count":1},{"id":"artifacts:cloud_in_a_bottle","count":1},{"id":"artifacts:aqua_dashers","count":1},{"id":"artifacts:scarf_of_invisibility","count":1},{"id":"artifacts:thorn_pendant","count":1},{"id":"artifacts:pocket_piston","count":1},{"id":"artifacts:obsidian_skull","count":1},{"id":"artifacts:antidote_vessel","count":1},{"id":"artifacts:flippers","count":1},{"id":"artifacts:panic_necklace","count":1},{"id":"artifacts:digging_claws","count":1},{"id":"artifacts:bunny_hoppers","count":1},{"id":"artifacts:universal_attractor","count":1},{"id":"artifacts:whoopee_cushion","count":1},{"id":"artifacts:golden_hook","count":1},{"id":"artifacts:cross_necklace","count":1},{"id":"artifacts:vampiric_glove","count":1},{"id":"artifacts:snorkel","count":1},{"id":"artifacts:running_shoes","count":1},{"id":"artifacts:plastic_drinking_hat","count":1},{"id":"artifacts:helium_flamingo","count":1},{"id":"artifacts:novelty_drinking_hat","count":1},{"id":"artifacts:everlasting_beef","count":1},{"id":"artifacts:umbrella","count":1}],"tier_data":{"basic":30,"advanced":330,"superior":930,"self_aware":2000},"data_gained":{"faulty":1,"basic":10,"advanced":20,"superior":30}},
        'bat': {"neoforge:conditions":[{"type":"neoforge:mod_loaded","modid":"reliquary"}],"entity":"minecraft:bat","variants":[],"name_color":"#964B00","display":{},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.bat","fabricator_drops":[{"id":"reliquary:bat_wing","count":8}]},
        'blaze': {"entity":"minecraft:blaze","variants":[],"name_color":"#FFD528","display":{},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.blaze","fabricator_drops":[{"id":"minecraft:blaze_rod","count":16},{"id":"reliquary:molten_core","optional":true,"count":2}]},
        'breeze': {"entity":"minecraft:breeze","name_color":"#3D4167","sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.breeze","fabricator_drops":[{"id":"minecraft:breeze_rod","count":16}]},
        'chicken': {"entity":"minecraft:chicken","variants":["twilightforest:penguin"],"name_color":"#F0EAD6","display":{},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.chicken","fabricator_drops":[{"id":"minecraft:chicken","count":32},{"id":"minecraft:feather","count":24}]},
        'cod': {"entity":"minecraft:cod","variants":[],"name_color":"#A52A2A","display":{},"sim_cost":32,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.cod","fabricator_drops":[{"id":"croptopia:roe","optional":true,"count":32},{"id":"minecraft:cod","count":32},{"id":"minecraft:bone_meal","count":2}]},
        'cow': {"entity":"minecraft:cow","variants":[],"name_color":"#352A1F","display":{},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.cow","fabricator_drops":[{"id":"minecraft:beef","count":32},{"id":"minecraft:leather","count":24},{"id":"hexerei:animal_fat","optional":true,"count":16}]},
        'creeper': {"entity":"minecraft:creeper","variants":["ad_astra:sulfur_creeper","creeperoverhaul:badlands_creeper","creeperoverhaul:bamboo_creeper","creeperoverhaul:beach_creeper","creeperoverhaul:cave_creeper","creeperoverhaul:dark_oak_creeper","creeperoverhaul:desert_creeper","creeperoverhaul:dripstone_creeper","creeperoverhaul:hills_creeper","creeperoverhaul:jungle_creeper","creeperoverhaul:mushroom_creeper","creeperoverhaul:ocean_creeper","creeperoverhaul:savannah_creeper","creeperoverhaul:snowy_creeper","creeperoverhaul:spruce_creeper","creeperoverhaul:swamp_creeper"],"name_color":"#70DC5D","display":{},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.creeper","fabricator_drops":[{"id":"minecraft:gunpowder","count":32},{"id":"minecraft:creeper_head","count":4},{"id":"reliquary:catalyzing_gland","optional":true,"count":2}]},
        'drowned': {"entity":"minecraft:drowned","variants":[],"name_color":"#3B6269","display":{"nbt":{"HandItems":[{"id":"minecraft:trident"},{}]}},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.drowned","fabricator_drops":[{"id":"minecraft:rotten_flesh","count":64},{"id":"minecraft:copper_ingot","count":8}]},
        'elder_guardian': {"entity":"minecraft:elder_guardian","variants":[],"name_color":"#CBB1A5","display":{"y_offset":0.5,"scale":0.5},"sim_cost":1024,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.elder_guardian","fabricator_drops":[{"id":"minecraft:cod","count":16},{"id":"minecraft:salmon","count":2},{"id":"minecraft:pufferfish","count":2},{"id":"minecraft:tropical_fish","count":2},{"id":"minecraft:prismarine_crystals","count":8},{"id":"minecraft:prismarine_shard","count":24},{"id":"minecraft:wet_sponge","count":32}],"data_gained":{"faulty":3,"basic":12,"advanced":30,"superior":45}},
        'ender_dragon': {"entity":"minecraft:ender_dragon","variants":[],"name_color":"#CC00CC","display":{"y_offset":0.5,"scale":0.25},"sim_cost":4096,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.ender_dragon","fabricator_drops":[{"id":"minecraft:dragon_breath","count":16},{"id":"minecraft:dragon_egg","count":1}],"data_gained":{"faulty":3,"basic":12,"advanced":30,"superior":45}},
        'enderman': {"entity":"minecraft:enderman","variants":["endermanoverhaul:badlands_enderman","endermanoverhaul:cave_enderman","endermanoverhaul:coral_enderman","endermanoverhaul:crimson_forest_enderman","endermanoverhaul:dark_oak_enderman","endermanoverhaul:desert_enderman","endermanoverhaul:end_enderman","endermanoverhaul:end_islands_enderman","endermanoverhaul:flower_fields_enderman","endermanoverhaul:ice_spikes_enderman","endermanoverhaul:mushroom_fields_enderman","endermanoverhaul:nether_wastes_enderman","endermanoverhaul:savanna_enderman","endermanoverhaul:snowy_enderman","endermanoverhaul:soulsand_valley_enderman","endermanoverhaul:swamp_enderman","endermanoverhaul:warped_forest_enderman","endermanoverhaul:windswept_hills_enderman"],"name_color":"#161616","display":{"scale":0.75},"sim_cost":512,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.enderman","fabricator_drops":[{"id":"minecraft:ender_pearl","count":16},{"id":"minecraft:end_crystal","count":1},{"id":"evilcraft:ender_tear","optional":true,"count":4},{"id":"reliquary:nebulous_heart","optional":true,"count":2}]},
        'evoker': {"entity":"minecraft:evoker","variants":[],"name_color":"#BCA341","display":{},"sim_cost":1024,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.evoker","fabricator_drops":[{"id":"minecraft:totem_of_undying","count":2},{"id":"minecraft:emerald","count":16}]},
        'ghast': {"entity":"minecraft:ghast","variants":["twilightforest:carminite_ghastguard","twilightforest:carminite_ghastling"],"name_color":"#F0F0F0","display":{"y_offset":4.0,"scale":0.25},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.ghast","fabricator_drops":[{"id":"minecraft:ghast_tear","count":16},{"id":"minecraft:gunpowder","count":32},{"id":"reliquary:catalyzing_gland","optional":true,"count":2}]},
        'glow_squid': {"entity":"minecraft:glow_squid","variants":[],"name_color":"#32A1A1","display":{"y_offset":1.0},"sim_cost":32,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.glow_squid","fabricator_drops":[{"id":"croptopia:glowing_calamari","optional":true,"count":32},{"id":"minecraft:glow_ink_sac","count":32}]},
        'guardian': {"entity":"minecraft:guardian","variants":[],"name_color":"#6A9583","display":{},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.guardian","fabricator_drops":[{"id":"minecraft:cod","count":24},{"id":"minecraft:prismarine_crystals","count":16},{"id":"reliquary:guardian_spike","optional":true,"count":2}]},
        'hoglin': {"entity":"minecraft:hoglin","variants":["minecraft:zoglin"],"name_color":"#E8A074","display":{},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.hoglin","fabricator_drops":[{"id":"minecraft:porkchop","count":32},{"id":"minecraft:leather","count":16}]},
        'magma_cube': {"entity":"minecraft:magma_cube","variants":[],"name_color":"#CC2200","display":{"scale":2.0},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.magma_cube","fabricator_drops":[{"id":"minecraft:magma_cream","count":32},{"id":"reliquary:molten_core","optional":true,"count":2}]},
        'mooshroom': {"entity":"minecraft:mooshroom","variants":[],"name_color":"#A81012","display":{},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.mooshroom","fabricator_drops":[{"id":"minecraft:beef","count":32},{"id":"minecraft:leather","count":24},{"id":"minecraft:red_mushroom","count":16},{"id":"minecraft:brown_mushroom","count":16}]},
        'phantom': {"entity":"minecraft:phantom","variants":[],"name_color":"#0AB405","display":{},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.phantom","fabricator_drops":[{"id":"minecraft:phantom_membrane","count":8}]},
        'pig': {"entity":"minecraft:pig","variants":["twilightforest:boar","naturalist:boar"],"name_color":"#EEA5A4","display":{},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.pig","fabricator_drops":[{"id":"minecraft:porkchop","count":32},{"id":"hexerei:animal_fat","optional":true,"count":16}]},
        'rabbit': {"entity":"minecraft:rabbit","variants":["twilightforest:dwarf_rabbit"],"name_color":"#947D62","display":{},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.rabbit","fabricator_drops":[{"id":"minecraft:rabbit_hide","count":32},{"id":"minecraft:rabbit","count":32},{"id":"minecraft:rabbit_foot","count":8}]},
        'sheep': {"entity":"minecraft:sheep","variants":["twilightforest:bighorn_sheep"],"name_color":"rainbow","display":{"nbt":{"CustomName":"{\"text\":\"jeb_\"}"}},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.sheep","fabricator_drops":[{"id":"minecraft:white_wool","count":32},{"id":"minecraft:orange_wool","count":32},{"id":"minecraft:magenta_wool","count":32},{"id":"minecraft:light_blue_wool","count":32},{"id":"minecraft:yellow_wool","count":32},{"id":"minecraft:lime_wool","count":32},{"id":"minecraft:pink_wool","count":32},{"id":"minecraft:gray_wool","count":32},{"id":"minecraft:light_gray_wool","count":32},{"id":"minecraft:cyan_wool","count":32},{"id":"minecraft:purple_wool","count":32},{"id":"minecraft:blue_wool","count":32},{"id":"minecraft:brown_wool","count":32},{"id":"minecraft:green_wool","count":32},{"id":"minecraft:red_wool","count":32},{"id":"minecraft:black_wool","count":32},{"id":"minecraft:mutton","count":32},{"id":"potionsmaster:bezoar","optional":true,"count":16}]},
        'shulker': {"entity":"minecraft:shulker","variants":[],"name_color":"#976797","display":{},"sim_cost":512,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.shulker","fabricator_drops":[{"id":"minecraft:shulker_shell","count":8},{"id":"minecraft:end_rod","count":4}]},
        'skeleton': {"entity":"minecraft:skeleton","variants":["minecraft:stray","minecraft:bogged"],"name_color":"#BCBCBC","display":{},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.skeleton","fabricator_drops":[{"id":"minecraft:arrow","count":32},{"id":"minecraft:bone","count":24},{"id":"minecraft:skeleton_skull","count":4},{"id":"reliquary:rib_bone","optional":true,"count":2}]},
        'slime': {"entity":"minecraft:slime","variants":["tconstruct:earth_slime","twilightforest:maze_slime","twilightforest:slime_beetle"],"name_color":"#7BCA62","display":{"scale":2.0},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.slime","fabricator_drops":[{"id":"minecraft:slime_ball","count":32},{"id":"minecraft:slime_block","count":3},{"id":"reliquary:slime_pearl","optional":true,"count":2}]},
        'snow_golem': {"entity":"minecraft:snow_golem","variants":[],"name_color":"#FFFFFF","display":{},"sim_cost":64,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.snow_golem","fabricator_drops":[{"id":"minecraft:snowball","count":32},{"id":"reliquary:frozen_core","optional":true,"count":2}]},
        'spider': {"entity":"minecraft:spider","variants":["minecraft:cave_spider","twilightforest:hedge_spider","twilightforest:king_spider","twilightforest:swarm_spider","twilightforest:carminite_broodling"],"name_color":"#322B26","display":{},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.spider","fabricator_drops":[{"id":"minecraft:string","count":32},{"id":"minecraft:spider_eye","count":16},{"id":"minecraft:cobweb","count":4},{"id":"silentgear:fine_silk","optional":true,"count":3},{"id":"reliquary:chelicerae","optional":true,"count":2}]},
        'squid': {"entity":"minecraft:squid","variants":[],"name_color":"#546D80","display":{"y_offset":1.0},"sim_cost":32,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.squid","fabricator_drops":[{"id":"minecraft:ink_sac","count":32},{"id":"croptopia:calamari","optional":true,"count":32},{"id":"reliquary:squid_beak","optional":true,"count":2}]},
        'thermal/basalz': {"neoforge:conditions":[{"type":"neoforge:mod_loaded","modid":"thermal"}],"entity":"thermal:basalz","variants":[],"name_color":"#292C2F","display":{},"sim_cost":512,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.basalz","fabricator_drops":[{"id":"thermal:basalz_rod","count":16}]},
        'thermal/blitz': {"neoforge:conditions":[{"type":"neoforge:mod_loaded","modid":"thermal"}],"entity":"thermal:blitz","variants":[],"name_color":"#858F8E","display":{},"sim_cost":512,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.blitz","fabricator_drops":[{"id":"thermal:blitz_rod","count":16}]},
        'thermal/blizz': {"neoforge:conditions":[{"type":"neoforge:mod_loaded","modid":"thermal"}],"entity":"thermal:blizz","variants":[],"name_color":"#1E6389","display":{},"sim_cost":512,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.blizz","fabricator_drops":[{"id":"thermal:blizz_rod","count":16}]},
        'warden': {"entity":"minecraft:warden","variants":[],"name_color":"#05343F","display":{"y_offset":-0.15,"scale":0.65},"sim_cost":2560,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.warden","fabricator_drops":[{"id":"deeperdarker:heart_of_the_deep","optional":true,"count":1},{"id":"deeperdarker:warden_carapace","optional":true,"count":1},{"id":"apothic_enchanting:warden_tendril","optional":true,"count":1},{"id":"minecraft:echo_shard","count":2},{"id":"minecraft:sculk_catalyst","count":4}]},
        'witch': {"entity":"minecraft:witch","variants":[],"name_color":"#361758","display":{"scale":0.8},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.witch","fabricator_drops":[{"id":"minecraft:redstone","count":16},{"id":"minecraft:glowstone_dust","count":16},{"id":"minecraft:sugar","count":32},{"id":"minecraft:stick","count":32},{"id":"minecraft:spider_eye","count":16},{"id":"minecraft:glass_bottle","count":16},{"id":"reliquary:witch_hat","optional":true,"count":2}]},
        'wither_skeleton': {"entity":"minecraft:wither_skeleton","variants":[],"name_color":"#343434","display":{"scale":0.85},"sim_cost":768,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.wither_skeleton","fabricator_drops":[{"id":"wstweaks:fragment","optional":true,"count":32},{"id":"minecraft:bone","count":24},{"id":"minecraft:coal","count":32},{"id":"minecraft:wither_skeleton_skull","count":3},{"id":"reliquary:withered_rib","optional":true,"count":2}]},
        'zombie': {"entity":"minecraft:zombie","variants":["minecraft:husk","minecraft:zombie_villager","twilightforest:rising_zombie"],"name_color":"#3B622F","display":{},"sim_cost":128,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.zombie","fabricator_drops":[{"id":"minecraft:rotten_flesh","count":64},{"id":"minecraft:iron_ingot","count":8},{"id":"minecraft:carrot","count":16},{"id":"minecraft:potato","count":16},{"id":"reliquary:zombie_heart","optional":true,"count":2}]},
        'zombified_piglin': {"entity":"minecraft:zombified_piglin","variants":["minecraft:piglin"],"name_color":"#3B992F","display":{},"sim_cost":256,"input":{"item":"hostilenetworks:prediction_matrix"},"trivia":"hostilenetworks.trivia.zombified_piglin","fabricator_drops":[{"id":"minecraft:rotten_flesh","count":64},{"id":"minecraft:gold_ingot","count":8}]}
    };

    Object.keys(models).forEach(name => {
        const data = models[name];
        const removed = removeDrops[name] || [];
        data.fabricator_drops = data.fabricator_drops
            .filter(drop => removed.indexOf(drop.id) == -1)
            .concat(addDrops[name] || []);
        // Замість узагальненого передбачення. Порожнім base_drop бути не може:
        // клієнт не отримає дані моделі й гравця викине з сервера
        data.base_drop = { id: 'minecraft:paper' };
        model(name, data);
    });
});
