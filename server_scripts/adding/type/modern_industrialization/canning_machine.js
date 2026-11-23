ServerEvents.recipes(event => {
  event.recipes.extended_industrialization.canning_machine(4, 200)
  .fluidIn("1000x modern_industrialization:sulfuric_acid")
  .itemIn("1x roll_mod:empty_primitive_battery")
  .itemOut("1x roll_mod:primitive_battery")
  
  event.recipes.extended_industrialization.canning_machine(4, 200)
  .fluidIn("200x sophisticatedcore:xp_still")
  .itemIn("1x fruitsdelight:jam_bread")
  .itemOut("1x roll_mod:xp_burger")

  // Балончики гербіциду: 1000 мБ рідини = 1 балончик свого рівня
  ;[1, 2, 3].forEach(tier => {
    event.recipes.extended_industrialization.canning_machine(4, 100)
    .fluidIn(`1000x roll_mod:herbicide_tier_${tier}`)
    .itemIn("1x minecraft:glass_bottle")
    .itemOut(`1x roll_mod:herbicide_tier_${tier}`)
  })
})
