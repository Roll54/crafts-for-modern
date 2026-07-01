ServerEvents.recipes(event => {
  event.recipes.extended_industrialization.canning_machine(2, 100)
  .fluidIn("1000x modern_industrialization:sulfuric_acid")
  .itemIn("1x roll_mod:empty_primitive_battery")
  .itemOut("1x roll_mod:primitive_battery")
})
