ServerEvents.recipes(event => {

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "Y  Y  Y  ",
            " YYYYYYY ",
            " YGYYYG  ",
            " YYGCGYY ",
            "YYY C  YY",
            " YYGCGYY ",
            " YGYYYG  ",
            " YYYYYYY ",
            "Y  Y  Y  "
        ],
        key: {
            "Y": {
                item: "c:gems/diamond"
            },
            "G": {
                item: "c:gems/lapis"
            },
            "C": {
                item: "roll_mod:lapotron_battery_t3[modern_industrialization:energy=500000000000L]"
            }
        },
        result: {
            id: "roll_mod:ultra_battery",
            count: 1
        }
    })

})
