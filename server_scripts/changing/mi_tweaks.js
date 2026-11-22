ServerEvents.recipes(event => {

  // Мультиблоки mi_tweaks -> відповідники з roll_mod
  const multiblocks = [
    'large_chemical_reactor',
    'high_efficiency_steam_turbine',
    'photolithographer',
    'pyrolyse_oven',
    'ore_washer'
  ]

  multiblocks.forEach(name => {
    const from = `mi_tweaks:${name}`
    const to = `roll_mod:${name}`
    event.replaceOutput({ output: from }, from, to)
    event.replaceInput({ input: from }, from, to)
  })

})
