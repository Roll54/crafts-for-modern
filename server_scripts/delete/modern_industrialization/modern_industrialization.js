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
        "modern_industrialization:steam_quarry"
    ];

    modernItems.forEach(item => {
        event.remove({ output: item });
    });
});
