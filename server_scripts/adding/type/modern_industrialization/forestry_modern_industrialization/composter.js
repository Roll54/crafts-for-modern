ServerEvents.recipes(event => {
  const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');
  if (!IS_FORESTRY_LOADED) return;
  console.info('[forestry moistener] loaded');

  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x minecraft:cactus")
    .fluidIn("minecraft:water", 50)
    .fluidOut("forestry:biomass", 50);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x minecraft:cactus")
    .fluidIn("forestry:honey", 50)
    .fluidOut("forestry:biomass", 75);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x minecraft:cactus")
    .fluidIn("forestry:fruit_juice", 50)
    .fluidOut("forestry:biomass", 75);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x forestry:honeydew")
    .fluidIn("forestry:honey", 500)
    .fluidOut("forestry:short_mead", 500);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:mushrooms")
    .fluidIn("minecraft:water", 50)
    .fluidOut("forestry:biomass", 50);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:mushrooms")
    .fluidIn("forestry:honey", 50)
    .fluidOut("forestry:biomass", 75);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:mushrooms")
    .fluidIn("forestry:fruit_juice", 50)
    .fluidOut("forestry:biomass", 75);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:crops/potato")
    .fluidIn("minecraft:water", 100)
    .fluidOut("forestry:biomass", 100);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:crops/potato")
    .fluidIn("forestry:honey", 100)
    .fluidOut("forestry:biomass", 150);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:crops/potato")
    .fluidIn("forestry:fruit_juice", 100)
    .fluidOut("forestry:biomass", 150);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #minecraft:saplings")
    .fluidIn("minecraft:water", 250)
    .fluidOut("forestry:biomass", 250);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #minecraft:saplings")
    .fluidIn("forestry:honey", 250)
    .fluidOut("forestry:biomass", 375);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #minecraft:saplings")
    .fluidIn("forestry:fruit_juice", 250)
    .fluidOut("forestry:biomass", 375);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x minecraft:sugar_cane")
    .fluidIn("minecraft:water", 50)
    .fluidOut("forestry:biomass", 50);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x minecraft:sugar_cane")
    .fluidIn("forestry:honey", 50)
    .fluidOut("forestry:biomass", 75);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x minecraft:sugar_cane")
    .fluidIn("forestry:fruit_juice", 50)
    .fluidOut("forestry:biomass", 75);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:crops/wheat")
    .fluidIn("minecraft:water", 50)
    .fluidOut("forestry:biomass", 50);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:crops/wheat")
    .fluidIn("forestry:honey", 50)
    .fluidOut("forestry:biomass", 75);
 
  event.recipes.extended_industrialization.composter(4, 200)
    .itemIn("1x #c:crops/wheat")
    .fluidIn("forestry:fruit_juice", 50)
    .fluidOut("forestry:biomass", 75);
  
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
