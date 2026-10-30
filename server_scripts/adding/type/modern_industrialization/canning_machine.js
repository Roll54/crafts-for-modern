ServerEvents.recipes(event => {
  event.recipes.extended_industrialization.canning_machine(4, 200)
  .fluidIn("1000x modern_industrialization:sulfuric_acid")
  .itemIn("1x roll_mod:empty_primitive_battery")
  .itemOut("1x roll_mod:primitive_battery")
  
  event.recipes.extended_industrialization.canning_machine(4, 200)
  .fluidIn("200x sophisticatedcore:xp_still")
  .itemIn("1x fruitsdelight:jam_bread")
  .itemOut("1x roll_mod:xp_burger")

  // Досвід з узагальнених передбачень
  const xpPredictions = [
    ['hostilenetworks:overworld_prediction', 25],
    ['hostilenetworks:nether_prediction', 50],
    ['hostilenetworks:end_prediction', 75]
  ]

  xpPredictions.forEach(p => {
    event.recipes.extended_industrialization.canning_machine(4, 100)
    .itemIn(`1x ${p[0]}`)
    .fluidOut(`${p[1]}x sophisticatedcore:xp_still`)
  })

  event.recipes.extended_industrialization.canning_machine(4, 100)
  .itemIn("1x sophisticatedcore:xp_bucket")
  .itemOut("1x minecraft:bucket")
  .fluidOut("1000x sophisticatedcore:xp_still")
})
