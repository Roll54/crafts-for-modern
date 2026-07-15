ServerEvents.recipes(event => {
    const addonItems = [
        "industrialization_overdrive:vajra",
        "industrialization_overdrive:multi_processing_array",
        "industrialization_overdrive:pyrolyse_oven",
    ];

    addonItems.forEach(item => {
        event.remove({ output: item });
    });

    event.remove({ type: "industrialization_overdrive:pyrolyse_oven" });
    
});
