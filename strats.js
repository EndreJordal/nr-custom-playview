const STRATAGEM_DATABASE = {
  "Talons of the Norn Queen": [
    {
      name: "CATALYTIC BIOFORTIFICATION",
      cp: "1 CP",
      type: "TALONS OF THE NORN QUEEN STRATAGEM",
      rules: {
        when: "Any phase, when a friendly **NORN ASSIMILATOR** unit suffers a mortal wound.",
        target: "That **NORN ASSIMILATOR** unit.",
        effect: "Your unit has **Feel No Pain 4+** against mortal wounds.",
      },
    },
    {
      name: "LESSER PREY",
      cp: "1 CP",
      type: "TALONS OF THE NORN QUEEN STRATAGEM",
      rules: {
        when: "Fight phase, when a friendly **NORN ASSIMILATOR / NORN EMISSARY** unit is selected to fight.",
        target: "That **NORN ASSIMILATOR / NORN EMISSARY** unit.",
        effect: "Your unit’s melee attacks have **+2 S**.",
      },
    },
    {
      name: "TANGLESTRIKE ROUNDS",
      cp: "1 CP",
      type: "TALONS OF THE NORN QUEEN STRATAGEM",
      rules: {
        when: "Your Shooting phase, when a friendly **NORN ASSIMILATOR** unit has shot.",
        target: "That **NORN ASSIMILATOR** unit.",
        effect:
          'Select one enemy unit hit by those attacks. That enemy unit is **tethered** until the start of your next Command phase:<br><br>• While a unit is tethered, that unit has **-2" M**.',
      },
    },
  ],

  "Assimilation Swarm": [
    {
      name: "BROODGUARD IMPULSE",
      cp: "1 CP",
      type: "ASSIMILATION SWARM – EPIC DEED STRATAGEM",
      rules: {
        when: "Any phase.",
        target:
          "One **HARVESTER** unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect:
          "Until the end of the battle, each time a friendly **TYRANIDS** model makes an attack that targets the enemy unit that just destroyed your **HARVESTER** unit, **add 1 to the Wound roll**.",
      },
    },
    {
      name: "RECLAIM BIOMASS",
      cp: "1 CP",
      type: "ASSIMILATION SWARM – STRATEGIC PLOY STRATAGEM",
      rules: {
        when: "Any phase, when a **TYRANIDS** unit from your army is destroyed, before the last model in it is removed from play.",
        target:
          'One **HARVESTER** unit from your army that is within **6"** of that destroyed unit.',
        effect:
          '**Regenerate** one friendly **TYRANIDS** unit within **6"** of your **HARVESTER** unit (See *Feed the Swarm*).',
      },
    },
    {
      name: "TYRANNOFORMED",
      cp: "1 CP",
      type: "ASSIMILATION SWARM – STRATEGIC PLOY STRATAGEM",
      rules: {
        when: "Command phase.",
        target:
          "One **HARVESTER** unit from your army that is within range of an objective marker you control.",
        effect:
          "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "ABLATIVE CARAPACE",
      cp: "2 CP",
      type: "ASSIMILATION SWARM – EPIC DEED STRATAGEM",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One **HARVESTER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the end of the phase, models in your unit have the **Feel No Pain 5+** ability. If your unit is within range of an objective marker you control, until the end of the phase models in your unit have the **Feel No Pain 4+** ability instead.",
      },
    },
    {
      name: "SECURE BIOMASS",
      cp: "1 CP",
      type: "ASSIMILATION SWARM – STRATEGIC PLOY STRATAGEM",
      rules: {
        when: "Fight phase.",
        target:
          "One **TYRANIDS** unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the **[LETHAL HITS]** ability. If your unit is a **HARVESTER** unit, each time a model in that unit makes a melee attack, a successful unmodified Hit roll of **5+** scores a **Critical Hit** as well.",
      },
    },
    {
      name: "RAPACIOUS HUNGER",
      cp: "1 CP",
      type: "ASSIMILATION SWARM – BATTLE TACTIC STRATAGEM",
      rules: {
        when: "Your Fight phase.",
        target:
          "One **TYRANIDS** unit from your army that just destroyed an enemy unit.",
        effect:
          "Your unit immediately **Regenerates** (See *Feed the Swarm*). When doing so, if your unit is a **HARVESTER** unit and you choose for one model to regain up to **D3** lost wounds, that model regains up to **3** lost wounds instead.",
      },
    },
  ],
};
