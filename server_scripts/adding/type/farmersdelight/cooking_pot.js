ServerEvents.recipes(event => {

event.custom({
        "type": "farmersdelight:cooking",
        "experience": 1.0,
        "ingredients": [
          {
            "item": "roll_mod:rutile_bell_pepper"
          },
          {
            "tag": "c:crops/rice"
          },
          {
            "tag": "rusticdelight:stuffed_bell_pepper_ingredients"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "count": 1,
          "id": "roll_mod:stuffed_bell_pepper_rutile"
        }
  })

event.custom({
  type: 'farmersdelight:cooking',
  experience: 0.1,
  ingredients: [
    { item: 'roll_mod:sulfur_berry' },
    { item: 'roll_mod:sulfur_berry' },
    { item: 'roll_mod:sulfur_berry' },
    { item: 'farmersdelight:pie_crust' },
    { tag: 'c:eggs' },
    { item: 'minecraft:sugar' }
  ],
  recipe_book_tab: 'meals',
  result: {
    id: 'roll_mod:sulfur_berry_pie',
    count: 1
  }
})
  
event.custom({
  type: 'farmersdelight:cooking',
  experience: 200,
  ingredients: [
    { item: 'modern_industrialization:uranium_235_dust' },
    { item: 'minecraft:wheat' },
    { item: 'modern_industrialization:uranium_235_dust' },
    { item: 'minecraft:wheat' },
    { item: 'modern_industrialization:uranium_235_dust' },
    { item: 'minecraft:wheat' }
  ],
  recipe_book_tab: 'meals',
  result: {
    id: 'roll_mod:uranium_mush',
    count: 1
  }
})

  
event.custom({
  type: 'farmersdelight:cooking',
  experience: 2,
  ingredients: [
    { item: 'roll_mod:golden_potato' },
    { item: 'minecraft:wheat' },
    { item: 'minecraft:milk_bucket' },
    { item: 'minecraft:wheat' },
    { item: 'roll_mod:golden_potato' },
    { item: 'minecraft:wheat' }
  ],
  recipe_book_tab: 'meals',
  result: {
    id: 'roll_mod:golden_potato_mush',
    count: 1
  }
})

})
