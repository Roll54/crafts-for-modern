// server_scripts/adding/type/silentgear/convert.js

ServerEvents.recipes(event => {
  const tools = [
    { input: 'roll_mod:meteorite_sword', output: 'silentgear:sword', head: 'sword_blade' },
    { input: 'roll_mod:meteorite_pickaxe', output: 'silentgear:pickaxe', head: 'pickaxe_head' },
    { input: 'roll_mod:meteorite_axe', output: 'silentgear:axe', head: 'axe_head' },
    { input: 'roll_mod:meteorite_shovel', output: 'silentgear:shovel', head: 'shovel_head' },
    { input: 'roll_mod:meteorite_hoe', output: 'silentgear:hoe', head: 'hoe_head' }
  ]

  tools.forEach(tool => {
    event.custom({
      type: 'silentgear:conversion',
      category: 'misc',
      ingredients: [{ item: tool.input }],
      result: {
        id: tool.output,
        count: 1,
        parts: [  // <-- Це МАСИВ!
          {
            item: {
              id: `silentgear:${tool.head}`,
              count: 1,
              components: {
                'silentgear:material_list': [
                  { material: 'silentgear:meteorite_metal' },
                  { material: 'silentgear:meteorite_metal' }
                ]
              }
            },
            part: `silentgear:${tool.head}`
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
        ]  // <-- Закриття масиву
      }
    })
  })
})
