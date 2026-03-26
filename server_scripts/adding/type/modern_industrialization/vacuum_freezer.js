ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.vacuum_freezer(8, 100)
  .fluidIn("modern_industrialization:polytetrafluoroethylene", 100)
  .itemOut("1x modern_industrialization:polytetrafluoroethylene_ingot")
    
})