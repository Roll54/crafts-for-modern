# crafts-for-modern

KubeJS server scripts for crafting recipes organized under `server_scripts`.

Ukrainian version: [README.uk.md](README.uk.md)

## Craft file system hierarchy

```
server_scripts/
  main.js
  adding/
    type/
      vanilla/
      tags/
      farmersdelight/
      modern_industrialization/
      railcraft/
      stellaris/
  changing/
    ae2/
    modern_industrialization/
    silentgear/
  delete/
    applied_energystics/
    railcraft/
    sopphistictedbackpacks/
    tags/
    general_remove_vanilla.js
    ...
```

### Folder meaning
- `adding/` — new recipes grouped by type and mod.
- `changing/` — updates to existing recipes.
- `delete/` — recipe removals; the folder root holds general removal scripts, while subfolders contain mod-specific removals.
