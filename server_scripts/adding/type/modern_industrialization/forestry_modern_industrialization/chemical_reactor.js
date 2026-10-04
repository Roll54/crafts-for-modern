ServerEvents.recipes(event => {
  const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');
  if (!IS_FORESTRY_LOADED) return;
  console.info('[forestry squeezer -> chemical_reactor] loaded');

  event.recipes.modern_industrialization.chemical_reactor(16, 100)
    .itemIn("1x minecraft:snowball")
    .itemIn("4x forestry:ice_shard")
    .fluidOut("forestry:crushed_ice", 4000);

  event.recipes.modern_industrialization.chemical_reactor(16, 300)
    .itemIn("1x forestry:phosphor")
    .itemIn("1x minecraft:cobblestone")
    .fluidOut("minecraft:lava", 500);

  event.recipes.modern_industrialization.chemical_reactor(16, 200)
    .itemIn("1x forestry:phosphor")
    .itemIn("1x minecraft:magma_block")
    .fluidOut("minecraft:lava", 1000);

  event.recipes.modern_industrialization.chemical_reactor(16, 200)
    .itemIn("1x forestry:phosphor")
    .itemIn("1x minecraft:sand")
    .fluidOut("minecraft:lava", 500);

  event.recipes.modern_industrialization.chemical_reactor(16, 200)
    .itemIn("1x forestry:phosphor")
    .itemIn("1x minecraft:red_sand")
    .fluidOut("minecraft:lava", 500);
})
