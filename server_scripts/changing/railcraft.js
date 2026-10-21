ServerEvents.recipes(event => {

  // Редстоун-пил у трек-кітах -> редстоун-сплав
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
    'railcraft:embarking_track_kit',
  ]

  trackKits.forEach(item => {
    event.replaceInput({ output: item },
      '#c:dusts/redstone', 'modern_industrialization:redstone_alloy_ingot')
  })

  event.replaceInput({ output: 'railcraft:force_track_emitter' },
    'railcraft:charge_coil', 'modern_industrialization:cupronickel_coil')

})
