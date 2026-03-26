
ServerEvents.recipes(event => {
event.recipes.extended_industrialization.composter(4, 200)
.itemIn("2x roll_mod:latex_dandelion_stem")
.itemOut("3x roll_mod:raw_latex")
.itemOut("1x roll_mod:raw_latex", 0.5)

event.recipes.extended_industrialization.composter(4, 200)
.itemIn("4x roll_mod:latex_dandelion_flower")
.itemOut("3x roll_mod:raw_latex")
.itemOut("1x minecraft:yellow_dye", 0.5)
})