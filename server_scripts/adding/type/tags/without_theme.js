ServerEvents.tags('item', event => {

    event.add('roll_mod:netherrack_craft_dust', [
        'modern_industrialization:ruby_tiny_dust',
        'modern_industrialization:redstone_tiny_dust'
    ]);

    event.add('sophisticatedbackpacks:backpacks', [
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack'
    ]);
    
    event.add('functionalstorage:drawer_storage_denylist', [
        '#sophisticatedbackpacks:backpacks',
        '#c:shulker_boxes',
        '#functionalstorage:drawer',
        '#modern_industrialization:barrels',
        'functionalstorage:compacting_drawer',
        'functionalstorage:compacting_framed_drawer',
        'functionalstorage:simple_compacting_drawer',
        'functionalstorage:framed_simple_compacting_drawer'
    ]);
    
    event.add('roll_mod:metalbarrels_upgrades', [
        'metalbarrels:wood_to_crystal',
        'metalbarrels:copper_to_crystal',
        'metalbarrels:iron_to_crystal',
        'metalbarrels:silver_to_crystal',
        'metalbarrels:gold_to_crystal',
        'metalbarrels:diamond_to_crystal',
        'metalbarrels:wood_to_obsidian',
        'metalbarrels:silver_to_diamond',
        'metalbarrels:silver_to_netherite',
        'metalbarrels:wood_to_netherite',
        'metalbarrels:wood_to_diamond',
        'metalbarrels:iron_to_gold',
        'metalbarrels:copper_to_obsidian',
        'metalbarrels:copper_to_silver',
        'metalbarrels:iron_to_diamond',
        'metalbarrels:diamond_to_obsidian',
        'metalbarrels:wood_to_copper',
        'metalbarrels:silver_to_obsidian',
        'metalbarrels:silver_to_gold',
        'metalbarrels:copper_to_netherite',
        'metalbarrels:gold_to_obsidian',
        'metalbarrels:wood_to_gold',
        'metalbarrels:gold_to_netherite',
        'metalbarrels:copper_to_iron',
        'metalbarrels:gold_to_diamond',
        'metalbarrels:iron_to_obsidian',
        'metalbarrels:wood_to_silver',
        'metalbarrels:iron_to_netherite',
        'metalbarrels:wood_to_iron',
        'metalbarrels:iron_to_silver',
        'metalbarrels:copper_to_gold',
        'metalbarrels:obsidian_to_netherite',
        'metalbarrels:copper_to_diamond',
        'metalbarrels:diamond_to_netherite'
    ]);

    event.add('roll_mod:battaries_tier_one', [
        "roll_mod:primitive_battery",
        "modern_industrialization:redstone_battery",
    ]);
    
    event.add('roll_mod:battaries_tier_three', [
        "roll_mod:bismuth_lithium_battery",
        "modern_industrialization:sodium_battery",
    ]);
   
    event.add('roll_mod:nickel_recipe', [
        "#c:dusts/nickel",
        "#c:ingots/nickel",
    ]);

    event.add('roll_mod:iron_recipe', [
        "#c:dusts/iron",
        "#c:ingots/iron",
    ]);

    event.add('roll_mod:copper_recipe', [
        "#c:dusts/copper",
        "#c:ingots/copper",
    ]);

    event.add('minecraft:chicken_food', [
        "#c:seeds",
        "#agricraft:seeds",
        "#forge:seeds",
    ]);
    
    event.add('roll_mod:copper_block', [
        "minecraft:weathered_copper",
        "minecraft:waxed_weathered_copper",
        "minecraft:exposed_copper",
        "minecraft:waxed_exposed_copper",
        "minecraft:oxidized_copper",
        "minecraft:waxed_oxidized_copper",
    ]);

    event.add('roll_mod:ores/nickel', [
        'roll_mod:impure_nickel_dust',
        'roll_mod:stone_nickel',
        'roll_mod:raw_nickel',
        'roll_mod:nickel_dust',
        'roll_mod:crushed_nickel_ore',
        'roll_mod:refined_nickel_ore',
        'roll_mod:purified_nickel_ore',
        'roll_mod:pure_nickel_dust'
    ]);

    const blockogriz = [
        "roll_mod:diamond_blockogriz",
        "roll_mod:meteorite_metal_blockogriz",
        "roll_mod:iron_blockogriz",
        "roll_mod:steel_blockogriz",
        "roll_mod:netherite_blockogriz",
        "roll_mod:black_steel_blockogriz",
        "roll_mod:bismuth_bronze_blockogriz",
        "roll_mod:black_bronze_blockogriz"
    ];

    blockogriz.forEach(item => {
        event.add('roll_mod:blockogriz', item);
        event.add('c:tools', item);
        event.add('minecraft:enchantable/vanishing', item);
        event.add('minecraft:breaks_decorated_pots', item);
        event.add('functionalstorage:armory_cabinet_insertable', item);
        event.add('minecraft:enchantable/durability', item);
        event.add('c:enchantables', item);
        event.add('minecraft:enchantable/sharp_weapon', item);
        event.add('minecraft:enchantable/mining', item);
        event.add('minecraft:axes', item);
        event.add('c:tools/melee_weapons', item);
        event.add('minecraft:enchantable/mining_loot', item);
        event.add('c:tools/melee_weapon', item);
        event.add('minecraft:enchantable/weapon', item);
        event.add('minecraft:cluster_max_harvestables', item);
        event.add('minecraft:pickaxes', item);
        event.add('minecraft:shovels', item);
        event.add('minecraft:enchantable/looting', item);
        event.add('minecraft:enchantable/fire_aspect', item);
    });

    event.add('createcybernetics:lungs_items', [
        "roll_mod:lungsupgrade_sulfur_resistance",
    ]);    

    event.add('createcybernetics:lungs_replacements', [
        "roll_mod:lungsupgrade_sulfur_resistance",
    ]);

    event.add('createcybernetics:lung_upgrades', [
        "roll_mod:lungsupgrade_sulfur_resistance",
    ]);
    
    event.add('createcybernetics:cyberware_item', [
        "roll_mod:crop_analyzer_lense",
        "roll_mod:crop_analyzer_module",
        "roll_mod:lungsupgrade_sulfur_resistance",
    ]);
    
    event.add('createcybernetics:eye_upgrades', [
        "roll_mod:crop_analyzer_module",
        "roll_mod:crop_analyzer_lense",
    ]);  
    
    event.add('roll_mod:controller_circuit', [
        "modern_industrialization:analog_circuit",
    ]);

    event.add('roll_mod:receiver_circuit', [
        "roll_mod:1_circuit",
    ]);

    event.add('roll_mod:signal_circuit', [
        "roll_mod:2_circuit",
    ]);

    event.add('roll_mod:radio_circuit', [
        "roll_mod:3_circuit",
    ]);
    
    event.add('curios:curio', [
        "roll_mod:energium_battery",
        'roll_mod:redstone_battery',
        'roll_mod:lapotron_battery_t1',
        'roll_mod:lapotron_battery_t2',
        'roll_mod:lapotron_battery_t3',
        'roll_mod:ultra_battery',
    ]);

    event.add('ad_astra:freeze_resistant_armor', [
        "extended_industrialization:nano_quantum_leggings",
        "extended_industrialization:nano_quantum_chestplate",
        "extended_industrialization:nano_quantum_boots",
        "extended_industrialization:nano_quantum_helmet",
        "extended_industrialization:nano_gravichestplate",
        "extended_industrialization:nano_helmet",
        "extended_industrialization:nano_chestplate",
        "extended_industrialization:nano_leggings",
        "extended_industrialization:nano_boots",
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
    ]);

    event.add('roll_mod:ores/bismuth', [
        'roll_mod:raw_bismuth',
        'roll_mod:crushed_bismuth_ore',
        'roll_mod:purified_bismuth_ore',
        'roll_mod:refined_bismuth_ore',
        'roll_mod:impure_bismuth_dust',
        'roll_mod:bismuth_dust'
    ]);
    
    event.add('ad_astra:space_suit_items', [
        "extended_industrialization:nano_quantum_leggings",
        "extended_industrialization:nano_quantum_chestplate",
        "extended_industrialization:nano_quantum_boots",
        "extended_industrialization:nano_quantum_helmet",
        "extended_industrialization:nano_gravichestplate",
        "extended_industrialization:nano_helmet",
        "extended_industrialization:nano_chestplate",
        "extended_industrialization:nano_leggings",
        "extended_industrialization:nano_boots",
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
    ]);

    event.add('ad_astra:heat_resistant_armor', [
        "extended_industrialization:nano_quantum_leggings",
        "extended_industrialization:nano_quantum_chestplate",
        "extended_industrialization:nano_quantum_boots",
        "extended_industrialization:nano_quantum_helmet",
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
    ]);

     event.add('ad_astra:netherite_space_suit_items', [
        "extended_industrialization:nano_quantum_leggings",
        "extended_industrialization:nano_quantum_chestplate",
        "extended_industrialization:nano_quantum_boots",
        "extended_industrialization:nano_quantum_helmet",
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
    ]);

     event.add('ad_astra:jet_suit_items', [
        "extended_industrialization:nano_quantum_leggings",
        "extended_industrialization:nano_quantum_chestplate",
        "extended_industrialization:nano_quantum_boots",
        "extended_industrialization:nano_quantum_helmet",
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
    ]);

    event.add('roll_mod:good_for_crystal_chip', [
        "roll_mod:raw_emerald",
        "roll_mod:raw_olivine",
        "roll_mod:raw_peridot",
    ]);

    event.add('c:foods/milk', [
        "minecraft:milk_bucket"
    ]);

    event.add('roll_mod:glowstone_dust', [
        "minecraft:glowstone_dust",
        'roll_mod:synthetic_glowstone_dust',
    ]);

    event.add('roll_mod:aviation', [
        'civilian_aviation:pzl37los',
        'civilian_aviation:pzl37los_green',
        'civilian_aviation:pzl37los_tan',
        'civilian_aviation:pzl37los_arctic',
        'civilian_aviation:pzl37los_brown',
        'civilian_aviation:pzlp11',
        'civilian_aviation:pzlp11_brown',
        'civilian_aviation:pzlp11_green',
        'civilian_aviation:pzlp11_tan',
        'civilian_aviation:trimotor_blue',
        'civilian_aviation:trimotor_black',
        'civilian_aviation:trimotor_red',
        'civilian_aviation:trimotor_white',
        'civilian_aviation:vulcanair_red',
        'civilian_aviation:vulcanair_blackred',
        'civilian_aviation:vulcanair_blackyellow',
        'civilian_aviation:vulcanair_blank',
        'civilian_aviation:vulcanair_blue',
        'civilian_aviation:vulcanair_bluestripe',
        'civilian_aviation:vulcanair_cow',
        'civilian_aviation:vulcanair_gray',
        'civilian_aviation:vulcanair_green',
        'civilian_aviation:vulcanair_orange',
        'civilian_aviation:vulcanair_police',
        'civilian_aviation:vulcanair_redsnail',
        'civilian_aviation:vulcanair_redyellow',
        'civilian_aviation:vulcanair_seagreen',
        'civilian_aviation:vulcanair_white',
        'civilian_aviation:vulcanair_winged',
        'civilian_aviation:vulcanair_yellow',
        'civilian_aviation:e500_red',
        'civilian_aviation:e500_blackred',
        'civilian_aviation:e500_blue',
        'civilian_aviation:e500_extravagant',
        'civilian_aviation:e500_green',
        'civilian_aviation:e500_rusty',
        'civilian_aviation:e500_silver',
        'civilian_aviation:e500_yellow',
        'civilian_aviation:bell206_blackstripe',
        'civilian_aviation:bell206_black',
        'civilian_aviation:bell206_blank',
        'civilian_aviation:bell206_blue',
        'civilian_aviation:bell206_brown',
        'civilian_aviation:bell206_gray',
        'civilian_aviation:bell206_green',
        'civilian_aviation:bell206_olive',
        'civilian_aviation:bell206_orange',
        'civilian_aviation:bell206_police',
        'civilian_aviation:bell206_red',
        'civilian_aviation:bell206_seagreen',
        'civilian_aviation:bell206_skyblue',
        'civilian_aviation:bell206_yellow',
        'civilian_aviation:bell47g_blue',
        'civilian_aviation:bell47g_olive',
        'civilian_aviation:bell47g_black',
        'civilian_aviation:bell47g',
        'civilian_aviation:comanche_orangebrown',
        'civilian_aviation:comanche_seagreen',
        'civilian_aviation:comanche_blank',
        'civilian_aviation:comanche_red',
        'civilian_aviation:comanche_blue',
        'civilian_aviation:comanche_blackredstripe',
        'civilian_aviation:comanche_yellow',
        'civilian_aviation:skyhawk_red',
        'civilian_aviation:skyhawk_coffee',
        'civilian_aviation:skyhawk_bluestripe',
        'civilian_aviation:skyhawk_green',
        'civilian_aviation:skyhawk_blackorange',
        'civilian_aviation:skyhawk_blackred',
        'civilian_aviation:skyhawk_blackyellow',
        'civilian_aviation:skyhawk_blank',
        'civilian_aviation:skyhawk_blue',
        'civilian_aviation:skyhawk_bluered',
        'civilian_aviation:skyhawk_brown',
        'civilian_aviation:skyhawk_butter',
        'civilian_aviation:skyhawk_red2',
        'civilian_aviation:skyhawk_pr_red',
        'civilian_aviation:skyhawk_pr_coffee',
        'civilian_aviation:skyhawk_pr_bluestripe',
        'civilian_aviation:skyhawk_pr_green',
        'civilian_aviation:skyhawk_pr_butter',
        'civilian_aviation:skyhawk_pr_red2',
        'civilian_aviation:skyhawk_pr_blackorange',
        'civilian_aviation:skyhawk_pr_blackred',
        'civilian_aviation:skyhawk_pr_blackyellow',
        'civilian_aviation:skyhawk_pr_blank',
        'civilian_aviation:skyhawk_pr_blue',
        'civilian_aviation:skyhawk_pr_bluered',
        'civilian_aviation:skyhawk_pr_brown'
    ]);

    event.add('roll_mod:aviation/pzl37los', [
        'civilian_aviation:pzl37los',
        'civilian_aviation:pzl37los_green',
        'civilian_aviation:pzl37los_tan',
        'civilian_aviation:pzl37los_arctic',
        'civilian_aviation:pzl37los_brown'
    ]);

    event.add('roll_mod:aviation/pzlp11', [
        'civilian_aviation:pzlp11',
        'civilian_aviation:pzlp11_brown',
        'civilian_aviation:pzlp11_green',
        'civilian_aviation:pzlp11_tan'
    ]);

    event.add('roll_mod:aviation/trimotor', [
        'civilian_aviation:trimotor_blue',
        'civilian_aviation:trimotor_black',
        'civilian_aviation:trimotor_red',
        'civilian_aviation:trimotor_white'
    ]);

    event.add('roll_mod:aviation/vulcanair', [
        'civilian_aviation:vulcanair_red',
        'civilian_aviation:vulcanair_blackred',
        'civilian_aviation:vulcanair_blackyellow',
        'civilian_aviation:vulcanair_blank',
        'civilian_aviation:vulcanair_blue',
        'civilian_aviation:vulcanair_bluestripe',
        'civilian_aviation:vulcanair_cow',
        'civilian_aviation:vulcanair_gray',
        'civilian_aviation:vulcanair_green',
        'civilian_aviation:vulcanair_orange',
        'civilian_aviation:vulcanair_police',
        'civilian_aviation:vulcanair_redsnail',
        'civilian_aviation:vulcanair_redyellow',
        'civilian_aviation:vulcanair_seagreen',
        'civilian_aviation:vulcanair_white',
        'civilian_aviation:vulcanair_winged',
        'civilian_aviation:vulcanair_yellow'
    ]);

    event.add('roll_mod:aviation/e500', [
        'civilian_aviation:e500_red',
        'civilian_aviation:e500_blackred',
        'civilian_aviation:e500_blue',
        'civilian_aviation:e500_extravagant',
        'civilian_aviation:e500_green',
        'civilian_aviation:e500_rusty',
        'civilian_aviation:e500_silver',
        'civilian_aviation:e500_yellow'
    ]);

    event.add('roll_mod:aviation/bell206', [
        'civilian_aviation:bell206_blackstripe',
        'civilian_aviation:bell206_black',
        'civilian_aviation:bell206_blank',
        'civilian_aviation:bell206_blue',
        'civilian_aviation:bell206_brown',
        'civilian_aviation:bell206_gray',
        'civilian_aviation:bell206_green',
        'civilian_aviation:bell206_olive',
        'civilian_aviation:bell206_orange',
        'civilian_aviation:bell206_police',
        'civilian_aviation:bell206_red',
        'civilian_aviation:bell206_seagreen',
        'civilian_aviation:bell206_skyblue',
        'civilian_aviation:bell206_yellow'
    ]);

    event.add('roll_mod:aviation/bell47g', [
        'civilian_aviation:bell47g_blue',
        'civilian_aviation:bell47g_olive',
        'civilian_aviation:bell47g_black',
        'civilian_aviation:bell47g'
    ]);

    event.add('roll_mod:aviation/comanche', [
        'civilian_aviation:comanche_orangebrown',
        'civilian_aviation:comanche_seagreen',
        'civilian_aviation:comanche_blank',
        'civilian_aviation:comanche_red',
        'civilian_aviation:comanche_blue',
        'civilian_aviation:comanche_blackredstripe',
        'civilian_aviation:comanche_yellow'
    ]);

    event.add('roll_mod:aviation/skyhawk', [
        'civilian_aviation:skyhawk_red',
        'civilian_aviation:skyhawk_coffee',
        'civilian_aviation:skyhawk_bluestripe',
        'civilian_aviation:skyhawk_green',
        'civilian_aviation:skyhawk_blackorange',
        'civilian_aviation:skyhawk_blackred',
        'civilian_aviation:skyhawk_blackyellow',
        'civilian_aviation:skyhawk_blank',
        'civilian_aviation:skyhawk_blue',
        'civilian_aviation:skyhawk_bluered',
        'civilian_aviation:skyhawk_brown',
        'civilian_aviation:skyhawk_butter',
        'civilian_aviation:skyhawk_red2'
    ]);

    event.add('roll_mod:aviation/skyhawk_pr', [
        'civilian_aviation:skyhawk_pr_red',
        'civilian_aviation:skyhawk_pr_coffee',
        'civilian_aviation:skyhawk_pr_bluestripe',
        'civilian_aviation:skyhawk_pr_green',
        'civilian_aviation:skyhawk_pr_butter',
        'civilian_aviation:skyhawk_pr_red2',
        'civilian_aviation:skyhawk_pr_blackorange',
        'civilian_aviation:skyhawk_pr_blackred',
        'civilian_aviation:skyhawk_pr_blackyellow',
        'civilian_aviation:skyhawk_pr_blank',
        'civilian_aviation:skyhawk_pr_blue',
        'civilian_aviation:skyhawk_pr_bluered',
        'civilian_aviation:skyhawk_pr_brown'
    ]);
});
