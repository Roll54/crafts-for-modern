ServerEvents.recipes(event => {

  // Старі мультиблоки зі стартового скрипта -> відповідники з roll_mod
  const multiblocks = {
    'mi_tweaks:large_chemical_reactor': 'roll_mod:large_chemical_reactor',
    'modern_industrialization:high_efficiency_steam_turbine': 'roll_mod:high_efficiency_steam_turbine',
    'modern_industrialization:photolithographer': 'roll_mod:photolithographer',
    'modern_industrialization:pyrolyse_oven': 'roll_mod:pyrolyse_oven',
    'modern_industrialization:ore_washer': 'roll_mod:ore_washer'
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
