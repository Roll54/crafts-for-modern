ServerEvents.recipes(event => {
    const addonItems = [
        "yet_another_industrialization:flight_pylon",
        'yet_another_industrialization:battery_casing',
        'yet_another_industrialization:dragon_egg_energy_siphon',
        'yet_another_industrialization:steel_plated_end_stone_bricks',
    ];

    addonItems.forEach(item => {
        event.remove({ output: item });
    });
});
