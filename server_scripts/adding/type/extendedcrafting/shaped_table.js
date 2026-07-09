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
                // Використовуємо Item.of() для коректного зчитування компонентів в KubeJS
                item: Item.of('roll_mod:lapotron_battery_t3', '{ "modern_industrialization:energy": 500000000000 }').toJson()
            }
        },
        result: {
            id: "roll_mod:ultra_battery",
            count: 1
        }
    })

})
