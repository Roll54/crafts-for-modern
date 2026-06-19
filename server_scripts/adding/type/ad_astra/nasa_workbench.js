ServerEvents.recipes(event => {

        event.custom({
        type: "ad_astra:nasa_workbench",
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
        result: {
            count: 1,
            id: "ad_astra:tier_1_rocket"
        }
    })

        event.custom({
        type: "ad_astra:nasa_workbench",
        ingredients: [
            { item: "roll_mod:nose_mk2" },

            { item: "modern_industrialization:cosmic_alloy_two_machine_casing_pipe" },
            { item: "modern_industrialization:cosmic_alloy_two_machine_casing_pipe" },
            { item: "modern_industrialization:cosmic_alloy_two_machine_casing_pipe" },
            { item: "modern_industrialization:cosmic_alloy_two_machine_casing_pipe" },
            { item: "modern_industrialization:cosmic_alloy_two_machine_casing_pipe" },
            { item: "modern_industrialization:cosmic_alloy_two_machine_casing_pipe" },

            { item: "roll_mod:fin_mk2" },

            { item: "roll_mod:tank_mk2" },
            { item: "roll_mod:tank_mk2" },

            { item: "roll_mod:fin_mk2" },
            { item: "roll_mod:fin_mk2" },

            { item: "roll_mod:engine_mk2" },

            { item: "roll_mod:fin_mk2" }
        ],
        result: {
            count: 1,
            id: "ad_astra:tier_2_rocket"
        }
    })
})
