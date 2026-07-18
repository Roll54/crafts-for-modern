ServerEvents.recipes(event => {
  event.recipes.extended_industrialization.canning_machine(4, 200)
  .fluidIn("1000x modern_industrialization:sulfuric_acid")
  .itemIn("1x roll_mod:empty_primitive_battery")
  .itemOut("1x roll_mod:primitive_battery")
  
  event.recipes.extended_industrialization.canning_machine(4, 200)
  .fluidIn("200x sophisticatedcore:xp_still")
  .itemIn("1x fruitsdelight:jam_bread")
  .itemOut("1x roll_mod:xp_burger")
})
