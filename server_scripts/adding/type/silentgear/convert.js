// server_scripts/adding/type/silentgear/convert.js

ServerEvents.recipes(event => {
  event.custom({
    "type": "silentgear:conversion",
    "category": "misc",
    "ingredients": [
      {
        "item": "roll_mod:meteorite_sword"
      }
    ],
    "result": {
      "item": "silentgear:sword",
      "parts": [
        {
          "item": {
            "components": {
              "silentgear:material_list": [
                {
                  "material": "silentgear:meteorite_metal"
                },
                {
                  "material": "silentgear:meteorite_metal"
                }
              ]
            },
            "count": 1,
            "id": "silentgear:sword_blade"
          },
          "part": "silentgear:sword_blade"
        },
        {
          "item": {
            "components": {
              "silentgear:material_list": [
                {
                  "material": "silentgear:wood"
                }
              ]
            },
            "count": 1,
            "id": "silentgear:rod"
          },
          "part": "silentgear:rod"
        }
      ]
    }
  })
})
