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
            { item: 'roll_mod:fluorite_pineapple' }
        ],
        result: [
            {
                item: {
                    id: 'roll_mod:fluorite_pineapple_slice',
                    count: 4
                }
            }
        ],
        tool: {
            tag: 'c:tools/knife'
        }
    })

    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "roll_mod:rutile_bell_pepper"
        }
      ],
      "result": [
        {
          "item": {
            "count": 2,
            "id": "roll_mod:bell_pepper_slice_rutile"
          }
        },
        {
          "chance": 0.1,
          "item": {
            "count": 1,
            "id": "roll_mod:rutile_bell_pepper_seeds"
          }
        }
      ],
      "tool": {
        "tag": "c:tools/knife"
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
