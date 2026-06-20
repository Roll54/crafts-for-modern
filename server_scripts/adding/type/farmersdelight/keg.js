ServerEvents.recipes(event => {



const alcohols = [
  "brewinandchewin:vodka",
  "brewinandchewin:beer",
  "brewinandchewin:rice_wine",
  "brewinandchewin:egg_grog"
]

alcohols.forEach(fluid => {
  event.custom({
    type: "brewinandchewin:fermenting",
    base_fluid: {
      amount: 1000,
      ingredient: {
        fluid: fluid
      },
      unit: "millibuckets"
    },
    experience: 1.0,
    ingredients: [
      {
        tag: "c:dusts/salt"
      },
      {
        item: "modern_industrialization:yeast_tiny_dust"
      },
      {
        item: "modern_industrialization:yeast_tiny_dust"
      },
      []
    ],
    result: {
      amount: 1000,
      id: "modern_industrialization:acetic_acid"
    },
      "temperature": 5,
    unit: "millibuckets"
  })
})

})