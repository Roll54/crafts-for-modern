ServerEvents.recipes(event => {

    event.smelting('createcybernetics:cooked_bodypart_brain', 'createcybernetics:bodypart_brain').xp(0.35)
    event.smelting('createcybernetics:cooked_bodypart_heart', 'createcybernetics:bodypart_heart').xp(0.35)
    event.smelting('createcybernetics:cooked_bodypart_liver', 'createcybernetics:bodypart_liver').xp(0.35)
    event.smelting('createcybernetics:cooked_andouille_sausage', 'createcybernetics:andouille_sausage').xp(0.35)
    event.smelting('createcybernetics:cooked_ground_offal', 'createcybernetics:ground_offal').xp(0.35)
    event.smelting('createcybernetics:bone_marrow', 'minecraft:bone').xp(0.35)

    event.smoking('createcybernetics:cooked_bodypart_brain', 'createcybernetics:bodypart_brain').xp(0.35)
    event.smoking('createcybernetics:cooked_bodypart_heart', 'createcybernetics:bodypart_heart').xp(0.35)
    event.smoking('createcybernetics:cooked_bodypart_liver', 'createcybernetics:bodypart_liver').xp(0.35)
    event.smoking('createcybernetics:cooked_andouille_sausage', 'createcybernetics:andouille_sausage').xp(0.35)
    event.smoking('createcybernetics:cooked_ground_offal', 'createcybernetics:ground_offal').xp(0.35)
    event.smoking('createcybernetics:bone_marrow', 'minecraft:bone').xp(0.35)

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { tag: 'createcybernetics:offal' }
        ],
        result: [
            { item: 'createcybernetics:ground_offal', count: 1 }
        ],
        sound: 'farmersdelight:block.cutting_board.knife',
        tool: { tag: 'c:tools/knives' }
    })
})
