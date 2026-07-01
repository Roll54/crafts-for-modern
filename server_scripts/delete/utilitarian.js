ServerEvents.recipes(event => {
    const itemsToRemove = [
        "utilitarian:trowel",
        "utilitarian:snad",
        "utilitarian:red_snad",
        "utilitarian:soul_snad",
        "utilitarian:drit",
        "utilitarian:grrass",
        "utilitarian:tiny_coal",
        "utilitarian:tiny_charcoal",
        "utilitarian:redstone_clock",
        "utilitarian:fluid_hopper",
    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });
});
