ServerEvents.recipes(event => {
    event.custom({
        type: 'modern_industrialization:forge_hammer',
        ingredient: {
            item: 'minecraft:clay_ball'
        },
        result: {
            count: 1,
            id: 'roll_mod:clay_dust'
        }
    })

    event.custom({
        type: 'modern_industrialization:forge_hammer',
        ingredient: {
            item: 'minecraft:clay'
        },
        result: {
            count: 4,
            id: 'roll_mod:clay_dust'
        }
    })
})
