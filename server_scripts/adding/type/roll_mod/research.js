ServerEvents.recipes(event => {

    event.custom({
      type: "roll_mod:item_research",
      output: {
        id: "roll_mod:research_het",
        count: 1
      },
      main_input: {
        item: "modern_industrialization:incoloy_rotor",
        consume_on_success: true
      },
      catalysts: [
        {
          item: "modern_industrialization:hv_steam_turbine",
          success_chance: 0.8
        },
        {
          item: "modern_industrialization:mv_steam_turbine",
          success_chance: 0.6
        },
        {
          item: "modern_industrialization:lv_steam_turbine",
          success_chance: 0.2
        }
      ],
      duration: 120
    });

    event.custom({
    type: "roll_mod:item_research",
    output: {
    id: "roll_mod:research_better_circuits_lv",
    count: 1
    },
    main_input: {
    item: "roll_mod:redstone_tube",
    consume_on_success: true
    },
    catalysts: [
    {
    item: "roll_mod:redstone_tube",
    success_chance: 0.20
    },
    {
    item: "modern_industrialization:redstone_alloy_wire",
    success_chance: 0.1
    },
    {
    item: "modern_industrialization:resistor",
    success_chance: 0.1
    },
    {
    item: "modern_industrialization:capacitor",
    success_chance: 0.15
    }
    ],
    duration: 600
    });


    event.custom({
    type: "roll_mod:item_research",
    output: {
    id: "roll_mod:research_rocket_controller",
    count: 1
    },
    main_input: {
    item: "roll_mod:engine_mk1",
    consume_on_success: false
    },
    catalysts: [
    {
    item: "modern_industrialization:netherite_plate",
    success_chance: 0.05
    },
    {
    item: "modern_industrialization:netherite_large_plate",
    success_chance: 0.1
    },
    {
    item: "modern_industrialization:space_alloy_plate",
    success_chance: 0.05
    },
    {
    item: "modern_industrialization:titanium_plate",
    success_chance: 0.05
    },
    {
    item: "roll_mod:carbon_mesh",
    success_chance: 0.15
    }
    ],
    duration: 1200
    });

});