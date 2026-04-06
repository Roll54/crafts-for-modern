ServerEvents.recipes(event => {


//actually shaped, this type just moves items between containers from sophisticatedbackpacks

/*
event.custom({
  type: "sophisticatedbackpacks:backpack_upgrade",
  key: {
    a: { item: "modern_industrialization:bronze_plate" },
    b: { item: "roll_mod:treated_plate" },
    c: { item: "modern_industrialization:bronze_rod" },
    d: { item: "sophisticatedbackpacks:backpack" }
  },
  pattern: [
    "aba",
    "cdc",
    "aba"
  ],
  result: {
    id: "sophisticatedbackpacks:copper_backpack",
    count: 1
  }
})

event.custom({
  type: "sophisticatedbackpacks:backpack_upgrade",
  key: {
    a: { item: "modern_industrialization:steel_large_plate" },
    b: { item: "modern_industrialization:rubber_sheet" },
    c: { item: "modern_industrialization:black_steel_ingot" },
    d: { item: "sophisticatedbackpacks:copper_backpack" }
  },
  pattern: [
    "aba",
    "cdc",
    "aba"
  ],
  result: {
    id: "sophisticatedbackpacks:iron_backpack",
    count: 1
  }
})


event.custom({
  type: "sophisticatedbackpacks:backpack_upgrade",
  key: {
    a: { item: "roll_mod:redstone_tube" },
    b: { item: "modern_industrialization:cupronickel_wire" },
    c: { item: "modern_industrialization:electrum_wire" },
    d: { item: "sophisticatedbackpacks:iron_backpack" },
    e: { item: "modern_industrialization:aluminum_large_plate" },
    f: { item: "modern_industrialization:silicon_plate" }
  },
  pattern: [
    "aba",
    "cdc",
    "efe"
  ],
  result: {
    id: "sophisticatedbackpacks:gold_backpack",
    count: 1
  }
})

event.custom({
  type: "sophisticatedbackpacks:backpack_upgrade",
  key: {
    a: { item: "roll_mod:energium_battery" },
    b: { item: "modern_industrialization:kanthal_wire" },
    c: { item: "modern_industrialization:polytetrafluoroethylene_plate" },
    d: { item: "sophisticatedbackpacks:gold_backpack" },
    e: { item: "modern_industrialization:stainless_steel_large_plate" },
    f: { item: "modern_industrialization:acrylic_glue_bucket" }
  },
  pattern: [
    "aba",
    "cdc",
    "efe"
  ],
  result: {
    id: "sophisticatedbackpacks:diamond_backpack",
    count: 1
  }
})

event.custom({
  type: "sophisticatedbackpacks:backpack_upgrade",
  key: {
    a: { item: "modern_industrialization:advanced_motor" },
    b: { item: "modern_industrialization:iridium_plate" },
    c: { item: "modern_industrialization:enderium_rod" },
    d: { item: "sophisticatedbackpacks:diamond_backpack" },
    e: { item: "modern_industrialization:blastproof_alloy_large_plate" },
    f: { item: "modern_industrialization:space_alloy_large_plate" }
  },
  pattern: [
    "aba",
    "cdc",
    "efe"
  ],
  result: {
    id: "sophisticatedbackpacks:netherite_backpack",
    count: 1
  }
})
*/// FOR MEW SEASON
})