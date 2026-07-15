ServerEvents.recipes(event => { 
//REMOVE FOR SMALL MODS LIKE 2-3 ITEMS or vanilla
    event.remove({ output: "minecraft:netherite_scrap" })
    event.remove({ output: "minecraft:ender_eye" })
    event.remove({ output: "blahaj:blue_shark" })
    event.remove({ output: "tide:fishing_line" })
    event.remove({ output: "silentgear:prospector_hammer_blueprint" })
    event.remove({ output: "silentgear:prospector_hammer_template" })
    event.remove({ output: "silentgear:advanced_upgrade_base" })
    event.remove({ output: "moredelight:diced_potatoes" })
    event.remove({ output: "constructionstick:template_destruction" })
    event.remove({ output: "silentgear:paint_mixer" })
    event.remove({ output: "minecraft:glowstone" })
    
    event.remove({ id: "modern_industrialization:vanilla_recipes/packer/glowstone_block" })
    event.remove({ id: "brewinandchewin:fermenting/mead_from_honey" })
    
    event.remove({ mod: 'buildinggadgets2' })
    event.remove({ mod: 'scannable_unofficial' })
    event.remove({ mod: 'createcybernetics' })
})
