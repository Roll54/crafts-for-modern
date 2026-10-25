ServerEvents.recipes(event => {

  // D-T синтез з літієвим бланкетом: нейтрони реакції D + T -> 4He + n
  // перетворюють літій на тритій (6Li + n -> T + 4He), коефіцієнт відтворення ~1.1
  event.recipes.modern_industrialization.fusion_reactor(16000, 900)
  .fluidIn("modern_industrialization:deuterium", 1000)
  .fluidIn("modern_industrialization:tritium", 1000)
  .fluidIn("modern_industrialization:molten_lithium", 1000)
  .fluidOut("modern_industrialization:helium_plasma", 1000)
  .fluidOut("modern_industrialization:tritium", 1100)
  .fluidOut("modern_industrialization:helium", 1000)


  event.recipes.modern_industrialization.fusion_reactor(20000, 100)
  .fluidIn("2000x modern_industrialization:molten_sunnarium")
  .fluidIn("2000x modern_industrialization:molten_tungsten")
  .fluidIn("1000x modern_industrialization:helium_plasma")
  .fluidOut("1000x roll_mod:block_blencium")

})
