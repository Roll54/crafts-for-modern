ServerEvents.recipes(event => {
    const itemsToRemove = [
        "toms_storage:paint_kit",
        "toms_storage:adv_wireless_terminal",
        "toms_storage:wireless_terminal",
        "toms_storage:polymorphic_item_filter",
        "toms_storage:tag_item_filter",
        "toms_storage:item_filter",
        "toms_storage:level_emitter",
        "toms_storage:basic_inventory_hopper",
        "toms_storage:storage_terminal",
        "toms_storage:crafting_terminal",
        "toms_storage:trim",
        "toms_storage:inventory_cable",
        "toms_storage:inventory_interface",
        "toms_storage:inventory_cable_connector",
        "toms_storage:inventory_proxy",
        "toms_storage:inventory_connector",
        "travelanchors:travel_staff",
        "travelanchors:travel_anchor"
    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });
});
