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
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "ABBBBBA",
            "ACDEDCA",
            "ACFGFCA",
            "ACDEDCA",
            "ABBBBBA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
            "item": "modern_industrialization:chrome_vanadium_steel_block"
            },
            "B": {
            "item": "minecraft:netherite_block"
            },
            "C": {
            "item": "roll_mod:highly_advanced_large_motor"
            },
            "D": {
            "item": "modern_industrialization:tungsten_block"
            },
            "E": {
            "item": "extendedcrafting:nether_star_block"
            },
            "F": {
            "item": "modern_industrialization:quantum_circuit"
            },
            "G": {
            "item": "modern_industrialization:electric_compressor"
            }
        },
        "result": {
            "id": ""
        }
    })

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "BBBBBB ",
            "B      ",
            "B      ",
            "SBBBBB ",
            "B     B",
            "B     B",
            "BBBBBB "
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

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " B   B ",
            " B   B ",
            "  B B  ",
            "   B   ",
            "   S   ",
            "B  B   ",
            " BB    "
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
            id: "roll_mod:letter_oo",
            count: 1
        }
    })
    
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "B     B",
            "B     B",
            "B     B",
            "BBBSBBB",
            "B     B",
            "B     B",
            "B     B"
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
            id: "roll_mod:letter_n",
            count: 1
        }
    })
    

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'AAABB AAC',
            ' BBAAAADA',
            '  EEEFAAA',
            '    BGFA ',
            '   BEBEAB',
            '  BEB EAB',
            ' BEB  EBA',
            'BEB    BA',
            'EB      A'
        ],
        key: {
            A: { item: 'modern_industrialization:block_blencium_plate' },
            B: { item: 'modern_industrialization:niobium_titanium_alloy_plate' },
            C: { item: 'roll_mod:ultra_battery'},
            D: { item: 'modern_industrialization:quantum_upgrade' },
            E: { item: 'modern_industrialization:sunnarium_plate' },
            F: { item: 'modern_industrialization:quantum_circuit' },
            G: { item: 'roll_mod:advanced_ev_mining_drill' }
        },
        result: {
            id: 'roll_mod:iv_electric_pickaxe'
        }
    }).id('roll_mod:advanced_drill_crafting')


    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            '   ABA   ',
            '   CBC   ',
            '   CBC   ',
            '   ABA   ',
            '   ADA   ',
            ' AA E AA ',
            '   A A   ',
            '  BFGFB  ',
            '   BBB   '
        ],
        key: {
            A: { item: 'modern_industrialization:block_blencium_plate' },
            B: { item: 'modern_industrialization:sunnarium_plate' },
            C: { item: 'modern_industrialization:niobium_titanium_alloy_plate' },
            D: { item: 'roll_mod:ultra_battery' },
            E: { item: 'modern_industrialization:quantum_upgrade' },
            F: { item: 'modern_industrialization:quantum_circuit' },
            G: { item: 'roll_mod:ev_electric_saber' }
        },
        result: {
            id: 'roll_mod:iv_electric_saber'
        }
    }).id('roll_mod:advanced_saber_crafting')

})
