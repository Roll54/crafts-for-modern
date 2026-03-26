ServerEvents.recipes(event => {
  // Моди, з яких видаляємо інструменти
  const mods = [
    "ae2"
  ]

  // Матеріали, які мають інструменти
  const materials = [
    "fluix",
    "nether_quartz",
    "certus_quartz"
  ]

  // Типи інструментів
  const toolParts = [
    "sword",
    "shovel",
    "pickaxe",
    "axe",
    "hoe"
  ]

  // Видаляємо рецепти для всіх інструментів
  mods.forEach(mod => {
    materials.forEach(mat => {
      toolParts.forEach(part => {
        const id = `${mod}:${mat}_${part}`
        event.remove({ output: id })
        console.log(`[TOOLS] Removed recipe for ${id}`)
      })
    })
  })
})