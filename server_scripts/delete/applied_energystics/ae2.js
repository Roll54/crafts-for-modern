ServerEvents.recipes(event => {

  event.remove({ output: 'ae2:silicon' })
  event.remove({ input: 'ae2:silicon' })

  event.remove({ output: 'ae2:sky_dust' })
  event.remove({ input: 'ae2:sky_dust' })

// Блоки
  event.remove({ output: 'ae2:quartz_glass' })
  event.remove({ output: 'ae2:quartz_vibrant_glass' })
  
// Кабелі
  event.remove({ output: 'ae2:cable_anchor' })
  event.remove({ output: 'ae2:quartz_fiber' })
  event.remove({ input: 'ae2:quartz_fiber', output: 'ae2:fluix_glass_cable' })
  event.remove({ input: 'ae2:fluix_glass_cable', output: 'ae2:fluix_covered_cable' })
  event.remove({ input: 'ae2:fluix_covered_dense_cable', output: 'ae2:fluix_smart_dense_cable' })
  event.remove({ input: 'minecraft:redstone', output: 'ae2:fluix_smart_cable' })

// Компоненти
  event.remove({ output: 'ae2:printed_silicon' })
  event.remove({ output: 'ae2:printed_logic_processor' })
  event.remove({ output: 'ae2:printed_engineering_processor' })
  event.remove({ output: 'ae2:printed_calculation_processor' })
  event.remove({ output: 'extendedae:concurrent_processor_print' })




  
  event.remove({ output: 'ae2:item_cell_housing' })
  event.remove({ output: 'ae2:fluid_cell_housing' })

  event.remove({ output: 'ae2:cell_component_1k' })
  event.remove({ output: 'ae2:cell_component_4k' })
  event.remove({ output: 'ae2:cell_component_16k' })
  event.remove({ output: 'ae2:cell_component_64k' })
  event.remove({ output: 'ae2:cell_component_256k' })

  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:view_cell' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_1k' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_4k' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_16k' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_64k' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:item_storage_cell_256k' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_1k' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_4k' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_16k' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_64k' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'ae2:fluid_storage_cell_256k' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:spatial_storage_cell_2' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:spatial_storage_cell_16' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:spatial_storage_cell_128' })

  event.remove({ output: 'ae2:spatial_cell_component_2' })
  event.remove({ output: 'ae2:spatial_cell_component_16' })
  event.remove({ output: 'ae2:spatial_cell_component_128' })

// Інструменти
  event.remove({ output: 'ae2:tiny_tnt' })

  event.remove({ output: '#ae2:knife' })
  event.remove({ output: 'ae2:crank' })

  event.remove({ output: 'ae2:charged_staff' })
  event.remove({ output: 'ae2:entropy_manipulator' })

  event.remove({ output: 'ae2:matter_cannon' })

// Пристрої
  event.remove({ output: 'ae2:sky_stone_tank' })
  event.remove({ output: 'ae2:quartz_fixture' })
  event.remove({ output: 'ae2:energy_acceptor', input: 'minecraft:copper_ingot' })
  event.remove({ output: 'ae2:crystal_resonance_generator' })
  event.remove({ output: 'ae2:vibration_chamber' })
  event.remove({ output: 'ae2:charger' })
  event.remove({ type: 'ae2:charger' })
  event.remove({ output: 'ae2:inscriber' })
  event.remove({ type: 'ae2:inscriber' })
  
  event.remove({ output: 'ae2:cell_workbench' })

  event.remove({ output: 'ae2:wireless_receiver' })
  event.remove({ output: 'ae2:wireless_access_point' })

  event.remove({ output: 'ae2:spatial_anchor' })      // ЗМІНИТИ ПОТІМ РЕЦЕПТ, ЯКЩО ВІН ПОТРІБНИЙ
  event.remove({ output: 'ae2:spatial_pylon' })

  event.remove({ output: 'ae2:energy_cell' })

  event.remove({ output: 'ae2:basic_card' })
  event.remove({ output: 'ae2:advanced_card' })
  event.remove({ output: 'ae2:wireless_booster' })

  event.remove({ output: 'ae2:spatial_io_port' })

  event.remove({ output: 'ae2wtlib:quantum_bridge_card' })

// Extended AE
  event.remove({ output: 'extendedae:ex_charger' })
  event.remove({ type: 'extendedae:ex_charger' })
  event.remove({ output: 'extendedae:ex_inscriber' })
  event.remove({ type: 'extendedae:assebler' })

  event.remove([{ input: 'ae2:logic_processor', output: 'extendedae:ex_interface' }])
  event.remove({ output: 'extendedae:interface_upgrade' })
  event.remove([{ input: 'ae2:engineering_processor', output: 'extendedae:ex_pattern_provider' }])
  event.remove({ output: 'extendedae:pattern_provider_upgrade' })
  event.remove({ output: 'extendedae:machine_frame' })

  event.remove([{ output: 'extendedae:ex_drive' }])
  event.remove([{ output: 'extendedae:drive_upgrade' }])

  event.remove([{ output: 'extendedae:infinity_cell' }])

  event.remove({ output: 'extendedae:crystal_assembler' })
  event.remove({ output: 'extendedae:ex_molecular_assembler' })

// MEGA Cells
  event.remove({ output: 'megacells:sky_steel_ingot' })
  event.remove({ output: 'megacells:sky_steel_block' })

  event.remove({ output: 'megacells:accumulation_processor_press' })

  event.remove({ output: 'megacells:printed_accumulation_processor' })
  event.remove({ output: 'megacells:accumulation_processor' })

  event.remove({ output: 'megacells:mega_interface' })
  event.remove({ output: 'megacells:mega_pattern_provider' })

  event.remove({ output: 'megacells:mega_item_cell_housing' })
  event.remove({ output: 'megacells:mega_fluid_cell_housing' })
  
  event.remove({ output: 'megacells:cell_component_1m' })
  event.remove({ output: 'megacells:cell_component_4m' })
  event.remove({ output: 'megacells:cell_component_16m' })
  event.remove({ output: 'megacells:cell_component_64m' })
  event.remove({ output: 'megacells:cell_component_256m' })

  event.remove({ input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_1m' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_4m' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_16m' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_64m' })
  event.remove({ input: 'minecraft:iron_ingot', output: 'megacells:item_storage_cell_256m' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_1m' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_4m' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_16m' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_64m' })
  event.remove({ input: 'minecraft:copper_ingot', output: 'megacells:fluid_storage_cell_256m' })

  event.remove({ output: 'megacells:bulk_cell_component' })
  event.remove({ output: 'megacells:bulk_item_cell' })
  
  event.remove({ output: 'ae2:molecular_assembler' })
  
  event.remove({ output: 'ae2:formation_core' })
  event.remove({ output: 'ae2:annihilation_core' })
  
  event.remove({ output: 'ae2:formation_plane' })
  event.remove({ output: 'ae2:annihilation_plane' })

  event.remove({ output: 'ae2:me_p2p_tunnel' })
  
  event.remove({ output: 'merequester:requester' })
  
  event.remove({ output: 'ae2:blank_pattern' })
  event.remove({ output: 'ae2:drive' })
  event.remove({ output: 'ae2:memory_card' })
  event.remove({ output: 'ae2:chest' })
  event.remove({ output: 'ae2:crafting_unit' })
  event.remove({ output: 'extendedae:wireless_tool' })
  event.remove({ output: 'extendedae:crystal_fixer' })
  event.remove({ output: 'ae2:io_port' })
  event.remove({ output: 'ae2:growth_accelerator' })
  event.remove({ output: 'ae2:condenser' })
  event.remove({ output: 'ae2:quantum_ring' })
  event.remove({ output: 'ae2:quantum_link' })
  event.remove({ output: 'ae2:controller' })
  
  event.remove({ input: 'minecraft:iron_ingot', output: 'ae2:pattern_provider' })
  
  event.remove({ output: 'extendedae:assembler_matrix_wall' })
  event.remove({ output: 'extendedae:assembler_matrix_glass' })
  
  
  
  
  


})