ServerEvents.recipes(event => {
  const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');
  if (!IS_FORESTRY_LOADED) return;
  console.info('[forestry still] loaded');

  event.recipes.modern_industrialization.distillation_tower(12, 200)
    .fluidIn("forestry:biomass", 1000)
    .fluidOut("forestry:ethanol", 300);
})
