ServerEvents.recipes(event => {

  function unify(from, to) {
    event.replaceInput({ input: from }, from, to)
  }

  event.replaceInput({}, 'modern_industrialization:iridium_dust', '#c:dusts/iridium')

  unify('minecraft:redstone', '#c:dusts/redstone')
  unify('minecraft:glowstone_dust', '#roll_mod:glowstone_dust')
  unify('modern_industrialization:sulfur_dust', 'roll_mod:sulfur_dust')
  unify('modern_industrialization:antimony_dust', '#c:dusts/antimony')

  event.replaceInput({ input: 'modern_industrialization:nickel_dust' },
    'roll_mod:nickel_dust', '#c:dusts/nickel')
  event.replaceInput({ input: 'modern_industrialization:coal_dust' },
    'roll_mod:coal_dust', '#c:dusts/coal')

  event.replaceOutput({ input: 'railcraft:sulfur_dust' },
    'railcraft:sulfur_dust', 'roll_mod:sulfur_dust')

  unify('modern_industrialization:redstone_battery', '#roll_mod:battaries_tier_one')
  unify('modern_industrialization:sodium_battery', '#roll_mod:battaries_tier_three')

  unify('railcraft:controller_circuit', '#roll_mod:controller_circuit')
  unify('railcraft:receiver_circuit', '#roll_mod:receiver_circuit')
  unify('railcraft:signal_circuit', '#roll_mod:signal_circuit')
  unify('railcraft:radio_circuit', '#roll_mod:radio_circuit')
})
