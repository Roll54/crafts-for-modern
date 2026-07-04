ServerEvents.tags('item', event => {

    event.add('roll_mod:battaries_tier_one', [
        "roll_mod:primitive_battery",
        "modern_industrialization:redstone_battery",
    ]);

    event.modify('ad_astra:freeze_resistant_armor', tag => {
        tag.add([
            "extended_industrialization:nano_quantum_leggings",
            "extended_industrialization:nano_quantum_chestplate",
            "extended_industrialization:nano_quantum_boots",
            "extended_industrialization:nano_quantum_helmet",
            "ad_astra:netherite_space_helmet",
            "ad_astra:netherite_space_suit",
            "ad_astra:netherite_space_pants",
            "ad_astra:netherite_space_boots",
            "ad_astra:jet_suit_helmet",
            "ad_astra:jet_suit",
            "ad_astra:jet_suit_pants",
            "ad_astra:jet_suit_boots",
            "advanced_ae:quantum_helmet",
            "advanced_ae:quantum_chestplate",
            "advanced_ae:quantum_leggings",
            "advanced_ae:quantum_boots",
        ]);
    });

    event.modify('ad_astra:space_suit_items', tag => {
        tag.add([
            "extended_industrialization:nano_quantum_leggings",
            "extended_industrialization:nano_quantum_chestplate",
            "extended_industrialization:nano_quantum_boots",
            "extended_industrialization:nano_quantum_helmet",
            "ad_astra:netherite_space_helmet",
            "ad_astra:netherite_space_suit",
            "ad_astra:netherite_space_pants",
            "ad_astra:netherite_space_boots",
            "ad_astra:jet_suit_helmet",
            "ad_astra:jet_suit",
            "ad_astra:jet_suit_pants",
            "ad_astra:jet_suit_boots",
            "advanced_ae:quantum_helmet",
            "advanced_ae:quantum_chestplate",
            "advanced_ae:quantum_leggings",
            "advanced_ae:quantum_boots",
        ]);
    });

    event.add('roll_mod:good_for_crystal_chip', [
        "roll_mod:raw_emerald",
        "roll_mod:raw_olivine",
        "roll_mod:raw_peridot",
    ]);

    event.add('c:foods/milk', [
        "minecraft:milk_bucket"
    ]);

});
