ServerEvents.recipes(event => {
event.recipes.extended_industrialization.canning_machine(4, 200)
.fluidIn("1000x modern_industrialization:sulfuric_acid")
.itemIn("1x roll_mod:empty_primitive_battery")
.itemOut("1x roll_mod:primitive_battery")

.fluidIn("20000x modern_industrialization:rocket_propellant")
.itemIn("1x roll_mod:fuel_canister")
.itemOut("1x roll_mod:rocket_fuel_canister")

})