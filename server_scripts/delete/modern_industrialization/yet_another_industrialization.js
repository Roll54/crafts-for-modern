ServerEvents.recipes(event => {
    const addonItems = [
        "yet_another_industrialization:flight_pylon",
        'yet_another_industrialization:battery_casing',
    ];

    addonItems.forEach(item => {
        event.remove({ output: item });
    });
});
