ServerEvents.recipes(event => {

  event.custom({
    type: "stellaris:rocket_station",
    ingredients: [
      { item: "roll_mod:nose_mk1" },
      { item: "modern_industrialization:space_alloy_machine_casing_pipe" },
      { item: "modern_industrialization:space_alloy_machine_casing_pipe" },
      { item: "modern_industrialization:space_alloy_machine_casing_pipe" },
      { item: "modern_industrialization:space_alloy_machine_casing_pipe" },
      { item: "modern_industrialization:space_alloy_machine_casing_pipe" },
      { item: "modern_industrialization:space_alloy_machine_casing_pipe" },
      { item: "roll_mod:fin_mk1" },
      { item: "roll_mod:tank_mk1" },
      { item: "roll_mod:tank_mk1" },
      { item: "roll_mod:fin_mk1" },
      { item: "roll_mod:fin_mk1" },
      { item: "roll_mod:engine_mk1" },
      { item: "roll_mod:fin_mk1" }
    ],
    output: {
      id: "roll_mod:tier_1_rocket",
      count: 1
    }
  });

});
