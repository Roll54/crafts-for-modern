ServerEvents.recipes(event => {

event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
        { tag: 'createcybernetics:offal' }
    ],
    result: [
        {
            item: {
                id: 'createcybernetics:ground_offal',
                count: 1
            }
        }
    ],
    tool: {
        tag: 'c:tools/knife'
    }
})

event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
        { item: 'rusticdelight:potato_slices' }
    ],
    result: [
        {
            item: {
                id: 'moredelight:diced_potatoes',
                count: 2
            }
        }
    ],
    tool: {
        tag: 'c:tools/knife'
    }
})

})
