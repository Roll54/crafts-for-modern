ServerEvents.recipes(event => {
    const addonItems = [
        "extended_industrialization:electric_mining_drill",
        "extended_industrialization:electric_chainsaw",
        "extended_industrialization:nano_helmet",
        "extended_industrialization:nano_chestplate",
        "extended_industrialization:nano_leggings",
        "extended_industrialization:nano_boots",
        "extended_industrialization:nano_gravichestplate",
        "extended_industrialization:nano_saber",
        "extended_industrialization:lv_solar_panel",
        "extended_industrialization:mv_solar_panel",
        "extended_industrialization:hv_solar_panel",
        "extended_industrialization:mv_photovoltaic_cell",
        "extended_industrialization:lv_photovoltaic_cell",
        "extended_industrialization:nano_quantum_boots",
        "extended_industrialization:nano_quantum_leggings",
        "extended_industrialization:nano_quantum_chestplate",
        "extended_industrialization:nano_quantum_helmet",
        "extended_industrialization:hv_photovoltaic_cell",
        "extended_industrialization:netherite_rotary_blade",
        "extended_industrialization:ultimate_laser_drill"
    ];

    addonItems.forEach(item => {
        event.remove({ output: item });
    });
});
