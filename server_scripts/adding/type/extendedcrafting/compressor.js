ServerEvents.recipes(event => {
    event.custom({
        type: "extendedcrafting:compressor",
        powerCost: 500000,
        inputCount: 25000,
        ingredient: {
            tag: "c:dusts/redstone"
        },
        catalyst: {
            item: "extendedcrafting:ultimate_catalyst"
        },
        result: {
            id: "extendedcrafting:singularity",
            components: {
                "extendedcrafting:singularity_id": "extendedcrafting:redstone"
            }
        }
    })
})
