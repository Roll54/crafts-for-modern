ServerEvents.recipes(event => {
  // масиви типів (можеш змінити під свої потреби)
  const mods = ["minecraft"]
  const materials = ["iron", "golden", "diamond", "chainmail", "netherite", "leather"]

  const armorParts = ["helmet", "chestplate", "leggings", "boots"]

  mods.forEach(type1 => {
    materials.forEach(type2 => {
      armorParts.forEach(part => {
        let itemId = `${type1}:${type2}_${part}`
        event.remove({ output: itemId })
      })
    })
  })
})