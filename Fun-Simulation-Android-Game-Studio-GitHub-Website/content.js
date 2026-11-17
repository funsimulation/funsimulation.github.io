/*
 FUN SIMULATION — MAIN EDITING FILE
 --------------------------------
 1) Studio name, tagline, descriptions and contact: edit values below.
 2) Add a game: copy one { ... } block in games array, paste after previous block, comma-separated.
 3) Delete a game: remove its entire { ... } block.
 4) featured: true selects the game displayed at the top (only first true is used).
 5) image: full screenshot URL OR path such as assets/games/mygame.jpg.
 6) screenshots: list of image URLs/files for the game details popup.
 7) socials: add { "name": "Instagram", "url": "https://..." }.
 8) To change logo, simply replace assets/logo.svg with a valid SVG image.

 NOTE: Games are also included as static HTML fallback in index.html.
 The live site uses this file when JavaScript is enabled. Keep JSON quotes/commas valid.
*/
const SITE = {
  "name": "Fun Simulation",
  "shortBrand": "FUN SIMULATION",
  "logo": "assets/logo.svg",
  "developerUrl": "https://play.google.com/store/apps/developer?id=FunSimulation",
  "email": "actiongamersstudio@gmail.com",
  "eyebrow": "INDEPENDENT ANDROID GAME STUDIO",
  "heroTitle": "Play your world.\\nMake every moment fun.",
  "heroDescription": "From open-world driving adventures to wild animal simulations, sports and clever puzzles — discover games built for players who love variety.",
  "tagline": "BIG WORLDS. EVERYDAY FUN.",
  "aboutTitle": "One studio.\\nMany ways to play.",
  "aboutText": "Fun Simulation publishes a growing collection of Android games across driving, simulation, wildlife, sports and puzzle genres. Explore the games, discover new challenges and find your next download on Google Play.",
  "contactTitle": "Let’s create\\nsomething fun.",
  "contactText": "For publishing opportunities, partnerships, game feedback or support, reach out to the Fun Simulation team.",
  "socials": [],
  "services": [
    {
      "num": "01",
      "title": "Driving Experiences",
      "detail": "Vehicle gameplay, driving challenges and simulation worlds."
    },
    {
      "num": "02",
      "title": "Worlds to Explore",
      "detail": "Interactive simulation games spanning diverse settings."
    },
    {
      "num": "03",
      "title": "Casual Challenges",
      "detail": "Puzzle, sports and pick-up-and-play mobile experiences."
    },
    {
      "num": "04",
      "title": "Android Publishing",
      "detail": "A growing collection available through Google Play."
    }
  ],
  "games": [
    {
      "id": "van",
      "title": "Open World Van Racing-Van Game",
      "category": "Driving",
      "label": "OPEN WORLD / RACING",
      "description": "Explore an open city, drive vans, complete passenger trips and take on racing challenges.",
      "link": "https://play.google.com/store/apps/details?id=com.parwana.openworld.vanracing.vansimulation.cargames",
      "image": "https://play-lh.googleusercontent.com/5aDN3HYE13L13xc8lefNcALmXBS_lBks1AXasiWnXmceufNmk4xwc50_-ksA6Vl9xmIa_Yg_yG_1LBZmaWtGY44=w526-h296",
      "screenshots": [
        "https://play-lh.googleusercontent.com/5aDN3HYE13L13xc8lefNcALmXBS_lBks1AXasiWnXmceufNmk4xwc50_-ksA6Vl9xmIa_Yg_yG_1LBZmaWtGY44=w526-h296",
        "https://play-lh.googleusercontent.com/KHM1ckw9MxL3DAY058k_RnTEsUymv0_fzwaNWrETsHJVrfjpkYbQW1rutzOQskyWZHsww-tB1n9tL2wjgR5KFUE=w526-h296"
      ],
      "featured": true,
      "fallback": "assets/covers/van.svg"
    },
    {
      "id": "bus",
      "title": "Bus Simulator: Bus Driving 3D",
      "category": "Driving",
      "label": "BUS / SIMULATION",
      "description": "Drive coach buses across city roads and routes while transporting passengers.",
      "link": "https://play.google.com/store/apps/details?id=com.funsimulation.busgames.bussimulator.vehiclegames",
      "image": "https://play-lh.googleusercontent.com/YnMe5xVdVm3mG94REGc9Y7V3rsg-zNiFi3Efb4Bm_mi9xN2Sj2d7AoQVgjPvHDfP-cvuLJQtdq2QYLLPSi98=w526-h296",
      "screenshots": [
        "https://play-lh.googleusercontent.com/YnMe5xVdVm3mG94REGc9Y7V3rsg-zNiFi3Efb4Bm_mi9xN2Sj2d7AoQVgjPvHDfP-cvuLJQtdq2QYLLPSi98=w526-h296",
        "https://play-lh.googleusercontent.com/A9zgUeTDx65LGz8ZfOfCKc9CUpGIMI_Q956vBw6ezhFFUg0jVNBDT7irqOZrpAGAgLO4BW5Lfs27zQlcYnW6gw=w526-h296"
      ],
      "featured": false,
      "fallback": "assets/covers/bus.svg"
    },
    {
      "id": "lion",
      "title": "Lion Family Simulator",
      "category": "Wildlife",
      "label": "WILDLIFE / SIMULATION",
      "description": "Enter a wild animal simulation with lion quests, exploration and jungle adventures.",
      "link": "https://play.google.com/store/apps/details?id=com.funcraft.games.lion.family.simulator.wild",
      "image": "",
      "screenshots": [],
      "featured": false,
      "fallback": "assets/covers/lion.svg"
    },
    {
      "id": "supermarket",
      "title": "Supermarket Simulator:Store 3D",
      "category": "Simulation",
      "label": "STORE / MANAGEMENT",
      "description": "Stock shelves, serve customers, manage checkout and grow a virtual supermarket.",
      "link": "https://play.google.com/store/apps/details?id=com.fs.supermarket.simulator.my.store.superstore.games.offline",
      "image": "https://play-lh.googleusercontent.com/nOrrVH-l5uIEAovqAVanQytEG4cWhrw9HF3AEXPiACipU2ZYg1ZsePwHzpj4CihefJC3i91aaQAQoxWR6_fuNOc=w526-h296",
      "screenshots": [
        "https://play-lh.googleusercontent.com/nOrrVH-l5uIEAovqAVanQytEG4cWhrw9HF3AEXPiACipU2ZYg1ZsePwHzpj4CihefJC3i91aaQAQoxWR6_fuNOc=w526-h296",
        "https://play-lh.googleusercontent.com/HNP-PoYe8pRfNvYq6xnR0qF3Wsm6L9iTgse067SfUx2uYeOzIVZZl6buoOC32U9z9Ug6nfkr_tAWrVYdqeZxFw=w526-h296"
      ],
      "featured": false,
      "fallback": "assets/covers/supermarket.svg"
    },
    {
      "id": "football",
      "title": "Football Games: Real Soccer",
      "category": "Sports",
      "label": "FOOTBALL / SPORTS",
      "description": "Play offline 11v11 football matches and take on league challenges.",
      "link": "https://play.google.com/store/apps/details?id=com.funsim.footballgames.soccergames.sportsgames",
      "image": "https://play-lh.googleusercontent.com/6QlRzSFyE4TpynyX3XhQf38CdySm5aCsabQohIgy11AcfeBd7E5BRtK3DRLlA5wUpUj-8UxqEttmRK6qHZPwPQ=w526-h296",
      "screenshots": [
        "https://play-lh.googleusercontent.com/6QlRzSFyE4TpynyX3XhQf38CdySm5aCsabQohIgy11AcfeBd7E5BRtK3DRLlA5wUpUj-8UxqEttmRK6qHZPwPQ=w526-h296",
        "https://play-lh.googleusercontent.com/URiuj6KWyv1Fo1QbDttT8jz_tiVhX2sz2n8i8Y9_v_Ul_2gZruxEMK6dvpzeYBOKuUTsBXHnVKA1T7W6S_8C5g=w526-h296"
      ],
      "featured": false,
      "fallback": "assets/covers/football.svg"
    },
    {
      "id": "arrow",
      "title": "Arrow Out: Tap Away Puzzle Pro",
      "category": "Puzzle",
      "label": "PUZZLE / BRAIN GAME",
      "description": "Solve arrow-based logic puzzles with careful moves and satisfying challenges.",
      "link": "https://play.google.com/store/apps/details?id=com.funsimulation.arrowout.tapaway.puzzle",
      "image": "https://play-lh.googleusercontent.com/7psqP_cniGxzF2Fe3XuejDD3up8l1f7k1In3rxqcRw_0kQINQLsecWLNXjpgm7t_KNZTiIIHiO0XWfnK65ar5gE=w526-h296",
      "screenshots": [
        "https://play-lh.googleusercontent.com/7psqP_cniGxzF2Fe3XuejDD3up8l1f7k1In3rxqcRw_0kQINQLsecWLNXjpgm7t_KNZTiIIHiO0XWfnK65ar5gE=w526-h296"
      ],
      "featured": false,
      "fallback": "assets/covers/arrow.svg"
    },
    {
      "id": "parking",
      "title": "Car parking game - car games",
      "category": "Driving",
      "label": "CAR / PARKING",
      "description": "Test parking precision with car control challenges and increasingly tricky spaces.",
      "link": "https://play.google.com/store/apps/details?id=com.funsimulation.carparkinggame.cargames",
      "image": "https://play-lh.googleusercontent.com/3u-BFT0ArJH82wnIQs6WTTaFrqF_A1gMTGJYnjz6F-sE8pw6wpvFnJvUvwNs1SuZ1hm_UE4WmrjsL8xG9Plt=w526-h296",
      "screenshots": [
        "https://play-lh.googleusercontent.com/3u-BFT0ArJH82wnIQs6WTTaFrqF_A1gMTGJYnjz6F-sE8pw6wpvFnJvUvwNs1SuZ1hm_UE4WmrjsL8xG9Plt=w526-h296"
      ],
      "featured": false,
      "fallback": "assets/covers/parking.svg"
    },
    {
      "id": "truck",
      "title": "Truck Simulator : Truck Games",
      "category": "Driving",
      "label": "TRUCK / SIMULATION",
      "description": "Drive trucks, transport cargo and tackle city driving and parking missions.",
      "link": "https://play.google.com/store/apps/details?id=com.funsimulation.truck.parking.simulation.game",
      "image": "https://play-lh.googleusercontent.com/J-3MOiIBc4tYf-3QhfyTk4lnN3S94PanU-RbixaEE-NDkr_ml__BM8ptCyTBXuk45VjOL8KFKCzgPi_G6AVG4w=w526-h296",
      "screenshots": [
        "https://play-lh.googleusercontent.com/J-3MOiIBc4tYf-3QhfyTk4lnN3S94PanU-RbixaEE-NDkr_ml__BM8ptCyTBXuk45VjOL8KFKCzgPi_G6AVG4w=w526-h296"
      ],
      "featured": false,
      "fallback": "assets/covers/truck.svg"
    }
  ]
};
