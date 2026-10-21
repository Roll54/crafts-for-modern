// Уніфікація: заміна предметів на теги / основні версії в усіх рецептах.
// Файл має завантажуватись після інших у changing/ (сортування за алфавітом),
// бо railcraft.js шукає '#c:dusts/redstone' ще до заміни звичайного редстоуну.
ServerEvents.recipes(event => {

  // Замінює `from` на `to` в усіх рецептах, де є `from`
  function unify(from, to) {
    event.replaceInput({ input: from }, from, to)
  }

  // Заміна тільки на вході (тег як вихід не підтримується)
  event.replaceInput({}, 'modern_industrialization:iridium_dust', '#c:dusts/iridium')

  // Пил
  unify('minecraft:redstone', '#c:dusts/redstone')
  unify('minecraft:glowstone_dust', '#roll_mod:glowstone_dust')
  unify('modern_industrialization:sulfur_dust', 'roll_mod:sulfur_dust')

  // TODO: фільтр шукає пил MI, а замінюється пил roll_mod — спрацює лише
  // в рецептах, де є обидва. Мабуть, мало бути unify('roll_mod:..._dust', ...)
  event.replaceInput({ input: 'modern_industrialization:nickel_dust' },
    'roll_mod:nickel_dust', '#c:dusts/nickel')
  event.replaceInput({ input: 'modern_industrialization:coal_dust' },
    'roll_mod:coal_dust', '#c:dusts/coal')

  event.replaceOutput({ input: 'railcraft:sulfur_dust' },
    'railcraft:sulfur_dust', 'roll_mod:sulfur_dust')

  // Батареї
  unify('modern_industrialization:redstone_battery', '#roll_mod:battaries_tier_one')
  unify('modern_industrialization:sodium_battery', '#roll_mod:battaries_tier_three')

  // Схеми Railcraft
  unify('railcraft:controller_circuit', '#roll_mod:controller_circuit')
  unify('railcraft:receiver_circuit', '#roll_mod:receiver_circuit')
  unify('railcraft:signal_circuit', '#roll_mod:signal_circuit')
  unify('railcraft:radio_circuit', '#roll_mod:radio_circuit')

})
