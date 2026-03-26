ServerEvents.recipes(event => {
  
event.shapeless('4x roll_mod:treated_planks', ['roll_mod:treated_log']);

  

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
})