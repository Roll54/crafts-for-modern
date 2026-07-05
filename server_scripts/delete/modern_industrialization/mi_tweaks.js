ServerEvents.recipes(event => {
    const addonItems = [
        "mi_tweaks:flux_transformer",
    ];

    addonItems.forEach(item => {
        event.remove({ output: item });
    });
});
