ServerEvents.recipes(event => {
    event.smoking('createcybernetics:cooked_brain', 'createcybernetics:bodypart_brain').xp(0.35)
    event.smoking('createcybernetics:cooked_heart', 'createcybernetics:bodypart_heart').xp(0.35)
    event.smoking('createcybernetics:cooked_liver', 'createcybernetics:bodypart_liver').xp(0.35)
    event.smoking('createcybernetics:roasted_andouille', 'createcybernetics:andouille_sausage').xp(0.35)
    event.smoking('createcybernetics:bone_marrow', 'minecraft:bone').xp(0.35)
    event.smoking('roll_mod:roasted_bell_pepper_rutile', 'roll_mod:rutile_bell_pepper').xp(0.35)
})
