# crafts-for-modern

Серверні скрипти KubeJS для рецептів крафту, організовані в `server_scripts`.

English version: [README.md](README.md)

## Ієрархія файлової системи крафтів

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

### Значення папок
- `adding/` — нові рецепти, згруповані за типом і модом.
- `changing/` — зміни існуючих рецептів.
- `delete/` — видалення рецептів; у корені папки зберігаються загальні скрипти видалення, а в підпапках — мод-специфічні.
