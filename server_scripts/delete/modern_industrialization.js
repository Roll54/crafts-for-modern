ServerEvents.recipes(event => {
    const modernItems = [
        "modern_industrialization:quantum_circuit_board",
        "modern_industrialization:arithmetic_logic_unit",
        "modern_industrialization:random_access_memory",
        "modern_industrialization:qubit",
        "modern_industrialization:memory_management_unit",
        "modern_industrialization:gravichestplate",
        "modern_industrialization:quantum_helmet",
        "modern_industrialization:quantum_chestplate",
        "modern_industrialization:quantum_leggings",
        "modern_industrialization:quantum_boots",
        "modern_industrialization:op_amp",
        "modern_industrialization:magnetite_dust",
        "modern_industrialization:magnalium_ingot",
        "modern_industrialization:replicator",
        "modern_industrialization:quantum_circuit",
        "modern_industrialization:processing_unit",
        "modern_industrialization:raw_lead",
        "modern_industrialization:salt_crushed_dust",
        "modern_industrialization:bauxite_crushed_dust",
        "modern_industrialization:emerald_crushed_dust",
        "modern_industrialization:redstone_crushed_dust",
        "modern_industrialization:monazite_crushed_dust",
        "modern_industrialization:processing_unit_board",
        "modern_industrialization:stainless_steel_hot_ingot",
        "modern_industrialization:tungsten_cable",
        "modern_industrialization:electric_quarry",
        "modern_industrialization:steam_quarry",
        "modern_industrialization:random_access_memory"
    ];

    const modernRecipes = [
        "modern_industrialization:alloy/mixer/kanthal/dust",
        "modern_industrialization:materials/mixer/fire_clay_dust",
        "modern_industrialization:materials/fire_clay_dust",
        "modern_industrialization:materials/mixer/oil_to_rubber_sheet",
        "modern_industrialization:oil/mixer/lubricant_from_plant_oil",
        "modern_industrialization:materials/mixer/lubricant_oil",
        "modern_industrialization:materials/mixer/rubber_sheet_from_synthetic",
        "modern_industrialization:materials/electrolyzer/bauxite",
        "modern_industrialization:materials/mixer/lubricant"
    ];

    const modernPairs = [
        { input: 'modern_industrialization:raw_titanium', output: 'modern_industrialization:titanium_hot_ingot' },
        { input: '#c:dusts/bauxite', output: 'modern_industrialization:titanium_tiny_dust' },
        { input: 'modern_industrialization:electrum_dust', output: 'modern_industrialization:electrum_ingot' },
        { input: 'modern_industrialization:silver_block', output: 'modern_industrialization:electrum_block' },
        { input: '#c:dusts/salt', output: 'modern_industrialization:sodium_dust' },
        { input: 'modern_industrialization:osmiridium_dust', output: 'modern_industrialization:osmiridium_ingot' },
        { input: 'modern_industrialization:titanium_64_dust', output: 'modern_industrialization:titanium_64_ingot' },
        { input: 'modern_industrialization:rhodium_dust', output: 'modern_industrialization:rhodium_ingot' },
        { input: 'modern_industrialization:rhodium_plated_palladium_dust', output: 'modern_industrialization:rhodium_plated_palladium_ingot' },
        { input: 'modern_industrialization:niobium_titanium_alloy_dust', output: 'modern_industrialization:niobium_titanium_alloy_ingot' },
        { input: 'modern_industrialization:incoloy_dust', output: 'modern_industrialization:incoloy_ingot' },
        { input: 'modern_industrialization:chrome_vanadium_steel_dust', output: 'modern_industrialization:chrome_vanadium_steel_ingot' },
        { input: 'modern_industrialization:enderium_dust', output: 'modern_industrialization:enderium_ingot' }
    ];

    const addonItems = [
        "industrialization_overdrive:vajra",
        "industrialization_overdrive:multi_processing_array",
        "industrialization_overdrive:pyrolyse_oven",
        "extended_industrialization:electric_mining_drill",
        "extended_industrialization:electric_chainsaw",
        "mi_tweaks:flux_transformer"
    ];

    const vanillaItems = [
        "minecraft:raw_gold"
    ];

    event.remove({ type: "industrialization_overdrive:pyrolyse_oven" });
    event.remove({ type: 'modern_industrialization:quarry' });

    modernItems.forEach(item => {
        event.remove({ output: item });
    });

    addonItems.forEach(item => {
        event.remove({ output: item });
    });

    vanillaItems.forEach(item => {
        event.remove({ output: item });
    });

    modernRecipes.forEach(id => {
        event.remove({ id: id });
    });

    modernPairs.forEach(pair => {
        event.remove([{ input: pair.input, output: pair.output }]);
    });
});
