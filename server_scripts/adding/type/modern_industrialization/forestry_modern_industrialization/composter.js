ServerEvents.recipes(event => {
  const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');
  if (!IS_FORESTRY_LOADED) return;
  console.info('[forestry moistener] loaded');

  event.recipes.extended_industrialization.composter(4, 400)
    .itemIn("1x minecraft:cobblestone")
    .itemOut("1x minecraft:mossy_cobblestone");

  event.recipes.extended_industrialization.composter(4, 400)
    .itemIn("1x minecraft:stone_bricks")
    .itemOut("1x minecraft:mossy_stone_bricks");

  event.recipes.extended_industrialization.composter(4, 100)
    .itemIn("1x minecraft:wheat_seeds")
    .itemOut("1x minecraft:mycelium");

  event.recipes.extended_industrialization.composter(4, 100)
    .itemIn("1x minecraft:spruce_leaves")
    .itemOut("1x minecraft:podzol");
})
