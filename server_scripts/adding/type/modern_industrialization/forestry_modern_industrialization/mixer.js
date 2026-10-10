ServerEvents.recipes(event => {
  const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');
  if (!IS_FORESTRY_LOADED) return;
  console.info('[forestry still] loaded');

  event.recipes.modern_industrialization.mixer(16, 100)
    .itemIn("2x forestry:ash")
    .fluidIn("minecraft:water", 250)
    .itemOut("1x forestry:ash_brick");

  event.recipes.modern_industrialization.mixer(16, 100)
    .itemIn("4x minecraft:dirt")
    .itemIn("4x #c:sands")
    .itemIn("1x forestry:mulch")
    .fluidIn("minecraft:water", 250)
    .itemOut("8x forestry:bog_earth");

  event.recipes.modern_industrialization.mixer(16, 100)
    .itemIn("4x #c:sawdust")
    .fluidIn("minecraft:water", 250)
    .itemOut("4x forestry:cork");

  event.recipes.modern_industrialization.mixer(16, 100)
    .itemIn("8x minecraft:dirt")
    .itemIn("1x forestry:mulch")
    .fluidIn("minecraft:water", 250)
    .itemOut("9x forestry:humus");

  event.recipes.modern_industrialization.mixer(16, 100)
    .itemIn("3x #minecraft:wooden_slabs")
    .itemIn("3x #c:sawdust")
    .fluidIn("minecraft:water", 250)
    .itemOut("24x forestry:plywood");

  event.recipes.modern_industrialization.mixer(16, 200)
    .itemIn("4x minecraft:grass_block")
    .fluidIn("minecraft:water", 250)
    .itemOut("4x forestry:turf_block");
})
