ServerEvents.tags('item', event => {
    
    // Діагностика - перевіряємо чи існують теги ad_astra
    console.log('Перевіряємо теги ad_astra:');
    console.log('freeze_resistant_armor exists? ' + (event.get('ad_astra:freeze_resistant_armor') !== null));
    console.log('space_suit_items exists? ' + (event.get('ad_astra:space_suit_items') !== null));
    
    // Додаємо наші предмети
    event.get('ad_astra:freeze_resistant_armor').add([
        "extended_industrialization:nano_quantum_leggings",
        "extended_industrialization:nano_quantum_chestplate",
        "extended_industrialization:nano_quantum_boots",
        "extended_industrialization:nano_quantum_helmet"
    ]);

    event.get('ad_astra:space_suit_items').add([
        "extended_industrialization:nano_quantum_leggings",
        "extended_industrialization:nano_quantum_chestplate",
        "extended_industrialization:nano_quantum_boots",
        "extended_industrialization:nano_quantum_helmet"
    ]);

    // Ваші інші теги
    event.add('roll_mod:battaries_tier_one', [
        "roll_mod:primitive_battery",
        "modern_industrialization:redstone_battery",
    ]);

    event.add('roll_mod:good_for_crystal_chip', [
        "roll_mod:raw_emerald",
        "roll_mod:raw_olivine",
        "roll_mod:raw_peridot",
    ]);

    event.add('c:foods/milk', [
        "minecraft:milk_bucket"
    ]);

}).priority('low');
