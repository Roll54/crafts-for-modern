ServerEvents.recipes(event => {
    const itemsToRemove = [
        "immersive_aircraft:bomb_bay",
        "immersive_aircraft:heavy_crossbow",
        "immersive_aircraft:rotary_cannon",
        "immersive_aircraft:airship",
        "immersive_aircraft:cargo_airship",
        "immersive_aircraft:warship",
        "immersive_aircraft:gyrodyne",
        "immersive_aircraft:biplane",
        "immersive_aircraft:quadrocopter",
        "immersive_aircraft:bamboo_hopper",
        "immersive_aircraft:enhanced_propeller",
        "immersive_aircraft:propeller"
    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });
});
