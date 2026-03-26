ServerEvents.recipes(event => {


//actually shaped, this type just moves items between containers from sophisticatedbackpacks

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



})