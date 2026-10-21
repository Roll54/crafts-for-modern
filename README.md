# crafts-for-modern

KubeJS server scripts for crafting recipes organized under `server_scripts`.

Ukrainian version: [README.uk.md](README.uk.md)

## Craft file system hierarchy

```
server_scripts/
  main.js
  adding/
    type/
      ad_astra/
      extendedcrafting/
      farmersdelight/
      functionalstorage/
      modern_industrialization/
      railcraft/
      roll_mod/
      sophisticatedbackpacks/
      tags/
      vanilla/
  changing/
    ae2.js            # AE2 / ExtendedAE
    diamond_alloy.js  # diamond -> diamond alloy plate
    railcraft.js      # track kits, force track emitter
    unification.js    # item -> tag in all recipes (loads last)
  delete/
    applied_energistics/
    modern_industrialization/
    tags/
      block/
      item/
    general.js
    <mod>.js
```

### Folder meaning
- `adding/` — new recipes grouped by type and mod.
- `changing/` — updates to existing recipes.
- `delete/` — recipe removals; the folder root holds general removal scripts, while subfolders contain mod-specific removals.
