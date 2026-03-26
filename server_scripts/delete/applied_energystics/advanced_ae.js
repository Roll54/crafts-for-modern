ServerEvents.recipes(event => {

event.remove({ type: "advanced_ae:reaction" })
//just AE2 
//TODO MAKE ANOTHER FILE
  event.remove({output: 'ae2:spatial_anchor'})
})