ServerEvents.recipes(event => {

  // Старі мультиблоки зі стартового скрипта -> відповідники з roll_mod
  const multiblocks = {
    'roll_mod:large_chemical_reactor': 'roll_mod:large_chemical_reactor',
    'roll_mod:high_efficiency_steam_turbine': 'roll_mod:high_efficiency_steam_turbine',
    'roll_mod:photolithographer': 'roll_mod:photolithographer',
    'modern_industrialization:pyrolyse_oven': 'roll_mod:pyrolyse_oven',
    'roll_mod:ore_washer': 'roll_mod:ore_washer'
  }

  Object.entries(multiblocks).forEach(([from, to]) => {
    // Пропускаємо, якщо старий блок уже не зареєстрований
    try {
      if (Item.of(from).isEmpty()) return
      event.replaceOutput({ output: from }, from, to)
      event.replaceInput({ input: from }, from, to)
    } catch (e) {
      console.warn(`mi_tweaks.js: пропущено ${from}`)
    }
  })

})
