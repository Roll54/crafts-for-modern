// server_scripts/adding/type/silentgear/convert.js

ServerEvents.recipes(event => {
  event.custom({
    type: 'silentgear:conversion',
    category: 'misc',
    ingredients: [
      { item: 'roll_mod:meteorite_sword' }
    ],
    result: {
      id: 'silentgear:sword',
      count: 1,
      parts: [
        {
          item: {
            id: 'silentgear:sword_blade',
            count: 1,
            components: {
              'silentgear:material_list': [
                { material: 'silentgear:meteorite_metal' },
                { material: 'silentgear:meteorite_metal' }
              ]
            }
          },
          part: 'silentgear:sword_blade'
        },
        {
          item: {
            id: 'silentgear:rod',
            count: 1,
            components: {
              'silentgear:material_list': [
                { material: 'silentgear:wood' }
              ]
            }
          },
          part: 'silentgear:rod'
        }
      ]
    }
  })
})
