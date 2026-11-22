ServerEvents.recipes(event => {
    const addonItems = [
        "industrialization_overdrive:vajra",
        "industrialization_overdrive:multi_processing_array",
        "industrialization_overdrive:pyrolyse_oven",
        "industrialization_overdrive:me_fluid_input_hatch",
        "industrialization_overdrive:me_fluid_output_hatch",
        "industrialization_overdrive:me_item_input_hatch",
        "industrialization_overdrive:me_item_output_hatch",
        "industrialization_overdrive:me_mixed_input_hatch",
        "industrialization_overdrive:me_mixed_output_hatch",
    ];

    addonItems.forEach(item => {
        event.remove({ output: item });
    });

    event.remove({ type: "industrialization_overdrive:pyrolyse_oven" });
    
});
