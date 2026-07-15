ServerEvents.tags('item', event => {

    event.add('roll_mod:battaries_tier_one', [
        "roll_mod:primitive_battery",
        "modern_industrialization:redstone_battery",
    ]);

    event.add('curios:curio', [
        "roll_mod:energium_battery",
        'roll_mod:redstone_battery',
        'roll_mod:lapotron_battery_t1',
        'roll_mod:lapotron_battery_t2',
        'roll_mod:lapotron_battery_t3',
        'roll_mod:ultra_battery',
    ]);

    event.add('curios:back', [
        'createcybernetics:exosuit1',
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
/*
    event.add('roll_mod:glowstone_dust', [
        "minecraft:glowstone_dust",
        'roll_mod:activated_zinc_sulfide_dust',
    ]);
*/
});
