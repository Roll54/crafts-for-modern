ServerEvents.recipes(event => {
  
  event.custom({
        "type": "functionalstorage:custom_compacting",
        "higher_input": {
          "count": 1,
          "id": "roll_mod:coal_dust"
        },
        "lower_input": {
          "count": 9,
          "id": "modern_industrialization:coal_tiny_dust"
        }
    })

})
