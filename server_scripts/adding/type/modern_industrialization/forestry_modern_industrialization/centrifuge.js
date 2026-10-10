ServerEvents.recipes(event => {
  const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');
  if (!IS_FORESTRY_LOADED) return;
  console.info('[forestry squeezer -> centrifuge] loaded');

 event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:frozen_comb")
    .itemOut("1x forestry:beeswax", 0.8)
    .itemOut("1x forestry:honey_drop", 0.7)
    .itemOut("1x minecraft:snowball", 0.4)
    .itemOut("1x forestry:crystalline_pollen_cluster", 0.2)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:honey_comb")
    .itemOut("1x forestry:beeswax")
    .itemOut("1x forestry:honey_drop", 0.9)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:kaolin_comb")
    .itemOut("1x minecraft:clay_ball")
    .itemOut("1x forestry:honey_drop", 0.9)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:mellow_comb")
    .itemOut("1x forestry:honeydew", 0.6)
    .itemOut("1x forestry:beeswax", 0.2)
    .itemOut("1x minecraft:quartz", 0.3)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:mossy_comb")
    .itemOut("1x forestry:beeswax")
    .itemOut("1x forestry:honey_drop", 0.9)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:mysterious_comb")
    .itemOut("1x forestry:pulsating_propolis")
    .itemOut("1x forestry:honey_drop", 0.4)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:parched_comb")
    .itemOut("1x forestry:beeswax")
    .itemOut("1x forestry:honey_drop", 0.9)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:powdery_comb")
    .itemOut("1x forestry:honey_drop", 0.2)
    .itemOut("1x forestry:beeswax", 0.2)
    .itemOut("1x minecraft:gunpowder", 0.9)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:sculken_comb")
    .itemOut("1x forestry:beeswax")
    .itemOut("1x forestry:experience_drop", 0.9)
    .itemOut("1x minecraft:sculk", 0.2)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:silky_comb")
    .itemOut("1x forestry:honey_drop")
    .itemOut("1x forestry:silky_propolis", 0.8)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:silky_propolis")
    .itemOut("1x forestry:silk_wisp", 0.6)
    .itemOut("1x forestry:propolis", 0.1)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:simmering_comb")
    .itemOut("1x forestry:refractory_wax")
    .itemOut("1x forestry:magmatic_drop", 0.7)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:stringy_comb")
    .itemOut("1x forestry:propolis")
    .itemOut("1x forestry:honey_drop", 0.4)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:vintage_comb")
    .itemOut("1x forestry:beeswax")
    .itemOut("1x forestry:honeydew", 0.9)
    .itemOut("1x forestry:amber", 0.5)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:wheaten_comb")
    .itemOut("1x forestry:honey_drop", 0.2)
    .itemOut("1x forestry:beeswax", 0.2)
    .itemOut("1x minecraft:wheat", 0.8)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:cocoa_comb")
    .itemOut("1x forestry:beeswax")
    .itemOut("1x minecraft:cocoa_beans", 0.5)

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x minecraft:honeycomb")
    .itemOut("1x forestry:beeswax")

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:dripping_comb")
    .itemOut("1x forestry:honeydew")
    .itemOut("1x forestry:honey_drop", 0.4)
  
  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x minecraft:cactus")
    .fluidOut("minecraft:water", 500);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:can")
    .itemOut("1x forestry:tin_ingot", 0.05);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:wax_capsule")
    .itemOut("1x forestry:beeswax", 0.1);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:refractory_capsule")
    .itemOut("1x forestry:refractory_wax", 0.1);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:experience_drop")
    .fluidOut("forestry:experience", 250);

  event.recipes.modern_industrialization.centrifuge(16, 200)
    .itemIn("1x #c:fruits/cherry")
    .itemOut("1x forestry:mulch", 0.05)
    .fluidOut("forestry:fruit_juice", 50);

  event.recipes.modern_industrialization.centrifuge(16, 700)
    .itemIn("1x #c:fruits/chestnut")
    .itemOut("1x forestry:mulch", 0.02)
    .fluidOut("forestry:seed_oil", 80);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:fruits/coconut")
    .itemOut("1x forestry:mulch", 0.25)
    .fluidOut("minecraft:milk", 500);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:fruits/date")
    .itemOut("1x forestry:mulch", 0.2)
    .fluidOut("forestry:fruit_juice", 50);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:fruits/feijoa")
    .itemOut("1x forestry:mulch", 0.2)
    .fluidOut("forestry:fruit_juice", 100);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:fruits/lemon")
    .itemOut("1x forestry:mulch", 0.1)
    .fluidOut("forestry:fruit_juice", 400);

  event.recipes.modern_industrialization.centrifuge(16, 700)
    .itemIn("1x #c:fruits/olive")
    .itemOut("1x forestry:mulch", 0.02)
    .fluidOut("forestry:seed_oil", 100);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:fruits/orange")
    .itemOut("1x forestry:mulch", 0.1)
    .fluidOut("forestry:fruit_juice", 400);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:fruits/papaya")
    .itemOut("1x forestry:mulch", 0.1)
    .fluidOut("forestry:fruit_juice", 600);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:fruits/pear")
    .itemOut("1x forestry:mulch", 0.6)
    .fluidOut("forestry:fruit_juice", 100);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:fruits/plum")
    .itemOut("1x forestry:mulch", 0.6)
    .fluidOut("forestry:fruit_juice", 100);

  event.recipes.modern_industrialization.centrifuge(16, 600)
    .itemIn("1x #c:fruits/walnut")
    .itemOut("1x forestry:mulch", 0.05)
    .fluidOut("forestry:seed_oil", 50);

  event.recipes.modern_industrialization.centrifuge(16, 600)
    .itemIn("1x minecraft:honey_block")
    .fluidOut("forestry:honey", 800);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:honeydew")
    .fluidOut("forestry:honey", 100);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:honey_drop")
    .itemOut("1x forestry:propolis", 0.05)
    .fluidOut("forestry:honey", 100);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:magmatic_drop")
    .fluidOut("forestry:honey", 100);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x minecraft:apple")
    .itemOut("1x forestry:mulch", 0.2)
    .fluidOut("forestry:fruit_juice", 200);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x minecraft:carrot")
    .itemOut("1x forestry:mulch", 0.2)
    .fluidOut("forestry:fruit_juice", 200);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x #c:seeds")
    .fluidOut("forestry:seed_oil", 10);

  event.recipes.modern_industrialization.centrifuge(16, 100)
    .itemIn("1x forestry:spongy_comb")
    .itemOut("1x minecraft:sponge", 0.02)
    .fluidOut("forestry:honey", 100);
})
