const STRATAGEM_DATABASE = {
  "Talons of the Norn Queen": [
    {
      name: "CATALYTIC BIOFORTIFICATION",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly **NORN ASSIMILATOR** unit suffers a mortal wound.",
        target: "That **NORN ASSIMILATOR** unit.",
        effect: "Your unit has **Feel No Pain 4+** against mortal wounds.",
      },
    },
    {
      name: "LESSER PREY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly **NORN ASSIMILATOR / NORN EMISSARY** unit is selected to fight.",
        target: "That **NORN ASSIMILATOR / NORN EMISSARY** unit.",
        effect: "Your unit’s melee attacks have **+2 S**.",
      },
    },
    {
      name: "TANGLESTRIKE ROUNDS",
      cp: "1 CP",
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
      rules: {
        when: "Your Fight phase.",
        target:
          "One **TYRANIDS** unit from your army that just destroyed an enemy unit.",
        effect:
          "Your unit immediately **Regenerates** (See *Feed the Swarm*). When doing so, if your unit is a **HARVESTER** unit and you choose for one model to regain up to **D3** lost wounds, that model regains up to **3** lost wounds instead.",
      },
    },
  ],

  "Ambush Predators": [
    {
      name: "COUNTERPREDATION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly **DEATHLEAPER/LICTOR/NEUROLICTOR/VON RYAN’S LEAPERS** unit is selected to fight.",
        target: "That **DEATHLEAPER/LICTOR/NEUROLICTOR/VON RYAN’S LEAPERS** unit.",
        effect: "Your unit’s attacks that target a hidden unit have **+1 S and AP**.",
      },
    },
    {
      name: "HYPERSENSORY ADAPTATIONS",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly **DEATHLEAPER/LICTOR/NEUROLICTOR/VON RYAN’S LEAPERS** unit.",
        effect:
          'Select one visible enemy unit within **12"** of your unit. That enemy unit has **+6" detection range**.',
      },
    },
    {
      name: "SCANNER GHEIST",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One friendly unengaged **DEATHLEAPER/LICTOR/NEUROLICTOR** unit.",
        effect: "Place your unit in **strategic reserves**.",
      },
    },
  ],

  "Warrior Bioform Onslaught": [
    {
      name: "ALIEN PHYSIOLOGY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly **TYRANID WARRIORS** unit.",
        target: "That **TYRANID WARRIORS** unit.",
        effect: "Attacks that target your unit with a S greater than your unit’s T have **-1 to wound rolls**.",
      },
    },
    {
      name: "SYNAPTIC MICRONODES",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One friendly **TYRANID WARRIORS** unit.",
        effect: "Select one objective your unit is controlling. That objective is **secured**.",
      },
    },
    {
      name: "PARASITIC PAYLOAD",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly **TYRANID WARRIORS** unit is selected to shoot.",
        target: "That **TYRANID WARRIORS** unit.",
        effect: "Your unit’s ranged attacks have **[IGNORE COVER]**.",
      },
    },
  ],

  "Hand of the Dynasty": [
    {
      name: "DOMINANCE PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One friendly **IMMORTALS** unit.",
        effect: "Your unit has **+1 OC** until the end of the turn.",
      },
    },
    {
      name: "WILL OF THE CONQUEROR",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One friendly **IMMORTALS/NECRON WARRIORS** unit.",
        effect: "Select one objective your unit is controlling. That objective is **secured**.",
      },
    },
    {
      name: "NANOSATURATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly **IMMORTALS/NECRON WARRIORS** unit has shot.",
        target: "That **IMMORTALS/NECRON WARRIORS** unit.",
        effect: "Your unit shoots using **snap shooting**, but while doing so your unit can only target that enemy unit.",
      },
    },
  ],

  "Skyshroud Spearhead": [
    {
      name: "OMNILOCKED STRAFING",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly **NECRONS MOUNTED** unit is selected to make a fall-back move.",
        target: "That **NECRONS MOUNTED** unit.",
        effect: "That move does not prevent your unit from being eligible to shoot.",
      },
    },
    {
      name: "SWIFT AS DEATH",
      cp: "1 CP",
      rules: {
        when:
          'Your opponent’s Movement phase, when an enemy unit ends a move within **8"** of a friendly unengaged **NECRONS MOUNTED** unit.',
        target: "That **NECRONS MOUNTED** unit.",
        effect: 'Your unit can make a normal move of up to **D3+3"**.',
      },
    },
    {
      name: "EVASIVE PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly **NECRONS MOUNTED** unit.",
        target: "That **NECRONS MOUNTED** unit.",
        effect: "Ranged attacks that target your unit with a S greater than your unit’s T have **-1 to wound rolls**.",
      },
    },
  ],

  "The Phaeron's Armoury": [
    {
      name: "SUBSURFACE QUANTUMWEAVE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly **NECRONS TITANIC FLY** unit.",
        target: "That **NECRONS TITANIC FLY** unit.",
        effect: "Attacks that target your unit have **-1 AP** until that enemy unit has attacked.",
      },
    },
    {
      name: "PARTICLE PULSE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly **NECRONS TITANIC FLY** unit.",
        effect:
          'Select one visible enemy unit within **12"** of your unit. That enemy unit has **+3" detection range**.',
      },
    },
    {
      name: "COSMIC STORM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly **OBELISK/TESSERACT VAULT** unit is selected to shoot.",
        target: "That **OBELISK/TESSERACT VAULT** unit.",
        effect: "Your unit’s Tesla Sphere weapons have **+1 AP**.",
      },
    },
  ],

  "Invasion Fleet": [
    {
      name: "RAPID REGENERATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **TYRANIDS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the end of the phase, models in your unit have the **Feel No Pain 6+** ability. If your unit is within **Synapse Range** of your army, models in your unit have the **Feel No Pain 5+** ability instead.",
      },
    },
    {
      name: "ADRENAL SURGE",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target:
          "Up to two **TYRANIDS** units from your army that are within **Synapse Range** of your army and are eligible to fight, or one other **TYRANIDS** unit from your army that is eligible to fight.",
        effect:
          "Until the end of the phase, each time a model in any of those selected units makes an attack, an unmodified Hit roll of **5+** scores a **Critical Hit**.",
      },
    },
    {
      name: "DEATH FRENZY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **TYRANIDS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a **4+**, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "OVERRUN",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before a **TYRANIDS** unit from your army Consolidates.",
        target: "That **TYRANIDS** unit.",
        effect:
          'Until the end of the phase, each time your unit Consolidates, models in it can move an additional **3"** as long as your unit can end that move within Engagement Range of one or more enemy units. If your unit is within **Synapse Range** of your army and not within Engagement Range of any enemy units, instead of making that Consolidation move, it can make a Normal move of up to **6"**.',
      },
    },
    {
      name: "PREDATORY IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target:
          "Up to two **TYRANIDS** units from your army that are within **Synapse Range** of your army, or one other **TYRANIDS** unit from your army.",
        effect:
          "Select one **Hyper-adaptation**. Until the start of your next Command phase, that Hyper-adaptation is active for those selected units in addition to any other that may be active for your army.<br><br>**Restrictions:** You cannot select the same Hyper-adaptation you selected at the start of the first battle round.",
      },
    },
    {
      name: "ENDLESS SWARM",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target:
          "Up to two **ENDLESS MULTITUDE** units from your army that are within **Synapse Range** of your army, or one other **ENDLESS MULTITUDE** unit from your army.",
        effect: "You can return up to **D3+3** destroyed models to each of the selected units.",
      },
    },
  ],

  "Crusher Stampede": [
    {
      name: "CORROSIVE VISCERA",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after a **TYRANIDS MONSTER** model from your army with the **Deadly Demise** ability that cannot **FLY** is destroyed.",
        target: "That **TYRANIDS MONSTER** model. You can use this Stratagem on that model even though it was just destroyed.",
        effect:
          "Do not roll one D6 to determine whether mortal wounds are inflicted by your model’s **Deadly Demise** ability. Instead, mortal wounds are automatically inflicted.",
      },
    },
    {
      name: "RAMPAGING MONSTROSITIES",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **TYRANIDS MONSTER** unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, you can **re-roll the Hit roll**.",
      },
    },
    {
      name: "SAVAGE ROAR",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **TYRANIDS MONSTER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "That enemy unit must take a **Battle-shock test** and, until the end of the phase, each time a model in that enemy unit makes an attack that targets your unit, subtract 1 from the Hit roll. If that Battle-shock test was failed, subtract 1 from the Wound roll as well.",
      },
    },
    {
      name: "UNTRAMMELLED FEROCITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **TYRANIDS MONSTER** unit from your army that has not been selected to move this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes a Normal, Advance or Fall Back move, it can move through models (excluding **TITANIC** models) and sections of terrain features that are **4"** or less in height. When doing so:<br><br>• It can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them.<br><br>• It can also move through sections of terrain features that are more than **4"** in height, but if it does, after its unit has moved, roll one D6: on a 1, your unit is **Battle-shocked**.',
      },
    },
    {
      name: "SWARM-GUIDED SALVOES",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **TYRANIDS MONSTER** unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES COVER]** ability, and until the end of the phase each time a model in your unit makes an attack, you can ignore any or all modifiers to that model’s Ballistic Skill characteristic and any or all modifiers to the Hit roll.",
      },
    },
    {
      name: "MASSIVE IMPACT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **TYRANIDS MONSTER** model from your army ends a Charge move.",
        target: "That **TYRANIDS MONSTER** model.",
        effect: "Select one enemy unit within Engagement Range of your model and roll six D6: for each **4+**, that enemy unit suffers **1 mortal wound**.",
      },
    },
  ],

  "Vanguard Onslaught": [
    {
      name: "SURPRISE ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after a **VANGUARD INVADER** unit from your army has selected its targets.",
        target: "That **VANGUARD INVADER** unit.",
        effect:
          "Select one enemy unit that was selected as the target of one or more of your unit’s attacks. That enemy unit must take a **Battle-shock test**. Until the end of the phase, each time a model in your unit makes an attack that targets that enemy unit, add 1 to the Hit roll. If the Battle-shock test was failed, add 1 to the Wound roll as well.",
      },
    },
    {
      name: "ASSASSIN BEASTS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **VANGUARD INVADER INFANTRY** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[PRECISION]** ability.",
      },
    },
    {
      name: "SEEDED BROODS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target:
          "One **TYRANIDS** unit from your army that is in Reserves, or up to two **VANGUARD INVADER** units from your army that are in Reserves.",
        effect:
          "Until the end of the phase, for the purposes of setting up those selected units on the battlefield, treat the current battle round number as being **one higher** than it actually is.",
      },
    },
    {
      name: "HYPERSENSORY SCILLIA",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'Up to two **VANGUARD INVADER** units from your army that are within **9"** of that enemy unit, or one other **TYRANIDS INFANTRY** unit from your army that is within **9"** of that enemy unit.',
        effect:
          'Those selected units can each make a Normal move of up to **6"**.<br><br>**Restrictions:** You cannot target units that are within Engagement Range of one or more enemy units.',
      },
    },
    {
      name: "UNSEEN LURKERS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **VANGUARD INVADER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          'Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within **18"** or, if your unit has the **Lone Operative** ability, if the attacking model is within **6"**. Your opponent can select new targets for the attacking unit’s attacks.',
      },
    },
    {
      name: "INVISIBLE HUNTER",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to two **VANGUARD INVADER** units from your army, or one **TYRANIDS INFANTRY** unit from your army.",
        effect:
          'Remove the targeted units from the battlefield and place them into **Strategic Reserves**.<br><br>**Restrictions:** The targeted units must be more than **3"** away from all enemy units.',
      },
    },
  ],

  "Synaptic Nexus": [
    {
      name: "THE SMOTHERING SHADOW",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit fails a Battle-shock test.",
        target: 'One **SYNAPSE** unit from your army within **12"** of that enemy unit.',
        effect: "Roll six D6: for each **3+**, that enemy unit suffers **1 mortal wound**.",
      },
    },
    {
      name: "SYNAPTIC CHANNELLING",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **SYNAPSE** unit from your army.",
        effect:
          'Until the end of the turn, while a friendly **TYRANIDS** unit is within **9"** of the selected unit, that unit is within **Synapse Range** of your army.',
      },
    },
    {
      name: "IRRESISTIBLE WILL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target:
          'One **SYNAPSE** unit from your army that has not been selected to shoot or fight this phase, and one enemy unit within **24"** of and visible to the **SYNAPSE** unit.',
        effect:
          'Until the end of the phase, each time a friendly **TYRANIDS** model makes an attack that targets that enemy unit, if the attacking model’s unit is within **6"** of your **SYNAPSE** unit, **re-roll a Hit roll of 1** and **re-roll a Wound roll of 1**.',
      },
    },
    {
      name: "REINFORCED HIVE NODE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **SYNAPSE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the attacking unit has finished making its attacks, each time an attack targets your unit, **worsen the Armour Penetration characteristic of that attack by 1**.",
      },
    },
    {
      name: "IMPERATIVE DOMINANCE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **TYRANIDS** unit from your army that is within **Synapse Range** of your army.",
        effect:
          "Select one **Synaptic Imperative**, even if you have already selected that imperative this battle. Until the start of your next Command phase, that Synaptic Imperative is active for your unit instead of any other Synaptic Imperative that is active for your army.",
      },
    },
    {
      name: "OVERRIDE INSTINCTS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **TYRANIDS** unit from your army that is within **Synapse Range** of your army and made a **Fall Back** move this phase.",
        effect: "Your unit is **eligible to shoot and declare a charge** this turn.",
      },
    },
  ],

  "Subterranean Assault": [
    {
      name: "ADAPTIVE OPTIMISATION",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **MAWLOC** or **TRYGON** unit from your army.",
        effect: "Until the start of your next Command phase, your unit has the **SYNAPSE** keyword.",
      },
    },
    {
      name: "REPLENISHING SWARMS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: 'One **TYRANIDS** unit from your army, wholly within **9"** of one or more **Tunnel Markers** you placed.',
        effect:
          "One model in your unit regains up to **D3+1** lost wounds, or you can return up to **D3+1** destroyed models with a Wounds characteristic of 1 to your unit, with their full wounds remaining, instead.",
      },
    },
    {
      name: "ENFILADING EMERGENCE",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One **TYRANIDS** unit from your army that was set up as **Reinforcements** this turn.",
        effect:
          "Until the end of your next Fight phase, weapons equipped by models in your unit have the **[SUSTAINED HITS 1]** and **[IGNORES COVER]** abilities.",
      },
    },
    {
      name: "TUNNEL NETWORK",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target:
          'One **TYRANIDS** unit from your army that is wholly within **9"** of one or more of your **Tunnel Markers** and not within Engagement Range of one or more enemy units.',
        effect:
          'Remove your unit from the battlefield and set it up again, wholly within **9"** of another **Tunnel Marker** you placed, and more than **6"** horizontally away from all enemy units.',
      },
    },
    {
      name: "SWARMING ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **TYRANIDS MONSTER** unit from your army that was set up as **Reinforcements** this turn.",
        effect: 'Until the end of the phase, friendly **TYRANIDS** units within **6"** of your unit can **re-roll Charge rolls**.',
      },
    },
    {
      name: "RETREAT BELOW",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **TYRANIDS** unit or up to two **BURROWER** units from your army that are not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into **Strategic Reserves**.",
      },
    },
  ],

  "Hypercrypt Legion": [
    {
      name: "HYPERPHASIC RECALL",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has shot or fought.",
        target:
          "One **NECRONS INFANTRY** unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks and one friendly **MONOLITH** model.",
        effect:
          'Remove your **INFANTRY** unit from the battlefield and then set it back up anywhere on the battlefield that is wholly within **6"** of your **MONOLITH** model and not within Engagement Range of one or more enemy units.',
      },
    },
    {
      name: "QUANTUM DEFLECTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **NECRONS VEHICLE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a **4+ invulnerable save**.",
      },
    },
    {
      name: "REANIMATION CRYPTS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "Your **NECRONS WARLORD**.",
        effect: "For each of your **NECRONS** units in Reserves, that Reserves unit’s **Reanimation Protocols** activate.",
      },
    },
    {
      name: "COSMIC PRECISION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target:
          "One **NECRONS** unit from your army (excluding **MONSTER** units) that is arriving using the **Deep Strike** or **Hyperphasing** abilities this phase.",
        effect:
          'Your unit can be set up anywhere on the battlefield that is more than **6"** horizontally away from all enemy models.<br><br>**Restrictions:** A unit targeted with this Stratagem is not eligible to declare a charge in the same turn.',
      },
    },
    {
      name: "DIMENSIONAL CORRIDOR",
      cp: "2 CP",
      rules: {
        when: "Your Charge phase.",
        target:
          "One **NECRONS** unit from your army that was set up on the battlefield this turn using the **Eternity Gate** ability of a **MONOLITH** model that started the turn on the battlefield.",
        effect: "Your unit is **eligible to charge** this phase.",
      },
    },
    {
      name: "ENTROPIC DAMPING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target:
          'One **TITANIC** model from your army that was selected as the target of one or more of the attacking unit’s attacks and is within **18"** of the attacking unit.',
        effect: "Until the end of the phase, weapons equipped by models in the attacking unit have the **[HAZARDOUS]** ability.",
      },
    },
  ],

  "Awakened Dynasty": [
    {
      name: "PROTOCOL OF THE ETERNAL REVENANT",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target:
          "One **NECRONS INFANTRY CHARACTER** model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect:
          "At the end of the phase, set your model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with **half of its starting number of wounds** remaining.<br><br>**Restrictions:** Each model can only be targeted with this Stratagem once per battle.",
      },
    },
    {
      name: "PROTOCOL OF THE UNDYING LEGIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has resolved its attacks.",
        target: "One **NECRONS** unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks.",
        effect:
          "Your unit activates its **Reanimation Protocols** and reanimates **D3 wounds** (or **D3+1 wounds** if a **NECRONS CHARACTER** is leading your unit).",
      },
    },
    {
      name: "PROTOCOL OF THE HUNGRY VOID",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **NECRONS** unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, add **1** to the Strength characteristic of melee weapons equipped by models in your unit. In addition, if a **NECRONS CHARACTER** is leading your unit, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by **1** (this is not cumulative with any other modifiers that improve Armour Penetration).",
      },
    },
    {
      name: "PROTOCOL OF THE SUDDEN STORM",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **NECRONS** unit from your army.",
        effect:
          "Until the end of the turn, ranged weapons equipped by models in your unit have the **[ASSAULT]** ability. In addition, if a **NECRONS CHARACTER** is leading your unit, until the end of the phase, you can **re-roll Advance rolls** made for your unit.",
      },
    },
    {
      name: "PROTOCOL OF THE CONQUERING TYRANT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **NECRONS** unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within half range, **re-roll a Hit roll of 1**. If a **NECRONS CHARACTER** is leading your unit, until the end of the phase, you can **re-roll the Hit roll** for that attack instead.",
      },
    },
    {
      name: "PROTOCOL OF THE VENGEFUL STARS",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit destroys a **NECRONS** unit from your army.",
        target: 'One **NECRONS CHARACTER** unit from your army that was within **6"** of that NECRONS unit when it was destroyed.',
        effect:
          "After the attacking unit has resolved its attacks, your unit can **shoot** as if it were your Shooting phase, but it must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],

  "Canoptek Court": [
    {
      name: "CURSE OF THE CRYPTEK",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has shot or fought.",
        target:
          "One **CRYPTEK** model from your army that was destroyed by one of the attacking unit’s attacks. You can use this Stratagem on that model even though it was just destroyed.",
        effect:
          "Until the end of the battle, each time a friendly **CANOPTEK** model makes an attack that targets the attacking unit, **add 1 to the Hit roll** and **add 1 to the Wound roll**.",
      },
    },
    {
      name: "CYNOSURE OF ERADICATION",
      cp: "2 CP",
      rules: {
        when: "The start of your Shooting phase or the start of the Fight phase.",
        target: "One **CRYPTEK** or **CANOPTEK** unit from your army that is wholly within your army’s **Power Matrix**.",
        effect:
          "Until the end of the phase, weapons equipped by **CRYPTEK** or **CANOPTEK** models in your unit have the **[DEVASTATING WOUNDS]** ability.",
      },
    },
    {
      name: "SOLAR PULSE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One **CRYPTEK** model from your army.",
        effect:
          'Select one objective marker within **18"** of your **CRYPTEK** model. Until the end of the phase, weapons equipped by friendly **NECRONS** models have the **[IGNORES COVER]** ability while targeting units within range of that objective marker.',
      },
    },
    {
      name: "REACTIVE SUBROUTINES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: 'One **CANOPTEK** unit from your army that is within **9"** of that enemy unit.',
        effect: 'Your unit can make a Normal move of up to **6"**.',
      },
    },
    {
      name: "COUNTERTEMPORAL SHIFT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **CANOPTEK** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within **18"**.',
      },
    },
    {
      name: "SUBOPTIMAL FACADE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit has declared a charge.",
        target: "One **CANOPTEK** unit from your army that was selected as a target of that charge and is wholly within your army’s **Power Matrix**.",
        effect: "Your unit’s **Reanimation Protocols** activate.",
      },
    },
  ],

  "Obeisance Phalanx": [
    {
      name: "YOUR TIME IS NIGH",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after your opponent’s **WARLORD** is destroyed.",
        target: "Your **NECRONS WARLORD**.",
        effect: "Until the end of the battle, each time an enemy unit takes a **Battle-shock** or **Leadership test**, subtract 1 from the result.",
      },
    },
    {
      name: "ENSLAVED ARTIFICE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit from your army (excluding **TITANIC** units) that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of **5+** scores a **Critical Hit**.",
      },
    },
    {
      name: "NANOASSEMBLY PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **NECRONS VEHICLE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the end of the phase, each time an attack is allocated to a model in your unit, **subtract 1 from the Damage characteristic** of that attack.",
      },
    },
    {
      name: "SENTINELS OF ETERNITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One **LYCHGUARD** or **TRIARCH PRAETORIANS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a **4+**, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making attacks, and is then removed from play.",
      },
    },
    {
      name: "SUFFER NO RIVAL",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **LYCHGUARD** or **TRIARCH** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[PRECISION]** ability.",
      },
    },
    {
      name: "TERRITORIAL OBSESSION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LYCHGUARD** or **TRIARCH** unit from your army.",
        effect:
          "Until the start of your next Command phase, add **1** to the Objective Control characteristic of models in your unit. If your unit has the **VEHICLE** keyword, add **3** to the Objective Control characteristic instead.",
      },
    },
  ],

  "Starshatter Arsenal": [
    {
      name: "MERCILESS RECLAMATION",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit (excluding **MONSTER** and **TITANIC** units) from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, if the target of that attack is within range of one or more objective markers, **add 1 to the Wound roll**.",
      },
    },
    {
      name: "UNYIELDING FORMS",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One **NECRONS VEHICLE** or **NECRONS MOUNTED** unit (excluding **TITANIC** units) from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the end of the phase, each time an attack targets a model in your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, **subtract 1 from the Wound roll**.",
      },
    },
    {
      name: "CHRONOSHIFT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **NECRONS VEHICLE** or **NECRONS MOUNTED** unit (excluding **TITANIC** units) from your army that has not been selected to move this phase.",
        effect:
          'Until the end of the phase, if your unit **Advances**, do not make an Advance roll for it. Instead, until the end of the phase, add **6"** to the Move characteristic of models in your unit.',
      },
    },
    {
      name: "DIMENSIONAL TUNNEL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **NECRONS VEHICLE** or **NECRONS MOUNTED** unit (excluding **TITANIC** units) from your army.",
        effect: "Until the end of the phase, models in your unit can **move horizontally through models and terrain features**.",
      },
    },
    {
      name: "ENDLESS SERVITUDE",
      cp: "1 CP",
      rules: {
        when: "End of your Fight phase.",
        target: "One **NECRONS** unit (excluding **MONSTER** and **TITANIC** units) from your army that is within range of one or more objective markers you control.",
        effect: "Your unit’s **Reanimation Protocols** activate.",
      },
    },
    {
      name: "REACTIVE REPOSITION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **NECRONS** unit from your army (excluding **MONSTER** and **TITANIC** units) that was the target of one or more of the attacking unit’s attacks.",
        effect: 'Your unit can make a Normal move of up to **D6"**.',
      },
    },
  ],

  "Cryptek Conclave": [
    {
      name: "MOLECULAR TARGETING",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack’s Ballistic Skill or Weapon Skill characteristic; the Hit roll. If your unit has the **CRYPTEK** keyword, you can also ignore any or all modifiers to the Wound roll.",
      },
    },
    {
      name: "MICROSCARAB SWARM",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **CRYPTEK INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "If your unit has the **NECRON WARRIORS** keyword, until the end of the phase, models in your unit have a **5+ invulnerable save**. If your unit has the **IMMORTALS** keyword, until the end of the phase, models in your unit have a **4+ invulnerable save**.",
      },
    },
    {
      name: "ANIMUS CURSE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has shot or fought.",
        target:
          "One **CRYPTEK** model from your army that was destroyed by one of the attacking unit’s attacks. You can use this Stratagem on that model even though it was just destroyed.",
        effect:
          "Until the end of the battle, each time a friendly **NECRONS** model makes an attack that targets the attacking unit, you can **re-roll the Hit roll**.",
      },
    },
    {
      name: "SYNERGISTIC EMPOWERMENT",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One **CRYPTEK** unit from your army.",
        effect:
          'Select one friendly **NECRONS** model (excluding **MONSTERS** and **VEHICLES**) within **12"** of a **CRYPTEK** model in your unit. Until the end of the phase, that friendly NECRONS model has the **CRYPTEK** keyword.',
      },
    },
    {
      name: "UNTAPPED POWER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **CRYPTEK** unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time your unit is selected to shoot, when selecting an ability for the **Technosorcerous Augmentations** Detachment Rule, you can select **one additional ability** from those available.",
      },
    },
    {
      name: "POTENTIALITY SYPHON",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One **NECRONS** unit from your army within range of one or more objective markers.",
        effect: "Your unit’s **Reanimation Protocols** activate. If it is a **CRYPTEK** unit, it reanimates an additional **1 wound**.",
      },
    },
  ],

  "Cursed Legion": [
    {
      name: "METHODICAL MURDER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit (excluding **MONSTERS** and **VEHICLES**) from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the **[SUSTAINED HITS 1]** ability.",
      },
    },
    {
      name: "IMAGE OF DEATH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DESTROYER CULT** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, **subtract 1 from the Hit roll**.",
      },
    },
    {
      name: "MORTIS PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after the first time a **DESTROYER CULT** unit from your army destroys an enemy unit this turn.",
        target: 'One friendly **NECRONS** unit (excluding **MONSTERS** and **VEHICLES**) within **9"** of that DESTROYER CULT unit.',
        effect: "The friendly unit’s **Reanimation Protocols** activate.",
      },
    },
    {
      name: "DRIVEN TO BUTCHERY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or your Charge phase.",
        target: "One **DESTROYER CULT** unit from your army.",
        effect:
          "Until the end of the turn, your unit is **eligible to shoot and declare a charge** in a turn in which it Advanced.<br><br>**Restrictions:** You can only use this Stratagem once per turn.",
      },
    },
    {
      name: "SPREADING MADNESS",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **NECRONS** unit (excluding **MONSTERS** and **VEHICLES**) from your army that has not declared a charge this phase.",
        effect:
          "Until the end of the phase, each time your unit declares a charge, if one or more targets of that charge are within Engagement Range of one or more friendly units, **add 2 to the Charge roll**.",
      },
    },
    {
      name: "UNNATURAL AGGRESSION",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target:
          'One **NECRONS** unit (excluding **MONSTERS** and **VEHICLES**) from your army that is within **6"** of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.',
        effect:
          "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge. Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    },
  ],

  "Pantheon of Woe": [
    {
      name: "DISHARMONISATION CASCADE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **NECRONS MONSTER** model from your army is destroyed, before making its **Deadly Demise** roll.",
        target: "That **NECRONS MONSTER** model. You can use this Stratagem on that model even though it was just destroyed.",
        effect:
          "Until the end of the phase, your model’s **Deadly Demise** ability inflicts mortal wounds on a D6 roll of **3+** instead of on a **6**.",
      },
    },
    {
      name: "MOLECULAR EROSION",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **NECRONS MONSTER** unit from your army.",
        effect:
          "Select one **unravelling** enemy unit visible to your unit. That enemy unit must take a **Battle-shock test**. When doing so, subtract 1 from the result. If that test is failed, that enemy unit suffers **D3+1 mortal wounds**.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "MASS TRANSMOGRIFICATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after a **NECRONS MONSTER** unit from your army destroys an enemy unit.",
        target: 'One friendly **NECRONS** unit (excluding **MONSTERS**) within **6"** of that MONSTER unit.',
        effect:
          "If that enemy unit was **unravelling** at the start of the phase, your friendly unit’s **Reanimation Protocols** activate.<br><br>**Restrictions:** You can only use this Stratagem once per turn.",
      },
    },
    {
      name: "ENTROPHASIC AURA TARGETING",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit (excluding **MONSTERS**) from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, **re-roll a Hit roll of 1**. If the target of that attack is **unravelling**, **re-roll a Wound roll of 1** as well.",
      },
    },
    {
      name: "CHRONODISTORTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **NECRONS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 if the attacking unit is **unravelling**: on a **4+**, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "PHASE MELDING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an **unravelling** enemy unit is selected to Fall Back.",
        target: "One **NECRONS** unit from your army that is within Engagement Range of that enemy unit.",
        effect:
          "When that enemy unit **Falls Back**, all models in that enemy unit must take a **Desperate Escape test**. When doing so, if that enemy unit is **Battle-shocked**, subtract 1 from each of those tests.",
      },
    },
  ],

  "Realspace Raiders": [
    {
      name: "INSENSIBLE TO PAIN",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HAEMONCULUS COVENS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect:
          "Until the end of the phase, each time an attack is allocated to a model in your unit, **subtract 1 from the Damage characteristic** of that attack.",
      },
    },
    {
      name: "FIGHTING SHADOWS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DRUKHARI** unit from your army (excluding **HAEMONCULUS COVENS** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, **subtract 1 from the Hit roll**.",
      },
    },
    {
      name: "INSTINCTIVE SPITE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase or the start of the Fight phase.",
        target: "Up to two **DRUKHARI BATTLELINE** units from your army, or one other **DRUKHARI** unit from your army.",
        effect:
          "You can spend 1 **Pain token**. Until the end of the phase, each time a model in each of those units makes an attack that targets an enemy unit that is **Below Half-strength**, **add 1 to the Hit roll**. If you spent 1 Pain token, **add 1 to the Wound roll** as well.",
      },
    },
    {
      name: "DARK HARVEST",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "Up to two **WRACKS** units from your army, or one other **DRUKHARI** unit from your army.",
        effect: "Until the end of the phase, melee weapons equipped by models in each of those units have the **[LETHAL HITS]** ability.",
      },
    },
    {
      name: "EAGER FOR THE KILL",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "Up to two **WYCHES** units from your army, or one other **DRUKHARI** unit from your army, that have not been selected to move this phase.",
        effect:
          'Until the end of the phase, each time one of those units **Advances**, do not make an Advance roll for it. Instead, until the end of the phase, add **6"** to the Move characteristic of models in that unit (this is not cumulative with the **REAVERS’** Matchless Swiftness ability).',
      },
    },
    {
      name: "RAID AND FADE",
      cp: "2 CP",
      rules: {
        when: "End of your Shooting phase.",
        target: "Up to two **KABALITE WARRIORS** units from your army, or one other **DRUKHARI** unit from your army (excluding **SCOURGES** and **AIRCRAFT**).",
        effect:
          'Each of those units can make a Normal move of up to **6"**.<br><br>**Restrictions:** You cannot select units that are within Engagement Range of one or more enemy units. Until the end of the turn, those units are not eligible to declare a charge.',
      },
    },
  ],

  "Skysplinter Assault": [
    {
      name: "VICIOUS BLADES",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **DRUKHARI** **TRANSPORT** from your army has selected its targets.",
        target: "That TRANSPORT.",
        effect: "After your TRANSPORT has fought, select one enemy unit that was the target of one or more of those attacks and roll one D6 for each model **embarked** within your TRANSPORT, adding 1 to the result if that embarked model is a **WRACKS** model: for each 5+, that enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "WRAITHLIKE RETREAT",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One **DRUKHARI** **INFANTRY** unit from your army that fought this phase.",
        effect: 'Your unit can make a **Normal** or **Fall** **Back** **move**, but unless it is a **WYCHES** unit, it must end that move wholly within 3" horizontally and 5" vertically of a friendly **DRUKHARI** **TRANSPORT** and must **embark** within that TRANSPORT at the end of that move (otherwise, it cannot make that move).',
      },
    },
    {
      name: "POUNCE ON THE PREY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **DRUKHARI** **INFANTRY** unit from your army **disembarks** from a **TRANSPORT** that made a **Normal** **move** this phase.",
        target: "That INFANTRY unit.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge.",
      },
    },
    {
      name: "SKYBORNE ANNIHILATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DRUKHARI** unit from your army that has not been selected to shoot this phase and that **disembarked** from a **TRANSPORT** this turn.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[SUSTAINED** **HITS** **1]** ability, or the **[SUSTAINED** **HITS** **2]** ability if your unit is a **KABALITE** **WARRIORS** or **HAND** OF THE **ARCHON** unit.",
      },
    },
    {
      name: "SWOOPING MOCKERY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **DRUKHARI** **TRANSPORT** from your army that is within 9" of that enemy unit.',
        effect: 'Your TRANSPORT can make a **Normal** **move** of up to 6".',
      },
    },
    {
      name: "NIGHT SHIELD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **DRUKHARI** **VEHICLE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ **invulnerable** **save**.",
      },
    },
  ],

  "Spectacle of Spite": [
    {
      name: "BERSERK FUGUE",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **WYCH** **CULT** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "DEADLY DEBUT",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **DRUKHARI** unit from your army that made a **Charge** **move** this turn and has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[LETHAL** **HITS]** ability. If your unit is a **WYCHES** unit, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 as well.",
      },
    },
    {
      name: "FEIGNED WEAKNESS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **DRUKHARI** unit from your army **Falls** **Back**.",
        target: "That DRUKHARI unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in turn in which it **Fell** **Back**.",
      },
    },
    {
      name: "PRETERNATURAL AGILITY",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement or Charge phase.",
        target: "One **WYCH** **CULT** unit from your army.",
        effect: "Until the end of the phase, each time your unit makes a **Normal**, **Advance** or **Charge** **move**, you can ignore any or all modifiers to its Move characteristic and to Advance and Charge rolls made for it and, until the end of the turn, each time a model in your unit makes such a move, it can move horizontally through models (when doing so, such a model can move within **Engagement** **Range** of such models but cannot end a Normal or Advance move within Engagement Range of them).",
      },
    },
    {
      name: "A CHALLENGE MET",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One **WYCH** **CULT** unit from your army that would be able to declare a charge if it were your Charge phase.",
        effect: 'Select one enemy unit within 9" of your unit that was set up on the battlefield this phase or that ended a **Normal** or **Advance** **move** this phase. Your unit now declares a charge that targets only that enemy unit, and you resolve that charge.<br><br>**Restrictions:** Even if that charge is successful, your unit does not receive any **Charge** **bonus** this turn.',
      },
    },
    {
      name: "ACROBATIC DISPLAY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **WYCH** **CULT** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 5+ **invulnerable** **save**.",
      },
    },
  ],

  "Covenite Coterie": [
    {
      name: "POSTMORTALITY",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **HAEMONCULUS** model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Spend 1-3 **Pain** **tokens**. At the end of the phase, set the destroyed model back up on the battlefield, as close as possible to where it was destroyed and not within **Engagement** **Range** of any enemy units, with a number of wounds remaining equal to the number of Pain tokens you just spent.<br><br>**Restrictions:** You cannot use this Stratagem if you have 0 Pain tokens, and you cannot target the same HAEMONCULUS model with this Stratagem more than once per battle.",
      },
    },
    {
      name: "SYMPHONY OF SUFFERING",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **DRUKHARI** unit from your army destroys an enemy unit.",
        target: "That DRUKHARI unit.",
        effect: 'Each enemy unit within 9" of and visible to your unit must take a **Battle-shock** **test**, subtracting 1 from that test if your unit is a **HAEMONCULUS** **COVENS** unit.',
      },
    },
    {
      name: "POISONER’S ART",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **HAEMONCULUS** **COVENS** unit from your army has fought.",
        target: "That HAEMONCULUS COVENS unit.",
        effect: "Select one enemy unit (excluding VEHICLES) hit by one or more of your unit’s attacks this phase. Until the end of the battle, that enemy unit is poisoned. At the start of each Command phase, roll one D6 for each poisoned unit on the battlefield: on a 4+, that unit suffers D3 **mortal** **wounds**.",
      },
    },
    {
      name: "DISTILLERS OF FEAR",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One **HAEMONCULUS** **COVENS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that is **Battle-shocked**, that attack has the **[DEVASTATING** **WOUNDS]** ability.",
      },
    },
    {
      name: "CONNOISSEURS OF PAIN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DRUKHARI** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Spend 1 **Pain** **token**. Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1. At the end of the phase, if your unit is still on the battlefield and it is a **HAEMONCULUS** **COVENS** unit, you gain 1 Pain token.",
      },
    },
    {
      name: "ENFOLDING NIGHTMARE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **HAEMONCULUS** **COVENS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Roll one D6: your unit can be moved a number of inches up to the result, but it must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within **Engagement** **Range** of that enemy unit.",
      },
    },
  ],

  "Kabalite Cartel": [
    {
      name: "DOUBLE-CROSS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **KABAL** or **BLADES** FOR **HIRE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly **DRUKHARI** unit (excluding **VEHICLES**).",
        effect: "Until the end of the phase, each time you would allocate an attack to a model in your KABAL or BLADES FOR HIRE unit, if your DRUKHARI unit is within **Engagement** **Range** of the attacking model, no **saving** **throw** is made for that attack; instead, your DRUKHARI unit suffers a number of **mortal** **wounds** equal to the Damage characteristic of that attack.",
      },
    },
    {
      name: "TAKEN ALIVE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **DRUKHARI** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the **Hit** **roll**. If your Contract unit is destroyed as a result of those attacks, every unit in your opponent’s army must take a **Battle-shock** **test**. You cannot gain more than 3 **Pain** **tokens** as a result of failed **Battle-shock** **tests** caused by this Stratagem.",
      },
    },
    {
      name: "TAILORED TOXINS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **KABAL** or **BLADES** FOR **HIRE** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets your **Contract** **unit**, an unmodified **Hit** **roll** of 5+ scores a **Critical** **Hit**.",
      },
    },
    {
      name: "ENEMIES WITHOUT NUMBER",
      cp: "1 CP",
      rules: {
        when: "Your Command phase, just after you **complete** **a** **Contract**.",
        target: "One **ARCHON** WARLORD from your army.",
        effect: "Select one **new** **Contract** (this can be one you have already completed), then select one unit from your opponent’s army that is on the battlefield and matches the ‘Contract’ description in that Contract. Until that Contract is completed, that unit is your Contract unit and the **Murderous** **Agenda** Detachment rule applies as normal.",
      },
    },
    {
      name: "MAKING A POINT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **KABALITE** **WARRIORS** or **HAND** OF THE **ARCHON** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, improve the Ballistic Skill and Armour Penetration characteristics of ranged weapons equipped by models in your unit by 1.",
      },
    },
    {
      name: "DEADLY DECEIVERS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **KABAL** or **BLADES** FOR **HIRE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18".',
      },
    },
  ],

  "Reaper’s Wager": [
    {
      name: "MALICIOUS FRENZY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **DRUKHARI** or **HARLEQUINS** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Select **[LETHAL** **HITS]** or **[SUSTAINED** **HITS** **1]**. Until the end of the phase, weapons equipped by models in your unit have the selected ability.",
      },
    },
    {
      name: "FATEFUL ROLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DRUKHARI** or **HARLEQUINS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if that unit is losing the wager: on a 4+, do not remove it from play. That destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "MURDERER’S CIRCUS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DRUKHARI** or **HARLEQUINS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "SHORTEN THE ODDS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **DRUKHARI** or **HARLEQUINS** unit from your army has **Advanced**.",
        target: "That unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "SCINTILLATING TEMPO",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase, just after a **DRUKHARI** or **HARLEQUINS** unit from your army is selected to make a **Normal**, **Advance** or **Fall** **Back** **move**, is set up on the battlefield, or declares a charge.",
        target: "That unit.",
        effect: "Until the end of the turn, enemy units cannot use the **Fire** **Overwatch** Stratagem to shoot at your unit.",
      },
    },
    {
      name: "DANCE MACABRE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **DRUKHARI** **INFANTRY** or **HARLEQUINS** **INFANTRY** unit from your army that is within 9" of that enemy unit.',
        effect: 'Your unit can make a Normal move of up to D6". If your unit is currently losing the wager, it can make a Normal move of up to 6" instead.',
      },
    },
  ],

  "Hallowed Martyrs": [
    {
      name: "DIVINE INTERVENTION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **ADEPTA** **SORORITAS** **CHARACTER** unit from your army that was just **destroyed**. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "You can discard 1-3 **Miracle** **dice**. At the end of the phase, set the last destroyed model from your unit back up on the battlefield, as close as possible to where it was destroyed and not within **Engagement** **Range** of any enemy models. Roll one D3, adding 1 to the result for each Miracle dice you discarded. That model is set back up with that number of wounds remaining (up to its starting number of wounds).<br><br>**Restrictions:** You cannot select **SAINT** **CELESTINE** as the target of this Stratagem. You cannot select the same CHARACTER as the target of this Stratagem more than once per battle.",
      },
    },
    {
      name: "SUFFERING AND SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One **ADEPTA** **SORORITAS** **INFANTRY** or **ADEPTA** **SORORITAS** **WALKER** unit from your army.",
        effect: "Until the end of the phase, each time an enemy model within **Engagement** **Range** of your unit selects its targets, it must select your unit as the target of its attacks.",
      },
    },
    {
      name: "RIGHTEOUS VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a melee attack, you can re-roll the **Hit** **roll** and, if your unit is **Below** **Half-strength**, you can re-roll the **Wound** **roll** as well.",
      },
    },
    {
      name: "SANCTIFIED IMMOLATION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **ADEPTA** **SORORITAS** **VEHICLE** model from your army with the Deadly Demise ability that was just destroyed. You can use this Stratagem on that model even though It was just destroyed.",
        effect: "Do not roll one D6 to determine whether **mortal** **wounds** are inflicted by your model's **Deadly** **Demise** ability. Instead, mortal wounds are automatically inflicted.",
      },
    },
    {
      name: "SPIRIT OF THE MARTYR",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is **destroyed**, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "PRAISE THE FALLEN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One ADEPTA SORORITAS unit from your army that had one or more of its models **destroyed** as a result of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],

  "Penitent Host": [
    {
      name: "FINAL REDEMPTION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **PENITENT** unit from your army that was just **destroyed** while it was within range of an **objective** **marker** you controlled. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "PURITY OF SUFFERING",
      cp: "1 CP",
      rules: {
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **PENITENT** unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect: "Until the end of the phase, PENITENT models in your unit have the **Feel** **No** **Pain** **4+** ability.",
      },
    },
    {
      name: "PASSION OF THE PENITENT",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **PENITENT** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a PENITENT model in your unit makes a melee attack, a successful unmodified **Hit** **roll** of 5+ scores a **Critical** **Hit**.",
      },
    },
    {
      name: "LASH OF GUILT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just before a **PENITENT** unit from your army **Advances**.",
        target: "That PENITENT unit.",
        effect: 'Until the end of the turn, your unit is eligible to declare a charge in a turn in which it **Advanced**. If your unit has the **PENITENT** **ENGINES** keyword, do not make an **Advance** **roll** for it; instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
      },
    },
    {
      name: "BOUNDLESS ZEAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an ADEPTA SORORITAS unit from your army Falls Back.",
        target: "That ADEPTA SORORITAS unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot or declare a charge in a turn in which it **Fell** **Back**. If your unit has the **PENITENT** keyword, it is eligible to shoot and declare a charge in a turn in which it Fell Back instead.",
      },
    },
    {
      name: "DEVOUT FANATICISM",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **PENITENT** unit from your army that was selected as the target as one or more of the attacking unit’s attacks.",
        effect: "Roll one D6: your unit can be moved a distance in inches up to the result, but it must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, models in your unit can be moved within **Engagement** **Range** of enemy units.",
      },
    },
  ],

  "Bringers of Flame": [
    {
      name: "SHIELD OF AVERSION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "RIGHTEOUS BLOWS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[LETHAL** **HITS]** ability. If one or more enemy models are **destroyed** as the result of attacks made by those weapons this phase, select one of those destroyed models; that destroyed model’s unit must take a **Battle-shock** **test**.",
      },
    },
    {
      name: "CARRY FORTH THE FAITHFUL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just before an **ADEPTA** **SORORITAS** **TRANSPORT** model from your army **Advances**.",
        target: "That ADEPTA SORORITAS TRANSPORT model.",
        effect: "Until the end of the turn, you can re-roll Advance rolls made for your TRANSPORT, and units can **disembark** from your TRANSPORT even though it **Advanced**. Units that do so count as having made a Normal move, and cannot declare a charge this turn",
      },
    },
    {
      name: "CLEANSING FLAMES",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ADEPTA SORORITAS unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, **Torrent** weapons equipped by models in your unit have the **[DEVASTATING** **WOUNDS]** ability",
      },
    },
    {
      name: "RITES OF FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ADEPTA SORORITAS unit from your army that **disembarked** from a **TRANSPORT** this turn and has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within 6" that is also within range of an **objective** **marker**, add 1 to the **Wound** **roll**. If one or more enemy models are **destroyed** as the result of those attacks, select one of those destroyed models; that destroyed model’s unit must take a **Battle-shock** **test**.',
      },
    },
    {
      name: "BLAZING IRE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **ADEPTA** **SORORITAS** **TRANSPORT** unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect: "One unit **embarked** within your TRANSPORT can **disembark** as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],

  "Army of Faith": [
    {
      name: "SHIELD OF FAITH",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an ADEPTA SORORITAS unit from your army suffers a **mortal** **wound**.",
        target: 'That ADEPTA SORORITAS unit, or one friendly **ADEPTA** **SORORITAS** **JUMP** **PACK** unit within 3" of it.',
        effect: 'Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability against mortal wounds. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is unit is within 3" of your unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds.',
      },
    },
    {
      name: "LIGHT OF THE EMPEROR",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One ADEPTA SORORITAS unit from your army.",
        effect: 'Until the end of the turn, your unit is blessed. While a unit is blessed, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to **saving** **throws**). If your unit has the **JUMP** **PACK** keyword, until the end of the turn, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, that friendly unit is also blessed.',
      },
    },
    {
      name: "FAITH AND FURY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[LANCE]** ability. If one or more enemy models are **destroyed** as the result of your unit's attacks this phase, you gain 1 **Miracle** **dice**.",
      },
    },
    {
      name: "BLINDING RADIANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: 'One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit\'s attacks, or one friendly **ADEPTA** **SORORITAS** **JUMP** **PACK** unit within 3" of such a unit.',
        effect: 'Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is unit is within 3" of your unit, each time an attack targets that unit, subtract 1 from the Hit roll.',
      },
    },
    {
      name: "DIVINE GUIDANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "That ADEPTA SORORITAS unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If one or more enemy models are **destroyed** as the result of any of those attacks, you gain 1 **Miracle** **dice**.",
      },
    },
    {
      name: "ANGELIC DESCENT",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **ADEPTA** **SORORITAS** **JUMP** **PACK** unit from your army.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.<br><br>**Restrictions:** You cannot select a unit that is within **Engagement** **Range** of one or more enemy units.",
      },
    },
  ],

  "Champions of Faith": [
    {
      name: "SHIELD OF DENIAL",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **mortal** **wound** is allocated to an ADEPTA SORORITAS unit from your army.",
        target: "That ADEPTA SORORITAS unit.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **6+** ability against **mortal** **wounds**. If your unit is **Righteous**, until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability against mortal wounds instead.",
      },
    },
    {
      name: "SUFFER NOT THE UNFAITHFUL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One ADEPTA SORORITAS unit from your army that is **Righteous** and that has not been selected to shoot or fight this phase.",
        effect: "Select either the **[LETHAL** **HITS]** or **[SUSTAINED** **HITS** **1]** ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability.",
      },
    },
    {
      name: "TO THE HEART OF HERESY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the turn, improve the Strength characteristic of melee weapons equipped by models in your unit by 1. If your unit is **Righteous**, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 as well.",
      },
    },
    {
      name: "PATH OF THE RIGHTEOUS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
        effect: 'Until the end of the turn, each time a model in your unit makes a **Pile-in** or **Consolidation** **move**, it can move up to 6" instead of up to 3". When doing so, if your unit is **Righteous**, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit.',
      },
    },
    {
      name: "BASTION OF FAITH",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **CELESTIAN** **SACRESANTS** unit that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**. In addition, if your unit is **Righteous**, you can select one other CELESTIAN SACRESANTS unit from your army that is not **Battle-shocked** and is within 6" of your unit. Until the end of the phase, each time an attack targets that CELESTIAN SACRESANTS unit, subtract 1 from the Hit roll as well.',
      },
    },
    {
      name: "INDEFATIGABLE DEDICATION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an ADEPTA SORORITAS unit from your army **Falls** **Back**.",
        target: "That ADEPTA SORORITAS unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back. If your unit is **Righteous**, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back instead.",
      },
    },
  ],

  "Talons Of The Emperor": [
    {
      name: "HUNT AS ONE",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "Up to two **ADEPTUS** **CUSTODES** units from your army.",
        effect: 'Until the end of the turn, your units are eilgible to shoot and/or declare a charge in a turn in which they **Fell** **Back**.<br><br>**Restrictions:** You can only select two units if one (and only one) of them is an **ANATHEMA** **PSYKANA** unit and both are within 6" of each other.',
      },
    },
    {
      name: "TALONS INTERLOCKED",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "Up to two **ADEPTUS** **CUSTODES** **INFANTRY** units from your army, and one enemy unit that is an eligible target for all of those units.",
        effect: 'Until the end of the phase, your units can only target that enemy unit, but each time a model in one of your units makes a ranged attack, improve the Strength and Armour Penetration characteristics of that attack by 1.<br><br>**Restrictions:** You can only select two units if one (and only one) of them is an **ANATHEMA** **PSYKANA** unit and both are within 6" of each other.',
      },
    },
    {
      name: "EMPYRIC SEVERANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: 'One **ADEPTUS** **CUSTODES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly **ANATHEMA** **PSYKANA** unit within 6" of that ADEPTUS CUSTODES unit.',
        effect: "Until the end of the phase, your unit has the **Feel** **No** **Pain** **4+** ability against **Psychic** **attacks** and **mortal** **wounds**.",
      },
    },
    {
      name: "EMPEROR’S EXECUTIONERS",
      cp: "2 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "Up to two **ADEPTUS** **CUSTODES** units from your army.",
        effect: 'Until the end of the phase, each time a model in one of your units targets an enemy unit that is below its **Starting** **Strength**, add 1 to the **Wound** **roll**.<br><br>**Restrictions:** You can only select two units if one (and only one) of them is an **ANATHEMA** **PSYKANA** unit and both are within 6" of each other.',
      },
    },
    {
      name: "TALONED PINCER",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'Up to two **ADEPTUS** **CUSTODES** units from your army that are within 9" of that enemy unit.',
        effect: 'Your units can make a Normal move of up to 6".<br><br>**Restrictions:** You cannot select units that are within **Engagement** **Range** of one or more enemy units. You can only select two units if one (and only one) of them is an **ANATHEMA** **PSYKANA** unit and both are within 6" of each other.',
      },
    },
    {
      name: "SHIELD OF HONOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: 'One **ANATHEMA** **PSYKANA** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one other friendly **ADEPTUS** **CUSTODES** **INFANTRY** unit (excluding ANATHEMA PSYKANA units) within 6" of that ANATHEMA PSYKANA INFANTRY unit.',
        effect: "Until the end of the phase, any attack that targets your ANATHEMA PSYKANA unit must instead target your other ADEPTUS CUSTODES unit (unless it is not an eligible target).",
      },
    },
  ],

  "Shield Host": [
    {
      name: "ARCANE GENETIC ALCHEMY",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **mortal** **wound** has been allocated to an **ADEPTUS** **CUSTODES** model from your army(excluding **ANATHEMA** **PSYKANA** models).",
        target: "That ADEPTUS CUSTODES model’s unit.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **4+** ability against **mortal** **wounds**.",
      },
    },
    {
      name: "AVENGE THE FALLEN",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One ADEPTUS CUSTODES unit from your army (excluding **ANATHEMA** **PSYKANA** units) that is below its **Starting** **Strength**.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit. If your unit is **Below** **Half-strength**, until the end of the phase, add 2 to the Attacks characteristic of those melee weapons instead.",
      },
    },
    {
      name: "UNWAVERING SENTINELS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **CUSTODES** **INFANTRY** unit from your army (excluding **ANATHEMA** **PSYKANA** units) that is within range of an **objective** **marker** you control and that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a melee attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "MULTIPOTENTIALITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ADEPTUS** **CUSTODES** unit from your army that **Fell** **Back** this phase.",
        effect: "Until the end of your turn, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "VIGILANCE ETERNAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ADEPTUS** **CUSTODES** **BATTLELINE** unit from your army (excluding **ANATHEMA** **PSYKANA** units) within range of an **objective** **marker** you control.",
        effect: "That objective marker remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "ARCHEOTECH MUNITIONS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ADEPTUS CUSTODES unit from your army (excluding **ANATHEMA** **PSYKANA** units) that has not been selected to shoot this phase.",
        effect: "Select either the **[LETHAL** **HITS]** or **[SUSTAINED** **HITS** **1]** ability. Until the end of the phase ranged weapons equipped by models in your unit have the selected ability.",
      },
    },
  ],

  "Null Maiden Vigil": [
    {
      name: "DESPERATION’S PRICE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy PSYKER unit has either finished using a Psychic ability that targets a unit, or finished making **Psychic** **Attacks**.",
        target: 'One **ANATHEMA** **PSYKANA** unit from your army within 18" of that enemy PSYKER unit.',
        effect: "That enemy PSYKER unit must take a **Leadership** **test** If the test is passed, that PSYKER unit is **Battle-shocked**; if the test is failed that PSYKER unit suffers 3 **mortal** **wounds** and is Battle-shocked.",
      },
    },
    {
      name: "WITCH HUNTERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ANATHEMA** **PSYKANA** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Select either the **[LETHAL** **HITS]** or **[SUSTAINED** **HITS** **1]** ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability, but models in your unit can only target PSYKER units with their attacks.",
      },
    },
    {
      name: "ANATHEMA BLADEMASTERY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **VIGILATORS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a melee attack, you can re-roll the **Hit** **roll** If the target of that attack is **Battle-shocked** or a PSYKER, you can re-roll the **Wound** **roll** as well.",
      },
    },
    {
      name: "PSY-CHAFF VOLLEY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **PROSECUTORS** unit from your army that has just shot.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the start of your next turn, while your unit is on the battlefield, that enemy unit is prosecuted. While a unit is prosecuted, each time an **ANATHEMA** **PSYKANA** model makes an attack against that unit, improve the Armour Penetration characteristic of that attack by 1. While a PSYKER or **Battle-shocked** unit is prosecuted, each time a model in that unit makes an attack, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "PURGATION SWEEP",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **WITCHSEEKERS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristic of **Torrent** weapons equipped by models in your unit. If such a weapon targets a PSYKER or **Battle-shocked** unit this phase, add 2 to its Attacks characteristic instead.",
      },
    },
    {
      name: "PSYCHIC ABOMINATIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ANATHEMA** **PSYKANA** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'Until the end of the phase, your unit has the **Stealth** ability, and **Battle-shocked** and PSYKER models can only select your unit as a target of a ranged attack if they are within 12".',
      },
    },
  ],

  "Auric Champions": [
    {
      name: "SLAYER OF CHAMPIONS",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **ADEPTUS** **CUSTODES** **CHARACTER** unit from your army that has just **destroyed** the unit you selected at the start of your Command phase as the target of your **Assemblage** **of** **Might** ability.",
        effect: "Select one enemy unit on the battlefield Until the start of your next Command phase, each time an ADEPTUS CUSTODES CHARACTER model from your army makes an attack that target that enemy unit, add 1 to the **Wound** **roll** In addition, if the destroyed unit was a CHARACTER unit, gain 1CP.",
      },
    },
    {
      name: "SUPERHUMAN RESERVES",
      cp: "2 CP",
      rules: {
        when: "Any phase, just after an **ADEPTUS** **CUSTODES** **WARLORD** model from your army has used an ability on its datasheet or from an Enhancement that says it can only be used Once per battle.",
        target: "That **ADEPTUS** **CUSTODES** **WARLORD** model.",
        effect: "Your model can use its Once per battle’ ability one additional time during this battle (but not in the same phase).<br><br>**Restrictions:** You cannot use this Stratagem more than once per battle.",
      },
    },
    {
      name: "THE EMPEROR’S AUSPICE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **CUSTODES** **CHARACTER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, CHARACTER models in your unit have the **Feel** **No** **Pain** **4+** ability.",
      },
    },
    {
      name: "EARNING OF A NAME",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "Up to two **ADEPTUS** **CUSTODES** **CHARACTER** units from your army that have not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a CHARACTER model in either of your units makes an attack that targets a MONSTER or VEHICLE unit, you can re-roll the **Hit** **roll** and you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "VIGIL UNENDING",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **CUSTODES** **CHARACTER** model from your army that was just **destroyed** and has not fought this phase. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Do not remove your destroyed model from play. The destroyed model can fight after the attacking unit has finished making attacks, and is then removed from play.",
      },
    },
    {
      name: "SHOULDER THE MANTLE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, before the Reinforcements step.",
        target: "One **ADEPTUS** **CUSTODES** **CHARACTER** model from your army that is not leading a unit.",
        effect: 'Select one friendly unit (excluding **Battle-shocked** and **Attached** units) within 2" horizontally and 5" vertically of your model that it could lead (as described in the Leader section of its datasheet). Your model attaches to that unit as a Leader. Change that unit’s **Starting** **Strength** accordingly.',
      },
    },
  ],

  "Solar Spearhead": [
    {
      name: "FLAWLESS CONSTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **CUSTODES** **VEHICLE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets a model in your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "EMPEROR’S VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One ADEPTUS CUSTODES unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit has the **WALKER** keyword. On a 4+, do not remove it from play; The destroyed model can fight after the attacking unit has finished making its attacks (when doing so, it is assumed to have 1 wound remaining), and is then removed from play.",
      },
    },
    {
      name: "WRATHFUL ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an ADEPTUS CUSTODES unit from your army **Piles** **In**.",
        target: "That ADEPTUS CUSTODES unit.",
        effect: 'Until the end of the phase, each time a model in your unit makes a Pile-in move, it can move up to D3+3" instead of up to 3".',
      },
    },
    {
      name: "UNSTOPPABLE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **ADEPTUS** **CUSTODES** **VEHICLE** or **ADEPTUS** **CUSTODES** **MOUNTED** unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "RELENTLESS PERSECUTION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an ADEPTUS CUSTODES VEHICLE unit from your army **Advances**.",
        target: "That **ADEPTUS** **CUSTODES** **VEHICLE** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced. If your unit has the **WALKER** keyword, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced instead.",
      },
    },
    {
      name: "PUNISHMENT INESCAPABLE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ADEPTUS CUSTODES unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES** **COVER]** ability, and until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and/or any or all modifiers to the **Hit** **roll**.",
      },
    },
  ],

  "Lions of the Emperor": [
    {
      name: "GILDED CHAMPION",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an **ADEPTUS** **CUSTODES** **CHARACTER** model from your army has used an ability on its datasheet that states it can only be used ‘once per battle’.",
        target: "That ADEPTUS CUSTODES CHARACTER model.",
        effect: "Your model can use that ‘once per battle’ ability one additional time during the battle (but not in the same phase).<br><br>**Restrictions:** You cannot use this Stratagem on the same ADEPTUS CUSTODES CHARACTER model more than once per battle.",
      },
    },
    {
      name: "DEFIANT TO THE LAST",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One ADEPTUS CUSTODES unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 2 to the result if that model has the CHARACTER keyword. On a 4+, do not remove it from play; the destroyed model can fight after the attacking unit has finished making its attacks (when doing so, it is treated as having 1 wound remaining), and is then removed from play.",
      },
    },
    {
      name: "PEERLESS WARRIOR",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ADEPTUS CUSTODES unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[PRECISION]** ability.",
      },
    },
    {
      name: "UNLEASH THE LIONS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **ALLARUS** **CUSTODIANS** or **AQUILON** **CUSTODIANS** unit from your army that is on the battlefield.",
        effect: "That unit is split into separate units, each containing one model. These new units each have a **Starting** **Strength** of 1.",
      },
    },
    {
      name: "MANOEUVRE AND FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an ADEPTUS CUSTODES unit from your army **Falls** **Back**.",
        target: "That ADEPTUS CUSTODES unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "SWIFT AS THE EAGLE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One ADEPTUS CUSTODES unit from your army (excluding VEHICLE units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'Your unit can make a **Normal** **move** of up to D6".',
      },
    },
  ],

  "Rad-Zone Corps": [
    {
      name: "BALEFUL HALO",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: 'One ADEPTUS MECHANICUS unit from your army (excluding **VEHICLE** units) that was selected as the target of one or more of that enemy unit’s attacks. If that unit is **BATTLELINE**, you can also target one friendly **SKITARII** unit (excluding BATTLELINE units) within 6" of it.',
        effect: "Until the end of the turn, each time an attack is made that targets your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "EXTINCTION ORDER",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: 'One **TECH-PRIEST** model from your army and one **objective** **marker** within 24" of that model.',
        effect: "Roll one D6 for each enemy unit within range of that objective marker. On a 4+, that unit suffers 1 **mortal** **wound** and it must take a **Battle-shock** **test**.",
      },
    },
    {
      name: "AGGRESSOR IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: 'One **SKITARII** unit from your army that has not been selected to move this phase. If that unit is **BATTLELINE**, you can also target one friendly SKITARII unit (excluding BATTLELINE units) within 6" of it.',
        effect: 'Until the end of the phase, each time one of those units **Advances**, do not make an **Advance** **roll** for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in that unit.',
      },
    },
    {
      name: "PRE-CALIBRATED PURGE SOLUTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: 'One ADEPTUS MECHANICUS unit from your army that has not been selected to shoot this phase. If that unit is **BATTLELINE**, you can also target one friendly **SKITARII** unit (excluding BATTLELINE units) within 6" of it.',
        effect: "Until the end of the phase, each time a model in one of those units makes a ranged attack, if the target of that attack is within your opponent’s deployment zone, you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "LETHAL DOSAGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[LETHAL** **HITS]** ability.",
      },
    },
    {
      name: "BULWARK IMPERATIVE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: 'One **SKITARII** unit from your army that was selected as the target of one or more of the attacking unit’s attacks. If that unit is **BATTLELINE**, you can also target one friendly SKITARII unit (excluding BATTLELINE units) within 6" of it.',
        effect: "Until the end of the phase, models in those units from your army have a 4+ **invulnerable** **save**.",
      },
    },
  ],

  "Skitarii Hunter Cohort": [
    {
      name: "BIONIC ENDURANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase orthe Fight phase, just after an enemy unit has selected its targets.",
        target: "One **SICARIAN**, **PTERAXII** or **SYDONIAN** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability.",
      },
    },
    {
      name: "BINHARIC OFFENCE",
      cp: "2 CP",
      rules: {
        when: "The start of your Shooting phase or the start of the Fight phase.",
        target: "Two **SKITARII** units from your army that have not been selected to shoot or fight this phase, and one enemy unit.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of weapons equipped by models in both of your units by 1.<br><br>**Restrictions:** Until the end of the phase, each time a model in either of your units makes an attack, it can only target that enemy unit (and only if it is an eligible target].",
      },
    },
    {
      name: "EXPEDITED PURGE PROTOCOL",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **SKITARII** unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "ISOLATE AND DESTROY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **SICARIAN**, **PTERAXII**, **SYDONIAN**,**IRONSTRIDER** **BALLISTARII** or **SKITARII** **MOUNTED** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes an attack, if there are no other enemy units within 6" of the unit targeted by that attack, add 1 to the **Wound** **roll**.',
      },
    },
    {
      name: "SHROUD PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **SKITARII** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18".',
      },
    },
    {
      name: "PROGRAMMED WITHDRAWAL",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to two **SICARIAN** units from your army, or one **SKITARII** **INFANTRY** or **SKITARII** **MOUNTED** unit from your army.",
        effect: 'Remove those units from the battlefield and place them into Strategic Reserves.<br><br>**Restrictions:** Each unit targeted with this Stratagem must be more than 3" away from all enemy units.',
      },
    },
  ],

  "Data-Psalm Conclave": [
    {
      name: "INCANTATION OF THE IRON SOUL",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after you allocate a **mortal** **wound** to a **CULT** **MECHANICUS** model from your army.",
        target: "That CULT MECHANICUS model’s unit.",
        effect: "Until the end of the phase, CULT MECHANICUS models in your unit have the **Feel** **No** **Pain** **4+** ability against **mortal** **wounds**.",
      },
    },
    {
      name: "CHANT OF THE REMORSELESS FIST",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **CULT** **MECHANICUS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a CULT MECHANICUS model in your unit makes a melee attack, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "VERSE OF VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **CULT** **MECHANICUS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a CULT MECHANICUS model in your unit is **destroyed**, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "TRIBUTE OF EMPHATIC VENERATION",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: 'One **CULT** **MECHANICUS** unit from your army and one enemy unit within 18" of it.',
        effect: "That enemy unit must take a **Battle-shock** **test**. If that test is failed, until the start of your next Command phase, each time a model in that enemy unit makes an attack, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "LITANY OF THE ELECTROMANCER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **CULT** **MECHANICUS** unit from your army.",
        effect: 'Roll one D6 for each enemy unit within 6" of one or more CULT MECHANICUS models in your unit, adding 1 to the result if that model is an **ELECTRO-PRIEST**. On a 5+, that enemy unit suffers D3 **mortal** **wounds**.',
      },
    },
    {
      name: "LUMINESCENT BLESSING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **CULT** **MECHANICUS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, CULT MECHANICUS models in your unit have a 4+ **invulnerable** **save**.",
      },
    },
  ],

  "Explorator Maniple": [
    {
      name: "CACHED ACQUISITION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One ADEPTUS MECHANICUS unit from your army that was just **destroyed** while it was within range of an **objective** **marker** you controlled. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "PRIORITY RECLAMATION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an ADEPTUS MECHANICUS unit from your army **Consolidates**.",
        target: "That ADEPTUS MECHANICUS unit.",
        effect: 'Until the end of the phase, each time a model in your unit makes a Consolidation move, it can move up to 6" instead of up to 3", provided your unit ends that Consolidation move within range of your Acquisition **objective** **marker**.<br><br>**Restrictions:** You cannot target a unit with this Stratagem if it is within 3" of one or more enemy units.',
      },
    },
    {
      name: "INFOSLAVE SKULL",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: 'One **TECH-PRIEST** model from your army and one **objective** **marker** within 24" of that model (excluding your Acquisition objective marker].',
        effect: "Until the start of your next Command phase, that objective marker is also considered to be one of your Acquisition objective markers for all rules purposes.",
      },
    },
    {
      name: "AUTO-ORACULAR RETRIEVAL",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ADEPTUS MECHANICUS unit from your army that **disembarked** from a TRANSPORT this turn.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within range of your Acquisition **objective** **marker**, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "INCENSE EXHAUSTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: 'One **ADEPTUS** **MECHANICUS** **INFANTRY** unitfrom your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly **ADEPTUS** **MECHANICUS** **SMOKE** unit within 6" of it.',
        effect: "Until the end of the phase, both of those units have the **Stealth** ability and the **Benefit** **of** **Cover**.",
      },
    },
    {
      name: "REACTIVE SAFEGUARD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit has **declared** **a** **charge**.",
        target: "One **ADEPTUS** **MECHANICUS** **INFANTRY**unit from your army within range of your Acquisition **objective** **marker** that was selected as a target of that charge, and one friendly **ADEPTUS** **MECHANICUS** **TRANSPORT**.",
        effect: 'Your unit can **embark** within that TRANSPORT.<br><br>**Restrictions:** Every model in your unit must be within 3" of that TRANSPORT and there must be sufficient **transport** **capacity** to embark the entire unit.',
      },
    },
  ],

  "Cohort Cybernetica": [
    {
      name: "MOTIVE IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **ADEPTUS** **MECHANICUS** **VEHICLE** unit from your army.",
        effect: 'Until the start of your next Command phase, add 3" to the Move characteristic of models in your unit and add 1 to **Advance** and **Charge** **rolls** made for it.',
      },
    },
    {
      name: "AUTO-DIVINATORY TARGETING",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LEGIO** **CYBERNETICA** or **ADEPTUS** **MECHANICUS** **VEHICLE** unit from your army, and one **objective** **marker**.",
        effect: "Until the start of your next Command phase, ranged weapons equipped by models in your unit have a Ballistic Skill characteristic of 3+ and the **[IGNORES** **COVER]** ability, but they can only target units within range of the selected objective marker.",
      },
    },
    {
      name: "MACHINE SPIRIT RESURGENT",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LEGIO** **CYBERNETICA** or **ADEPTUS** **MECHANICUS** **VEHICLE** unit from your army that is below its **Starting** **Strength**.",
        effect: "Until the start of your next Command phase, each time a model in your unit makes an attack, you can re-roll the **Hit** **roll**. If your unit is **Below** **Half-strength**, you can re-roll the **Wound** **roll** as well.",
      },
    },
    {
      name: "MACHINE SUPERIORITY",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LEGIO** **CYBERNETICA** or **ADEPTUS** **MECHANICUS** **VEHICLE** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it **Fell** **Back** and you can ignore any or all modifiers to its characteristics and/or to any roll or test made for it (excluding modifiers to **saving** **throws**).",
      },
    },
    {
      name: "TRANSCENDENT COGITATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LEGIO** **CYBERNETICA** or **ADEPTUS** **MECHANICUS** **VEHICLE** unit from your army.",
        effect: "Until the start of your next Command phase, the **Conqueror** **Imperative** and **Protector** **Imperative** are both active for your unit.",
      },
    },
    {
      name: "BENEVOLENCE OF THE OMNISSIAH",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LEGIO** **CYBERNETICA** or **ADEPTUS** **MECHANICUS** **VEHICLE** unit from your army.",
        effect: "Until the start of your next Command phase, models in your unit have the **Feel** **No** **Pain** **** **6+** ability, which is improved to Feel No Pain 5+ against **mortal** **wounds**.",
      },
    },
  ],

  "Eradication Cohort": [
    {
      name: "SERVO‑DRIVEN CHARGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[LANCE]** ability.",
      },
    },
    {
      name: "UNRELENTING AGGRESSION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an ADEPTUS MECHANICUS unit from your army **Falls** **Back**.",
        target: "That ADEPTUS MECHANICUS unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back. If your unit has the **SKITARII** keyword, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back instead.",
      },
    },
    {
      name: "UNSHACKLED WRATH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **SKITARII** unit from your army that has not been selected to shoot this phase.",
        effect: "Select the **[SUSTAINED** **HITS** **1]** or **[LETHAL** **HITS]** ability. Until the end of the phase, ranged weapons equipped by models in your unit have the selected ability. You can instead select the [SUSTAINED HITS 1], [LETHAL HITS] and **[HAZARDOUS]** abilities to apply to those weapons until the end of the phase.",
      },
    },
    {
      name: "THREAT‑COGITATION TARGETERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **SKITARII** **VEHICLE** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a ranged attack made by a model in your unit is allocated to a MONSTER or VEHICLE model, you can re-roll the Damage roll.",
      },
    },
    {
      name: "PRECISION ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **SICARIAN** unit from your army **declares** **a** **charge**.",
        target: "That SICARIAN unit.",
        effect: "Until the end of the phase, when your unit ends a **Charge** **move**, select one enemy unit within **Engagement** **Range** of it, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 **mortal** **wound**.",
      },
    },
    {
      name: "ANALYTIC REPRISALS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **SKITARII** **INFANTRY** unit from your army that lost one or more models as a result of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],

  "Haloscreed Battle Clade": [
    {
      name: "ERADICATION PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Wound** **roll** of 1, and, if it is a HALO OVERRIDE unit, re-roll a **Hit** **roll** of 1.",
      },
    },
    {
      name: "TARGETING OVERRIDE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One ADEPTUS MECHANICUS unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified **Hit** **roll** of 5+ scores a **Critical** **Hit**.",
      },
    },
    {
      name: "NEURAL OVERLOAD",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One ADEPTUS MECHANICUS unit from your army.",
        effect: "If your unit is a HALO OVERRIDE unit, it suffers D3 **mortal** **wounds**. Select one **Override** **ability**. Until the start of your next Command phase, that ability is active for your unit.Designer’s Note: This means that if the targeted unit already has the HALO OVERRIDE keyword, it can be affected by multiple Override abilities at the same time, but suffers mortal wounds to do so. Alternatively, if your unit does not have the HALO OVERRIDE keyword, it instead has the chosen Override ability until the start of your next Command phase, but does not benefit from any other Override abilities that are active.",
      },
    },
    {
      name: "AGGRESSIVE IMPULSE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **SKORPIUS** **DUNERIDER** model from your army that has not been selected to move this phase.",
        effect: "Until the end of the turn, each time an ADEPTUS MECHANICUS unit **disembarks** from that model after it has made a **Normal** **move**, that unit is still eligible to declare a charge this turn.",
      },
    },
    {
      name: "GUIDED RETREAT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an ADEPTUS MECHANICUS unit from your army makes a **Fall** **Back** **move**.",
        target: "That ADEPTUS MECHANICUS unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back, and, if it is a HALO OVERRIDE unit, you can re-roll **Desperate** **Escape** **tests** taken for it.",
      },
    },
    {
      name: "ANALYTICAL DIVINATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **ADEPTUS** **MECHANICUS** **INFANTRY** unit (excluding **KATAPHRON** units) from your army that is within 9" of that enemy unit and not within **Engagement** **Range** of one or more enemy units.',
        effect: 'Your unit can make a **Normal** **move** of up to D6", or up to 6" instead if it is a HALO OVERRIDE unit.',
      },
    },
  ],

  "Warhost": [
    {
      name: "LIGHTNING-FAST REACTIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ASURYANI** unit from your army (excluding **WRAITH** **CONSTRUCT** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "SKYBORNE SANCTUARY",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One **ASURYANI** unit from your army that was eligible to fight this phase and one friendly **TRANSPORT** it is able to **embark** within.",
        effect: 'If your ASURYANI unit is not within **Engagement** **Range** of one or more enemy units and is wholly within 6" of that TRANSPORT, it can embark within it.',
      },
    },
    {
      name: "FEIGNED RETREAT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ASURYANI** unit from your army **Falls** **Back**.",
        target: "That ASURYANI unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "BLITZING FIREPOWER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASURYANI** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, ranged weapons equipped by models in your unit have the **[SUSTAINED** **HITS** **1]** ability while targeting an enemy unit within 12". If such a weapon already has that ability, until the end of the phase, each time an attack is made with that weapon, an unmodified **Hit** **roll** of 5+ scores a Critical Hit.',
      },
    },
    {
      name: "FIRE AND FADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an **ASURYANI** **INFANTRY** unit from your army (excluding **AIRCRAFT**, **ASURMEN** and **WRAITH** **CONSTRUCT** units) has shot.",
        target: "That ASURYANI unit.",
        effect: 'Your unit can make a **Normal** **move** of up to D6+1".<br><br>**Restrictions:** Until the end of the turn, your unit is not eligible to declare a charge or **embark** within a **TRANSPORT**.',
      },
    },
    {
      name: "WEBWAY TUNNEL",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: 'One **ASURYANI** **INFANTRY** unit from your army that is wholly within 9" of one or more battlefield edges.',
        effect: "If your unit is not within **Engagement** **Range** of one or more enemy units, remove it from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Windrider Host": [
    {
      name: "DEATH FROM ON HIGH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ASURYANI** **MOUNTED** or **VYPER** unit from your army that was set upon the battlefield from Reserves this turn and has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "OVERFLIGHT",
      cp: "1 CP",
      rules: {
        when: "End of your Shooting phase or the end of the Fight phase.",
        target: "One **ASURYANI** **MOUNTED** unit from your army that destroyed one or more enemy units this phase.",
        effect: 'Your unit can make a **Normal** **move** of up to 7".',
      },
    },
    {
      name: "WIND OF BLADES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ASURYANI** **MOUNTED** or **VYPER** unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Advanced** or **Fell** **Back**.",
      },
    },
    {
      name: "DARING RIDERS",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your Movement phase.",
        target: "One **ASURYANI** **MOUNTED** or **VYPER** unit from your army in Reserves.",
        effect: 'Until the end of the phase, when setting up your unit on the battlefield from Reserves, it can be set up anywhere on the battlefield that is more than 6" horizontally away from all enemy units. When doing so, if your unit is set up within 9" horizontally of one or more enemy units, until the end of the turn, it is not eligible to declare a charge.',
      },
    },
    {
      name: "FOCUSED FIREPOWER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASURYANI** **MOUNTED** or **VYPER** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SPIRALLING EVASION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ASURYANI** **MOUNTED** or **VYPER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ **invulnerable** **save**.",
      },
    },
  ],

  "Spirit Conclave": [
    {
      name: "SEER’S EYE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: 'One **AELDARI** **PSYKER** model from your army and one friendly **WRAITH** **CONSTRUCT** unit within 12" of it that has not been selected to shoot or fight this phase.',
        effect: "Select one enemy unit visible to your PSYKER model. Until the end of the phase, each time a model in your WRAITH CONSTRUCT unit makes an attack that targets that enemy unit, you can ignore any or all modifiers to the Armour Penetration and/or Damage characteristics of that attack.",
      },
    },
    {
      name: "WRAITHBONE ARMOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **WRAITH** **CONSTRUCT** unit from your army (excluding **TITANIC** units] that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "BLADES FROM BEYOND",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **WRAITHBLADES**, **WRAITHLORD** or **WRAITHKNIGHT** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[DEVASTATING** **WOUNDS]** ability.",
      },
    },
    {
      name: "SOUL BRIDGE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **WRAITHBLADES**, **WRAITHGUARD** or **WRAITHLORD** unit from your army and one **ASURYANI** **PSYKER** model from your army.",
        effect: 'Until the start of your next Command phase, your WRAITHBLADES, WRAITHGUARD or WRAITHLORD unit is considered to be within 12" of your PSYKER model for the purposes of the Psychic Guidance and Spirit Guides abilities.',
      },
    },
    {
      name: "SPIRIT TOKEN",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "One **WRAITHBLADES** or **WRAITHGUARD** unit from your army.",
        effect: "Select one **objective** **marker** you control that your unit is within range of. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "CRUSHING STRIDES",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **WRAITHBLADES**, **WRAITHLORD** or **WRAITHKNIGHT** unit from your army ends a **Charge** **move**.",
        target: "That WRAITHBLADES, WRAITHLORD or WRAITHKNIGHT unit.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit and roll one D6 for each WRAITHBLADES model in your unit, or roll four D6 if your unit has the WRAITHLORD keyword, or roll six D6 if your unit has the WRAITHKNIGHT keyword: for each 3+, that enemy unit suffers 1 **mortal** **wound**.",
      },
    },
  ],

  "Guardian Battlehost": [
    {
      name: "WARDING SALVOES",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **DIRE** **AVENGERS** or **GUARDIANS** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of one or more **objective** **markers**, you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "SHIELD NODES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DIRE** **AVENGERS** or **GUARDIANS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "If your unit is within range of one or more **objective** **markers**, until the end of the phase, each time an attack targets your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "VAUL’S VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit destroys a **DIRE** **AVENGERS** or **GUARDIANS** unit from your army.",
        target: "One **WAR** **WALKERS** unit from your army.",
        effect: "After that enemy unit has finished making its attacks, your unit can shoot as if it were your Shooting phase, but when resolving those attacks, it can only target that enemy unit (and only if it is an eligible target).<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "TIME TO STRIKE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **STORM** **GUARDIANS** unit from your army that has not been selected to move this phase.",
        effect: 'Until the end of the phase, each time your unit **Advances**, do not make an Advance roll. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit. Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.',
      },
    },
    {
      name: "BLADES OF ASURYAN",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DIRE** **AVENGERS** or **GUARDIANS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[PISTOL]** ability.",
      },
    },
    {
      name: "COST OF VICTORY",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **GUARDIANS** unit from your army.",
        effect: "If your unit is not within **Engagement** **Range** of one or more enemy units, remove it from the battlefield and place it into Strategic Reserves. When doing so, return every destroyed GUARDIANS model to your unit.",
      },
    },
  ],

  "Ghosts of the Webway": [
    {
      name: "STAGED DEATH",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **HARLEQUINS** **CHARACTER** model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "At the end of the phase, set your model back up on the battlefield as close as possible to where it was destroyed and not within **Engagement** **Range** of any enemy units, with half of its starting number of wounds remaining.<br><br>**Restrictions:** Each model can only be targeted with this Stratagem once per battle.",
      },
    },
    {
      name: "HEROES’ FALL",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HARLEQUINS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "MOCKING FLIGHT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **HARLEQUINS** unit from your army **Falls** **Back**.",
        target: "That HARLEQUINS unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "TRICKSTERS’ RETORT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **TROUPE** unit from your army that is within 9" of that enemy unit.',
        effect: 'Your unit can make a Normal move of up to 6".',
      },
    },
    {
      name: "BLOODY DANCE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: 'One **HARLEQUINS** **INFANTRY** or **HARLEQUINS** **MOUNTED** unit from your army that is within 6" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.',
        effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.<br><br>**Restrictions:** Note that even if this charge is successful, your unit does not receive any **Charge** **bonus** this turn.",
      },
    },
    {
      name: "EXIT THE STAGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **HARLEQUINS** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Devoted of Ynnead": [
    {
      name: "PALL OF DREAD",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **YNNARI** unit from your army that was just destroyed while it was within range of one or more **objective** **markers** you controlled at the end of the previous phase. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Select one of those objective markers. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "MACABRE RESILIENCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **YNNARI** **INFANTRY** or **YNNARI** **MOUNTED** unit from your army (excluding **WRAITH** **CONSTRUCT** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "EMISSARIES OF YNNEAD",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **YNNARI** **INFANTRY** unit from your army has selected its targets.",
        target: "That YNNARI INFANTRY unit.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Hit** **roll** of 1. If your unit is below its **Starting** **Strength**, you can re-roll the Hit roll instead.",
      },
    },
    {
      name: "PARTING THE VEIL",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **YNNARI** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SOULSIGHT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **YNNARI** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[LETHAL** **HITS]** and **[IGNORES** **COVER]** abilities.",
      },
    },
    {
      name: "DEATH ANSWERS DEATH",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Shooting phase.",
        target: "One **YNNARI** unit from your army (excluding **WRAITH** **CONSTRUCT** units), if one or more models in that unit were destroyed this phase.",
        effect: "Your unit can shoot as if it were your Shooting phase.",
      },
    },
  ],

  "Seer Council": [
    {
      name: "PRESENTIMENT OF DREAD",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **ASURYANI** **PSYKER** model from your army.",
        effect: 'Select one enemy unit within 18" of and visible to your model. That enemy unit must take a **Battle-shock** **test**, subtracting 1 from that test.',
      },
    },
    {
      name: "FOREWARNED",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: 'One **ASURYANI** **INFANTRY** unit from your army (excluding **WRAITH** **CONSTRUCT** units) that was selected as the target of one or more of the attacking unit’s attacks and is within 9" of one or more friendly **ASURYANI** **PSYKER** models.',
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll** and subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "UNSHROUDED TRUTH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: 'One **ASURYANI** **INFANTRY** unit from your army (excluding **WRAITH** **CONSTRUCT** units) that has not been selected to move this phase, was not set up on the battlefield this phase, and is within 9" of one or more friendly **ASURYANI** **PSYKER** models.',
        effect: 'Remove your unit from the battlefield and set it up again anywhere on the battlefield that is more than 9" horizontally away from all enemy models.<br><br>**Restrictions:** Until the end of the phase, your unit is not eligible to be selected to move.',
      },
    },
    {
      name: "FATE INESCAPABLE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: 'One **ASURYANI** **INFANTRY** unit from your army (excluding **WRAITH** **CONSTRUCT** units) that has not been selected to shoot this phase and is within 9" of one or more friendly **ASURYANI** **PSYKER** models.',
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES** **COVER]** ability and each time a model in your unit makes an attack, on a **Critical** **Wound**, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "ISHA’S FURY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **ASURYANI** **PSYKER** model from your army within 9" of that enemy unit.',
        effect: "Roll six D6: for each 3+, that enemy unit suffers 1 **mortal** **wound**.",
      },
    },
    {
      name: "PSYCHIC SHIELD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: 'One **ASURYANI** **INFANTRY** unit from your army (excluding **WRAITH** **CONSTRUCT** units) that was selected as the target of one or more of the attacking unit’s attacks and is within 9" of one or more friendly **ASURYANI** **PSYKER** models.',
        effect: 'Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18".',
      },
    },
  ],

  "Aspect Host": [
    {
      name: "WARRIOR FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ASPECT** **WARRIORS** or **AVATAR** OF **KHAINE** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill, Weapon skill, Strength, Armour Penetration and Damage characteristics and/or any or all modifiers to the **Hit** **roll**.",
      },
    },
    {
      name: "TO THEIR FINAL BREATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ASPECT** **WARRIORS** or **AVATAR** OF **KHAINE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Each time you use this Stratagem, you can remove one Aspect Shrine token your unit has (see datasheets). Then, until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if you removed an Aspect Shrine token during this usage of this Stratagem. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SKYBORNE SANCTUARY",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One **ASURYANI** unit from your army that was eligible to fight this phase and one friendly **TRANSPORT** it is able to **embark** within.",
        effect: 'If your ASURYANI unit is not within **Engagement** **Range** of one or more enemy units and is wholly within 6" of that TRANSPORT, it can embark within it.',
      },
    },
    {
      name: "DOOM INESCAPABLE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **AVATAR** OF **KHAINE** model from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, your model’s Wailing Doom ranged weapon has a Range characteristic of 18" and a Damage characteristic of 8.',
      },
    },
    {
      name: "PRETERNATURAL PRECISION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASPECT** **WARRIORS** unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can remove one Aspect Shrine token your unit has (see datasheets). Then, select one of the following abilities, or select two of the following abilities if you removed an Aspect Shrine token during this usage of this Stratagem: **[IGNORES** **COVER]**, **[LETHAL** **HITS]**, **[SUSTAINED** **HITS** **1]**. Until the end of the phase, ranged weapons equipped by models in your unit have the selected abilities.",
      },
    },
    {
      name: "KHAINE’S VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit (excluding MONSTERS and VEHICLES) is selected to **Fall** **Back**.",
        target: "One **ASPECT** **WARRIORS** or **AVATAR** OF **KHAINE** unit from your army that is within **Engagement** **Range** of that enemy unit.",
        effect: "All models in that enemy unit must take a **Desperate** **Escape** **test**. When doing so, if that enemy unit is **Battle-shocked**, subtract 1 from each of those tests.",
      },
    },
  ],

  "Armoured Warhost": [
    {
      name: "LAYERED WARDS",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **mortal** **wound** is allocated to an AELDARI VEHICLE unit from your army.",
        target: "That **AELDARI** **VEHICLE** unit.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability against **mortal** **wounds**.",
      },
    },
    {
      name: "SWIFT DEPLOYMENT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **AELDARI** **TRANSPORT** unit from your army.",
        effect: "Until the end of the phase, units can **disembark** from your TRANSPORT after it has **Advanced**. Units that do so count as having made a **Normal** **move** that phase, and cannot declare a charge in the same turn, but can otherwise act normally.",
      },
    },
    {
      name: "VECTORED ENGINES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an AELDARI VEHICLE unit from your army that can FLY **Falls** **Back**.",
        target: "That **AELDARI** **FLY** **VEHICLE** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it **Fell** **Back**.",
      },
    },
    {
      name: "CLOUDSTRIKE",
      cp: "1 CP",
      rules: {
        when: "Start of the Reinforcements step of your Movement phase.",
        target: "One **AELDARI** **VEHICLE** unit from your army that can **FLY** and is in Strategic Reserves.",
        effect: 'Until the end of the phase, your unit has the **Deep** **Strike** ability. When your unit is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 6" horizontally away from all enemy units, but if it does, until the end of the turn, it is not eligible to declare a charge. In addition, if your unit is a **TRANSPORT**, each unit that **disembarks** from it this turn must be set up more than 6" horizontally from all enemy units and until the end of the turn, is not eligible to declare a charge.',
      },
    },
    {
      name: "SOULSIGHT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **AELDARI** **VEHICLE** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time your unit is selected to shoot, you can re-roll one **Hit** **roll**, one **Wound** **roll** and one Damage roll made for a model in your unit. If you are using fast dice rolling, you can select one of those rolls to re-roll before moving onto the next step of the attack sequence.",
      },
    },
    {
      name: "ANTI‑GRAV REPULSION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit has **declared** **a** **charge**.",
        target: "One **AELDARI** **VEHICLE** unit from your army that can **FLY** and was selected as a target of that charge.",
        effect: "Until the end of the phase, subtract 2 from **Charge** **rolls** made for that enemy unit.",
      },
    },
  ],

  "Serpent’s Brood": [
    {
      name: "FANGS OF THE BROOD",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One **TROUPE** unit from your army.",
        effect: "Until the end of the phase, when using your unit’s Dance of Death ability, you can select three of the abilities for your unit to gain, instead of one.",
      },
    },
    {
      name: "VENOMOUS WRATH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HARLEQUINS** **VEHICLE** unit from your army that has not been selected to shoot this phase.",
        effect: 'After your unit has shot, if it is not within **Engagement** **Range** of one or more enemy units, it can make a **Normal** **move** of up to 6". Until the end of the turn, your unit is not eligible to declare a charge.',
      },
    },
    {
      name: "STRIKING STRIDE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **HARLEQUINS** unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "WEAVERS’ COILS",
      cp: "1 CP",
      rules: {
        when: "End of your Fight phase.",
        target: "One **HARLEQUINS** **MOUNTED** unit from your army that was eligible to fight this phase.",
        effect: 'If your unit is not within **Engagement** **Range** of one or more enemy units, it can make a **Normal** **move**. Otherwise, your unit can make a **Fall** **Back** **move** of up to 6".',
      },
    },
    {
      name: "WEAVING STRIDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **HARLEQUINS** **INFANTRY** unit from your army that is within 9" of that enemy unit.',
        effect: 'Your unit can make a **Normal** **move** of up to 6".',
      },
    },
    {
      name: "SKYWARD LUNGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **HARLEQUINS** **VEHICLE** or **HARLEQUINS** **MOUNTED** unit from your army.",
        effect: "If your unit is not within **Engagement** **Range** of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Eldritch Raiders": [
    {
      name: "RAIDERS’ SPOILS",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **ANHRATHE** unit from your army that is within **Engagement** **Range** of one or more enemy units.",
        effect: "Until the start of the next Command phase, add 1 to the Objective Control characteristic of models in your unit.",
      },
    },
    {
      name: "RUTHLESS KILLERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **CORSAIR** **VOIDSCARRED** unit from your army that has not been selected to shoot or Fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Damage characteristic of that attack.",
      },
    },
    {
      name: "YRIEL’S EXAMPLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **AELDARI** **INFANTRY** unit from your army (excluding **WRAITH** **CONSTRUCT** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability.",
      },
    },
    {
      name: "NO PREY TOO BIG",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ANHRATHE**, **RANGERS** or **SHROUD** **RUNNERS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if the Strength characteristic of that attack is less than the highest Toughness characteristic of models in the target unit, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "IMPEDING FIRE",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One **RANGERS**, **SHROUD** **RUNNERS** or **STARFANG** unit from your army.",
        effect: 'Select one enemy unit (excluding TITANIC units) visible to and within 36" of your unit. Until the end of the phase, each time that enemy unit **declares** **a** **charge**, subtract 2 from the **Charge** **roll** (this is not cumulative with any other negative modifiers to that Charge roll).',
      },
    },
    {
      name: "WITHDRAW AND REINFORCE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **ANHRATHE** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves. If that unit is below **Starting** **Strength**, return all destroyed models (excluding CHARACTER models) to that unit.",
      },
    },
  ],

  "Corsair Coterie": [
    {
      name: "PIRATES’ DUE",
      cp: "1 CP",
      rules: {
        when: "The Fight phase.",
        target: "One AELDARI unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Wound** **roll** of 1. If your unit has the **ANHRATHE** keyword, then until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of an **objective** **marker**, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "LETHAL RUSE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an AELDARI unit from your army **Falls** **Back**.",
        target: "That AELDARI unit.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it **Fell** **Back**. If it is an **ANHRATHE** unit, also select one enemy unit your unit was within **Engagement** **Range** of at the start of the phase, and roll six D6: for each 4+, that enemy unit suffers 1 **mortal** **wound**.",
      },
    },
    {
      name: "OUTCAST AMBUSH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **RANGERS** or **SHROUD** **RUNNERS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES** **COVER]** and **[RAPID** **FIRE** **1]** abilities, and until the end of the phase, improve the Armour Penetration characteristic of those weapons by 1.",
      },
    },
    {
      name: "INTO THE BREACH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an **ANHRATHE** unit from your army destroyed one or more enemy units.",
        target: "That ANHRATHE unit.",
        effect: 'After your unit has resolved all of its shooting attacks, it can make a **Normal** **move** of up to D6+1".',
      },
    },
    {
      name: "CLOAK AND SHADOW",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **AELDARI** **INFANTRY** unit from your army that is within range of an **objective** **marker** that you control and that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'Until the end of the phase, models in your unit have the **Stealth** ability and your unit can only be selected as the target of a ranged attack if the attacking model is within 18".',
      },
    },
    {
      name: "VENGEFUL SORROW",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **AELDARI** **INFANTRY** unit from your army, if one or more models in that unit were destroyed as a result of those attacks, and if that AELDARI unit is neither **Battle-shocked** nor within **Engagement** **Range** of one or more enemy units.",
        effect: "Your unit can make a Surge move. To do so, roll one D6 and add 1 to the roll: models in your unit move a number of inches up to this result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit.",
      },
    },
  ],

  "Combined Arms": [
    {
      name: "COORDINATED ACTION",
      cp: "1 CP",
      rules: {
        when: "Start of any phase.",
        target: 'One **REGIMENT** unit from your army and one **SQUADRON** unit from your army within 6" of and visible to that REGIMENT unit.',
        effect: "Until the end of the phase, **Orders** affecting one of your units affect the other, and vice versa.",
      },
    },
    {
      name: "REINFORCEMENTS!",
      cp: "2 CP",
      rules: {
        when: "Any phase.",
        target: "One **INFANTRY** **REGIMENT** unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
        effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its **Starting** **Strength** and with all of its wounds remaining.<br><br>**Restrictions:** This Stratagem cannot be used to return destroyed CHARACTER units to **Attached** **units**. You can only use this Stratagem once per battle.",
      },
    },
    {
      name: "FLEXIBLE COMMAND",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "Any number of **ASTRA** **MILITARUM** **OFFICER** units from your army.",
        effect: "Until the end of the phase, your Officers can **issue** **Orders** to **REGIMENT** units and **SQUADRON** units.",
      },
    },
    {
      name: "FIELDS OF FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **REGIMENT** unit and one **SQUADRON** unit from your army that have not been selected to shoot this phase.",
        effect: "Select one enemy unit. Until the end of the phase, each time your selected REGIMENT and SQUADRON units make an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "INSPIRED COMMAND",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One **ASTRA** **MILITARUM** **OFFICER** unit from your army.",
        effect: "Your OFFICER can issue one Order as if it were your Command phase.",
      },
    },
    {
      name: "STALWART PROTECTOR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ASTRA** **MILITARUM** **VEHICLE** unit from your army.",
        effect: "Until the end of the phase, each time a ranged attack is allocated to an INFANTRY model from your army, if that model is not fully visible to every model in the attacking unit because of your VEHICLE, that model has the **Benefit** **of** **Cover** against that attack.",
      },
    },
  ],

  "Siege Regiment": [
    {
      name: "TRENCH FIGHTERS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ASTRA** **MILITARUM** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 2 to the result if it is a **REGIMENT** model. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "OVER THE TOP",
      cp: "2 CP",
      rules: {
        when: "Start of your Command phase.",
        target: "One **INFANTRY** **OFFICER** model from your army.",
        effect: "Until the end of the phase, when your model issues the **Move!** **Move!** **Move!** Order, it can issue that Order to any number of eligible friendly **INFANTRY** **REGIMENT** units, regardless of range to your model.",
      },
    },
    {
      name: "FLARE BURST",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** **CHARACTER** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, each time your unit makes an attack that targets a visible enemy unit within 12", you can re-roll the **Hit** **roll**.',
      },
    },
    {
      name: "CALLOUS SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **PLATOON** unit from your army that is within **Engagement** **Range** of one or more enemy units.",
        effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model’s unit is within Engagement Range of your unit, roll one D6: on a 4+, one model from your unit is destroyed after the attacking unit has finished making its attacks.",
      },
    },
    {
      name: "FURIOUS FUSILLADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **PLATOON** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristic of ranged weapons equipped by models in your unit while targeting an enemy unit within half range.",
      },
    },
    {
      name: "MINEFIELD",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One **PLATOON** unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit ends a **Charge** **move** within **Engagement** **Range** of your unit, roll one D6 for each model in that enemy unit: for each 5+, that enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds).",
      },
    },
  ],

  "Mechanised Assault": [
    {
      name: "VOX-RELAY",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **INFANTRY** **OFFICER** unit from your army **embarked** within a **TRANSPORT**. You can use this Stratagem on that unit even though it is embarked within a TRANSPORT.",
        effect: "Until the end of the phase, your unit can **issue** **Orders** even though it is not on the battlefield, and it can issue Orders to **ASTRA** **MILITARUM** **TRANSPORT** units from your army [excluding **TITANIC** units) regardless of the distance to and from your unit’s TRANSPORT.",
      },
    },
    {
      name: "RAPID DISPERSAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ASTRA** **MILITARUM** **INFANTRY** unit from your army that **disembarked** from a **TRANSPORT** this phase.",
        effect: 'Your INFANTRY unit can make a **Normal** **move** of up to D6".',
      },
    },
    {
      name: "CLEAR AND SECURE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ASTRA MILITARUM unit from your army that **disembarked** from a **TRANSPORT** this turn and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within range of an **objective** **marker**, you can re-roll the **Hit** **roll** and you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "SWIFT INTERCEPTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **TRANSPORT** unit from your army (excluding **AIRCRAFT** and **TITANIC** units) that is not within **Engagement** **Range** of one or more enemy units, and is within 9" of the enemy unit that just ended that move.',
        effect: 'Your TRANSPORT can make a **Normal** **move** of up to 6".',
      },
    },
    {
      name: "HASTY EXTRACTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, after an enemy unit has selected targets for its charge but before it makes a **Charge** **move**.",
        target: "One **ASTRA** **MILITARUM** **INFANTRY** unit from your army that was selected as a target of that charge.",
        effect: 'Provided your unit is not within **Engagement** **Range** of one or more enemy units and every model in your unit is within 3" of an **ASTRA** **MILITARUM** **TRANSPORT** from your army, it can **embark** within that TRANSPORT.',
      },
    },
    {
      name: "MOVE OUT",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s turn.",
        target: "One ASTRA MILITARUM unit from your army.",
        effect: 'Provided your unit is not within **Engagement** **Range** of one or more enemy units and every model in your unit is within 3" of an **ASTRA** **MILITARUM** **TRANSPORT** from your army, it can **embark** within that TRANSPORT.',
      },
    },
  ],

  "Hammer of the Emperor": [
    {
      name: "FINAL HOUR",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **SQUADRON** unit from your army that is **Below** **Half-strength** (excluding **OFFICER** units).",
        effect: "Until the end of the battle round, ranged weapons equipped by models in your unit (excluding [ONE SHOT] weapons) have the **[HAZARDOUS]** ability, and each time a model in your unit makes a ranged attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and to the **Hit** **roll**.",
      },
    },
    {
      name: "BLAZING ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **SQUADRON** unit from your army **Advances**.",
        target: "That SQUADRON unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced.",
      },
    },
    {
      name: "TACTICAL WITHDRAWAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **SQUADRON** unit from your army **Falls** **Back**.",
        target: "That SQUADRON unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
    },
    {
      name: "CRASH THROUGH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **ASTRA** **MILITARUM** **VEHICLE** unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a **Normal**, **Advance** or **Charge** **move**, it can move horizontally through terrain features as if they were not there.",
      },
    },
    {
      name: "FURIOUS CANNONADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **SQUADRON** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes an attack that targets a unit within 12", improve the Armour Penetration characteristic of that attack by 1.',
      },
    },
    {
      name: "ABLATIVE PLATING",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ASTRA** **MILITARUM** **VEHICLE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "SCOUTING OUTRIDERS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s turn.",
        target: 'One **ASTRA** **MILITARUM** **MOUNTED** or **ASTRA** **MILITARUM** **WALKER** unit from your army that is wholly within 10" of one or more battlefield edges and not within **Engagement** **Range** of one or more enemy units.',
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Recon Element": [
    {
      name: "CRACK SHOTS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **PLATOON** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[PRECISION]** ability.",
      },
    },
    {
      name: "DRAW THEM OUT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **PLATOON** unit from your army that is within 9" of that enemy unit, and is not within **Engagement** **Range** of one or more enemy units.',
        effect: 'Your unit can make a Normal move of up to 6".',
      },
    },
    {
      name: "SCRAMBLE FIELD",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Reinforcements step.",
        target: "One **ASTRA** **MILITARUM** **INFANTRY** unit from your army.",
        effect: 'Until the end of the phase, enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12" of your unit.',
      },
    },
    {
      name: "COURAGEOUS DIVERSION",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Shooting phase.",
        target: "One **ASTRA** **MILITARUM** **INFANTRY** or **ASTRA** **MILITARUM** **MOUNTED** unit from your army.",
        effect: "Until the end of the phase, your unit has the **Feel** **No** **Pain** **6+** ability, and each time an enemy model makes an attack, if your unit is the closest eligible target, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "TANGLEFOOT GRENADES",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One **ASTRA** **MILITARUM** **GRENADES** unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit selects your unit as the target of a charge, subtract 2 from the **Charge** **roll** (this is not cumulative with any other negative modifiers to that Charge roll).",
      },
    },
  ],

  "Bridgehead Strike": [
    {
      name: "BELLICOSA DROP",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your Movement phase.",
        target: "One **ASTRA** **MILITARUM** **INFANTRY** unit from your army that is in Reserves and has the **Deep** **Strike** ability.",
        effect: 'Until the end of the phase, when your unit is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 6" horizontally away from all enemy units.<br><br>**Restrictions:** Until the end of the turn, your unit is not eligible to declare a charge.',
      },
    },
    {
      name: "FIRING HOT",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **MILITARUM** **TEMPESTUS** or **KASRKIN** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, when targeting an enemy unit within 12", improve the Strength and Armour Penetration characteristics of hot-shot lascarbines, hot-shot lasguns, hot-shot laspistols, hot-shot marksman rifles, hot-shot volley guns and sentry hot-shot volley guns equipped by models in your unit by 1.',
      },
    },
    {
      name: "FIRE AND RELOCATE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ASTRA MILITARUM unit (excluding **TITANIC** units) from your army.",
        effect: "Until the end of the phase, your unit is eligible to shoot in a turn in which it **Advanced**.",
      },
    },
    {
      name: "SERVO‑DESIGNATORS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an ASTRA MILITARUM INFANTRY unit from your army has shot.",
        target: "That **ASTRA** **MILITARUM** **INFANTRY** unit.",
        effect: "Select one enemy unit hit by one or more of those attacks that is visible to your unit. Until the end of the phase, that enemy unit cannot have the **Benefit** **of** **Cover**.",
      },
    },
    {
      name: "AERIAL EXTRACTION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One ASTRA MILITARUM unit from your army that is not within **Engagement** **Range** of one or more enemy units, if all of its models have the **Deep** **Strike** ability, or one **VALKYRIE** unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
    {
      name: "ON MY POSITION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **REGIMENT** **INFANTRY** unit from your army that is within **Engagement** **Range** of one or more enemy units.",
        effect: "Roll one D6 for each enemy unit within Engagement Range of your unit: on a 2+, that enemy unit suffers D6 **mortal** **wounds**. Then, your unit suffers 3D3 mortal wounds.",
      },
    },
  ],

  "Grizzled Company": [
    {
      name: "SNAP TO IT",
      cp: "1 CP",
      rules: {
        when: "Start of any phase.",
        target: "One **ASTRA** **MILITARUM** **OFFICER** unit from your army.",
        effect: "Your unit’s OFFICER model can issue 1 **Order** as if it were your Command phase.",
      },
    },
    {
      name: "NO RETREAT!",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One ASTRA MILITARUM unit from your army affected by the **Duty** **and** **Honour!** Order.",
        effect: "If your unit is within range of an **objective** **marker** you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of a phase.",
      },
    },
    {
      name: "VETERAN SHARPSHOOTERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ASTRA MILITARUM unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES** **COVER]** ability.",
      },
    },
    {
      name: "PURGING FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ASTRA MILITARUM unit from your army affected by an **Order** that has not been selected to shoot this phase.",
        effect: "If your unit is within range of an **objective** **marker**, until the end of the phase, ranged weapons equipped by models in your unit have the **[LETHAL** **HITS]** ability.",
      },
    },
    {
      name: "MORDIAN MINUTE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** **INFANTRY** unit from your army affected by the **First** **Rank,** **Fire!** **Second** **Rank,** **Fire!** Order.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Strength characteristic of that attack by 1.",
      },
    },
    {
      name: "ADDITIONAL ARMOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One ASTRA MILITARUM unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
  ],

  "Steel Hammer": [
    {
      name: "ENGINE OF WRATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ASTRA** **MILITARUM** **TITANIC** unit from your army that has not been selected to fight this phase.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit. Until the end of the phase, add 6 to the Attacks characteristic of melee weapons equipped by models in your unit, improve the Armour Penetration characteristic of those weapons by 2, and each time a model in your unit fights, it can only target that enemy unit.",
      },
    },
    {
      name: "IMPOSING ARRIVAL",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your Movement phase, from the second battle round onwards.",
        target: "One **ASTRA** **MILITARUM** **TITANIC** unit from your army that is in Reserves.",
        effect: 'Set up your unit on the battlefield, wholly within 8" of the battlefield edge and more than 6" horizontally away from all enemy units.',
      },
    },
    {
      name: "ADAMANTINE BEHEMOTH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **ASTRA** **MILITARUM** **VEHICLE** unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a **Normal**, **Advance** or **Charge** **move**, it can move horizontally through terrain features.",
      },
    },
    {
      name: "SHATTERING SALVO",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an **ASTRA** **MILITARUM** **TITANIC** unit from your army has shot.",
        target: "That ASTRA MILITARUM TITANIC unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the **Benefit** **of** **Cover**.",
      },
    },
    {
      name: "WITHERING FIREPOWER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an **ASTRA** **MILITARUM** **VEHICLE** unit from your army has shot.",
        target: "That ASTRA MILITARUM VEHICLE unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. That enemy unit must take a **Battle-shock** **test**, subtracting 1 from that test.",
      },
    },
    {
      name: "ACCURACY UNDER PRESSURE",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ASTRA MILITARUM unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the **Hit** **roll**.",
      },
    },
  ],

  "Armoured Infantry": [
    {
      name: "ORDER THE ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "One **ASTRA** **MILITARUM** **OFFICER** unit from your army.",
        effect: 'Select one or more friendly ASTRA MILITARUM units within 6" of your unit; until the end of the phase, you can re-roll **Advance** **rolls** made for those units.',
      },
    },
    {
      name: "MOBILE FIREBASE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ARMOURED** **SKIRMISHER** unit from your army **Advances** or **Falls** **Back**.",
        target: "That ARMOURED SKIRMISHER unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it **Advanced** or **Fell** **Back**.",
      },
    },
    {
      name: "BURST OF SPEED",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One ASTRA MILITARUM unit from your army that did not **Remain** **Stationary** or arrive from Reserves this phase.",
        effect: 'Your unit can make a **Normal** **move** of up to D6".',
      },
    },
    {
      name: "SUPPORTING ORDNANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ARMOURED** **SKIRMISHER** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a visible MONSTER or VEHICLE unit, you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "COMBINED FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an **ARMOURED** **SKIRMISHER** unit from your army has shot.",
        target: "That ARMOURED SKIRMISHER unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the **Benefit** **of** **Cover**, and each time an ARMOURED SKIRMISHER unit from your army makes an attack that targets that unit, improve the Strength characteristic of that attack by 2.",
      },
    },
    {
      name: "OPENING SALVO",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ASTRA MILITARUM unit from your army that **disembarked** from a **TRANSPORT** this turn and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the **Wound** **roll**.",
      },
    },
  ],

  "Daemonic Incursion": [
    {
      name: "CORRUPT REALSPACE",
      cp: "1 CP",
      rules: {
        when: "Start of any Command phase.",
        target: "One LEGIONES DAEMONICA unit from your army that is within range of an **objective** **marker** you control.",
        effect: 'That objective marker is said to be Corrupted and remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn. In addition, while an objective marker is Corrupted and under your control, the area of the battlefield within 6" of that objective marker is considered to be within your army’s **Shadow** **of** **Chaos**.',
      },
    },
    {
      name: "WARP SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One LEGIONES DAEMONICA unit from your army that is within your army’s **Shadow** **of** **Chaos**.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "DRAUGHT OF TERROR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One LEGIONES DAEMONICA unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of weapons equipped by models in that unit by 1. In addition, until the end of the phase, each time such a weapon targets a unit that is **Battle-shocked**, you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "DENIZENS OF THE WARP",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One LEGIONES DAEMONICA unit from your army that is arriving using the **Deep** **Strike** ability this phase.",
        effect: 'Your unit can be set up anywhere on the battlefield that is more than 6" horizontally away from all enemy models.',
      },
    },
    {
      name: "THE REALM OF CHAOS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s turn.",
        target: "Up to two LEGIONES DAEMONICA units from your army that are within your army’s **Shadow** **of** **Chaos**, or one other LEGIONES DAEMONICA unit from your army.",
        effect: "Remove the targeted units from the battlefield and place them into Strategic Reserves. They will arrive back on the battlefield in the Reinforcements step of your next Movement phase using the **Deep** **Strike** ability.<br><br>**Restrictions:** You cannot target units that are within **Engagement** **Range** of one or more enemy units with this Stratagem.",
      },
    },
    {
      name: "DAEMONIC INVULNERABILITY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One LEGIONES DAEMONICA unit from your army that was selected as the target of one or more of that enemy unit’s attacks.",
        effect: "Until the end of the phase, each time an **invulnerable** **saving** **throw** is made for a model in your unit, re-roll a saving throw of 1.",
      },
    },
  ],

  "Shadow Legion": [
    {
      name: "SPITEFUL DEMISE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **SHADOW** **LEGION** unit from your army is destroyed, before removing the last model in that unit from the battlefield and before rolling any dice for the **Deadly** **Demise** ability.",
        target: "That SHADOW LEGION unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Roll one D6 for each enemy unit that is within **Engagement** **Range** of the last model in your unit, adding 2 to the result if your unit has the **SLAANESH** keyword: on a 4-5, that enemy unit suffers D3 **mortal** **wounds**; on a 6+, that enemy unit suffers 3 mortal wounds.",
      },
    },
    {
      name: "CHANNELLED WRATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **SHADOW** **LEGION** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[LANCE]** ability. If your unit has the **KHORNE** keyword, until the end of the phase, improve the Armour Penetration characteristic of those weapons by 1 as well.",
      },
    },
    {
      name: "DEATH DENIED",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **SHADOW** **LEGION** unit from your army.",
        effect: "One model in your unit regains up to 3 lost wounds. In addition, If your unit has the **TZEENTCH** keyword, return up to one destroyed model (excluding **CHARACTER** models) to your unit with its full wounds remaining.",
      },
    },
    {
      name: "ENCROACHING DARKNESS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "Up to one **SHADOW** **LEGION** **HERETIC** **ASTARTES** unit from your army and up to one **SHADOW** **LEGION** **LEGIONES** **DAEMONICA** unit from your army. You can only select units that arrived from Reserves this turn.",
        effect: "Until the end of the phase, weapons equipped by models in your selected units have the **[IGNORES** **COVER]** ability.",
      },
    },
    {
      name: "SHADE PATH",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit **declares** **a** **charge**.",
        target: "One **SHADOW** **LEGION** unit from your army that was selected as a target of that charge.",
        effect: "Until the end of the phase, subtract 2 from **Charge** **rolls** made for that enemy unit. In addition, if your unit has the **NURGLE** keyword, that enemy unit must take a **Battle-shock** **test**.",
      },
    },
    {
      name: "BINDING SHADOW",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to one **SHADOW** **LEGION** **HERETIC** **ASTARTES** unit from your army and up to one **SHADOW** **LEGION** **LEGIONES** **DAEMONICA** unit from your army. You can only select units that are not within **Engagement** **Range** of one or more enemy units.",
        effect: "Remove those selected units from the battlefield and place them into Strategic Reserves.",
      },
    },
  ],

  "Blood Legion": [
    {
      name: "WRATH UNDENIABLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **LEGIONES** **DAEMONICA** **KHORNE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "GORE‑HUNGRY ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **LEGIONES** **DAEMONICA** **KHORNE** unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "SKULLS BEGET BLOOD",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **LEGIONES** **DAEMONICA** **KHORNE** **INFANTRY** or **LEGIONES** **DAEMONICA** **KHORNE** **MOUNTED** unit from your army (excluding units that **Fell** **Back** this turn) that is not within **Engagement** **Range** of one or more enemy units.",
        effect: 'Select one enemy unit that is not within Engagement Range of one or more units from your army and is within 8" of and visible to your unit. Roll six D6: for each 4+, that enemy unit suffers 1 **mortal** **wound**.',
      },
    },
    {
      name: "BLOOD BEGETS SKULLS",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **LEGIONES** **DAEMONICA** **KHORNE** unit from your army that has not been selected to charge this phase.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "FOOLS’ FLIGHT",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit **Falls** **Back**.",
        target: 'One **LEGIONES** **DAEMONICA** **KHORNE** unit from your army that is within 6" of that enemy unit and would be eligible to declare a charge against that enemy unit.',
        effect: "Your unit now declares a charge that targets only that enemy unit, and you resolve that charge. Note that even if that charge is successful, your unit does not receive any **Charge** **bonus** this turn.",
      },
    },
    {
      name: "SHEATHED IN BRASS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **LEGIONES** **DAEMONICA** **KHORNE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a Save characteristic of 3+.",
      },
    },
  ],

  "Legion of Excess": [
    {
      name: "THIEVES OF PAIN",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an attack or **mortal** **wound** is allocated to a model in a **LEGIONES** **DAEMONICA** **SLAANESH** unit from your army (excluding **MONSTERS** and **VEHICLES**).",
        target: "That LEGIONES DAEMONICA SLAANESH unit.",
        effect: 'Select one other friendly LEGIONES DAEMONICA SLAANESH unit that is within 9" of and visible to your unit. Until the end of the phase, while the selected unit is on the battlefield, each time a model in your unit would lose a wound, inflict 1 mortal wound on the selected unit instead.',
      },
    },
    {
      name: "ARCHAGONISTS",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One **LEGIONES** **DAEMONICA** **SLAANESH** **MONSTER** unit or up to two **LEGIONES** **DAEMONICA** **SLAANESH** units (excluding **MONSTERS**) from your army that have not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in one of those units makes an attack, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "SENSORY EXCRUCIATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LEGIONES** **DAEMONICA** **SLAANESH** **MONSTER** unit from your army that is on the battlefield.",
        effect: "Each unit on the battlefield that is within your army’s **Shadow** **of** **Chaos** must take a **Battle-shock** **test**, subtracting 1 from that test if they are **Below** **Half-strength**.Designer’s Note: This Stratagem forces all friendly and enemy units alike within your army’s Shadow of Chaos to take a Battle-shock test. This can allow a Chaos Daemons player to heal units from their army through the **Daemonic** **Terror** army rule, at the risk of causing some of their own units to become Battle-shocked.",
      },
    },
    {
      name: "PHANTASMAL LONGING",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **LEGIONES** **DAEMONICA** **SLAANESH** unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "CAVALCADE OF BLADES",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **LEGIONES** **DAEMONICA** **SLAANESH** unit from your army ends a **Charge** **move**.",
        target: "That LEGIONES DAEMONICA SLAANESH unit.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit, or roll six D6 instead if your unit is a MONSTER unit: for each 4+, that enemy unit suffers 1 **mortal** **wound**.",
      },
    },
    {
      name: "OVERWHELMING EXCESS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **LEGIONES** **DAEMONICA** **SLAANESH** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
  ],

  "Plague Legion": [
    {
      name: "SEEPING VIRULENCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **LEGIONES** **DAEMONICA** **NURGLE** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in that unit makes an attack, an unmodified **Hit** **roll** of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "FEVER VISIONS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **LEGIONES** **DAEMONICA** **NURGLE** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the **Hit** **roll**. After your unit has finished making its attacks, select one enemy unit hit by one or more of those attacks; that enemy unit must take a **Battle-shock** **test**.",
      },
    },
    {
      name: "FOETID RESURGENCE",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LEGIONES** **DAEMONICA** **NURGLE** unit from your army that is on the battlefield.",
        effect: "Return up to 1 destroyed model to your unit, or up to D3 destroyed models instead if your unit is a **BATTLELINE** unit, with their full wounds remaining. If it is a **MONSTER** unit, one model in your unit regains up to D3+1 lost wounds instead.",
      },
    },
    {
      name: "ROT AND RENEWAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **LEGIONES** **DAEMONICA** **NURGLE** unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "MURKSHADOWS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **LEGIONES** **DAEMONICA** **NURGLE** **INFANTRY** unit from your army.",
        effect: 'Until the end of the phase, each time your unit makes a **Normal** **move**, add 5" to the Move characteristic of models in your unit.',
      },
    },
    {
      name: "PLAGUE OF WOES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase, before selecting any targets for the **Melancholic** **Miasma** Detachment rule.",
        target: "One **LEGIONES** **DAEMONICA** **NURGLE** unit from your army.",
        effect: 'Until the end of the phase, after an enemy unit takes a **Battle-shock** **test** as a result of the Melancholic Miasma Detachment rule, select one other enemy unit within 9" of your unit; that enemy unit must take a Battle-shock test.',
      },
    },
  ],

  "Scintillating Legion": [
    {
      name: "IMPOSSIBLE ECLIPSE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **LEGIONES** **DAEMONICA** **TZEENTCH** **MONSTER** unit from your army that is on the battlefield.",
        effect: "Select No Man’s Land or your opponent’s deployment zone, or spend one **Flux** **token** and select both. Until the end of the phase, the selected areas of the battlefield are within your army’s **Shadow** **of** **Chaos**.",
      },
    },
    {
      name: "PYROGENESIS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **LEGIONES** **DAEMONICA** **TZEENTCH** unit from your army that has not been selected to shoot or fight that phase.",
        effect: "Until the end of the phase, add 2 to the Strength characteristic of weapons equipped by models in your unit, or spend one **Flux** **token** and add 3 to the Strength characteristic of those weapons and improve the Armour Penetration characteristic of those weapons by 1 instead.",
      },
    },
    {
      name: "FLICKERING REALITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **LEGIONES** **DAEMONICA** **TZEENTCH** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Roll one D6, then you can spend one **Flux** **token** to re-roll the result: until the end of the phase, each time an attack targets your unit, on an unmodified **Hit** **roll** (after any re-roll) of that result, the attack sequence ends, even if the original Hit roll would have been a **Critical** **Hit**.Example: If you roll a 2 and choose to spend one Flux token to re-roll the result, and the re-roll is a 6, then until the end of the phase, each time an attack targets your unit, on an unmodified Hit roll of 6 the attack sequence ends, that attack fails to hit and no Critical Hit effects (e.g. **Lethal** **Hits**) are resolved.",
      },
    },
    {
      name: "FATEBORNE NIGHTMARES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **LEGIONES** **DAEMONICA** **TZEENTCH** unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "FICKLEFIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **LEGIONES** **DAEMONICA** **TZEENTCH** unit from your army that is within **Engagement** **Range** of one or more enemy units.",
        effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets for, and resolving attacks with, ranged weapons. Until the end of the phase, each time an enemy model is destroyed while its unit is within Engagement Range of your unit, roll one D6: on a 5+, your unit suffers 1 **mortal** **wound** after the attacking unit has finished making its attacks.",
      },
    },
    {
      name: "DELIRIUM UNMADE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **LEGIONES** **DAEMONICA** **TZEENTCH** unit from your army that is not within **Engagement** **Range** of one or more enemy units. Alternatively, you can spend one **Flux** **token** when you use this Stratagem and target up to two LEGIONES DAEMONICA TZEENTCH units from your army instead (including those within Engagement Range of one or more enemy units).",
        effect: "Remove your units from the battlefield and place them into Strategic Reserves.",
      },
    },
  ],

  "Traitoris Lance": [
    {
      name: "PTERRORSHADES",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit fails a **Battle-shock** **test**.",
        target: 'One **CHAOS** **KNIGHTS** unit from your army that is within 12" of that enemy unit.',
        effect: "Roll six D6: for each 4+, that enemy unit suffers 1 **mortal** **wound** and one model in your unit regains up to 1 lost wound.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "CONQUERORS WITHOUT MERCY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **CHAOS** **KNIGHTS** model from your army that made a **Charge** **move** this turn and has not been selected to fight this phase.",
        effect: 'Until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by your model by 1. After your model has finished making its attacks this phase, if it destroyed one or more enemy units this phase, each enemy unit within 6" of your model must take a **Battle-shock** **test**.',
      },
    },
    {
      name: "DISDAIN FOR THE WEAK",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **6+** ability, and the **Feel** **No** **Pain** **5+** ability against attacks made by **Battle-shocked** models.",
      },
    },
    {
      name: "A LONG LEASH",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **ABHORRENT** unit from your army and up to two friendly **WAR** **DOG** units.",
        effect: "Until the start of your next Command phase, those WAR DOG units are treated as being within range of any **Aura** **abilities** your ABHORRENT unit has.",
      },
    },
    {
      name: "IMPERIOUS ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "Up to two **WAR** **DOG** units from your army or one **TITANIC** **CHAOS** **KNIGHTS** unit from your army.",
        effect: "Until the end of the phase, each time a model in one of your units makes a **Normal**, **Advance**, **Fall** **Back** or **Charge** **move**, it can move through models and terrain features. When doing so, it can move within **Engagement** **Range** of such models but, unless it made a Charge move, cannot end that move within Engagement Range of them, and any **Desperate** **Escape** **test** is automatically passed (the **Super-heavy** **Walker** ability does not apply while using this Stratagem).",
      },
    },
    {
      name: "STORM OF DARKNESS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the **Stealth** ability, and each time an attack targets your unit, models in it have the **Benefit** **of** **Cover** against that attack.",
      },
    },
  ],

  "Infernal Lance": [
    {
      name: "PROFANE SYMBIOSIS",
      cp: "1 CP",
      rules: {
        when: "End of any phase.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that is not **Empowered**.",
        effect: "Your unit makes a **Malefic** **Surge**.<br><br>**Restrictions:** You cannot select the same unit as the target of this Stratagem more than once per battle round.",
      },
    },
    {
      name: "HELLFORGED CONSTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "CORRUPTING TAINT",
      cp: "1 CP",
      rules: {
        when: "Your Command phase, just after a **CHAOS** **KNIGHTS** **CHARACTER** unit from your army makes a **Malefic** **Surge**.",
        target: "That CHAOS KNIGHTS CHARACTER unit.",
        effect: "Select one **objective** **marker** your unit is within range of that you control. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "UNLEASH BALEFIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that has not been selected to shoot this phase.",
        effect: 'After your unit has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a **Battle-shock** **test**; if the test is failed, until the end of your opponent’s next turn, it is aflame. While a unit is aflame, subtract 2" from its Move characteristic and subtract 2 from **Charge** **rolls** made for it.',
      },
    },
    {
      name: "WARP VISION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES** **COVER]** ability.",
      },
    },
    {
      name: "DIABOLIC BULWARK",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ **invulnerable** **save**.",
      },
    },
  ],

  "Lords of Dread": [
    {
      name: "CLAIMED FOR THE DARK GODS",
      cp: "1 CP",
      rules: {
        when: "Start of your Command phase.",
        target: "One **CHAOS** **KNIGHTS** **CHARACTER** unit from your army that is within range of one or more **objective** **markers** you control.",
        effect: "Select one of those objective markers. That objective marker remains under your control, with a Level of Control of 5 (unless it would otherwise be higher), until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "SPITEFUL DEMISE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **CHAOS** **KNIGHTS** **CHARACTER** unit from your army is destroyed.",
        target: "That CHAOS KNIGHTS CHARACTER unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "When rolling to determine whether **mortal** **wounds** are inflicted by your unit’s **Deadly** **Demise** ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of a 4+ instead of on a 6.",
      },
    },
    {
      name: "RUNES OF DISDAIN",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **CHAOS** **KNIGHTS** **CHARACTER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "TITANIC DUEL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **CHAOS** **KNIGHTS** **CHARACTER** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Select one enemy MONSTER or VEHICLE unit. Until the end of the phase, each time a model in your unit makes an attack that targets that enemy unit, re-roll a **Hit** **roll** of 1 and re-roll a **Wound** **roll** of 1. Each time a model in your unit makes an attack that targets that enemy unit, if that enemy unit is TITANIC, you can re-roll the Hit roll and you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "TROPHY HUNTER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before a **CHAOS** **KNIGHTS** **CHARACTER** unit from your army **consolidates**.",
        target: "That CHAOS KNIGHTS CHARACTER unit.",
        effect: 'Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3" as long as your unit can end that move within **Engagement** **Range** of one or more enemy units.',
      },
    },
    {
      name: "CRUSHED LIKE VERMIN",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **CHAOS** **KNIGHTS** **CHARACTER** unit from your army ends a **Normal** **move**.",
        target: "That CHAOS KNIGHTS CHARACTER unit.",
        effect: "Select one enemy unit (excluding MONSTERS and VEHICLES) that your unit moved over during that move and roll six D6: for each 4+, that enemy unit suffers 1 **mortal** **wound**. If one or more models are destroyed as a result of this Stratagem, that enemy unit must take a **Battle-shock** **test**.",
      },
    },
  ],

  "Helhunt Lance": [
    {
      name: "FERAL ARROGANCE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **mortal** **wound** is allocated to a **CHAOS** **KNIGHTS** unit from your army.",
        target: "That CHAOS KNIGHTS unit.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability against **mortal** **wounds**.",
      },
    },
    {
      name: "MERCILESS FUSILLADE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase or the start of the Fight phase.",
        target: "One **TITANIC** **CHAOS** **KNIGHTS** unit from your army, and up to two friendly **WAR** **DOG** units, that have not been selected to shoot or fight this phase.",
        effect: "Select one enemy unit that is an eligible target for each of those CHAOS KNIGHTS units. Until the end of the phase, each time one of those Chaos Knights units is selected to shoot or fight, if that enemy unit is an eligible target, you can only select that enemy unit as the target for all of those attacks and those attacks have the **[SUSTAINED** **HITS** **1]** ability.",
      },
    },
    {
      name: "BEASTHIDE MANIFESTATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One CHAOS KNIGHTS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "FLUSH THE QUARRY",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: 'One **TITANIC** **CHAOS** **KNIGHTS** unit from your army and up to three friendly **WAR** **DOG** units within 6" of that Titanic Chaos Knights unit.',
        effect: "Until the end of the phase, each time one of those War Dog units makes a **Normal**, **Advance** or **Fall** **Back** **move**, its models can move through models and terrain features. When doing so, they can move within **Engagement** **Range** of such models but cannot end that move within Engagement Range of them, and any **Desperate** **Escape** **test** is automatically passed.",
      },
    },
    {
      name: "CONTEMPTUOUS VOLLEYS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a CHAOS KNIGHTS unit from your army **Falls** **Back**.",
        target: "That **CHAOS** **KNIGHTS** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Fell** **Back**.",
      },
    },
    {
      name: "GOADED BEAST",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One CHAOS KNIGHTS unit from your army that lost one or more wounds as a result of those attacks.",
        effect: "Your unit can make a Surge move. To do so, roll one D6: models in your unit move a number of inches up to the result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within **Engagement** **Range** of that enemy unit.",
      },
    },
  ],

  "Houndpack Lance": [
    {
      name: "VOX-HOWL",
      cp: "2 CP",
      rules: {
        when: "Start of the Shooting phase or the start of the Fight phase.",
        target: "One WAR DOG CHARACTER unit from your army.",
        effect: 'Each enemy unit within 6" of your unit must take a **Battle-shock** **test**. Each friendly WAR DOG unit that is within 6" of your unit and is Battle-shocked must take a **Leadership** **test**; if that test is passed, that unit is no longer Battle-shocked.<br><br>**Restrictions:** You can only use this Stratagem once per turn.',
      },
    },
    {
      name: "HUNGRY FOR COMBAT",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "Two or more **WAR** **DOG** units from your army within **Engagement** **Range** of the same enemy unit.",
        effect: "Select one enemy unit within Engagement Range of those WAR DOG units. Until the end of the phase, models in those WAR DOG units can only target that enemy unit, but each time a model in one of those WAR DOG units makes an attack, an unmodified **Hit** **roll** of 5+ scores a **Critical** **Hit**.",
      },
    },
    {
      name: "CUNNING HUNTER",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **WAR** **DOG** unit from your army **Falls** **Back**.",
        target: "That WAR DOG unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Fell** **Back**.",
      },
    },
    {
      name: "ANIMALISTIC RAGE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after a **WAR** **DOG** unit from your army that has not yet fought is destroyed.",
        target: "That WAR DOG unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Before resolving your unit’s **Deadly** **Demise** ability, it can either shoot or fight. When doing so, it must target only the enemy unit that just destroyed it, and can only do so if that enemy unit is an eligible target. After it has done so and after any **Consolidation** **moves** have been made, resolve your unit’s Deadly Demise ability as normal.",
      },
    },
    {
      name: "HARRYING HOUNDS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **WAR** **DOG** unit from your army that is within 9" of that enemy unit.',
        effect: 'Your unit can make a **Normal** **move** of up to 6".',
      },
    },
    {
      name: "ENCIRCLING PACK",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: 'One **WAR** **DOG** unit from your army that is wholly within 12" of one or more battlefield edges and not within **Engagement** **Range** of one or more enemy units.',
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Iconoclast Fiefdom": [
    {
      name: "AVENGE THE MASTERS!",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Until the end of the battle, the enemy unit that destroyed your unit is Marked. Each time a **DAMNED** model from your army makes an attack that targets a Marked unit, that attack has the **[LETHAL** **HITS]** ability.",
      },
    },
    {
      name: "WRETCHED MASSES",
      cp: "2 CP",
      rules: {
        when: "Any phase.",
        target: "One **DAMNED** unit (excluding **ACCURSED** **CULTISTS**) from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its **Starting** **Strength** and with all of its wounds remaining.<br><br>**Restrictions:** You can only use this Stratagem once per battle. This Stratagem cannot be used to return destroyed CHARACTER units to **Attached** **units**.",
      },
    },
    {
      name: "SOUL HUNGER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a CHAOS KNIGHTS unit from your army has fought.",
        target: "That **CHAOS** **KNIGHTS** unit.",
        effect: "If one or more models were destroyed as a result of those attacks, your unit regains up to D3 lost wounds. If one or more models from **Battle-shocked** units were destroyed as a result of those attacks, your unit regains up to D3+2 lost wounds instead.",
      },
    },
    {
      name: "UNRESTRAINED RAGE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a CHAOS KNIGHTS unit from your army **Advances** or **Falls** **Back**.",
        target: "That **CHAOS** **KNIGHTS** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.",
      },
    },
    {
      name: "WORTHLESS CHATTEL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DAMNED** unit from your army.",
        effect: "Until the end of the phase, enemy units are not considered to be within **Engagement** **Range** of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model’s unit is within Engagement Range of your unit, roll one D6: on a 4+, one model from your unit is destroyed after the attacking unit has finished making its attacks.",
      },
    },
    {
      name: "PRESERVE THE IDOLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **CHAOS** **KNIGHTS** unit from your army that is within 9" of that enemy unit.',
        effect: 'Select one **DAMNED** unit from your army that is not **Battle-shocked**, not within **Engagement** **Range** of one or more enemy units and is within 6" of your unit. That DAMNED unit can make a **Normal** **move** of up to 6", but it must end this move closer to that enemy unit than when it started the move.',
      },
    },
  ],

  "Veterans of the Long War": [
    {
      name: "ENDLESS IRE",
      cp: "2 CP",
      rules: {
        when: "Any phase, just after your **focus** **of** **hatred** is **destroyed**.",
        target: "One **HERETIC** **ASTARTES** **CHARACTER** unit from  your army (excluding **DAMNED** units)",
        effect: 'Select one enemy unit within 12" of and visible to your unit. Until the start of your next Command phase, that enemy unit is considered to be your focus of hatred.',
      },
    },
    {
      name: "CONTEMPTUOUS DISREGARD",
      cp: "1 CP",
      rules: {
        when: "Your opponents Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One HERETIC ASTARTES unit from your army (excluding **DAMNED** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "BRINGERS OF DESPAIR",
      cp: "2 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One HERETIC ASTARTES unit from your army (excluding **DAMNED** units) that is within **Engagement** **Range** of your **focus** **of** **hatred**.",
        effect: "Until the end of the phase, your unit has the **Fights** **First** ability.",
      },
    },
    {
      name: "BLACK CRUSADE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit or **HERETIC** **ASTARTES** **MOUNTED** unit from your army  (excluding **DAMNED** units).",
        effect: "Until the end of the turn, your unit is  eligible to shoot in a turn in which it **Advanced**  or **Fell** **Back**, and bolt pistols, boltguns and combi-bolters equipped by models in your unit have  the **[DEVASTATING** **WOUNDS]** ability while your unit has not already inflicted 6 wounds this turn using that ability.",
      },
    },
    {
      name: "LET THE GALAXY BURN",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One HERETIC ASTARTES unit from your army (excluding **TZEENTCH** units) that has not been selected to shoot this phase",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES** **COVER]** ability, and change the Attacks characteristic of **Torrent** weapons equipped by models in your unit to 6.",
      },
    },
    {
      name: "MILLENNIA OF EXPERIENCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **HERETIC** **ASTARTES** **INFANTRY** or **HERETIC** **ASTARTES** **MOUNTED** unit from your army (excluding  **DAMNED** units) that is within 9" of that enemy unit and not within **Engagement** **Range** of one or more enemy units.',
        effect: 'Your unit can make a Normal move of up to 6".',
      },
    },
  ],

  "Deceptors": [
    {
      name: "DETONATOR",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy model with the **Deadly** **Demise** ability (excluding TITANIC models) is destroyed",
        target: 'One **HERETIC** **ASTARTES** **CHARACTER** unit from your army that was within 18" of that enemy model when it was destroyed.',
        effect: "Your opponent does not roll to determine whether **mortal** **wounds** are inflicted by their model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted (if that ability inflicts a random number of mortal wounds, your opponent rolls to determine that number as normal).",
      },
    },
    {
      name: "FROM ALL SIDES",
      cp: "1 CP",
      rules: {
        when: "Start of your Charge phase.",
        target: "One HERETIC ASTARTES unit from your army.",
        effect: "Until the end of the phase, add 1 to **Charge** **rolls** made for your unit for each other HERETIC ASTARTES unit from your army that made a Charge move this phase (to a maximum of +3)",
      },
    },
    {
      name: "PICK THEM OFF",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One HERETIC ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its **Starting** **Strength**, you can re-roll the **Hit** **roll**. If the target is **Below** **Half-strength**, you can re-roll the **Wound** **roll** as well.",
      },
    },
    {
      name: "COILS OF DECEPTION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a HERETIC ASTARTES unit from your army **Falls** **Back**.",
        target: "That HERETIC ASTARTES unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back",
      },
    },
    {
      name: "RELENTLESS PURSUIT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **HERETIC** **ASTARTES** **INFANTRY** or **HERETIC** **ASTARTES** **MOUNTED** unit from your army that is within 9" of that enemy unit and not within **Engagement** **Range** of one or more enemy units.',
        effect: 'Your unit can make a Normal move of up to 6".',
      },
    },
    {
      name: "SCRAMBLED COORDINATES",
      cp: "1 CP",
      rules: {
        when: "Start of the Reinforcements step of your opponent’s Movement phase.",
        target: "One HERETIC ASTARTES unit from your army.",
        effect: 'Until the end of the phase, enemy units that are set up on the battlefield from Reserves cannot be set up within 12" horizontally of your unit.',
      },
    },
  ],

  "Renegade Raiders": [
    {
      name: "UNFAILINGLY OBDURATE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One HERETIC ASTARTES unit from your army (excluding **DAMNED** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SCOUR AND SEIZE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One HERETIC ASTARTES unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within range of an **objective** **marker**, that attack has the **[PRECISION]** ability.",
      },
    },
    {
      name: "OPPORTUNISTIC RAIDERS",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase",
        target: "One HERETIC ASTARTES unit from your army that was eligible to fight this phase.",
        effect: 'If your unit is not within **Engagement** **Range** of one or more enemy units, it can make a **Normal** move of up to 6", or up to 12" if it is a **MOUNTED** unit. Otherwise, your unit can make a **Fall** **Back** **move**. It cannot **embark** within a **TRANSPORT** at the end of this move if it **disembarked** from a TRANSPORT this turn.',
      },
    },
    {
      name: "WARPCHARGED ENGINES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **HERETIC** **ASTARTES** **TRANSPORT** or **HERETIC** **ASTARTES** **MOUNTED** unit from your army that has not been selected to move this phase.",
        effect: 'Until the end of the phase, if your unit  **Advances**, do not make an **Advance** **roll** for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
      },
    },
    {
      name: "RUINOUS RAID",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or your Fight phase",
        target: "One HERETIC ASTARTES unit from your army that **disembarked** from a **TRANSPORT** this turn and has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a  model in your unit makes an attack, if the target of that attack is within range of an **objective** **marker**, you can re-roll the **Hit** **roll** and you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "REAVERS’ HASTE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** or **HERETIC** **ASTARTES** **MOUNTED** unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it  **Advanced**. If you select one or more units within range of an **objective** **marker** as a target of that charge, add 1 to the **Charge** **roll**.",
      },
    },
  ],

  "Dread Talons": [
    {
      name: "DEPTHLESS CRUELTY",
      cp: "1 CP",
      rules: {
        when: "Fight phase",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is **Battle-shocked** and/or **Below** **Half-strength**, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "BLOODY EXAMPLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a HERETIC ASTARTES unit from your army destroys a CHARACTER unit.",
        target: "That HERETIC ASTARTES unit.",
        effect: 'Each enemy unit within 12" of and visible to your unit must take a **Battle-shock** **test**.',
      },
    },
    {
      name: "PITILESS HUNTERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from  your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is **Battle-shocked** and/or **Below** **Half-strength**, you can re-roll the **Hit** **roll** and you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "RELENTLESS TERROR",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **HERETIC** **ASTARTES** **INFANTRY** unit from your army **Falls** **Back**.",
        target: "That HERETIC ASTARTES INFANTRY unit.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "SCREAMING DESCENT",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your Movement phase, from the second battle round onwards.",
        target: "One **HERETIC** **ASTARTES** **JUMP** **PACK** unit from your army that is in Reserves.",
        effect: 'Set your unit up anywhere on the battlefield that is more than 6" horizontally away from all  enemy units, but until the end of the turn, it is not eligible to declare a charge. Then select one enemy INFANTRY or MOUNTED unit within 9" of and visible to your unit: that unit must take a **Battle-shock** **test**.',
      },
    },
    {
      name: "MERCILESS PURSUIT",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army that is not within **Engagement** **range** of one or more enemy units.",
        effect: 'Select one enemy unit that **Fell** **Back** this turn and is within 6" of your unit. Your unit can  declare a charge as if it were your Charge phase. When doing so, you can only select that enemy  unit as the target of that charge (and only if it is an eligible target). Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.',
      },
    },
  ],

  "Fellhammer Siege-Host": [
    {
      name: "PERSISTENT ASSAILANTS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more attacks this phase and has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the **Hit** **roll**, and if your unit is **Below** **Half-strength** you can re-roll the **Wound** **roll** as well.",
      },
    },
    {
      name: "BRUTAL ATTRITION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army (excluding **DAMNED** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a melee attack is allocated to your unit, after the attacking unit has finished making its attacks, roll one D6 (to maximum of six D6 per attacking unit): for each 4+, the attacking unit suffers 1 **mortal** **wound**.",
      },
    },
    {
      name: "PITILESS CANNONADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One HERETIC ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit  that is **Below** **Half-strength**, a successful unmodified **Hit** **roll** of 5+ scores a **Critical** **Hit**",
      },
    },
    {
      name: "POINT-BLANK DESTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase",
        target: "One HERETIC ASTARTES unit from your army that is within **Engagement** **Range** of one or more enemy units and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, your unit’s ranged weapons (excluding **Blast** **weapons**) have the  **[PISTOL]** ability.",
      },
    },
    {
      name: "STEADFAST DETERMINATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One HERETIC ASTARTES unit from your army (excluding **DAMNED** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability.",
      },
    },
    {
      name: "SIEGECRAFT",
      cp: "1 CP",
      rules: {
        when: "Start of your opponents Charge phase.",
        target: "One HERETIC ASTARTES unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit selects your unit as a target of a charge,  subtract 2 from the **Charge** **roll** (this is not cumulative with any other negative modifiers to that Charge roll).",
      },
    },
  ],

  "Pactbound Zealots": [
    {
      name: "EYE OF THE GODS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **HERETIC** **ASTARTES** **CHARACTER** unit from your army (excluding  **DAMNED**, **DAEMON** and **EPIC** **HERO** units) destroys a enemy unit.",
        target: "One HERETIC ASTARTES CHARACTER model in that unit.",
        effect: "Until the end of the battle, add 1 to the Move, Toughness and Wounds characteristics of that  CHARACTER model, and add 1 to the Attacks. Strength and Damage characteristics of that CHARACTER model’s melee weapons.",
      },
    },
    {
      name: "ETERNAL HATE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is **destroyed**, if that model has not fought this phase, roll one D6, adding 1 to the result if it is a **KHORNE** unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "PROFANE ZEAL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **HERETIC** **ASTARTES** **CHAOS** **UNDIVIDED** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "SKINSHIFT",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One HERETIC ASTARTES unit from your army.",
        effect: "One model in your unit regains up to 3 lost wounds. In addition, if your unit is a **TZEENTCH** unit below its **Starting** **Strength**, one **destroyed** model (excluding **CHARACTER** models) is returned to your unit with its full wounds remaining.",
      },
    },
    {
      name: "TORPEFYING REFRAIN",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One HERETIC ASTARTES unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it **Fell** **Back**. If your unit is a **SLAANESH** unit, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Advanced** or **Fell** **Back**.",
      },
    },
    {
      name: "FESTERING MIASMA",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'Until the end of the phase, your unit has the **Stealth** ability. In addition, if your unit is a **NURGLE** unit, it can only be selected as the target of a ranged attack if the attacking model is within 18".',
      },
    },
  ],

  "Chaos Cult": [
    {
      name: "CHOSEN FOR GLORY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **DAMNED** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Your unit can make a **Desperate** **Pact**. If it does, until the end of the phase, each time a model in your unit makes an attack, you can re-roll the **Hit** **roll**, and if your unit did not fail the resulting **Leadership** **test** when making that Desperate Pact, you can re-roll the **Wound** **roll** as well.",
      },
    },
    {
      name: "SELFLESS DEMISE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DAMNED** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has resolved all of its attacks, each time a model in your unit is **destroyed**, roll one D6 on a 6, the attacking unit suffers 1 **mortal** **wound** after all of its attacks have been resolved.",
      },
    },
    {
      name: "INFERNAL SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **DAMNED** unit from your army that has not been selected to fight this phase.",
        effect: "Your unit can make a **Desperate** **Pact**. If it does, your unit suffers D3 **mortal** **wounds** (in  addition to any suffered for failing the resulting **Leadership** **test**), and until the end of the phase, add 1 to the Attacks characteristic of the melee weapons equipped by models in your unit, and if your unit did not fail the resulting Leadership test when making that Desperate Pact, until the end of the  phase, improve the Strength characteristic of those  weapons by 1 as well.",
      },
    },
    {
      name: "CRAZED FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DAMNED** unit from your army that has not been selected to shoot this phase.",
        effect: "Your unit can make a **Desperate** **Pact**. If it does, until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1, and if your unit did not fail the resulting **Leadership** **test** when making that Desperate Pact, improve the Strength characteristic of that attack by 1 as well.",
      },
    },
    {
      name: "RECKLESS HASTE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase",
        target: "One **DAMNED** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "MORTAL THRALLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected ts targets.",
        target: 'One HERETIC ASTARTES unit from your army that was selected as the target of one or more of the attacking units attacks, and one friendly **DAMNED** unit within 3" of your unit and visible to both your unit and the attacking unit.',
        effect: "Until the end of the phase, while your DAMNED unit is on the battlefield, each time your opponent would make a **Wound** **roll** for an attack that targets your HERETIC ASTARTES unit, if your DAMNED **unit** **is** **visible** to the attacking model and is an eligible target for that attack, no roll is made; instead, your DAMNED unit suffers a number of **mortal** **wounds** equal to the Damage characteristic of that attack.",
      },
    },
  ],

  "Soulforged Warpack": [
    {
      name: "DESPERATE PLEDGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **HERETIC** **ASTARTES** **DAEMON** **VEHICLE** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, if your unit invokes its contract, each time it makes an attack, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "GLUT OF SOULS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **HERETIC** **ASTARTES** **DAEMON** **VEHICLE** unit from your army (excluding **TITANIC** units) that has not been selected to fight this phase.",
        effect: "Until the end of the phase, if your unit invokes its contract, each time it makes an attack that destroys an enemy model, roll one D6: on 5+, your unit regains 1 lost wound after all of its attacks have been resolved (to a maximum of 6 wound).",
      },
    },
    {
      name: "DAEMONIC POSSESION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **HERETIC** **ASTARTES** **VEHICLE** unit from your army (excluding **DAEMON** units).",
        effect: "Until the end of the battle, your unit has the DAEMON keyword.",
      },
    },
    {
      name: "UNSTOPPABLE RAMPAGE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or Charge phase.",
        target: "One **HERETIC** **ASTARTES** **VEHICLE** or **VASHTORR** THE **ARKIFANE** unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes **Normal**, **Advance** or **charge** **move**, it can move horizontally through terrain features as if they were not there.",
      },
    },
    {
      name: "PREDATORY PURSUIT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **back** **move**.",
        target: 'One **HERETIC** **ASTARTES** **VEHICLE** or **VASHTORR** THE **ARKIFANE** unit from your army that is within 9" of that enemy unit and not within **Engagement** **Range** of one or more enemy units.',
        effect: 'Your unit can make a Normal move of up to 6", but must end that move as close as possible to that enemy unit.',
      },
    },
    {
      name: "FEEDING FRENZY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit (excluding MONSTER and VEHICLES) is selected to **Fall** **Back**.",
        target: "One **HERETIC** **ASTARTES** **DAEMON** **VEHICLE** or **VASHTORR** THE **ARKIFANE** unit from your army that is within **Engagement** **Range** of that enemy unit.",
        effect: "Until the end of the phase, each time an enemy unit (excluding MONSTERS and VEHICLES) that is within Engagement Range of your units **Falls** **Back**, all models in that enemy unit must take a **Desperate** **Escape** **test**. When doing so, of that enemy unit is **Battle-shocked**, substract 1 from each of those tests.",
      },
    },
  ],

  "Cabal of Chaos": [
    {
      name: "BALEFUL BLESSING",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **HERETIC** **ASTARTES** unit from your army has a **mortal** **wound** allocated to it.",
        target: "That HERETIC ASTARTES unit.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability against mortal wounds.",
      },
    },
    {
      name: "NO REST IN DEATH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: 'One **HERETIC** **ASTARTES** unit from your army within 9" of a **HERETIC** **ASTARTES** **PSYKER**, **HERETIC** **ASTARTES** **DAEMON** **PRINCE** or **HERETIC** **ASTARTES** **DAEMON** **PRINCE** WITH **WINGS** unit from your army.',
        effect: "One model in your unit regains up to D3+1 lost wounds. If your unit has the **BATTLELINE** keyword, you can return up to D3 destroyed models (excluding **CHARACTER** models) to your unit with their full wounds remaining, instead.",
      },
    },
    {
      name: "MUTATION’S CURSE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HERETIC** **ASTARTES** **PSYKER** unit from your army.",
        effect: 'Select one visible enemy unit within 12" of your unit. Roll one D6: on a 1, that enemy unit suffers 1 **mortal** **wound**; on a 2-4, that enemy unit suffers D3 mortal wounds; on a 5-6, that enemy unit suffers 2D3 mortal wounds.',
      },
    },
    {
      name: "SOULSEEKERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army that has not been selected to shoot that phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES** **COVER]** ability.",
      },
    },
    {
      name: "UNHOLY HASTE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army that has not been selected to charge that phase.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "SHROUD OF CHAOS",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Shooting phase.",
        target: "One **HERETIC** **ASTARTES** **PSYKER**, **HERETIC** **ASTARTES** **DAEMON** **PRINCE** or **HERETIC** **ASTARTES** **DAEMON** **PRINCE** WITH **WINGS** unit from your army.",
        effect: 'Until the end of the phase, your unit has the following ability:Shroud of Chaos (Aura): Models in friendly HERETIC ASTARTES units within 6" of this unit have the **Stealth** ability.',
      },
    },
  ],

  "Creations of Bile": [
    {
      name: "MONSTROUS VISAGES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "MASTERS ARE WATCHING",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, subtracting 1 from the result if it is a **DAMNED** unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SPECIMENS FOR THE SPIDER",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army that has not been selected to fight this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes a melee attack that targets a CHARACTER unit, you can re-roll the **Wound** **roll**. After your unit has fought, if one or more enemy CHARACTER models were destroyed as a result of those attacks, select one enemy unit within 6" of your unit. That enemy unit must take a **Battle-shock** **test**. If the enemy WARLORD was destroyed as a result of those attacks, each enemy unit within 6" of your unit must take a Battle-shock test instead.',
      },
    },
    {
      name: "DELAYED MUTATIONS",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit (excluding **DAMNED** units) from your army.",
        effect: "Your unit suffers D3 **mortal** **wounds**. Then select one augmentation (see **Experimental** **Augmentations**). Until the start of your next Command phase, models in your unit have the selected augmentation in addition to any other augmentations they have.",
      },
    },
    {
      name: "DIABOLIC REGENERATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit (excluding **DAMNED** units) from your army.",
        effect: "One destroyed model (excluding **CHARACTER** models) is returned to your unit. If your unit is a **BATTLELINE** unit, D3 destroyed models (excluding CHARACTER models) are returned to your unit instead.",
      },
    },
    {
      name: "AUTOSTIMULANTS",
      cp: "1 CP",
      rules: {
        when: "Start of your Charge phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
  ],

  "Nightmare Hunt": [
    {
      name: "TALONS SUNK DEEP",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is **Battle-shocked** and/or **Below** **Half-strength**, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "PREY ON THE WEAK",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is **Battle-shocked** and/or **Below** **Half-strength**, you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "SADISTIC DISPLAY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a HERETIC ASTARTES unit from your army destroys an enemy unit.",
        target: "That HERETIC ASTARTES unit.",
        effect: 'Each enemy unit within 6" of and visible to your unit (excluding MONSTER and VEHICLE units) must take a **Battle-shock** **test**.',
      },
    },
    {
      name: "MALICIOUS SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "RELENTLESS TERROR",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **HERETIC** **ASTARTES** **INFANTRY** unit from your army **Falls** **Back**.",
        target: "That HERETIC ASTARTES unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "HORRIFIC INCURSION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One HERETIC ASTARTES unit from your army that arrived from Reserves this turn.",
        effect: 'Select one enemy unit (excluding MONSTER and VEHICLE units) within 12" of and visible to your unit: that unit must take a **Battle-shock** **test**, subtracting 1 from the result.',
      },
    },
  ],

  "Huron’s Marauders": [
    {
      name: "HARDENED KILLERS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **DAMNED** unit from your army.",
        effect: "Select one of the following effects:Improve the Ballistic Skill characteristic of ranged weapons equipped by models in this unit by 1.Improve the Attacks characteristic of **Rapid** **Fire** **weapons** equipped by models in this unit by 1.Improve the Save characteristic of models in this unit by 1.Until the start of your next turn, your unit has the benefit of that effect.",
      },
    },
    {
      name: "AT THE TYRANT’S COMMAND",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One HERETIC ASTARTES unit (excluding **MONSTERS** and **VEHICLES**) from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "SEIZE THE PRIZE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a HERETIC ASTARTES unit (excluding **MONSTERS** and **VEHICLES**) from your army has been selected to **Advance**.",
        target: "That HERETIC ASTARTES unit.",
        effect: 'Do not make an **Advance** **roll** for your unit. Instead, until the end of the phase add 6" to the Move characteristic of models in your unit.',
      },
    },
    {
      name: "REAVERS’ FLURRY",
      cp: "1 CP",
      rules: {
        when: "Your Fight phase.",
        target: "One HERETIC ASTARTES unit from your army that made a **Charge** **move** this turn.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristics of melee weapons equipped by models in your unit.",
      },
    },
    {
      name: "TO THE FAVOURED THE SPOILS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One HERETIC ASTARTES unit from your army that lost one or more wounds as a result of those attacks.",
        effect: "Your unit can make a Surge move. To do so, roll one D6: models in your unit move a number of inches up to the result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within **Engagement** **Range** of that enemy unit.",
      },
    },
    {
      name: "ENCIRCLING SURGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: 'One HERETIC ASTARTES unit (excluding **MONSTERS** and **VEHICLES**) from your army that is within 6" of one or more battlefield edges and not within **Engagement** **Range** of one or more enemy units.',
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Renegade Warband": [
    {
      name: "NEVER OUTGUNNED",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One HERETIC ASTARTES unit from your army that has just been selected to shoot or fight.",
        effect: "Select either the **[LETHAL** **HITS]** or **[SUSTAINED** **HITS** **1]** ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability.",
      },
    },
    {
      name: "VENGEFUL DESTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **HERETIC** **ASTARTES** **INFANTRY** (excluding **DAMNED** units) or **HERETIC** **ASTARTES** **MOUNTED** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time your unit makes an attack that targets your **Vendetta** target, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "UNDYING HATRED",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "RENEGADE CLAIM",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase",
        target: "One HERETIC ASTARTES unit from your army within range of an **objective** **marker** you control.",
        effect: "That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "CORRUPTED MUNITIONS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One HERETIC ASTARTES unit in your army that has just been selected to shoot.",
        effect: "Until the end of the phase, each time a model in this unit makes a ranged attack, improve the Armour Penetration of that attack by 1.",
      },
    },
    {
      name: "REAVERS’ REACTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One HERETIC ASTARTES unit (excluding **MONSTERS** and **VEHICLES**) from your army that was hit by one or more of those attacks.",
        effect: 'Your unit can make a **Normal** **move** of up to D6".',
      },
    },
  ],

  "Warpstrike Champions": [
    {
      name: "EMPYRIC DISLOCATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One HERETIC ASTARTES unit from your army (excluding **DAMNED** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.<br><br>**Restrictions:** You cannot target the same unit with the Empyric Dislocation and Armour of Corruption Stratagems in the same phase.",
      },
    },
    {
      name: "ARMOUR OF CORRUPTION",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** **TERMINATOR**, **OBLITERATORS** or **MUTILATORS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.<br><br>**Restrictions:** You cannot target the same unit with the Armour of Corruption and Empyric Dislocation Stratagems in the same phase.",
      },
    },
    {
      name: "WARP FLICKER",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **HERETIC** **ASTARTES** **TERMINATOR**, **OBLITERATORS** or **MUTILATORS** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "WARP-TAINTED",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **HERETIC** **ASTARTES** **TERMINATOR**, **OBLITERATORS** or **MUTILATORS** unit from your army, within range of an **objective** **marker** you control.",
        effect: "That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "SIEGEBREAKER STRIKE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "Up to two HERETIC ASTARTES units from your army that were set up using the **Deep** **Strike** ability this turn and have not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your units have the **[IGNORES** **COVER]** ability.",
      },
    },
    {
      name: "PORTAL OF SPITE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One HERETIC ASTARTES unit from your army that was set up using the **Deep** **Strike** ability this turn and has not **declared** **a** **charge** this phase.",
        effect: "Until the end of the phase, each time your unit declares a charge, if the closest eligible enemy unit is selected as one of the targets of that charge, add 2 to the **Charge** **roll**.",
      },
    },
  ],

  "Cult of the Arkifane": [
    {
      name: "TOUCH OF THE ARKIFANE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One HERETIC ASTARTES unit from your army (excluding **DAMNED** units) that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, if your unit is selected to make a **Dark** **Pact**, you can select both abilities for that unit’s weapons to gain.",
      },
    },
    {
      name: "BALEFIRE BOON",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **SOUL** **FORGE** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SOUL-TALLY OFFERING",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **SOUL** **FORGE** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a CHARACTER, MONSTER or VEHICLE unit, you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "BIOMECHANOID REGENERATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One HERETIC ASTARTES unit from your army (excluding **DAMNED** units).",
        effect: "One model in your unit regains up to D3 lost wounds. If your unit has the **SOUL** **FORGE** keyword, one model in your unit regains up to 3 lost wounds instead.",
      },
    },
    {
      name: "FORGE-FIRE SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a HERETIC ASTARTES unit from your army **Advances**.",
        target: "That HERETIC ASTARTES unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced. If your unit has the **SOUL** **FORGE** keyword, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced instead.",
      },
    },
    {
      name: "UNHOLY FORTITUDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **SOUL** **FORGE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, add 1 to the Toughness characteristic of models in your unit.",
      },
    },
  ],

  "Virulent Vectorium": [
    {
      name: "PUTRID DETONATION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **DEATH** **GUARD** **VEHICLE** or **DEATH** **GUARD** **MONSTER** model from your army with the **Deadly** **Demise** ability that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Do not roll one D6 to determine whether **mortal** **wounds** are inflicted by your model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted. In addition, any enemy units that suffer mortal wounds as a result of this Stratagem are Afflicted until the start of your next turn.",
      },
    },
    {
      name: "DISGUSTINGLY RESILIENT",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DEATH** **GUARD** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "PLAGUESURGE",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "Your **DEATH** **GUARD** WARLORD that is on the battlefield.",
        effect: 'Until the start of your next Command phase, add 3" to the **Contagion** **Range** of models from your army.',
      },
    },
    {
      name: "LEECHSPORE ERUPTION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **DEATH** **GUARD** model your army that has lost one or more wounds.",
        effect: 'Select one enemy unit within 3" of your model. Roll a number of D6 equal to the number of wounds your model has lost: for each 5+, that enemy unit suffers one **mortal** **wound** (to a maximum of 6 mortal wounds) and your model regains 1 lost wound (to a maximum of 6 lost wounds).',
      },
    },
    {
      name: "OVERWHELMING GENEROSITY",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One **DEATH** **GUARD** **CHARACTER** unit from your army.",
        effect: "Select one enemy unit visible to your unit. Until the end of the phase, each time a DEATH GUARD unit from your army selects that enemy unit as the target of any ranged attacks, you can re-roll the dice to determine how many attacks a weapon equipped by a model in that unit makes.",
      },
    },
    {
      name: "CREEPING BLIGHT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DEATH** **GUARD** **INFANTRY** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an **Afflicted** unit, you can re-roll the **Hit** **roll** and you can re-roll the **Wound** **roll**.",
      },
    },
  ],

  "Mortarion’s Hammer": [
    {
      name: "BLIGHTED LAND",
      cp: "2 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One **DEATH** **GUARD** **VEHICLE** unit from your army.",
        effect: 'Select one terrain feature within 24" of and visible to your unit. Until the start of your next turn, enemy units are **Afflicted** while they are within 3" of that terrain feature.',
      },
    },
    {
      name: "RELENTLESS GRIND",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **DEATH** **GUARD** **VEHICLE** unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a **Normal**, **Advance** or **Charge** **move**, it can move horizontally through terrain features.",
      },
    },
    {
      name: "DRAWN TO DESPAIR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DEATH** **GUARD** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a visible enemy unit (excluding AIRCRAFT) within your opponent’s deployment zone, you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "FONT OF FILTH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DEATH** **GUARD** **VEHICLE** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[ASSAULT]** ability.",
      },
    },
    {
      name: "EYESTINGER STORM",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One **DEATH** **GUARD** **VEHICLE** unit from your army.",
        effect: "Select one **objective** **marker** visible to one or more models in your unit. Each **Afflicted** enemy unit within range of that objective marker must take a **Battle-shock** **test**. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.",
      },
    },
    {
      name: "STINKING MIRE",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One **DEATH** **GUARD** **VEHICLE** unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit selects your unit as the target of a charge, subtract 2 from the **Charge** **roll** (this is not cumulative with any other negative modifiers to that Charge roll).",
      },
    },
  ],

  "Champions of Contagion": [
    {
      name: "BLESSINGS OF FILTH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **DEATH** **GUARD** **Attached** **unit** from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified **Hit** **roll** of 5+ scores a **Critical** **Hit**.",
      },
    },
    {
      name: "MALIGNANCE MAGNIFIED",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **DEATH** **GUARD** **Attached** **unit** from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its **Starting** **Strength**, you can re-roll the **Hit** **roll** and you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "GROTESQUE FORTITUDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **DEATH** **GUARD** **Attached** **unit** from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, add 2 to the Toughness characteristic of models in your unit.",
      },
    },
    {
      name: "RABID INFUSION",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One **DEATH** **GUARD** unit from your army that includes two **CHARACTER** models.",
        effect: "Until the end of the phase, your unit has the **Fights** **First** ability.",
      },
    },
    {
      name: "MOBILE VECTOR",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, before the Reinforcements step.",
        target: "One **DEATH** **GUARD** **CHARACTER** unit from your army that is not leading a unit.",
        effect: 'Select one other friendly **DEATH** **GUARD** unit (excluding **Battle-shocked** units and **Attached** **units** that already have two **Leader** units or one of your CHARACTER units leading it] within 2" horizontally and 5" vertically of your unit that your unit can lead (as described in the Leader section of its datasheet]. Your unit attaches to that unit as a Leader. Change that unit’s **Starting** **Strength** accordingly.',
      },
    },
    {
      name: "DEATH’S HEADS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **BIOLOGUS** **PUTRIFIER** unit from your army that is not within **Engagement** **Range** of one or more enemy units and has not been selected to shoot this phase.",
        effect: 'Select one enemy unit (excluding VEHICLES) that is within 8" of and visible to your unit. Until the start of your next turn, that unit has the effect of all Plagues (see **Nurgle’s** **Gift**).',
      },
    },
  ],

  "Tallyband Summoners": [
    {
      name: "PERSISTENT PESTS",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **NURGLINGS** unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
        effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its **Starting** **Strength** and with its full wounds remaining.<br><br>**Restrictions:** You can only use this Stratagem once per battle.",
      },
    },
    {
      name: "CLUTCHING CORRUPTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **DEATH** **GUARD** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that is within **Engagement** **Range** of one or more **PLAGUE** **LEGIONS** units from your army, you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "ALL IS ROT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **PLAGUE** **LEGIONS** unit from your army that is within **Engagement** **Range** of one or more enemy units.",
        effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model’s unit is within Engagement Range of your unit, roll one D6: on a 5+, your unit suffers 1 **mortal** **wound** after the attacking unit has finished making its attacks.",
      },
    },
    {
      name: "FLESHY AVALANCHE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **PLAGUE** **LEGIONS** **MONSTER** unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a **Normal**, **Advance** or **Charge** **move**, it can move horizontally through terrain features.",
      },
    },
    {
      name: "AVATARS OF DECAY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **PLAGUE** **LEGIONS** unit from your army.",
        effect: 'Until the end of the phase, while an enemy unit is within 6" of your unit, that enemy unit is **Afflicted**.',
      },
    },
    {
      name: "MIRESLICK",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit (excluding MONSTERS and VEHICLES) is selected to **Fall** **Back**.",
        target: "One **PLAGUE** **LEGIONS** unit from your army that is within **Engagement** **Range** of that enemy unit.",
        effect: "Until the end of the phase, while an enemy unit is within Engagement Range of your unit, each time that unit is selected to Fall Back, it must take a **Leadership** **test**. If that test is failed, that unit must **Remain** **Stationary** this phase instead.",
      },
    },
  ],

  "Shamblerot Vectorium": [
    {
      name: "GRIP OF THE WALKING POX",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **POXWALKERS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "After the attacking unit has fought, roll one D6 for each model from your unit that was destroyed as a result of those attacks: on a 6, the attacking unit suffers 1 **mortal** **wound**. If your unit is not destroyed after the attacking unit has fought, enemy models destroyed as a result of this Stratagem count as enemy models destroyed by an attack made by a model in your unit for the purposes of the Curse of the Walking Pox ability.",
      },
    },
    {
      name: "SMEARED WITH FILTH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **POXWALKERS** unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
        effect: "Select one enemy unit that made one or more attacks that targeted your unit this phase. Until the end of the battle, that enemy unit is **Afflicted**.",
      },
    },
    {
      name: "GNAWING HUNGER",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **POXWALKERS** unit from your army.",
        effect: "Until the end of the turn, add 1 to the Move characteristic of models in your unit, and add 1 to the Attacks and Strength characteristics of melee weapons equipped by models in your unit.",
      },
    },
    {
      name: "HIDDEN AMONGST THE DEAD",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your Movement phase.",
        target: "One **POXWALKERS** unit from your army that is in Strategic Reserves and that is not an **Attached** **unit**.",
        effect: "Until the end of the phase, models in that unit have the **Deep** **Strike** ability.",
      },
    },
    {
      name: "SHOCK AND HORROR",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **DEATH** **GUARD** unit from your army ends a **Charge** **move**.",
        target: "That DEATH GUARD unit.",
        effect: "Each enemy unit within **Engagement** **Range** of your unit must take a **Battle-shock** **test**, subtracting 1 from that test.",
      },
    },
    {
      name: "SHAMBLING WALL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: 'One **DEATH** **GUARD** unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly **POXWALKERS** unit within 3" of your unit and visible to both your unit and the attacking unit.',
        effect: "Until the end of the phase, each time you would allocate an attack to a model in your DEATH GUARD unit, if your POXWALKERS unit is visible to the attacking model and is an eligible target for that attack, no **saving** **throw** is made for that attack; instead a number of POXWALKERS from your POXWALKERS unit equal to the Damage characteristic of that attack are destroyed.",
      },
    },
  ],

  "Death Lord’s Chosen": [
    {
      name: "BLOOMING PESTILENCE",
      cp: "1 CP",
      rules: {
        when: "Start of any phase.",
        target: "One **TERMINATOR** unit from your army.",
        effect: 'Until the end of the phase, add 3" to the **Contagion** **Range** of models in your unit.',
      },
    },
    {
      name: "GRIM REAPERS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **TERMINATOR** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit (excluding MONSTERS and VEHICLES) you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "UNDYING SPITE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **TERMINATOR** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SIGNAL POX",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **LORD** OF **VIRULENCE** model from your army.",
        effect: 'Select one **objective** **marker** within 30" of and visible to your model. Until the start of your next turn, while an enemy unit is within range of that objective marker, that unit is **Afflicted**.',
      },
    },
    {
      name: "MORTARION'S TEACHINGS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **TERMINATOR** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[ASSAULT]** and **[HEAVY]** abilities.",
      },
    },
    {
      name: "SICKENING IMPACT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **TERMINATOR** unit from your army ends a **Charge** **move**.",
        target: "That TERMINATOR unit.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 2+, that enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds).",
      },
    },
  ],

  "Flyblown Host": [
    {
      name: "NAUSEATING PAROXYSMS",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One **DEATH** **GUARD** **INFANTRY** unit from your army that is within **Engagement** **Range** of one or more enemy units.",
        effect: "Select one enemy unit within Engagement Range of your unit. That unit must take a **Battle-shock** **test**, subtracting 1 from the result.",
      },
    },
    {
      name: "VERMIN CLOUD",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **DEATH** **GUARD** **INFANTRY** unit from your army that has not been selected to fight this phase.",
        effect: 'Until the end of the phase, each time a model in this unit makes a **Pile-in** or **Consolidation** **move**, it can move up to 6" instead of up to 3".',
      },
    },
    {
      name: "EYE OF THE SWARM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DEATH** **GUARD** **INFANTRY** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit (excluding **Blast** **weapons**) have the **[PISTOL]** ability.",
      },
    },
    {
      name: "DRONING HORROR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **DEATH** **GUARD** **INFANTRY** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack, re-roll a **Hit** **roll** of 1. If that attack targets a unit within half range, you can re-roll the Hit roll instead.",
      },
    },
    {
      name: "ENERVATING ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a DEATH GUARD INFANTRY unit from your army makes a **Charge** **move**.",
        target: "That **DEATH** **GUARD** **INFANTRY** unit.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit (excluding MONSTERS and VEHICLES). Roll one D6 for each model in your unit that is within Engagement Range of that unit, adding 1 to the result if that model is not a **CULTIST** or **POXWALKER** model: for each 5+, the selected enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "MYPHITIC INVIGORATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: 'One **DEATH** **GUARD** **INFANTRY** unit from your army that is within 6" of one or more friendly **MYPHITIC** **BLIGHT-HAULER** units and that was selected as the target of one or more of the attacking unit’s attacks.',
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the **Wound** **roll**.",
      },
    },
  ],

  "Mercurial Host": [
    {
      name: "VIOLENT EXCESS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, **melee** **weapons** equipped by models in your unit have the **[SUSTAINED** **HITS** **1]** ability.",
      },
    },
    {
      name: "COMBAT STIMMS",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **EMPEROR’S** **CHILDREN** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "HONOUR THE PRINCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **EMPEROR’S** **CHILDREN** **INFANTRY** unit from your army that has not been selected to move this phase.",
        effect: 'Until the end of the phase, if your unit Advances, do not make an **Advance** **roll**. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
      },
    },
    {
      name: "DARK VIGOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **EMPEROR’S** **CHILDREN** unit from your army (excluding **BEASTS** and **VEHICLES**) that is within 9" of the enemy unit that just ended that move.',
        effect: 'Your unit can make a **Normal** **move** of up to 6".',
      },
    },
    {
      name: "CAPRICIOUS REACTIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "CRUEL RAIDERS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: 'One **EMPEROR’S** **CHILDREN** unit from your army that is wholly within 9" of one or more battlefield edges and not within 3" horizontally of one or more enemy units.',
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Peerless Bladesmen": [
    {
      name: "DEFT PARRY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "DEATH ECSTASY",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "INCESSANT VIOLENCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an **EMPEROR’S** **CHILDREN** unit from your army **Consolidates**.",
        target: "That EMPEROR’S CHILDREN unit.",
        effect: 'Until the end of the phase, each time a model in your unit makes a **Consolidation** **move**, it can move up to 6" instead of up to 3", provided your unit ends that Consolidation move within **Engagement** **Range** of one or more enemy units.',
      },
    },
    {
      name: "CRUEL BLADESMAN",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that made a **Charge** **move** this turn and has not been selected to fight this phase.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1.",
      },
    },
    {
      name: "TERRIFYING SPECTACLE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that made a **Charge** **move** in the previous turn and destroyed one or more enemy units in the previous Fight phase.",
        effect: 'Each enemy unit within 6" of your unit must take a **Battle-shock** **test**, subtracting 1 from that test if they are **Below** **Half-strength**. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.',
      },
    },
    {
      name: "CUT DOWN THE WEAK",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit **Falls** **Back**.",
        target: 'One **EMPEROR’S** **CHILDREN** unit from your army (you can only select a **VEHICLE** if it is a **WALKER**) that is within 6" of that enemy unit and would be eligible to declare a charge against that enemy unit if it were your Charge phase.',
        effect: "Your unit can declare a charge. When doing so, you must select that enemy unit as a target of that charge, and your unit does not receive a **Charge** **bonus** this turn.",
      },
    },
  ],

  "Rapid Evisceration": [
    {
      name: "ONTO THE NEXT",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that destroyed an enemy unit this phase, and one friendly **TRANSPORT** it is able to **embark** within.",
        effect: 'If your EMPEROR’S CHILDREN unit is wholly within 6" of that TRANSPORT, it can embark within it.',
      },
    },
    {
      name: "ADVANCE AND CLAIM",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **EMPEROR’S** **CHILDREN** **TRANSPORT** from your army that has one or more **TORMENTORS** units **embarked** within it (excluding **Battle-shocked** units).",
        effect: "Select one **objective** **marker** you control that your TRANSPORT is within range of. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "DYNAMIC BREAKTHROUGH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **EMPEROR’S** **CHILDREN** **VEHICLE** unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through enemy models (excluding MONSTERS and VEHICLES). When doing so, it can move within **Engagement** **Range** of such models but cannot end that move within Engagement Range of them, and any **Desperate** **Escape** **test** is automatically passed.",
      },
    },
    {
      name: "CEASELESS ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that **disembarked** from a **TRANSPORT** that made a **Normal** **move** this turn.",
        effect: "Until the end of the phase, your EMPEROR’S CHILDREN unit is eligible to declare a charge.",
      },
    },
    {
      name: "REACTIVE DISEMBARKATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **EMPEROR’S** **CHILDREN** **TRANSPORT** from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: 'One **EMPEROR’S** **CHILDREN** unit embarked within your TRANSPORT can **disembark**. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6" of that TRANSPORT and not within **Engagement** **Range** of one or more enemy units.',
      },
    },
    {
      name: "OUTFLANKING STRIKE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **EMPEROR’S** **CHILDREN** **TRANSPORT** from your army, or up to two **EMPEROR’S** **CHILDREN** **DEDICATED** **TRANSPORTS** from your army.",
        effect: 'For each of those TRANSPORTS wholly within 9" of one or more battlefield edges, remove it from the battlefield and place it into Strategic Reserves.',
      },
    },
  ],

  "Carnival of Excess": [
    {
      name: "SUSTAINED BY AGONY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an **EMPEROR’S** **CHILDREN** unit from your army destroys an enemy unit.",
        target: "That EMPEROR’S CHILDREN unit.",
        effect: 'Select one friendly **LEGIONS** OF **EXCESS** unit within 6" of your unit. One model in that LEGIONS OF EXCESS unit recovers up to 3 lost wounds or, if it is a **DAEMONETTES** unit, return upto D3+3 destroyed models to it instead.',
      },
    },
    {
      name: "ECSTATIC SLAUGHTER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a LEGIONS OF EXCESS unit from your army destroys an enemy unit.",
        target: 'That **LEGIONS** OF **EXCESS** unit and one friendly **EMPEROR’S** **CHILDREN** unit within 6" of it that is not within **Engagement** **Range** of one or more enemy units.',
        effect: "Your EMPEROR’S CHILDREN unit can declare a charge. If it does so and it has already been selected to fight this phase, it cannot fight again this phase.",
      },
    },
    {
      name: "VIOLENT CRESCENDO",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One **SLAANESH** **BEASTS**, **SLAANESH** **INFANTRY** or **SLAANESH** **MOUNTED** unit from your army that has not been selected to fight this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes a **Pile-in** or **Consolidation** **move**, it can move up to 6" instead of up to 3". When doing so, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit.',
      },
    },
    {
      name: "SYCOPHANTIC SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **LEGIONS** OF **EXCESS** unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it **Advanced** or **Fell** **Back**, provided at least one of the targets of that charge is within **Engagement** **Range** of one or more **EMPEROR’S** **CHILDREN** units from your army.",
      },
    },
    {
      name: "UNCANNY REACTIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **SLAANESH** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "DARK APPARITIONS",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **DAEMONETTES** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: 'Remove your unit from the battlefield and place it into Strategic Reserves. If it arrives back on the battlefield in the Reinforcements step of your next Movement phase using the **Deep** **Strike** ability, it can be set up anywhere that is more than 6" horizontally away from all enemy units (instead of more than 9"), provided it is also set up wholly within 9" of one or more friendly **EMPEROR’S** **CHILDREN** units.',
      },
    },
  ],

  "Coterie of the Conceited": [
    {
      name: "PROTECTION OF THE DARK PRINCE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **mortal** **wound** or attack is allocated to a model in an **EMPEROR’S** **CHILDREN** unit from your army.",
        target: "That EMPEROR’S CHILDREN unit.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **6+** ability, and the **Feel** **No** **Pain** **4+** ability against **mortal** **wounds**.",
      },
    },
    {
      name: "UNSHAKEABLE OPPONENTS",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army.",
        effect: "Until the end of the turn, each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack’s Ballistic Skill or Weapon Skill characteristic; the **Hit** **roll**; the **Wound** **roll**.",
      },
    },
    {
      name: "EMBRACE THE PAIN",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One **EMPEROR’S** **CHILDREN** **INFANTRY** unit from your army.",
        effect: "Until the end of the phase, each time an enemy model within **Engagement** **Range** of your unit selects targets, it must select your unit as the target of its attacks.",
      },
    },
    {
      name: "MARTIAL PERFECTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "UNBOUND ARROGANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after an **EMPEROR’S** **CHILDREN** unit from your army destroys an enemy unit.",
        target: "That EMPEROR’S CHILDREN unit.",
        effect: "Increase your **pledge** **to** **Slaanesh** by 1.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "ARMOUR OF ABHORRENCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets a model in your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
  ],

  "Slaanesh’s Chosen": [
    {
      name: "DEVOTED DUELLISTS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One or more **EMPEROR’S** **CHILDREN** **CHARACTER** units from your army that have not been selected to fight this phase.",
        effect: "Select one enemy unit. Until the end of the phase, melee weapons equipped by models in those CHARACTER units have the **[SUSTAINED** **HITS** **1]** ability while targeting that enemy unit.",
      },
    },
    {
      name: "BEAUTIFUL DEATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **EMPEROR’S** **CHILDREN** **CHARACTER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit is your army’s **Favoured** **Champions**. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "HEIGHTENED JEALOUSY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after an **EMPEROR’S** **CHILDREN** **CHARACTER** unit becomes your army’s **Favoured** **Champions**, or just after your army’s Favoured Champions unit destroys an enemy unit.",
        target: "Your army’s **Favoured** **Champions** unit.",
        effect: "Until the end of the phase, each time a model in an EMPEROR’S CHILDREN CHARACTER unit from your army that is not your army’s Favoured Champions makes an attack, add 1 to the Strength characteristic of that attack.",
      },
    },
    {
      name: "DIABOLIC MAJESTY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after an **EMPEROR’S** **CHILDREN** **CHARACTER** unit becomes your army’s **Favoured** **Champions**.",
        target: "That EMPEROR’S CHILDREN unit.",
        effect: 'Each enemy unit within 6" of your unit must take a **Battle-shock** **test**, subtracting 1 from the result.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.',
      },
    },
    {
      name: "REFUSAL TO BE OUTDONE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **EMPEROR’S** **CHILDREN** **CHARACTER** unit from your army.",
        effect: "Select one enemy unit within **Engagement** **Range** of one or more units from your army. Until the end of the phase, each time your unit **declares** **a** **charge**, if that enemy unit is one of the targets of that charge, add 2 to the **Charge** **roll**.",
      },
    },
    {
      name: "VENGEFUL SURGE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **EMPEROR’S** **CHILDREN** **CHARACTER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "After the attacking unit has shot, your unit can make a Surge move. To do so, roll one D6: each model in your unit can move a distance in inches up to the result, but your unit must end that move as close as possible to the closest enemy unit. When doing so, those models can be moved within **Engagement** **Range** of that enemy unit. If your unit is not your army’s **Favoured** **Champions**, you can re-roll the dice to determine the distance of its Surge move.",
      },
    },
  ],

  "Court of the Phoenician": [
    {
      name: "CONTEMPTUOUS DISREGARD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "PRIDEFUL SUPERIORITY",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a CHARACTER unit, you can re-roll the **Hit** **roll** and you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "SINUOUS BREACH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **EMPEROR’S** **CHILDREN** **DAEMON** unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a **Normal**, **Advance** or **Charge** **move**, it can move horizontally through terrain features.",
      },
    },
    {
      name: "CLOSE-QUARTERS EXCRUCIATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, each time an EMPEROR’S CHILDREN model in your unit makes an attack that targets an eligible unit within 12", improve the Strength and Armour Penetration characteristics of that attack by 1.',
      },
    },
    {
      name: "EUPHORIC INSPIRATION",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **EMPEROR’S** **CHILDREN** **DAEMON** unit from your army.",
        effect: 'Until the end of the phase, you can re-roll **Charge** **rolls** for friendly **EMPEROR’S** **CHILDREN** units within 6" of your unit.',
      },
    },
    {
      name: "CATALYTIC STIMULUS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **EMPEROR’S** **CHILDREN** unit from your army that lost one or more wounds as a result of those attacks.",
        effect: "Your unit can make a Stimulus move. To do so, roll one D6: models in your unit move a number of inches up to the result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within **Engagement** **Range** of that enemy unit.",
      },
    },
  ],

  "Host of Ascension": [
    {
      name: "COORDINATED TRAP",
      cp: "2 CP",
      rules: {
        when: "The start of your Shooting phase or the start of the Fight phase.",
        target: "Two GENESTEALER CULTS units from your army that have not been selected to shoot or fight this phase.",
        effect: "Select one enemy unit (if this Stratagem is used in the Fight phase, that enemy unit must be within **Engagement** **Range** of both of your units). Until the end of the phase, each time a model in either of your units makes an attack, it can only target that enemy unit (and only if it is an eligible target for that attack), and when resolving that attack, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "PRIMED AND READIED",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One GENESTEALER CULTS units from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, a **Critical** **Hit** is scored on an unmodified **Hit** **roll** of 5+, instead of only a 6.",
      },
    },
    {
      name: "TUNNEL CRAWLERS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One GENESTEALER CULTS unit from your army that is arriving using the **Deep** **Strike** ability this phase.",
        effect: 'Your unit can be set up anywhere on the battlefield that is more than 6" horizontally away from all enemy units.<br><br>**Restrictions:** A unit targeted by this Stratagem is not eligible to declare a charge in the same turn.',
      },
    },
    {
      name: "LYING IN WAIT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase.",
        target: "One **GENESTEALER** **CULTS** **BATTLELINE** unit from your army in **Cult** **Ambush**.",
        effect: 'Until the end of the phase, when setting your unit up using a Cult Ambush marker, set your unit up anywhere on the battlefield wholly within 6" of that Cult Ambush marker and not within **Engagement** **Range** of one or more enemy units.',
      },
    },
    {
      name: "RETURN TO THE SHADOWS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **GENESTEALER** **CULTS** **INFANTRY** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
    {
      name: "A DEADLY SNARE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit **declares** **a** **charge**.",
        target: "One **GENESTEALER** **CULTS** **INFANTRY** unit from your army that was selected as a target of that charge.",
        effect: "Roll one D6: on a 2-4, that enemy unit suffers D3 **mortal** **wounds**; on a 5+, that enemy unit suffers 3 mortal wounds.",
      },
    },
  ],

  "Xenocreed Congregation": [
    {
      name: "VENGEANCE FOR THE MARTYR!",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit destroys a **GENESTEALER** **CULTS** **CHARACTER** model from your army.",
        target: "One other GENESTEALER CULTS CHARACTER model from your army.",
        effect: "Until the end of the battle, each time a friendly **ACOLYTE** **HYBRIDS**, Hybrid Metamorphs or Neophyte Hybrids model makes an attack that targets that enemy unit, re-roll a **Hit** **roll** of 1. If the **destroyed** model was a **MAGUS**, **PRIMUS** or **ACOLYTE** **ICONWARD**, you can re-roll the Hit roll instead.",
      },
    },
    {
      name: "FRENZIED DEVOTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ACOLYTE** **HYBRIDS**, **HYBRID** **METAMORPHS** or **NEOPHYTE** **HYBRIDS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, improve the Attacks and Weapon Skill characteristics of melee weapons equipped by models (excluding **CHARACTERS**) in your unit by 1 and those weapons have the **[HAZARDOUS]** ability.",
      },
    },
    {
      name: "TIRELESS FERVOUR",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **ACOLYTE** **HYBRIDS**, **HYBRID** **METAMORPHS** or **NEOPHYTE** **HYBRIDS** unit from your army that has not **declared** **a** **charge** this phase.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it **Advanced** or **Fell** **Back**. When doing so, if it targets an enemy unit within **Engagement** **Range** of one or more friendly **CHARACTER** units, you can re-roll the **Charge** **roll**.",
      },
    },
    {
      name: "TRANSCENDENT CELERITY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ACOLYTE** **HYBRIDS**, **HYBRID** **METAMORPHS** or **NEOPHYTE** **HYBRIDS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[ASSAULT]** ability.",
      },
    },
    {
      name: "THE DOWNTRODDEN RISE",
      cp: "2 CP",
      rules: {
        when: "End of the Reinforcements step of your opponent’s Movement phase.",
        target: "One **ACOLYTE** **HYBRIDS**, **HYBRID** **METAMORPHS** or **NEOPHYTE** **HYBRIDS** unit from your army in **Cult** **Ambush**.",
        effect: 'Until the end of the phase, you can set up your unit on the battlefield without using a Cult Ambush marker. When doing so, set up your unit anywhere on the battlefield that is more than 6" horizontally away from all enemy units.',
      },
    },
    {
      name: "THE PATH OF ANGUISH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **ACOLYTE** **HYBRIDS** or **NEOPHYTE** **HYBRIDS** unit from your army that had one or more of its models **destroyed** as a result of the attacking unit's attacks.",
        effect: 'Your unit can make a move of up to D6", but it unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT), When doing so, models in your unit can be moved within **Engagement** **Range** of that enemy unit.',
      },
    },
  ],

  "Biosanctic Broodsurge": [
    {
      name: "EVASIVE VANGUARD",
      cp: "1 CP",
      rules: {
        when: 'Any phase, just after an enemy unit ends a move within 9" of one or more of your **Cult** **Ambush** markers, before removing those markers from the battlefield.',
        target: "Select one of those Cult Ambush markers.",
        effect: 'You can set up that Cult Ambush marker anywhere on the battlefield that is more than 9" horizontally away from all enemy units.',
      },
    },
    {
      name: "SAINTLY PAROXYSM",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit destroys a **GENESTEALER** **CULTS** **CHARACTER** model from your army.",
        target: "That **destroyed** CHARACTER model. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Roll one D6: on a 2+, that enemy unit suffers D3 **mortal** **wounds**. If that Character model is an **ABOMINANT** or **PATRIARCH**, that enemy unit suffers 2D3 mortal wounds instead.",
      },
    },
    {
      name: "GENE-TWISTED MUSCLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ABERRANTS**, **BIOPHAGUS** or **PURESTRAIN** **GENESTEALERS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "HYPER-METABOLIC VIGOUR",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ABERRANTS**, **BIOPHAGUS** or **PURESTRAIN** **GENESTEALERS** unit from your army that has not been selected to fight this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes a **Pile-in** or **Consolidation** **move**, it can move up to 6" instead of up to 3". In addition, it does not need to end that move closer to the closest enemy model, provided it ends it as close as possible to the closest enemy unit.',
      },
    },
    {
      name: "STIMULATED BIO-SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **ABERRANTS**, **BIOPHAGUS** or **PURESTRAIN** **GENESTEALERS** unit from your army that has not **declared** **a** **charge** this phase.",
        effect: "Until the end of the phase, each time your unit declares a charge, if the closest eligible enemy unit is selected as one of the targets of that charge, add 1 to the **Charge** **roll** for each selected target of that charge (including the closest eligible enemy unit), to a maximum of +3.",
      },
    },
    {
      name: "BIO-HORROR REVELATION",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent's Shooting phase.",
        target: "One **ABERRANTS**, **BIOPHAGUS** or **PURESTRAIN** **GENESTEALERS** unit from your army.",
        effect: 'Until the end of the phase, each time an enemy unit within 9" of your unit is selected to shoot, it must take a **Leadership** **test**, subtracting 1 from the result. If that test is failed, until the end of the phase, each time a model in that enemy unit makes an attack that targets your unit, subtract 1 from the **Hit** **roll**.',
      },
    },
  ],

  "Outlander Claw": [
    {
      name: "ALONG SHADOWED TRAILS",
      cp: "1 CP",
      rules: {
        when: 'Any phase, just after an enemy unit ends a move within 9" of one or more of your **Cult** **Ambush** markers.',
        target: "Select one of those Cult Ambush markers.",
        effect: 'You can set up that Cult Ambush marker anywhere on the battlefield that is more than 9" horizontally away from all enemy units.',
      },
    },
    {
      name: "DEVOTED CREW",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **GOLIATH** **ROCKGRINDER** or **GOLIATH** **TRUCK** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "CLOSE-RANGE SHOOT-OUT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **GENESTEALER** **CULTS** **MOUNTED** or **GENESTEALER** **CULTS** **VEHICLE** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, ranged weapons equipped by models in your unit have the **[LETHAL** **HITS]** ability while targeting an enemy unit within 18".',
      },
    },
    {
      name: "RAPID FEINT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **ACHILLES** **RIDGERUNNERS** or **ATALAN** **JACKALS** unit from your army that is within 9" of that enemy unit.',
        effect: 'Your unit can make a **Normal** **move** of up to 6".',
      },
    },
    {
      name: "DEFT MANOEUVRING",
      cp: "1 CP",
      rules: {
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ACHILLES** **RIDGERUNNERS** or **ATALAN** **JACKALS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ **invulnerable** **save**.",
      },
    },
    {
      name: "ENCIRCLING THE PREY",
      cp: "1 CP",
      rules: {
        when: "End of your opponent's Fight phase.",
        target: 'One **GENESTEALER** **CULTS** **MOUNTED** or **GENESTEALER** **CULTS** **VEHICLE** unit from your army that is not within **Engagement** **Range** of one or more enemy units and is wholly within 9" of one or more battlefield edges.',
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Brood Brother Auxilia": [
    {
      name: "IN THE SHADOW OF IRON",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit ends a move within 9” of one or more of your **Cult** **Ambush** markers.",
        target: "One **ASTRA** **MILITARUM** **VEHICLE** unit from your army.",
        effect: 'Select one of those Cult Ambush markers. You can set up that Cult Ambush marker anywhere on the battlefield that is more than 9" horizontally away from all enemy units and wholly within 6" of your unit.',
      },
    },
    {
      name: "REGIMENTAL REINFORCEMENTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an **ASTRA** **MILITARUM** **INFANTRY** **REGIMENT** unit from your army (excluding **ARTILLERY** and **CHARACTER** units) is **destroyed**.",
        target: "That INFANTRY unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: 'Roll one D6: on a 3+, place one **Cult** **Ambush** marker anywhere on the battlefield that is more than 9" horizontally away from all enemy units (if this is not possible, no marker is placed) and add a new unit to your army identical to your destroyed unit, in Cult Ambush, at its **Starting** **Strength**, with all of its wounds remaining and any [ONE SHOT] weapons those models are equipped with considered as not having been shot.<br><br>**Restrictions:** You can only use this Stratagem once per battle.',
      },
    },
    {
      name: "SUPPRESS AND OVERWHELM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an **ASTRA** **MILITARUM** unit from your army has shot.",
        target: "That ASTRA MILITARUM unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the turn, that enemy unit cannot be targeted with the **Fire** **Overwatch** Stratagem and each time a GENESTEALER CULTS unit from your army selects that enemy unit as a target of a charge, you can re-roll the **Charge** **roll**.",
      },
    },
    {
      name: "ACCEPTABLE LOSSES",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** unit from your army.",
        effect: "Select one enemy unit within **Engagement** **Range** of one or more GENESTEALER CULTS units from your army. Until the end of the phase, your unit can make ranged attacks that target that enemy unit. If it does, after it has resolved those attacks, roll one D6 for each of those GENESTEALER CULTS units: on a 5+, the unit being rolled for suffers D3+1 **mortal** **wounds**.",
      },
    },
    {
      name: "SYMBIOTIC DESTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** and one GENESTEALER CULTS unit from your army that have not been selected to shoot this phase.",
        effect: "Select one enemy unit that is visible to both of those selected units and within range of at least one ranged weapon from each of those units. Until the end of the phase, models in those units can only make attacks that target that enemy unit (and only if it is an eligible target). When doing so, each time such a model makes an attack, re-roll a **Wound** **roll** of 1.",
      },
    },
    {
      name: "A DARK NETWORK",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your opponent’s Movement phase, just after an enemy unit is set up on the battlefield from Reserves.",
        target: 'One **ASTRA** **MILITARUM** or GENESTEALER CULTS unit from your army (excluding **MONSTERS** and **VEHICLES**) within 12" of that enemy unit.',
        effect: 'Your unit can make a **Normal** **move** of up to 6".',
      },
    },
  ],

  "Final Day": [
    {
      name: "HYPERFEROCITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **GENESTEALER** **CULTS** unit from your army that has not been selected to fight this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, re-roll a **Wound** **roll** of 1. If one or more friendly **TYRANIDS** units are within 6" of that enemy unit, you can re-roll the Wound roll instead.',
      },
    },
    {
      name: "PSI SURGE",
      cp: "1 CP",
      rules: {
        when: "Start of any phase.",
        target: "One **TYRANIDS** unit from your army.",
        effect: 'Until the start of your next Command phase, increase the range of your unit’s Catalyst ability by 3".<br><br>**Restrictions:** Each time you use this Stratagem, until the end of your next Command phase, you cannot use this Stratagem again.',
      },
    },
    {
      name: "AVENGE THE STAR CHILDREN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has shot or fought.",
        target: "One **TYRANIDS** **CHARACTER** unit from your army that was destroyed by that enemy unit this phase. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Until the end of the battle, each time a **GENESTEALER** **CULTS** model from your army makes an attack that targets that enemy unit, add 1 to the **Hit** **roll** and add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "DIVINE IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **GENESTEALER** **CULTS** unit from your army that has not **declared** **a** **charge** this phase.",
        effect: "Select one enemy unit within **Engagement** **Range** of one or more **TYRANIDS** units from your army. Until the end of the phase, each time your GENESTEALER CULTS unit declares a charge, if that enemy unit is one of the targets of that charge, add 1 to **Charge** **rolls** made for your unit and you can re-roll the Charge roll.",
      },
    },
    {
      name: "DARTING ATTACKS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or your Charge phase.",
        target: "One **TYRANIDS** unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to shoot and declare a charge in a turn in which it **Fell** **Back**.",
      },
    },
    {
      name: "RESISTANCE TUNNELS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **GENESTEALER** **CULTS** or **TYRANIDS** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Brotherhood Strike": [
    {
      name: "TRUESILVER CHANNELLING",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, **Psychic** **weapons** equipped by models in your unit have the **[DEVASTATING** **WOUNDS]** ability.",
      },
    },
    {
      name: "COMBAT MANIFESTATION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **GREY** **KNIGHTS** unit from your army that is arriving using the **Deep** **Strike** ability this phase.",
        effect: 'Set your unit up anywhere on the battlefield that is more than 6" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge.',
      },
    },
    {
      name: "PURGATION PATTERN",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **GREY** **KNIGHTS** unit from your army that was set up using the **Deep** **Strike** ability this turn and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the **[SUSTAINED** **HITS** **1]** ability.",
      },
    },
    {
      name: "DUTY UNENDING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit within **Engagement** **Range** of one or more **GREY** **KNIGHTS** units from your army **Falls** **Back**.",
        target: "One of those GREY KNIGHTS units that is not within Engagement Range of one or more enemy units.",
        effect: "If your unit has the **Deep** **Strike** ability, it can be placed into Strategic Reserves.",
      },
    },
    {
      name: "SHINING VEIL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **GREY** **KNIGHTS** unit that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit has the **Stealth** ability.",
      },
    },
    {
      name: "EXPEDITIOUS EXIT",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **GREY** **KNIGHTS** **PSYKER** **INFANTRY** unit from your army.",
        effect: "If every model in your unit has the **Deep** **Strike** ability, remove your unit from the battlefield and place it into Strategic Reserves.Designer’s Note: This Stratagem allows you to remove a unit in addition to those removed using the **Gate** **of** **Infinity** rule, and it allows you to remove a unit within **Engagement** **Range** of one or more enemy units.",
      },
    },
  ],

  "Hallowed Conclave": [
    {
      name: "GIANTS OF THE BATTLEFIELD",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **GREY** **KNIGHTS** **TERMINATOR** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in your unit.",
      },
    },
    {
      name: "UNENDING FIDELITY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not shot or fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can shoot or fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "POINT-BLANK PURGATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, storm bolter weapons equipped by models in your unit have the **[PISTOL]** and **[TWIN-LINKED]** abilities.",
      },
    },
    {
      name: "GRIND THEM UNDERFOOT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **GREY** **KNIGHTS** **TERMINATOR** unit from your army ends a **Charge** **move**.",
        target: "That GREY KNIGHTS unit.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "PRECOGNITIVE STRATEGIES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **GREY** **KNIGHTS** **INFANTRY** unit from your army that is within 9" of that enemy unit and not within **Engagement** **Range** of one or more enemy units.',
        effect: 'Your unit can make a **Normal** **move** of up to D6".',
      },
    },
    {
      name: "SHINING RESOLVE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
  ],

  "Banishers": [
    {
      name: "HEXWROUGHT REPRISAL",
      cp: "1 CP",
      rules: {
        when: "End of any phase.",
        target: "One **GREY** **KNIGHTS** **PSYKER** unit from your army that is on the battlefield and suffered one or more **mortal** **wounds** this phase.",
        effect: "Select one enemy unit which inflicted one or more mortal wounds on your unit this phase, then roll a number of dice equal to the number of mortal wounds your unit suffered this phase: for each 2+, that enemy unit suffers one mortal wound (to a maximum of 6 mortal wounds). These mortal wounds are **Psychic** **Attacks**.",
      },
    },
    {
      name: "WARDING CHANT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **GREY** **KNIGHTS** **PSYKER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability against attacks with an unmodified Damage characteristic of 1.",
      },
    },
    {
      name: "CHAOS BANE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **GREY** **KNIGHTS** **PSYKER** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[ANTI-CHAOS** **4+]** ability.",
      },
    },
    {
      name: "CELERITY",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **GREY** **KNIGHTS** **PSYKER** **INFANTRY** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
    {
      name: "CIRCLE OF SANCTUARY",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Movement phase.",
        target: "One **GREY** **KNIGHTS** **CHARACTER** model from your army.",
        effect: 'Until the end of the phase, enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12" horizontally of your model.',
      },
    },
    {
      name: "SHADOW OF ANARCH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **GREY** **KNIGHTS** **PSYKER** unit from your army that is within 9" of that enemy unit and is not within **Engagement** **Range** of one or more enemy units.',
        effect: 'Your unit can make a **Normal** **move** of up to 6" or, if it has the **Deep** **Strike** ability, it can be placed into Strategic Reserves.',
      },
    },
  ],

  "Sanctic Spearhead": [
    {
      name: "TRUESILVER WILL",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **GREY** **KNIGHTS** **PSYKER** **VEHICLE** unit from your army suffers a **mortal** **wound**.",
        target: "That GREY KNIGHTS PSYKER VEHICLE unit.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **4+** ability against mortal wounds.",
      },
    },
    {
      name: "ABOMINUS-CLASS TARGETS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **GREY** **KNIGHTS** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "ARMOURED AEGIS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **GREY** **KNIGHTS** **PSYKER** **VEHICLE** unit from your army.",
        effect: "One model in your unit regains up to 3 lost wounds.",
      },
    },
    {
      name: "REDOUBLED ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **GREY** **KNIGHTS** **VEHICLE** unit from your army **Falls** **Back**.",
        target: "That GREY KNIGHTS VEHICLE unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "FORCE WAVE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One **GREY** **KNIGHTS** **VEHICLE** unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a **Normal**, **Advance** or **Charge** **move**, it can move horizontally through terrain features.",
      },
    },
    {
      name: "ARGENT WRATH",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **GREY** **KNIGHTS** **VEHICLE** unit from your army ends a **Charge** **move**.",
        target: "That GREY KNIGHTS VEHICLE unit.",
        effect: 'Each enemy unit within 3" of your unit must take a **Battle-shock** **test**, subtracting 1 from that test.',
      },
    },
  ],

  "Augurium Task Force": [
    {
      name: "AGGRESSIVE ANTICIPATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **GREY** **KNIGHTS** **PSYKER** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to that attack’s Weapon Skill or Ballistic Skill characteristics and/or any or all modifiers to the **Hit** **roll**.",
      },
    },
    {
      name: "APPOINTED HOUR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **GREY** **KNIGHTS** **PSYKER** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified **Hit** **roll** of 5+ scores a **Critical** **Hit**.",
      },
    },
    {
      name: "FOREWARNED EVASION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **GREY** **KNIGHTS** **WALKER** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "NECESSARY END",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. If the result is greater than the current battle round number, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "REDIRECTED STRIKE",
      cp: "1 CP",
      rules: {
        when: "End of your Command phase.",
        target: "One **GREY** **KNIGHTS** **PSYKER** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: "If your unit has the **Deep** **Strike** ability, it can be placed into Strategic Reserves.Designer’s Note: This Stratagem lets players utilise abilities that retain control of **objective** **markers** and react to their missions and objectives with this unit.",
      },
    },
    {
      name: "MIRAGE OF ECHOES",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your opponent’s Movement phase, just after an enemy unit is set up.",
        target: 'One **GREY** **KNIGHTS** **PSYKER** unit from your army that is within 12" of that enemy unit and is not within **Engagement** **Range** of one or more enemy units.',
        effect: "If your unit has the **Deep** **Strike** ability, it can be placed into Strategic Reserves.",
      },
    },
  ],

  "Warpbane Task Force": [
    {
      name: "SANCTIFIED KILL ZONE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One GREY KNIGHTS unit from your army that has not been selected to shoot or fight this phase and that is wholly within your army’s **Hallowed** **Ground**.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Wound** **roll** of 1, or, re-roll the Wound roll instead if your unit is a **PURIFIER** **SQUAD**.",
      },
    },
    {
      name: "FLAMES OF SANCTITY",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One **PURIFIER** **SQUAD** unit from your army that was eligible to fight this phase.",
        effect: 'Roll one D6 for each enemy unit within 6" of your unit, adding 1 to the result if your unit includes **CASTELLAN** **CROWE**: on a 4+, that enemy unit suffers D3 **mortal** **wounds**.',
      },
    },
    {
      name: "HALLOWED BEACON",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your Movement phase.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit (excluding **TERMINATOR** units) that is arriving using the **Deep** **Strike** ability this phase.",
        effect: 'Set up your unit wholly within your army’s **Hallowed** **Ground** and more than 6" horizontally away from all enemy units.',
      },
    },
    {
      name: "FIRES OF COVENANT",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Movement phase.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit from your army.",
        effect: 'Until the end of the phase, each time an enemy unit is set up or ends a **Normal**, **Advance** or **Fall** **Back** **move** within 6" of your unit, roll one D6, adding 2 to the result if your unit is wholly within your army’s **Hallowed** **Ground**: on a 4+, that enemy unit suffers D3 **mortal** **wounds**.',
      },
    },
    {
      name: "AEGIS ETERNAL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit that are wholly within your **Hallowed** **Ground** have a 4+ **invulnerable** **save**.",
      },
    },
    {
      name: "REPELLING SPHERE",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One **GREY** **KNIGHTS** **INFANTRY** unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit declares a charge and your unit is one of the targets of that charge, subtract 1 from the **Charge** **roll**, or subtract 2 instead if your unit is wholly within your army’s **Hallowed** **Ground**.",
      },
    },
  ],

  "Valourstrike Lance": [
    {
      name: "RUN THEM THROUGH!",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by your models have the **[LANCE]** ability.",
      },
    },
    {
      name: "THUNDERSTOMP",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **IMPERIAL** **KNIGHTS** model from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, the Attacks characteristic of any armoured Feet melee weapons equipped by your model is 8, the Attacks characteristic of any titanic Feet melee weapons equipped by your model is 12, and improve the Armour Penetration characteristic of those weapons by 1.",
      },
    },
    {
      name: "FULL TILT",
      cp: "2 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that has not been selected to move this phase.",
        effect: 'Until the end of the phase, add 2" to the Move characteristic of your models and add 2 to **Advance** **rolls** made for those model’s units.',
      },
    },
    {
      name: "VOW OF RETRIBUTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by your models have the **[LETHAL** **HITS]** ability.",
      },
    },
    {
      name: "TACTICAL FOIL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **IMPERIAL** **KNIGHTS** model from your army that is within 9" of that unit.',
        effect: 'Your model can make a **Normal** **move** of up to D6".',
      },
    },
    {
      name: "ROTATE ION SHIELDS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ **invulnerable** **save**.",
      },
    },
  ],

  "Gate Warden Lance": [
    {
      name: "DRIVE THEM OUT!",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit on your **defensive** **line**, an unmodified **Hit** **roll** of 5+ scores a **Critical** **Hit**.",
      },
    },
    {
      name: "LANCEBREAKER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks and is on your **defensive** **line**.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greaterthan the Toughness characteristic of your unit, subtract 1 from the **Wound** **roll**",
      },
    },
    {
      name: "STEADFAST SUPERIORITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that is within **Engagement** **Range** of one or more enemy units, that is on your **defensive** **line** and that has not already been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "MARSHAL THE DEFENCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "Up to two **IMPERIAL** **KNIGHTS** units from your army that have not been selected to move this phase.",
        effect: 'Until the end of the phase, add 3" to the Move characteristic of models in your units.',
      },
    },
    {
      name: "TITANIC BOMBARDMENT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **IMPERIAL** **KNIGHTS** **TITANIC** unit from your army that **Remained** **Stationary** this turn, that is on your **defensive** **line** and that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[SUSTAINED** **HITS** **2]** ability.",
      },
    },
    {
      name: "FORTRESS OF INTIMIDATION",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One **IMPERIAL** **KNIGHTS** **TITANIC** unit from your army that is on your **defensive** **line**.",
        effect: "Until the end of the phase, each time an enemy unit selects your unit as a target of a charge, that unit must take a **Battle-shock** **test**, subtracting 1 from the result.",
      },
    },
  ],

  "Questoris Companions": [
    {
      name: "COURAGEOUS STAND",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **IMPERIAL** **KNIGHTS** **TITANIC** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **6+** ability.",
      },
    },
    {
      name: "TITANIC DUEL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **IMPERIAL** **KNIGHTS** **TITANIC** model from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time your model makes an attack that targets a MONSTER, TITANIC or WALKER unit, add 1 to the **Hit** **roll** and add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "MOMENT OF GLORY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an **IMPERIAL** **KNIGHTS** **TITANIC** unit from your army **Consolidates**.",
        target: "That IMPERIAL KNIGHTS TITANIC unit.",
        effect: 'Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3" provided your unit can end that move within **Engagement** **Range** of one or more enemy units.',
      },
    },
    {
      name: "HERO’S TREAD",
      cp: "1 CP",
      rules: {
        when: "End of your Command phase.",
        target: "One **IMPERIAL** **KNIGHTS** **TITANIC** model from your army that is within range of an **objective** **marker** you control.",
        effect: "Your Level of Control over that objective marker is 5 (unless it would otherwise be higher), until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "UNSTOPPABLE WARRIOR",
      cp: "2 CP",
      rules: {
        when: "Your Movement phase, just after an **IMPERIAL** **KNIGHTS** **TITANIC** unit from your army **Falls** **Back**.",
        target: "That IMPERIAL KNIGHTS TITANIC unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "DRIVEN BY THE PAST",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **IMPERIAL** **KNIGHTS** **TITANIC** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it **Advanced**.",
      },
    },
  ],

  "Spearhead-At-Arms": [
    {
      name: "VIRTUE OF COURAGE",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One **ARMIGER** model from your army, or one **IMPERIAL** **KNIGHTS** **TITANIC** model from your army, and one or more friendly ARMIGER models affected by that model’s **Bondsman** ability.",
        effect: "Select one enemy unit. Until the end of the phase, each time one of your ARMIGER models makes an attack that targets that enemy unit, add 1 to the **Hit** **roll**.",
      },
    },
    {
      name: "EXEMPLAR’S WISDOM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an **IMPERIAL** **KNIGHTS** **TITANIC** model from your army has shot.",
        target: "That IMPERIAL KNIGHTS TITANIC model, and one or more friendly **ARMIGER** models affected by that model’s **Bondsman** ability.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time one of your ARMIGER models makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "MANTLE OF THE MENTOR",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One **ARMIGER** model from your army, or one **IMPERIAL** **KNIGHTS** **TITANIC** model from your army, and one or more friendly ARMIGER models affected by that model’s **Bondsman** ability.",
        effect: "Until the end of the phase, your ARMIGER models are eligible to shoot in a turn in which they **Fell** **Back**.",
      },
    },
    {
      name: "THIN THEIR RANKS",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One **ARMIGER** model from your army, or one **IMPERIAL** **KNIGHTS** **TITANIC** model from your army, and one or more friendly ARMIGER models affected by that model’s **Bondsman** ability.",
        effect: "Until the end of the phase, ranged weapons equipped by your ARMIGER models have the **[RAPID** **FIRE** **1]** ability.",
      },
    },
    {
      name: "LET DUTY BE YOUR SHIELD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ARMIGER** unit from your army that was selected as the target of one or more of the attacking units attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SQUIRES OFTHE HUNT",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **ARMIGER** model from your army, or one **IMPERIAL** **KNIGHTS** **TITANIC** model from your army, and one or more friendly ARMIGER models affected by that model’s **Bondsman** ability.",
        effect: 'For each of your ARMIGER models that is within 9" of one or more battlefield edges and not within **Engagement** **Range** of one or more enemy units, remove that ARMIGER model from the battlefield and place it into Strategic Reserves.',
      },
    },
  ],

  "Freeblade Company": [
    {
      name: "NOBLE SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
        effect: "Your unit’s **Deadly** **Demise** ability inflicts **mortal** **wounds** on a D6 roll of 4+, adding 1 to the result if it is an **ARMIGER** unit, instead of only a 6.",
      },
    },
    {
      name: "STRENGTH FROM EXILE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that has not been selected to shoot or fight this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes an attack, if there are no other friendly units within 9" of your unit, re-roll a **Hit** **roll** of 1 and re-roll a **Wound** **roll** of 1.',
      },
    },
    {
      name: "FULL TILT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army.",
        effect: 'Until the end of the phase, if your unit **Advances**, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit, or 9" instead if your unit is an **ARMIGER** or DESTRIER unit.',
      },
    },
    {
      name: "POINT‑BLANK BARRAGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, when making ranged attacks with **Blast** **weapons**, models in your unit can target enemy units within **Engagement** **Range** of your unit (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, until the end of the phase, your unit does not suffer the penalty to its **Hit** **rolls** for being within Engagement Range of one or more enemy units, but each time a model in your unit makes an attack with a Blast weapon that targets a unit within Engagement Range of your unit, on an unmodified Hit roll of 1, your unit suffers 1 **mortal** **wound** after all of its attacks have been resolved.",
      },
    },
    {
      name: "SURVIVOR OF STRIFE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "FLANKING MANOEUVRES",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: 'One **ARMIGER** unit from your army that is within 9" of one or more battlefield edges and not within **Engagement** **Range** of one or more enemy units.',
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Questor Forgepact": [
    {
      name: "OMNISSIAH’S GRACE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a **mortal** **wound** is allocated to an **IMPERIAL** **KNIGHTS** or **ADEPTUS** **MECHANICUS** unit from your army.",
        target: "That IMPERIAL KNIGHTS or ADEPTUS MECHANICUS unit.",
        effect: "Until the end of the phase, models in your unit have the **Feel** **No** **Pain** **5+** ability against mortal wounds.",
      },
    },
    {
      name: "VENGEANCE OF THE MACHINE CULT",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Until the end of the battle, the enemy unit that destroyed your unit is Marked. Each time an **ADEPTUS** **MECHANICUS** model from your army makes an attack that targets a Marked unit, that attack has the **[LETHAL** **HITS]** ability.",
      },
    },
    {
      name: "BONDED IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase, just before an **IMPERIAL** **KNIGHTS** **CHARACTER** unit from your army uses a **Bondsman** **ability**.",
        target: "That IMPERIAL KNIGHTS CHARACTER unit.",
        effect: 'When selecting targets for that use of that Bondsman ability, you can select one friendly **ADEPTUS** **MECHANICUS** unit within 12" of your unit in addition, or instead of selecting one **ARMIGER** model. Until the start of your next Command phase, every model in that ADEPTUS MECHANICUS unit is affected by that Bondsman ability.<br><br>**Restrictions:** You cannot target a **KNIGHT** **PRECEPTOR** with this Stratagem.',
      },
    },
    {
      name: "MACHINE FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **IMPERIAL** **KNIGHTS** unit from your army.",
        effect: "Until the start of your next turn, your unitcan ignore any or all modifiers to the following: the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any **Hit** **roll** or **Wound** **roll** made for it.",
      },
    },
    {
      name: "AGGRESSION BEGETS AGGRESSION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: 'One **IMPERIAL** **KNIGHTS** unit from your army or one **IMPERIAL** **KNIGHTS** **CHARACTER** unit from your army and one friendly **ADEPTUS** **MECHANICUS** unit that is within 6" of that unit.',
        effect: "Until the end of the phase, ranged weapons equipped by models in your units have the **[ASSAULT]** ability.",
      },
    },
    {
      name: "THRONEGHEIST FURY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit is set up or ends a **Normal**, **Advance**, or **Fall** **Back** **move**.",
        target: 'One **IMPERIAL** **KNIGHTS** **TITANIC** unit from your army that is within 24" of and visible to that enemy unit.',
        effect: "Select one ranged weapon equipped by a model in your unit. That model can shoot at that enemy unit (and only if it is an eligible target). When doing so, that model can only make attacks with that weapon and each time it makes a ranged attack, an unmodified **Hit** **roll** of 6 is required to score a hit, irrespective of the attacking weapon’s Ballistic Skill or any modifiers.",
      },
    },
  ],

  "Needgaârd Oathband": [
    {
      name: "VOID HARDENED",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets, if units from your army have **Fortify** **Takeover**.",
        target: "One LEAGUES OF VOTANN unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "HONOUR OF THE HOLD",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One LEAGUES OF VOTANN unit from your army that has not been selected to fight this phase.",
        effect: "Each time you use this Stratagem, you can spend 3YP. Select one enemy unit within **Engagement** **Range** of your unit. Until the end of the phase, each time a model in your unit makes a melee attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. If you spent YP during this use of this Stratagem, improve the Armour Penetration characteristic of that attack by 2 instead.",
      },
    },
    {
      name: "ORDERED RETREAT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a LEAGUES OF VOTANN unit from your army **Falls** **Back**.",
        target: "That LEAGUES OF VOTANN unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Fell** **Back**.",
      },
    },
    {
      name: "ANCESTRAL SENTENCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One LEAGUES OF VOTANN unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can spend 3YP. Until the end of the phase, ranged weapons equipped by models in your unit have the **[SUSTAINED** **HITS** **1]** ability. If you spent YP during this use of this Stratagem, until the end of the phase, those weapons have the **[SUSTAINED** **HITS** **2]** ability instead.",
      },
    },
    {
      name: "HUNTR’S MARK",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One LEAGUES OF VOTANN unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Hit** **roll** of 1 and re-roll a **Wound** **roll** of 1.",
      },
    },
    {
      name: "REACTIVE REPRISAL",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot, if units from your army have **Fortify** **Takeover**.",
        target: "One LEAGUES OF VOTANN unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, can only target that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],

  "Persecution Prospect": [
    {
      name: "ADAPTABLE AVARICE",
      cp: "1 CP",
      rules: {
        when: "Start of any phase, if units from your army have **Fortify** **Takeover**.",
        target: "One **LEAGUES** OF **VOTANN** **CHARACTER** unit from your army.",
        effect: "Each time you use this Stratagem, you can spend any number of YP. Once you have done so, if you have 6 or fewer YP, until the start of your next turn, units from your army have **Hostile** **Acquisition** instead.",
      },
    },
    {
      name: "FRONTIER MOMENTUM",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **HERNKYN** unit from your army that has not been selected to move this phase.",
        effect: 'Until the end of the phase, if your unit Advances, do not make an **Advance** **roll** for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
      },
    },
    {
      name: "EXPOSED FLAWS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HERNKYN** unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Until the end of the phase, each time a model in your unit makes an attack, if you spent YP during this use of this Stratagem and/or if that attack targets an **assailed** **unit**, you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "RANGER TACTICS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One LEAGUES OF VOTANN unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if that attack targets an **assailed** **unit** and/or if your unit has the **HERNKYN** keyword, you can re-roll the **Hit** **roll**.",
      },
    },
    {
      name: "CLAIMSTAKER REFLEX",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One LEAGUES OF VOTANN unit from your army (excluding **ARTILLERY** and **VEHICLE** units) that is within 9" of that enemy unit.',
        effect: 'Each time you use this Stratagem, you can spend 2YP. Your unit can make a **Normal** **move** of up to D6". If you spent YP during this use of this Stratagem, your unit can make a Normal move of up to 6" instead.<br><br>**Restrictions:** A unit cannot **embark** within a **TRANSPORT** as part of this move.',
      },
    },
    {
      name: "DISPERSED FORMATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **LEAGUES** OF **VOTANN** **INFANTRY** or **LEAGUES** OF **VOTANN** **MOUNTED** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit has the **Stealth** ability and each time a ranged attack targets your unit, models in your unit have the **Benefit** **of** **Cover** against that attack.",
      },
    },
  ],

  "Dêlve Assault Shift": [
    {
      name: "CYBERSTIMM INFUSION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **CTHONIAN** **BESERKS** unit from your army that has not been selected to fight this phase.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Wound** **roll** of 1. If you spent YP during this use of this Stratagem, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "UNSTOPPABLE FORCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **LEAGUES** OF **VOTANN** unit from your army that has not been selected to fight this phase.",
        effect: 'Until the end of the phase, each time your unit **Piles** **In** or **Consolidates**, each model in that unit can move up to 6" instead of up to 3".',
      },
    },
    {
      name: "AUGMENTED ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **CTHONIAN** **BESERKS** unit from your army that has not been selected to move this phase.",
        effect: 'Each time you use this Stratagem, you can spend up to 2YP. Until the end of the turn, add X" to the Move characteristic of models in your unit, where X is the number of YP you spent during this use of this Stratagem, and your unit is eligible to declare a charge in a turn in which it **Advanced**.',
      },
    },
    {
      name: "TECTONIC FRACTURE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a CTHONIAN EARTHSHAKERS unit from your army has shot.",
        target: "That **CTHONIAN** **EARTHSHAKERS** unit.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Select one enemy unit hit by one or more of your unit’s attacks this phase. Until the start of your next Shooting phase, subtract 2 from that unit’s Move characteristic and, if you spent YP during this use of this Stratagem, subtract 2 from **Charge** **rolls** made for that unit.",
      },
    },
    {
      name: "WEAVEWËRKE BUTTRESS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets, if units from your army have **Hostile** **Acquisition**.",
        target: "One **LEAGUES** OF **VOTANN** **INFANTRY** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "HIDDEN ACCESSWAYS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **CTHONIAN** **BESERKS**, **HEARTHKYN** **WARRIORS** or **HERNKYN** **YAEGIRS** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Brandfast Oathband": [
    {
      name: "SECURE POSITIONS",
      cp: "1 CP",
      rules: {
        when: "End of any of your phases.",
        target: "One **LEAGUES** OF **VOTANN** **TRANSPORT** unit from your army.",
        effect: 'One LEAGUES OF VOTANN unit embarked within your TRANSPORT can **disembark**. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6" of your TRANSPORT. That unit cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn.',
      },
    },
    {
      name: "BASTION RUNNING",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **HEKATON** **LAND** **FORTRESS** unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time your unit makes a **Normal** or **Advance** **move**, it can move horizontally through terrain features.",
      },
    },
    {
      name: "ILLUMINATED PRIORITY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a **LEAGUES** OF **VOTANN** **VEHICLE** unit from your army has shot.",
        target: "That LEAGUES OF VOTANN VEHICLE unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a **LEAGUES** OF **VOTANN** **INFANTRY** model from your army makes an attack that targets that enemy unit, re-roll a **Hit** **roll** of 1.",
      },
    },
    {
      name: "INEXORABLE EFFICIENCY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **LEAGUES** OF **VOTANN** unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to shoot in a turn in which it **Fell** **Back**.",
      },
    },
    {
      name: "OPPORTUNISTIC ESCALATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot, if units from your army have **Hostile** **Acquisition**.",
        target: "One **LEAGUES** OF **VOTANN** **VEHICLE** unit from your army (excluding **HEKATON** **LAND** **FORTRESS** units) that was hit by one or more of those attacks.",
        effect: 'Your unit can make a **Normal** **move** of up to D6".',
      },
    },
    {
      name: "VENGEANCE FLARE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **LEAGUES** OF **VOTANN** **INFANTRY** unit that was hit by one or more of those attacks.",
        effect: 'Each time you use this Stratagem, you can spend 2YP. Select one friendly **KAPRICUS** or **SAGITAUR** unit within 6" of your INFANTRY unit. If you spent YP during this use of this Stratagem, you can select one friendly **HEKATON** **LAND** **FORTRESS** unit within 6" of your INFANTRY unit instead. The selected unit can shoot as if it were your Shooting phase. When doing so, models in the selected unit can only target that enemy unit (and only if it is an eligible target).',
      },
    },
  ],

  "Hearthfyre Arsenal": [
    {
      name: "UNWAVERING ACCURACY",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **BRÔKHYR** **THUNDERKYN** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack’s Ballistic Skill characteristic; the **Hit** **roll**; the **Wound** **roll**; that attack’s Armour Penetration characteristic.",
      },
    },
    {
      name: "FIRST CONCERN",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a **BRÔKHYR**, **IRONKIN** **STEELJACKS** or **ARKANYST** **EVALUATOR** unit from your army has shot.",
        target: "That BRÔKHYR, IRONKIN STEELJACKS or ARKANYST EVALUATOR unit.",
        effect: "If your unit **Remained** **Stationary** in your Movement phase this turn, it can make a **Normal** **move**.",
      },
    },
    {
      name: "DELAYED-FIRE ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a **BRÔKHYR**, **IRONKIN** **STEELJACKS** or **ARKANYST** **EVALUATOR** unit from your army has shot.",
        target: "That BRÔKHYR, IRONKIN STEELJACKS or ARKANYST EVALUATOR unit.",
        effect: "Select one enemy unit (excluding MONSTERS and VEHICLES) hit by one or more of those attacks. Until the start of your next Shooting phase, each time that enemy unit makes a **Normal**, **Advance** or **Fall** **Back** **move**, roll one D6 for each model in that unit: for each 1, that unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "WALL OF STEEL",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after an **IRONKIN** **STEELJACKS** unit from your army ends a **Charge** **move**.",
        target: "That IRONKIN STEELJACKS unit.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Select one enemy unit (excluding MONSTERS and VEHICLES) within **Engagement** **Range** of your unit and roll one D6 for each model in your unit, rolling two additional D6 if you spent YP during this use of this Stratagem: for each 4+, that enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "PREVENTATIVE PURGE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Fall** **Back** **move**.",
        target: "One **BRÔKHYR** **THUNDERKYN** or **IRONKIN** **STEELJACKS** unit from your army.",
        effect: "Your unit can shoot as if it were your Shooting phase. When doing so, models in your unit can only target that enemy unit (and only if it is an eligible target) and each time a model in your unit makes an attack, subtract 1 from the **Hit** **roll**.",
      },
    },
    {
      name: "COGITATED NEED",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One **IRONKIN** **STEELJACKS** unit from your army.",
        effect: "Your unit can make a **Normal** **move**. When doing so, your unit must end that move as close as possible to the closest **objective** **marker**.",
      },
    },
  ],

  "Hearthband": [
    {
      name: "BRËKKEKNOTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **KÂHL**, **ÛTHAR** THE **DESTINED** or **EINHYR** **HEARTHGUARD** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ **invulnerable** **save**.",
      },
    },
    {
      name: "SURE OF PURPOSE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One LEAGUES OF VOTANN unit from your army that has not been selected to fight this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes a **Pile-in** or **Consolidation** **move**, it can move up to 6" instead of up to 3".',
      },
    },
    {
      name: "SUPERIOR CRAFTSMANSHIP",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One LEAGUES OF VOTANN unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the Damage characteristic of that attack.",
      },
    },
    {
      name: "UNYIELDING AGGRESSION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a LEAGUES OF VOTANN INFANTRY unit from your army **Falls** **Back**.",
        target: "That **LEAGUES** OF **VOTANN** **INFANTRY** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "MATERIALISATION MATRICES",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your Movement phase.",
        target: "One LEAGUES OF VOTANN unit from your army that is in Reserves and has the **Deep** **Strike** ability.",
        effect: 'Until the end of the phase, when your unit is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 6" horizontally away from all enemy units.<br><br>**Restrictions:** Until the end of the turn, your unit is not eligible to declare a charge.',
      },
    },
    {
      name: "FURY OF THE HEARTH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **EINHYR** **HEARTHGUARD** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, improve the Strength characteristic of ranged weapons equipped by models in your unit by 1. If you spend 1YP, until the end of the phase, ranged weapons equipped by models in that unit have the **[SUSTAINED** **HITS** **1]** ability as well.",
      },
    },
  ],

  "Mercenary Oathband": [
    {
      name: "AUXILIARY CONTRACT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **LEAGUES** OF **VOTANN** **INFANTRY** or **LEAGUES** OF **VOTANN** **MOUNTED** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the **[PRECISION]** ability.",
      },
    },
    {
      name: "OPTIMAL EXPENDITURE",
      cp: "1 CP",
      rules: {
        when: "The Fight phase.",
        target: "One **LEAGUES** OF **VOTANN** **INFANTRY** unit from your army that has not been selected to fight this phase.",
        effect: "Each time you use this Stratagem, you can spend 3YP. Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Hit** **roll** of 1 and re-roll a **Wound** **roll** of 1. If you spent YP during this usage of this Stratagem, you can re-roll a Hit roll of 1 and re-roll the Wound roll instead.",
      },
    },
    {
      name: "GRAND ARTIFICE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a LEAGUES OF VOTANN unit from your army **Falls** **Back**.",
        target: "That LEAGUES OF VOTANN unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Fell** **Back**.",
      },
    },
    {
      name: "PRIVATEER ARSENAL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **LEAGUES** OF **VOTANN** **INFANTRY** unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can spend 3YP. Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Hit** **roll** of 1 and re-roll a **Wound** **roll** of 1. If you spent YP during this usage of this Stratagem, you can re-roll the Hit roll and re-roll a Wound roll of 1 instead.",
      },
    },
    {
      name: "NEW HORIZONS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **LEAGUES** OF **VOTANN** **INFANTRY** unit from your army that is not within **Engagement** **range** of one or more enemy units and one friendly **TRANSPORT** it is able to **embark** within.",
        effect: 'If your LEAGUES OF VOTANN unit is wholly within 6" of that TRANSPORT, it can embark within it.',
      },
    },
    {
      name: "MOBILE EXPLOITATION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **HERNKYN** unit from your army that is not within **Engagement** **Range** of one or more enemy units. Alternatively, you can spend 2YP and target up to two HERNKYN units from your army that are not within Engagement Range of one or more enemy units instead.",
        effect: "Remove your units from the battlefield and place them into Strategic Reserves.",
      },
    },
  ],

  "War Horde": [
    {
      name: "CAREEN!",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an **ORKS** **VEHICLE** unit from your army with the **Deadly** **Demise** ability is **destroyed**.",
        target: "That destroyed ORKS VEHICLE unit, if you roll a 6 for its Deadly Demise ability. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Your unit can make a **Normal** or **Fall** **Back** **move** before its Deadly Demise ability is resolved, and before any **embarked** units perform an Emergency Disembarkation. When making this move, your unit can move over enemy units (excluding MONSTERS and VEHICLES) as if they were not there.",
      },
    },
    {
      name: "ORKS IS NEVER BEATEN",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One ORKS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is **destroyed**, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making attacks, and is then removed from play.",
      },
    },
    {
      name: "UNBRIDLED CARNAGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ORKS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a melee attack, an unmodified **hit** **roll** of 5+ scores a **Critical** **Hit**.",
      },
    },
    {
      name: "’ARD AS NAILS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One ORKS unit from your army (excluding **GROTS**, **MONSTER** and **VEHICLE** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "MOB RULE",
      cp: "1 CP",
      rules: {
        when: "End of your Command phase.",
        target: "One **MOB** unit from your army that contains 10 or more models and is not **Below** **Half-strength**.",
        effect: 'Select one friendly **Battle-shocked** **ORKS** **INFANTRY** unit within 6" of that MOB unit. That ORKS INFANTRY unit is no longer Battle-shocked.',
      },
    },
    {
      name: "ERE WE GO",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "One **ORKS** **INFANTRY** unit from your army.",
        effect: "Until the end of the turn, add 2 to **Advance** and **Charge** **rolls** made for your unit.",
      },
    },
  ],

  "Da Big Hunt": [
    {
      name: "DRAG IT DOWN",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **BEAST** **SNAGGA** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[SUSTAINED** **HITS** **1]** ability. In addition, each time a model in your unit makes a melee attack that targets your Prey, a **Critical** **Hit** is scored on an unmodified **Hit** **roll** of 5+, instead of only a 6.",
      },
    },
    {
      name: "UNSTOPPABLE MOMENTUM",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **BEAST** **SNAGGA** **MOUNTED** unit from your army ends a **Charge** **move**.",
        target: "That **BEAST** **SNAGGA** unit.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit and roll one D6 for each model in your unit: for each 4+, that enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds). If that enemy unit is your Prey, roll three additional D6.",
      },
    },
    {
      name: "DAT ONE’S EVEN BIGGA!",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **BEAST** **SNAGGA** unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to charge in a turn in which it **Advanced** or **Fell** **Back**. In addition, you can re-roll **Charge** **rolls** made for your unit, provided one of the targets of that charge is your Prey.",
      },
    },
    {
      name: "WHERE D’YA FINK YOU’RE GOING?",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Fall** **Back** **move**.",
        target: "One **BEAST** **SNAGGA** **INFANTRY** or **BEAST** **SNAGGA** **MOUNTED** unit from your army that was within **Engagement** **Range** of that enemy unit at the start of the phase.",
        effect: 'If your unit is not within Engagement Range of one or more enemy units, it can make a **Normal** **move** of up to 6".',
      },
    },
    {
      name: "STALKIN’ TAKTIKS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **BEAST** **SNAGGA** **INFANTRY** or **BEAST** **SNAGGA** **MOUNTED** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a ranged attack targets your unit, models in your unit have the **Benefit** **of** **Cover** against that attack. In addition, if your unit has the INFANTRY keyword, until the end of the phase, models in your unit have the **Stealth** ability.",
      },
    },
    {
      name: "INSTINCTIVE HUNTERS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **BEAST** **SNAGGA** unit from your army that is not within **Engagement** **Range** of one or more enemy unit.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Kult of Speed": [
    {
      name: "SPEEDIEST FREEKS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **SPEED** **FREEKS** or **TRUKK** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 5+ **invulnerable** **save**. If your unit is a VEHICLE unit with an unmodified Toughness characteristic of 8 or less, until the end of the phase, models in your unit have a 4+ invulnerable save instead.",
      },
    },
    {
      name: "SQUIG FLINGIN’",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a SPEED FREEKS or TRUKK unit from your army ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: "That **SPEED** **FREEKS** or **TRUKK** unit.",
        effect: 'Select one enemy unit within 9" of your unit. That enemy unit must take a **Battle-shock** **test** and, when doing so, subtract 1 from the result.',
      },
    },
    {
      name: "DAKKASTORM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **SPEED** **FREEKS** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, ranged weapons equipped by models in your unit have the **[SUSTAINED** **HITS** **1]** ability. While targeting a unit within 9", they have the **[SUSTAINED** **HITS** **2]** ability instead.<br><br>**Restrictions:** A unit cannot be targeted by this and the Blitza Fire Stratagem in the same phase.',
      },
    },
    {
      name: "BLITZA FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **SPEED** **FREEKS** unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, ranged weapons equipped by models in your unit have the **[LETHAL** **HITS]** ability and, each time a model in your unit makes an attack that targets a unit within 9", a **Critical** **Hit** is scored on an unmodified **Hit** **roll** of 5+, instead of only a 6.<br><br>**Restrictions:** A unit cannot be targeted by this and the Dakkastorm Stratagem in the same phase.',
      },
    },
    {
      name: "FULL THROTTLE!",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a SPEED FREEKS unit from your army ends a **Charge** **move**.",
        target: "That **SPEED** **FREEKS** unit.",
        effect: "Until the end of the turn, each time a model in your unit makes a melee attack, add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "MORE GITZ OVER ’ERE!",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **SPEED** **FREEKS** unit from your army that is within 9" of that enemy unit and is not within **Engagement** **Range** of one or more enemy units.',
        effect: 'Your unit can make a **Normal** **move** of up to 6".',
      },
    },
  ],

  "Dread Mob": [
    {
      name: "KLANKIN’ KLAWS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ORKS** **WALKER** unit from your army that has not been selected to fight this phase.",
        effect: "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, add 2 to the Strength characteristic of melee weapons equipped by models in your unit and, if you chose to push it, until the end of the phase, add 1 to the Damage characteristic of those weapons and they have the **[HAZARDOUS]** ability as well.",
      },
    },
    {
      name: "SUPERFUELLED BOILER",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ORKS** **WALKER** unit from your army has been selected to **Advance**.",
        target: "That **ORKS** **WALKER** unit.",
        effect: "Until the end of the turn, you can re-roll Advance rolls made for your unit and ranged weapons equipped by models in your unit have the **[ASSAULT]** ability.",
      },
    },
    {
      name: "BIGGER SHELLS FOR BIGGER GITZ",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **MEK**, **ORKS** **WALKER** or **GROTS** **VEHICLE** unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE, add 1 to the **Wound** **roll**. If you chose to push it, add 1 to the Damage characteristic of that attack and, until the end of the phase, ranged weapons equipped by models in your unit have the **[HAZARDOUS]** ability as well.",
      },
    },
    {
      name: "DAKKA! DAKKA! DAKKA!",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ORKS** **WALKER** or **GROTS** **VEHICLE** unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Hit** **roll** of 1. If you chose to push it, you can re-roll the Hit roll instead and, until the end of the phase, ranged weapons equipped by models in your unit have the **[HAZARDOUS]** ability as well.",
      },
    },
    {
      name: "CONNIVING RUNTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a **Normal**, **Advance** or **Fall** **Back** **move**.",
        target: 'One **GRETCHIN** unit from your army that is within 9" of that enemy unit and not within **Engagement** **Range** of any enemy units.',
        effect: "Roll one D6: on a 4+, that enemy unit suffers D3+1 **mortal** **wounds**. Your unit can then make a Normal move.",
      },
    },
    {
      name: "EXTRA GUBBINZ",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ORKS** **WALKER** or **GROTS** **VEHICLE** unit from your army (excluding TITANIC units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
  ],

  "Green Tide": [
    {
      name: "COMPETITIVE STREAK",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **BOYZ** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Wound** **roll** of 1. If your unit contains 10 or more models, re-roll the Wound roll instead.",
      },
    },
    {
      name: "BULLDOZER BRUTALITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **BOYZ** unit from your army that has not been selected to fight this phase and is within **Engagement** **Range** of one or more enemy units.",
        effect: 'Until the end of the phase, each time your unit is selected to fight, when determining which models in your unit are eligible to fight, any models in your unit that are within 3" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3" of them and within Engagement Range of their unit.',
      },
    },
    {
      name: "BRAGGIN’ RIGHTS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: 'Two **BOYZ** units from your army that are within 6" of each other.',
        effect: 'Until the start of your next Command phase, while those two units are within 6" of each other, they both count as containing 10 or more models for the purposes of your Detachment rule, any Enhancements models from your army have and any Stratagems you use.',
      },
    },
    {
      name: "COME ON LADZ!",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **BOYZ** unit from your army.",
        effect: "Return up to D3+2 **destroyed** models to your unit (excluding **CHARACTER** models).",
      },
    },
    {
      name: "TIDE OF MUSCLE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **BOYZ** unit from your army that has not **declared** **a** **charge** this phase.",
        effect: "Until the end of the phase, each time your unit declares a charge, add 1 to the Charge roll and, if your unit contains 10 or more models, you can re-roll the Charge roll.’",
      },
    },
    {
      name: "GO GET ’EM!",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **BOYZ** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "After the attacking unit has shot, your unit can make a Go Get ’Em! move. To do so, roll one D6: each model in your unit can move a distance in inches up to the result, but your unit must end that move as close as possible to the closest enemy unit. When doing so, those models can be moved within **Engagement** **Range** of that enemy unit. If your unit contains 10 or more models, you can re-roll the D6 to determine how far your unit can move.",
      },
    },
  ],

  "Bully Boyz": [
    {
      name: "ARMED TO DATEEF",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NOBZ** or **MEGANOBZ** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a **Hit** **roll** of 1. If a **Waaagh!** is active for your unit, you can re-roll the Hit roll instead.",
      },
    },
    {
      name: "TOO ARROGANT TO DIE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **NOBZ** or **MEGANOBZ** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is **destroyed**, if that model has not shot or fought this phase, roll one D6, adding 2 to the result if a **Waaagh!** is active for your unit. On a 5+, do not remove the destroyed model from play; it can shoot or fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "ALWAYS LOOKIN’ FER A FIGHT",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit is **destroyed**.",
        target: "One **NOBZ** or **MEGANOBZ** unit from your army that destroyed that enemy unit.",
        effect: 'Until the end of the phase, each time your unit makes a **Consolidation** **move**, it can move up to D3+3" instead of up to 3". If a **Waaagh!** is active for your unit, it can move up to 6" instead.',
      },
    },
    {
      name: "CRUSHING IMPACT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a **NOBZ** or **MEGANOBZ** unit from your army ends a **Charge** **move**.",
        target: "That NOBZ or MEGANOBZ unit.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 5+, that enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds). If a **Waaagh!** is active for your unit, that enemy unit suffers 1 mortal wound for each 4+ instead.",
      },
    },
    {
      name: "CUT’EM DOWN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit is selected to **Fall** **Back**.",
        target: "One **NOBZ** or **MEGANOBZ** unit from your army within **Engagement** **Range** of that enemy unit.",
        effect: "When that enemy unit **Falls** **Back**, all models in that enemy unit must take a **Desperate** **Escape** **test**. When doing so, if a **Waaagh!** is active for your unit, subtract 1 from each of those tests.",
      },
    },
    {
      name: "HULKING BRUTES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **NOBZ** or **MEGANOBZ** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
  ],

  "Taktikal Brigade": [
    {
      name: "DAT’S OURS",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One ORKS unit from your army that is within **Engagement** **Range** of one or more enemy units.",
        effect: "Until the start of the next Command phase, add 1 to the Objective Control characteristic of models in your unit.",
      },
    },
    {
      name: "FIGHT PROPPA",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ORKS** **INFANTRY** or **ORKS** **MOUNTED** unit from your army that has not been selected to fight this phase.",
        effect: "Select the **[SUSTAINED** **HITS** **1]** or **[LETHAL** **HITS]** ability. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability.",
      },
    },
    {
      name: "TAKTIKAL RETREAT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an ORKS unit from your army **Falls** **Back**.",
        target: "That ORKS unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "KRUNCHIN’ DESCENT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a STORMBOYZ unit from your army ends a Charge move.",
        target: "That **STORMBOYZ** unit.",
        effect: "Select one enemy unit within **Engagement** **Range** of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 **mortal** **wound** (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "ON TO DA NEXT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit **Falls** **Back**.",
        target: "One ORKS unit from your army that was within **Engagement** **Range** of that enemy unit at the start of the phase.",
        effect: 'Your unit can make a **Normal** **move** of up to 6".',
      },
    },
    {
      name: "DED SNEAKY",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **KOMMANDOS** or **STORMBOYZ** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "More Dakka!": [
    {
      name: "ORKS IS STILL ORKS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One ORKS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, re-roll a **Wound** **roll** of 1. If that enemy unit is within range of an **objective** **marker**, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "GET STUCK IN, LADZ!",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "One ORKS unit from your army (excluding **GRETCHIN** units).",
        effect: "Until the start of your next Command phase, the **Waaagh!** is active for your unit, even if you have already called a Waaagh! this battle.Designer’s Note: This means that any abilities that are in effect while the Waaagh! is active for your army will be in effect for your unit.",
      },
    },
    {
      name: "HUGE SHOW-OFFS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **ORKS** **WALKER** unit (excluding **KILLA** **KANS**) from your army.",
        effect: "Until the start of your next Command phase, improve your unit’s Move, Leadership and Objective Control characteristics by 1, and each time a model in your unit makes an attack, add 1 to the **Hit** **roll**.",
      },
    },
    {
      name: "LONG, UNCONTROLLED BURSTS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ORKS unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[IGNORES** **COVER]** ability.",
      },
    },
    {
      name: "SPESHUL SHELLS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ORKS unit from your army that has not been selected to shoot this phase.",
        effect: 'Until the end of the phase, each time a model in your unit makes a ranged attack that targets the closest eligible target within 18", improve the Armour Penetration characteristic of ranged weapons equipped by models in your unit by 1.',
      },
    },
    {
      name: "CALL DAT DAKKA?",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One ORKS unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],

  "Freebooter Krew": [
    {
      name: "BASH AND GRAB",
      cp: "1 CP",
      rules: {
        when: "The Fight phase.",
        target: "One ORKS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of the **loot** **objective**, you can re-roll the **Wound** **roll**.",
      },
    },
    {
      name: "GRAB AND BASH",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One ORKS unit from your army (excluding **GRETCHIN** units) that is within range of the **loot** **objective**.",
        effect: "Until the start of your next Command phase, the **Waaagh!** is active for your unit, even if you have already called a Waaagh! this battle.Designer’s Note: This means that any abilities that are in effect while the Waaagh! is active for your army will be in effect for your unit.",
      },
    },
    {
      name: "BOARDIN’ RUSH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One ORKS unit from your army that has not been selected to move this phase.",
        effect: 'Until the end of the phase, each time your unit **Advances**, do not make an **Advance** **roll**. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
      },
    },
    {
      name: "DECK FRAGGERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ORKS unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit targets an INFANTRY unit with a ranged weapon, that weapon has the **[BLAST]** ability.",
      },
    },
    {
      name: "ROLLING LOOT-HEAP",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **FLASH** **GITZ** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the **[ANTI-VEHICLE** **4+]** ability.",
      },
    },
    {
      name: "KRUMP AND RUN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit **falls** **back**.",
        target: "One ORKS unit from your army that was within **engagement** **range** of that enemy unit at the start of the phase and is not within range of one or more enemy units.",
        effect: 'Your unit can make a **Normal** **move** of up to 6".',
      },
    },
  ],

  "Speedwaaagh!": [
    {
      name: "ON DA MOVE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One ORKS unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it **Fell** **Back** or **Advanced** (unless it used its turbo this turn).",
      },
    },
    {
      name: "MOBILE DAKKASTORM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a **SPEED** **FREEKS** or **TRUKK** unit from your army has shot.",
        target: "That SPEED FREEKS or TRUKK unit.",
        effect: "Select one enemy unit hit by one or more of those attacks (excluding attacks made with **Indirect** **Fire** **weapons**). Until the end of the phase, each time a model in a SPEED FREEKS or TRUKK unit from your army makes an attack that targets that unit, improve the Strength characteristic of that attack by 2.",
      },
    },
    {
      name: "SPESHUL AMMO",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ORKS unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit (excluding **Torrent** **weapons**) have the **[ANTI-MONSTER** **4+]** and **[ANTI-VEHICLE** **4+]** abilities.",
      },
    },
    {
      name: "DED KILLY CONSTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Fight phase.",
        target: "One **SPEED** **FREEKS** or **TRUKK** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the **[LANCE]** ability and, if your unit made a **Charge** **move** this turn, until the end of the phase, add 1 to the Damage characteristic of those weapons.",
      },
    },
    {
      name: "DUST TRAILS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One ORKS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit has the **Benefit** **of** **Cover**.",
      },
    },
    {
      name: "EVASIVE MANOOVA",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **SPEED** **FREEKS** or **TRUKK** unit from your army that is not within **Engagement** **Range** of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],

  "Blitz Brigade": [
    {
      name: "MOUNT UP, LADZ",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One **ORKS** **INFANTRY** unit from your army that is not within **Engagement** **Range** of one or more enemy units, and one friendly **TRANSPORT** it is able to **embark** within.",
        effect: 'If your ORKS INFANTRY unit is wholly within 6" of that TRANSPORT, it can embark within it.',
      },
    },
    {
      name: "MEKANISED BRUTALITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **BATTLEWAGON**, **KILL** **RIG** or **HUNTA** **RIG** unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the turn, each time a unit **disembarks** from your unit after your unit makes a **Normal** **move**, that disembarked unit is still eligible to declare a charge this turn.",
      },
    },
    {
      name: "RUN ’EM DOWN",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **BATTLEWAGON**, **KILL** **RIG** or **HUNTA** **RIG** unit from your army that has not been selected to move this phase.",
        effect: 'Select up to two other friendly **ORKS** **VEHICLE** or **ORKS** **MONSTER** units within 6" of your unit. Until the end of the turn, your unit and each unit you selected are eligible to declare a charge in a turn in which they **Advanced**.',
      },
    },
    {
      name: "ARMOURED DUELLISTS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ORKS** **VEHICLE** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time your unit makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the **Hit** **roll** and add 1 to the **Wound** **roll**.",
      },
    },
    {
      name: "IMPERVIOUS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **BATTLEWAGON**, **KILL** **RIG** or **HUNTA** **RIG** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the **Wound** **roll**.",
      },
    },
    {
      name: "YOOZ IN TROUBLE NOW",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **BATTLEWAGON**, **HUNTA** **RIG** or **KILL** **RIG** model from your army that was hit by one or more of the attacking unit’s attacks.",
        effect: "One **ORKS** **INFANTRY** unit embarked within your model can **disembark** and make a Surge move. To do so, roll one D6: models in that unit move a number of inches up to this result, but that unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within **Engagement** **Range** of that enemy unit.",
      },
    },
  ],
};
