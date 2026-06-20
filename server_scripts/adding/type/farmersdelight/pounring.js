ServerEvents.recipes(event => {


event.custom({
  type: "brewinandchewin:keg_pouring",
  item: {
    count: 1,
    id: "minecraft:glass_bottle"
  },
  fluid: {
    amount: 20,
    id: "modern_industrialization:acetic_acid"
  },
  output: {
    count: 1,
    id: "roll_mod:herbicide_tier_1"
  },
  unit: "millibuckets"
})




})