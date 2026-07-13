ServerEvents.recipes(event => {
    const advancedItems = [
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
        "advanced_ae:quantum_upgrade_base",
        "advanced_ae:swim_speed_card",
        "advanced_ae:jump_height_card",
        "advanced_ae:step_assist_card",
        "advanced_ae:sprint_speed_card",
        "advanced_ae:walk_speed_card",
        "advanced_ae:evasion_card",
        "advanced_ae:strength_card",
        "advanced_ae:attack_speed_card",
        "advanced_ae:luck_card",
        "advanced_ae:reach_card",
        "advanced_ae:night_vision_card",
        "advanced_ae:lava_immunity_card",
        "advanced_ae:flight_card",
        "advanced_ae:water_breathing_card",
        "advanced_ae:auto_feeding_card",
        "advanced_ae:auto_stock_card",
        "advanced_ae:magnet_card",
        "advanced_ae:recharging_card",
        "advanced_ae:flight_drift_card",
        "advanced_ae:portable_workbench_card",
        "advanced_ae:pick_craft_card",
        "advanced_ae:regeneration_card",
        "advanced_ae:hp_buffer_card",
        "advanced_ae:quantum_upgrade_base",
        'advanced_ae:reaction_chamber'
    ];
  
    advancedItems.forEach(item => {
        event.remove({ output: item });
    });

    event.remove({ type: "advanced_ae:reaction" });
});
