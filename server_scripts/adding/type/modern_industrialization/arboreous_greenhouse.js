ServerEvents.recipes(event => {
// Рослинки з fruitsdelight ПОЧАТОК
// Початок loop
    if (!Platform.isLoaded('fruitsdelight')) return;
    if (!Platform.isLoaded('yet_another_industrialization')) return;

    const fruitTrees = [
        'bayberry',
        'kiwi',
        'fig',
        'durian',
        'pear',
        'hawberry',
        'lychee',
        'mango',
        'persimmon',
        'peach',
        'orange',
        'mangosteen'
    ];

    fruitTrees.forEach(tree => {
        event.custom({
            type: "yet_another_industrialization:arboreous_greenhouse",
            duration: 1200,
            eu: 15,
            fluid_inputs: [
                {
                    amount: 1000,
                    fluid: "minecraft:water"
                }
            ],
            item_inputs: [
                {
                    amount: 1,
                    item: `fruitsdelight:${tree}_sapling`,
                    probability: 0.0
                }
            ],
            item_outputs: [
                {
                    amount: 8,
                    item: `fruitsdelight:${tree}`
                },
                {
                    amount: 16,
                    item: "minecraft:oak_log"
                },
                {
                    amount: 32,
                    item: `fruitsdelight:${tree}_leaves`
                },
                {
                    amount: 1,
                    item: `fruitsdelight:${tree}_sapling`,
                    probability: 0.5
                }
            ],
            process_conditions: [
                {
                    type: "yet_another_industrialization:arboreous_greenhouse_tier",
                    model: `fruitsdelight:${tree}_tree`,
                    tier_id: "yet_another_industrialization:grass_block"
                }
            ]
        });

        event.custom({
            type: "yet_another_industrialization:arboreous_greenhouse",
            duration: 1200,
            eu: 15,
            fluid_inputs: [
                {
                    amount: 250,
                    fluid: "extended_industrialization:distilled_water"
                }
            ],
            item_inputs: [
                {
                    amount: 1,
                    item: `fruitsdelight:${tree}_sapling`,
                    probability: 0.0
                }
            ],
            item_outputs: [
                {
                    amount: 16,
                    item: `fruitsdelight:${tree}`
                },
                {
                    amount: 32,
                    item: "minecraft:oak_log"
                },
                {
                    amount: 64,
                    item: `fruitsdelight:${tree}_leaves`
                },
                {
                    amount: 1,
                    item: `fruitsdelight:${tree}_sapling`,
                    probability: 1.0
                }
            ],
            process_conditions: [
                {
                    type: "yet_another_industrialization:arboreous_greenhouse_tier",
                    model: `fruitsdelight:${tree}_tree`,
                    tier_id: "yet_another_industrialization:grass_block"
                }
            ]
        });
    });
// Кінець loop

    event.custom({
        type: "yet_another_industrialization:arboreous_greenhouse",
        duration: 1200,
        eu: 15,
        fluid_inputs: [
            {
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "minecraft:apple",
                probability: 0.0
            }
        ],
        item_outputs: [
            {
                amount: 8,
                item: "minecraft:apple"
            },
            {
                amount: 16,
                item: "minecraft:oak_log"
            },
            {
                amount: 32,
                item: "fruitsdelight:apple_leaves"
            },
            {
                amount: 1,
                item: "fruitsdelight:apple_sapling",
                probability: 0.5
            }
        ],
        process_conditions: [
            {
                type: "yet_another_industrialization:arboreous_greenhouse_tier",
                model: "fruitsdelight:apple_tree",
                tier_id: "yet_another_industrialization:grass_block"
            }
        ]
    });

    event.custom({
        type: "yet_another_industrialization:arboreous_greenhouse",
        duration: 1200,
        eu: 15,
        fluid_inputs: [
            {
                amount: 250,
                fluid: "extended_industrialization:distilled_water"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "minecraft:apple",
                probability: 0.0
            }
        ],
        item_outputs: [
            {
                amount: 16,
                item: "minecraft:apple"
            },
            {
                amount: 32,
                item: "minecraft:oak_log"
            },
            {
                amount: 64,
                item: "fruitsdelight:apple_leaves"
            },
            {
                amount: 1,
                item: "fruitsdelight:apple_sapling",
                probability: 1.0
            }
        ],
        process_conditions: [
            {
                type: "yet_another_industrialization:arboreous_greenhouse_tier",
                model: "fruitsdelight:apple_tree",
                tier_id: "yet_another_industrialization:grass_block"
            }
        ]
    });

    event.custom({
        type: "yet_another_industrialization:arboreous_greenhouse",
        duration: 1200,
        eu: 15,
        fluid_inputs: [
            {
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "fruitsdelight:lemon",
                probability: 0.0
            }
        ],
        item_outputs: [
            {
                amount: 6,
                item: "fruitsdelight:lemon"
            },
            {
                amount: 4,
                item: "minecraft:oak_log"
            },
            {
                amount: 8,
                item: "fruitsdelight:lemon_tree"
            },
            {
                amount: 1,
                item: "fruitsdelight:lemon_seeds",
                probability: 0.5
            }
        ],
        process_conditions: [
            {
                type: "yet_another_industrialization:arboreous_greenhouse_tier",
                model: "fruitsdelight:lemon_tree",
                tier_id: "yet_another_industrialization:grass_block"
            }
        ]
    });

    event.custom({
        type: "yet_another_industrialization:arboreous_greenhouse",
        duration: 1200,
        eu: 15,
        fluid_inputs: [
            {
                amount: 250,
                fluid: "extended_industrialization:distilled_water"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "fruitsdelight:lemon",
                probability: 0.0
            }
        ],
        item_outputs: [
            {
                amount: 12,
                item: "fruitsdelight:lemon"
            },
            {
                amount: 8,
                item: "minecraft:oak_log"
            },
            {
                amount: 16,
                item: "fruitsdelight:lemon_tree"
            },
            {
                amount: 1,
                item: "fruitsdelight:lemon_seeds",
                probability: 1.0
            }
        ],
        process_conditions: [
            {
                type: "yet_another_industrialization:arboreous_greenhouse_tier",
                model: "fruitsdelight:lemon_tree",
                tier_id: "yet_another_industrialization:grass_block"
            }
        ]
    });

    event.custom({
        type: "yet_another_industrialization:arboreous_greenhouse",
        duration: 1200,
        eu: 15,
        fluid_inputs: [
            {
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "fruitsdelight:blueberry",
                probability: 0.0
            }
        ],
        item_outputs: [
            {
                amount: 6,
                item: "fruitsdelight:blueberry"
            },
            {
                amount: 4,
                item: "minecraft:oak_log"
            },
            {
                amount: 8,
                item: "fruitsdelight:blueberry_bush"
            },
            {
                amount: 1,
                item: "fruitsdelight:blueberry_bush",
                probability: 0.5
            }
        ],
        process_conditions: [
            {
                type: "yet_another_industrialization:arboreous_greenhouse_tier",
                model: "fruitsdelight:blueberry_bush",
                tier_id: "yet_another_industrialization:grass_block"
            }
        ]
    });

    event.custom({
        type: "yet_another_industrialization:arboreous_greenhouse",
        duration: 1200,
        eu: 15,
        fluid_inputs: [
            {
                amount: 250,
                fluid: "extended_industrialization:distilled_water"
            }
        ],
        item_inputs: [
            {
                amount: 1,
                item: "fruitsdelight:blueberry",
                probability: 0.0
            }
        ],
        item_outputs: [
            {
                amount: 12,
                item: "fruitsdelight:blueberry"
            },
            {
                amount: 8,
                item: "minecraft:oak_log"
            },
            {
                amount: 16,
                item: "fruitsdelight:blueberry_bush"
            },
            {
                amount: 1,
                item: "fruitsdelight:blueberry_bush",
                probability: 1.0
            }
        ],
        process_conditions: [
            {
                type: "yet_another_industrialization:arboreous_greenhouse_tier",
                model: "fruitsdelight:blueberry_bush",
                tier_id: "yet_another_industrialization:grass_block"
            }
        ]
    });
    
// Рослинки з fruitsdelight КІНЕЦЬ
    
});
