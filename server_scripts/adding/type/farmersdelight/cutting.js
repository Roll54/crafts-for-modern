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

})
