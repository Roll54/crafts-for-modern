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
  changing/
    ae2/
    modern_industrialization/
    ad_astra/
  delete/
    applied_energystics/
    railcraft/
    sopphistictedbackpacks/
    tags/
    general.js
    ...
```

### Значення папок
- `adding/` — нові рецепти, згруповані за типом і модом.
- `changing/` — зміни існуючих рецептів. (небажано за для використання)
- `delete/` — видалення рецептів; у корені папки зберігаються загальні скрипти видалення, а в підпапках — мод-специфічні.
