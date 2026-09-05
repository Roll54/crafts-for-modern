ServerEvents.recipes(event => {

const trackKits = [
    'railcraft:coupler_track_kit',
    'railcraft:detector_track_kit',
    'railcraft:gated_track_kit',
    'railcraft:control_track_kit',
    'railcraft:booster_track_kit',
    'railcraft:activator_track_kit',
    'railcraft:buffer_stop_track_kit',
    'railcraft:locking_track_kit',
    'railcraft:transition_track_kit',
    'railcraft:disembarking_track_kit',
    'railcraft:dumping_track_kit',
    'railcraft:launcher_track_kit',
    'railcraft:one_way_track_kit',
    'railcraft:whistle_track_kit',
    'railcraft:locomotive_track_kit',
    'railcraft:throttle_track_kit',
    'railcraft:routing_track_kit',
    'railcraft:embarking_track_kit'
];

trackKits.forEach(item => {
    event.replaceInput(
        { output: item },
        '#c:dusts/redstone',
        'modern_industrialization:redstone_alloy_ingot'
    );
});

event.replaceInput(
  { output: 'railcraft:force_track_emitter' },
  'railcraft:charge_coil',
  'modern_industrialization:cupronickel_coil'
)

event.replaceInput(
  { input: 'modern_industrialization:coal_dust' },
  'roll_mod:coal_dust',
  '#c:dusts/coal')
  
event.replaceInput(
  { output: 'modern_industrialization:steam_mining_drill' },
  'minecraft:diamond',
  'roll_mod:diamond_alloy_plate'
)

event.replaceInput(
  { output: 'extended_industrialization:steam_chainsaw' },
  'minecraft:diamond',
  'roll_mod:diamond_alloy_plate'
)

event.replaceInput(
  { input: 'railcraft:controller_circuit' },
  'railcraft:controller_circuit',
  '#roll_mod:controller_circuit')

event.replaceInput(
  { input: 'railcraft:receiver_circuit' },
  'railcraft:receiver_circuit',
  '#roll_mod:receiver_circuit')

event.replaceInput(
  { input: 'railcraft:signal_circuit' },
  'railcraft:signal_circuit',
  '#roll_mod:signal_circuit')

event.replaceInput(
  { input: 'railcraft:radio_circuit' },
  'railcraft:radio_circuit',
  '#roll_mod:radio_circuit')
  
event.replaceOutput(
  { input: 'railcraft:sulfur_dust' },
  'railcraft:sulfur_dust',
  'roll_mod:sulfur_dust')

event.replaceInput(
  { input: 'modern_industrialization:sulfur_dust' },
  'modern_industrialization:sulfur_dust',
  'roll_mod:sulfur_dust')
  
event.replaceInput(
  { input: 'minecraft:netherite_helmet' },
  'minecraft:netherite_helmet',
  'roll_mod:hazmat_helmet')
    
event.replaceInput(
  { input: 'minecraft:netherite_chestplate' },
  'minecraft:netherite_chestplate',
  'roll_mod:hazmat_chestplate')

event.replaceInput(
  { input: 'minecraft:netherite_leggings' },
  'minecraft:netherite_leggings',
  'roll_mod:hazmat_leggings')

event.replaceInput(
  { input: 'minecraft:netherite_boots' },
  'minecraft:netherite_boots',
  'roll_mod:hazmat_boots')

event.replaceInput(
  { input: 'minecraft:redstone' },
  'minecraft:redstone',
  '#c:dusts/redstone')

event.replaceInput(
  { input: 'modern_industrialization:redstone_battery' },
  'modern_industrialization:redstone_battery',
  '#roll_mod:battaries_tier_one')

event.replaceInput(
  { input: 'minecraft:glowstone_dust' },
  'minecraft:glowstone_dust',
  '#roll_mod:glowstone_dust')

})
