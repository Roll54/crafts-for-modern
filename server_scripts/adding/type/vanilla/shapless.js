ServerEvents.recipes(event => {

event.shapeless(
    Item.of('modern_industrialization:bauxite_block'),
    [
        '#c:dusts/bauxite',
        '#c:dusts/bauxite',
        '#c:dusts/bauxite',
        '#c:dusts/bauxite',
        '#c:dusts/bauxite',
        '#c:dusts/bauxite',
        '#c:dusts/bauxite',
        '#c:dusts/bauxite',
        '#c:dusts/bauxite'
    ]
)
  
event.shapeless('4x roll_mod:treated_planks', ['roll_mod:treated_log']);

event.shapeless("toms_storage:paint_kit", [
      "sophisticatedstorage:paintbrush",
      "minecraft:green_dye",
      "minecraft:black_dye",
      "minecraft:white_dye",
      "minecraft:blue_dye",
      "minecraft:red_dye",
      "minecraft:bucket"
  ])

event.shapeless(
    Item.of('roll_mod:nylon_fabric'),
    [
        '9x roll_mod:nylon_string'
    ]
)

event.shapeless(
    Item.of('modern_industrialization:coal_tiny_dust', 9),
    [
        'roll_mod:coal_dust'
    ]
)
  
event.shapeless('8x createcybernetics:andouille_sausage', [
    '4x createcybernetics:ground_offal',
    'createcybernetics:bodypart_intestines'
])

event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {
      "item": "modern_industrialization:copper_drill"
    },
    {
      "item": "minecraft:book"
    },
    {
      "item": "modern_industrialization:analog_circuit"
    }
  ],
  "result": {
    "id": "patchouli:guide_book",
    "components": {
      "patchouli:book": "buildinggadgets2:buildinggadgets2book"
    }
  }
})

event.shapeless('roll_mod:1_circuit', ['modern_industrialization:analog_circuit']);
event.shapeless('roll_mod:2_circuit', ['roll_mod:1_circuit']);
event.shapeless('roll_mod:3_circuit', ['roll_mod:2_circuit']);
event.shapeless('modern_industrialization:analog_circuit', ['roll_mod:3_circuit']);

event.shapeless('5x modern_industrialization:black_bronze_dust', ['#c:dusts/copper', '#c:dusts/copper', '#c:dusts/copper', '#c:dusts/copper', '#c:dusts/copper', '#c:dusts/gold','#c:dusts/gold', '#c:dusts/silver', '#c:dusts/silver']);

event.shapeless(
    Item.of('modern_industrialization:bismuth_bronze_dust', 4),
    [
        '#c:dusts/copper',
        '#c:dusts/copper',
        '#c:dusts/copper',
        'roll_mod:bismuth_dust',
        'roll_mod:bismuth_dust',
        '#c:dusts/copper',
        '#c:dusts/zinc',
        '#c:dusts/zinc',
        '#c:dusts/zinc'
    ]
)

event.shapeless(
    'patchouli:guide_book{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}',
    [
        'modern_industrialization:copper_drill',
        'minecraft:book',
        'modern_industrialization:analog_circuit'
    ]
)
  
event.shapeless(
    Item.of('modern_industrialization:sulfur_dust'),
    [
        'roll_mod:sulfur_dust'
    ]
)
event.shapeless(
    Item.of('extendedae:assembler_matrix_glass'),
    [
        'extendedae:assembler_matrix_wall',
        'ae2:quartz_glass'
    ]
)
event.shapeless(
    Item.of('modern_industrialization:sulfur_dust'),
    [
        'railcraft:sulfur_dust'
    ]
)

event.shapeless(
    Item.of('railcraft:tank_minecart'),
    [
        'minecraft:minecart',
        'modern_industrialization:steel_tank'
    ]
)
})
