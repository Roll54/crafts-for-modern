ServerEvents.recipes(event => {
    const addonItems = [
        "yet_another_industrialization:flight_pylon",
    ];

    addonItems.forEach(item => {
        event.remove({ output: item });
    });
});
