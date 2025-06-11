/**
 * games.js — скрипт для подгрузки и поиска WeMod игр
 * Адаптирован под встроенный <input name="q"> и контейнер <div class="results-list">
 * Использует теги <a class="game-result">
 */
(function(window, document) {
  'use strict';

  // Данные игр — замените пример на свои реальные данные
  const gamesData = [
    {
    "slug": "cs2",
    "title": "Counter-Strike 2",
    "hasTrainer": false,
    "cheatsCount": 39,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
    },
    {
    "slug": "1000xresist",
    "title": "1000xRESIST",
    "hasTrainer": false,
    "cheatsCount": 2,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "a-plague-tale-requiem",
    "title": "A Plague Tale: Requiem",
    "hasTrainer": true,
    "cheatsCount": 8,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "ark-survival-evolved",
    "title": "ARK: Survival Evolved",
    "hasTrainer": true,
    "cheatsCount": 48,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" },
      { "name": "Xbox", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "arma-3",
    "title": "ARMA 3",
    "hasTrainer": true,
    "cheatsCount": 34,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "alan-wake-ii",
    "title": "Alan Wake II",
    "hasTrainer": true,
    "cheatsCount": 39,
    "platforms": [
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "albion-online",
    "title": "Albion Online",
    "hasTrainer": false,
    "cheatsCount": 17,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "among-us",
    "title": "Among Us",
    "hasTrainer": true,
    "cheatsCount": 11,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "animal-crossing-new-horizons",
    "title": "Animal Crossing: New Horizons",
    "hasTrainer": false,
    "cheatsCount": 8,
    "platforms": [
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "apex-legends",
    "title": "Apex Legends",
    "hasTrainer": true,
    "cheatsCount": 49,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Origin", "icon": "../static/images/platforms/origin.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "assassins-creed-shadows",
    "title": "Assassin’s Creed Shadows",
    "hasTrainer": false,
    "cheatsCount": 26,
    "platforms": [
      { "name": "Uplay", "icon": "../static/images/platforms/uplay.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "baldurs-gate-3",
    "title": "Baldur's Gate 3",
    "hasTrainer": true,
    "cheatsCount": 25,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "GOG", "icon": "../static/images/platforms/gog.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "battlebit-remastered",
    "title": "BattleBit Remastered",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "battlefield-2042",
    "title": "Battlefield 2042",
    "hasTrainer": true,
    "cheatsCount": 45,
    "platforms": [
      { "name": "Origin", "icon": "../static/images/platforms/origin.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "battlefield-v",
    "title": "Battlefield™ V",
    "hasTrainer": true,
    "cheatsCount": 50,
    "platforms": [
      { "name": "Origin", "icon": "../static/images/platforms/origin.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "black-desert-online",
    "title": "Black Desert Online",
    "hasTrainer": true,
    "cheatsCount": 21,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "black-myth-wukong",
    "title": "Black Myth: Wukong",
    "hasTrainer": false,
    "cheatsCount": 21,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "borderlands-4",
    "title": "Borderlands 4",
    "hasTrainer": false,
    "cheatsCount": 23,
    "platforms": [
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "crsed-foad",
    "title": "CRSED: F.O.A.D.",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "call-of-duty",
    "title": "Call of Duty",
    "hasTrainer": true,
    "cheatsCount": 50,
    "platforms": [
      { "name": "Battle.net", "icon": "../static/images/platforms/battlenet.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "cod-modern-warfare-iii",
    "title": "Call of Duty: Modern Warfare III",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Battle.net", "icon": "../static/images/platforms/battlenet.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "cod-warzone",
    "title": "Call of Duty: Warzone",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Battle.net", "icon": "../static/images/platforms/battlenet.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "civilization-vii",
    "title": "Civilization VII",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "clair-obscur-expedition-33",
    "title": "Clair Obscur: Expedition 33",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "combat-arms-reloaded",
    "title": "Combat Arms: Reloaded",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "cyberpunk-2077",
    "title": "Cyberpunk 2077",
    "hasTrainer": true,
    "cheatsCount": 10,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "GOG", "icon": "../static/images/platforms/gog.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "doom-eternal",
    "title": "DOOM Eternal",
    "hasTrainer": true,
    "cheatsCount": 9,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Bethesda", "icon": "../static/images/platforms/bethesda.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dayz",
    "title": "DayZ",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dead-island-2",
    "title": "Dead Island 2",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dead-space-remake",
    "title": "Dead Space Remake",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Origin", "icon": "../static/images/platforms/origin.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dead-by-daylight",
    "title": "Dead by Daylight",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" },
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "deadlock",
    "title": "Deadlock",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "death-stranding-2",
    "title": "Death Stranding 2: On the Beach",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "deathloop",
    "title": "Deathloop",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "deep-rock-galactic",
    "title": "Deep Rock Galactic",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "delta-force",
    "title": "Delta Force",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "destiny-2",
    "title": "Destiny 2",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Battle.net", "icon": "../static/images/platforms/battlenet.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "diablo-iv",
    "title": "Diablo IV",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Battle.net", "icon": "../static/images/platforms/battlenet.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dirty-bomb",
    "title": "Dirty Bomb",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dont-starve-together",
    "title": "Don't Starve Together",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dragon-age-the-veilguard",
    "title": "Dragon Age: The Veilguard",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" },
      { "name": "Origin", "icon": "../static/images/platforms/origin.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dragons-dogma-2",
    "title": "Dragon's Dogma 2",
    "hasTrainer": true,
    "cheatsCount": 8,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dread-delusion",
    "title": "Dread Delusion",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dying-light",
    "title": "Dying Light",
    "hasTrainer": true,
    "cheatsCount": 10,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" },
      { "name": "GOG", "icon": "../static/images/platforms/gog.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "elden-ring",
    "title": "ELDEN RING",
    "hasTrainer": true,
    "cheatsCount": 9,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "enshrouded",
    "title": "Enshrouded",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "escape-from-tarkov",
    "title": "Escape from Tarkov",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Battlestate Games", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "fall-guys",
    "title": "Fall Guys",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "final-fantasy-vii",
    "title": "Final Fantasy VII",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "final-fantasy-xiv",
    "title": "Final Fantasy XIV",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "fivem",
    "title": "FiveM",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Custom", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "football-manager-2024",
    "title": "Football Manager 2024",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "fortnite",
    "title": "Fortnite",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "forza-horizon-5",
    "title": "Forza Horizon 5",
    "hasTrainer": true,
    "cheatsCount": 9,
    "platforms": [
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "fragpunk",
    "title": "FragPunk",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "genshin-impact",
    "title": "Genshin Impact",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" },
      { "name": "Hoyoverse", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "ghost-of-tsushima",
    "title": "Ghost of Tsushima",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "god-of-war-ragnarok",
    "title": "God of War Ragnarök",
    "hasTrainer": true,
    "cheatsCount": 8,
    "platforms": [
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "grand-theft-auto-v",
    "title": "Grand Theft Auto V",
    "hasTrainer": true,
    "cheatsCount": 12,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Rockstar Games", "icon": "../static/images/platforms/rockstar.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "h1z1",
    "title": "H1Z1",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "helldivers-2",
    "title": "HELLDIVERS™ 2",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "hades",
    "title": "Hades",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" },
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "half-life-alyx",
    "title": "Half-Life: Alyx",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "halo-infinite",
    "title": "Halo Infinite",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "hi-fi-rush",
    "title": "Hi-Fi Rush",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "honkai-impact",
    "title": "Honkai Impact",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Hoyoverse", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "horizon-forbidden-west",
    "title": "Horizon Forbidden West",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "hunt-showdown",
    "title": "Hunt: Showdown",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "insurgency-sandstorm",
    "title": "Insurgency: Sandstorm",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "kingdom-come-deliverance-ii",
    "title": "Kingdom Come: Deliverance II",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "leap",
    "title": "LEAP",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "league-of-legends",
    "title": "League of Legends",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Riot Games", "icon": "../static/images/platforms/riot.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "left-4-dead-2",
    "title": "Left 4 Dead 2",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "lethal-company",
    "title": "Lethal Company",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "liars-bar",
    "title": "Liars Bar",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "lineage-2",
    "title": "Lineage 2",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "NCSoft", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "lost-ark",
    "title": "Lost Ark",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "marvel-rivals",
    "title": "Marvel Rivals",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "metal-gear-solid-snake-eater",
    "title": "Metal Gear Solid Snake Eater",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" },
      { "name": "Xbox", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "metro-exodus",
    "title": "Metro Exodus",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "metroid-dread",
    "title": "Metroid Dread",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "monster-hunter-rise",
    "title": "Monster Hunter Rise",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "monster-hunter-wilds",
    "title": "Monster Hunter Wilds",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" },
      { "name": "Xbox", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "naraka-bladepoint",
    "title": "NARAKA: BLADEPOINT",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Xbox", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "neon-white",
    "title": "Neon White",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "overwatch-2",
    "title": "Overwatch 2",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Battle.net", "icon": "../static/images/platforms/battlenet.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "payday-2",
    "title": "PAYDAY 2",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "pubg-battlegrounds",
    "title": "PUBG: BATTLEGROUNDS",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "pacific-drive",
    "title": "Pacific Drive",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "paladins",
    "title": "Paladins",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "palworld",
    "title": "Palworld",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "path-of-exile-2",
    "title": "Path of Exile 2",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Custom", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "persona-5-royal",
    "title": "Persona 5 Royal",
    "hasTrainer": true,
    "cheatsCount": 8,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "phasmophobia",
    "title": "Phasmophobia",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "psychonauts-2",
    "title": "Psychonauts 2",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "quake-champions",
    "title": "Quake Champions",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Bethesda", "icon": "../static/images/platforms/bethesda.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "repo",
    "title": "R.E.P.O.",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "rainbow-six-siege",
    "title": "Rainbow Six Siege",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Uplay", "icon": "../static/images/platforms/uplay.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "ratchet-clank-rift-apart",
    "title": "Ratchet & Clank: Rift Apart",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "ready-or-not",
    "title": "Ready or Not",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "realm-royale-reforged",
    "title": "Realm Royale Reforged",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "red-dead-redemption-2",
    "title": "Red Dead Redemption 2",
    "hasTrainer": true,
    "cheatsCount": 8,
    "platforms": [
      { "name": "Rockstar Games", "icon": "../static/images/platforms/rockstar.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "returnal",
    "title": "Returnal",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "ring-of-elysium",
    "title": "Ring of Elysium",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "rocket-league",
    "title": "Rocket League",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "runescape-dragonwilds",
    "title": "RuneScape: Dragonwilds",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Jagex", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "rust",
    "title": "Rust",
    "hasTrainer": true,
    "cheatsCount": 9,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "scum",
    "title": "SCUM",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "schedule",
    "title": "Schedule",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
        { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "sea-of-thieves",
    "title": "Sea of Thieves",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "shatterline",
    "title": "Shatterline",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "sifu",
    "title": "Sifu",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" },
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "splitgate",
    "title": "Splitgate",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "squad",
    "title": "Squad",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "stalcraft",
    "title": "Stalcraft",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "stardew-valley",
    "title": "Stardew Valley",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "GOG", "icon": "../static/images/platforms/gog.svg" },
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "starfield",
    "title": "Starfield",
    "hasTrainer": true,
    "cheatsCount": 9,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Microsoft Store", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "stellar-blade",
    "title": "Stellar Blade",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "super-people-2",
    "title": "Super People 2",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "the-finals",
    "title": "THE FINALS",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "team-fortress-2",
    "title": "Team Fortress 2",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "terraria",
    "title": "Terraria",
    "hasTrainer": true,
    "cheatsCount": 8,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "GOG", "icon": "../static/images/platforms/gog.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "the-division-2",
    "title": "The Division 2",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Uplay", "icon": "../static/images/platforms/uplay.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "the-legend-of-zelda-tears-of-the-kingdom",
    "title": "The Legend of Zelda: Tears of the Kingdom",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "the-plucky-squire",
    "title": "The Plucky Squire",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" },
      { "name": "Xbox", "icon": "../static/images/platforms/uwp.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "titanfall-2",
    "title": "Titanfall 2",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Origin", "icon": "../static/images/platforms/origin.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "totally-accurate-battlegrounds",
    "title": "Totally Accurate Battlegrounds",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "tunic",
    "title": "Tunic",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Xbox", "icon": "../static/images/platforms/uwp.svg" },
      { "name": "PlayStation", "icon": "../static/images/platforms/playstation.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "valorant",
    "title": "Valorant",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Riot Games", "icon": "../static/images/platforms/riot.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "vampire-survivors",
    "title": "Vampire Survivors",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Xbox", "icon": "../static/images/platforms/uwp.svg" },
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "war-thunder",
    "title": "War Thunder",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Gaijin", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "warframe",
    "title": "Warframe",
    "hasTrainer": true,
    "cheatsCount": 6,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "warhaven",
    "title": "Warhaven",
    "hasTrainer": true,
    "cheatsCount": 4,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "xdefiant",
    "title": "XDefiant",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Ubisoft Connect", "icon": "../static/images/platforms/uplay.svg" },
      { "name": "Epic Games", "icon": "../static/images/platforms/epic.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "xenoblade-chronicles-3",
    "title": "Xenoblade Chronicles 3",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Nintendo", "icon": "../static/images/platforms/nintendo.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "z1-battle-royale",
    "title": "Z1 Battle Royale",
    "hasTrainer": true,
    "cheatsCount": 3,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "zenless-zone-zero",
    "title": "Zenless Zone Zero",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Hoyoverse", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "blood-strike",
    "title": "blood strike",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Mobile", "icon": "../static/images/platforms/custom.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "miside",
    "title": "miside",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      { "name": "Steam", "icon": "../static/images/platforms/steam.svg" }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "throne-and-liberty",
    "title": "Throne and Liberty",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      {
        "name": "Amazon Games",
        "icon": "../static/images/platforms/custom.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dark-and-darker",
    "title": "Dark and Darker",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      {
        "name": "Chaf Games",
        "icon": "../static/images/platforms/custom.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "star-citizen",
    "title": "Star Citizen",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      {
        "name": "Roberts Space Industries",
        "icon": "../static/images/platforms/custom.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "fantasy-life-i",
    "title": "FANTASY LIFE i: The Girl Who Steals Time",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      {
        "name": "Nintendo",
        "icon": "../static/images/platforms/nintendo.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "dune-awakening",
    "title": "Dune: Awakening",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      {
        "name": "Steam",
        "icon": "../static/images/platforms/steam.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "vindictus-defying-fate",
    "title": "Vindictus Defying Fate",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      {
        "name": "Steam",
        "icon": "../static/images/platforms/steam.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "sons-of-the-forest",
    "title": "Sons of the Forest",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      {
        "name": "Steam",
        "icon": "../static/images/platforms/steam.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "hogwarts-legacy",
    "title": "Hogwarts Legacy",
    "hasTrainer": true,
    "cheatsCount": 8,
    "platforms": [
      {
        "name": "Steam",
        "icon": "../static/images/platforms/steam.svg"
      },
      {
        "name": "Epic Games",
        "icon": "../static/images/platforms/epic.svg"
      },
      {
        "name": "PlayStation",
        "icon": "../static/images/platforms/playstation.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "hypixel-skyblock",
    "title": "Hypixel Skyblock",
    "hasTrainer": false,
    "cheatsCount": 0,
    "platforms": [
      {
        "name": "Minecraft",
        "icon": "../static/images/platforms/custom.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "forza-horizon-4",
    "title": "Forza Horizon 4",
    "hasTrainer": true,
    "cheatsCount": 7,
    "platforms": [
      {
        "name": "Steam",
        "icon": "../static/images/platforms/steam.svg"
      },
      {
        "name": "Microsoft Store",
        "icon": "../static/images/platforms/uwp.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  },
  {
    "slug": "enlisted",
    "title": "Enlisted",
    "hasTrainer": true,
    "cheatsCount": 5,
    "platforms": [
      {
        "name": "Gaijin",
        "icon": "../static/images/platforms/custom.svg"
      },
      {
        "name": "Steam",
        "icon": "../static/images/platforms/steam.svg"
      }
    ],
    "updated": "Last week",
    "status": "Available",
    "statusIcon": "../static/images/platforms/available.svg"
  }
];

  class Games {
    constructor(data) {
      this.gamesData = data;
      this.searchInput = document.querySelector('input[name="q"]');
      this.container = document.querySelector('.results-list');
      this.init();
    }

    init() {
      if (!this.searchInput || !this.container) {
        console.error('Games: селекторы не найдены. Проверьте input[name="q"] и .results-list');
        return;
      }
      this.renderGames(this.gamesData);
      this.searchInput.addEventListener('input', this.filterGames.bind(this));
    }

    renderGames(list) {
      this.container.innerHTML = '';
      list.forEach(game => {
        // создаём ссылку с нужными классами
        const a = document.createElement('a');
        a.className = 'game-result';
        if (game.hasTrainer) a.classList.add('has-trainer');
        a.href = `/cheats/${game.slug}`;
        a.setAttribute('aria-label', `${game.title} cheats`);

        // thumbnail
        const thumb = document.createElement('div');
        thumb.className = 'col thumbnail';
        const img = document.createElement('img');
        img.setAttribute('data-src', `../static/images/views/game-cards/${game.slug}.webp`);
        img.alt = game.title;
        thumb.appendChild(img);

        // name
        const name = document.createElement('div');
        name.className = 'col name';
        const nameDiv = document.createElement('div');
        nameDiv.textContent = game.title;
        name.appendChild(nameDiv);

        // cheats
        const cheats = document.createElement('div');
        cheats.className = 'col cheats';
        cheats.innerHTML = `<div class="desktop">${game.cheatsCount}</div><div class="mobile">${game.cheatsCount}</div>`;

        // platforms
        const platformsDiv = document.createElement('div');
        platformsDiv.className = 'col platforms';
        const wrapper = document.createElement('div');
        wrapper.className = 'platforms-wrapper';
        game.platforms.forEach(platform => {
          const span = document.createElement('span');
          span.className = 'platform';
          const icon = document.createElement('img');
          icon.className = 'platform-icon';
          icon.src = platform.icon;
          icon.alt = platform.name;
          const text = document.createElement('span');
          text.textContent = platform.name;
          span.append(icon, text);
          wrapper.appendChild(span);
        });
        platformsDiv.appendChild(wrapper);

        // updated
        const updated = document.createElement('div');
        updated.className = 'col updated';
        updated.textContent = game.updated;

        // status
        const statusDivOuter = document.createElement('div');
        statusDivOuter.className = 'col status';
        const statusInner = document.createElement('div');
        statusInner.className = 'available';
        const statusIcon = document.createElement('img');
        statusIcon.alt = '';
        statusIcon.src = game.statusIcon;
        const statusText = document.createElement('span');
        statusText.textContent = game.status;
        statusInner.append(statusIcon, statusText);
        statusDivOuter.appendChild(statusInner);

        a.append(thumb, name, cheats, platformsDiv, updated, statusDivOuter);
        this.container.appendChild(a);
      });
      this.initLazyLoad();
    }

    filterGames() {
      const term = this.searchInput.value.trim().toLowerCase();
      const filtered = term ? this.gamesData.filter(g => g.title.toLowerCase().includes(term)) : this.gamesData;
      this.renderGames(filtered);
    }

    initLazyLoad() {
      const imgs = this.container.querySelectorAll('img[data-src]');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.onload = () => img.parentElement.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });
      imgs.forEach(img => observer.observe(img));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Games(gamesData);
  });
})(window, document);
