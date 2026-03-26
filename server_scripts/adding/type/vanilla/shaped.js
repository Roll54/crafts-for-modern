ServerEvents.recipes(event => {

      event.shaped(
    Item.of('silentgear:crude_repair_kit', 1),[
      ' A ',
      'B B',
      'BBB',
    ],{
      A: 'modern_industrialization:iron_rod',
      B: '#minecraft:logs',
})
    
      event.shaped(
    Item.of('silentgear:sturdy_repair_kit', 1),[
      ' A ',
      'B B',
      'BBB',
    ],{
      A: 'modern_industrialization:steel_rod',
      B: 'modern_industrialization:iron_plate',
})  
    
       event.shaped(
    Item.of('silentgear:crimson_repair_kit', 1),[
      ' A ',
      'B B',
      'BBB',
    ],{
      A: 'modern_industrialization:aluminum_rod',
      B: 'silentgear:crimson_steel_ingot',
})

       event.shaped(
    Item.of('silentgear:azure_repair_kit', 1),[
      ' A ',
      'B B',
      'BBB',
    ],{
      A: 'modern_industrialization:titanium_rod',
      B: 'silentgear:azure_electrum_ingot',
})

  event.shaped(
    Item.of('modern_industrialization:pyrolyse_oven', 1),[
      'CAC',
      'DBD',
      'CAC',
    ],{
      A: 'modern_industrialization:large_pump',
      C: 'modern_industrialization:invar_large_plate',
      D: 'modern_industrialization:cupronickel_wire_magnetic',
      B: 'modern_industrialization:coke_oven',
  })
    
  event.shaped(
    Item.of('modern_industrialization:chemically_inert_ptfe_casing', 1),[
      'ABA',
      'BCB',
      'ABA',
    ],{
      A: 'modern_industrialization:polytetrafluoroethylene_rod',
      B: 'modern_industrialization:polytetrafluoroethylene_large_plate',
      C: 'modern_industrialization:polytetrafluoroethylene_gear',
  })
    
  event.shaped(
    Item.of('modern_industrialization:polytetrafluoroethylene_machine_casing_pipe', 1),[
      'ABA',
      'ACA',
      'AAA',
    ],{
      A: 'modern_industrialization:platinum_plate',
      B: 'modern_industrialization:polytetrafluoroethylene_gear',
      C: 'modern_industrialization:chemically_inert_ptfe_casing',
  })

  event.shaped(
    Item.of('roll_mod:advanced_conveyor', 1),[
      'SSS',
      'WAW',
      'SSS',
    ],{
      W: 'modern_industrialization:advanced_motor',
      S: 'modern_industrialization:rubber_sheet',
      A: 'modern_industrialization:annealed_copper_cable',
  })

  event.shaped(
    Item.of('roll_mod:advanced_robot_arm', 1),[
      'WWW',
      'ARA',
      'PCR',
    ],{
      A: 'modern_industrialization:advanced_motor',
      C: 'modern_industrialization:digital_circuit',
      P: 'roll_mod:advanced_piston',
      R: 'modern_industrialization:stainless_steel_rod',
      W: 'modern_industrialization:annealed_copper_cable',
  })

  event.shaped(
    Item.of('roll_mod:advanced_piston', 1),[
      'PPP',
      'WBB',
      'WAG',
    ],{
      A: 'modern_industrialization:advanced_motor',
      B: 'modern_industrialization:stainless_steel_rod',
      G: 'modern_industrialization:stainless_steel_gear',
      P: 'modern_industrialization:stainless_steel_plate',
      W: 'modern_industrialization:annealed_copper_cable',
  })


  event.shaped(
    Item.of('hostilenetworks:deep_learner', 1),[
      'ABA',
      'CDC',
      'ACA',
    ],{
      A: 'modern_industrialization:steel_plate',
      B: 'ae2:monitor',
      C: 'modern_industrialization:netherite_plate',
      D: 'modern_industrialization:electronic_circuit',
  })

  event.shaped(
    Item.of('hostilenetworks:blank_data_model', 1),[
      'ABA',
      'BCB',
      'ABA',
    ],{
      A: 'modern_industrialization:aluminum_plate',
      B: 'modern_industrialization:diamond_large_plate',
      C: 'minecraft:clay',
  })

  event.shaped(
    Item.of('hostile_neural_industrialization:mono_loot_fabricator', 1),[
      'ABA',
      'CDC',
      'FGF',
    ],{
      A: 'modern_industrialization:invar_rotary_blade',
      B: 'modern_industrialization:gold_ring',
      C: 'modern_industrialization:netherite_gear',
      D: 'modern_industrialization:advanced_machine_hull',
      F: 'modern_industrialization:electronic_circuit',
      G: 'modern_industrialization:assembler'
  })

  event.shaped(
    Item.of('hostile_neural_industrialization:electric_simulation_chamber', 1),[
      'ABA',
      'BCB',
      'DED',
    ],{
      A: 'modern_industrialization:electronic_circuit',
      B: 'modern_industrialization:netherite_large_plate',
      C: 'modern_industrialization:advanced_machine_hull',
      D: 'modern_industrialization:large_motor',
      E: 'modern_industrialization:invar_rotary_blade',
  })

    event.shaped(
    Item.of('immersive_aircraft:gyrodyne', 1),[
      'ABA',
      'CDC',
      'FFF',
    ],{
      A: 'immersive_aircraft:sail',
      B: 'modern_industrialization:bronze_rotor',
      C: 'modern_industrialization:bronze_gear',
      D: 'modern_industrialization:bronze_rod',
      F: 'roll_mod:treated_planks',
  })

  event.shaped(
    Item.of('stellaris:rocket_station', 1),[
      'AAA',
      'BCD',
      'EFG', 
    ],{
      A: 'roll_mod:advanced_robot_arm',
      B: '#ae2:illuminated_panel',
      C: 'modern_industrialization:configurable_chest',
      D: 'modern_industrialization:advanced_motor',
      E: 'modern_industrialization:turbo_machine_hull',
      F: 'modern_industrialization:assembler',
      G: 'modern_industrialization:annealed_copper_block',
  })

  event.shaped(
    Item.of('ae2:controller', 1),[
      'ABA',
      'BCB',
      'ABA',
    ],{
      A: 'ae2:fluix_crystal',
      B: 'modern_industrialization:analog_circuit',
      C: 'modern_industrialization:basic_machine_hull',
  })

    event.shaped(
    Item.of('travelanchors:travel_anchor', 1),[
      'AAA',
      'ABA',
      'AAA',
    ],{
      A: 'modern_industrialization:black_steel_ingot',
      B: 'minecraft:ender_pearl',
  })

    event.shaped(
    Item.of('travelanchors:travel_staff', 1),[
      ' BC',
      ' AB',
      'A  ',
    ],{
      A: 'modern_industrialization:black_steel_ingot',
      B: 'modern_industrialization:enderium_ingot',
      C: 'minecraft:ender_eye',
  })

    event.shaped(
    Item.of('modern_industrialization:circuit_assembler', 1),[
      ' A ',
      'BCB',
      'DAD',
    ],{
      A: 'modern_industrialization:digital_circuit',
      B: 'roll_mod:advanced_robot_arm',
      C: 'modern_industrialization:assembler',
      D: 'modern_industrialization:advanced_motor',
  })

  event.shaped(
    Item.of('toms_storage:storage_terminal'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        B: 'modern_industrialization:bronze_gear',
        D: 'minecraft:chiseled_bookshelf',
        C: 'minecraft:waxed_copper_bulb',
        A: 'roll_mod:treated_plate'
    }
)

  event.shaped(
    Item.of('toms_storage:crafting_terminal'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        B: 'minecraft:crafter',
        A: 'roll_mod:treated_plate',
        D: 'toms_storage:storage_terminal',
        C: 'modern_industrialization:steel_gear'
    }
)
  event.shaped(
    Item.of('toms_storage:inventory_connector'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        B: 'modern_industrialization:bronze_gear',
        C: 'minecraft:hopper',
        D: 'minecraft:chest',
        A: 'roll_mod:treated_plate'
    }
)

event.shaped(
    Item.of('toms_storage:open_crate'),
    [
        'ABA',
        'CBC',
        'DBD'
    ],
    {
        D: 'modern_industrialization:bronze_gear',
        B: 'minecraft:hopper',
        A: 'roll_mod:treated_plate',
        C: 'roll_mod:treated_log'
    }
)

  event.shaped(
    Item.of('toms_storage:trim', 4),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        C: 'modern_industrialization:bronze_gear',
        D: 'minecraft:chest',
        A: 'roll_mod:treated_log',
        B: 'roll_mod:treated_plate'
    }
)

  event.shaped(
    Item.of('toms_storage:inventory_cable', 3),
    [
        'ABA',
        'CCC',
        'ABA'
    ],
    {
        B: 'modern_industrialization:bronze_gear',
        C: 'modern_industrialization:item_pipe',
        A: 'roll_mod:treated_plate'
    }
)

event.shaped(
    Item.of('toms_storage:inventory_interface'),
    [
        'ABA',
        'CCC',
        'ADA'
    ],
    {
        A: 'roll_mod:treated_planks',
        C: 'minecraft:comparator',
        D: 'minecraft:hopper',
        B: 'minecraft:chest'
    }
)

  event.shaped(
    Item.of('toms_storage:inventory_cable_connector'),
    [
        ' A',
        'BC',
        ' A'
    ],
    {
        A: 'modern_industrialization:bronze_gear',
        C: 'toms_storage:inventory_connector',
        B: 'toms_storage:inventory_cable'
    }
)

  event.shaped(
    Item.of('toms_storage:inventory_proxy'),
    [
        'AAA',
        'BCB',
        'AAA'
    ],
    {
        A: 'roll_mod:treated_planks',
        B: 'minecraft:dropper',
        C: 'minecraft:repeater'
    }
)



event.shaped(
    Item.of('modern_industrialization:thermal_centrefuge'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        E: 'modern_industrialization:large_motor',
        A: 'modern_industrialization:steel_rod_magnetic',
        B: 'modern_industrialization:aluminum_tank',
        C: 'modern_industrialization:cupronickel_coil',
        D: 'modern_industrialization:centrifuge',
        F: 'modern_industrialization:large_pump'
    }
)

event.shaped(
    Item.of('modern_industrialization:lv_ore_washer'),
    [
        'ABA',
        'CDC',
        'EEE'
    ],
    {
        E: 'modern_industrialization:large_motor',
        B: 'modern_industrialization:aluminum_tank',
        A: 'modern_industrialization:aluminum_rotor',
        D: 'modern_industrialization:chemical_reactor',
        C: 'modern_industrialization:large_pump'
    }
)

event.shaped(
    Item.of('ae2:io_port'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        C: 'ae2:drive',
        F: 'ae2:logic_processor',
        E: 'modern_industrialization:aluminum_plate',
        A: 'ae2:export_bus',
        B: 'ae2:cell_component_4k',
        D: 'ae2:fluix_smart_cable'
    }
)

event.shaped(
    Item.of('ae2:drive'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        D: 'minecraft:chiseled_bookshelf',
        B: 'ae2:engineering_processor',
        A: 'modern_industrialization:aluminum_plate',
        C: 'ae2:fluix_smart_cable'
    }
)
event.shaped(
    Item.of('ae2:pattern_provider'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        D: 'minecraft:crafting_table',
        B: 'ae2:logic_processor',
        C: 'modern_industrialization:electrum_plate',
        A: 'modern_industrialization:aluminum_plate'
    }
)

event.shaped(
    Item.of('ae2:crafting_unit'),
    [
        'ABA',
        'C C',
        'ABA'
    ],
    {
        B: 'ae2:calculation_processor',
        C: 'modern_industrialization:electronic_circuit',
        A: 'modern_industrialization:aluminum_large_plate'
    }
)

event.shaped(
    Item.of('ae2:chest'),
    [
        'ABA',
        'C C',
        'DDD'
    ],
    {
        B: 'ae2:terminal',
        D: 'modern_industrialization:aluminum_plate',
        A: 'ae2:quartz_glass',
        C: 'ae2:fluix_smart_cable'
    }
)

event.shaped(
    Item.of('ae2:memory_card'),
    [
        'ABC',
        'DDD'
    ],
    {
        B: 'ae2:calculation_processor',
        C: 'modern_industrialization:aluminum_plate',
        D: 'modern_industrialization:gold_wire',
        A: 'ae2:cell_component_1k'
    }
)

event.shaped(
    Item.of('ae2netanalyser:network_analyser'),
    [
        'A A',
        'BCB',
        '   '
    ],
    {
        B: 'modern_industrialization:lead_plate',
        A: 'modern_industrialization:gold_rod',
        C: 'minecraft:redstone_lamp'
    }
)

event.shaped(
    Item.of('ae2:energy_cell'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        C: 'ae2:calculation_processor',
        B: 'ae2:fluix_block',
        A: 'modern_industrialization:aluminum_plate'
    }
)

event.shaped(
    Item.of('railcraft:steam_locomotive'),
    [
        ' AA',
        'BBC',
        'D D'
    ],
    {
        C: 'modern_industrialization:steel_boiler',
        B: 'modern_industrialization:steel_machine_casing',
        D: 'minecraft:minecart',
        A: 'modern_industrialization:steel_tank'
    }
)

event.shaped(
    Item.of('railcraft:electric_locomotive'),
    [
        'AB ',
        'CDE',
        'FGF'
    ],
    {
        B: 'modern_industrialization:analog_circuit',
        D: 'roll_mod:redstone_battery',
        F: 'modern_industrialization:motor',
        E: 'modern_industrialization:mv_lv_transformer',
        C: 'modern_industrialization:basic_machine_hull',
        G: 'minecraft:minecart',
        A: 'minecraft:redstone_lamp'
    }
)

event.shaped(
    Item.of('ae2:meteorite_compass'),
    [
        ' A ',
        'BCB',
        ' B '
    ],
    {
        C: 'roll_mod:raw_magnetite',
        B: 'modern_industrialization:iron_plate',
        A: 'ae2:charged_certus_quartz_crystal'
    }
)

event.shaped(
    Item.of('stellaris:rocket_launch_pad'),
    [
        'AAA',
        'BBB'
    ],
    {
        A: 'modern_industrialization:netherite_plate',
        B: 'extended_industrialization:steel_plated_bricks'
    }
)

event.shaped(
    Item.of('sophisticatedbackpacks:tank_upgrade'),
    [
        'A',
        'B',
        'A'
    ],
    {
        B: 'sophisticatedbackpacks:upgrade_base',
        A: 'modern_industrialization:steel_tank'
    }
)

event.shaped(
    Item.of('sophisticatedbackpacks:feeding_upgrade'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        B: 'roll_mod:advanced_robot_arm',
        A: 'roll_mod:golden_baton',
        C: 'sophisticatedbackpacks:upgrade_base',
        D: 'minecraft:enchanted_golden_apple',
        E: 'minecraft:cake'
    }
)

event.shaped(
    Item.of('ae2:wireless_receiver'),
    [
        'A B',
        'AC ',
        'DAA'
    ],
    {
        D: 'modern_industrialization:digital_circuit',
        A: 'modern_industrialization:stainless_steel_plate',
        C: 'modern_industrialization:stainless_steel_rod',
        B: 'roll_mod:quantum_star'
    }
)

event.shaped(
    Item.of('ae2:wireless_access_point'),
    [
        'ABA',
        'ACA'
    ],
    {
        A: 'modern_industrialization:stainless_steel_ring',
        C: 'ae2:fluix_smart_dense_cable',
        B: 'ae2:wireless_receiver'
    }
)
event.shaped(
    Item.of('modern_industrialization:titanium_64_machine_casing'),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'modern_industrialization:titanium_64_plate',
        B: 'modern_industrialization:titanium_gear'
    }
)

event.shaped(
    Item.of('extendedae:caner'),
    [
        'ABC',
        'D D',
        'CEA'
    ],
    {
        A: 'ae2:annihilation_core',
        C: 'ae2:formation_core',
        E: 'extendedae:machine_frame',
        B: 'extended_industrialization:electric_canning_machine',
        D: 'modern_industrialization:stainless_steel_rod'
    }
)

event.shaped(
    Item.of('extendedae:ex_import_bus_part'),
    [
        ' AB',
        'C  ',
        ' AB'
    ],
    {
        A: 'ae2:speed_card',
        B: 'roll_mod:advanced_robot_arm',
        C: 'ae2:import_bus'
    }
)

event.shaped(
    Item.of('extendedae:ex_export_bus_part'),
    [
        ' AB',
        'C  ',
        ' AB'
    ],
    {
        A: 'ae2:speed_card',
        B: 'roll_mod:advanced_robot_arm',
        C: 'ae2:export_bus'
    }
)

event.shaped(
    Item.of('extendedae:wireless_tool'),
    [
        'ABA',
        ' C ',
    ],
    {
        C: 'ae2:network_tool',
        B: 'ae2:cell_component_1k',
        A: 'ae2:wireless_receiver'
    }
)


event.shaped(
    Item.of('tide:fishing_line'),
    [
        ' AA',
        ' A ',
        'AA '
    ],
    {
        A: 'minecraft:string'
    }
)

event.shaped(
    Item.of('ae2:cell_workbench'),
    [
        'ABA',
        'CDC',
        'CEC'
    ],
    {
        E: 'minecraft:crafting_table',
        D: 'extendedae:ex_interface',
        B: 'ae2:item_cell_housing',
        A: 'modern_industrialization:robot_arm',
        C: 'modern_industrialization:aluminum_plate'
    }
)

event.shaped(
    Item.of('roll_mod:prospector_pickaxe'),
    [
        'AB',
        'C ',
        'C '
    ],
    {
        B: 'minecraft:iron_nugget',
        A: 'minecraft:iron_ingot',
        C: 'minecraft:stick'
    }
)

event.shaped(
    Item.of('railcraft:powered_rolling_machine'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        B: 'modern_industrialization:motor',
        C: 'modern_industrialization:piston',
        D: 'modern_industrialization:electric_compressor',
        A: 'modern_industrialization:steel_gear'
    }
)

event.shaped(
    Item.of('roll_mod:redstone_tube'),
    [
        'AAA',
        'BCD',
        'EFE'
    ],
    {
        F: 'roll_mod:treated_planks',
        A: 'minecraft:glass',
        C: 'modern_industrialization:electrum_plate',
        D: 'modern_industrialization:steel_rod',
        B: 'modern_industrialization:redstone_alloy_rod',
        E: 'modern_industrialization:redstone_alloy_bolt'
    }
)

event.shaped(
    Item.of('modern_industrialization:analog_circuit'),
    [
        'AAA',
        'BCB',
    ],
    {
        A: 'roll_mod:redstone_tube',
        B: 'modern_industrialization:resistor',
        C: 'modern_industrialization:analog_circuit_board'
    }
)

event.shaped(
    Item.of('roll_mod:amethyst_oscillator'),
    [
        'ABA',
        'BCB',
        'ADA'
    ],
    {
        C: 'minecraft:amethyst_cluster',
        D: 'modern_industrialization:analog_circuit',
        B: 'modern_industrialization:electrum_wire',
        A: 'modern_industrialization:steel_plate'
    }
)

event.shaped(
    Item.of('modern_industrialization:laser_engraver'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        F: 'modern_industrialization:large_motor',
        A: 'roll_mod:energium_laser',
        E: 'modern_industrialization:digital_circuit',
        C: 'modern_industrialization:robot_arm',
        D: 'modern_industrialization:advanced_machine_hull',
        B: 'roll_mod:mirror'
    }
)

event.shaped(
    Item.of('ae2:spatial_io_port'),
    [
        'ABA',
        'CDE',
        'FFF'
    ],
    {
        F: 'ae2:spatial_pylon',
        E: 'ae2:annihilation_core',
        D: 'ae2:io_port',
        C: 'ae2:formation_core',
        B: 'megacells:accumulation_processor',
        A: 'modern_industrialization:osmiridium_plate'
    }
)

event.shaped(
    Item.of('roll_mod:golden_potato'),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'minecraft:gold_nugget',
        B: 'minecraft:potato'
    }
)

event.shaped(
    Item.of('immersive_aircraft:propeller'),
    [
        'AA ',
        ' B ',
        ' AA'
    ],
    {
        B: 'modern_industrialization:steel_rod',
        A: 'modern_industrialization:steel_plate'
    }
)
})