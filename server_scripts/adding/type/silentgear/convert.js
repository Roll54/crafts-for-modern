// server_scripts/conversions.js

ServerEvents.recipes(event => {
  // Конвертація меча
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

  // Конвертація кирки
  event.custom({
    type: 'silentgear:conversion',
    category: 'misc',
    ingredients: [
      { item: 'roll_mod:meteorite_pickaxe' }
    ],
    result: {
      id: 'silentgear:pickaxe',
      count: 1,
      parts: [
        {
          item: {
            id: 'silentgear:pickaxe_head',
            count: 1,
            components: {
              'silentgear:material_list': [
                { material: 'silentgear:meteorite_metal' },
                { material: 'silentgear:meteorite_metal' }
              ]
            }
          },
          part: 'silentgear:pickaxe_head'
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

  // Конвертація сокири
  event.custom({
    type: 'silentgear:conversion',
    category: 'misc',
    ingredients: [
      { item: 'roll_mod:meteorite_axe' }
    ],
    result: {
      id: 'silentgear:axe',
      count: 1,
      parts: [
        {
          item: {
            id: 'silentgear:axe_head',
            count: 1,
            components: {
              'silentgear:material_list': [
                { material: 'silentgear:meteorite_metal' },
                { material: 'silentgear:meteorite_metal' }
              ]
            }
          },
          part: 'silentgear:axe_head'
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

  // Конвертація лопати
  event.custom({
    type: 'silentgear:conversion',
    category: 'misc',
    ingredients: [
      { item: 'roll_mod:meteorite_shovel' }
    ],
    result: {
      id: 'silentgear:shovel',
      count: 1,
      parts: [
        {
          item: {
            id: 'silentgear:shovel_head',
            count: 1,
            components: {
              'silentgear:material_list': [
                { material: 'silentgear:meteorite_metal' },
                { material: 'silentgear:meteorite_metal' }
              ]
            }
          },
          part: 'silentgear:shovel_head'
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

  // Конвертація мотики
  event.custom({
    type: 'silentgear:conversion',
    category: 'misc',
    ingredients: [
      { item: 'roll_mod:meteorite_hoe' }
    ],
    result: {
      id: 'silentgear:hoe',
      count: 1,
      parts: [
        {
          item: {
            id: 'silentgear:hoe_head',
            count: 1,
            components: {
              'silentgear:material_list': [
                { material: 'silentgear:meteorite_metal' },
                { material: 'silentgear:meteorite_metal' }
              ]
            }
          },
          part: 'silentgear:hoe_head'
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
