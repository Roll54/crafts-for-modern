ServerEvents.recipes(event => {

  // D-T синтез з літієвим бланкетом: нейтрони реакції D + T -> 4He + n
  // перетворюють літій на тритій (6Li + n -> T + 4He), коефіцієнт відтворення ~1.1
  event.recipes.modern_industrialization.fusion_reactor(16000, 900)
  .fluidIn("1000x modern_industrialization:deuterium")
  .fluidIn("1000x modern_industrialization:tritium")
  .fluidIn("1000x modern_industrialization:molten_lithium")
  .fluidOut("1000x modern_industrialization:helium_plasma")
  .fluidOut("1100x modern_industrialization:tritium")
  .fluidOut("1000x modern_industrialization:helium")


  event.recipes.modern_industrialization.fusion_reactor(20000, 100)
  .fluidIn("2000x modern_industrialization:molten_sunnarium")
  .fluidIn("2000x modern_industrialization:molten_tungsten")
  .fluidOut("1000x roll_mod:block_blencium")

})
