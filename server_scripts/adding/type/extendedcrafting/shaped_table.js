ServerEvents.recipes(event => {

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "Y   Y   Y",
            " YYYYYYY ",
            " YGYYYGY ",
            " YYGCGYY ",
            "YYYCPCYYY",
            " YYGCGYY ",
            " YGYYYGY ",
            " YYYYYYY ",
            "Y   Y   Y"
        ],
        key: {
            "Y": {
                item: "modern_industrialization:sunnarium_plate"
            },
            "G": {
                item: "roll_mod:enriched_sunnarium_mk2"
            },
            "P": {
                item: "modern_industrialization:quantum_circuit"
            },
            "C": {
                item: "roll_mod:lapotron_battery_t3"
            }
        },
        result: {
            id: "roll_mod:ultra_battery",
            count: 1
        }
    })

event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
        "BBBBBB ",
        "B      ",
        "B      ",
        "SBBBBB ",
        "B      B",
        "B      B",
        "BBBBBBB "
    ],
    key: {
        "S": {
            item: "yet_another_industrialization:singularity_block"
        },
        "B": {
            item: "modern_industrialization:block_blencium_plate"
        }
    },
    result: {
        id: "roll_mod:letter_b",
        count: 1
    }
})

})
