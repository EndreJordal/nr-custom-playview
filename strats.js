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
};
