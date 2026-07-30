ServerEvents.recipes(event => {
    event.custom({
        type: "extendedcrafting:compressor",
        power_cost: 500000,
        input_count: 25000,
        ingredient: {
            tag: "c:dusts/redstone"
        },
        catalyst: {
            item: "extendedcrafting:ultimate_catalyst"
        },
        result: {
            item: "extendedcrafting:singularity",
            nbt: {
                singularity_id: "extendedcrafting:redstone"
            }
        }
    })
})
