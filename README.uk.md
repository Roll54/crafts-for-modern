# crafts-for-modern

Серверні скрипти KubeJS для рецептів крафту, організовані в `server_scripts`.

English version: [README.md](README.md)

## Ієрархія файлової системи крафтів

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
    diamond_alloy.js  # алмаз -> пластина алмазного сплаву
    railcraft.js      # трек-кіти, force track emitter
    unification.js    # предмет -> тег в усіх рецептах (вантажиться останнім)
  delete/
    applied_energistics/
    modern_industrialization/
    tags/
      block/
      item/
    general.js
    <мод>.js
```

### Значення папок
- `adding/` — нові рецепти, згруповані за типом і модом.
- `changing/` — зміни існуючих рецептів. (небажано за для використання)
- `delete/` — видалення рецептів; у корені папки зберігаються загальні скрипти видалення, а в підпапках — мод-специфічні.
