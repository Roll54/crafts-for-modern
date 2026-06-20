ServerEvents.recipes(event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { tag: 'createcybernetics:offal' }
        ],
        result: [
            { item: 'createcybernetics:ground_offal', count: 1 }
        ],
        sound: 'farmersdelight:block.cutting_board.knife',
        tool: { tag: 'c:tools/knife' }
    })
})
