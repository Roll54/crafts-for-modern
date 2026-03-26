ServerEvents.recipes(event => {
event.replaceInput({ output: 'extendedae:ingredient_buffer' },
    'minecraft:iron_ingot', 'modern_industrialization:aluminum_plate'
  )

  function extending(output, component, processor) {
    event.shaped(
      Item.of(output, 1),[
        'ACA',
        'CPC',
        'ACA',
      ],{
        A: 'modern_industrialization:platinum_plate',
        C: component,
        P: processor,
    })
  }

  extending('extendedae:ex_interface',
    '#ae2:interface', 'ae2:logic_processor')

  extending('extendedae:ex_pattern_provider',
    '#ae2:pattern_provider', 'ae2:engineering_processor')

  function extending_upgrade(output, component, processor) {
    event.shaped(
      Item.of(output, 1),[
        'A A',
        'CPC',
        'ACA',
      ],{
        A: 'modern_industrialization:platinum_plate',
        C: component,
        P: processor,
    })
  }

  extending_upgrade('extendedae:interface_upgrade',
    '#ae2:interface', 'ae2:logic_processor')

  extending_upgrade('extendedae:pattern_provider_upgrade',
  '#ae2:pattern_provider', 'ae2:engineering_processor')
  


   event.replaceInput({ output: 'ae2:interface' },
    'minecraft:iron_ingot', 'modern_industrialization:steel_plate'
  )

  event.replaceInput({ output: 'ae2:storage_bus' },
    'minecraft:piston', 'modern_industrialization:robot_arm'
  )

})
