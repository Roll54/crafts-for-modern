ServerEvents.recipes(event => {
    const addonItems = [
        "industrialization_overdrive:vajra",
        "industrialization_overdrive:multi_processing_array",
        "industrialization_overdrive:pyrolyse_oven",
    ];

    const addonRecipes = [
        "industrialization_overdrive:pyrolyse_oven",
    ];

    addonItems.forEach(item => {
        event.remove({ output: item });
    });

    addonRecipes.forEach(id => {
        event.remove({ id: id });
    });
});
