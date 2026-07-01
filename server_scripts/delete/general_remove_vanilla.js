ServerEvents.recipes(event => { 
//REMOVE FOR SMALL MODS LIKE 2-3 ITEMS or vanilla
    event.remove({ output: "minecraft:netherite_scrap" })
    event.remove({ output: "minecraft:ender_eye" })
    event.remove({ output: "blahaj:blue_shark" })
    event.remove({ output: "tide:fishing_line" })
    event.remove({ output: "silentgear:prospector_hammer_blueprint" })
    event.remove({ output: "silentgear:prospector_hammer_template" })
    event.remove({ output: "silentgear:advanced_upgrade_base" })
    event.remove({ output: "ends_delight:end_stove" })
    
    event.remove({ mod: 'buildinggadgets2' })
    event.remove({ mod: 'scannable_unofficial' })
    
})
