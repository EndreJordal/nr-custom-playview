// GENERATED FILE -- do not edit by hand. Rebuilt from Wahapedia's data
// export by scripts/update-strats.mjs (runs daily via GitHub Actions).
//
// "Core Stratagems" isn't a real detachment -- every army has access to
// these regardless of faction or detachment choice. app.js's
// renderStratagemSection() renders it specially: always shown, always last,
// no DP/points on its face.
const STRATAGEM_DATABASE = {
  "Core Stratagems": [
    {
      name: "COMMAND RE-ROLL",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after you make one of the following rolls for a friendly unit or model:<br><br>• **Advance roll**<br>• **Charge roll**<br>• **Damage roll**<br>• **Hazard roll**<br>• **Hit roll**<br>• **Save roll**<br>• **Wound roll**<br>• A roll to determine the number of attacks generated with a weapon.",
        target: "That unit or model.",
        effect: "You re-roll that roll. If you are rolling more than one dice together, select one of those dice to re-roll (excluding **charge rolls**, which you must re-roll in full).",
      },
    },
    {
      name: "EPIC CHALLENGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a friendly **CHARACTER** unit is **selected to fight**.",
        target: "That **CHARACTER** unit.",
        effect: "Select one **CHARACTER** model in your unit. Until the end of the phase, that model’s melee weapons have the [PRECISION] ability.",
      },
    },
    {
      name: "INSANE BRAVERY",
      cp: "1 CP",
      rules: {
        when: "Battle-shock step of your Command phase, just before you make a **battle-shock roll** for a friendly unit.",
        target: "That unit.",
        effect: "That **battle-shock roll** is automatically successful.<br><br>**Restrictions:** You cannot use this **stratagem** more than once per battle.",
      },
    },
    {
      name: "EXPLOSIVES",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One friendly **unengaged** **EXPLOSIVES**/**GRENADES** unit that is **eligible to shoot** and did not make an **advance move** this turn.",
        effect: "Resolve the following sequence:<br><br>• Select one **EXPLOSIVES**/**GRENADES** model in your unit.<br>• Select one **unengaged** enemy unit within 8\" of and **visible** to that model.<br>• Roll six D6: for each 4+, that enemy unit suffers 1 **mortal wound** (06.02).",
      },
    },
    {
      name: "CRUSHING IMPACT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a friendly **MONSTER**/**VEHICLE** unit ends a **charge move**.",
        target: "That **MONSTER**/**VEHICLE** unit.",
        effect: "Resolve the following sequence:<br><br>• Select one enemy unit **engaged** with your unit.<br>• Select one model in your unit **engaged** with that enemy unit.<br>• Roll a number of D6 equal to the **T** characteristic of that model: for each 1, your unit suffers 1 **mortal wound**; for each 5+, that enemy unit suffers 1 **mortal wound** (to a maximum of 6 **mortal wounds** per unit).",
      },
    },
    {
      name: "RAPID INGRESS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One friendly unit that is in **strategic reserves** (excluding **AIRCRAFT**).",
        effect: "Your unit makes an **ingress move** (20.04).<br><br>**Restrictions:** You cannot use this **stratagem** during the first battle round.",
      },
    },
    {
      name: "FIRE OVERWATCH",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One friendly **unengaged** unit (excluding **TITANIC** units).",
        effect: "Your unit shoots using **snap shooting**.",
      },
    },
    {
      name: "SMOKESCREEN",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Shooting phase.",
        target: "One friendly **SMOKE** unit.",
        effect: "Until the end of the phase, each time an attack targets either your **SMOKE** unit, or a unit that is not **fully visible** to the attacking model because of one or more models in your **SMOKE** unit, the target has the **benefit of cover** against that attack (13.08).",
      },
    },
    {
      name: "HEROIC INTERVENTION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One friendly **unengaged** unit within 12\" of one or more enemy units. You can only select a **VEHICLE** unit if it is a **CHARACTER**/**WALKER** unit.",
        effect: "**Resolve a charge** with your unit (11.02). While doing so, before making the **charge roll**, you must select one of the following modes:<br><br>• Leap to Defend: When selecting **charge targets**, you can only select enemy units that made a **charge move** this phase and are within the **maximum distance**.+1CP<br>• Into the Fray:<br><br>• When making the **charge roll**, if the result is greater than 6 (after modifiers), change it to 6.<br>• When selecting **charge targets**, you can select any enemy units that are within 6\" of your unit and within the **maximum distance**.",
      },
    },
    {
      name: "COUNTEROFFENSIVE",
      cp: "2 CP",
      rules: {
        when: "Fight step of your opponent’s Fight phase, just after an enemy unit has resolved its attacks.",
        target: "One friendly unit that is **eligible to fight**.",
        effect: "Until the end of the phase, your unit has the **Fights First** ability and it must be the next unit you **select to fight** (12.04).",
      },
    },
  ],
  "Auric Champions": [
    {
      name: "SLAYER OF CHAMPIONS",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Adeptus Custodes Character unit from your army that has just destroyed the unit you selected at the start of your Command phase as the target of your Assemblage of Might ability.",
        effect: "Select one enemy unit on the battlefield Until the start of your next Command phase, each time an **ADEPTUS** **CUSTODES** **CHARACTER** model from your army makes an attack that target that enemy unit, add 1 to the Wound roll In addition, if the destroyed unit was a **CHARACTER** unit, gain 1CP.",
      },
    },
    {
      name: "SUPERHUMAN RESERVES",
      cp: "2 CP",
      rules: {
        when: "Any phase, just after an Adeptus Custodes Warlord model from your army has used an ability on its datasheet or from an Enhancement that says it can only be used Once per battle.",
        target: "That Adeptus Custodes Warlord model.",
        effect: "Your model can use its Once per battle’ ability one additional time during this battle (but not in the same phase).<br><br>**Restrictions:** You cannot use this Stratagem more than once per battle.",
      },
    },
    {
      name: "THE EMPEROR’S AUSPICE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Adeptus Custodes Character unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, **CHARACTER** models in your unit have the Feel No Pain 4+ ability.",
      },
    },
    {
      name: "EARNING OF A NAME",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "Up to two Adeptus Custodes Character units from your army that have not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a **CHARACTER** model in either of your units makes an attack that targets a **MONSTER** or **VEHICLE** unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
    {
      name: "VIGIL UNENDING",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One Adeptus Custodes Character model from your army that was just destroyed and has not fought this phase. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Do not remove your destroyed model from play. The destroyed model can fight after the attacking unit has finished making attacks, and is then removed from play.",
      },
    },
    {
      name: "SHOULDER THE MANTLE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, before the Reinforcements step.",
        target: "One Adeptus Custodes Character model from your army that is not leading a unit.",
        effect: "Select one friendly unit (excluding Battle-shocked and Attached units) within 2\" horizontally and 5\" vertically of your model that it could lead (as described in the Leader section of its datasheet). Your model attaches to that unit as a Leader. Change that unit’s Starting Strength accordingly.",
      },
    },
  ],
  "Lions of the Emperor": [
    {
      name: "GILDED CHAMPION",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an Adeptus Custodes Character model from your army has used an ability on its datasheet that states it can only be used ‘once per battle’.",
        target: "That **ADEPTUS** **CUSTODES** **CHARACTER** model.",
        effect: "Your model can use that ‘once per battle’ ability one additional time during the battle (but not in the same phase).<br><br>**Restrictions:** You cannot use this Stratagem on the same **ADEPTUS** **CUSTODES** **CHARACTER** model more than once per battle.",
      },
    },
    {
      name: "DEFIANT TO THE LAST",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **CUSTODES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 2 to the result if that model has the **CHARACTER** keyword. On a 4+, do not remove it from play; the destroyed model can fight after the attacking unit has finished making its attacks (when doing so, it is treated as having 1 wound remaining), and is then removed from play.",
      },
    },
    {
      name: "PEERLESS WARRIOR",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **CUSTODES** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
    },
    {
      name: "UNLEASH THE LIONS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Allarus Custodians or Aquilon Custodians unit from your army that is on the battlefield.",
        effect: "That unit is split into separate units, each containing one model. These new units each have a Starting Strength of 1.",
      },
    },
    {
      name: "MANOEUVRE AND FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTUS** **CUSTODES** unit from your army Falls Back.",
        target: "That **ADEPTUS** **CUSTODES** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "SWIFT AS THE EAGLE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **ADEPTUS** **CUSTODES** unit from your army (excluding **VEHICLE** units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can make a Normal move of up to D6\".",
      },
    },
  ],
  "Might of the Moritoi": [
    {
      name: "FLAWLESS CONSTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly ADEPTUS CUSTODES WALKER unit.",
        target: "That **ADEPTUS** **CUSTODES** **WALKER** unit.",
        effect: "Attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.",
      },
    },
    {
      name: "UNSTOPPABLE ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly ADEPTUS CUSTODES WALKER unit is selected to move.",
        target: "That **ADEPTUS** **CUSTODES** **WALKER** unit.",
        effect: "Your unit has MOBILE.",
      },
    },
    {
      name: "PRIORITISED ERADICATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly TELEMON HEAVY DREADNOUGHT unit is selected to shoot.",
        target: "That **TELEMON** **HEAVY** **DREADNOUGHT** unit.",
        effect: "Your unit’s:<br><br>• Arachnus Storm Cannon weapons have [RAPID FIRE 6].<br>• Iliastus Accelerator Culverin weapons have [RAPID FIRE 2].",
      },
    },
  ],
  "Null Maiden Vigil": [
    {
      name: "DESPERATION’S PRICE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy **PSYKER** unit has either finished using a Psychic ability that targets a unit, or finished making Psychic Attacks.",
        target: "One Anathema Psykana unit from your army within 18\" of that enemy **PSYKER** unit.",
        effect: "That enemy **PSYKER** unit must take a Leadership test If the test is passed, that **PSYKER** unit is Battle-shocked; if the test is failed that **PSYKER** unit suffers 3 mortal wounds and is Battle-shocked.",
      },
    },
    {
      name: "WITCH HUNTERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Anathema Psykana unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Select either the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability, but models in your unit can only target **PSYKER** units with their attacks.",
      },
    },
    {
      name: "ANATHEMA BLADEMASTERY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Vigilators unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a melee attack, you can re-roll the Hit roll If the target of that attack is Battle-shocked or a **PSYKER**, you can re-roll the Wound roll as well.",
      },
    },
    {
      name: "PSY-CHAFF VOLLEY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Prosecutors unit from your army that has just shot.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the start of your next turn, while your unit is on the battlefield, that enemy unit is prosecuted. While a unit is prosecuted, each time an Anathema Psykana model makes an attack against that unit, improve the Armour Penetration characteristic of that attack by 1. While a **PSYKER** or Battle-shocked unit is prosecuted, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "PURGATION SWEEP",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Witchseekers unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristic of Torrent weapons equipped by models in your unit. If such a weapon targets a **PSYKER** or Battle-shocked unit this phase, add 2 to its Attacks characteristic instead.",
      },
    },
    {
      name: "PSYCHIC ABOMINATIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Anathema Psykana Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit has the Stealth ability, and Battle-shocked and **PSYKER** models can only select your unit as a target of a ranged attack if they are within 12\".",
      },
    },
  ],
  "Shield Host": [
    {
      name: "ARCANE GENETIC ALCHEMY",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a mortal wound has been allocated to an Adeptus Custodes model from your army(excluding Anathema Psykana models).",
        target: "That **ADEPTUS** **CUSTODES** model’s unit.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 4+ ability against mortal wounds.",
      },
    },
    {
      name: "AVENGE THE FALLEN",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One **ADEPTUS** **CUSTODES** unit from your army (excluding Anathema Psykana units) that is below its Starting Strength.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit. If your unit is Below Half-strength, until the end of the phase, add 2 to the Attacks characteristic of those melee weapons instead.",
      },
    },
    {
      name: "UNWAVERING SENTINELS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Adeptus Custodes Infantry unit from your army (excluding Anathema Psykana units) that is within range of an objective marker you control and that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a melee attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "MULTIPOTENTIALITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Adeptus Custodes unit from your army that Fell Back this phase.",
        effect: "Until the end of your turn, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "VIGILANCE ETERNAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Adeptus Custodes Battleline unit from your army (excluding Anathema Psykana units) within range of an objective marker you control.",
        effect: "That objective marker remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "ARCHEOTECH MUNITIONS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **CUSTODES** unit from your army (excluding Anathema Psykana units) that has not been selected to shoot this phase.",
        effect: "Select either the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase ranged weapons equipped by models in your unit have the selected ability.",
      },
    },
  ],
  "Silent Hunters": [
    {
      name: "DEATHSONG SCYTHES",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly VIGILATORS unit is selected to fight.",
        target: "That **VIGILATORS** unit.",
        effect: "• Your unit’s melee attacks have [LANCE].<br>• Your unit’s melee attacks that target a **PSYKER** unit have +1 **A**.",
      },
    },
    {
      name: "UMBRAL PROSECUTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly PROSECUTORS unit is selected to shoot.",
        target: "That **PROSECUTORS** unit.",
        effect: "Your unit’s Boltgun weapons have:<br><br>• [RAPID FIRE 2].<br>• +1 **AP**.",
      },
    },
    {
      name: "SYNCHRONISED INFERNO",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly WITCHSEEKERS unit is selected to shoot.",
        target: "That **WITCHSEEKERS** unit.",
        effect: "Your unit’s [TORRENT] ranged attacks have [BLAST 1].",
      },
    },
  ],
  "Solar Spearhead": [
    {
      name: "FLAWLESS CONSTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Adeptus Custodes Vehicle unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets a model in your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "EMPEROR’S VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **CUSTODES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit has the Walker keyword. On a 4+, do not remove it from play; The destroyed model can fight after the attacking unit has finished making its attacks (when doing so, it is assumed to have 1 wound remaining), and is then removed from play.",
      },
    },
    {
      name: "WRATHFUL ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an **ADEPTUS** **CUSTODES** unit from your army Piles In.",
        target: "That **ADEPTUS** **CUSTODES** unit.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in move, it can move up to D3+3\" instead of up to 3\".",
      },
    },
    {
      name: "UNSTOPPABLE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Adeptus Custodes Vehicle or Adeptus Custodes Mounted unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "RELENTLESS PERSECUTION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTUS** **CUSTODES** **VEHICLE** unit from your army Advances.",
        target: "That Adeptus Custodes Vehicle unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced. If your unit has the Walker keyword, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced instead.",
      },
    },
    {
      name: "PUNISHMENT INESCAPABLE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **CUSTODES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability, and until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and/or any or all modifiers to the Hit roll.",
      },
    },
  ],
  "Talons Of The Emperor": [
    {
      name: "HUNT AS ONE",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "Up to two ADEPTUS CUSTODES units from your army.",
        effect: "Until the end of the turn, your units are eilgible to shoot and/or declare a charge in a turn in which they Fell Back.<br><br>**Restrictions:** You can only select two units if one (and only one) of them is an ANATHEMA PSYKANA unit and both are within 6\" of each other.",
      },
    },
    {
      name: "TALONS INTERLOCKED",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "Up to two ADEPTUS CUSTODES INFANTRY units from your army, and one enemy unit that is an eligible target for all of those units.",
        effect: "Until the end of the phase, your units can only target that enemy unit, but each time a model in one of your units makes a ranged attack, improve the Strength and Armour Penetration characteristics of that attack by 1.<br><br>**Restrictions:** You can only select two units if one (and only one) of them is an ANATHEMA PSYKANA unit and both are within 6\" of each other.",
      },
    },
    {
      name: "EMPYRIC SEVERANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One ADEPTUS CusTODES unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly ANATHEMA PSYKANA unit within 6\" of that **ADEPTUS** **CUSTODES** unit.",
        effect: "Until the end of the phase, your unit has the Feel No Pain 4+ ability against Psychic attacks and mortal wounds.",
      },
    },
    {
      name: "EMPEROR’S EXECUTIONERS",
      cp: "2 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "Up to two Adeptus Custodes units from your army.",
        effect: "Until the end of the phase, each time a model in one of your units targets an enemy unit that is below its Starting Strength, add 1 to the Wound roll.<br><br>**Restrictions:** You can only select two units if one (and only one) of them is an Anathema Psykana unit and both are within 6\" of each other.",
      },
    },
    {
      name: "TALONED PINCER",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "Up to two Adeptus Custodes units from your army that are within 8\" of that enemy unit.",
        effect: "Your units can make a Normal move of up to 6\".<br><br>**Restrictions:** You cannot select units that are within Engagement Range of one or more enemy units. You can only select two units if one (and only one) of them is an Anathema Psykana unit and both are within 6\" of each other.",
      },
    },
    {
      name: "SHIELD OF HONOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Anathema Psykana Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one other friendly Adeptus Custodes Infantry unit (excluding **ANATHEMA** **PSYKANA** units) within 6\" of that **ANATHEMA** **PSYKANA** **INFANTRY** unit.",
        effect: "Until the end of the phase, any attack that targets your **ANATHEMA** **PSYKANA** unit must instead target your other **ADEPTUS** **CUSTODES** unit (unless it is not an eligible target).",
      },
    },
  ],
  "Tharanatoi Hammerblow": [
    {
      name: "HARDENED RESOLVE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly ADEPTUS CUSTODES TERMINATORADEPTUS CUSTODES TERMINATOR unit.",
        target: "That **ADEPTUS** **CUSTODES** **TERMINATOR** unit.",
        effect: "Your unit has +1 **T**.",
      },
    },
    {
      name: "UNLEASH THE LIONS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One friendly ALLARUS CUSTODIANS/AQUILON CUSTODIANS unit that is on the battlefield.",
        effect: "Your unit is split into separate units, each containing one model. These new units each have a starting strength of 1.",
      },
    },
    {
      name: "ELECTROEXORCIST SATURATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly **ADEPTUS** **CUSTODES** **TERMINATOR** unit is selected to shoot.",
        target: "That ADEPTUS CUSTODES TERMINATOR unit.",
        effect: "Your unit’s Ballistus Grenade Launcher weapons have D3+3 **A**.",
      },
    },
  ],
  "Cohort Acquisitus": [
    {
      name: "DEFECT SCRUTINY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly ADEPTUS MECHANICUS unit is **selected to shoot**.",
        target: "That **ADEPTUS** **MECHANICUS** unit.",
        effect: "Select one **visible** enemy unit within 12\" of a friendly RECON AUGURY unit. Your unit’s ranged attacks that target that enemy unit have **[IGNORES COVER]**.",
      },
    },
    {
      name: "REPOLARISED AUGURS",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Movement phase.",
        target: "One friendly **unengaged** RECON AUGURY unit.",
        effect: "Your unit has -3\" **detection range** until the end of the turn.",
      },
    },
    {
      name: "CLANDESTINE REPOSITION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One friendly **unengaged** INFILTRATORS/PTERAXII unit.",
        effect: "Place your unit in **strategic reserves**.",
      },
    },
  ],
  "Cohort Cybernetica": [
    {
      name: "MOTIVE IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One ADEPTUS MECHANICUS VEHICLE unit from your army.",
        effect: "Until the start of your next Command phase, add 3\" to the Move characteristic of models in your unit and add 1 to Advance and Charge rolls made for it.",
      },
    },
    {
      name: "AUTO-DIVINATORY TARGETING",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army, and one objective marker.",
        effect: "Until the start of your next Command phase, ranged weapons equipped by models in your unit have a Ballistic Skill characteristic of 3+ and the [IGNORES COVER] ability, but they can only target units within range of the selected objective marker.",
      },
    },
    {
      name: "MACHINE SPIRIT RESURGENT",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army that is below its Starting Strength.",
        effect: "Until the start of your next Command phase, each time a model in your unit makes an attack, you can re-roll the Hit roll. If your unit is Below Half-strength, you can re-roll the Wound roll as well.",
      },
    },
    {
      name: "MACHINE SUPERIORITY",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back and you can ignore any or all modifiers to its characteristics and/or to any roll or test made for it (excluding modifiers to saving throws).",
      },
    },
    {
      name: "TRANSCENDENT COGITATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army.",
        effect: "Until the start of your next Command phase, the Conqueror Imperative and Protector Imperative are both active for your unit.",
      },
    },
    {
      name: "BENEVOLENCE OF THE OMNISSIAH",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One LEGIO CYBERNETICA or ADEPTUS MECHANICUS VEHICLE unit from your army.",
        effect: "Until the start of your next Command phase, models in your unit have the Feel No Pain 6+ ability, which is improved to Feel No Pain 5+ against mortal wounds.",
      },
    },
  ],
  "Data-Psalm Conclave": [
    {
      name: "INCANTATION OF THE IRON SOUL",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after you allocate a mortal wound to a CULT MECHANICUS model from your army.",
        target: "That **CULT** **MECHANICUS** model’s unit.",
        effect: "Until the end of the phase, **CULT** **MECHANICUS** models in your unit have the Feel No Pain 4+ ability against mortal wounds.",
      },
    },
    {
      name: "CHANT OF THE REMORSELESS FIST",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One CULT MECHANICUS unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a **CULT** **MECHANICUS** model in your unit makes a melee attack, add 1 to the Wound roll.",
      },
    },
    {
      name: "VERSE OF VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One CULT MECHANICUS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a **CULT** **MECHANICUS** model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "TRIBUTE OF EMPHATIC VENERATION",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "One CULT MECHANICUS unit from your army and one enemy unit within 18\" of it.",
        effect: "That enemy unit must take a Battle-shock test. If that test is failed, until the start of your next Command phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "LITANY OF THE ELECTROMANCER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One CULT MECHANICUS unit from your army.",
        effect: "Roll one D6 for each enemy unit within 6\" of one or more **CULT** **MECHANICUS** models in your unit, adding 1 to the result if that model is an ELECTRO-PRIEST. On a 5+, that enemy unit suffers D3 mortal wounds.",
      },
    },
    {
      name: "LUMINESCENT BLESSING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One CULT MECHANICUS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, **CULT** **MECHANICUS** models in your unit have a 4+ invulnerable save.",
      },
    },
  ],
  "Eradication Cohort": [
    {
      name: "SERVO‑DRIVEN CHARGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability.",
      },
    },
    {
      name: "UNRELENTING AGGRESSION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTUS** **MECHANICUS** unit from your army Falls Back.",
        target: "That **ADEPTUS** **MECHANICUS** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back. If your unit has the Skitarii keyword, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back instead.",
      },
    },
    {
      name: "UNSHACKLED WRATH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Skitarii unit from your army that has not been selected to shoot this phase.",
        effect: "Select the [SUSTAINED HITS 1] or [LETHAL HITS] ability. Until the end of the phase, ranged weapons equipped by models in your unit have the selected ability. You can instead select the **[SUSTAINED** **HITS** **1]**, **[LETHAL** **HITS]** and [HAZARDOUS] abilities to apply to those weapons until the end of the phase.",
      },
    },
    {
      name: "THREAT‑COGITATION TARGETERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Skitarii Vehicle unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a ranged attack made by a model in your unit is allocated to a **MONSTER** or **VEHICLE** model, you can re-roll the Damage roll.",
      },
    },
    {
      name: "PRECISION ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a Sicarian unit from your army declares a charge.",
        target: "That **SICARIAN** unit.",
        effect: "Until the end of the phase, when your unit ends a Charge move, select one enemy unit within Engagement Range of it, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound.",
      },
    },
    {
      name: "ANALYTIC REPRISALS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One Skitarii Infantry unit from your army that lost one or more models as a result of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],
  "Explorator Maniple": [
    {
      name: "CACHED ACQUISITION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army that was just destroyed while it was within range of an objective marker you controlled. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "PRIORITY RECLAMATION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an **ADEPTUS** **MECHANICUS** unit from your army Consolidates.",
        target: "That **ADEPTUS** **MECHANICUS** unit.",
        effect: "Until the end of the phase, each time a model in your unit makes a Consolidation move, it can move up to 6\" instead of up to 3\", provided your unit ends that Consolidation move within range of your Acquisition objective marker.<br><br>**Restrictions:** You cannot target a unit with this Stratagem if it is within 3\" of one or more enemy units.",
      },
    },
    {
      name: "INFOSLAVE SKULL",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One TECH-PRIEST model from your army and one objective marker within 24\" of that model (excluding your Acquisition objective marker].",
        effect: "Until the start of your next Command phase, that objective marker is also considered to be one of your Acquisition objective markers for all rules purposes.",
      },
    },
    {
      name: "AUTO-ORACULAR RETRIEVAL",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army that disembarked from a **TRANSPORT** this turn.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within range of your Acquisition objective marker, add 1 to the Wound roll.",
      },
    },
    {
      name: "INCENSE EXHAUSTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One ADEPTUS MECHANICUS INFANTRY unit<br>from your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly ADEPTUS MECHANICUS SMOKE unit within 6\" of it.",
        effect: "Until the end of the phase, both of those units have the Stealth ability and the Benefit of Cover.",
      },
    },
    {
      name: "REACTIVE SAFEGUARD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit has declared a charge.",
        target: "One ADEPTUS MECHANICUS INFANTRY<br>unit from your army within range of your Acquisition objective marker that was selected as a target of that charge, and one friendly ADEPTUS MECHANICUS TRANSPORT.",
        effect: "Your unit can embark within that **TRANSPORT**.<br><br>**Restrictions:** Every model in your unit must be within 3\" of that **TRANSPORT** and there must be sufficient transport capacity to embark the entire unit.",
      },
    },
  ],
  "Haloscreed Battle Clade": [
    {
      name: "ERADICATION PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1, and, if it is a **HALO** **OVERRIDE** unit, re-roll a Hit roll of 1.",
      },
    },
    {
      name: "TARGETING OVERRIDE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "NEURAL OVERLOAD",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army.",
        effect: "If your unit is a **HALO** **OVERRIDE** unit, it suffers D3 mortal wounds. Select one Override ability. Until the start of your next Command phase, that ability is active for your unit.<br><br>**Designer’s Note:** ^^This means that if the targeted unit already has the **HALO** **OVERRIDE** keyword, it can be affected by multiple Override abilities at the same time, but suffers mortal wounds to do so. Alternatively, if your unit does not have the **HALO** **OVERRIDE** keyword, it instead has the chosen Override ability until the start of your next Command phase, but does not benefit from any other Override abilities that are active.^^",
      },
    },
    {
      name: "AGGRESSIVE IMPULSE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Skorpius Dunerider model from your army that has not been selected to move this phase.",
        effect: "Until the end of the turn, each time an **ADEPTUS** **MECHANICUS** unit disembarks from that model after it has made a Normal move, that unit makes an assault disembark move (Core Rules, 18.06) for that disembarkation.",
      },
    },
    {
      name: "GUIDED RETREAT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTUS** **MECHANICUS** unit from your army makes a Fall Back move.",
        target: "That **ADEPTUS** **MECHANICUS** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back, and, if it is a **HALO** **OVERRIDE** unit, you can re-roll Desperate Escape tests taken for it.",
      },
    },
    {
      name: "ANALYTICAL DIVINATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Adeptus Mechanicus Infantry unit (excluding Kataphron units) from your army that is within 8\" of that enemy unit and not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to D6\", or up to 6\" instead if it is a **HALO** **OVERRIDE** unit.",
      },
    },
  ],
  "Lords of the Forge": [
    {
      name: "SCRIPTURAL PROGNOSIS",
      cp: "1 CP",
      rules: {
        when: "In your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly TECH-PRIEST unit that is within range of an **objective**.",
        target: "That **TECH-PRIEST** unit.",
        effect: "Attacks that target your unit have -1 **AP** until that enemy unit has attacked.",
      },
    },
    {
      name: "OVERLOADED SAFEGUARDS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly TECH-PRIEST unit is selected to make a **fall-back move**.",
        target: "That **TECH-PRIEST** unit.",
        effect: "That move does not prevent your unit from being **eligible to shoot/declare a charge**.",
      },
    },
    {
      name: "HOLY AVARICE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly TECH-PRIEST unit **starts an action**.",
        target: "That **TECH-PRIEST** unit.",
        effect: "That **action** does not prevent your unit from being **eligible to shoot**.",
      },
    },
  ],
  "Luminen Auto-choir": [
    {
      name: "ECHOES OF THE CONDUIT WARS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly ELECTRO-PRIESTS unit is **selected to attack**.",
        target: "That **ELECTRO-PRIESTS** unit.",
        effect: "Your unit’s attacks that target a unit within range of an objective can:<br><br>• Re-roll **hit rolls** of 1.<br>• Re-roll **wound rolls** of 1.",
      },
    },
    {
      name: "CHANT OF ELECTROTRACTION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly ELECTRO-PRIESTS **BATTLECLADE** unit is selected to make an **advance move**.",
        target: "That **ELECTRO-PRIESTS** unit.",
        effect: "That move does not prevent your unit from being **eligible to declare a charge**.",
      },
    },
    {
      name: "MOMENTUM FEEDBACK",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly **unengaged** ELECTRO-PRIESTS unit has shot.",
        target: "That **ELECTRO-PRIESTS** unit.",
        effect: "Your unit can make a **surge move** of up to D6\".",
      },
    },
  ],
  "Rad-Zone Corps": [
    {
      name: "BALEFUL HALO",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army (excluding Vehicle units) that was selected as the target of one or more of that enemy unit’s attacks. If that unit is BATTLELINE, you can also target one friendly SKITARII unit (excluding **BATTLELINE** units) within 6\" of it.",
        effect: "Until the end of the turn, each time an attack is made that targets your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "EXTINCTION ORDER",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Tech-Priest model from your army and one objective marker within 24\" of that model.",
        effect: "Roll one D6 for each enemy unit within range of that objective marker. On a 4+, that unit suffers 1 mortal wound and it must take a Battle-shock test.",
      },
    },
    {
      name: "AGGRESSOR IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One SKITARII unit from your army that has not been selected to move this phase. If that unit is BATTLELINE, you can also target one friendly **SKITARII** unit (excluding **BATTLELINE** units) within 6\" of it.",
        effect: "Until the end of the phase, each time one of those units Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit.",
      },
    },
    {
      name: "PRE-CALIBRATED PURGE SOLUTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army that has not been selected to shoot this phase. If that unit is BATTLELINE, you can also target one friendly SKITARII unit (excluding **BATTLELINE** units) within 6\" of it.",
        effect: "Until the end of the phase, each time a model in one of those units makes a ranged attack, if the target of that attack is within your opponent’s deployment zone, you can re-roll the Hit roll.",
      },
    },
    {
      name: "LETHAL DOSAGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **MECHANICUS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [LETHAL HITS] ability.",
      },
    },
    {
      name: "BULWARK IMPERATIVE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One SKITARII unit from your army that was selected as the target of one or more of the attacking unit’s attacks. If that unit is BATTLELINE, you can also target one friendly **SKITARII** unit (excluding **BATTLELINE** units) within 6\" of it.",
        effect: "Until the end of the phase, models in those units from your army have a 4+ invulnerable save.",
      },
    },
  ],
  "Skitarii Hunter Cohort": [
    {
      name: "BIONIC ENDURANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase orthe Fight phase, just after an enemy unit has selected its targets.",
        target: "One SICARIAN, PTERAXII or SYDONIAN unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.",
      },
    },
    {
      name: "BINHARIC OFFENCE",
      cp: "2 CP",
      rules: {
        when: "The start of your Shooting phase or the start of the Fight phase.",
        target: "Two SKITARII units from your army that have not been selected to shoot or fight this phase, and one enemy unit.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of weapons equipped by models in both of your units by 1.<br><br>**Restrictions:** Until the end of the phase, each time a model in either of your units makes an attack, it can only target that enemy unit (and only if it is an eligible target].",
      },
    },
    {
      name: "EXPEDITED PURGE PROTOCOL",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One SKITARII unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "ISOLATE AND DESTROY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One SICARIAN, PTERAXII, SYDONIAN,<br>IRONSTRIDER BALLISTARII or SKITARII MOUNTED unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if there are no other enemy units within 6\" of the unit targeted by that attack, add 1 to the Wound roll.",
      },
    },
    {
      name: "SHROUD PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One SKITARII INFANTRY unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
    {
      name: "PROGRAMMED WITHDRAWAL",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to two SICARIAN units from your army, or one SKITARII INFANTRY or SKITARII MOUNTED unit from your army.",
        effect: "Remove those units from the battlefield and place them into Strategic Reserves.<br><br>**Restrictions:** Each unit targeted with this Stratagem must be more than 3\" away from all enemy units.",
      },
    },
  ],
  "Armoured Warhost": [
    {
      name: "LAYERED WARDS",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly AELDARI VEHICLE unit suffers a mortal wound.",
        target: "That **AELDARI** **VEHICLE** unit.",
        effect: "Your unit has Feel No Pain 5+ against mortal wounds.",
      },
    },
    {
      name: "SOULSIGHT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly AELDARI VEHICLE unit is selected to shoot.",
        target: "That **AELDARI** **VEHICLE** unit.",
        effect: "Your unit’s attacks can re-roll:<br><br>• One hit roll.<br>• One wound roll.<br>• One damage roll.",
      },
    },
    {
      name: "VECTORED ENGINES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly AELDARI VEHICLE unit makes a fall-back move.",
        target: "That **AELDARI** **VEHICLE** unit.",
        effect: "That move does not prevent your unit from being eligible to shoot.",
      },
    },
  ],
  "Aspect Host": [
    {
      name: "WARRIOR FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Aspect Warriors or Avatar of Khaine unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill, Weapon skill, Strength, Armour Penetration and Damage characteristics and/or any or all modifiers to the Hit roll.",
      },
    },
    {
      name: "TO THEIR FINAL BREATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Aspect Warriors or Avatar of Khaine unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Each time you use this Stratagem, you can remove one Aspect Shrine token your unit has (see datasheets). Then, until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if you removed an Aspect Shrine token during this usage of this Stratagem. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SKYBORNE SANCTUARY",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One unengaged ASURYANI unit from your army that was eligible to fight this phase and one friendly TRANSPORT it is able to embark within.",
        effect: "If your **ASURYANI** unit is wholly within 6” of that **TRANSPORT**, it can embark within it.",
      },
    },
    {
      name: "DOOM INESCAPABLE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Avatar of Khaine model from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, your model’s Wailing Doom ranged weapon has a Range characteristic of 18\" and a Damage characteristic of 8.",
      },
    },
    {
      name: "PRETERNATURAL PRECISION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Aspect Warriors unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can remove one Aspect Shrine token your unit has (see datasheets). Then, select one of the following abilities, or select two of the following abilities if you removed an Aspect Shrine token during this usage of this Stratagem: [IGNORES COVER], [LETHAL HITS], [SUSTAINED HITS 1]. Until the end of the phase, ranged weapons equipped by models in your unit have the selected abilities.",
      },
    },
    {
      name: "KHAINE’S VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit (excluding **MONSTERS** and **VEHICLES**) is selected to Fall Back.",
        target: "One Aspect Warriors or Avatar of Khaine unit from your army that is within Engagement Range of that enemy unit.",
        effect: "All models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests.",
      },
    },
  ],
  "Corsair Coterie": [
    {
      name: "PIRATES’ DUE",
      cp: "1 CP",
      rules: {
        when: "The Fight phase.",
        target: "One **AELDARI** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1. If your unit has the Anhrathe keyword, then until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of an objective marker, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "LETHAL RUSE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **AELDARI** unit from your army Falls Back.",
        target: "That **AELDARI** unit.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back. If it is an Anhrathe unit, also select one enemy unit your unit was within Engagement Range of at the start of the phase, and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.",
      },
    },
    {
      name: "OUTCAST AMBUSH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Rangers or Shroud Runners unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] and [RAPID FIRE 1] abilities, and until the end of the phase, improve the Armour Penetration characteristic of those weapons by 1.",
      },
    },
    {
      name: "INTO THE BREACH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an Anhrathe unit from your army destroyed one or more enemy units.",
        target: "That **ANHRATHE** unit.",
        effect: "After your unit has resolved all of its shooting attacks, it can make a Normal move of up to D6+1\".",
      },
    },
    {
      name: "CLOAK AND SHADOW",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Aeldari Infantry unit from your army that is within range of an objective marker that you control and that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Stealth ability and your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
    {
      name: "VENGEFUL SORROW",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One AELDARI INFANTRY unit from your army, if one or more models in that unit were destroyed as a result of those attacks, and if that **AELDARI** unit is neither Battle-shocked nor within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a surge move of up to D6+1\".",
      },
    },
  ],
  "Devoted of Ynnead": [
    {
      name: "PALL OF DREAD",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Ynnari unit from your army that was just destroyed while it was within range of one or more objective markers you controlled at the end of the previous phase. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Select one of those objective markers. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "MACABRE RESILIENCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Ynnari Infantry or Ynnari Mounted unit from your army (excluding Wraith Construct units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "EMISSARIES OF YNNEAD",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a Ynnari Infantry unit from your army has selected its targets.",
        target: "That **YNNARI** **INFANTRY** unit.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1. If your unit is below its Starting Strength, you can re-roll the Hit roll instead.",
      },
    },
    {
      name: "PARTING THE VEIL",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Ynnari unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SOULSIGHT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Ynnari unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [LETHAL HITS] and [IGNORES COVER] abilities.",
      },
    },
    {
      name: "DEATH ANSWERS DEATH",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Shooting phase.",
        target: "One Ynnari unit from your army (excluding Wraith Construct units), if one or more models in that unit were destroyed this phase.",
        effect: "Your unit can shoot as if it were your Shooting phase.",
      },
    },
  ],
  "Eldritch Raiders": [
    {
      name: "RAIDERS’ SPOILS",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Anhrathe unit from your army that is within Engagement Range of one or more enemy units.",
        effect: "Until the start of the next Command phase, add 1 to the Objective Control characteristic of models in your unit.",
      },
    },
    {
      name: "RUTHLESS KILLERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Corsair Voidscarred unit from your army that has not been selected to shoot or Fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Damage characteristic of that attack.",
      },
    },
    {
      name: "YRIEL’S EXAMPLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Aeldari Infantry unit from your army (excluding Wraith Construct units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.",
      },
    },
    {
      name: "NO PREY TOO BIG",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Anhrathe, Rangers or Shroud Runners unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if the Strength characteristic of that attack is less than the highest Toughness characteristic of models in the target unit, add 1 to the Wound roll.",
      },
    },
    {
      name: "IMPEDING FIRE",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One Rangers, Shroud Runners or Starfang unit from your army.",
        effect: "Select one enemy unit (excluding **TITANIC** units) visible to and within 36\" of your unit. Until the end of the phase, each time that enemy unit declares a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).",
      },
    },
    {
      name: "WITHDRAW AND REINFORCE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Anhrathe unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves. If that unit is below Starting Strength, return all destroyed models (excluding **CHARACTER** models) to that unit.",
      },
    },
  ],
  "Fateful Performance": [
    {
      name: "HEROES’ FALL",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when an enemy unit targets a friendly HARLEQUINS unit.",
        target: "That **HARLEQUINS** unit.",
        effect: "When a model in your unit is destroyed, if your unit has not been selected to fight this phase, roll one D6:<br><br>• On a 4+, do not remove that model from the battlefield. When your unit has fought, or at the end of the phase (whichever comes first), that model is removed from the battlefield.",
      },
    },
    {
      name: "EXIT THE STAGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One friendly unengaged HARLEQUINS unit.",
        effect: "Place your unit in strategic reserves",
      },
    },
    {
      name: "DECEPTIVE FEINT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged HARLEQUINS INFANTRY unit.",
        target: "That **HARLEQUINS** **INFANTRY** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
  ],
  "Ghosts of the Webway": [
    {
      name: "STAGED DEATH",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Harlequins Character model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "At the end of the phase, set your model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with half of its starting number of wounds remaining.<br><br>**Restrictions:** Each model can only be targeted with this Stratagem once per battle.",
      },
    },
    {
      name: "HEROES’ FALL",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Harlequins unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "MOCKING FLIGHT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Harlequins unit from your army Falls Back.",
        target: "That **HARLEQUINS** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "TRICKSTERS’ RETORT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Troupe unit from your army that is within 8\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "BLOODY DANCE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One Harlequins Infantry or Harlequins Mounted unit from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.",
        effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.<br><br>**Restrictions:** Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    },
    {
      name: "EXIT THE STAGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Harlequins unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Guardian Battlehost": [
    {
      name: "WARDING SALVOES",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Dire Avengers or Guardians unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of one or more objective markers, you can re-roll the Wound roll.",
      },
    },
    {
      name: "SHIELD NODES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Dire Avengers or Guardians unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "If your unit is within range of one or more objective markers, until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "VAUL’S VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit destroys a Dire Avengers or Guardians unit from your army.",
        target: "One War Walkers unit from your army.",
        effect: "After that enemy unit has finished making its attacks, your unit can shoot as if it were your Shooting phase, but when resolving those attacks, it can only target that enemy unit (and only if it is an eligible target).<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "TIME TO STRIKE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Storm Guardians unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit. Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "BLADES OF ASURYAN",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Dire Avengers or Guardians unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [PISTOL] ability.",
      },
    },
    {
      name: "COST OF VICTORY",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Guardians unit from your army.",
        effect: "If your unit is not within Engagement Range of one or more enemy units, remove it from the battlefield and place it into Strategic Reserves. When doing so, return every destroyed **GUARDIANS** model to your unit.",
      },
    },
  ],
  "Path of the Outcast": [
    {
      name: "ELDRITCH SUPPRESSION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly RANGERS/SHROUD RUNNERS unit has shot.",
        target: "That **RANGERS/SHROUD** **RUNNERS** unit.",
        effect: "Select one enemy unit hit by those ranged attacks. That enemy unit makes a battle-shock roll, with -1 to that battle-shock roll if a model in that enemy unit was destroyed by those attacks.",
      },
    },
    {
      name: "CASTING BACK THE VEIL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly RANGERS/SHROUD RUNNERS unit has shot.",
        target: "That **RANGERS/SHROUD** **RUNNERS** unit.",
        effect: "Select one enemy unit hit by those ranged attacks. That enemy unit has +6\" detection range.",
      },
    },
    {
      name: "NOMADS OF THE HIDDEN WAY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly RANGERS/SHROUD RUNNERS unit has shot.",
        target: "That **RANGERS/SHROUD** **RUNNERS** unit.",
        effect: "• Your unit can make a normal move of up to D6\".<br>• Your unit is not eligible to declare a charge or embark within a TRANSPORT until the end of the turn.",
      },
    },
  ],
  "Seer Council": [
    {
      name: "PRESENTIMENT OF DREAD",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Asuryani Psyker model from your army.",
        effect: "Select one enemy unit within 18\" of and visible to your model. That enemy unit must take a Battle-shock test, subtracting 1 from that test.",
      },
    },
    {
      name: "FOREWARNED",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Asuryani Infantry unit from your army (excluding Wraith Construct units) that was selected as the target of one or more of the attacking unit’s attacks and is within 9\" of one or more friendly Asuryani Psyker models.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll and subtract 1 from the Wound roll.",
      },
    },
    {
      name: "UNSHROUDED TRUTH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Asuryani Infantry unit from your army (excluding Wraith Construct units) that has not been selected to move this phase, was not set up on the battlefield this phase, and is within 9\" of one or more friendly Asuryani Psyker models.",
        effect: "• Place your unit in strategic reserves.<br>• Your unit has Deep Strike.<br>• Your unit must make an ingress move this phase.<br><br>**Restrictions:** Until the end of the phase, your unit is not eligible to be selected to move.",
      },
    },
    {
      name: "FATE INESCAPABLE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Asuryani Infantry unit from your army (excluding Wraith Construct units) that has not been selected to shoot this phase and is within 9\" of one or more friendly Asuryani Psyker models.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability and each time a model in your unit makes an attack, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "ISHA’S FURY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Asuryani Psyker model from your army within 9\" of that enemy unit.",
        effect: "Roll six D6: for each 3+, that enemy unit suffers 1 mortal wound.",
      },
    },
    {
      name: "PSYCHIC SHIELD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Asuryani Infantry unit from your army (excluding Wraith Construct units) that was selected as the target of one or more of the attacking unit’s attacks and is within 9\" of one or more friendly Asuryani Psyker models.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
  ],
  "Serpent’s Brood": [
    {
      name: "FANGS OF THE BROOD",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One Troupe unit from your army.",
        effect: "Until the end of the phase, when using your unit’s Dance of Death ability, you can select three of the abilities for your unit to gain, instead of one.",
      },
    },
    {
      name: "VENOMOUS WRATH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Harlequins Vehicle unit from your army that has not been selected to shoot this phase.",
        effect: "After your unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". Until the end of the turn, your unit is not eligible to declare a charge.",
      },
    },
    {
      name: "STRIKING STRIDE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Harlequins unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "WEAVERS’ COILS",
      cp: "1 CP",
      rules: {
        when: "End of your Fight phase.",
        target: "One Harlequins Mounted unit from your army that was eligible to fight this phase.",
        effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move. Otherwise, your unit can make a Fall Back move of up to 6\".",
      },
    },
    {
      name: "WEAVING STRIDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Harlequins Infantry unit from your army that is within 8\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "SKYWARD LUNGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Harlequins Vehicle or Harlequins Mounted unit from your army.",
        effect: "If your unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Spirit Conclave": [
    {
      name: "SEER’S EYE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Aeldari Psyker model from your army and one friendly Wraith Construct unit within 12\" of it that has not been selected to shoot or fight this phase.",
        effect: "Select one enemy unit visible to your **PSYKER** model. Until the end of the phase, each time a model in your **WRAITH** **CONSTRUCT** unit makes an attack that targets that enemy unit, you can ignore any or all modifiers to the Armour Penetration and/or Damage characteristics of that attack.",
      },
    },
    {
      name: "WRAITHBONE ARMOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Wraith Construct unit from your army (excluding TiTANic units] that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "BLADES FROM BEYOND",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Wraithblades, Wraithlord or Wraithknight unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [DEVASTATING WOUNDS] ability.",
      },
    },
    {
      name: "SOUL BRIDGE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Wraithblades, Wraithguard or Wraithlord unit from your army and one Asuryani Psyker model from your army.",
        effect: "Until the start of your next Command phase, your **WRAITHBLADES**, **WRAITHGUARD** or **WRAITHLORD** unit is considered to be within 12\" of your **PSYKER** model for the purposes of the Psychic Guidance and Spirit Guides abilities.",
      },
    },
    {
      name: "SPIRIT TOKEN",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "One Wraithblades or Wraithguard unit from your army.",
        effect: "Select one objective marker you control that your unit is within range of. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "CRUSHING STRIDES",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a Wraithblades, Wraithlord or Wraithknight unit from your army ends a Charge move.",
        target: "That **WRAITHBLADES**, **WRAITHLORD** or **WRAITHKNIGHT** unit.",
        effect: "Select one enemy unit within Engagement Range of your unit and roll one D6 for each **WRAITHBLADES** model in your unit, or roll four D6 if your unit has the **WRAITHLORD** keyword, or roll six D6 if your unit has the **WRAITHKNIGHT** keyword: for each 3+, that enemy unit suffers 1 mortal wound.",
      },
    },
  ],
  "Twilight Flickers": [
    {
      name: "PRESAGED REHEARSAL",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly TROUPE unit is selected to fight.",
        target: "That **TROUPE** unit.",
        effect: "Your unit’s melee attacks have [LANCE].",
      },
    },
    {
      name: "CAPTIVATING PERFORMANCE",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One friendly TROUPE unit.",
        effect: "Select one objective your unit is controlling. That **objective** is secured.",
      },
    },
    {
      name: "PHANTASMAL MIRAGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly HARLEQUINS VEHICLE unit has shot.",
        target: "That **HARLEQUINS** **VEHICLE** unit.",
        effect: "• Your unit can make a normal move of up to D6\".<br>• Your unit is not eligible to declare a charge until the end of the turn.",
      },
    },
  ],
  "Warhost": [
    {
      name: "LIGHTNING-FAST REACTIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Asuryani unit from your army (excluding Wraith Construct units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "SKYBORNE SANCTUARY",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One unengaged ASURYANI unit from your army that was eligible to fight this phase and one friendly TRANSPORT it is able to embark within.",
        effect: "If your **ASURYANI** unit is wholly within 6” of that **TRANSPORT**, it can embark within it.",
      },
    },
    {
      name: "FEIGNED RETREAT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an Asuryani unit from your army Falls Back.",
        target: "That **ASURYANI** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "BLITZING FIREPOWER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Asuryani unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability while targeting an enemy unit within 12\". If such a weapon already has that ability, until the end of the phase, each time an attack is made with that weapon, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "FIRE AND FADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an Asuryani Infantry unit from your army (excluding Aircraft, Asurmen and Wraith Construct units) has shot.",
        target: "That **ASURYANI** unit.",
        effect: "Your unit can make a Normal move of up to D6+1\".<br><br>**Restrictions:** Until the end of the turn, your unit is not eligible to declare a charge or embark within a Transport.",
      },
    },
    {
      name: "WEBWAY TUNNEL",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Asuryani Infantry unit from your army that is wholly within 9\" of one or more battlefield edges.",
        effect: "If your unit is not within Engagement Range of one or more enemy units, remove it from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Windrider Host": [
    {
      name: "DEATH FROM ON HIGH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Asuryani Mounted or VYPER unit from your army that was set upon the battlefield from Reserves this turn and has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Wound roll.",
      },
    },
    {
      name: "OVERFLIGHT",
      cp: "1 CP",
      rules: {
        when: "End of your Shooting phase or the end of the Fight phase.",
        target: "One Asuryani Mounted unit from your army that destroyed one or more enemy units this phase.",
        effect: "Your unit can make a Normal move of up to 7\".",
      },
    },
    {
      name: "WIND OF BLADES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Asuryani Mounted or Vyper unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.",
      },
    },
    {
      name: "DARING RIDERS",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your Movement phase.",
        target: "One Asuryani Mounted or VYPER unit from your army in Reserves.",
        effect: "Until the end of the phase, when setting up your unit on the battlefield from Reserves, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units. When doing so, if your unit is set up within 8\" horizontally of one or more enemy units, until the end of the turn, it is not eligible to declare a charge.",
      },
    },
    {
      name: "FOCUSED FIREPOWER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Asuryani Mounted or VYPER unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SPIRALLING EVASION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Asuryani Mounted or VYPER unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
  ],
  "Abhuman Auxiliaries": [
    {
      name: "THICK-SKULLED OBDURANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly BULLGRYN SQUAD/OGRYN SQUAD unit that is within range of an objective.",
        target: "That **BULLGRYN** **SQUAD/OGRYN** **SQUAD** unit.",
        effect: "Attacks that target your unit have -1 **AP** until that enemy unit has attacked.",
      },
    },
    {
      name: "LOW PROFILE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly RATLINGS unit has shot.",
        target: "That **RATLINGS** unit.",
        effect: "Those ranged attacks do not prevent your unit from being hidden.",
      },
    },
    {
      name: "STIRRED TO ACTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly unengaged BULLGRYN SQUAD/OGRYN SQUAD unit has shot.",
        target: "That **BULLGRYN** **SQUAD/OGRYN** **SQUAD** unit.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
  ],
  "Armoured Infantry": [
    {
      name: "ORDER THE ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "One Astra Militarum Officer unit from your army.",
        effect: "Select one or more friendly **ASTRA** **MILITARUM** units within 6\" of your unit; until the end of the phase, you can re-roll Advance rolls made for those units.",
      },
    },
    {
      name: "MOBILE FIREBASE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an Armoured Skirmisher unit from your army Advances or Falls Back.",
        target: "That **ARMOURED** **SKIRMISHER** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced or Fell Back.",
      },
    },
    {
      name: "BURST OF SPEED",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One **ASTRA** **MILITARUM** unit from your army that did not Remain Stationary or arrive from Reserves this phase.",
        effect: "Your unit can make a Normal move of up to D6\".",
      },
    },
    {
      name: "SUPPORTING ORDNANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Armoured Skirmisher unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a visible **MONSTER** or **VEHICLE** unit, you can re-roll the Hit roll.",
      },
    },
    {
      name: "COMBINED FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an Armoured Skirmisher unit from your army has shot.",
        target: "That **ARMOURED** **SKIRMISHER** unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover, and each time an **ARMOURED** **SKIRMISHER** unit from your army makes an attack that targets that unit, improve the Strength characteristic of that attack by 2.",
      },
    },
    {
      name: "OPENING SALVO",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** unit from your army that disembarked from a Transport this turn and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Wound roll.",
      },
    },
  ],
  "Bridgehead Strike": [
    {
      name: "ON MY POSITION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One friendly engaged REGIMENT unit.",
        effect: "Roll one D6 for each enemy unit **engaged** with your unit:<br><br>• On a 2+ that enemy unit suffers D6 mortal wounds.Then, your unit suffers 3D3 **mortal wounds**.",
      },
    },
    {
      name: "FIRING HOT",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase, when a friendly MILITARUM TEMPESTUS/KASRKIN unit is selected to shoot.",
        target: "That **MILITARUM** **TEMPESTUS/KASRKIN** unit.",
        effect: "Your unit’s Hot-shot Lascarbines, Hot-shot Lasguns, Hot-shot Laspistols, Hot-shot Marksman Rifles, Hot-shot Volley Guns and Sentry Hot-shot Volley Guns weapons that targeted an enemy unit within 12\" have +1 **S** and **AP**.",
      },
    },
    {
      name: "SERVO‑DESIGNATORS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly MILITARUM TEMPESTUS unit has shot.",
        target: "That **MILITARUM** **TEMPESTUS** unit.",
        effect: "Select one enemy unit hit by those ranged attacks. Friendly **MILITARUM** **TEMPESTUS** units’ ranged attacks that target that enemy unit have [IGNORES COVER].",
      },
    },
  ],
  "Combined Arms": [
    {
      name: "COORDINATED ACTION",
      cp: "1 CP",
      rules: {
        when: "Start of any phase.",
        target: "One Regiment unit from your army and one Squadron unit from your army within 6\" of and visible to that **REGIMENT** unit.",
        effect: "Until the end of the phase, Orders affecting one of your units affect the other, and vice versa.",
      },
    },
    {
      name: "REINFORCEMENTS!",
      cp: "2 CP",
      rules: {
        when: "Any phase.",
        target: "One Infantry Regiment unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
        effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength and with all of its wounds remaining.<br><br>**Restrictions:** This Stratagem cannot be used to return destroyed **CHARACTER** units to Attached units. You can only use this Stratagem once per battle.",
      },
    },
    {
      name: "FLEXIBLE COMMAND",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "Any number of Astra Militarum Officer units from your army.",
        effect: "Until the end of the phase, your Officers can issue Orders to Regiment units and Squadron units.",
      },
    },
    {
      name: "FIELDS OF FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Regiment unit and one Squadron unit from your army that have not been selected to shoot this phase.",
        effect: "Select one enemy unit. Until the end of the phase, each time your selected **REGIMENT** and **SQUADRON** units make an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "INSPIRED COMMAND",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One Astra Militarum Officer unit from your army.",
        effect: "Your **OFFICER** can issue one Order as if it were your Command phase.",
      },
    },
    {
      name: "STALWART PROTECTOR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Astra Militarum Vehicle unit from your army.",
        effect: "Until the end of the phase, each time a ranged attack is allocated to an **INFANTRY** model from your army, if that model is not fully visible to every model in the attacking unit because of your **VEHICLE**, that model has the Benefit of Cover against that attack.",
      },
    },
  ],
  "Designation Force": [
    {
      name: "CLOSE-RANGE DETECTION",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly SCOUT SENTINEL/ASTRA MILITARUM INFANTRY unit.",
        effect: "While a visible enemy unit is within 6\" of your unit, that unit has +3\" detection range.",
      },
    },
    {
      name: "TRIGGERED ALERTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged ASTRA MILITARUM INFANTRY unit.",
        target: "That **ASTRA** **MILITARUM** **INFANTRY** unit.",
        effect: "Your unit can make a normal move of up to D3+3\"",
      },
    },
    {
      name: "SUMP-SMOG SCREEN",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Shooting phase",
        target: "One friendly ASTRA MILITARUM INFANTRY SMOKE unit.",
        effect: "When an attack targets either your unit, or a unit that is not fully visible to the attacking model because of one or more models in your unit, the target has the benefit of cover against that attack.",
      },
    },
  ],
  "Grizzled Company": [
    {
      name: "SNAP TO IT",
      cp: "1 CP",
      rules: {
        when: "Start of any phase.",
        target: "One Astra Militarum Officer unit from your army.",
        effect: "Your unit’s **OFFICER** model can issue 1 Order as if it were your Command phase.",
      },
    },
    {
      name: "NO RETREAT!",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **ASTRA** **MILITARUM** unit from your army affected by the Duty and Honour! Order.",
        effect: "If your unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of a phase.",
      },
    },
    {
      name: "VETERAN SHARPSHOOTERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability.",
      },
    },
    {
      name: "PURGING FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** unit from your army affected by an Order that has not been selected to shoot this phase.",
        effect: "If your unit is within range of an objective marker, until the end of the phase, ranged weapons equipped by models in your unit have the [LETHAL HITS] ability.",
      },
    },
    {
      name: "MORDIAN MINUTE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Astra Militarum Infantry unit from your army affected by the First Rank, Fire! Second Rank, Fire! Order.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Strength characteristic of that attack by 1.",
      },
    },
    {
      name: "ADDITIONAL ARMOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ASTRA** **MILITARUM** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
  ],
  "Hammer of the Emperor": [
    {
      name: "FINAL HOUR",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Squadron unit from your army that is Below Half-strength (excluding Officer units).",
        effect: "Until the end of the battle round, ranged weapons equipped by models in your unit (excluding **[ONE SHOT]** weapons) have the [HAZARDOUS] ability, and each time a model in your unit makes a ranged attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and to the Hit roll.",
      },
    },
    {
      name: "BLAZING ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Squadron unit from your army Advances.",
        target: "That **SQUADRON** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced.",
      },
    },
    {
      name: "TACTICAL WITHDRAWAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Squadron unit from your army Falls Back.",
        target: "That **SQUADRON** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
    },
    {
      name: "CRASH THROUGH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Astra Militarum Vehicle unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features as if they were not there.",
      },
    },
    {
      name: "FURIOUS CANNONADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Squadron unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within 12\", improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "ABLATIVE PLATING",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Astra Militarum Vehicle unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
  ],
  "Mechanised Assault": [
    {
      name: "VOX-RELAY",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Infantry Officer unit from your army embarked within a Transport. You can use this Stratagem on that unit even though it is embarked within a **TRANSPORT**.",
        effect: "Until the end of the phase, your unit can issue Orders even though it is not on the battlefield, and it can issue Orders to Astra Militarum Transport units from your army [excluding TiTANic units) regardless of the distance to and from your unit’s **TRANSPORT**.",
      },
    },
    {
      name: "RAPID DISPERSAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Astra Militarum Infantry unit from your army that disembarked from a Transport this phase.",
        effect: "Your **INFANTRY** unit can make a Normal move of up to D6\".",
      },
    },
    {
      name: "CLEAR AND SECURE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** unit from your army that disembarked from a Transport this turn and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within range of an objective marker, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
    {
      name: "SWIFT INTERCEPTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Transport unit from your army (excluding AIRCRAFT and TiTANic units) that is not within Engagement Range of one or more enemy units, and is within 8\" of the enemy unit that just ended that move.",
        effect: "Your **TRANSPORT** can make a Normal move of up to 6\".",
      },
    },
    {
      name: "HASTY EXTRACTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, after an enemy unit has selected targets for its charge but before it makes a Charge move.",
        target: "One Astra Militarum Infantry unit from your army that was selected as a target of that charge.",
        effect: "Provided your unit is not within Engagement Range of one or more enemy units and every model in your unit is within 3\" of an AsTRA Militarum Transport from your army, it can embark within that **TRANSPORT**.",
      },
    },
    {
      name: "MOVE OUT",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s turn.",
        target: "One **ASTRA** **MILITARUM** unit from your army.",
        effect: "Provided your unit is not within Engagement Range of one or more enemy units and every model in your unit is within 3\" of an Astra Militarum Transport from your army, it can embark within that **TRANSPORT**.",
      },
    },
  ],
  "Recon Element": [
    {
      name: "CRACK SHOTS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Platoon unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [PRECISION] ability.",
      },
    },
    {
      name: "DRAW THEM OUT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Platoon unit from your army that is within 8\" of that enemy unit, and is not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "SCRAMBLE FIELD",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Reinforcements step.",
        target: "One Astra Militarum Infantry unit from your army.",
        effect: "Until the end of the phase, enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of your unit.",
      },
    },
    {
      name: "COURAGEOUS DIVERSION",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Shooting phase.",
        target: "One Astra Militarum Infantry or Astra Militarum Mounted unit from your army.",
        effect: "Until the end of the phase, your unit has the Feel No Pain 6+ ability, and each time an enemy model makes an attack, if your unit is the closest eligible target, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "TANGLEFOOT GRENADES",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One ASTRA MILITARUM GRENADES unit from your army.",
        effect: "Select one visible enemy unit within 12\" of your unit. When that enemy unit declares a charge, that enemy unit has -1 to charge rolls.",
      },
    },
    {
      name: "SCOUTING OUTRIDERS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s turn.",
        target: "One Astra Militarum Mounted or Astra Militarum Walker unit from your army that is wholly within 10\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Siege Regiment": [
    {
      name: "TRENCH FIGHTERS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Astra Militarum Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 2 to the result if it is a Regiment model. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "OVER THE TOP",
      cp: "2 CP",
      rules: {
        when: "Start of your Command phase.",
        target: "One Infantry Officer model from your army.",
        effect: "Until the end of the phase, when your model issues the Move! Move! Move! Order, it can issue that Order to any number of eligible friendly Infantry Regiment units, regardless of range to your model.",
      },
    },
    {
      name: "FLARE BURST",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Astra Militarum Character unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time your unit makes an attack that targets a visible enemy unit within 12\", you can re-roll the Hit roll.",
      },
    },
    {
      name: "CALLOUS SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Platoon unit from your army that is within Engagement Range of one or more enemy units.",
        effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model’s unit is within Engagement Range of your unit, roll one D6: on a 4+, one model from your unit is destroyed after the attacking unit has finished making its attacks.",
      },
    },
    {
      name: "FURIOUS FUSILLADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Platoon unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristic of ranged weapons equipped by models in your unit while targeting an enemy unit within half range.",
      },
    },
    {
      name: "MINEFIELD",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One Platoon unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit ends a Charge move within Engagement Range of your unit, roll one D6 for each model in that enemy unit: for each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).",
      },
    },
  ],
  "Steel Hammer": [
    {
      name: "ENGINE OF WRATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Astra Militarum Titanic unit from your army that has not been selected to fight this phase.",
        effect: "Select one enemy unit within Engagement Range of your unit. Until the end of the phase, add 6 to the Attacks characteristic of melee weapons equipped by models in your unit, improve the Armour Penetration characteristic of those weapons by 2, and each time a model in your unit fights, it can only target that enemy unit.",
      },
    },
    {
      name: "IMPOSING ARRIVAL",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your Movement phase, from the second battle round onwards.",
        target: "One Astra Militarum Titanic unit from your army that is in Reserves.",
        effect: "Set up your unit on the battlefield, wholly within 8\" of the battlefield edge and more than 6\" horizontally away from all enemy units.",
      },
    },
    {
      name: "ADAMANTINE BEHEMOTH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Astra Militarum Vehicle unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "SHATTERING SALVO",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an Astra Militarum Titanic unit from your army has shot.",
        target: "That **ASTRA** **MILITARUM** **TITANIC** unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover.",
      },
    },
    {
      name: "WITHERING FIREPOWER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an Astra Militarum Vehicle unit from your army has shot.",
        target: "That **ASTRA** **MILITARUM** **VEHICLE** unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test, subtracting 1 from that test.",
      },
    },
    {
      name: "ACCURACY UNDER PRESSURE",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ASTRA** **MILITARUM** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.",
      },
    },
  ],
  "Alien Hunters": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One DEATHwATCH unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "ADAPTIVE TACTICS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One DEATHwATCH unit from your army.",
        effect: "Select the Furor Tactics, Malleus Tactics or Purgatus Tactics. Until the start of your next Command phase, that Deathwatch Mission Tactic is active for your unit instead of any other Deathwatch Mission Tactic that is active for your army, even if you have already selected that Deathwatch Mission Tactic this battle.",
      },
    },
    {
      name: "HELLFIRE ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One DEATHwATCH INFANTRy unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons (excluding Devastating Wounds weapons) equipped by models in your unit have the [ANTI-INFANTRY 2+] and [ANTI-MONSTER 5+] abilities.<br><br>**Restrictions:** You cannot select any units that have already been targeted with either the Kraken Rounds or Dragonfire Rounds Stratagems this phase.",
      },
    },
    {
      name: "DRAGONFIRE ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One DEATHwATCH INFANTRy unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] and [IGNORES COVER] abilities.<br><br>**Restrictions:** You cannot select any units that have already been targeted with either the Kraken Rounds or Hellfire Rounds Stratagems this phase.",
      },
    },
    {
      name: "KRAKEN ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One DEATHwATCH INFANTRy unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of ranged weapons equipped by models in your unit by 1 and improve the Range characteristic of those weapons by 6\".<br><br>**Restrictions:** You cannot select any units that have already been targeted with either the Dragonfire Rounds or Hellfire Rounds Stratagems this phase.",
      },
    },
    {
      name: "RAPID TACTICAL RELOCATION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One INQUISITOR or DEATHwATCH INFANTRy unit from your army.",
        effect: "Remove your unit from the battlefield. In the Reinforcements step of your next Movement phase, set your unit up anywhere on the battlefield that is more than 8\" horizontally away from all enemy models.<br><br>**Restrictions:** You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
    },
  ],
  "Daemon Hunters": [
    {
      name: "RITUAL OF WARDING",
      cp: "1 CP",
      rules: {
        when: "Start of any Command phase.",
        target: "One INQUISITOR, INQUISITORIAl AGENTS or ORDO MAllEUS unit from your army that is within range of an objective marker you control.",
        effect: "That objective marker is said to be Warded and remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn. While an objective marker is Warded and under your control, enemy **DAEMON** units cannot be set up on the battlefield within 6\" of it.",
      },
    },
    {
      name: "RITES OF EXORCISM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One INQUISITOR, INQUISITORIAl AGENTS or ORDO MAllEUS unit from your army.",
        effect: "Select one enemy **DAEMON** unit within 12\" and visible to your unit. That unit must take a Battle-shock test. If that test is failed, then until the end of the phase, each time a friendly AGENTS OF THE IMpERIUM unit makes an attack that targets that **DAEMON** unit, that attack has the [DEVASTATING WOUNDS] ability.",
      },
    },
    {
      name: "STEEL HEART",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a GREy KNIGHTS TERMINATOR SQUAD unit from your army Falls Back.",
        target: "That **GREY** **KNIGHTS** **TERMINATOR** **SQUAD** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "TRUESILVER ARMOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase orthe Fight phase, just after an enemy unit has selected its targets.",
        target: "One GREy KNIGHTS TERMINATOR SQUAD unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "HEXAGRAMMIC WARDS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One ORDO MAllEUS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, all Psychic weapons equipped by models in the attacking unit have the [HAZARDOUS] ability.",
      },
    },
    {
      name: "PSYBOLT AMMUNITION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One GREy KNIGHTS TERMINATOR SQUAD unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [LETHAL HITS] and [PSYCHIC] abilities.",
      },
    },
  ],
  "Imperialis Fleet": [
    {
      name: "VIOLENT ACQUISITION",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One AGENTS OF THE IMpERIUM unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of an objective marker, that attack has the [SUSTAINED HITS 1], [LANCE] and [IGNORES COVER] abilities.",
      },
    },
    {
      name: "MASTERS OF THE VOID",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One VOIDFARERS CHARACTER unit from your army.",
        effect: "Until the end of the phase, each AGENTS OF THE IMpERIUM unit from your army that is arriving from Strategic Reserves this turn can be set up within your opponent’s deployment zone (all other restrictions still apply).",
      },
    },
    {
      name: "CLOSE-QUARTERS BARRAGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One VOIDFARERS unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets a unit within 12\", improve the Strength and Armour Penetration characteristics of that attack by 1.",
      },
    },
    {
      name: "EMPEROR’S WILL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One AGENTS OF THE IMpERIUM unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to shoot in a turn in which it Advanced or Fell Back.",
      },
    },
    {
      name: "DISPLACER FIELD",
      cp: "1 CP",
      rules: {
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target: "One AGENTS OF THE IMpERIUM CHARACTER unit from your army (excluding OFFICIO ASSASSINORUM units) that was selected as the target of one or more of the attacking unit's attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save and, after the attacking unit has resolved its attacks, unless your unit is within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\" (when doing so, models in this unit move as if they have the Fly keyword).",
      },
    },
    {
      name: "SELFLESS BODYGUARD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One AGENTS OF THE IMpERIUM Attached unit that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack with the [PRECISION] ability is allocated to a **CHARACTER** model in your unit, if there are one or more Bodyguard models in your unit, roll one D6: on a 2+, that attack is allocated to a Bodyguard model of your choice in your unit instead.",
      },
    },
  ],
  "Purgation Force": [
    {
      name: "STUN GRENADES",
      cp: "1 CP",
      rules: {
        when: "Start of any phase (excluding the Command phase).",
        target: "One ADEpTUS ARbITES, INQUISITORIAl AGENTS or ORDO HERETICUS GRENADES unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Select one enemy unit (excluding **MONSTERS** or **VEHICLES**) within 8\" of and visible to your unit. That enemy unit must take a Battle-shock test and, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "DISPENSE JUSTICE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One ADEpTUS ARbITES, INQUISITORIAl AGENTS or ORDO HERETICUS unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the [LETHAL HITS] ability.",
      },
    },
    {
      name: "INVIOLATE JURISDICTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One ADEpTUS ARbITES, INQUISITORIAl AGENTS or ORDO HERETICUS INFANTRy unit from your army within range of an objective marker and that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.",
      },
    },
    {
      name: "EXECUTION ORDER",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "One ADEpTUS ARbITES, INQUISITORIAl AGENTS or ORDO HERETICUS INFANTRy unit from your army.",
        effect: "Select one enemy **CHARACTER** unit on the battlefield. Until the start of your next Command phase, each time a model in your unit targets that **CHARACTER** unit, its weapons have the [PRECISION] ability.",
      },
    },
    {
      name: "LINE OF FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ADEpTUS ARbITES, INQUISITORIAl AGENTS or ORDO HERETICUS unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, models in your unit can target enemy units that are within Engagement Range of one or more friendly units with ranged weapons (excluding Blast weapons), provided the target is within 12\".",
      },
    },
    {
      name: "EXACT PUNISHMENT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an AGENTS OF THE IMpERIUM unit from your army is destroyed as the result of an enemy unit's attacks.",
        target: "One ADEpTUS ARbITES, INQUISITORIAl AGENTS or ORDO HERETICUS unit from your army that was within 6\" of the destroyed unit (you cannot target the destroyed unit with the Stratagem).",
        effect: "After the attacking unit has shot, your unit can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target).",
      },
    },
  ],
  "Veiled Blade Elimination Force": [
    {
      name: "PRIME TARGET",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Agents of the Imperium unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a **CHARACTER** unit, re-roll a Wound roll of 1. If that attack is made by an Officio Assassinorum model and it targets the enemy **WARLORD**, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "HYPERSTIMMS",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Agents of the Imperium Character unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, add 1 to the Toughness characteristic of models in your unit. In addition, if it is an Eversor Assassin unit, until the end of the phase, it has the Feel No Pain 4+ ability.",
      },
    },
    {
      name: "WILL‑SAPPING SALVO",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Agents of the Imperium Infantry unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. In addition, if it is a Culexus Assassin unit, until the end of the phase, change the Damage characteristic of ranged weapons equipped by models in your unit to 3.",
      },
    },
    {
      name: "ORBITAL OVERSIGHT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Agents of the Imperium Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\", or, if your unit has the Lone Operative ability, if the attacking model is within 6\".",
      },
    },
    {
      name: "BLIND GRENADES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit has declared a charge.",
        target: "One Agents of the Imperium Grenades or Vindicare Assassin unit from your army that was selected as one of the targets of that charge and is not within Engagement Range of one or more enemy units.",
        effect: "Until the end of the phase, subtract 1 from Charge rolls made for that enemy unit, or, if your unit is a **VINDICARE** **ASSASSIN**, subtract 2 from Charge rolls made for that enemy unit instead.",
      },
    },
    {
      name: "ENSNARING TRAP",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One Agents of the Imperium Infantry unit from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units.",
        effect: "Your unit can declare a charge. When doing so, you must select one or more of those enemy units as the targets of that charge, and your unit does not receive a Charge bonus this turn. In addition, if it is a Callidus Assassin unit and it makes a Charge move as a result of this Stratagem, until the end of the turn, each time a model in your unit makes a melee attack, add 1 to the Wound roll.",
      },
    },
  ],
  "Army of Faith": [
    {
      name: "SHIELD OF FAITH",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an **ADEPTA** **SORORITAS** unit from your army suffers a mortal wound.",
        target: "That **ADEPTA** **SORORITAS** unit, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3\" of it.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds. If you targeted an **ADEPTA** **SORORITAS** **JUMP** **PACK** unit from your army with this Stratagem, then until the end of the phase, while a friendly **ADEPTA** **SORORITAS** unit is unit is within 3\" of your unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds.",
      },
    },
    {
      name: "LIGHT OF THE EMPEROR",
      cp: "2 CP",
      rules: {
        when: "Command phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army.",
        effect: "Until the end of the turn, your unit is blessed. While a unit is blessed, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to saving throws). If your unit has the JUMP PACK keyword, until the end of the turn, while a friendly **ADEPTA** **SORORITAS** unit is within 3\" of your unit, that friendly unit is also blessed.",
      },
    },
    {
      name: "FAITH AND FURY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If one or more enemy models are destroyed as the result of your unit's attacks this phase, you gain 1 Miracle dice.",
      },
    },
    {
      name: "BLINDING RADIANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One ADEPTA SORORITAS INFANTRY unit from your army that was selected as the target of one or more of the attacking unit’s attacks, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3\" of such a unit.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. If you targeted an **ADEPTA** **SORORITAS** **JUMP** **PACK** unit from your army with this Stratagem, then until the end of the phase, while a friendly **ADEPTA** **SORORITAS** **INFANTRY** unit is unit is within 3\" of your unit, each time an attack targets that unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "DIVINE GUIDANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "That **ADEPTA** **SORORITAS** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If one or more enemy models are destroyed as the result of any of those attacks, you gain 1 Miracle dice.",
      },
    },
    {
      name: "ANGELIC DESCENT",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One ADEPTA SORORITAS JUMP PACK unit from your army.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.<br><br>**Restrictions:** You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
    },
  ],
  "Bringers of Flame": [
    {
      name: "SHIELD OF AVERSION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "RIGHTEOUS BLOWS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If one or more enemy models are destroyed as the result of attacks made by those weapons this phase, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test.",
      },
    },
    {
      name: "CARRY FORTH THE FAITHFUL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just before an ADEPTA SORORITAS TRANSPORT model from your army Advances.",
        target: "That **ADEPTA** **SORORITAS** **TRANSPORT** model.",
        effect: "Until the end of the turn, you can re-roll Advance rolls made for your **TRANSPORT**, and units can disembark from your **TRANSPORT** even though it Advanced. Units that do so make a shock disembark move (Core Rules, 18.07) for that disembarkation.",
      },
    },
    {
      name: "CLEANSING FLAMES",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, Torrent weapons equipped by models in your unit have the [DEVASTATING WOUNDS] ability",
      },
    },
    {
      name: "RITES OF FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that disembarked from a TRANSPORT this turn and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within 6\" that is also within range of an objective marker, add 1 to the Wound roll. If one or more enemy models are destroyed as the result of those attacks, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test.",
      },
    },
    {
      name: "BLAZING IRE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One ADEPTA SORORITAS TRANSPORT unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect: "One unit embarked within your **TRANSPORT** can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],
  "Champions of Faith": [
    {
      name: "SHIELD OF DENIAL",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a mortal wound is allocated to an **ADEPTA** **SORORITAS** unit from your army.",
        target: "That **ADEPTA** **SORORITAS** unit.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability against mortal wounds. If your unit is Righteous, until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds instead.",
      },
    },
    {
      name: "SUFFER NOT THE UNFAITHFUL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that is Righteous and that has not been selected to shoot or fight this phase.",
        effect: "Select either the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability.",
      },
    },
    {
      name: "TO THE HEART OF HERESY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the turn, improve the Strength characteristic of melee weapons equipped by models in your unit by 1. If your unit is Righteous, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 as well.",
      },
    },
    {
      name: "PATH OF THE RIGHTEOUS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the turn, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\". When doing so, if your unit is Righteous, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit.",
      },
    },
    {
      name: "BASTION OF FAITH",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Celestian Sacresants unit that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. In addition, if your unit is Righteous, you can select one other **CELESTIAN** **SACRESANTS** unit from your army that is not Battle-shocked and is within 6\" of your unit. Until the end of the phase, each time an attack targets that **CELESTIAN** **SACRESANTS** unit, subtract 1 from the Hit roll as well.",
      },
    },
    {
      name: "INDEFATIGABLE DEDICATION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTA** **SORORITAS** unit from your army Falls Back.",
        target: "That **ADEPTA** **SORORITAS** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back. If your unit is Righteous, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back instead.",
      },
    },
  ],
  "Chorus of Condemnation": [
    {
      name: "INSPIRATIONAL BATTLE CANTICLES",
      cp: "1 CP",
      rules: {
        when: "Start of the Command phase.",
        target: "One friendly ADEPTA SORORITAS INFANTRY FLY unit or one friendly EXORCIST unit.",
        effect: "Select one friendly battle-shocked **ADEPTA** **SORORITAS** unit within 6\" of your unit. That unit is no longer battle-shocked.",
      },
    },
    {
      name: "HARMONISED EXORCISM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly EXORCIST unit is **selected to shoot**.",
        target: "That **EXORCIST** unit.",
        effect: "Select one unit **visible** to and within 9\" of a friendly ADEPTA SORORITAS INFANTRY FLY unit. Your unit’s ranged attacks that target that unit have +1 to **hit rolls**.",
      },
    },
    {
      name: "DEVASTATING REPRISE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly EXORCIST unit has shot.",
        target: "One friendly ADEPTA SORORITAS INFANTRY FLY unit.",
        effect: "Select one enemy unit (excluding **MONSTER**/**VEHICLE** units) hit by those ranged attacks. Your unit’s ranged attacks that target that unit have [DEVASTATING WOUNDS].",
      },
    },
  ],
  "Hallowed Martyrs": [
    {
      name: "DIVINE INTERVENTION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One ADEPTA SORORITAS CHARACTER model from your army that was just destroyed. You can use this Stratagem on that model even though it was just **destroyed**.",
        effect: "You can discard 1-3 Miracle dice. At the end of the phase, set up that model on the battlefield, unengaged and as close as possible to where it was **destroyed**. That model is not part of an attached unit and its unit has a starting strength of 1. Roll one D3, adding 1 to the result for each Miracle dice you discarded. That model has that number of wounds remaining (up to its starting number of wounds).<br><br>**Restrictions:** You cannot select SAINT CELESTINE as the target of this **Stratagem**. You cannot select the same **CHARACTER** as the target of this **Stratagem** more than once per battle.",
      },
    },
    {
      name: "SUFFERING AND SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One Adepta Sororitas Infantry or Adepta Sororitas Walker unit from your army.",
        effect: "Until the end of the phase, each time an enemy model within Engagement Range of your unit selects its targets, it must select your unit as the target of its attacks.",
      },
    },
    {
      name: "RIGHTEOUS VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a melee attack, you can re-roll the Hit roll and, if your unit is Below Half-strength, you can re-roll the Wound roll as well.",
      },
    },
    {
      name: "SANCTIFIED IMMOLATION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One ADEPTA SORORITAS VEHICLE model from your army with the Deadly Demise ability that was just destroyed. You can use this Stratagem on that model even though It was just destroyed.",
        effect: "Do not roll one D6 to determine whether mortal wounds are inflicted by your model's Deadly Demise ability. Instead, mortal wounds are automatically inflicted.",
      },
    },
    {
      name: "SPIRIT OF THE MARTYR",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "PRAISE THE FALLEN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **ADEPTA** **SORORITAS** unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks.",
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
        target: "One PENITENT unit from your army that was just destroyed while it was within range of an objective marker you controlled. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "PURITY OF SUFFERING",
      cp: "1 CP",
      rules: {
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One PENITENT unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect: "Until the end of the phase, PENITENT models in your unit have the Feel No Pain 4+ ability.",
      },
    },
    {
      name: "PASSION OF THE PENITENT",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One PENITENT unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a **PENITENT** model in your unit makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "LASH OF GUILT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just before a PENITENT unit from your army Advances.",
        target: "That **PENITENT** unit.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced. If your unit has the PENITENT ENGINES keyword, do not make an Advance roll for it; instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "BOUNDLESS ZEAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTA** **SORORITAS** unit from your army Falls Back.",
        target: "That **ADEPTA** **SORORITAS** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot or declare a charge in a turn in which it Fell Back. If your unit has the PENITENT keyword, it is eligible to shoot and declare a charge in a turn in which it Fell Back instead.",
      },
    },
    {
      name: "DEVOUT FANATICISM",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One PENITENT unit from your army that was selected as the target as one or more of the attacking unit’s attacks.",
        effect: "Your unit can make a surge move of up to D6\"\".",
      },
    },
  ],
  "Sacred Champions": [
    {
      name: "SANCTIFIED BLOWS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly CELESTIAN SACRESANTS unit is **selected to fight**.",
        target: "That **CELESTIAN** **SACRESANTS** unit.",
        effect: "Your unit’s melee attacks have +1 **A** and **S**.",
      },
    },
    {
      name: "FAITHFUL FORTITUDE",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly CELESTIAN SACRESANTS unit suffers a mortal wound.",
        target: "That **CELESTIAN** **SACRESANTS** unit.",
        effect: "Your unit has Feel No Pain 5+ against mortal wounds until the end of the phase.",
      },
    },
    {
      name: "UNFLINCHING DETERMINATION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly CELESTIAN SACRESANTS unit is selected to make an **advance/fall-back move**.",
        target: "That **CELESTIAN** **SACRESANTS** unit.",
        effect: "• Your unit’s ranged attacks have [ASSAULT] until the end of the turn.<br>• That move does not prevent your unit from being **eligible to shoot/declare a charge**.",
      },
    },
  ],
  "Blood Legion": [
    {
      name: "WRATH UNDENIABLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Legiones Daemonica Khorne unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "GORE‑HUNGRY ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Legiones Daemonica Khorne unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "SKULLS BEGET BLOOD",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Legiones Daemonica Khorne Infantry or Legiones Daemonica Khorne Mounted unit from your army (excluding units that Fell Back this turn) that is not within Engagement Range of one or more enemy units.",
        effect: "Select one enemy unit that is not within Engagement Range of one or more units from your army and is within 8\" of and visible to your unit. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.",
      },
    },
    {
      name: "BLOOD BEGETS SKULLS",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Legiones Daemonica Khorne unit from your army that has not been selected to charge this phase.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "FOOLS’ FLIGHT",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a fall-back move.",
        target: "One friendly unengaged LEGIONES DAEMONICA KHORNE unit that is within 6\" of that enemy unit.",
        effect: "Declare a charge with your unit. When selecting charge targets, you can only select enemy units that made a fall-back move this phase and are within the maximum distance.",
      },
    },
    {
      name: "SHEATHED IN BRASS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Legiones Daemonica Khorne unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a Save characteristic of 3+.",
      },
    },
  ],
  "Cavalcade of Chaos": [
    {
      name: "FROM BEYOND THE VEIL",
      cp: "1 CP",
      rules: {
        when: "End of the Movement phase, from the start of the battle.",
        target: "One friendly LEGIONES DAEMONICA MOUNTED unit in strategic reserves.",
        effect: "Your unit can make an ingress move.",
      },
    },
    {
      name: "WARP-RIDERS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly LEGIONES DAEMONICA MOUNTED unit is selected to move.",
        target: "That **LEGIONES** **DAEMONICA** **MOUNTED** unit.",
        effect: "Your unit has MOBILE.",
      },
    },
    {
      name: "INESCAPABLE MANIFESTATIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when a unit is selected to make a fall-back move, if that unit is engaged with a friendly LEGIONES DAEMONICA MOUNTED unit.",
        target: "That **LEGIONES** **DAEMONICA** **MOUNTED** unit.",
        effect: "When an enemy unit **engaged** with your unit is selected to make a **fall-back move**, that enemy unit must use the desperate escape mode. If that enemy unit is battle-shocked, -1 from those hazard rolls.",
      },
    },
  ],
  "Daemonic Incursion": [
    {
      name: "CORRUPT REALSPACE",
      cp: "1 CP",
      rules: {
        when: "Start of any Command phase.",
        target: "One **LEGIONES** **DAEMONICA** unit from your army that is within range of an objective marker you control.",
        effect: "That objective marker is said to be Corrupted and remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn. In addition, while an objective marker is Corrupted and under your control, the area of the battlefield within 6\" of that objective marker is considered to be within your army’s Shadow of Chaos.",
      },
    },
    {
      name: "WARP SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **LEGIONES** **DAEMONICA** unit from your army that is within your army’s Shadow of Chaos.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "DRAUGHT OF TERROR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **LEGIONES** **DAEMONICA** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of weapons equipped by models in that unit by 1. In addition, until the end of the phase, each time such a weapon targets a unit that is Battle-shocked, you can re-roll the Wound roll.",
      },
    },
    {
      name: "DENIZENS OF THE WARP",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **LEGIONES** **DAEMONICA** unit from your army that is arriving using the Deep Strike ability this phase.",
        effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy models.",
      },
    },
    {
      name: "THE REALM OF CHAOS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s turn.",
        target: "Up to two LEGIONES DAEMONICA units from your army that are within your army’s Shadow of Chaos, or one other **LEGIONES** **DAEMONICA** unit from your army.",
        effect: "• Place your unit in strategic reserves.<br>• Your unit must make an ingress move in your next Movement phase (including in your first turn).<br><br>**Restrictions:** You cannot target units that are within Engagement Range of one or more enemy units with this Stratagem.",
      },
    },
    {
      name: "DAEMONIC INVULNERABILITY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **LEGIONES** **DAEMONICA** unit from your army that was selected as the target of one or more of that enemy unit’s attacks.",
        effect: "Until the end of the phase, each time an invulnerable saving throw is made for a model in your unit, re-roll a saving throw of 1.",
      },
    },
  ],
  "Legion of Excess": [
    {
      name: "THIEVES OF PAIN",
      cp: "1 CP",
      rules: {
        when: "Any phase, when an enemy unit targets a friendly LEGIONES DAEMONICA SLAANESH unit (excluding MONSTER/VEHICLE units), or when a friendly **LEGIONES** **DAEMONICA** **SLAANESH** unit (excluding **MONSTER**/**VEHICLE** units) suffers a mortal wound.",
        target: "That **LEGIONES** **DAEMONICA** **SLAANESH** unit.",
        effect: "Select one other friendly **LEGIONES** **DAEMONICA** **SLAANESH** unit that is within 9\" of and visible to your unit. Until the end of the phase, while the selected unit is on the battlefield, each time a model in your unit would lose a wound, inflict 1 **mortal wound** on the selected unit instead.",
      },
    },
    {
      name: "ARCHAGONISTS",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One Legiones Daemonica Slaanesh Monster unit or up to two Legiones Daemonica Slaanesh units (excluding Monsters) from your army that have not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in one of those units makes an attack, add 1 to the Wound roll.",
      },
    },
    {
      name: "SENSORY EXCRUCIATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Legiones Daemonica Slaanesh Monster unit from your army that is on the battlefield.",
        effect: "Each unit on the battlefield that is within your army’s Shadow of Chaos must take a Battle-shock test, subtracting 1 from that test if they are Below Half-strength.<br><br>**Designer’s Note:** ^^This Stratagem forces all friendly and enemy units alike within your army’s Shadow of Chaos to take a Battle-shock test. This can allow a Chaos Daemons player to heal units from their army through the Daemonic Terror army rule, at the risk of causing some of their own units to become Battle-shocked.^^",
      },
    },
    {
      name: "PHANTASMAL LONGING",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Legiones Daemonica Slaanesh unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "CAVALCADE OF BLADES",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a Legiones Daemonica Slaanesh unit from your army ends a Charge move.",
        target: "That **LEGIONES** **DAEMONICA** **SLAANESH** unit.",
        effect: "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit, or roll six D6 instead if your unit is a **MONSTER** unit: for each 4+, that enemy unit suffers 1 mortal wound.",
      },
    },
    {
      name: "OVERWHELMING EXCESS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Legiones Daemonica Slaanesh unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
  ],
  "Lords of the Warp": [
    {
      name: "CARNIVAL OF EXCESS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when an enemy unit has fought.",
        target: "One friendly LEGIONES DAEMONICA CHARACTER SLAANESH unit (excluding **MONSTER** units) that has not been selected to fight this phase.",
        effect: "Your unit has Fights First and must be the next unit you **select to fight**.",
      },
    },
    {
      name: "CALL TO MURDER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly LEGIONES DAEMONICA KHORNE CHARACTER unit (excluding **MONSTER** units) that made a charge move this turn is selected to fight.",
        target: "That **LEGIONES** **DAEMONICA** **CHARACTER** **KHORNE** unit.",
        effect: "Your unit’s melee attacks have +1 **A**.",
      },
    },
    {
      name: "BILIOUS BLESSING",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly LEGIONES DAEMONICA CHARACTER NURGLE unit (excluding **MONSTER** units).",
        effect: "Select one visible enemy unit within 8\" of your unit and roll seven D6:<br><br>• For each 4+, that enemy unit suffers 1 mortal wound",
      },
    },
    {
      name: "SKIRLING MAGICKS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly LEGIONES DAEMONICA CHARACTER TZEENTCH unit (excluding **MONSTER** units) is selected to shoot.",
        target: "That **LEGIONES** **DAEMONICA** **CHARACTER** **TZEENTCH** unit.",
        effect: "Your unit’s ranged attacks have [LETHAL HITS].",
      },
    },
  ],
  "Plague Legion": [
    {
      name: "SEEPING VIRULENCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Legiones Daemonica Nurgle unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in that unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "FEVER VISIONS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Legiones Daemonica Nurgle unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. After your unit has finished making its attacks, select one enemy unit hit by one or more of those attacks; that enemy unit must take a Battle-shock test.",
      },
    },
    {
      name: "FOETID RESURGENCE",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "One LEGIONES DAEMONICA NURGLE unit from your army that is on the battlefield.",
        effect: "Return up to 1 destroyed model to your unit (excluding CHARACTER models) or up to D3 destroyed models instead (excluding **CHARACTER** models) if your unit is a BATTLELINE unit, with their full wounds remaining. If your unit is a MONSTER unit, one model in your unit regains up to D3+1 lost wounds instead.",
      },
    },
    {
      name: "ROT AND RENEWAL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Legiones Daemonica Nurgle unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "MURKSHADOWS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Legiones Daemonica Nurgle Infantry unit from your army.",
        effect: "Until the end of the phase, each time your unit makes a Normal move, add 5\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "PLAGUE OF WOES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase, before selecting any targets for the Melancholic Miasma Detachment rule.",
        target: "One Legiones Daemonica Nurgle unit from your army.",
        effect: "Until the end of the phase, after an enemy unit takes a Battle-shock test as a result of the Melancholic Miasma Detachment rule, select one other enemy unit within 9\" of your unit; that enemy unit must take a Battle-shock test.",
      },
    },
  ],
  "Scintillating Legion": [
    {
      name: "IMPOSSIBLE ECLIPSE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Legiones Daemonica Tzeentch Monster unit from your army that is on the battlefield.",
        effect: "Select No Man’s Land or your opponent’s deployment zone, or spend one Flux token and select both. Until the end of the phase, the selected areas of the battlefield are within your army’s Shadow of Chaos.",
      },
    },
    {
      name: "PYROGENESIS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Legiones Daemonica Tzeentch unit from your army that has not been selected to shoot or fight that phase.",
        effect: "Until the end of the phase, add 2 to the Strength characteristic of weapons equipped by models in your unit, or spend one Flux token and add 3 to the Strength characteristic of those weapons and improve the Armour Penetration characteristic of those weapons by 1 instead.",
      },
    },
    {
      name: "FLICKERING REALITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Legiones Daemonica Tzeentch unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Roll one D6, then you can spend one Flux token to re-roll the result: until the end of the phase, each time an attack targets your unit, on an unmodified Hit roll (after any re-roll) of that result, the attack sequence ends, even if the original Hit roll would have been a Critical Hit.<br><br>**Example:** If you roll a 2 and choose to spend one Flux token to re-roll the result, and the re-roll is a 6, then until the end of the phase, each time an attack targets your unit, on an unmodified Hit roll of 6 the attack sequence ends, that attack fails to hit and no Critical Hit effects (e.g. Lethal Hits) are resolved.",
      },
    },
    {
      name: "FATEBORNE NIGHTMARES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Legiones Daemonica Tzeentch unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.",
      },
    },
    {
      name: "FICKLEFIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Legiones Daemonica Tzeentch unit from your army that is within Engagement Range of one or more enemy units.",
        effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets for, and resolving attacks with, ranged weapons. Until the end of the phase, each time an enemy model is destroyed while its unit is within Engagement Range of your unit, roll one D6: on a 5+, your unit suffers 1 mortal wound after the attacking unit has finished making its attacks.",
      },
    },
    {
      name: "DELIRIUM UNMADE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Legiones Daemonica Tzeentch unit from your army that is not within Engagement Range of one or more enemy units. Alternatively, you can spend one Flux token when you use this Stratagem and target up to two **LEGIONES** **DAEMONICA** **TZEENTCH** units from your army instead (including those within Engagement Range of one or more enemy units).",
        effect: "Remove your units from the battlefield and place them into Strategic Reserves.",
      },
    },
  ],
  "Shadow Legion": [
    {
      name: "SPITEFUL DEMISE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a Shadow Legion unit from your army is destroyed, before removing the last model in that unit from the battlefield and before rolling any dice for the Deadly Demise ability.",
        target: "That **SHADOW** **LEGION** unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Roll one D6 for each enemy unit that is within Engagement Range of the last model in your unit, adding 2 to the result if your unit has the Slaanesh keyword: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds.",
      },
    },
    {
      name: "CHANNELLED WRATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Shadow Legion unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit has the Khorne keyword, until the end of the phase, improve the Armour Penetration characteristic of those weapons by 1 as well.",
      },
    },
    {
      name: "DEATH DENIED",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Shadow Legion unit from your army.",
        effect: "One model in your unit regains up to 3 lost wounds. In addition, If your unit has the Tzeentch keyword, return up to one destroyed model (excluding Character models) to your unit with its full wounds remaining.",
      },
    },
    {
      name: "ENCROACHING DARKNESS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "Up to one Shadow Legion Heretic Astartes unit from your army and up to one Shadow Legion Legiones Daemonica unit from your army. You can only select units that arrived from Reserves this turn.",
        effect: "Until the end of the phase, weapons equipped by models in your selected units have the [IGNORES COVER] ability.",
      },
    },
    {
      name: "SHADE PATH",
      cp: "2 CP",
      rules: {
        when: "Start of your opponent's Charge phase.",
        target: "One friendly SHADOW LEGION unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. When that enemy unit declares a charge, that enemy unit has -1 to charge rolls. If your unit has Nurgle, that enemy unit must make a battle-shock roll.",
      },
    },
    {
      name: "BINDING SHADOW",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to one Shadow Legion Heretic Astartes unit from your army and up to one Shadow Legion Legiones Daemonica unit from your army. You can only select units that are not within Engagement Range of one or more enemy units.",
        effect: "Remove those selected units from the battlefield and place them into Strategic Reserves.",
      },
    },
  ],
  "Warptide": [
    {
      name: "DAEMONIC INFESTATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One friendly LEGIONES DAEMONICA BATTLELINE unit (excluding PINK HORRORS units).",
        effect: "Your unit heals 3 wounds.",
      },
    },
    {
      name: "SOULSEEING",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly LEGIONES DAEMONICA BATTLELINE unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. That enemy unit has +6\" detection range.",
      },
    },
    {
      name: "INCORPOREAL ENTITIES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly LEGIONES DAEMONICA BATTLELINE unit.",
        target: "That **LEGIONES** **DAEMONICA** **BATTLELINE** unit.",
        effect: "Ranged attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.",
      },
    },
  ],
  "Cabal of Chaos": [
    {
      name: "INFERNAL VIGOUR",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One friendly HERETIC ASTARTES PSYKER/DAEMON unit (excluding KHORNE units).",
        effect: "Your unit heals D3+1 wounds.",
      },
    },
    {
      name: "FLESHY CURSE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly HERETIC ASTARTES PSYKER unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. Roll one D6:<br><br>• On a 1, that enemy unit suffers 1 mortal wound.<br>• On a 2-4, that enemy unit suffers D3 **mortal wounds**.<br>• On a 5-6, that enemy unit suffers 2D3 **mortal wounds**.These **mortal wounds** are inflicted by a psychic attack.",
      },
    },
    {
      name: "WREATHED IN WARPFLAME",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly HERETIC ASTARTES PSYKER unit is selected to shoot.",
        target: "That **HERETIC** **ASTARTES** **PSYKER** unit.",
        effect: "Your unit’s ranged attacks have [IGNORES COVER].",
      },
    },
  ],
  "Chaos Cult": [
    {
      name: "CHOSEN FOR GLORY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One DAMNED unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Your unit can make a Desperate Pact. If it does, until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll, and if your unit did not fail the resulting Leadership test when making that Desperate Pact, you can re-roll the Wound roll as well.",
      },
    },
    {
      name: "SELFLESS DEMISE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One DAMNED unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has resolved all of its attacks, each time a model in your unit is destroyed, roll one D6 on a 6, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.",
      },
    },
    {
      name: "INFERNAL SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One DAMNED unit from your army that has not been selected to fight this phase.",
        effect: "Your unit can make a Desperate Pact. If it does, your unit suffers D3 mortal wounds (in addition to any suffered for failing the resulting Leadership test), and until the end of the phase, add 1 to the Attacks characteristic of the melee weapons equipped by models in your unit, and if your unit did not fail the resulting Leadership test when making that Desperate Pact, until the end of the phase, improve the Strength characteristic of those weapons by 1 as well.",
      },
    },
    {
      name: "CRAZED FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One DAMNED unit from your army that has not been selected to shoot this phase.",
        effect: "Your unit can make a Desperate Pact. If it does, until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1, and if your unit did not fail the resulting Leadership test when making that Desperate Pact, improve the Strength characteristic of that attack by 1 as well.",
      },
    },
    {
      name: "RECKLESS HASTE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase",
        target: "One DAMNED unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "MORTAL THRALLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected ts targets.",
        target: "One **HERETIC** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking units attacks, and one friendly DAMNED unit within 3\" of your unit and visible to both your unit and the attacking unit.",
        effect: "Until the end of the phase, while your **DAMNED** unit is on the battlefield, each time your opponent would make a Wound roll for an attack that targets your **HERETIC** **ASTARTES** unit, if your **DAMNED** unit is visible to the attacking model and is an eligible target for that attack, no roll is made; instead, your **DAMNED** unit suffers a number of mortal wounds equal to the Damage characteristic of that attack.",
      },
    },
  ],
  "Creations of Bile": [
    {
      name: "MONSTROUS VISAGES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Heretic Astartes Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "MASTERS ARE WATCHING",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Heretic Astartes Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, subtracting 1 from the result if it is a Damned unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SPECIMENS FOR THE SPIDER",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One Heretic Astartes Infantry unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a melee attack that targets a **CHARACTER** unit, you can re-roll the Wound roll. After your unit has fought, if one or more enemy **CHARACTER** models were destroyed as a result of those attacks, select one enemy unit within 6\" of your unit. That enemy unit must take a Battle-shock test. If the enemy **WARLORD** was destroyed as a result of those attacks, each enemy unit within 6\" of your unit must take a Battle-shock test instead.",
      },
    },
    {
      name: "DELAYED MUTATIONS",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Heretic Astartes Infantry unit (excluding Damned units) from your army.",
        effect: "Your unit suffers D3 mortal wounds. Then select one augmentation (see Experimental Augmentations). Until the start of your next Command phase, models in your unit have the selected augmentation in addition to any other augmentations they have.",
      },
    },
    {
      name: "DIABOLIC REGENERATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Heretic Astartes Infantry unit (excluding Damned units) from your army.",
        effect: "One destroyed model (excluding Character models) is returned to your unit. If your unit is a Battleline unit, D3 destroyed models (excluding **CHARACTER** models) are returned to your unit instead.",
      },
    },
    {
      name: "AUTOSTIMULANTS",
      cp: "1 CP",
      rules: {
        when: "Start of your Charge phase.",
        target: "One Heretic Astartes Infantry unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
  ],
  "Cult of the Arkifane": [
    {
      name: "TOUCH OF THE ARKIFANE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army (excluding Damned units) that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, if your unit is selected to make a Dark Pact, you can select both abilities for that unit’s weapons to gain.",
      },
    },
    {
      name: "BALEFIRE BOON",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Soul Forge unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SOUL-TALLY OFFERING",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Soul Forge unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a **CHARACTER**, **MONSTER** or **VEHICLE** unit, you can re-roll the Wound roll.",
      },
    },
    {
      name: "BIOMECHANOID REGENERATION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army (excluding Damned units).",
        effect: "One model in your unit regains up to D3 lost wounds. If your unit has the Soul Forge keyword, one model in your unit regains up to 3 lost wounds instead.",
      },
    },
    {
      name: "FORGE-FIRE SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **HERETIC** **ASTARTES** unit from your army Advances.",
        target: "That **HERETIC** **ASTARTES** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced. If your unit has the Soul Forge keyword, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced instead.",
      },
    },
    {
      name: "UNHOLY FORTITUDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Soul Forge unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, add 1 to the Toughness characteristic of models in your unit.",
      },
    },
  ],
  "Deceptors": [
    {
      name: "DETONATOR",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy model with the Deadly Demise ability (excluding **TITANIC** models) is destroyed",
        target: "One HERETIC ASTARTES CHARACTER unit from your army that was within 18\" of that enemy model when it was destroyed.",
        effect: "Your opponent does not roll to determine whether mortal wounds are inflicted by their model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted (if that ability inflicts a random number of mortal wounds, your opponent rolls to determine that number as normal).",
      },
    },
    {
      name: "FROM ALL SIDES",
      cp: "1 CP",
      rules: {
        when: "Start of your Charge phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army.",
        effect: "Until the end of the phase, add 1 to Charge rolls made for your unit for each other **HERETIC** **ASTARTES** unit from your army that made a Charge move this phase (to a maximum of +3)",
      },
    },
    {
      name: "PICK THEM OFF",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its Starting Strength, you can re-roll the Hit roll. If the target is Below Half-strength, you can re-roll the Wound roll as well.",
      },
    },
    {
      name: "COILS OF DECEPTION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **HERETIC** **ASTARTES** unit from your army Falls Back.",
        target: "That **HERETIC** **ASTARTES** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back",
      },
    },
    {
      name: "RELENTLESS PURSUIT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One HERETIC ASTARTES INFANTRY or HERETIC ASTARTES MOUNTED unit from your army that is within 8\" of that enemy unit and not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "SCRAMBLED COORDINATES",
      cp: "1 CP",
      rules: {
        when: "Start of the Reinforcements step of your opponent’s Movement phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army.",
        effect: "Until the end of the phase, enemy units that are set up on the battlefield from Reserves cannot be set up within 12\" horizontally of your unit.",
      },
    },
  ],
  "Devotees of Destruction": [
    {
      name: "RUINATION’S BOUNTY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly HAVOCS/OBLITERATORS unit is selected to shoot.",
        target: "That **HAVOCS/OBLITERATORS** unit.",
        effect: "When your unit uses the Dark Pacts ability, your unit’s ranged attacks have:<br><br>• [LETHAL HITS].<br>• [SUSTAINED HITS 1].",
      },
    },
    {
      name: "SNARE OF FIRE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged HAVOCS unit.",
        target: "That **HAVOCS** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
    {
      name: "UNDYING HATRED",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly HAVOCS/OBLITERATORS unit.",
        target: "That **HAVOCS/OBLITERATORS** unit.",
        effect: "Attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.",
      },
    },
  ],
  "Dread Talons": [
    {
      name: "DEPTHLESS CRUELTY",
      cp: "1 CP",
      rules: {
        when: "Fight phase",
        target: "One HERETIC ASTARTES INFANTRY unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Battle-shocked and/or Below Half-strength, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "BLOODY EXAMPLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **HERETIC** **ASTARTES** unit from your army destroys a **CHARACTER** unit.",
        target: "That **HERETIC** **ASTARTES** unit.",
        effect: "Each enemy unit within 12\" of and visible to your unit must take a Battle-shock test.",
      },
    },
    {
      name: "PITILESS HUNTERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One HERETIC ASTARTES INFANTRY unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Battle-shocked and/or Below Half-strength, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
    {
      name: "RELENTLESS TERROR",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a HERETIC ASTARTES INFANTRY unit from your army Falls Back.",
        target: "That **HERETIC** **ASTARTES** **INFANTRY** unit.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "SCREAMING DESCENT",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your Movement phase, from the second battle round onwards.",
        target: "One HERETIC ASTARTES JUMP PACK unit from your army that is in Reserves.",
        effect: "Set your unit up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge. Then select one enemy **INFANTRY** or **MOUNTED** unit within 9\" of and visible to your unit: that unit must take a Battle-shock test.",
      },
    },
    {
      name: "MERCILESS PURSUIT",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One HERETIC ASTARTES INFANTRY unit from your army that is not within Engagement range of one or more enemy units.",
        effect: "Select one enemy unit that Fell Back this turn and is within 6\" of your unit. Your unit can declare a charge as if it were your Charge phase. When doing so, you can only select that enemy unit as the target of that charge (and only if it is an eligible target). Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    },
  ],
  "Fellhammer Siege-host": [
    {
      name: "PERSISTENT ASSAILANTS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army that was selected as the target of one or more attacks this phase and has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll, and if your unit is Below Half-strength you can re-roll the Wound roll as well.",
      },
    },
    {
      name: "BRUTAL ATTRITION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One HERETIC ASTARTES INFANTRY unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a melee attack is allocated to your unit, after the attacking unit has finished making its attacks, roll one D6 (to maximum of six D6 per attacking unit): for each 4+, the attacking unit suffers 1 mortal wound.",
      },
    },
    {
      name: "PITILESS CANNONADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Below Half-strength, a successful unmodified Hit roll of 5+ scores a Critical Hit",
      },
    },
    {
      name: "POINT-BLANK DESTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase",
        target: "One **HERETIC** **ASTARTES** unit from your army that is within Engagement Range of one or more enemy units and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, your unit’s ranged weapons (excluding Blast weapons) have the [PISTOL] ability.",
      },
    },
    {
      name: "STEADFAST DETERMINATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.",
      },
    },
    {
      name: "SIEGECRAFT",
      cp: "1 CP",
      rules: {
        when: "Start of your opponents Charge phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit selects your unit as a target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).",
      },
    },
  ],
  "Huron’s Marauders": [
    {
      name: "HARDENED KILLERS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Damned unit from your army.",
        effect: "Select one of the following effects:<br><br>• Improve the Ballistic Skill characteristic of ranged weapons equipped by models in this unit by 1.<br>• Improve the Attacks characteristic of Rapid Fire weapons equipped by models in this unit by 1.<br>• Improve the Save characteristic of models in this unit by 1.Until the start of your next turn, your unit has the benefit of that effect.",
      },
    },
    {
      name: "AT THE TYRANT’S COMMAND",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **HERETIC** **ASTARTES** unit (excluding Monsters and Vehicles) from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "SEIZE THE PRIZE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **HERETIC** **ASTARTES** unit (excluding Monsters and Vehicles) from your army has been selected to Advance.",
        target: "That **HERETIC** **ASTARTES** unit.",
        effect: "Do not make an Advance roll for your unit. Instead, until the end of the phase add 6\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "REAVERS’ FLURRY",
      cp: "1 CP",
      rules: {
        when: "Your Fight phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army that made a Charge move this turn.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristics of melee weapons equipped by models in your unit.",
      },
    },
    {
      name: "TO THE FAVOURED THE SPOILS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One HERETIC ASTARTES unit from your army that lost one or more wounds as a result of those attacks.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
    {
      name: "ENCIRCLING SURGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One **HERETIC** **ASTARTES** unit (excluding Monsters and Vehicles) from your army that is within 6\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Murdertalon Raiders": [
    {
      name: "PLUNGING TALONS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly HERETIC ASTARTES INFANTRY FLY unit that made a charge move this turn is selected to fight.",
        target: "That **HERETIC** **ASTARTES** **INFANTRY** **FLY** unit.",
        effect: "Your unit’s melee attacks have [LANCE].",
      },
    },
    {
      name: "RAKING PASS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly HERETIC ASTARTES INFANTRY FLY unit is selected to make a fall-back move.",
        target: "That **HERETIC** **ASTARTES** **INFANTRY** **FLY** unit.",
        effect: "That move does not prevent your unit from being eligible to declare a charge.",
      },
    },
    {
      name: "WARP-TWISTED TERRORS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly WARP TALONS unit ends a move.",
        target: "That **WARP** **TALONS** unit.",
        effect: "Select one visible enemy unit (excluding **MONSTER/VEHICLE** units) within 9\" of your unit. That enemy unit makes a battle-shock roll, with -1 to that **battle-shock roll**.",
      },
    },
  ],
  "Nightmare Hunt": [
    {
      name: "TALONS SUNK DEEP",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Heretic Astartes Infantry unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Battle-shocked and/or Below Half-strength, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "PREY ON THE WEAK",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Heretic Astartes Infantry unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Battle-shocked and/or Below Half-strength, you can re-roll the Hit roll.",
      },
    },
    {
      name: "SADISTIC DISPLAY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **HERETIC** **ASTARTES** unit from your army destroys an enemy unit.",
        target: "That **HERETIC** **ASTARTES** unit.",
        effect: "Each enemy unit within 6\" of and visible to your unit (excluding **MONSTER** and **VEHICLE** units) must take a Battle-shock test.",
      },
    },
    {
      name: "MALICIOUS SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Heretic Astartes Infantry unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "RELENTLESS TERROR",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Heretic Astartes Infantry unit from your army Falls Back.",
        target: "That **HERETIC** **ASTARTES** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "HORRIFIC INCURSION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army that arrived from Reserves this turn.",
        effect: "Select one enemy unit (excluding **MONSTER** and **VEHICLE** units) within 12\" of and visible to your unit: that unit must take a Battle-shock test, subtracting 1 from the result.",
      },
    },
  ],
  "Pactbound Zealots": [
    {
      name: "EYE OF THE GODS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a HERETIC ASTARTES CHARACTER unit from your army (excluding DAMNED, DAEMON and EPIC HERO units) destroys a enemy unit.",
        target: "One **HERETIC** **ASTARTES** **CHARACTER** model in that unit.",
        effect: "Until the end of the battle, add 1 to the Move, Toughness and Wounds characteristics of that **CHARACTER** model, and add 1 to the Attacks. Strength and Damage characteristics of that **CHARACTER** model’s melee weapons.",
      },
    },
    {
      name: "ETERNAL HATE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if it is a Khorne unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "PROFANE ZEAL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Heretic Astartes Chaos Undivided unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Wound roll.",
      },
    },
    {
      name: "SKINSHIFT",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army.",
        effect: "One model in your unit regains up to 3 lost wounds. In addition, if your unit is a Tzeentch unit below its Starting Strength, one destroyed model (excluding Character models) is returned to your unit with its full wounds remaining.",
      },
    },
    {
      name: "TORPEFYING REFRAIN",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back. If your unit is a Slaanesh unit, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.",
      },
    },
    {
      name: "FESTERING MIASMA",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit has the Stealth ability. In addition, if your unit is a Nurgle unit, it can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
  ],
  "Renegade Raiders": [
    {
      name: "UNFAILINGLY OBDURATE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SCOUR AND SEIZE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within range of an objective marker, that attack has the [PRECISION] ability.",
      },
    },
    {
      name: "OPPORTUNISTIC RAIDERS",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase",
        target: "One **HERETIC** **ASTARTES** unit from your army that was eligible to fight this phase.",
        effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\", or up to 12\" if it is a MOUNTED unit. Otherwise, your unit can make a Fall Back move. It cannot embark within a TRANSPORT at the end of this move if it disembarked from a **TRANSPORT** this turn.",
      },
    },
    {
      name: "WARPCHARGED ENGINES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One HERETIC ASTARTES TRANSPORT or HERETIC ASTARTES MOUNTED unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "RUINOUS RAID",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or your Fight phase",
        target: "One **HERETIC** **ASTARTES** unit from your army that disembarked from a TRANSPORT this turn and has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if the target of that attack is within range of an objective marker, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
    {
      name: "REAVERS’ HASTE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One HERETIC ASTARTES INFANTRY or HERETIC ASTARTES MOUNTED unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced. If you select one or more units within range of an objective marker as a target of that charge, add 1 to the Charge roll.",
      },
    },
  ],
  "Renegade Warband": [
    {
      name: "NEVER OUTGUNNED",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army that has just been selected to shoot or fight.",
        effect: "Select either the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability.",
      },
    },
    {
      name: "VENGEFUL DESTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Heretic Astartes Infantry (excluding Damned units) or Heretic Astartes Mounted unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time your unit makes an attack that targets your Vendetta target, add 1 to the Wound roll.",
      },
    },
    {
      name: "UNDYING HATRED",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "RENEGADE CLAIM",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase",
        target: "One **HERETIC** **ASTARTES** unit from your army within range of an objective marker you control.",
        effect: "That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "CORRUPTED MUNITIONS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HERETIC** **ASTARTES** unit in your army that has just been selected to shoot.",
        effect: "Until the end of the phase, each time a model in this unit makes a ranged attack, improve the Armour Penetration of that attack by 1.",
      },
    },
    {
      name: "REAVERS’ REACTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **HERETIC** **ASTARTES** unit (excluding Monsters and Vehicles) from your army that was hit by one or more of those attacks.",
        effect: "Your unit can make a Normal move of up to D6\".",
      },
    },
  ],
  "Soulforged Warpack": [
    {
      name: "DESPERATE PLEDGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One HERETIC ASTARTES DAEMON VEHICLE unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, if your unit invokes its contract, each time it makes an attack, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "GLUT OF SOULS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One HERETIC ASTARTES DAEMON VEHICLE unit from your army (excluding Titanic units) that has not been selected to fight this phase.",
        effect: "Until the end of the phase, if your unit invokes its contract, each time it makes an attack that destroys an enemy model, roll one D6: on 5+, your unit regains 1 lost wound after all of its attacks have been resolved (to a maximum of 6 wound).",
      },
    },
    {
      name: "DAEMONIC POSSESSION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One HERETIC ASTARTES VEHICLE unit from your army (excluding Daemon units).",
        effect: "Until the end of the battle, your unit has the **DAEMON** keyword.",
      },
    },
    {
      name: "UNSTOPPABLE RAMPAGE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or Charge phase.",
        target: "One Heretic Astartes Vehicle or Vashtorr the Arkifane unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes Normal, Advance or charge move, it can move horizontally through terrain features as if they were not there.",
      },
    },
    {
      name: "PREDATORY PURSUIT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall back move.",
        target: "One HERETIC ASTARTES VEHICLE or Vashtorr the Arkifane unit from your army that is within 8\" of that enemy unit and not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to 6\", but must end that move as close as possible to that enemy unit.",
      },
    },
    {
      name: "FEEDING FRENZY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit (excluding **MONSTER** and **VEHICLES**) is selected to Fall Back.",
        target: "One HERETIC ASTARTES DAEMON VEHICLE or Vashtorr the Arkifane unit from your army that is within Engagement Range of that enemy unit.",
        effect: "Until the end of the phase, each time an enemy unit (excluding **MONSTERS** and **VEHICLES**) that is within Engagement Range of your units Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, of that enemy unit is Battle-shocked, substract 1 from each of those tests.",
      },
    },
  ],
  "Veterans of the Long War": [
    {
      name: "ENDLESS IRE",
      cp: "2 CP",
      rules: {
        when: "Any phase, just after your focus of hatred is destroyed.",
        target: "One HERETIC ASTARTES CHARACTER unit from your army (excluding DAMNED units)",
        effect: "Select one enemy unit within 12\" of and visible to your unit. Until the start of your next Command phase, that enemy unit is considered to be your focus of hatred.",
      },
    },
    {
      name: "CONTEMPTUOUS DISREGARD",
      cp: "1 CP",
      rules: {
        when: "Your opponents Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "BRINGERS OF DESPAIR",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army (excluding DAMNED units) that is within Engagement Range of your focus of hatred.",
        effect: "Until the end of the phase, your unit has the Fights First ability.",
      },
    },
    {
      name: "BLACK CRUSADE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase",
        target: "One HERETIC ASTARTES INFANTRY unit or HERETIC ASTARTES MOUNTED unit from your army (excluding DAMNED units).",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced or Fell Back, and bolt pistols, boltguns and combi-bolters equipped by models in your unit have the [DEVASTATING WOUNDS] ability while your unit has not already inflicted 6 wounds this turn using that ability.",
      },
    },
    {
      name: "LET THE GALAXY BURN",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **HERETIC** **ASTARTES** unit from your army (excluding TZEENTCH units) that has not been selected to shoot this phase",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability, and change the Attacks characteristic of Torrent weapons equipped by models in your unit to 6.",
      },
    },
    {
      name: "MILLENNIA OF EXPERIENCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One HERETIC ASTARTES INFANTRY or HERETIC ASTARTES MOUNTED unit from your army (excluding DAMNED units) that is within 8\" of that enemy unit and not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
  ],
  "Warpstrike Champions": [
    {
      name: "EMPYRIC DISLOCATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **HERETIC** **ASTARTES** unit from your army (excluding Damned units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.<br><br>**Restrictions:** You cannot target the same unit with the Empyric Dislocation and Armour of Corruption Stratagems in the same phase.",
      },
    },
    {
      name: "ARMOUR OF CORRUPTION",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Heretic Astartes Terminator, Obliterators or Mutilators unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.<br><br>**Restrictions:** You cannot target the same unit with the Armour of Corruption and Empyric Dislocation Stratagems in the same phase.",
      },
    },
    {
      name: "WARP FLICKER",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Heretic Astartes Terminator, Obliterators or Mutilators unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "WARP-TAINTED",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Heretic Astartes Terminator, Obliterators or Mutilators unit from your army, within range of an objective marker you control.",
        effect: "That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "SIEGEBREAKER STRIKE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "Up to two **HERETIC** **ASTARTES** units from your army that were set up using the Deep Strike ability this turn and have not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your units have the [IGNORES COVER] ability.",
      },
    },
    {
      name: "PORTAL OF SPITE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One HERETIC ASTARTES unit from your army that was set up using the Deep Strike ability this turn and has not declared a charge this phase.",
        effect: "Your unit has +2 to charge rolls.",
      },
    },
  ],
  "Champions of Contagion": [
    {
      name: "BLESSINGS OF FILTH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Death Guard Attached unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "MALIGNANCE MAGNIFIED",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Death Guard Attached unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its Starting Strength, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
    {
      name: "GROTESQUE FORTITUDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Death Guard Attached unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, add 2 to the Toughness characteristic of models in your unit.",
      },
    },
    {
      name: "RABID INFUSION",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One Death Guard unit from your army that includes two Character models.",
        effect: "Until the end of the phase, your unit has the Fights First ability.",
      },
    },
    {
      name: "MOBILE VECTOR",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, before the Reinforcements step.",
        target: "One Death Guard Character unit from your army that is not leading a unit.",
        effect: "Select one other friendly Death Guard unit (excluding Battle-shocked units and Attached units that already have two Leader units or one of your **CHARACTER** units leading it] within 2\" horizontally and 5\" vertically of your unit that your unit can lead (as described in the Leader section of its datasheet]. Your unit attaches to that unit as a Leader. Change that unit’s Starting Strength accordingly.",
      },
    },
    {
      name: "DEATH’S HEADS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Biologus Putrifier unit from your army that is not within Engagement Range of one or more enemy units and has not been selected to shoot this phase.",
        effect: "Select one enemy unit (excluding **VEHICLES**) that is within 8\" of and visible to your unit. Until the start of your next turn, that unit has the effect of all Plagues (see Nurgle’s Gift).",
      },
    },
  ],
  "Contagion Engines": [
    {
      name: "FRESH VECTORS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly CONTAGION ENGINE unit is selected to attack.",
        target: "That **CONTAGION** **ENGINE** unit.",
        effect: "Your unit’s attacks can re-roll wound rolls of 1.",
      },
    },
    {
      name: "BLOODRUST DELUGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly CONTAGION ENGINE unit is selected to shoot.",
        target: "That **CONTAGION** **ENGINE** unit.",
        effect: "Select one visible enemy unit. That enemy unit is Afflicted until your unit has attacked.",
      },
    },
    {
      name: "SOULROT FLUX",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit is selected to make a fall-back move, if that enemy unit is engaged with a friendly CONTAGION ENGINE unit.",
        target: "That **CONTAGION** **ENGINE** unit.",
        effect: "When an enemy unit **engaged** with your unit is selected to make a **fall-back move**, roll one D6:<br><br>• On a 1, that enemy unit suffers 1 mortal wound.<br>• On a 2-5, that enemy unit suffers D3 **mortal wounds**.<br>• On a 6, that enemy unit suffers 3 **mortal wounds**.",
      },
    },
  ],
  "Death Lord’s Chosen": [
    {
      name: "BLOOMING PESTILENCE",
      cp: "1 CP",
      rules: {
        when: "Start of any phase.",
        target: "One Terminator unit from your army.",
        effect: "Until the end of the phase, add 3\" to the Contagion Range of models in your unit.",
      },
    },
    {
      name: "GRIM REAPERS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Terminator unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit (excluding **MONSTERS** and **VEHICLES**) you can re-roll the Hit roll.",
      },
    },
    {
      name: "UNDYING SPITE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Terminator unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SIGNAL POX",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Lord of Virulence model from your army.",
        effect: "Select one objective marker within 30\" of and visible to your model. Until the start of your next turn, while an enemy unit is within range of that objective marker, that unit is Afflicted.",
      },
    },
    {
      name: "MORTARION'S TEACHINGS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Terminator unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] and [HEAVY] abilities.",
      },
    },
    {
      name: "SICKENING IMPACT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a Terminator unit from your army ends a Charge move.",
        target: "That **TERMINATOR** unit.",
        effect: "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 2+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).",
      },
    },
  ],
  "Flyblown Host": [
    {
      name: "NAUSEATING PAROXYSMS",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase",
        target: "One friendly engaged PLAGUE MARINES unit.",
        effect: "Select one enemy unit **engaged** with your unit. That enemy unit makes a battle-shock roll, with -1 to that **battle-shock roll**.",
      },
    },
    {
      name: "DRONING HORROR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly PLAGUE MARINES unit is selected to shoot.",
        target: "That **PLAGUE** **MARINES** unit.",
        effect: "Your unit’s ranged attacks:<br><br>• Can re-roll hit rolls of 1.<br>• That target a unit within half range, can re-roll wound rolls of 1.",
      },
    },
    {
      name: "EYE OF THE SWARM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly PLAGUE MARINES unit is selected to shoot.",
        target: "That **PLAGUE** **MARINES** unit.",
        effect: "Your unit’s ranged attacks have [CLOSE-QUARTERS].",
      },
    },
  ],
  "Mortarion’s Hammer": [
    {
      name: "BLIGHTED LAND",
      cp: "2 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One Death Guard Vehicle unit from your army.",
        effect: "Select one terrain feature within 24\" of and visible to your unit. Until the start of your next turn, enemy units are Afflicted while they are within 3\" of that terrain feature.",
      },
    },
    {
      name: "RELENTLESS GRIND",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Death Guard Vehicle unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "DRAWN TO DESPAIR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Death Guard unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a visible enemy unit (excluding **AIRCRAFT**) within your opponent’s deployment zone, you can re-roll the Hit roll.",
      },
    },
    {
      name: "FONT OF FILTH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Death Guard Vehicle unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] ability.",
      },
    },
    {
      name: "EYESTINGER STORM",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One Death Guard Vehicle unit from your army.",
        effect: "Select one objective marker visible to one or more models in your unit. Each Afflicted enemy unit within range of that objective marker must take a Battle-shock test. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.",
      },
    },
    {
      name: "STINKING MIRE",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One friendly unengaged DEATH GUARD VEHICLE unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. When that enemy unit declares a charge, that enemy unit has -1 to charge rolls.",
      },
    },
  ],
  "Paragons of Putrescence": [
    {
      name: "TERRITORIAL INFECTION",
      cp: "1 CP",
      rules: {
        when: "Start of the Command phase.",
        target: "One friendly DEATH GUARD CHARACTER unit.",
        effect: "Your unit has +1 **OC** until the end of the turn.",
      },
    },
    {
      name: "AGGRAVUS SPASMS",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting Phase.",
        target: "One friendly DEATH GUARD CHARACTER unit.",
        effect: "Select one visible enemy unit within Contagion Range of your unit. That enemy unit has +6\" detection range.",
      },
    },
    {
      name: "SIMULTANEOUS CONTAMINATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly DEATH GUARD CHARACTER unit starts an action.",
        target: "That **DEATH** **GUARD** **CHARACTER** unit.",
        effect: "That **action** does not prevent your unit from being eligible to shoot.",
      },
    },
  ],
  "Shamblerot Vectorium": [
    {
      name: "GRIP OF THE WALKING POX",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Poxwalkers unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "After the attacking unit has fought, roll one D6 for each model from your unit that was destroyed as a result of those attacks: on a 6, the attacking unit suffers 1 mortal wound. If your unit is not destroyed after the attacking unit has fought, enemy models destroyed as a result of this Stratagem count as enemy models destroyed by an attack made by a model in your unit for the purposes of the Curse of the Walking Pox ability.",
      },
    },
    {
      name: "SMEARED WITH FILTH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Poxwalkers unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
        effect: "Select one enemy unit that made one or more attacks that targeted your unit this phase. Until the end of the battle, that enemy unit is Afflicted.",
      },
    },
    {
      name: "GNAWING HUNGER",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Poxwalkers unit from your army.",
        effect: "Until the end of the turn, add 1 to the Move characteristic of models in your unit, and add 1 to the Attacks and Strength characteristics of melee weapons equipped by models in your unit.",
      },
    },
    {
      name: "HIDDEN AMONGST THE DEAD",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your Movement phase.",
        target: "One Poxwalkers unit from your army that is in Strategic Reserves and that is not an Attached unit.",
        effect: "Until the end of the phase, models in that unit have the Deep Strike ability.",
      },
    },
    {
      name: "SHOCK AND HORROR",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a Death Guard unit from your army ends a Charge move.",
        target: "That **DEATH** **GUARD** unit.",
        effect: "Each enemy unit within Engagement Range of your unit must take a Battle-shock test, subtracting 1 from that test.",
      },
    },
    {
      name: "SHAMBLING WALL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Death Guard unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly Poxwalkers unit within 3\" of your unit and visible to both your unit and the attacking unit.",
        effect: "Until the end of the phase, each time you would allocate an attack to a model in your **DEATH** **GUARD** unit, if your **POXWALKERS** unit is visible to the attacking model and is an eligible target for that attack, no saving throw is made for that attack; instead a number of **POXWALKERS** from your **POXWALKERS** unit equal to the Damage characteristic of that attack are destroyed.",
      },
    },
  ],
  "Tallyband Summoners": [
    {
      name: "PERSISTENT PESTS",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Nurglings unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
        effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength and with its full wounds remaining.<br><br>**Restrictions:** You can only use this Stratagem once per battle.",
      },
    },
    {
      name: "CLUTCHING CORRUPTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Death Guard unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that is within Engagement Range of one or more Plague Legions units from your army, you can re-roll the Hit roll.",
      },
    },
    {
      name: "ALL IS ROT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Plague Legions unit from your army that is within Engagement Range of one or more enemy units.",
        effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model’s unit is within Engagement Range of your unit, roll one D6: on a 5+, your unit suffers 1 mortal wound after the attacking unit has finished making its attacks.",
      },
    },
    {
      name: "FLESHY AVALANCHE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Plague Legions Monster unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "AVATARS OF DECAY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Plague Legions unit from your army.",
        effect: "Until the end of the phase, while an enemy unit is within 6\" of your unit, that enemy unit is Afflicted.",
      },
    },
    {
      name: "MIRESLICK",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit (excluding **MONSTERS** and **VEHICLES**) is selected to Fall Back.",
        target: "One Plague Legions unit from your army that is within Engagement Range of that enemy unit.",
        effect: "Until the end of the phase, while an enemy unit is within Engagement Range of your unit, each time that unit is selected to Fall Back, it must take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead.",
      },
    },
  ],
  "Virulent Vectorium": [
    {
      name: "PUTRID DETONATION",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Death Guard Vehicle or Death Guard Monster model from your army with the Deadly Demise ability that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Do not roll one D6 to determine whether mortal wounds are inflicted by your model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted. In addition, any enemy units that suffer mortal wounds as a result of this Stratagem are Afflicted until the start of your next turn.",
      },
    },
    {
      name: "DISGUSTINGLY RESILIENT",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Death Guard unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "PLAGUESURGE",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "Your Death Guard **WARLORD** that is on the battlefield.",
        effect: "Until the start of your next Command phase, add 3\" to the Contagion Range of models from your army.",
      },
    },
    {
      name: "LEECHSPORE ERUPTION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Death Guard model your army that has lost one or more wounds.",
        effect: "Select one enemy unit within 3\" of your model. Roll a number of D6 equal to the number of wounds your model has lost: for each 5+, that enemy unit suffers one mortal wound (to a maximum of 6 mortal wounds) and your model regains 1 lost wound (to a maximum of 6 lost wounds).",
      },
    },
    {
      name: "OVERWHELMING GENEROSITY",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One Death Guard Character unit from your army.",
        effect: "Select one enemy unit visible to your unit. Until the end of the phase, each time a **DEATH** **GUARD** unit from your army selects that enemy unit as the target of any ranged attacks, you can re-roll the dice to determine how many attacks a weapon equipped by a model in that unit makes.",
      },
    },
    {
      name: "CREEPING BLIGHT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Death Guard Infantry unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an Afflicted unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
  ],
  "Covenite Coterie": [
    {
      name: "POSTMORTALITY",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One HAEMONCULUS model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Spend 1-3 Pain tokens. At the end of the phase, set up the **destroyed** model on the battlefield, unengaged and as close as possible to where it was **destroyed**. That model is not part of an attached unit and its unit has a starting strength of 1. That model has a number of wounds remaining equal to the number of Pain tokens you just spent.<br><br>**Restrictions:** You cannot use this Stratagem if you have 0 Pain tokens, and you cannot target the same **HAEMONCULUS** model with this **Stratagem** more than once per battle.",
      },
    },
    {
      name: "SYMPHONY OF SUFFERING",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a Drukhari unit from your army destroys an enemy unit.",
        target: "That **DRUKHARI** unit.",
        effect: "Each enemy unit within 9\" of and visible to your unit must take a Battle-shock test, subtracting 1 from that test if your unit is a Haemonculus Covens unit.",
      },
    },
    {
      name: "POISONER’S ART",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a Haemonculus Covens unit from your army has fought.",
        target: "That **HAEMONCULUS** **COVENS** unit.",
        effect: "Select one enemy unit (excluding **VEHICLES**) hit by one or more of your unit’s attacks this phase. Until the end of the battle, that enemy unit is poisoned. At the start of each Command phase, roll one D6 for each poisoned unit on the battlefield: on a 4+, that unit suffers D3 mortal wounds.",
      },
    },
    {
      name: "DISTILLERS OF FEAR",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One Haemonculus Covens unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that is Battle-shocked, that attack has the [DEVASTATING WOUNDS] ability.",
      },
    },
    {
      name: "CONNOISSEURS OF PAIN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Drukhari unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Spend 1 Pain token. Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1. At the end of the phase, if your unit is still on the battlefield and it is a Haemonculus Covens unit, you gain 1 Pain token.",
      },
    },
    {
      name: "ENFOLDING NIGHTMARE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One HAEMONCULUS COVENS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
  ],
  "Exhibition of Slaughter": [
    {
      name: "PLANNED STRIKES",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly WYCH CULT unit is selected to fight.",
        target: "That **WYCH** **CULT** unit.",
        effect: "Your unit’s melee attacks have [LETHAL HITS].",
      },
    },
    {
      name: "SCULPTING THE STAGE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly WYCH CULT unit is selected to make an advance/fall-back move.",
        target: "That **WYCH** **CULT** unit.",
        effect: "That move does not prevent your unit from being eligible to start an action.",
      },
    },
    {
      name: "ACROBATIC DISPLAY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly WYCH CULT unit.",
        target: "That **WYCH** **CULT** unit.",
        effect: "Your unit has 5+ InSv.",
      },
    },
  ],
  "Kabalite Agonysts": [
    {
      name: "PRIORITISED VICTIM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly BLADES FOR HIRE/KABAL unit targets a **CHARACTER** unit.",
        target: "That **BLADES** **FOR** **HIRE/KABAL** unit.",
        effect: "Your unit’s attacks that target a **CHARACTER** unit can:<br><br>• Re-roll hit rolls of 1.<br>• Re-roll wound rolls of 1.",
      },
    },
    {
      name: "SHADOWS’ REACH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly BLADES FOR HIRE/KABAL unit has shot.",
        target: "That **BLADES** **FOR** **HIRE/KABAL** unit.",
        effect: "Those attacks do not prevent your unit from being hidden.",
      },
    },
    {
      name: "KILLERS FROM THE DARK SPIRES",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly KABALITE WARRIORS unit is selected to shoot.",
        target: "That **KABALITE** **WARRIORS** unit.",
        effect: "Your unit’s ranged attacks have [IGNORES COVER].",
      },
    },
  ],
  "Kabalite Cartel": [
    {
      name: "DOUBLE-CROSS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Kabal or Blades for Hire unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly Drukhari unit (excluding Vehicles).",
        effect: "Until the end of the phase, each time you would allocate an attack to a model in your **KABAL** or **BLADES** **FOR** **HIRE** unit, if your **DRUKHARI** unit is within Engagement Range of the attacking model, no saving throw is made for that attack; instead, your **DRUKHARI** unit suffers a number of mortal wounds equal to the Damage characteristic of that attack.",
      },
    },
    {
      name: "TAKEN ALIVE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Drukhari unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your Contract unit is destroyed as a result of those attacks, every unit in your opponent’s army must take a Battle-shock test. You cannot gain more than 3 Pain tokens as a result of failed Battle-shock tests caused by this Stratagem.",
      },
    },
    {
      name: "TAILORED TOXINS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Kabal or Blades for Hire unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets your Contract unit, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "ENEMIES WITHOUT NUMBER",
      cp: "1 CP",
      rules: {
        when: "Your Command phase, just after you complete a Contract.",
        target: "One Archon **WARLORD** from your army.",
        effect: "Select one new Contract (this can be one you have already completed), then select one unit from your opponent’s army that is on the battlefield and matches the ‘Contract’ description in that Contract. Until that Contract is completed, that unit is your Contract unit and the Murderous Agenda Detachment rule applies as normal.",
      },
    },
    {
      name: "MAKING A POINT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Kabalite Warriors or Hand of the Archon unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, improve the Ballistic Skill and Armour Penetration characteristics of ranged weapons equipped by models in your unit by 1.",
      },
    },
    {
      name: "DEADLY DECEIVERS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Kabal or Blades for Hire unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
  ],
  "Realspace Raiders": [
    {
      name: "INSENSIBLE TO PAIN",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Haemonculus Covens unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "FIGHTING SHADOWS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Drukhari unit from your army (excluding Haemonculus Covens units) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "INSTINCTIVE SPITE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase or the start of the Fight phase.",
        target: "Up to two Drukhari Battleline units from your army, or one other Drukhari unit from your army.",
        effect: "You can spend 1 Pain token. Until the end of the phase, each time a model in each of those units makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Hit roll. If you spent 1 Pain token, add 1 to the Wound roll as well.",
      },
    },
    {
      name: "DARK HARVEST",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "Up to two Wracks units from your army, or one other Drukhari unit from your army.",
        effect: "Until the end of the phase, melee weapons equipped by models in each of those units have the [LETHAL HITS] ability.",
      },
    },
    {
      name: "EAGER FOR THE KILL",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "Up to two Wyches units from your army, or one other Drukhari unit from your army, that have not been selected to move this phase.",
        effect: "Until the end of the phase, each time one of those units Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit (this is not cumulative with the Reavers’ Matchless Swiftness ability).",
      },
    },
    {
      name: "RAID AND FADE",
      cp: "2 CP",
      rules: {
        when: "End of your Shooting phase.",
        target: "Up to two Kabalite Warriors units from your army, or one other Drukhari unit from your army (excluding ScouRGES and Aircraft).",
        effect: "Each of those units can make a Normal move of up to 6\".<br><br>**Restrictions:** You cannot select units that are within Engagement Range of one or more enemy units. Until the end of the turn, those units are not eligible to declare a charge.",
      },
    },
  ],
  "Reaper’s Wager": [
    {
      name: "MALICIOUS FRENZY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Drukhari or Harlequins unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Select [LETHAL HITS] or [SUSTAINED HITS 1]. Until the end of the phase, weapons equipped by models in your unit have the selected ability.",
      },
    },
    {
      name: "FATEFUL ROLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Drukhari or Harlequins unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if that unit is losing the wager: on a 4+, do not remove it from play. That destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "MURDERER’S CIRCUS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Drukhari or Harlequins unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "SHORTEN THE ODDS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Drukhari or Harlequins unit from your army has Advanced.",
        target: "That unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "SCINTILLATING TEMPO",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase, just after a Drukhari or Harlequins unit from your army is selected to make a Normal, Advance or Fall Back move, is set up on the battlefield, or declares a charge.",
        target: "That unit.",
        effect: "Until the end of the turn, enemy units cannot use the Fire Overwatch Stratagem to shoot at your unit.",
      },
    },
    {
      name: "DANCE MACABRE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Drukhari Infantry or Harlequins Infantry unit from your army that is within 8\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to D6\". If your unit is currently losing the wager, it can make a Normal move of up to 6\" instead.",
      },
    },
  ],
  "Skysplinter Assault": [
    {
      name: "VICIOUS BLADES",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a Drukhari Transport from your army has selected its targets.",
        target: "That **TRANSPORT**.",
        effect: "After your **TRANSPORT** has fought, select one enemy unit that was the target of one or more of those attacks and roll one D6 for each model embarked within your **TRANSPORT**, adding 1 to the result if that embarked model is a Wracks model: for each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "WRAITHLIKE RETREAT",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One DRUKHARI INFANTRY unit from your army that fought this phase.",
        effect: "Your unit can make a Normal or Fall Back move, but unless it is a WYCHES unit, it must end that move wholly within 3\" horizontally and 5\" vertically of a friendly DRUKHARI TRANSPORT and must embark within that **TRANSPORT** at the end of that move (otherwise, it cannot make that move). Your unit can embark within that **TRANSPORT** in a turn it disembarked from that **TRANSPORT**.",
      },
    },
    {
      name: "POUNCE ON THE PREY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Drukhari Infantry unit from your army disembarks from a Transport that made a Normal move this phase.",
        target: "That **INFANTRY** unit.",
        effect: "Your unit makes an assault disembark move (Core Rules, 18.06) for that disembarkation.",
      },
    },
    {
      name: "SKYBORNE ANNIHILATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Drukhari unit from your army that has not been selected to shoot this phase and that disembarked from a Transport this turn.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability, or the [SUSTAINED HITS 2] ability if your unit is a Kabalite Warriors or Hand of the Archon unit.",
      },
    },
    {
      name: "SWOOPING MOCKERY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Drukhari Transport from your army that is within 8\" of that enemy unit.",
        effect: "Your **TRANSPORT** can make a Normal move of up to 6\".",
      },
    },
    {
      name: "NIGHT SHIELD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Drukhari Vehicle unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
  ],
  "Spectacle of Spite": [
    {
      name: "BERSERK FUGUE",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Wych Cult unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "DEADLY DEBUT",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One DRUKHARI unit from your army that made a Charge move this turn and has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If your unit is a Wyches unit, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 as well.",
      },
    },
    {
      name: "FEIGNED WEAKNESS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Drukhari unit from your army Falls Back.",
        target: "That **DRUKHARI** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in turn in which it Fell Back.",
      },
    },
    {
      name: "PRETERNATURAL AGILITY",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement or Charge phase.",
        target: "One Wych Cult unit from your army.",
        effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, you can ignore any or all modifiers to its Move characteristic and to Advance and Charge rolls made for it and, until the end of the turn, each time a model in your unit makes such a move, it can move horizontally through models (when doing so, such a model can move within Engagement Range of such models but cannot end a Normal or Advance move within Engagement Range of them).",
      },
    },
    {
      name: "A CHALLENGE MET",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a fall-back move.",
        target: "One friendly unengaged WYCH CULT unit that is within 6\" of that enemy unit.",
        effect: "Declare a charge with your unit. When selecting charge targets, you can only select enemy units that made a **fall-back move** this phase and are within the maximum distance.",
      },
    },
    {
      name: "ACROBATIC DISPLAY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Wych Cult unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 5+ invulnerable save.",
      },
    },
  ],
  "Tools of Torment": [
    {
      name: "SALTING THE WOUND",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly CRONOS/TALOS unit is selected to fight.",
        target: "That **CRONOS/TALOS** unit.",
        effect: "Your unit’s attacks that target a battle-shocked unit have [DEVASTATING WOUNDS].",
      },
    },
    {
      name: "DIVIDENDS OF AGONY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly HAEMONCULUS COVENS unit destroys an enemy unit.",
        target: "That **HAEMONCULUS** **COVENS** unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. That enemy unit makes a battle-shock roll, with -1 to that **battle-shock roll**.",
      },
    },
    {
      name: "URGENT METAMORPHOSIS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly HAEMONCULUS COVENS unit is selected to make a fall-back move.",
        target: "That **HAEMONCULUS** **COVENS** unit.",
        effect: "That move does not prevent your unit from being eligible to declare a charge.",
      },
    },
  ],
  "Carnival of Excess": [
    {
      name: "SUSTAINED BY AGONY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an Emperor’s Children unit from your army destroys an enemy unit.",
        target: "That **EMPEROR’S** **CHILDREN** unit.",
        effect: "Select one friendly Legions of Excess unit within 6\" of your unit. One model in that **LEGIONS** **OF** **EXCESS** unit recovers up to 3 lost wounds or, if it is a Daemonettes unit, return upto D3+3 destroyed models to it instead.",
      },
    },
    {
      name: "ECSTATIC SLAUGHTER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **LEGIONS** **OF** **EXCESS** unit from your army destroys an enemy unit.",
        target: "That Legions OF Excess unit and one friendly Emperor’s Children unit within 6\" of it that is not within Engagement Range of one or more enemy units.",
        effect: "Your **EMPEROR’S** **CHILDREN** unit can declare a charge. If it does so and it has already been selected to fight this phase, it cannot fight again this phase.",
      },
    },
    {
      name: "VIOLENT CRESCENDO",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One Slaanesh Beasts, Slaanesh Infantry or SLAANESH Mounted unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\". When doing so, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit.",
      },
    },
    {
      name: "SYCOPHANTIC SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One LEGIONS OF EXCESS unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced or Fell Back, provided at least one of the targets of that charge is within Engagement Range of one or more Emperor’s Children units from your army.",
      },
    },
    {
      name: "UNCANNY REACTIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Slaanesh unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "DARK APPARITIONS",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Daemonettes unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves. If it arrives back on the battlefield in the Reinforcements step of your next Movement phase using the Deep Strike ability, it can be set up anywhere that is more than 6\" horizontally away from all enemy units (instead of more than 8\"), provided it is also set up wholly within 8\" of one or more friendly Emperor’s Children units.",
      },
    },
  ],
  "Coterie of the Conceited": [
    {
      name: "PROTECTION OF THE DARK PRINCE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a mortal wound or attack is allocated to a model in an Emperor’s Children unit from your army.",
        target: "That **EMPEROR’S** **CHILDREN** unit.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability, and the Feel No Pain 4+ ability against mortal wounds.",
      },
    },
    {
      name: "UNSHAKEABLE OPPONENTS",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Emperor’s Children unit from your army.",
        effect: "Until the end of the turn, each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack’s Ballistic Skill or Weapon Skill characteristic; the Hit roll; the Wound roll.",
      },
    },
    {
      name: "EMBRACE THE PAIN",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One Emperor’s Children Infantry unit from your army.",
        effect: "Until the end of the phase, each time an enemy model within Engagement Range of your unit selects targets, it must select your unit as the target of its attacks.",
      },
    },
    {
      name: "MARTIAL PERFECTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Emperor’s Children unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.",
      },
    },
    {
      name: "UNBOUND ARROGANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after an Emperor’s Children unit from your army destroys an enemy unit.",
        target: "That **EMPEROR’S** **CHILDREN** unit.",
        effect: "Increase your pledge to Slaanesh by 1.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "ARMOUR OF ABHORRENCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Emperor’s Children unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets a model in your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
  ],
  "Court of the Phoenician": [
    {
      name: "CONTEMPTUOUS DISREGARD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase.",
        target: "One Emperor’s Children unit from your army.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "PRIDEFUL SUPERIORITY",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One Emperor’s Children unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a **CHARACTER** unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
    {
      name: "SINUOUS BREACH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Emperor’s Children Daemon unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "CLOSE-QUARTERS EXCRUCIATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Emperor’s Children unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time an **EMPEROR’S** **CHILDREN** model in your unit makes an attack that targets an eligible unit within 12\", improve the Strength and Armour Penetration characteristics of that attack by 1.",
      },
    },
    {
      name: "EUPHORIC INSPIRATION",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Emperor’s Children Daemon unit from your army.",
        effect: "Until the end of the phase, you can re-roll Charge rolls for friendly Emperor’s Children units within 6\" of your unit.",
      },
    },
    {
      name: "CATALYTIC STIMULUS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One EMPEROR’S CHILDREN unit from your army that lost one or more wounds as a result of those attacks.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
  ],
  "Elegant Brutes": [
    {
      name: "DELIGHT IN AGONY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly EMPEROR’S CHILDREN TERMINATOR unit.",
        target: "That **EMPEROR’S** **CHILDREN** **TERMINATOR** unit.",
        effect: "Attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.",
      },
    },
    {
      name: "PSYCHEDELIC SOULFLAME",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly EMPEROR’S CHILDREN TERMINATOR unit is selected to attack.",
        target: "That **EMPEROR’S** **CHILDREN** **TERMINATOR** unit",
        effect: "Your unit’s attacks have +2 **S**.",
      },
    },
    {
      name: "WARP PLUNGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One friendly unengaged EMPEROR’S CHILDREN TERMINATOR unit.",
        effect: "Place your unit in strategic reserves.",
      },
    },
  ],
  "Frenzied Host": [
    {
      name: "POSSESSIVE MANIA",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly EMPEROR’S CHILDREN BATTLELINE unit within range of an objective.",
        target: "That **EMPEROR’S** **CHILDREN** **BATTLELINE** unit.",
        effect: "Attacks that target your unit have -1 **AP** until that enemy unit has attacked.",
      },
    },
    {
      name: "AGONISED CACOPHONY",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly EMPEROR’S CHILDREN BATTLELINE unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. That enemy unit has +6\" detection range.",
      },
    },
    {
      name: "ABSOLUTE SENSORY OVERLOAD",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly EMPEROR’S CHILDREN BATTLELINE unit is selected to shoot.",
        target: "That **EMPEROR’S** **CHILDREN** **BATTLELINE** unit.",
        effect: "Those ranged attacks do not prevent your unit from being hidden.",
      },
    },
  ],
  "Mercurial Host": [
    {
      name: "VIOLENT EXCESS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Emperor’s Children unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability.",
      },
    },
    {
      name: "COMBAT STIMMS",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Emperor’s Children iNFANTRY unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "HONOUR THE PRINCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Emperor’s Children Infantry unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "DARK VIGOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Emperor’s Children unit from your army (excluding Beasts and Vehicles) that is within 8\" of the enemy unit that just ended that move.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "CAPRICIOUS REACTIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Emperor’s Children unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "CRUEL RAIDERS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Emperor’s Children unit from your army that is wholly within 9\" of one or more battlefield edges and not within 3\" horizontally of one or more enemy units.",
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
        target: "One Emperor’s Children unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "DEATH ECSTASY",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Emperor’s Children unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "INCESSANT VIOLENCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an Emperor’s Children unit from your army Consolidates.",
        target: "That **EMPEROR’S** **CHILDREN** unit.",
        effect: "Until the end of the phase, each time a model in your unit makes a Consolidation move, it can move up to 6\" instead of up to 3\", provided your unit ends that Consolidation move within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "CRUEL BLADESMAN",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Emperor’s Children unit from your army that made a Charge move this turn and has not been selected to fight this phase.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1.",
      },
    },
    {
      name: "TERRIFYING SPECTACLE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One Emperor’s Children unit from your army that made a Charge move in the previous turn and destroyed one or more enemy units in the previous Fight phase.",
        effect: "Each enemy unit within 6\" of your unit must take a Battle-shock test, subtracting 1 from that test if they are Below Half-strength. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.",
      },
    },
    {
      name: "CUT DOWN THE WEAK",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit Falls Back.",
        target: "One Emperor’s Children unit from your army (you can only select a Vehicle if it is a Walker) that is within 6\" of that enemy unit and would be eligible to declare a charge against that enemy unit if it were your Charge phase.",
        effect: "Your unit can declare a charge. When doing so, you must select that enemy unit as a target of that charge, and your unit does not receive a Charge bonus this turn.",
      },
    },
  ],
  "Rapid Evisceration": [
    {
      name: "ONTO THE NEXT",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One EMPEROR’S CHILDREN unit from your army that destroyed an enemy unit this phase, and one friendly TRANSPORT it is able to embark within.",
        effect: "If your **EMPEROR’S** **CHILDREN** unit is wholly within 6\" of that **TRANSPORT**, it can embark within it. Your unit can embark within that **TRANSPORT** in a turn it disembarked from a **TRANSPORT**.",
      },
    },
    {
      name: "ADVANCE AND CLAIM",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Emperor’s Children Transport from your army that has one or more Tormentors units embarked within it (excluding Battle-shocked units).",
        effect: "Select one objective marker you control that your **TRANSPORT** is within range of. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "DYNAMIC BREAKTHROUGH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Emperor’s Children Vehicle unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through enemy models (excluding **MONSTERS** and **VEHICLES**). When doing so, it can move within Engagement Range of such models but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
    },
    {
      name: "CEASELESS ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Emperor’s Children unit from your army that disembarked from a Transport that made a Normal move this turn.",
        effect: "Your **EMPEROR’S** **CHILDREN** unit is treated as having made an assault disembark move (Core Rules, 18.06) for that disembarkation.",
      },
    },
    {
      name: "REACTIVE DISEMBARKATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Emperor’s Children Transport from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "One Emperor’s Children unit embarked within your **TRANSPORT** can disembark. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6\" of that **TRANSPORT** and not within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "OUTFLANKING STRIKE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Emperor’s Children Transport from your army, or up to two Emperor’s Children Dedicated Transports from your army.",
        effect: "For each of those **TRANSPORTS** wholly within 9\" of one or more battlefield edges, remove it from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Slaanesh’s Chosen": [
    {
      name: "DEVOTED DUELLISTS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One or more Emperor’s Children Character units from your army that have not been selected to fight this phase.",
        effect: "Select one enemy unit. Until the end of the phase, melee weapons equipped by models in those **CHARACTER** units have the [SUSTAINED HITS 1] ability while targeting that enemy unit.",
      },
    },
    {
      name: "BEAUTIFUL DEATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Emperor’s Children Character unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit is your army’s Favoured Champions. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "HEIGHTENED JEALOUSY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after an Emperor’s Children Character unit becomes your army’s Favoured Champions, or just after your army’s Favoured Champions unit destroys an enemy unit.",
        target: "Your army’s Favoured Champions unit.",
        effect: "Until the end of the phase, each time a model in an **EMPEROR’S** **CHILDREN** **CHARACTER** unit from your army that is not your army’s Favoured Champions makes an attack, add 1 to the Strength characteristic of that attack.",
      },
    },
    {
      name: "DIABOLIC MAJESTY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after an Emperor’s Children Character unit becomes your army’s Favoured Champions.",
        target: "That **EMPEROR’S** **CHILDREN** unit.",
        effect: "Each enemy unit within 6\" of your unit must take a Battle-shock test, subtracting 1 from the result.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "REFUSAL TO BE OUTDONE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, when a friendly EMPEROR’S CHILDREN CHARACTER unit within 12\" of an engaged enemy unit declares a charge.",
        target: "That **EMPEROR’S** **CHILDREN** **CHARACTER** unit.",
        effect: "Your unit can re-roll charge rolls. Your unit must end that charge move engaged with one or more of those enemy units.",
      },
    },
    {
      name: "VENGEFUL SURGE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One EMPEROR’S CHILDREN CHARACTER unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can make a surge move of up to D6\". If your unit is not your army’s Favoured Champions, you can re-roll the dice to determine the distance of that **surge move**.",
      },
    },
  ],
  "Spectacle of Slaughter": [
    {
      name: "HONOUR IS FOR FOOLS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly FLAWLESS BLADES unit is selected to fight.",
        target: "That **FLAWLESS** **BLADES** unit.",
        effect: "Your unit’s melee attacks have [PRECISION].",
      },
    },
    {
      name: "SINGLE-MINDED STRIKE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, when a friendly FLAWLESS BLADES unit starts a charge move.",
        target: "That **FLAWLESS** **BLADES** unit.",
        effect: "Your unit can move through models (excluding **MONSTER/VEHICLE** models).",
      },
    },
    {
      name: "INTOXICATED BY TRIUMPH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit that was engaged with a friendly FLAWLESS BLADES unit ends a fall-back move, if that **FLAWLESS** **BLADES** unit is unengaged.",
        target: "That **FLAWLESS** **BLADES** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
  ],
  "Biosanctic Broodsurge": [
    {
      name: "EVASIVE VANGUARD",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit ends a move within 8\" of one or more of your Cult Ambush markers, before removing those markers from the battlefield.",
        target: "Select one of those Cult Ambush markers.",
        effect: "You can set up that Cult Ambush marker anywhere on the battlefield that is more than 8\" horizontally away from all enemy units.",
      },
    },
    {
      name: "SAINTLY PAROXYSM",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit destroys a Genestealer Cults Character model from your army.",
        target: "That destroyed **CHARACTER** model. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds. If that Character model is an Abominant or Patriarch, that enemy unit suffers 2D3 mortal wounds instead.",
      },
    },
    {
      name: "GENE-TWISTED MUSCLE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Aberrants, Biophagus or Purestrain Genestealers unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a **MONSTER** or **VEHICLE**, add 1 to the Wound roll.",
      },
    },
    {
      name: "HYPER-METABOLIC VIGOUR",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Aberrants, Biophagus or Purestrain Genestealers unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\". In addition, it does not need to end that move closer to the closest enemy model, provided it ends it as close as possible to the closest enemy unit.",
      },
    },
    {
      name: "STIMULATED BIO-SURGE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One ABERRANTS, BIOPHAGUS or PURESTRAIN GENESTEALERS unit from your army that has not declared a charge this phase.",
        effect: "Your unit has +2 to charge rolls.",
      },
    },
    {
      name: "BIO-HORROR REVELATION",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent's Shooting phase.",
        target: "One Aberrants, Biophagus or Purestrain Genestealers unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit within 9\" of your unit is selected to shoot, it must take a Leadership test, subtracting 1 from the result. If that test is failed, until the end of the phase, each time a model in that enemy unit makes an attack that targets your unit, subtract 1 from the Hit roll.",
      },
    },
  ],
  "Brood Brother Auxilia": [
    {
      name: "IN THE SHADOW OF IRON",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit ends a move within 8\" of one or more of your Cult Ambush markers.",
        target: "One Astra Militarum Vehicle unit from your army.",
        effect: "Select one of those Cult Ambush markers. You can set up that Cult Ambush marker anywhere on the battlefield that is more than 8\" horizontally away from all enemy units and wholly within 6\" of your unit.",
      },
    },
    {
      name: "REGIMENTAL REINFORCEMENTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an Astra Militarum Infantry Regiment unit from your army (excluding Artillery and Character units) is destroyed.",
        target: "That **INFANTRY** unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Roll one D6: on a 3+, place one Cult Ambush marker anywhere on the battlefield that is more than 8\" horizontally away from all enemy units (if this is not possible, no marker is placed) and add a new unit to your army identical to your destroyed unit, in Cult Ambush, at its Starting Strength, with all of its wounds remaining and any **[ONE SHOT]** weapons those models are equipped with considered as not having been shot.<br><br>**Restrictions:** You can only use this Stratagem once per battle.",
      },
    },
    {
      name: "SUPPRESS AND OVERWHELM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an Astra Militarum unit from your army has shot.",
        target: "That **ASTRA** **MILITARUM** unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the turn, that enemy unit cannot be targeted with the Fire Overwatch Stratagem and each time a **GENESTEALER** **CULTS** unit from your army selects that enemy unit as a target of a charge, you can re-roll the Charge roll.",
      },
    },
    {
      name: "ACCEPTABLE LOSSES",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Astra Militarum unit from your army.",
        effect: "Select one enemy unit within Engagement Range of one or more **GENESTEALER** **CULTS** units from your army. Until the end of the phase, your unit can make ranged attacks that target that enemy unit. If it does, after it has resolved those attacks, roll one D6 for each of those **GENESTEALER** **CULTS** units: on a 5+, the unit being rolled for suffers D3+1 mortal wounds.",
      },
    },
    {
      name: "SYMBIOTIC DESTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Astra Militarum and one **GENESTEALER** **CULTS** unit from your army that have not been selected to shoot this phase.",
        effect: "Select one enemy unit that is visible to both of those selected units and within range of at least one ranged weapon from each of those units. Until the end of the phase, models in those units can only make attacks that target that enemy unit (and only if it is an eligible target). When doing so, each time such a model makes an attack, re-roll a Wound roll of 1.",
      },
    },
    {
      name: "A DARK NETWORK",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your opponent’s Movement phase, just after an enemy unit is set up on the battlefield from Reserves.",
        target: "One Astra Militarum or **GENESTEALER** **CULTS** unit from your army (excluding Monsters and Vehicles) within 12\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
  ],
  "Final Day": [
    {
      name: "HYPERFEROCITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Genestealer Cults unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, re-roll a Wound roll of 1. If one or more friendly Tyranids units are within 6\" of that enemy unit, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "PSI SURGE",
      cp: "1 CP",
      rules: {
        when: "Start of any phase.",
        target: "One Tyranids unit from your army.",
        effect: "Until the start of your next Command phase, increase the range of your unit’s Catalyst ability by 3\".<br><br>**Restrictions:** Each time you use this Stratagem, until the end of your next Command phase, you cannot use this Stratagem again.",
      },
    },
    {
      name: "AVENGE THE STAR CHILDREN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has shot or fought.",
        target: "One Tyranids Character unit from your army that was destroyed by that enemy unit this phase. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Until the end of the battle, each time a Genestealer Cults model from your army makes an attack that targets that enemy unit, add 1 to the Hit roll and add 1 to the Wound roll.",
      },
    },
    {
      name: "DIVINE IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, when a friendly Genestealer Cults unit within 12\" of a friendly engaged Tyranids unit declares a charge.",
        target: "That **GENESTEALER** **CULTS** unit.",
        effect: "• Your unit has +1 to charge rolls.<br>• You can use this part of this **stratagem**. If you do:<br>• Your unit can re-roll **charge rolls**.<br>• Your unit must end that charge move **engaged** with an enemy unit **engaged** with that friendly **TYRANIDS** unit.",
      },
    },
    {
      name: "DARTING ATTACKS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or your Charge phase.",
        target: "One Tyranids unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "RESISTANCE TUNNELS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Genestealer Cults or Tyranids unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Heroes of the Uprising": [
    {
      name: "LIVING UP TO LEGEND",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly KILLER unit has attacked, if those attacks destroyed an enemy unit or an enemy **CHARACTER** model.",
        target: "That **KILLER** unit.",
        effect: "Each visible friendly battle-shocked GENESTEALER CULTS unit within 12\" of your unit is no longer battle-shocked.",
      },
    },
    {
      name: "SURGING BROODWORSHIP",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly KILLER unit is selected to attack.",
        target: "That **KILLER** unit.",
        effect: "Attacks made by **KILLER** models in your unit have [DEVASTATING WOUNDS].",
      },
    },
    {
      name: "LOYAL TO THE END",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when an enemy unit targets a friendly KILLER unit.",
        target: "That **KILLER** unit.",
        effect: "When a **KILLER** model in your unit is destroyed, if your unit has not been selected to fight this phase, roll one D6:<br><br>• On a 1, that enemy unit suffers 1 mortal wound.<br>• On a 2+, do not remove that model from the battlefield. When your unit has fought, or at the end of the phase (whichever comes first), that model is removed from the battlefield.",
      },
    },
  ],
  "Host of Ascension": [
    {
      name: "COORDINATED TRAP",
      cp: "2 CP",
      rules: {
        when: "The start of your Shooting phase or the start of the Fight phase.",
        target: "Two **GENESTEALER** **CULTS** units from your army that have not been selected to shoot or fight this phase.",
        effect: "Select one enemy unit (if this Stratagem is used in the Fight phase, that enemy unit must be within Engagement Range of both of your units). Until the end of the phase, each time a model in either of your units makes an attack, it can only target that enemy unit (and only if it is an eligible target for that attack), and when resolving that attack, add 1 to the Wound roll.",
      },
    },
    {
      name: "PRIMED AND READIED",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **GENESTEALER** **CULTS** units from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only a 6.",
      },
    },
    {
      name: "TUNNEL CRAWLERS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **GENESTEALER** **CULTS** unit from your army that is arriving using the Deep Strike ability this phase.",
        effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.<br><br>**Restrictions:** A unit targeted by this Stratagem is not eligible to declare a charge in the same turn.",
      },
    },
    {
      name: "LYING IN WAIT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase.",
        target: "One Genestealer Cults Battleline unit from your army in Cult Ambush.",
        effect: "Until the end of the phase, when setting your unit up using a Cult Ambush marker, set your unit up anywhere on the battlefield wholly within 6\" of that Cult Ambush marker and not within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "RETURN TO THE SHADOWS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Genestealer Cults Infantry unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
    {
      name: "A DEADLY SNARE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit declares a charge.",
        target: "One Genestealer Cults Infantry unit from your army that was selected as a target of that charge.",
        effect: "Roll one D6: on a 2-4, that enemy unit suffers D3 mortal wounds; on a 5+, that enemy unit suffers 3 mortal wounds.",
      },
    },
  ],
  "Outlander Claw": [
    {
      name: "ALONG SHADOWED TRAILS",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit ends a move within 8\" of one or more of your Cult Ambush markers.",
        target: "Select one of those Cult Ambush markers.",
        effect: "You can set up that Cult Ambush marker anywhere on the battlefield that is more than 8\" horizontally away from all enemy units.",
      },
    },
    {
      name: "DEVOTED CREW",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Goliath Rockgrinder or Goliath Truck unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "CLOSE-RANGE SHOOT-OUT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Genestealer Cults Mounted or Genestealer Cults Vehicle unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [LETHAL HITS] ability while targeting an enemy unit within 18\".",
      },
    },
    {
      name: "RAPID FEINT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Achilles Ridgerunners or Atalan Jackals unit from your army that is within 8\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "DEFT MANOEUVRING",
      cp: "1 CP",
      rules: {
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Achilles Ridgerunners or Atalan Jackals unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
    {
      name: "ENCIRCLING THE PREY",
      cp: "1 CP",
      rules: {
        when: "End of your opponent's Fight phase.",
        target: "One Genestealer Cults Mounted or Genestealer Cults Vehicle unit from your army that is not within Engagement Range of one or more enemy units and is wholly within 9\" of one or more battlefield edges.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Purestrain Broodswarm": [
    {
      name: "LURK AND STRIKE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly PURESTRAIN GENESTEALERS unit is selected to make a fall-back move.",
        target: "That **PURESTRAIN** **GENESTEALERS** unit.",
        effect: "That move does not prevent your unit from being eligible to declare a charge.",
      },
    },
    {
      name: "CRAWLING HORROR",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Movement phase.",
        target: "One friendly PURESTRAIN GENESTEALERS unit.",
        effect: "Your unit has -6\" detection range until the end of the turn.",
      },
    },
    {
      name: "INHUMAN REACTIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged PURESTRAIN GENESTEALERS unit.",
        target: "That **PURESTRAIN** **GENESTEALERS** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
  ],
  "Xenocreed Congregation": [
    {
      name: "VENGEANCE FOR THE MARTYR!",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit destroys a Genestealer Cults Character model from your army.",
        target: "One other **GENESTEALER** **CULTS** **CHARACTER** model from your army.",
        effect: "Until the end of the battle, each time a friendly Acolyte Hybrids, Hybrid Metamorphs or Neophyte Hybrids model makes an attack that targets that enemy unit, re-roll a Hit roll of 1. If the destroyed model was a Magus, Primus or Acolyte Iconward, you can re-roll the Hit roll instead.",
      },
    },
    {
      name: "FRENZIED DEVOTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Acolyte Hybrids, Hybrid Metamorphs or Neophyte Hybrids unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, improve the Attacks and Weapon Skill characteristics of melee weapons equipped by models (excluding Characters) in your unit by 1 and those weapons have the [HAZARDOUS] ability.",
      },
    },
    {
      name: "TIRELESS FERVOUR",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One ACOLYTE HYBRIDS, HYBRID METAMORPHS or NEOPHYTE HYBRIDS unit from your army that has not declared a charge this phase.",
        effect: "• If your unit made an advance/fall-back move this turn, that **advance/fall-back move** does not prevent your unit from being eligible to declare a charge.<br>• When your unit declares a charge, you can use this part of this stratagem. If you do:<br><br>• Your unit can re-roll charge rolls.<br>• Your unit must end that charge move engaged with an enemy unit **engaged** with a friendly CHARACTER unit.",
      },
    },
    {
      name: "TRANSCENDENT CELERITY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Acolyte Hybrids, Hybrid Metamorphs or Neophyte Hybrids unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] ability.",
      },
    },
    {
      name: "THE DOWNTRODDEN RISE",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One ACOLYTE HYBRIDS, HYBRID METAMORPHS or NEOPHYTE HYBRIDS unit from your army in Cult Ambush.",
        effect: "Until the end of the phase, you can set up your unit on the battlefield without using a Cult Ambush marker. When doing so, set up your unit anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.",
      },
    },
    {
      name: "THE PATH OF ANGUISH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One Acolyte Hybrids or Neophyte Hybrids unit from your army that had one or more of its models destroyed as a result of the attacking unit's attacks.",
        effect: "Your unit can make a move of up to D6\", but it unit must end that move as close as possible to the closest enemy unit (excluding **AIRCRAFT**), When doing so, models in your unit can be moved within Engagement Range of that enemy unit.",
      },
    },
  ],
  "Xenocult Masses": [
    {
      name: "EYES OF THE CULT",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly NEOPHYTE HYBRIDS unit within a terrain area.",
        effect: "Enemy units within that **terrain area** have +6\" detection range",
      },
    },
    {
      name: "FANATICAL HAIL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly NEOPHYTE HYBRIDS unit is selected to shoot.",
        target: "That **NEOPHYTE** **HYBRIDS** unit.",
        effect: "Select one enemy unit. Your unit’s ranged attacks that target that enemy unit can re-roll hit rolls.",
      },
    },
    {
      name: "SLUNK FROM THE UNDERBELLY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly NEOPHYTE HYBRIDS unit with every model within a terrain area.",
        target: "That **NEOPHYTE** **HYBRIDS** unit.",
        effect: "Ranged attacks that target your unit have -1 **AP** until that unit has attacked",
      },
    },
  ],
  "Argent Assault": [
    {
      name: "TRUESILVER AEGIS",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly PALADIN SQUAD unit suffers a mortal wound.",
        target: "That **PALADIN** **SQUAD** unit.",
        effect: "Your unit has Feel No Pain 4+ against mortal wounds.",
      },
    },
    {
      name: "A THREAT ENDED",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly PALADIN SQUAD unit is selected to fight.",
        target: "That **PALADIN** **SQUAD** unit.",
        effect: "Your unit’s melee attacks have [PRECISION].",
      },
    },
    {
      name: "AURA OF VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when an enemy unit targets a friendly PALADIN SQUAD unit.",
        target: "That **PALADIN** **SQUAD** unit.",
        effect: "That enemy unit’s melee attacks have [HAZARDOUS].",
      },
    },
  ],
  "Augurium Task Force": [
    {
      name: "AGGRESSIVE ANTICIPATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One GREY KNIGHTS PSYKER unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Your unit’s attacks can re-roll hit rolls.",
      },
    },
    {
      name: "APPOINTED HOUR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Grey Knights Psyker unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "FOREWARNED EVASION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Grey Knights Walker unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "NECESSARY END",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Grey Knights Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. If the result is greater than the current battle round number, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "REDIRECTED STRIKE",
      cp: "1 CP",
      rules: {
        when: "End of your Command phase.",
        target: "One Grey Knights Psyker unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "If your unit has the Deep Strike ability, it can be placed into Strategic Reserves.<br><br>**Designer’s Note:** ^^This Stratagem lets players utilise abilities that retain control of objective markers and react to their missions and objectives with this unit.^^",
      },
    },
    {
      name: "MIRAGE OF ECHOES",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your opponent’s Movement phase, just after an enemy unit is set up.",
        target: "One Grey Knights Psyker unit from your army that is within 12\" of that enemy unit and is not within Engagement Range of one or more enemy units.",
        effect: "If your unit has the Deep Strike ability, it can be placed into Strategic Reserves.",
      },
    },
  ],
  "Banishers": [
    {
      name: "HEXWROUGHT REPRISAL",
      cp: "1 CP",
      rules: {
        when: "End of any phase.",
        target: "One Grey Knights Psyker unit from your army that is on the battlefield and suffered one or more mortal wounds this phase.",
        effect: "Select one enemy unit which inflicted one or more mortal wounds on your unit this phase, then roll a number of dice equal to the number of mortal wounds your unit suffered this phase: for each 2+, that enemy unit suffers one mortal wound (to a maximum of 6 mortal wounds). These mortal wounds are Psychic Attacks.",
      },
    },
    {
      name: "WARDING CHANT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Grey Knights Psyker unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against attacks with an unmodified Damage characteristic of 1.",
      },
    },
    {
      name: "CHAOS BANE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Grey Knights Psyker unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [ANTI-CHAOS 4+] ability.",
      },
    },
    {
      name: "CELERITY",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Grey Knights Psyker Infantry unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "CIRCLE OF SANCTUARY",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Movement phase.",
        target: "One Grey Knights Character model from your army.",
        effect: "Until the end of the phase, enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" horizontally of your model.",
      },
    },
    {
      name: "SHADOW OF ANARCH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Grey Knights Psyker unit from your army that is within 8\" of that enemy unit and is not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to 6\" or, if it has the Deep Strike ability, it can be placed into Strategic Reserves.",
      },
    },
  ],
  "Brotherhood Strike": [
    {
      name: "TRUESILVER CHANNELLING",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One Grey Knights Infantry unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, Psychic weapons equipped by models in your unit have the [DEVASTATING WOUNDS] ability.",
      },
    },
    {
      name: "COMBAT MANIFESTATION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Grey Knights unit from your army that is arriving using the Deep Strike ability this phase.",
        effect: "Set your unit up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge.",
      },
    },
    {
      name: "PURGATION PATTERN",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Grey Knights unit from your army that was set up using the Deep Strike ability this turn and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability.",
      },
    },
    {
      name: "DUTY UNENDING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit within Engagement Range of one or more Grey Knights units from your army Falls Back.",
        target: "One of those **GREY** **KNIGHTS** units that is not within Engagement Range of one or more enemy units.",
        effect: "If your unit has the Deep Strike ability, it can be placed into Strategic Reserves.",
      },
    },
    {
      name: "SHINING VEIL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Grey Knights unit that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit has the Stealth ability.",
      },
    },
    {
      name: "EXPEDITIOUS EXIT",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Grey Knights Psyker Infantry unit from your army.",
        effect: "If every model in your unit has the Deep Strike ability, remove your unit from the battlefield and place it into Strategic Reserves.<br><br>**Designer’s Note:** ^^This Stratagem allows you to remove a unit in addition to those removed using the Gate of Infinity rule, and it allows you to remove a unit within Engagement Range of one or more enemy units.^^",
      },
    },
  ],
  "Fires of Purgation": [
    {
      name: "SOUL-LOCKED",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly PURGATION SQUAD unit is selected to make a fall-back move.",
        target: "That **PURGATION** **SQUAD** unit.",
        effect: "That move does not prevent your unit from being eligible to shoot.",
      },
    },
    {
      name: "FOCUSED IMMOLATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly PURGATION SQUAD unit is selected to shoot.",
        target: "That **PURGATION** **SQUAD** unit.",
        effect: "Select one enemy unit. Your unit’s ranged attacks that target that unit have:<br><br>• [DEVASTATING WOUNDS].<br>• [SUSTAINED HITS 1].",
      },
    },
    {
      name: "SPIRITSEAR",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly PURGATION SQUAD unit has shot.",
        target: "That **PURGATION** **SQUAD** unit.",
        effect: "Select one battle-shocked enemy unit hit by those attacks. That enemy unit suffers D3+1 mortal wounds.",
      },
    },
  ],
  "Hallowed Conclave": [
    {
      name: "GIANTS OF THE BATTLEFIELD",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Grey Knights Terminator unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in your unit.",
      },
    },
    {
      name: "UNENDING FIDELITY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Grey Knights Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not shot or fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can shoot or fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "POINT-BLANK PURGATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Grey Knights Infantry unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, storm bolter weapons equipped by models in your unit have the [PISTOL] and [TWIN-LINKED] abilities.",
      },
    },
    {
      name: "GRIND THEM UNDERFOOT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a Grey Knights Terminator unit from your army ends a Charge move.",
        target: "That **GREY** **KNIGHTS** unit.",
        effect: "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "PRECOGNITIVE STRATEGIES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Grey Knights Infantry unit from your army that is within 8\" of that enemy unit and not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to D6\".",
      },
    },
    {
      name: "SHINING RESOLVE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Grey Knights Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.",
      },
    },
  ],
  "Immaterial Interdiction": [
    {
      name: "BLADES FROM THE BEYOND",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly INTERCEPTOR SQUAD unit that made a charge move this turn is selected to fight.",
        target: "That **INTERCEPTOR** **SQUAD** unit.",
        effect: "Your unit’s melee attacks have [LANCE].",
      },
    },
    {
      name: "BY THOUGHT ALONE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly INTERCEPTOR SQUAD unit starts an action.",
        target: "That **INTERCEPTOR** **SQUAD** unit.",
        effect: "That action does not prevent your unit from being eligible to shoot.",
      },
    },
    {
      name: "RESPONSIVE DISPLACEMENT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit that was engaged with a friendly INTERCEPTOR SQUAD unit ends a fall-back move, if that **INTERCEPTOR** **SQUAD** unit is unengaged.",
        target: "That **INTERCEPTOR** **SQUAD** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
  ],
  "Sanctic Spearhead": [
    {
      name: "TRUESILVER WILL",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a Grey Knights Psyker Vehicle unit from your army suffers a mortal wound.",
        target: "That **GREY** **KNIGHTS** **PSYKER** **VEHICLE** unit.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 4+ ability against mortal wounds.",
      },
    },
    {
      name: "ABOMINUS-CLASS TARGETS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Grey Knights unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a **MONSTER** or **VEHICLE** unit, add 1 to the Wound roll.",
      },
    },
    {
      name: "ARMOURED AEGIS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Grey Knights Psyker Vehicle unit from your army.",
        effect: "One model in your unit regains up to 3 lost wounds.",
      },
    },
    {
      name: "REDOUBLED ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Grey Knights Vehicle unit from your army Falls Back.",
        target: "That **GREY** **KNIGHTS** **VEHICLE** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "FORCE WAVE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Grey Knights Vehicle unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "ARGENT WRATH",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a Grey Knights Vehicle unit from your army ends a Charge move.",
        target: "That **GREY** **KNIGHTS** **VEHICLE** unit.",
        effect: "Each enemy unit within 3\" of your unit must take a Battle-shock test, subtracting 1 from that test.",
      },
    },
  ],
  "Warpbane Task Force": [
    {
      name: "SANCTIFIED KILL ZONE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **GREY** **KNIGHTS** unit from your army that has not been selected to shoot or fight this phase and that is wholly within your army’s Hallowed Ground.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1, or, re-roll the Wound roll instead if your unit is a Purifier Squad.",
      },
    },
    {
      name: "FLAMES OF SANCTITY",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One Purifier Squad unit from your army that was eligible to fight this phase.",
        effect: "Roll one D6 for each enemy unit within 6\" of your unit, adding 1 to the result if your unit includes Castellan Crowe: on a 4+, that enemy unit suffers D3 mortal wounds.",
      },
    },
    {
      name: "HALLOWED BEACON",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your Movement phase.",
        target: "One Grey Knights Infantry unit (excluding Terminator units) that is arriving using the Deep Strike ability this phase.",
        effect: "Set up your unit wholly within your army’s Hallowed Ground and more than 6\" horizontally away from all enemy units.",
      },
    },
    {
      name: "FIRES OF COVENANT",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Movement phase.",
        target: "One Grey Knights Infantry unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit is set up or ends a Normal, Advance or Fall Back move within 6\" of your unit, roll one D6, adding 2 to the result if your unit is wholly within your army’s Hallowed Ground: on a 4+, that enemy unit suffers D3 mortal wounds.",
      },
    },
    {
      name: "AEGIS ETERNAL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Grey Knights Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit that are wholly within your Hallowed Ground have a 4+ invulnerable save.",
      },
    },
    {
      name: "REPELLING SPHERE",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One Grey Knights Infantry unit from your army.",
        effect: "Until the end of the phase, each time an enemy unit declares a charge and your unit is one of the targets of that charge, subtract 1 from the Charge roll, or subtract 2 instead if your unit is wholly within your army’s Hallowed Ground.",
      },
    },
  ],
  "Armoured Trailblazers": [
    {
      name: "COORDINATED CROSSFIRE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "Up to two friendly SAGITAUR units.",
        effect: "Select one enemy unit. Your units’ ranged attacks that target that enemy unit can:<br><br>• Re-roll hit rolls of 1.<br>• Re-roll wound rolls of 1.",
      },
    },
    {
      name: "OUTFLANKING ARMOUR",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Movement phase, from the second battle round onwards.",
        target: "Up to two friendly SAGITAUR units in strategic reserves.",
        effect: "Your units each make an ingress move.",
      },
    },
    {
      name: "BUILT TO LAST",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly SAGITAUR unit.",
        target: "That **SAGITAUR** unit.",
        effect: "Ranged attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.",
      },
    },
  ],
  "Brandfast Oathband": [
    {
      name: "SECURE POSITIONS",
      cp: "1 CP",
      rules: {
        when: "End of any of your phases.",
        target: "One Leagues of Votann Transport unit from your army.",
        effect: "One **LEAGUES** **OF** **VOTANN** unit embarked within your **TRANSPORT** can disembark. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6\" of your **TRANSPORT**. That unit cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn.",
      },
    },
    {
      name: "BASTION RUNNING",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Hekaton Land Fortress unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal or Advance move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "ILLUMINATED PRIORITY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a Leagues of Votann Vehicle unit from your army has shot.",
        target: "That **LEAGUES** **OF** **VOTANN** **VEHICLE** unit.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a Leagues of Votann Infantry model from your army makes an attack that targets that enemy unit, re-roll a Hit roll of 1.",
      },
    },
    {
      name: "INEXORABLE EFFICIENCY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Leagues of Votann unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
    },
    {
      name: "OPPORTUNISTIC ESCALATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot, if units from your army have Hostile Acquisition.",
        target: "One Leagues of Votann Vehicle unit from your army (excluding Hekaton Land Fortress units) that was hit by one or more of those attacks.",
        effect: "Your unit can make a Normal move of up to D6\".",
      },
    },
    {
      name: "VENGEANCE FLARE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One Leagues of Votann Infantry unit that was hit by one or more of those attacks.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Select one friendly Kapricus or Sagitaur unit within 6\" of your **INFANTRY** unit. If you spent YP during this use of this Stratagem, you can select one friendly Hekaton Land Fortress unit within 6\" of your **INFANTRY** unit instead. The selected unit can shoot as if it were your Shooting phase. When doing so, models in the selected unit can only target that enemy unit (and only if it is an eligible target).",
      },
    },
  ],
  "Dêlve Assault Shift": [
    {
      name: "CYBERSTIMM INFUSION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Cthonian Beserks unit from your army that has not been selected to fight this phase.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1. If you spent YP during this use of this Stratagem, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "UNSTOPPABLE FORCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Leagues of Votann unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time your unit Piles In or Consolidates, each model in that unit can move up to 6\" instead of up to 3\".",
      },
    },
    {
      name: "AUGMENTED ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Cthonian Beserks unit from your army that has not been selected to move this phase.",
        effect: "Each time you use this Stratagem, you can spend up to 2YP. Until the end of the turn, add X\" to the Move characteristic of models in your unit, where X is the number of YP you spent during this use of this Stratagem, and your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "TECTONIC FRACTURE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a **CTHONIAN** **EARTHSHAKERS** unit from your army has shot.",
        target: "That Cthonian Earthshakers unit.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Select one enemy unit hit by one or more of your unit’s attacks this phase. Until the start of your next Shooting phase, subtract 2 from that unit’s Move characteristic and, if you spent YP during this use of this Stratagem, subtract 2 from Charge rolls made for that unit.",
      },
    },
    {
      name: "WEAVEWËRKE BUTTRESS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets, if units from your army have Hostile Acquisition.",
        target: "One Leagues of Votann Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "HIDDEN ACCESSWAYS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Cthonian Beserks, Hearthkyn Warriors or Hernkyn Yaegirs unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Farseekers": [
    {
      name: "SCORNFUL ANALYSIS",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly HERNKYN unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. Friendly LEAGUES OF VOTANN units’ attacks that target that enemy unit have [IGNORES COVER].",
      },
    },
    {
      name: "NO SHOT WASTED",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly HERNKYN unit is selected to shoot.",
        target: "That **HERNKYN** unit.",
        effect: "Your unit’s ranged attacks have [LETHAL HITS].",
      },
    },
    {
      name: "ECONOMY OF MOTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged PIONEERS unit.",
        target: "That **PIONEERS** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
  ],
  "Hearthband": [
    {
      name: "BRËKKEKNOTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Kâhl, Ûthar the Destined or Einhyr Hearthguard unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
    {
      name: "SURE OF PURPOSE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\".",
      },
    },
    {
      name: "SUPERIOR CRAFTSMANSHIP",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a **MONSTER** or **VEHICLE** unit, add 1 to the Damage characteristic of that attack.",
      },
    },
    {
      name: "UNYIELDING AGGRESSION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **LEAGUES** **OF** **VOTANN** **INFANTRY** unit from your army Falls Back.",
        target: "That Leagues of Votann Infantry unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "MATERIALISATION MATRICES",
      cp: "1 CP",
      rules: {
        when: "The Reinforcements step of your Movement phase.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that is in Reserves and has the Deep Strike ability.",
        effect: "Until the end of the phase, when your unit is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.<br><br>**Restrictions:** Until the end of the turn, your unit is not eligible to declare a charge.",
      },
    },
    {
      name: "FURY OF THE HEARTH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Einhyr Hearthguard unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, improve the Strength characteristic of ranged weapons equipped by models in your unit by 1. If you spend 1YP, until the end of the phase, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability as well.",
      },
    },
  ],
  "Hearthfyre Arsenal": [
    {
      name: "UNWAVERING ACCURACY",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Brôkhyr Thunderkyn unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack’s Ballistic Skill characteristic; the Hit roll; the Wound roll; that attack’s Armour Penetration characteristic.",
      },
    },
    {
      name: "FIRST CONCERN",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a Brôkhyr, Ironkin Steeljacks or Arkanyst Evaluator unit from your army has shot.",
        target: "That **BRÔKHYR**, **IRONKIN** **STEELJACKS** or **ARKANYST** **EVALUATOR** unit.",
        effect: "If your unit Remained Stationary in your Movement phase this turn, it can make a Normal move.",
      },
    },
    {
      name: "DELAYED-FIRE ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a Brôkhyr, Ironkin Steeljacks or Arkanyst Evaluator unit from your army has shot.",
        target: "That **BRÔKHYR**, **IRONKIN** **STEELJACKS** or **ARKANYST** **EVALUATOR** unit.",
        effect: "Select one enemy unit (excluding **MONSTERS** and **VEHICLES**) hit by one or more of those attacks. Until the start of your next Shooting phase, each time that enemy unit makes a Normal, Advance or Fall Back move, roll one D6 for each model in that unit: for each 1, that unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "WALL OF STEEL",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after an Ironkin Steeljacks unit from your army ends a Charge move.",
        target: "That **IRONKIN** **STEELJACKS** unit.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Select one enemy unit (excluding **MONSTERS** and **VEHICLES**) within Engagement Range of your unit and roll one D6 for each model in your unit, rolling two additional D6 if you spent YP during this use of this Stratagem: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).",
      },
    },
    {
      name: "PREVENTATIVE PURGE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Fall Back move.",
        target: "One Brôkhyr Thunderkyn or Ironkin Steeljacks unit from your army.",
        effect: "Your unit can shoot as if it were your Shooting phase. When doing so, models in your unit can only target that enemy unit (and only if it is an eligible target) and each time a model in your unit makes an attack, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "COGITATED NEED",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One Ironkin Steeljacks unit from your army.",
        effect: "Your unit can make a Normal move. When doing so, your unit must end that move as close as possible to the closest objective marker.",
      },
    },
  ],
  "Hearthguard Covenant": [
    {
      name: "BRËKKEKNOTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly EINHYR HEARTHGUARD unit.",
        target: "That **EINHYR** **HEARTHGUARD** unit.",
        effect: "Your unit has 4+ InSv.",
      },
    },
    {
      name: "FURY OF THE HEARTH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly EINHYR HEARTHGUARD unit is selected to shoot.",
        target: "That **EINHYR** **HEARTHGUARD** unit.",
        effect: "Your unit’s ranged attacks have:<br><br>• +1 **S**.<br>• If you spend 1 **YP**, [SUSTAINED HITS 1].",
      },
    },
    {
      name: "MATERIALISATION MATRICES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly EINHYR HEARTHGUARD unit with Deep Strike is selected to make an ingress move.",
        target: "That **EINHYR** **HEARTHGUARD** unit.",
        effect: "• Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally from all enemy units, even if that is within your opponent’s deployment zone.<br>• Your unit is not eligible to declare a charge until the end of the turn.",
      },
    },
  ],
  "Mercenary Oathband": [
    {
      name: "AUXILIARY CONTRACT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Leagues of Votann Infantry or Leagues of Votann Mounted unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the [PRECISION] ability.",
      },
    },
    {
      name: "OPTIMAL EXPENDITURE",
      cp: "1 CP",
      rules: {
        when: "The Fight phase.",
        target: "One Leagues of Votann Infantry unit from your army that has not been selected to fight this phase.",
        effect: "Each time you use this Stratagem, you can spend 3YP. Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1. If you spent YP during this usage of this Stratagem, you can re-roll a Hit roll of 1 and re-roll the Wound roll instead.",
      },
    },
    {
      name: "GRAND ARTIFICE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **LEAGUES** **OF** **VOTANN** unit from your army Falls Back.",
        target: "That **LEAGUES** **OF** **VOTANN** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "PRIVATEER ARSENAL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Leagues of Votann Infantry unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can spend 3YP. Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1. If you spent YP during this usage of this Stratagem, you can re-roll the Hit roll and re-roll a Wound roll of 1 instead.",
      },
    },
    {
      name: "NEW HORIZONS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Leagues of Votann Infantry unit from your army that is not within Engagement range of one or more enemy units and one friendly Transport it is able to embark within.",
        effect: "If your **LEAGUES** **OF** **VOTANN** unit is wholly within 6\" of that **TRANSPORT**, it can embark within it.",
      },
    },
    {
      name: "MOBILE EXPLOITATION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Hernkyn unit from your army that is not within Engagement Range of one or more enemy units. Alternatively, you can spend 2YP and target up to two **HERNKYN** units from your army that are not within Engagement Range of one or more enemy units instead.",
        effect: "Remove your units from the battlefield and place them into Strategic Reserves.",
      },
    },
  ],
  "Needgaârd Oathband": [
    {
      name: "VOID HARDENED",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets, if units from your army have Fortify Takeover.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "HONOUR OF THE HOLD",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that has not been selected to fight this phase.",
        effect: "Each time you use this Stratagem, you can spend 3YP. Select one enemy unit within Engagement Range of your unit. Until the end of the phase, each time a model in your unit makes a melee attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. If you spent YP during this use of this Stratagem, improve the Armour Penetration characteristic of that attack by 2 instead.",
      },
    },
    {
      name: "ORDERED RETREAT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **LEAGUES** **OF** **VOTANN** unit from your army Falls Back.",
        target: "That **LEAGUES** **OF** **VOTANN** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "ANCESTRAL SENTENCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can spend 3YP. Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. If you spent YP during this use of this Stratagem, until the end of the phase, those weapons have the [SUSTAINED HITS 2] ability instead.",
      },
    },
    {
      name: "HUNTR’S MARK",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.",
      },
    },
    {
      name: "REACTIVE REPRISAL",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot, if units from your army have Fortify Takeover.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, can only target that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],
  "Persecution Prospect": [
    {
      name: "ADAPTABLE AVARICE",
      cp: "1 CP",
      rules: {
        when: "Start of any phase, if units from your army have Fortify Takeover.",
        target: "One Leagues of Votann Character unit from your army.",
        effect: "Each time you use this Stratagem, you can spend any number of YP. Once you have done so, if you have 6 or fewer YP, until the start of your next turn, units from your army have Hostile Acquisition instead.",
      },
    },
    {
      name: "FRONTIER MOMENTUM",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Hernkyn unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "EXPOSED FLAWS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Hernkyn unit from your army that has not been selected to shoot this phase.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Until the end of the phase, each time a model in your unit makes an attack, if you spent YP during this use of this Stratagem and/or if that attack targets an assailed unit, you can re-roll the Wound roll.",
      },
    },
    {
      name: "RANGER TACTICS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if that attack targets an assailed unit and/or if your unit has the Hernkyn keyword, you can re-roll the Hit roll.",
      },
    },
    {
      name: "CLAIMSTAKER REFLEX",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One **LEAGUES** **OF** **VOTANN** unit from your army (excluding Artillery and Vehicle units) that is within 8\" of that enemy unit.",
        effect: "Each time you use this Stratagem, you can spend 2YP. Your unit can make a Normal move of up to D6\". If you spent YP during this use of this Stratagem, your unit can make a Normal move of up to 6\" instead.<br><br>**Restrictions:** A unit cannot embark within a Transport as part of this move.",
      },
    },
    {
      name: "DISPERSED FORMATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Leagues of Votann Infantry or Leagues of Votann Mounted unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit has the Stealth ability and each time a ranged attack targets your unit, models in your unit have the Benefit of Cover against that attack.",
      },
    },
  ],
  "Annihilation Legion": [
    {
      name: "MASKS OF DEATH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One DESTROYER CULT or FLAYED ONES unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "THE SPOOR OF FRAILTY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One DESTROYER CULT or FLAYED ONES unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model from your unit makes an attack that targets a unit below Starting Strength, add 1 to the Hit roll. If the target is Below Half-strength, add 1 to the Wound roll as well.",
      },
    },
    {
      name: "MURDEROUS REANIMATION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One DESTROYER CULT or FLAYED ONES unit from your army that has just destroyed an enemy unit, or just caused an enemy unit that was not Below Half-strength to become Below Half-strength.",
        effect: "Your unit’s Reanimation Protocols activate.",
      },
    },
    {
      name: "PITILESS HUNTERS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One DESTROYER CULT or FLAYED ONES unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\".",
      },
    },
    {
      name: "BLOOD-FUELLED CRUELTY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Fall Back move.",
        target: "One DESTROYER CULT or FLAYED ONES unit from your army that started the phase within Engagement Range of that enemy unit.",
        effect: "Roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds. Your unit can then make a Normal move, but must end that move as close as possible to that enemy unit.",
      },
    },
    {
      name: "INSANITY’S IRE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly unengaged DESTROYER CULT/FLAYED ONES unit this phase has shot.",
        target: "That **DESTROYER** **CULT/FLAYED** **ONES** unit.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
  ],
  "Awakened Dynasty": [
    {
      name: "PROTOCOL OF THE ETERNAL REVENANT",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One NECRONS INFANTRY CHARACTER model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "At the end of the phase, set up the destroyed model on the battlefield, unengaged and as close as possible to where it was destroyed. That model is not part of an attached unit and its unit has a starting strength of 1. That model has half of its starting number of wounds remaining.<br><br>**Restrictions:** Each model can only be targeted with this **Stratagem** once per battle.",
      },
    },
    {
      name: "PROTOCOL OF THE UNDYING LEGIONS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has resolved its attacks.",
        target: "One **NECRONS** unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks.",
        effect: "Your unit activates its Reanimation Protocols and reanimates D3 wounds (or D3+1 wounds if a NECRONS CHARACTER is leading your unit].",
      },
    },
    {
      name: "PROTOCOL OF THE HUNGRY VOID",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **NECRONS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in your unit. In addition, If a Necrons Character is leading your unit, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1. (this is not cumulative with any other modifiers that improve Armour Penetration].",
      },
    },
    {
      name: "PROTOCOL OF THE SUDDEN STORM",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **NECRONS** unit from your army.",
        effect: "Until the end of the turn, ranged weapons equipped by models in your unit have the [ASSAULT] ability. In addition, if a Necrons Character is leading your unit, until the end of the phase, you can re-roll Advance rolls made for your unit.",
      },
    },
    {
      name: "PROTOCOL OF THE CONQUERING TYRANT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **NECRONS** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within half range, re-roll a Hit roll of 1. If a NECRONS CHARACTER is leading your unit, until the end of the phase, you can re-roll the Hit roll for that attack instead.",
      },
    },
    {
      name: "PROTOCOL OF THE VENGEFUL STARS",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit destroys a **NECRONS** unit from your army.",
        target: "One NECRONS CHARACTER unit from your army that was within 6\" of that **NECRONS** unit when it was destroyed.",
        effect: "After the attacking unit has resolved its attacks, your unit can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],
  "Canoptek Court": [
    {
      name: "CURSE OF THE CRYPTEK",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has shot or fought.",
        target: "One CRYPTEK model from your army that was destroyed by one of the attacking unit’s attacks. <br>You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Until the end of the battle, each time a friendly CANOPTEK model makes an attack that targets the attacking unit, add 1 to the Hit roll and add 1 to the Wound roll.",
      },
    },
    {
      name: "CYNOSURE OF ERADICATION",
      cp: "2 CP",
      rules: {
        when: "The start of your Shooting phase or the start of the Fight phase.",
        target: "One CRYPTEK or CANOPTEK unit from your army that is wholly within your army’s Power Matrix.",
        effect: "Until the end of the phase, weapons equipped by **CRYPTEK** or **CANOPTEK** models in your unit have the [DEVASTATING WOUNDS] ability.",
      },
    },
    {
      name: "SOLAR PULSE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One CRYPTEK model from your army.",
        effect: "Select one objective marker within 18\" of your **CRYPTEK** model. Until the end of the phase, weapons equipped by friendly **NECRONS** models have the [IGNORES COVER] ability while targeting units within range of that objective marker.",
      },
    },
    {
      name: "REACTIVE SUBROUTINES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One CANOPTEK unit from your army that is within 8\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "COUNTERTEMPORAL SHIFT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One CANOPTEK unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
    {
      name: "SUBOPTIMAL FACADE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit has declared a charge.",
        target: "One CANOPTEK unit from your army that was selected as a target of that charge and is wholly within your army’s Power Matrix.",
        effect: "Your unit’s Reanimation Protocols activate.",
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
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack’s Ballistic Skill or Weapon Skill characteristic; the Hit roll. If your unit has the Cryptek keyword, you can also ignore any or all modifiers to the Wound roll.",
      },
    },
    {
      name: "MICROSCARAB SWARM",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Cryptek Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "If your unit has the Necron Warriors keyword, until the end of the phase, models in your unit have a 5+ invulnerable save. If your unit has the Immortals keyword, until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
    {
      name: "ANIMUS CURSE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has shot or fought.",
        target: "One Cryptek model from your army that was destroyed by one of the attacking unit’s attacks. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Until the end of the battle, each time a friendly **NECRONS** model makes an attack that targets the attacking unit, you can re-roll the Hit roll.",
      },
    },
    {
      name: "SYNERGISTIC EMPOWERMENT",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One Cryptek unit from your army.",
        effect: "Select one friendly **NECRONS** model (excluding Monsters and Vehicles) within 12\" of a **CRYPTEK** model in your unit. Until the end of the phase, that friendly **NECRONS** model has the **CRYPTEK** keyword.",
      },
    },
    {
      name: "UNTAPPED POWER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Cryptek unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time your unit is selected to shoot, when selecting an ability for the Technosorcerous Augmentations Detachment Rule, you can select one additional ability from those available.",
      },
    },
    {
      name: "POTENTIALITY SYPHON",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One **NECRONS** unit from your army within range of one or more objective markers.",
        effect: "Your unit’s Reanimation Protocols activate. If it is a Cryptek unit, it reanimates an additional 1 wound.",
      },
    },
  ],
  "Cursed Legion": [
    {
      name: "METHODICAL MURDER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit (excluding Monsters and Vehicles) from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability.",
      },
    },
    {
      name: "IMAGE OF DEATH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Destroyer Cult unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "MORTIS PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after the first time a Destroyer Cult unit from your army destroys an enemy unit this turn.",
        target: "One friendly **NECRONS** unit (excluding Monsters and Vehicles) within 9\" of that **DESTROYER** **CULT** unit.",
        effect: "The friendly unit’s Reanimation Protocols activate.",
      },
    },
    {
      name: "DRIVEN TO BUTCHERY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or your Charge phase.",
        target: "One Destroyer Cult unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.<br><br>**Restrictions:** You can only use this Stratagem once per turn.",
      },
    },
    {
      name: "SPREADING MADNESS",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **NECRONS** unit (excluding Monsters and Vehicles) from your army that has not declared a charge this phase.",
        effect: "Until the end of the phase, each time your unit declares a charge, if one or more targets of that charge are within Engagement Range of one or more friendly units, add 2 to the Charge roll.",
      },
    },
    {
      name: "UNNATURAL AGGRESSION",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One **NECRONS** unit (excluding Monsters and Vehicles) from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.",
        effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.",
      },
    },
  ],
  "Hand of the Dynasty": [
    {
      name: "DOMINANCE PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One friendly IMMORTALS unit.",
        effect: "Your unit has +1 **OC** until the end of the turn.",
      },
    },
    {
      name: "WILL OF THE CONQUEROR",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One friendly IMMORTALS/NECRON WARRIORS unit.",
        effect: "Select one **objective** your unit is controlling. That objective is **secured**.",
      },
    },
    {
      name: "NANOSATURATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly IMMORTALS/NECRON WARRIORS unit has shot.",
        target: "That **IMMORTALS/NECRON** **WARRIORS** unit.",
        effect: "Your unit shoots using **snap shooting**, but while doing so your unit can only target that enemy unit.",
      },
    },
  ],
  "Hypercrypt Legion": [
    {
      name: "HYPERPHASIC RECALL",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has shot or fought.",
        target: "One NECRONS INFANTRY unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks and one friendly MONOLITH model.",
        effect: "Remove your **INFANTRY** unit from the battlefield and then set it back up anywhere on the battlefield that is wholly within 6\" of your **MONOLITH** model and not within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "QUANTUM DEFLECTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One NECRONS VEHICLE unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
    {
      name: "REANIMATION CRYPTS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "Your **NECRONS** **WARLORD**.",
        effect: "For each of your **NECRONS** units in Reserves, that Reserves unit’s Reanimation Protocols activate.",
      },
    },
    {
      name: "COSMIC PRECISION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **NECRONS** unit from your army (excluding MONSTER units) that is arriving using an ingress move this phase.",
        effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy models.<br><br>**Restrictions:** A unit targeted with this Stratagem is not eligible to declare a charge in the same turn.",
      },
    },
    {
      name: "DIMENSIONAL CORRIDOR",
      cp: "2 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One **NECRONS** unit from your army that was set up on the battlefield this turn using the Eternity Gate ability of a MONOLITH model that started the turn on the battlefield.",
        effect: "Your unit is eligible to charge this phase.",
      },
    },
    {
      name: "ENTROPIC DAMPING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One TITANIC model from your army that was selected as the target of one or more of the attacking unit’s attacks and is within 18\" of the attacking unit.",
        effect: "Until the end of the phase, weapons equipped by models in the attacking unit have the [HAZARDOUS] ability.",
      },
    },
  ],
  "Obeisance Phalanx": [
    {
      name: "YOUR TIME IS NIGH",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after your opponent’s **WARLORD** is destroyed.",
        target: "Your **NECRONS** **WARLORD**.",
        effect: "Until the end of the battle, each time an enemy unit takes a Battle-shock or Leadership test, subtract 1 from the result.",
      },
    },
    {
      name: "ENSLAVED ARTIFICE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit from your army (excluding TITANIC units) that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "NANOASSEMBLY PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One NECRONS VEHICLE unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "SENTINELS OF ETERNITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One LYCHGUARD or TRIARCH PRAETORIANS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making attacks, and is then removed from play.",
      },
    },
    {
      name: "SUFFER NO RIVAL",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One LYCHGUARD or TRIARCH unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
    },
    {
      name: "TERRITORIAL OBSESSION",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Lychguard or Triarch unit from your army.",
        effect: "Until the start of your next Command phase, add 1 to the Objective Control characteristic of models in your unit. If your unit has the VEHICLE keyword, add 3 to the Objective Control characteristic instead.",
      },
    },
  ],
  "Pantheon of Woe": [
    {
      name: "DISHARMONISATION CASCADE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a Necrons Monster model from your army is destroyed, before making its Deadly Demise roll.",
        target: "That **NECRONS** **MONSTER** model. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Until the end of the phase, your model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 3+ instead of on a 6.",
      },
    },
    {
      name: "MOLECULAR EROSION",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Necrons Monster unit from your army.",
        effect: "Select one unravelling enemy unit visible to your unit. That enemy unit must take a Battle-shock test. When doing so, subtract 1 from the result. If that test is failed, that enemy unit suffers D3+1 mortal wounds.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "MASS TRANSMOGRIFICATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after a Necrons Monster unit from your army destroys an enemy unit.",
        target: "One friendly **NECRONS** unit (excluding Monsters) within 6\" of that **MONSTER** unit.",
        effect: "If that enemy unit was unravelling at the start of the phase, your friendly unit’s Reanimation Protocols activate.<br><br>**Restrictions:** You can only use this Stratagem once per turn.",
      },
    },
    {
      name: "ENTROPHASIC AURA TARGETING",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit (excluding Monsters) from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, re-roll a Hit roll of 1. If the target of that attack is unravelling, re-roll a Wound roll of 1 as well.",
      },
    },
    {
      name: "CHRONODISTORTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **NECRONS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 if the attacking unit is unravelling: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "PHASE MELDING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an unravelling enemy unit is selected to Fall Back.",
        target: "One **NECRONS** unit from your army that is within Engagement Range of that enemy unit.",
        effect: "When that enemy unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests.",
      },
    },
  ],
  "Skyshroud Spearhead": [
    {
      name: "OMNILOCKED STRAFING",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly NECRONS MOUNTED unit is selected to make a fall-back move.",
        target: "That **NECRONS** **MOUNTED** unit.",
        effect: "That move does not prevent your unit from being eligible to shoot.",
      },
    },
    {
      name: "SWIFT AS DEATH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged NECRONS MOUNTED unit.",
        target: "That **NECRONS** **MOUNTED** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
    {
      name: "EVASIVE PROTOCOLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly NECRONS MOUNTED unit.",
        target: "That **NECRONS** **MOUNTED** unit.",
        effect: "Ranged attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.",
      },
    },
  ],
  "Starshatter Arsenal": [
    {
      name: "MERCILESS RECLAMATION",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **NECRONS** unit (excluding Monster and Titanic units) from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if the target of that attack is within range of one or more objective markers, add 1 to the Wound roll.",
      },
    },
    {
      name: "UNYIELDING FORMS",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Necrons Vehicle or Necrons Mounted unit (excluding Titanic units) from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets a model in your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "CHRONOSHIFT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Necrons Vehicle or Necrons Mounted unit (excluding Titanic units) from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "DIMENSIONAL TUNNEL",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Necrons Vehicle or Necrons Mounted unit (excluding Titanic units) from your army.",
        effect: "Until the end of the phase, models in your unit can move horizontally through models and terrain features.",
      },
    },
    {
      name: "ENDLESS SERVITUDE",
      cp: "1 CP",
      rules: {
        when: "End of your Fight phase.",
        target: "One **NECRONS** unit (excluding Monster and Titanic units) from your army that is within range of one or more objective markers you control.",
        effect: "Your unit’s Reanimation Protocols activate.",
      },
    },
    {
      name: "REACTIVE REPOSITION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **NECRONS** unit from your army (excluding Monster and Titanic units) that was the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can make a Normal move of up to D6\".",
      },
    },
  ],
  "The Phaeron's Armoury": [
    {
      name: "SUBSURFACE QUANTUMWEAVE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly NECRONS TITANIC FLY unit.",
        target: "That **NECRONS** **TITANIC** **FLY** unit.",
        effect: "Attacks that target your unit have -1 **AP** until that enemy unit has attacked.",
      },
    },
    {
      name: "PARTICLE PULSE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly NECRONS TITANIC FLY unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. That enemy unit has +3\" detection range.",
      },
    },
    {
      name: "COSMIC STORM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly OBELISK/TESSERACT VAULT unit is selected to shoot.",
        target: "That **OBELISK/TESSERACT** **VAULT** unit.",
        effect: "Your unit’s Tesla Sphere weapons have +1 **AP**.",
      },
    },
  ],
  "Blitz Brigade": [
    {
      name: "KEEP IT RUNNIN'",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One friendly unengaged Orks Infantry unit that was eligible to fight this phase and is wholly within 6\" of a friendly Transport unit that **INFANTRY** unit is able to embark within.",
        effect: "Your **INFANTRY** unit embarks within that **TRANSPORT** unit.",
      },
    },
    {
      name: "READIED BRAWLERS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly Wagon unit ends a normal move.",
        target: "That **WAGON** unit.",
        effect: "Units embarked within your unit can make an assault disembark move.",
      },
    },
    {
      name: "IMPENDING KRUNCH",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, when a friendly Wagon unit ends a charge move.",
        target: "That **WAGON** unit.",
        effect: "Each enemy unit engaged with your unit makes a battle-shock roll, with -1 to that **battle-shock roll**.",
      },
    },
  ],
  "Bully Boyz": [
    {
      name: "TOO ARROGANT TO DIE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when an enemy unit targets a friendly Meganobz/Nobz unit.",
        target: "That **MEGANOBZ**/**NOBZ** unit.",
        effect: "When a model in your unit is destroyed, if your unit has not been selected to fight this phase, roll one D6, with +1 to that roll if your unit is riled up:<br><br>• On a 4+, do not remove that model from the battlefield. When your unit has fought, or at the end of the phase (whichever comes first), that model is removed from the battlefield.",
      },
    },
    {
      name: "ARMED TO DA TEEF",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly Meganobz/Nobz unit is selected to attack.",
        target: "That **MEGANOBZ**/**NOBZ** unit.",
        effect: "Your unit’s attacks can:<br><br>• Re-roll hit rolls of 1.<br>• If your unit is riled up, re-roll **hit rolls**.",
      },
    },
    {
      name: "HULKING BRUTES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly Meganobz/Nobz unit.",
        target: "That **MEGANOBZ**/**NOBZ** unit.",
        effect: "Ranged attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.<br>+1CPOr: Ranged attacks that target your unit have -1 to **wound rolls**.",
      },
    },
  ],
  "Da Big Hunt": [
    {
      name: "WHERE D'YA FINK YOU'RE GOING?",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit is selected to make a fall-back move, if that enemy unit is engaged with a friendly Beast Snagga unit.",
        target: "That **BEAST** **SNAGGA** unit.",
        effect: "When an enemy unit **engaged** with your unit is selected to make a **fall-back move**, that enemy unit must use the desperate escape mode. If that enemy unit is a **MONSTER**/**VEHICLE** unit, that enemy unit makes three additional hazard rolls for each **BEAST** **SNAGGA** unit it is **engaged** with, with -1 from those **hazard rolls** if that enemy unit is battle-shocked.",
      },
    },
    {
      name: "GOADED INTO ACTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit has shot.",
        target: "One friendly unengaged Beast Snagga unit that lost a wound as a result of those attacks.",
        effect: "Your unit can make a surge move of up to D6\". If your unit is riled up, it can re-roll that D6.",
      },
    },
    {
      name: "INSTINCTIVE HUNTERS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One friendly unengaged Beast Snagga unit within 6\" of a battlefield edge.",
        effect: "Place your unit in strategic reserves.",
      },
    },
  ],
  "Dread Mob": [
    {
      name: "CRAZED RAMPAGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when an enemy unit targets a friendly Orks Walker unit (excluding Titanic units).",
        target: "That **ORKS** **WALKER** unit.",
        effect: "When a model in your unit is destroyed, if your unit has not been selected to fight this phase, roll one D6, with +3 to the result if your unit has Deff Dread:<br><br>• On a 4+, do not remove that model from the battlefield. When your unit has fought, or at the end of the phase (whichever comes first), that model is removed from the battlefield.",
      },
    },
    {
      name: "DREAD POWER",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One friendly Orks Walker unit.",
        effect: "Your unit is riled up until the start of your next turn.",
      },
    },
    {
      name: "STOMPING JUGGERNAUT",
      cp: "1 CP",
      rules: {
        when: "Your Movement/Charge phase, when a friendly Orks Walker unit is selected to move or declares a charge.",
        target: "That **ORKS** **WALKER** unit.",
        effect: "Your unit has **MOBILE**.",
      },
    },
  ],
  "Flyboyz": [
    {
      name: "FLYIN' HEADBUTT",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly Orks Aircraft unit is destroyed, before rolling for any Deadly Demise.",
        target: "That **ORKS** unit.",
        effect: "Your unit does not have the **Deadly Demise** ability. Select one enemy unit within 12\" of your unit and roll eight D6:<br><br>• For each 4+, that enemy unit suffers 1 mortal wound.Then remove your unit from the battlefield.",
      },
    },
    {
      name: "LONG, UNCONTROLLED BURSTS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly Orks Aircraft/Deffkoptas unit is selected to shoot.",
        target: "That **ORKS** **AIRCRAFT**/**DEFFKOPTAS** unit.",
        effect: "When your unit’s ranged attacks target a **FLY** unit, those attacks can re-roll hit rolls.",
      },
    },
    {
      name: "WHIRLIGIG EVASION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move.",
        target: "One friendly unengaged Deffkoptas unit within 8\" of that enemy unit.",
        effect: "Your unit can make a normal move of:<br><br>• Up to D6\".<br>• Or: If your unit is riled up, up to 6\".",
      },
    },
  ],
  "Green Tide": [
    {
      name: "UNBRIDLED CARNAGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly Boyz unit that made a charge move this turn is selected to fight.",
        target: "That **BOYZ** unit.",
        effect: "Your unit’s melee attacks have +1 **A**.",
      },
    },
    {
      name: "MOB MENTALITY",
      cp: "1 CP",
      rules: {
        when: "Start of the Battle-shock step of your Command phase.",
        target: "One friendly Orks Infantry unit of 13+ models.",
        effect: "Select one visible friendly **ORKS** unit within 12\" of your unit. That unit’s battle-shock rolls are automatically successful.",
      },
    },
    {
      name: "'ERE WE GO",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly Beast Snagga Boyz/Boyz unit is selected to move.",
        target: "That **BEAST** **SNAGGA** **BOYZ**/**BOYZ** unit.",
        effect: "Your unit has +2 to advance rolls.",
      },
    },
  ],
  "Kult of Speed": [
    {
      name: "DELICIOUS EATING SQUIGS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One friendly Rukkatrukk Squigbuggies unit.",
        effect: "Select any number of friendly Orks Infantry units within 3\" of your unit. Each selected unit heals 3 wounds.",
      },
    },
    {
      name: "DAKKASTORM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly Speed Freeks unit is selected to shoot.",
        target: "That **SPEED** **FREEKS** unit.",
        effect: "Your unit’s ranged attacks have [Sustained Hits 1].",
      },
    },
    {
      name: "SPEEDIEST FREEKS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly Speed Freeks unit.",
        target: "That **SPEED** **FREEKS** unit.",
        effect: "Ranged attacks that target your unit fail on an unmodified hit roll of 1-3.",
      },
    },
  ],
  "Madcap Meks": [
    {
      name: "VINDICTIVE ARTILLERISTS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly Mek Gunz unit is selected to shoot.",
        target: "That **MEK** **GUNZ** unit.",
        effect: "Your unit’s ranged attacks have:<br><br>• [Lethal Hits].<br>• Or: [Sustained Hits 1].<br>• Or: [Hazardous], [Lethal Hits], [Sustained Hits 1].",
      },
    },
  ],
  "Runt Swarm": [
    {
      name: "INFESTED WAR ZONE",
      cp: "2 CP",
      rules: {
        when: "Any phase, when an enemy unit has attacked.",
        target: "One friendly Gretchin unit that was just destroyed. You can target that unit with this **stratagem** even though that unit was just **destroyed**.",
        effect: "Add a new **GRETCHIN** unit to your army identical to your **destroyed** unit, in strategic reserves, at its starting strength, with its full wounds remaining.",
      },
    },
    {
      name: "SCARPER!",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged Gretchin unit.",
        target: "That **GRETCHIN** unit.",
        effect: "Your unit can make a normal move of:<br><br>• Up to D6\".<br>• Or: Up to 6\" instead if your unit is an attached unit.",
      },
    },
    {
      name: "GROT SHIELDS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly Orks Infantry unit (excluding Gretchin units).",
        target: "One friendly Gretchin unit within 3\" of that **ORKS** **INFANTRY** unit.",
        effect: "When a hit roll for that enemy unit’s ranged attacks that target that **ORKS** unit results in a hit, if a model in your **GRETCHIN** unit is on the battlefield, end the attack sequence for that attack and your **GRETCHIN** unit suffers 1 mortal wound.",
      },
    },
  ],
  "Shoota Boyz": [
    {
      name: "KUSTOM DAKKA",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly Orks Infantry unit is selected to shoot.",
        target: "That **ORKS** **INFANTRY** unit.",
        effect: "Your unit’s ranged attacks that target a unit (excluding **MONSTER**/**VEHICLE** units) have +1 to wound rolls.",
      },
    },
    {
      name: "GLOWIN' DAKKA",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly Orks Infantry unit is selected to shoot.",
        target: "That **ORKS** **INFANTRY** unit.",
        effect: "Your unit’s ranged attacks that target a unit within 9\" have +1 **AP**.",
      },
    },
    {
      name: "NEVER ENOUGH DAKKA",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly Orks Infantry unit is selected to shoot.",
        target: "That **ORKS** **INFANTRY** unit.",
        effect: "Your unit’s ranged attacks have [Sustained Hits 1].",
      },
    },
  ],
  "Taktikal Brigade": [
    {
      name: "DUBIOUS RESTRAINT",
      cp: "1 CP",
      rules: {
        when: "Start/end of your Movement phase.",
        target: "One friendly Boyz/Kommandos/Stormboyz unit.",
        effect: "Select one objective your unit is controlling. That **objective** is secured.",
      },
    },
    {
      name: "MIND MOSTLY ON THE MISSION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly Boyz/Kommandos/Stormboyz unit is selected to make an advance/fall-back move.",
        target: "That **BOYZ**/**KOMMANDOS**/**STORMBOYZ** unit.",
        effect: "That move does not prevent your unit from being eligible to start an action.",
      },
    },
    {
      name: "WHILE THEIR BACKS ARE TURNED",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Movement phase.",
        target: "One friendly unengaged Boyz/Kommandos/Stormboyz unit that was **engaged** at the start of the phase.",
        effect: "Your unit can make a normal move of up to 6\".",
      },
    },
  ],
  "War Horde": [
    {
      name: "BREAKIN' HEADS",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly attached Orks Infantry unit becomes battle-shocked.",
        target: "That **ORKS** **INFANTRY** unit. You can target that unit with this **stratagem** even though it is **battle-shocked**.",
        effect: "Roll one D3:<br><br>• Your unit suffers a number of mortal wounds equal to the result.<br>• Your unit is no longer **battle-shocked**.",
      },
    },
    {
      name: "HIT 'EM HARDER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly **ORKS** unit is selected to fight.",
        target: "That **ORKS** unit.",
        effect: "Your unit’s melee attacks have [Lethal Hits].",
      },
    },
    {
      name: "ORKS IS NEVER BEATEN",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when an enemy unit targets a friendly **ORKS** unit (excluding Titanic units).",
        target: "That **ORKS** unit.",
        effect: "When a model in your unit is destroyed, if your unit has not been selected to fight this phase, roll one D6, with +1 to that roll if your unit is riled up:<br><br>• On a 4+, do not remove that model from the battlefield. When your unit has fought, or at the end of the phase (whichever comes first), that model is removed from the battlefield.",
      },
    },
    {
      name: "MOW 'EM DOWN",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly Orks Vehicle unit (excluding Walker units) that made a charge move this turn is selected to fight.",
        target: "That **ORKS** **VEHICLE** unit.",
        effect: "Your unit’s melee attacks have:<br><br>• [Cleave 1].<br>• Or: If that attack already has **[CLEAVE]**, +1 to the value of that **[CLEAVE]** (e.g. **[CLEAVE** **1]** becomes **[CLEAVE** **2]**).",
      },
    },
    {
      name: "FUNGUS-FUEL INJECTION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly Orks mounted/vehicle unit is selected to move.",
        target: "That **ORKS** **MOUNTED**/**VEHICLE** unit.",
        effect: "Your unit has +2\" **M**.",
      },
    },
    {
      name: "CLOSE-RANGE DAKKA",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly **ORKS** unit is selected to shoot.",
        target: "That **ORKS** unit.",
        effect: "Your unit’s ranged attacks have:<br><br>• [Rapid Fire 1].<br>• Or: If that attack already has **[RAPID** **FIRE]**, +1 to the value of that **[RAPID** **FIRE]** (e.g. **[RAPID** **FIRE** **1]** becomes **[RAPID** **FIRE** **2]**).",
      },
    },
  ],
  "Wreckas": [
    {
      name: "DRIVE-BY BUSTIN'",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly Orks Transport unit is selected to shoot.",
        target: "That **ORKS** **TRANSPORT** unit.",
        effect: "Your unit’s ranged attacks with weapons selected for the Firing Deck ability have +1 to hit rolls.",
      },
    },
    {
      name: "GRAB IT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly unengaged Breaka Boyz/Flash Gitz/Tankbustas unit has shot.",
        target: "That **BREAKA** **BOYZ**/**FLASH** **GITZ**/**TANKBUSTAS** unit.",
        effect: "• Your unit can make a normal move of up to 6\", and must end that move within range of an objective.<br>• Your unit is not eligible to declare a charge until the end of the turn.",
      },
    },
    {
      name: "GUN-CRAZY SHOW-OFFS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit has shot.",
        target: "One friendly Flash Gitz/Tankbustas unit hit by those attacks.",
        effect: "Your unit shoots using normal shooting, but while doing so your unit can only target that enemy unit.",
      },
    },
  ],
  "Dominus Foebreakers": [
    {
      name: "GROUND-SHAKING STRIDES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly IMPERIAL KNIGHTS DOMINUS unit is selected to move.",
        target: "That **IMPERIAL** **KNIGHTS** **DOMINUS** unit.",
        effect: "Your unit has +2\" **M**.",
      },
    },
    {
      name: "FOEBREAKER FIRESTORM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly engaged IMPERIAL KNIGHTS DOMINUS unit is selected to shoot.",
        target: "That **IMPERIAL** **KNIGHTS** **DOMINUS** unit.",
        effect: "Your unit’s [BLAST] ranged attacks:<br><br>• Do not have **[BLAST]**.<br>• Have +1 **A**.",
      },
    },
    {
      name: "FIRE SHOCKED",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly IMPERIAL KNIGHTS DOMINUS unit has shot.",
        target: "That **IMPERIAL** **KNIGHTS** **DOMINUS** unit.",
        effect: "Select one enemy unit hit by those attacks. That enemy unit makes a battle-shock roll, with -1 to that **battle-shock roll**.",
      },
    },
  ],
  "Freeblade Company": [
    {
      name: "NOBLE SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Imperial Knights unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
        effect: "Your unit’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 4+, adding 1 to the result if it is an Armiger unit, instead of only a 6.",
      },
    },
    {
      name: "STRENGTH FROM EXILE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Imperial Knights unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if there are no other friendly units within 9\" of your unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.",
      },
    },
    {
      name: "FULL TILT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Imperial Knights unit from your army.",
        effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit, or 9\" instead if your unit is an Armiger or Destrier unit.",
      },
    },
    {
      name: "POINT‑BLANK BARRAGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Imperial Knights unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, when making ranged attacks with Blast weapons, models in your unit can target enemy units within Engagement Range of your unit (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, until the end of the phase, your unit does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units, but each time a model in your unit makes an attack with a Blast weapon that targets a unit within Engagement Range of your unit, on an unmodified Hit roll of 1, your unit suffers 1 mortal wound after all of its attacks have been resolved.",
      },
    },
    {
      name: "SURVIVOR OF STRIFE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Imperial Knights unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "FLANKING MANOEUVRES",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Armiger unit from your army that is within 9\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Gate Warden Lance": [
    {
      name: "DRIVE THEM OUT!",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Imperial Knights unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit on your defensive line, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "LANCEBREAKER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Imperial Knights unit from your army that was selected as the target of one or more of the attacking unit’s attacks and is on your defensive line.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greaterthan the Toughness characteristic of your unit, subtract 1 from the Wound roll",
      },
    },
    {
      name: "STEADFAST SUPERIORITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Imperial Knights unit from your army that is within Engagement Range of one or more enemy units, that is on your defensive line and that has not already been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.",
      },
    },
    {
      name: "MARSHAL THE DEFENCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "Up to two Imperial Knights units from your army that have not been selected to move this phase.",
        effect: "Until the end of the phase, add 3\" to the Move characteristic of models in your units.",
      },
    },
    {
      name: "TITANIC BOMBARDMENT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Imperial Knights Titanic unit from your army that Remained Stationary this turn, that is on your defensive line and that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 2] ability.",
      },
    },
    {
      name: "FORTRESS OF INTIMIDATION",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One Imperial Knights Titanic unit from your army that is on your defensive line.",
        effect: "Until the end of the phase, each time an enemy unit selects your unit as a target of a charge, that unit must take a Battle-shock test, subtracting 1 from the result.",
      },
    },
  ],
  "Questor Forgepact": [
    {
      name: "OMNISSIAH’S GRACE",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly IMPERIAL KNIGHTS unit suffers a mortal wound.",
        target: "That **IMPERIAL** **KNIGHTS** unit.",
        effect: "Your unit has Feel No Pain 5+ against mortal wounds.",
      },
    },
    {
      name: "VENGEANCE OF THE MACHINE CULT",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly IMPERIAL KNIGHTS TITANIC unit is destroyed by an enemy unit.",
        target: "One friendly ADEPTUS MECHANICUS unit.",
        effect: "That enemy unit is marked until the end of the battle:<br><br>• While a unit is marked, friendly **ADEPTUS** **MECHANICUS** units’ attacks that target that unit can re-roll wound rolls.",
      },
    },
    {
      name: "IN THE SHADOW OF GIANTS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly ADEPTUS MECHANICUS unit is selected to make an advance/fall-back move.",
        target: "That **ADEPTUS** **MECHANICUS** unit.",
        effect: "That move does not prevent your unit from being eligible to start an action.",
      },
    },
  ],
  "Questoris Companions": [
    {
      name: "COURAGEOUS STAND",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Imperial Knights Titanic unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability.",
      },
    },
    {
      name: "TITANIC DUEL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Imperial Knights Titanic model from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time your model makes an attack that targets a **MONSTER**, **TITANIC** or **WALKER** unit, add 1 to the Hit roll and add 1 to the Wound roll.",
      },
    },
    {
      name: "MOMENT OF GLORY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an Imperial Knights Titanic unit from your army Consolidates.",
        target: "That **IMPERIAL** **KNIGHTS** **TITANIC** unit.",
        effect: "Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3\" provided your unit can end that move within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "HERO’S TREAD",
      cp: "1 CP",
      rules: {
        when: "End of your Command phase.",
        target: "One Imperial Knights Titanic model from your army that is within range of an objective marker you control.",
        effect: "Your Level of Control over that objective marker is 5 (unless it would otherwise be higher), until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "UNSTOPPABLE WARRIOR",
      cp: "2 CP",
      rules: {
        when: "Your Movement phase, just after an Imperial Knights Titanic unit from your army Falls Back.",
        target: "That **IMPERIAL** **KNIGHTS** **TITANIC** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "DRIVEN BY THE PAST",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Imperial Knights Titanic unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
  ],
  "Spearhead-At-Arms": [
    {
      name: "VIRTUE OF COURAGE",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One Armiger model from your army, or one Imperial Knights Titanic model from your army, and one or more friendly **ARMIGER** models affected by that model’s Bondsman ability.",
        effect: "Select one enemy unit. Until the end of the phase, each time one of your **ARMIGER** models makes an attack that targets that enemy unit, add 1 to the Hit roll.",
      },
    },
    {
      name: "EXEMPLAR’S WISDOM",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after an Imperial Knights Titanic model from your army has shot.",
        target: "That **IMPERIAL** **KNIGHTS** **TITANIC** model, and one or more friendly Armiger models affected by that model’s Bondsman ability.",
        effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time one of your **ARMIGER** models makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "MANTLE OF THE MENTOR",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One Armiger model from your army, or one Imperial Knights Titanic model from your army, and one or more friendly **ARMIGER** models affected by that model’s Bondsman ability.",
        effect: "Until the end of the phase, your **ARMIGER** models are eligible to shoot in a turn in which they Fell Back.",
      },
    },
    {
      name: "THIN THEIR RANKS",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One Armiger model from your army, or one Imperial Knights Titanic model from your army, and one or more friendly **ARMIGER** models affected by that model’s Bondsman ability.",
        effect: "Until the end of the phase, ranged weapons equipped by your **ARMIGER** models have the [RAPID FIRE 1] ability.",
      },
    },
    {
      name: "LET DUTY BE YOUR SHIELD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Armiger unit from your army that was selected as the target of one or more of the attacking units attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SQUIRES OFTHE HUNT",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Armiger model from your army, or one Imperial Knights Titanic model from your army, and one or more friendly **ARMIGER** models affected by that model’s Bondsman ability.",
        effect: "For each of your **ARMIGER** models that is within 9\" of one or more battlefield edges and not within Engagement Range of one or more enemy units, remove that **ARMIGER** model from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Throne-Bonded Outriders": [
    {
      name: "NEURAL LASH",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One friendly IMPERIAL KNIGHTS TITANIC unit.",
        effect: "Select one friendly battle-shocked ARMIGER unit within 12\" of your unit. That **ARMIGER** unit is no longer **battle-shocked**.",
      },
    },
    {
      name: "HELM CONDITIONING",
      cp: "1 CP",
      rules: {
        when: "Your Command phase, when a friendly IMPERIAL KNIGHTS unit uses a Bondsman ability.",
        target: "That **IMPERIAL** **KNIGHTS** unit.",
        effect: "When selecting an ARMIGER model for that **Bondsman** ability, you can select one within 18\" of your unit (excluding models already affected by a **Bondsman** ability).",
      },
    },
    {
      name: "HONOURED TO SERVE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly ARMIGER unit has shot.",
        target: "That **ARMIGER** unit.",
        effect: "Those attacks do not prevent your unit from being eligible to start an action.",
      },
    },
  ],
  "Valourstrike Lance": [
    {
      name: "RUN THEM THROUGH!",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Imperial Knights unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by your models have the [LANCE] ability.",
      },
    },
    {
      name: "THUNDERSTOMP",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Imperial Knights model from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, the Attacks characteristic of any armoured Feet melee weapons equipped by your model is 8, the Attacks characteristic of any titanic Feet melee weapons equipped by your model is 12, and improve the Armour Penetration characteristic of those weapons by 1.",
      },
    },
    {
      name: "FULL TILT",
      cp: "2 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Imperial Knights unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, add 2\" to the Move characteristic of your models and add 2 to Advance rolls made for those model’s units.",
      },
    },
    {
      name: "VOW OF RETRIBUTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Imperial Knights unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by your models have the [LETHAL HITS] ability.",
      },
    },
    {
      name: "TACTICAL FOIL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Imperial Knights model from your army that is within 8\" of that unit.",
        effect: "Your model can make a Normal move of up to D6\".",
      },
    },
    {
      name: "ROTATE ION SHIELDS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Imperial Knights unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
  ],
  "Bastions of Tyranny": [
    {
      name: "RUNE-CURSED STRONGHOLD",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly KNIGHT TYRANT unit suffers a mortal wound.",
        target: "That **KNIGHT** **TYRANT** unit.",
        effect: "Your unit has Feel No Pain 5+ against mortal wounds.",
      },
    },
    {
      name: "PITILESS FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly KNIGHT TYRANT unit is selected to make a fall-back move.",
        target: "That KNIGHT TYRANT unit.",
        effect: "That move does not prevent your unit from being eligible to shoot.",
      },
    },
    {
      name: "INTIMIDATING REMINDER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly KNIGHT TYRANT unit has shot.",
        target: "That **KNIGHT** **TYRANT** unit.",
        effect: "Select one enemy unit hit by those attacks. That enemy unit is **suppressed** until the start of your next Command phase:<br><br>• While a unit is **suppressed**, that unit’s attacks have -1 to hit rolls.",
      },
    },
  ],
  "Helhunt Lance": [
    {
      name: "FERAL ARROGANCE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a mortal wound is allocated to a Chaos Knights unit from your army.",
        target: "That **CHAOS** **KNIGHTS** unit.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds.",
      },
    },
    {
      name: "MERCILESS FUSILLADE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase or the start of the Fight phase.",
        target: "One Titanic Chaos Knights unit from your army, and up to two friendly War Dog units, that have not been selected to shoot or fight this phase.",
        effect: "Select one enemy unit that is an eligible target for each of those **CHAOS** **KNIGHTS** units. Until the end of the phase, each time one of those Chaos Knights units is selected to shoot or fight, if that enemy unit is an eligible target, you can only select that enemy unit as the target for all of those attacks and those attacks have the [SUSTAINED HITS 1] ability.",
      },
    },
    {
      name: "BEASTHIDE MANIFESTATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **CHAOS** **KNIGHTS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "FLUSH THE QUARRY",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "One Titanic Chaos Knights unit from your army and up to three friendly War Dog units within 6\" of that Titanic Chaos Knights unit.",
        effect: "Until the end of the phase, each time one of those War Dog units makes a Normal, Advance or Fall Back move, its models can move through models and terrain features. When doing so, they can move within Engagement Range of such models but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
    },
    {
      name: "CONTEMPTUOUS VOLLEYS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **CHAOS** **KNIGHTS** unit from your army Falls Back.",
        target: "That Chaos Knights unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "GOADED BEAST",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One CHAOS KNIGHTS unit from your army that lost one or more wounds as a result of those attacks.",
        effect: "Your unit can make a surge move of up to D6\"",
      },
    },
  ],
  "Houndpack Lance": [
    {
      name: "VOX-HOWL",
      cp: "2 CP",
      rules: {
        when: "Start of the Shooting phase or the start of the Fight phase.",
        target: "One War Dog Character unit from your army.",
        effect: "Each enemy unit within 6\" of your unit must take a Battle-shock test. Each friendly **WAR** **DOG** unit that is within 6\" of your unit and is Battle-shocked must take a Leadership test; if that test is passed, that unit is no longer Battle-shocked.<br><br>**Restrictions:** You can only use this Stratagem once per turn.",
      },
    },
    {
      name: "HUNGRY FOR COMBAT",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "Two or more War Dog units from your army within Engagement Range of the same enemy unit.",
        effect: "Select one enemy unit within Engagement Range of those **WAR** **DOG** units. Until the end of the phase, models in those **WAR** **DOG** units can only target that enemy unit, but each time a model in one of those **WAR** **DOG** units makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "CUNNING HUNTER",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a War Dog unit from your army Falls Back.",
        target: "That **WAR** **DOG** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "ANIMALISTIC RAGE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after a WAR DOG unit from your army that has not been selected to attack this phase is destroyed.",
        target: "That **WAR** **DOG** unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Before resolving your unit’s Deadly Demise ability, it can either shoot or fight. When doing so, it must target only the enemy unit that just destroyed it, and can only do so if that enemy unit is an eligible target. After it has done so and after any Consolidation moves have been made, resolve your unit’s **Deadly Demise** ability as normal.",
      },
    },
    {
      name: "HARRYING HOUNDS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One War Dog unit from your army that is within 8\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "ENCIRCLING PACK",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One War Dog unit from your army that is wholly within 12\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Hunting Warpack": [
    {
      name: "INSENSATE BLOODTHIRST",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when an enemy unit targets a friendly WAR DOG unit.",
        target: "That **WAR** **DOG** unit.",
        effect: "Your unit has Feel No Pain 5+",
      },
    },
    {
      name: "LEASH OF THE MASTERS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly WAR DOG unit has shot.",
        target: "That **WAR** **DOG** unit.",
        effect: "Those attacks do not prevent your unit from being eligible to start an action.",
      },
    },
    {
      name: "STALKING FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly WAR DOG unit within range of an objective.",
        target: "That **WAR** **DOG** unit.",
        effect: "Ranged attacks that target your unit have -1 **AP** until that enemy unit has attacked.",
      },
    },
  ],
  "Iconoclast Fiefdom": [
    {
      name: "AVENGE THE MASTERS!",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly CHAOS KNIGHTS unit is destroyed by an enemy unit.",
        target: "That enemy unit.",
        effect: "That enemy unit is **marked** until the end of the battle.<br><br>• Friendly DAMNED units’ attacks that target a **marked** unit have [LETHAL HITS].",
      },
    },
    {
      name: "DARK SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One friendly DAMNED unit (excluding ACCURSED CULTISTS units) within 9\" of a friendly CHAOS KNIGHTS model.",
        effect: "Select one **CHAOS** **KNIGHTS** model within 9\" of your unit and roll D3+3:<br><br>• Your **DAMNED** unit suffers that number of mortal wounds.<br>• That **CHAOS** **KNIGHTS** model heals that number of wounds.",
      },
    },
    {
      name: "COURSING THRALLS",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly DAMNED unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. That enemy unit is **hunted**:<br><br>• While a unit is **hunted**, that unit has +6\" detection range.",
      },
    },
  ],
  "Infernal Lance": [
    {
      name: "PROFANE SYMBIOSIS",
      cp: "1 CP",
      rules: {
        when: "End of any phase.",
        target: "One Chaos Knights unit from your army that is not Empowered.",
        effect: "Your unit makes a Malefic Surge.<br><br>**Restrictions:** You cannot select the same unit as the target of this Stratagem more than once per battle round.",
      },
    },
    {
      name: "HELLFORGED CONSTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Chaos Knights unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "CORRUPTING TAINT",
      cp: "1 CP",
      rules: {
        when: "Your Command phase, just after a Chaos Knights Character unit from your army makes a Malefic Surge.",
        target: "That **CHAOS** **KNIGHTS** **CHARACTER** unit.",
        effect: "Select one objective marker your unit is within range of that you control. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "UNLEASH BALEFIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Chaos Knights unit from your army that has not been selected to shoot this phase.",
        effect: "After your unit has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test; if the test is failed, until the end of your opponent’s next turn, it is aflame. While a unit is aflame, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it.",
      },
    },
    {
      name: "WARP VISION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Chaos Knights unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability.",
      },
    },
    {
      name: "DIABOLIC BULWARK",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Chaos Knights unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
  ],
  "Lords of Dread": [
    {
      name: "CLAIMED FOR THE DARK GODS",
      cp: "1 CP",
      rules: {
        when: "Start of your Command phase.",
        target: "One Chaos Knights Character unit from your army that is within range of one or more objective markers you control.",
        effect: "Select one of those objective markers. That objective marker remains under your control, with a Level of Control of 5 (unless it would otherwise be higher), until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "SPITEFUL DEMISE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a Chaos Knights Character unit from your army is destroyed.",
        target: "That **CHAOS** **KNIGHTS** **CHARACTER** unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "When rolling to determine whether mortal wounds are inflicted by your unit’s Deadly Demise ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of a 4+ instead of on a 6.",
      },
    },
    {
      name: "RUNES OF DISDAIN",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Chaos Knights Character unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "TITANIC DUEL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Chaos Knights Character unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Select one enemy **MONSTER** or **VEHICLE** unit. Until the end of the phase, each time a model in your unit makes an attack that targets that enemy unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1. Each time a model in your unit makes an attack that targets that enemy unit, if that enemy unit is **TITANIC**, you can re-roll the Hit roll and you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "TROPHY HUNTER",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before a Chaos Knights Character unit from your army consolidates.",
        target: "That **CHAOS** **KNIGHTS** **CHARACTER** unit.",
        effect: "Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3\" as long as your unit can end that move within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "CRUSHED LIKE VERMIN",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Chaos Knights Character unit from your army ends a Normal move.",
        target: "That **CHAOS** **KNIGHTS** **CHARACTER** unit.",
        effect: "Select one enemy unit (excluding **MONSTERS** and **VEHICLES**) that your unit moved over during that move and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound. If one or more models are destroyed as a result of this Stratagem, that enemy unit must take a Battle-shock test.",
      },
    },
  ],
  "Traitoris Lance": [
    {
      name: "PTERRORSHADES",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit fails a Battle-shock test.",
        target: "One Chaos Knights unit from your army that is within 12\" of that enemy unit.",
        effect: "Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound and one model in your unit regains up to 1 lost wound.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "CONQUERORS WITHOUT MERCY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Chaos Knights model from your army that made a Charge move this turn and has not been selected to fight this phase.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by your model by 1. After your model has finished making its attacks this phase, if it destroyed one or more enemy units this phase, each enemy unit within 6\" of your model must take a Battle-shock test.",
      },
    },
    {
      name: "DISDAIN FOR THE WEAK",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Chaos Knights unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability, and the Feel No Pain 5+ ability against attacks made by Battle-shocked models.",
      },
    },
    {
      name: "A LONG LEASH",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Abhorrent unit from your army and up to two friendly War Dog units.",
        effect: "Until the start of your next Command phase, those **WAR** **DOG** units are treated as being within range of any Aura abilities your **ABHORRENT** unit has.",
      },
    },
    {
      name: "IMPERIOUS ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "Up to two War Dog units from your army or one Titanic Chaos Knights unit from your army.",
        effect: "Until the end of the phase, each time a model in one of your units makes a Normal, Advance, Fall Back or Charge move, it can move through models and terrain features. When doing so, it can move within Engagement Range of such models but, unless it made a Charge move, cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed (the Super-heavy Walker ability does not apply while using this Stratagem).",
      },
    },
    {
      name: "STORM OF DARKNESS",
      cp: "1 CP",
      rules: {
        when: ": Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Chaos Knights unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: ":<br><br>• Your unit has Stealth.<br>• Melee attacks that target your unit have -1 to hit rolls.",
      },
    },
  ],
  "1st Company Task Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "HEROES OF THE CHAPTER",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is Below Half-strength, add 1 to the Wound roll as well.",
      },
    },
    {
      name: "TERRIFYING PROFICIENCY",
      cp: "1 CP",
      rules: {
        when: "Your Fight phase.",
        target: "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that made a Charge move this turn and destroyed one or more enemy units this phase.",
        effect: "In your opponent’s next Command phase, each enemy unit within 6\" of your unit must take a Battle-shock test. If the unit taking that test is Below Half-strength, subtract 1 from that test. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.",
      },
    },
    {
      name: "DUTY AND HONOUR",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army within range of an objective marker you control.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "ORBITAL TELEPORTARIUM",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One ADEPTUS ASTARTES TERMINATOR unit from your army.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves. It will arrive back on the battlefield in the Reinforcements step of your next Movement phase using the Deep Strike ability.<br><br>**Restrictions:** You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "LEGENDARY FORTITUDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit ends a Charge move.",
        target: "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army within Engagement Range of that enemy unit.",
        effect: "Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
  ],
  "Angelic Inheritors": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "FOCUSED FURY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If your unit is a Character unit, until the end of the phase, those weapons have the [LANCE] ability as well.",
      },
    },
    {
      name: "INSTANT OF GRACE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Adeptus Astartes Infantry unit from your army.",
        effect: "Select one non-**CHARACTER** model in your unit. Until the start of your next Command phase, your model has the Character keyword.<br><br>**Designer’s Note:** ^^While in effect, your model’s unit is therefore a **CHARACTER** unit, meaning it can interact with the Legacy of the Angel Detachment rule, in addition to other rules that interact with **CHARACTER** units.^^",
      },
    },
    {
      name: "STRIKE NOW FOR GLORY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability.",
      },
    },
    {
      name: "IN THE SHADOW OF GREAT WINGS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Adeptus Astartes Character unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
    {
      name: "UNTO THE BURNING SKIES",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Adeptus Astartes Jump Pack unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units, unless it is The Sanguinor.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Anvil Siege Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "RIGID DISCIPLINE",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that is within Engagement Range of one or more enemy units.",
        effect: "Your unit can immediately make a Fall Back move of up to 6\".<br><br>**Restrictions:** When making that move, your unit must end that move either wholly within your deployment zone or within range of an objective marker.",
      },
    },
    {
      name: "NOT ONE BACKWARDS STEP",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One ADEPTUS ASTARTES INFANTRY unit from your army within range of an objective marker.",
        effect: "Until the end of the turn, double the Objective Control characteristic of models in your unit, but it must Remain Stationary this turn.",
      },
    },
    {
      name: "NO THREAT TOO GREAT",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets a **MONSTER** or **VEHICLE** unit, you can re-roll the Wound roll.",
      },
    },
    {
      name: "BATTLE DRILL RECALL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. If your unit Remained Stationary this turn, then until the end of the phase, each time a model in your unit makes a ranged attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "HAIL OF VENGEANCE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has resolved its attacks.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],
  "Armoured Speartip": [
    {
      name: "MACHINE WRATH",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a Heavy Transport unit from your army with the Deadly Demise ability is destroyed.",
        target: "That **HEAVY** **TRANSPORT** unit, if you rolled a 6 for its Deadly Demise ability. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Your unit can make a Normal or Fall Back move before its Deadly Demise ability is resolved, and before any embarked units perform an Emergency Disembarkation. When making this move, your unit can move through enemy models (excluding **MONSTERS** and **VEHICLES**) and can move within Engagement Range of such models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "RAPID EMBARKATION",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One Adeptus Astartes Infantry unit from your army that is not within Engagement Range of one or more enemy units, and one friendly Heavy Transport it is able to embark within.",
        effect: "If your **ADEPTUS** **ASTARTES** **INFANTRY** unit is wholly within 6\" of that **HEAVY** **TRANSPORT**, it can embark within it. Your unit can embark within that **TRANSPORT** in a turn it disembarked from a **TRANSPORT**.",
      },
    },
    {
      name: "CERAMITE SLEDGEHAMMER",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Adeptus Astartes Transport unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal or Advance move, it can move horizontally through terrain features. In addition, if your unit is a Heavy Transport, when making this move, your unit can move through enemy models (excluding **MONSTERS** and **VEHICLES**) and can move within Engagement Range of such models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
    },
    {
      name: "ADVANCED DEPLOYMENT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Adeptus Astartes Transport unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, units can disembark from your **TRANSPORT** after it has Advanced. Units that do so make a shock disembark move (Core Rules, 18.07) for that disembarkation.",
      },
    },
    {
      name: "PURGATION DOCTRINE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll (if your unit disembarked from a Heavy Transport this turn, add 1 to the Wound roll as well).",
      },
    },
  ],
  "Bastion Task Force": [
    {
      name: "CODEX DISCIPLINE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, re-roll a Hit roll of 1. If that target is auspex scanned, re-roll a Wound roll of 1 as well.",
      },
    },
    {
      name: "GUIDED DISRUPTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after an Adeptus Astartes Battleline unit from your army has finished making its attacks.",
        target: "That **ADEPTUS** **ASTARTES** **BATTLELINE** unit.",
        effect: "When an enemy unit is auspex scanned as a result of those attacks this turn, if that enemy unit does not have the **MONSTER** or **VEHICLE** keywords, until the start of your next turn, it is pinned. While a unit is pinned, subtract 2 from that unit’s Move characteristic and subtract 2 from Charge rolls made for that unit.",
      },
    },
    {
      name: "LIGHT OF VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Select the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have that ability while targeting an auspex scanned unit or if the bearer has the Battleline keyword.",
      },
    },
    {
      name: "SHOCK BOMBARDMENT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after an Adeptus Astartes Battleline unit from your army finished making its attacks.",
        target: "That **ADEPTUS** **ASTARTES** **BATTLELINE** unit.",
        effect: "When an enemy unit is auspex scanned as a result of those attacks this turn, until the start of your next turn, it is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "HERESY UNDONE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or your Charge phase.",
        target: "One **ADEPTUS** **ASTARTES** unit (excluding Battleline units) from your army.",
        effect: "Until the end of the phase, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back. If it does, every target of that charge and every target of those attacks must be an auspex scanned unit.",
      },
    },
  ],
  "Black Spear Task Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "ADAPTIVE TACTICS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "Up to two Kill Team units from your army, or one other **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "For each unit targeted, select Furor Tactics, Malleus Tactics or Purgatus Tactics. Until the start of your next Command phase, that Mission Tactic is active for that unit instead of any Mission Tactic that is active for your army.",
      },
    },
    {
      name: "HELLFIRE ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Kill Team unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons (excluding Devastating Wounds weapons) equipped by models in your unit have the [ANTI-INFANTRY 2+] and [ANTI-MONSTER 5+] abilities.<br><br>**Restrictions:** You cannot select any units that have already been targeted with either the Kraken Rounds or Dragonfire Rounds Stratagems this phase.",
      },
    },
    {
      name: "KRAKEN ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Kill Team unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of ranged weapons equipped by models in your unit by 1 and improve the Range characteristic of those weapons by 6\".<br><br>**Restrictions:** You cannot select any units that have already been targeted with either the Dragonfire Rounds or Hellfire Rounds Stratagems this phase.",
      },
    },
    {
      name: "DRAGONFIRE ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Kill Team unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] and [IGNORES COVER] abilities.<br><br>**Restrictions:** You cannot select any units that have already been targeted with either the Kraken Rounds or Hellfire Rounds Stratagems this phase.",
      },
    },
    {
      name: "SITE-TO-SITE TELEPORTATION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to two Kill Team units from your army, or one other Adeptus Astartes Infantry unit from your army, if those units are not within Engagement Range of one or more enemy units.",
        effect: "Remove those units from the battlefield and place them into Strategic Reserves. Until the end of your next Movement phase, models in those units that do not have the Deep Strike ability have the Deep Strike ability.",
      },
    },
  ],
  "Blade of Ultramar": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "TACTICAL FORESIGHT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than or equal to the Toughness characteristic of that unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "COURAGE AND HONOUR!",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit is under the effects of the Assault Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
    },
    {
      name: "ULTRAMARIAN ADAPTIVITY",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Select the Devastator Doctrine, Tactical Doctrine or Assault Doctrine. Until the start of your next Command phase, that Combat Doctrine is active for your unit instead of any other Combat Doctrine that is active for your army, even if you have already selected that Combat Doctrine this battle.",
      },
    },
    {
      name: "EXEMPLARY VIGILANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. If your unit is under the effects of the Devastator Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
    },
    {
      name: "PRACTICAL TACTICS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that is not within Engagement Range of one or more enemy units and is within 8\" of the enemy unit that just ended that move.",
        effect: "Your unit can make a Normal move of up to D6\", or a Normal move of up to 6\" instead if it is under the effects of the Tactical Doctrine.",
      },
    },
  ],
  "Ceramite Sentinels": [
    {
      name: "UNYIELDING MIGHT",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that is within Engagement Range of one or more enemy units.",
        effect: "Until the start of your next Command phase, add 1 to the Objective Control characteristics of models in your unit.",
      },
    },
    {
      name: "PRIORITY STRIKE",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a **CHARACTER**, **MONSTER** or **VEHICLE** unit, you can re-roll the Wound roll.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "STAND TO THE END",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if it is an **ENTRENCHED** unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "AUGMENTED TARGETING",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Select either the [SUSTAINED HITS 1] or [LETHAL HITS] abilities. Until the end of the phase, ranged weapons equipped by models in your unit have the selected ability. If your unit is **ENTRENCHED**, until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] and [LETHAL HITS] abilities instead.",
      },
    },
    {
      name: "EVASIVE REPOSITIONING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can make a Normal move of up to D6\". If your unit is **ENTRENCHED**, you can re-roll the D6 to determine how far your unit can move.",
      },
    },
  ],
  "Champions of Fenris": [
    {
      name: "WOLF TOTEMS",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly ADEPTUS ASTARTES INFANTRY CHARACTER unit suffers a mortal wound.",
        target: "That **ADEPTUS** **ASTARTES** **INFANTRY** **CHARACTER** unit.",
        effect: "Your unit has Feel No Pain 5+ against **mortal wounds**.",
      },
    },
    {
      name: "RUNES OF CLAIMING",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One friendly ADEPTUS ASTARTES INFANTRY CHARACTER unit.",
        effect: "Select one objective your unit is controlling. That **objective** is secured.",
      },
    },
    {
      name: "STALK BETWEEN WORLDS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly ADEPTUS ASTARTES INFANTRY CHARACTER unit.",
        target: "That **ADEPTUS** **ASTARTES** **INFANTRY** **CHARACTER** unit.",
        effect: "Your unit has Stealth.",
      },
    },
  ],
  "Companions of Vehemence": [
    {
      name: "DEVOUT PUSH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Adeptus Astartes Infantry unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\".<br><br>**Restrictions:** A unit cannot be targeted with this and the Hearts Hardened to Duty Stratagem in the same phase unless it has the Chaplain or Judiciar keywords.",
      },
    },
    {
      name: "HEARTS HARDENED TO DUTY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before an Adeptus Astartes Infantry unit from your army Consolidates.",
        target: "That **ADEPTUS** **ASTARTES** **INFANTRY** unit.",
        effect: "Until the end of the phase, each time a model in your unit makes a Consolidation move, it does not need to end that move closer to the closest enemy model (or the closest enemy unit if the Suffer Not the Unclean to Live Vow is active for it).",
      },
    },
    {
      name: "FOR THE EMPEROR'S HONOUR!",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Adeptus Astartes Infantry unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
    },
    {
      name: "PIOUS ENMITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Chaplain or Judiciar unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a melee attack that targets an enemy unit, re-roll a Hit roll of 1. If that target is a **MONSTER** or **VEHICLE** unit, re-roll a Wound roll of 1 as well.",
      },
    },
    {
      name: "HERESY BEGETS RETRIBUTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One CHAPLAIN or JUDICIAR unit from your army that is within 8\" of that enemy unit and is not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
    {
      name: "DREAD CRUSADERS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit declares a charge.",
        target: "One Adeptus Astartes Infantry unit from your army that was selected as one of the targets of that charge.",
        effect: "That enemy unit must take a Battle-shock test, subtracting 1 from the result.",
      },
    },
  ],
  "Company of Hunters": [
    {
      name: "HUNTERS’ TRAIL",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Ravenwing Mounted unit from your army that is within range of an objective marker you control.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "TALON STRIKE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly ADEPTUS ASTARTES unit is selected to fight.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Your unit’s melee attacks have [LANCE].",
      },
    },
    {
      name: "DEATH ON THE WIND",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly **ADEPTUS** **ASTARTES** unit ends an advance move.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "That **advance move** does not prevent your unit from being eligible to declare a charge.",
      },
    },
    {
      name: "HIGH-SPEED FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Ravenwing unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "RAPID REAPPRAISAL",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Ravenwing unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Dark Age Arsenal": [
    {
      name: "SEARING BURSTS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly HELLBLASTER SQUAD unit has shot.",
        target: "That **HELLBLASTER** **SQUAD** unit.",
        effect: "Select one enemy unit hit by your unit’s **plasma** ranged attacks. That enemy unit is **seared** until the start of your next turn:<br><br>• While a unit is **seared**, that unit has -2\" **M**.",
      },
    },
    {
      name: "NO SACRIFICE TOO GREAT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly **ADEPTUS** **ASTARTES** unit is selected to shoot.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Your unit’s [HAZARDOUS] plasma ranged attacks have +1 **S**.",
      },
    },
    {
      name: "REVELATION OF GUILT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly **ADEPTUS** **ASTARTES** unit is selected to shoot.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Your unit’s **plasma** ranged attacks have +1 to hit rolls.",
      },
    },
  ],
  "Darkflight Pursuit": [
    {
      name: "SKYBORNE SURVEILLANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly RAVENWING FLY unit has shot.",
        target: "That **RAVENWING** **FLY** unit.",
        effect: "Visible enemy units within 6\" of your unit have +3\" detection range.",
      },
    },
    {
      name: "WINGS OF SHADOW",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly RAVENWING FLY unit.",
        target: "That **RAVENWING** **FLY** unit.",
        effect: "Your unit has Stealth.",
      },
    },
    {
      name: "WE ARE VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly unengaged RAVENWING FLY unit has shot.",
        target: "That **RAVENWING** **FLY** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
  ],
  "Emperor’s Shield": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "FURY OF THE FIRST",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is below its Starting Strength, add 1 to the Wound roll as well.",
      },
    },
    {
      name: "OBDURATE VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 3+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "WRATHFUL CONQUERORS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army within range of an objective marker you control.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any phase.",
      },
    },
    {
      name: "DISCIPLINED EXTERMINATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability and improve the Armour Penetration characteristic of such weapons by 1.",
      },
    },
    {
      name: "DROPSHIP EXTRACTION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Adeptus Astartes Terminator unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Encarmine Speartip": [
    {
      name: "JUDGEMENT OF THE GOLDEN HOST",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, when a friendly SANGUINARY GUARD unit from your army ends a charge move.",
        target: "That **SANGUINARY** **GUARD** unit.",
        effect: "Select one enemy unit engaged with your unit. Roll one D6 for each model in your unit **engaged** with that enemy unit:<br><br>• For each 3+, that enemy unit suffers 1 mortal wound.",
      },
    },
    {
      name: "INEXORABLE VALOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit that was engaged with a friendly SANGUINARY GUARD unit ends a fall-back move, if that **SANGUINARY** **GUARD** unit is unengaged.",
        target: "That **SANGUINARY** **GUARD** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
    {
      name: "BLINDING BLURS OF VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly SANGUINARY GUARD unit.",
        target: "That **SANGUINARY** **GUARD** unit.",
        effect: "Your unit has Stealth.",
      },
    },
  ],
  "Firestorm Assault Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "CRUCIBLE OF BATTLE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets the closest eligible target within 6\", add 1 to the Wound roll.",
      },
    },
    {
      name: "RAPID EMBARKATION",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One ADEPTUS ASTARTES TRANSPORT unit from your army that has no models embarked within it, and one ADEPTUS ASTARTES INFANTRY unit from your army wholly within 6\" of that **TRANSPORT**.",
        effect: "Your **INFANTRY** unit can embark within that **TRANSPORT**.<br><br>**Restrictions:** You cannot target an **INFANTRY** unit that is within Engagement Range of one or more enemy units, that cannot normally embark within that **TRANSPORT**, or that disembarked from a **TRANSPORT** this turn.",
      },
    },
    {
      name: "IMMOLATION PROTOCOLS",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, Torrent weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
      },
    },
    {
      name: "ONSLAUGHT OF FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that disembarked from a **TRANSPORT** this turn and has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets the closest eligible target within 12\", add 1 to the Hit roll. If one or more enemy models are destroyed as the result of any of those attacks, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test.",
      },
    },
    {
      name: "BURNING VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has resolved its attacks.",
        target: "One ADEPTUS ASTARTES TRANSPORT unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "One unit embarked within that **TRANSPORT** can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],
  "Forgefather’s Seekers": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "CRUCIBLE OF BATTLE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Adeptus Astartes Infantry unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets the closest eligible target within 6\", add 1 to the Wound roll.",
      },
    },
    {
      name: "WRATHFUL INFERNO",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an Adeptus Astartes Infantry unit from your army Falls Back.",
        target: "That unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
    },
    {
      name: "IMMOLATION PROTOCOLS",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, Torrent weapons equipped by models in your unit have the [DEVASTATING WOUNDS] ability.",
      },
    },
    {
      name: "BURNING VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One Adeptus Astartes Transport unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "One unit embarked within that **TRANSPORT** can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
    {
      name: "BLAZING EARTH",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army equipped with one or more Torrent weapons.",
        effect: "Select one enemy unit (excluding **MONSTERS** and **VEHICLES** and units with the **FLY** keyword) within 12\" of and visible to your unit. Until the end of the phase, each time that enemy unit declares a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).",
      },
    },
  ],
  "Fulguris Task Force": [
    {
      name: "DATA-LINK AUGURY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly SPEEDER unit is selected to shoot.",
        target: "That **SPEEDER** unit.",
        effect: "Select one enemy unit within 24\" of your unit. That enemy unit has +6\" detection range until your unit has shot.",
      },
    },
    {
      name: "REACTIVE EVASION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged SPEEDER unit.",
        target: "That **SPEEDER** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
    {
      name: "ANTI-GRAV SURGE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One friendly unengaged SPEEDER unit.",
        effect: "Place your unit in strategic reserves.",
      },
    },
  ],
  "Gladius Task Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "ONLY IN DEATH DOES DUTY END",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "HONOUR THE CHAPTER",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit is under the effects of the Assault Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
    },
    {
      name: "ADAPTIVE STRATEGY",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Select the Devastator Doctrine, Tactical Doctrine or Assault Doctrine. Until the start of your next Command phase, that Combat Doctrine is active for that unit instead of any other Combat Doctrine that is active for your army, even if you have already selected that doctrine this battle.",
      },
    },
    {
      name: "STORM OF FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. If your unit is under the effects of the Devastator Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
    },
    {
      name: "SQUAD TACTICS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that is within 8\" of the enemy unit that just ended that move.",
        effect: "Your unit can make a Normal move of up to D6\", or a Normal move of up to 6\" instead if it is under the effects of the Tactical Doctrine.<br><br>**Restrictions:** You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
    },
  ],
  "Godhammer Assault Force": [
    {
      name: "A CEASELESS CAUSE",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One Adeptus Astartes Infantry unit from your army that was eligible to fight this phase.",
        effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". It cannot embark within a Transport at the end of this move if it disembarked from a **TRANSPORT** this turn.",
      },
    },
    {
      name: "UNCOMPROMISING EGRESS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Land Raider model from your army that has not been selected to move this phase.",
        effect: "One **ADEPTUS** **ASTARTES** unit embarked within your **LAND** **RAIDER** can disembark. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6\" of your **LAND** **RAIDER** and can be set up within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "GAUNTLET OF THE GOD-EMPEROR",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Adeptus Astartes Vehicle model from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time your model makes a Normal or Advance move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "FOCUSED HATRED",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after you make a Charge roll for an **ADEPTUS** **ASTARTES** unit from your army that disembarked from a Transport this turn.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Until the end of the phase, each time your unit makes a Charge move, models in your unit can move through models (when doing so, its models can move within Engagement Range of enemy models, but they can only end that move within Engagement Range of enemy models if those enemy models belong to a unit that your unit declared a charge against this turn).",
      },
    },
    {
      name: "CONDEMNATORY INFO-SCREED",
      cp: "1 CP",
      rules: {
        when: "Your Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if it disembarked from a Transport this turn, re-roll a Wound roll of 1. If that **TRANSPORT** has the Land Raider keyword, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "BLESSED HULL",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Adeptus Astartes Vehicle unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
  ],
  "Hammer of Avernii": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "RUTHLESS BUTCHERY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Adeptus Astartes Dreadnought, Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is below Starting Strength, add 1 to the Wound roll as well.",
      },
    },
    {
      name: "DOMINATOR BEACON",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Adeptus Astartes Dreadnought, Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army within range of an objective marker you control.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the end of a phase.",
      },
    },
    {
      name: "COGITATED FEROCITY",
      cp: "1 CP",
      rules: {
        when: "Your Fight phase.",
        target: "One Adeptus Astartes Dreadnought, Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to fight this phase.",
        effect: "Select either the [SUSTAINED HITS 1] or [LETHAL HITS] abilities. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability.",
      },
    },
    {
      name: "AUGMETIC FORTITUDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit ends a Charge move.",
        target: "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army within Engagement Range of that enemy unit.",
        effect: "Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "DROPSHIP EXTRACTION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Adeptus Astartes Terminator unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Headhunter Task Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "TARGET WEAK POINT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Tank Ace unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets a **MONSTER** or **VEHICLE** unit, improve the Armour Penetration characteristic of that attack by 1.<br><br>**Restrictions:** A unit cannot be targeted with this and the Kill Shot Stratagem in the same phase.",
      },
    },
    {
      name: "KILL SHOT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Tank Ace unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a **MONSTER** or **VEHICLE** unit, re-roll a Wound roll of 1. If the target unit is below its Starting Strength, you can re-roll the Wound roll instead.<br><br>**Restrictions:** A unit cannot be targeted with this and the Target Weak Point Stratagem in the same phase.",
      },
    },
    {
      name: "RAPID GUNNERY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
    },
    {
      name: "REACTIVE REPOSITIONING",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Tank Ace unit from your army (excluding units containing one or more models with a Wounds characteristic of 16+) that is within 8\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to D6\".",
      },
    },
    {
      name: "MACHINE VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One Tank Ace unit from your army (excluding units containing one or more models with a Wounds characteristic of 16+) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is visible and an eligible target.",
      },
    },
  ],
  "Inner Circle Task Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "MARTIAL MASTERY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Deathwing Infantry unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1. If your unit is within range of your Vowed objective marker, you can re-roll the Wound roll instead.",
      },
    },
    {
      name: "DUTY UNTO DEATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Deathwing unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 if your unit is within range of your Vowed objective marker. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "RELIC TELEPORTARIUM",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Deathwing unit from your army that is arriving using the Deep Strike ability this phase.",
        effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy models.<br><br>**Restrictions:** Until the end of the turn, your unit is not eligible to declare a charge.",
      },
    },
    {
      name: "WRATH OF THE LION",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Deathwing INFANTRY unit from your army that just ended a Charge move.",
        effect: "Select one enemy unit within Engagement Range of your unit and roll one D6 for each model in your unit, adding 1 to the result if that enemy unit is within range of your Vowed objective marker: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 3 mortal wounds).",
      },
    },
    {
      name: "UNMATCHED FORTITUDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Deathwing Infantry unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than your unit’s Toughness characteristic, subtract 1 from the Wound roll.",
      },
    },
  ],
  "Interrogation Conclave": [
    {
      name: "EXACTING PUNISHMENT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly CHAPLAIN unit is selected to attack.",
        target: "That **CHAPLAIN** unit.",
        effect: "Your unit’s attacks have [PRECISION].",
      },
    },
    {
      name: "TERRIFYING ZEAL",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, when a friendly CHAPLAIN unit ends a charge move.",
        target: "That **CHAPLAIN** unit.",
        effect: "Select one enemy unit (excluding **MONSTER**/**VEHICLE** units) engaged with your unit. That enemy unit makes a leadership roll:<br><br>• If that **leadership roll** fails, that enemy unit’s attacks have -1 to hit rolls until the end of the turn.",
      },
    },
    {
      name: "WAGES OF COWARDICE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit that was engaged with a friendly CHAPLAIN unit ends a fall-back move, if that **CHAPLAIN** unit is unengaged.",
        target: "That **CHAPLAIN** unit.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
  ],
  "Ironstorm Spearhead": [
    {
      name: "UNBOWED CONVICTION",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that is below its Starting Strength.",
        effect: "Until the end of the turn, your unit can ignore any or all modifiers to its characteristics and/or to any roll or test made for it (excluding modifiers to saving throws).",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "MERCY IS WEAKNESS",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its Starting Strength, that attack has the [SUSTAINED HITS 1] ability, and when making such an attack, if the attacking model is a **VEHICLE**, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "VENGEFUL ANIMUS",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an ADEPTUS ASTARTES VEHICLE model from your army with the Deadly Demise ability is destroyed.",
        target: "That **ADEPTUS** **ASTARTES** **VEHICLE** model. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Do not roll one D6 to determine whether mortal wounds are inflicted by your model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted.",
      },
    },
    {
      name: "ANCIENT FURY",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One ADEPTUS ASTARTES WALKER model from your army.",
        effect: "Until the start of your next Command phase, improve your model’s Move, Toughness, Leadership and Objective Control characteristics by 1 and each time your model makes an attack, add 1 to the Hit roll.",
      },
    },
    {
      name: "POWER OF THE MACHINE SPIRIT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has resolved its attacks.",
        target: "One ADEPTUS ASTARTES VEHICLE unit from your army that was reduced to Below Half-strength as a result of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    },
  ],
  "Legacy of Grace": [
    {
      name: "MARTIAL PARAGON",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly ADEPTUS ASTARTES CHARACTER unit is selected to attack.",
        target: "That **ADEPTUS** **ASTARTES** **CHARACTER** unit.",
        effect: "Your unit’s attacks have:<br><br>• [LETHAL HITS].<br>• **OR:** [SUSTAINED HITS 1].",
      },
    },
    {
      name: "SOUL-DARKENED FURY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when an enemy unit is selected to make a fall-back move, if that unit is engaged with a friendly ADEPTUS ASTARTES CHARACTER unit.",
        target: "That **ADEPTUS** **ASTARTES** **CHARACTER** unit.",
        effect: "When an enemy unit **engaged** with your unit is selected to make a **fall-back move**, that enemy unit must use the desperate escape mode, with -1 to those hazard rolls if that enemy unit is battle-shocked.",
      },
    },
    {
      name: "AURA OF THE ANGEL’S GRACE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly ADEPTUS ASTARTES CHARACTER unit.",
        target: "That **CHARACTER** unit.",
        effect: "Your unit has 5+ InSv.",
      },
    },
  ],
  "Legends of Saga and Song": [
    {
      name: "FANGS OF THE PACK",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly ADEPTUS ASTARTES TERMINATOR unit is selected to fight.",
        target: "That **ADEPTUS** **ASTARTES** **TERMINATOR** unit.",
        effect: "Your unit’s melee attacks have [PRECISION].",
      },
    },
    {
      name: "CHILLING HOWL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One friendly WOLF GUARD TERMINATORS unit.",
        effect: "Select one enemy unit within 6\" of your unit. That enemy unit makes a battle-shock roll, with -1 to that **battle-shock roll** if that enemy unit is at or below half-strength.",
      },
    },
    {
      name: "WINGS OF THE BLIZZARD",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One friendly unengaged ADEPTUS ASTARTES TERMINATOR unit.",
        effect: "Place your unit in strategic reserves.",
      },
    },
  ],
  "Liberator Assault Group": [
    {
      name: "ANGELIC GRACE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an **ADEPTUS** **ASTARTES** unit from your army has a mortal wound allocated to it.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SAVAGE ECHOES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was just charged by an enemy unit.",
        effect: "Select either the Strength or Attacks characteristic of melee weapons equipped by models in your unit. Until the end of the turn, add 1 to the selected characteristic. You can instead choose for your unit to give in to the Red Thirst; if it does, it becomes Battle-shocked (but the effects of this Stratagem still apply to it) and until the end of the turn, add 1 to the Strength and Attacks characteristics of melee weapons equipped by models in your unit.",
      },
    },
    {
      name: "RED RAMPAGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to fight this phase.",
        effect: "Select either the [LANCE] or [LETHAL HITS] abilities. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability. You can instead choose for your unit to give in to the Red Thirst; if it does, then it becomes Battle-shocked (but the effects of this Stratagem still apply to it) and until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] and [LETHAL HITS] abilities.",
      },
    },
    {
      name: "AGGRESSIVE ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an Adeptus Astartes unit from your army has Advanced.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Until the end of the turn, your unit is eligible to either shoot or declare a charge, even though it Advanced. You can instead choose for your unit to give in to the Red Thirst; if it does, it becomes Battle-shocked (but the effects of this Stratagem still apply to it) and until the end of the turn, your unit is eligible to both shoot and declare a charge, even though it Advanced.",
      },
    },
    {
      name: "RELENTLESS ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTUS** **ASTARTES** unit from your army Falls Back.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Until the end of the turn, your unit is eligible to either shoot or declare a charge even though it Fell Back. You can instead choose for your unit to give in to the Red Thirst; if it does, it becomes Battle-shocked (but the effects of this Stratagem still apply to it) and until the end of the turn, your unit is eligible to both shoot and declare a charge, even though it Fell Back.",
      },
    },
  ],
  "Lion’s Blade Task Force": [
    {
      name: "OVERPOWERING EXACTION",
      cp: "1 CP",
      rules: {
        when: "Command phase or the start of the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Select one enemy unit within Engagement Range of your unit. That enemy unit must take a Battle-shock test. When doing so, if your unit has the Deathwing or Ravenwing keyword, subtract 1 from the result.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "STRENGTH IN UNITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "If that enemy unit is within Engagement Range of one or more Ravenwing units from your army, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll. If that enemy unit is within Engagement Range of one or more Deathwing units from your army, until the end of the phase, each time a model in that enemy unit makes an attack, if the Strength characteristic of that attack is greater than the Toughness characteristic of the target, subtract 1 from the Wound roll.<br><br>**Restrictions:** A unit cannot be targeted by this and the Armour of Contempt Stratagem in the same phase.",
      },
    },
    {
      name: "KNIGHTS OF IRON",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Ravenwing unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "ILLUMINATING FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after a **RAVENWING** unit from your army has selected its targets.",
        target: "That Ravenwing unit.",
        effect: "Select one enemy unit within 12\" of your unit that was selected as the target of one or more of the attacking unit’s attacks. Until the end of the phase, each time a friendly Deathwing unit makes an attack that targets that enemy unit, add 1 to the Wound roll.",
      },
    },
    {
      name: "INESCAPABLE WRATH",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One Deathwing Infantry or Deathwing Walker unit from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.",
        effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.<br><br>**Restrictions:** Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    },
  ],
  "Marshal’s Household": [
    {
      name: "SLAYERS OF ABOMINATIONS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly SWORD BRETHREN SQUAD unit is selected to fight.",
        target: "That **SWORD** **BRETHREN** **SQUAD** unit.",
        effect: "Your unit’s melee attacks that target a **MONSTER**/**VEHICLE** unit have +2 **S**.",
      },
    },
    {
      name: "BLADE OF DETESTATION",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, when a friendly SWORD BRETHREN SQUAD unit ends a charge move.",
        target: "That **SWORD** **BRETHREN** **SQUAD** unit.",
        effect: "Select one enemy unit engaged with your unit. Roll one D6 for each model in your unit engaged with that enemy unit:<br><br>• For each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 **mortal wounds**).",
      },
    },
    {
      name: "UNSPARING EXECUTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when a unit is selected to make a fall-back move, if that unit is engaged with a friendly SWORD BRETHREN SQUAD unit.",
        target: "That **SWORD** **BRETHREN** **SQUAD** unit.",
        effect: "When an enemy unit **engaged** with your unit is selected to make a **fall-back move**, that enemy unit must use the desperate escape mode, with -1 to those hazard rolls if that enemy unit is battle-shocked.",
      },
    },
  ],
  "Orbital Assault Force": [
    {
      name: "SUPPRESSION STRAFING",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Select one enemy unit visible to and within 18\" of your unit. That enemy unit takes a Battle-shock test. When doing so, subtract 1 from that test and, if that test is failed, until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.<br><br>**Restrictions:** You cannot use this Stratagem more than once per battle round.",
      },
    },
    {
      name: "TACTICAL DECAPITATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the [PRECISION] ability and each time a model in your unit makes an attack that targets a **CHARACTER** unit, add 1 to the Hit roll.",
      },
    },
    {
      name: "SHOCK ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\".",
      },
    },
    {
      name: "AUTO‑SENSE COORDINATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Select the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have this ability in a turn in which they disembarked from a Drop Pod or while targeting an enemy unit within 12\".",
      },
    },
    {
      name: "BLIND SCREEN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit (excluding Titanic units) from your army that was selected as the target of one or more of the attacking unit’s attacks and one friendly Adeptus Astartes Smoke Vehicle or Drop Pod unit within 9\" of it.",
        effect: "Until the end of the phase, models in your units have the Stealth ability and each time a ranged attack targets one of your units, models in that unit have the Benefit of Cover against that attack.",
      },
    },
    {
      name: "ONWARD FOR THE EMPEROR",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Adeptus Astartes Infantry unit from your army that was not set up on the battlefield this turn and one friendly Transport it is able to embark within.",
        effect: "If your **ADEPTUS** **ASTARTES** unit is wholly within 6\" of that **TRANSPORT**, it can embark within it.",
      },
    },
  ],
  "Rage-cursed Onslaught": [
    {
      name: "A GRIM WARNING",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Blood Angels unit from your army that was just destroyed while it was within range of one or more objective markers you controlled at the end of the previous phase. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Select one of those objective markers. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "INSENSATE RAMPAGE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Death Company unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.",
      },
    },
    {
      name: "LIMB FROM LIMB",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that made a Charge move this turn.",
        effect: "Select either the Strength or Armour Penetration characteristic of melee weapons equipped by models in your unit. Until the end of the phase, add 1 to the selected characteristic. You can instead choose for your unit to give in to the Red Thirst; if it does, it becomes Battle-shocked (but the effects of this Stratagem still apply to it), and until the end of the phase, add 1 to the Strength and Armour Penetration characteristics of melee weapons equipped by models in your unit.",
      },
    },
    {
      name: "DEATHLESS DUTY",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Death Company unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "RED WRATH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTUS** **ASTARTES** unit from your army Advances.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Until the end of the turn, your unit is eligible to either shoot or declare a charge in a turn in which it Advanced. You can instead choose for your unit to give in to the Red Thirst; if it does, it becomes Battle-shocked (but the effects of this Stratagem still apply to it), and until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
    },
  ],
  "Reclamation Force": [
    {
      name: "CRUSADING CONQUERORS",
      cp: "1 CP",
      rules: {
        when: "End of the Command phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Until the start of the next Command phase, add 1 to the Objective Control characteristic of models in your unit.",
      },
    },
    {
      name: "FURIOUS DEDICATION",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase or the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not declared a charge or been selected to fight this phase.",
        effect: "Until the end of the turn, add 2 to Charge rolls made for your unit and add 1 to the Attacks characteristic of melee weapons equipped by models in your unit.<br><br>**Restrictions:** You cannot use this Stratagem more than once per turn.",
      },
    },
    {
      name: "FIGHT TO THE END",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "SCIONS OF GUILLIMAN",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTUS** **ASTARTES** unit from your army ends a Fall Back move.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "ULTRAMARIAN DESTINY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Select one objective marker you control that your unit is within range of. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "MARCHING EVER ON",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit Falls Back.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was within Engagement Range of that enemy unit at the start of the phase.",
        effect: "Your unit can make a Normal move of up to D6\"+1.",
      },
    },
  ],
  "Saga of the Beastslayer": [
    {
      name: "UNBRIDLED FEROCITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Space Wolves unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Wound roll.",
      },
    },
    {
      name: "SHOCK CAVALRY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Thunderwolf Cavalry unit from your army that has not been selected to move or declared a charge this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Normal, Advance, Fall Back or Charge move, it can move through models (excluding **TITANIC** models) and sections of terrain features that are 4\" or less in height. When doing so, it can move within Engagement Range of enemy models, but unless it is making a Charge move, it cannot end that move within Engagement Range of them.",
      },
    },
    {
      name: "PINNING FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, after your unit has shot, select one enemy **CHARACTER**, **MONSTER**, or **VEHICLE** unit hit by one or more of those attacks. Until the start of your next Shooting phase, that unit is pinned. While a unit is pinned, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it.",
      },
    },
    {
      name: "THUNDEROUS PURSUIT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that is within 8\" of that enemy unit and not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to D6\". If your unit has the Space Wolves Infantry or Thunderwolf Cavalry keywords, it can make a Normal move of up to 6\" instead.",
      },
    },
    {
      name: "IMPETUOSITY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly unengaged WULFEN INFANTRY**/**BLOOD CLAWS unit this phase has shot.",
        target: "That **WULFEN** **INFANTRY/BLOOD** **CLAWS** unit.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
    {
      name: "COORDINATED STRIKE",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Space Wolves unit from your army that is wholly within 9\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Saga of the Bold": [
    {
      name: "INSPIRING PRESENCE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Adeptus Astartes Character unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability.",
      },
    },
    {
      name: "CHAMPION’S GUIDANCE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Space Wolves Character unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.",
      },
    },
    {
      name: "BIRTH OF A SAGA",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Wolf Guard Headtaker or Wolf Guard Terminator Pack Leader model from your army.",
        effect: "Until the start of your next Command phase, your model has the **CHARACTER** keyword.<br><br>**Designer’s Note:** ^^While in effect, your model’s unit is therefore a **CHARACTER** unit, meaning it can interact with the Heroes All rule, in addition to other rules that interact with **CHARACTER** units.^^",
      },
    },
    {
      name: "ALPHA STRIKE",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Adeptus Astartes Character unit from your army.",
        effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "HEROIC RESOLVE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Space Wolves Character unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "COUNTERCHARGE",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One Adeptus Astartes Character unit from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.",
        effect: "Your unit now declares a charge that targets only one or more of those enemy units, and you resolve that charge as if it were your Charge phase. Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    },
  ],
  "Saga of the Great Wolf": [
    {
      name: "THE FOE FORESEEN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "GRIMNAR’S COMMAND",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Select one Hunting Pack from the Master of Wolves Detachment rule. Until the start of your next Command phase, that Hunting Pack is active for your unit instead of any other Hunting Pack that is active, even if you have already selected that Hunting Pack this battle.",
      },
    },
    {
      name: "FENRISIAN FEROCITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Adeptus Astartes Mounted or Adeptus Astartes Walker unit from your army that has not been selected to move or charge this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Normal, Advance, Fall Back or Charge move, it can move horizontally through models (excluding **TITANIC** models) and terrain features. When doing so, it can move within Engagement Range of enemy models, but cannot end a Normal, Advance or Fall Back move within Engagement Range of them.",
      },
    },
    {
      name: "UNRELENTING HUNTERS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back. If your unit is a Space Wolves unit, until the end of the turn, it is eligible to declare a charge in a turn in which it Advanced or Fell Back.",
      },
    },
    {
      name: "EYE OF THE PACK",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can add 1 to the Wound roll.",
      },
    },
    {
      name: "BATTLE INSTINCTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One Space Wolves unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Your unit can make a Normal move of up to D6\".",
      },
    },
  ],
  "Saga of the Hunter": [
    {
      name: "HUNTERS’ TRAIL",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Space Wolves unit (excluding Monsters and Vehicles) from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\". When doing so, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit.",
      },
    },
    {
      name: "TERRITORIAL ADVANTAGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit is destroyed by an **ADEPTUS** **ASTARTES** unit from your army.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Select one objective marker you control that your unit is within range of. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "OVERWHELMING ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "Two **ADEPTUS** **ASTARTES** units from your army within Engagement Range of that enemy unit, or one Space Wolves Beasts unit from your army within Engagement Range of that enemy unit.",
        effect: "Until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "CHOSEN PREY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Space Wolves unit from your army Falls Back.",
        target: "That **SPACE** **WOLVES** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "BOUNDING ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One Space Wolves Infantry or Space Wolves Beasts unit from your army that has not been selected to move or declared a charge this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Normal, Advance, Fall Back or Charge move, it can move through models (excluding Titanic models). When doing so, it can move within Engagement Range of enemy models, but unless it is making a Charge move, it cannot end that move within Engagement Range of them.",
      },
    },
    {
      name: "MARKED FOR DESTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "Two **ADEPTUS** **ASTARTES** units from your army (excluding Beasts) that have not been selected to shoot this phase.",
        effect: "Select one enemy unit visible to both of your units. Until the end of the phase, models in your units can only target that enemy unit (and only if it is an eligible target) and each time a model in one of your units makes an attack, re-roll a Wound roll of 1.",
      },
    },
  ],
  "Shadowmark Talon": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "LAY LOW THE TYRANTS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Adeptus Astartes Infantry unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
    },
    {
      name: "FEINT AND THRUST",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back. If it is a Phobos or Scout Squad unit, it is also eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "STUNNING FUSILLADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Adeptus Astartes Infantry unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit that is more than 12\" away, improve the Ballistic Skill and Armour Penetration characteristics of that attack by 1. If one or more enemy models are destroyed as a result of those attacks, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test.",
      },
    },
    {
      name: "RAPTORIAL VIGILANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that is within 8\" of the enemy unit that just ended that move. You cannot target a unit that is within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to D6\", or up to 6\" instead if it is a Phobos or Scout Squad unit.",
      },
    },
    {
      name: "INTO DARKNESS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to two Phobos and/or Scout Squad units from your army, or one other Adeptus Astartes Infantry unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
        effect: "Remove those units from the battlefield and place them into Strategic Reserves.",
      },
    },
  ],
  "Spearpoint Task Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SPEAR THRUST AND SABRE SWING",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to fight this phase.",
        effect: "Select either the [LANCE] or [LETHAL HITS] ability. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability. If it is a **MOUNTED** unit, until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] and [LETHAL HITS] abilities instead.",
      },
    },
    {
      name: "MOBILE LETHALITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced or Fell Back.",
      },
    },
    {
      name: "HUNTER’S INSTINCTS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Adeptus Astartes Infantry unit or Adeptus Astartes Mounted unit from your army that is within 8\" of that enemy unit. You cannot target a unit that is within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to 6\".",
      },
    },
    {
      name: "EVASIVE MANOEUVRES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "WITHDRAW AND REGROUP",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle unit from your army that is not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Stormlance Task Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "BLITZING FUSILLADE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] ability. If such a weapon already has this ability, until the end of the phase, that weapon has the [SUSTAINED HITS 1] ability as well.",
      },
    },
    {
      name: "FULL THROTTLE",
      cp: "2 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES VEHICLE unit (excluding WALKERS) from your army.",
        effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit, or 9\" instead if your unit is **MOUNTED**.",
      },
    },
    {
      name: "SHOCK ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly **ADEPTUS** **ASTARTES** unit is selected to fight.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Your unit’s melee attacks have [LANCE].",
      },
    },
    {
      name: "RIDE HARD, RIDE FAST",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES FLY VEHICLE unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "WIND-SWIFT EVASION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that is within 8\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to 6\".<br><br>**Restrictions:** You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
    },
  ],
  "Subversion Assets": [
    {
      name: "ADAPTIVE OPERATIONS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly PHOBOS**/**SCOUT SQUAD unit starts an action.",
        target: "That **PHOBOS/SCOUT** **SQUAD** unit.",
        effect: "That action does not prevent your unit from being eligible to shoot.",
      },
    },
    {
      name: "STRIKE FROM THE SHADOWS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly PHOBOS**/**SCOUT SQUAD unit has shot.",
        target: "That **PHOBOS/SCOUT** **SQUAD** unit.",
        effect: "Those ranged attacks do not prevent your unit from being hidden.",
      },
    },
    {
      name: "CLOAKED POSITION",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Movement phase.",
        target: "One friendly unengaged PHOBOS**/**SCOUT SQUAD unit.",
        effect: "Your unit has -3\" detection range until the end of the turn.",
      },
    },
  ],
  "The Angelic Host": [
    {
      name: "UNBRIDLED ARDOUR",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Until the end of the battle, each time a friendly Sanguinary Guard unit makes an attack that targets the enemy unit that just destroyed your unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "ANGEL’S SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One Adeptus Astartes Jump Pack unit from your army.",
        effect: "Until the end of the phase, each time an enemy model within Engagement Range of your unit selects its targets, it must select your unit as the target of all of its attacks.",
      },
    },
    {
      name: "MARTIAL EXEMPLARS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Adeptus Astartes Jump Pack unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] and [PRECISION] abilities.",
      },
    },
    {
      name: "DESCENT OF ANGELS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Adeptus Astartes Jump Pack unit from your army that is arriving using the Deep Strike ability this phase.",
        effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.<br><br>**Restrictions:** A unit targeted by this Stratagem is not eligible to declare a charge in the same turn.",
      },
    },
    {
      name: "DEATH FROM THE SKIES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an Adeptus Astartes Jump Pack unit from your army Advances or Falls Back.",
        target: "That **ADEPTUS** **ASTARTES** **JUMP** **PACK** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.",
      },
    },
  ],
  "The Lost Brethren": [
    {
      name: "GLORIOUS SACRIFICE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Death Company unit from your army that was just destroyed while it was within range of an objective marker you controlled. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "FINAL RETRIBUTION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Death Company unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit is within 12\" of one or more friendly Chaplain models; on a 4+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "FURIOUS ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Death Company unit from your army, just before that unit Piles-in.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in move, it can move up to D3+3\" instead of up to 3\". If your unit is within 12\" of one or more friendly Chaplain models, or if it is below Starting Strength, it can move up to 6\" instead. In either case, it can only do so provided your unit ends that Pile-in move in Unit Coherency and within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "LOST TO RAGE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Death Company unit from your army that is below Starting Strength and has not been selected to fight this phase.",
        effect: "Until the end of the phase, improve the Attacks, Stength and Armour Penetration characteristics of melee weapons equipped by models in your unit by 1 and, unless your unit is within 12\" of one or more friendly Chaplain models, until the end of the phase, those weapons have the [HAZARDOUS] ability.",
      },
    },
    {
      name: "WRATHFUL RAMPAGE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Death Company unit from your army Advances.",
        target: "That **DEATH** **COMPANY** unit.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced. If your unit is within 12\" of one or more friendly Chaplain models, or it is below its Starting Strength, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
    },
  ],
  "Unforgiven Task Force": [
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "UNFORGIVEN FURY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the [LETHAL HITS] ability. In addition, if one or more **ADEPTUS** **ASTARTES** units from your army are currently Battle-shocked, until the end of the phase, each time a model in your unit makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "INTRACTABLE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after an **ADEPTUS** **ASTARTES** unit from your army Falls Back.",
        target: "That **ADEPTUS** **ASTARTES** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "FIRE DISCIPLINE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in that unit have the [ASSAULT], [HEAVY] and [IGNORES COVER] abilities.",
      },
    },
    {
      name: "GRIM RETRIBUTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that had one or more models destroyed as a result of the attacking unit’s attacks.",
        effect: "Your unit can shoot as if it were your Shooting phase, but it must target the enemy unit that just attacked it, and can only do so if that enemy unit is an eligible target.",
      },
    },
    {
      name: "UNBREAKABLE LINES",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit ends a Charge move.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army within Engagement Range of that enemy unit.",
        effect: "Until the end of the turn, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
  ],
  "Vanguard Spearhead": [
    {
      name: "A DEADLY PRIZE",
      cp: "1 CP",
      rules: {
        when: "Start of the Command phase.",
        target: "One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army within range of an objective marker you control.",
        effect: "That objective marker is said to be Sabotaged, and remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn. While an objective marker is Sabotaged and under your control, each time an enemy unit ends a Normal, Advance, Fall Back or Charge move within range of that objective marker, roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SURGICAL STRIKES",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
    },
    {
      name: "STRIKE FROM THE SHADOWS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit that is more than 12\" away, improve the Ballistic Skill and Armour Penetration characteristics of that attack by 1. If one or more enemy models are destroyed as a result of those attacks, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test.",
      },
    },
    {
      name: "CALCULATED FEINT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit declares a charge.",
        target: "One friendly ADEPTUS ASTARTES INFANTRY unit within 12\" of that enemy unit.",
        effect: "Your unit can make a Normal move of up to D6\", or up to 6\" instead if it is a PHOBOS or SCOUT SQUAD unit.<br><br>**Restrictions:** You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "GUERRILLA TACTICS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to two PHOBOS and/or SCOUT SQUAD units from your army, or one other ADEPTUS ASTARTES INFANTRY unit from your army.",
        effect: "Remove those units from the battlefield and place them into Strategic Reserves.<br><br>**Restrictions:** Each unit selected for this Stratagem must be more than 3\" away from all enemy models.",
      },
    },
  ],
  "Vengeful Hosts": [
    {
      name: "METEORIC ONSLAUGHT",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly ADEPTUS ASTARTES FLY INFANTRY unit that made a charge move this turn is selected to attack.",
        target: "That friendly **ADEPTUS** **ASTARTES** **FLY** **INFANTRY** unit.",
        effect: "Your unit’s melee attacks have +1 **S**.",
      },
    },
    {
      name: "PURGE BY SECTORS",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One friendly unengaged ADEPTUS ASTARTES FLY INFANTRY unit that was eligible to fight this phase.",
        effect: "Your unit can make a normal move of up to D3+3\".",
      },
    },
    {
      name: "KNOW NO FEAR",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One friendly battle-shocked **ADEPTUS** **ASTARTES** unit. You can target that unit with this **stratagem** even though it is **battle-shocked**.",
        effect: "Your unit is no longer **battle-shocked**.",
      },
    },
  ],
  "Veterans of the Fang": [
    {
      name: "GRIZZLED KILLERS",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly GREY HUNTERS unit is selected to fight.",
        target: "That **GREY** **HUNTERS** unit.",
        effect: "Your unit’s melee attacks have:<br><br>• [SUSTAINED HITS 1].<br>• **OR:** [LETHAL HITS].",
      },
    },
    {
      name: "ICY CALM",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly GREY HUNTERS unit is selected to make an advance**/**fall-back move.",
        target: "That **GREY** **HUNTERS** unit.",
        effect: "That move does not prevent your unit from being eligible to start an action.",
      },
    },
    {
      name: "BLADE-KEEN SENSES",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly unengaged GREY HUNTERS unit.",
        effect: "Select one visible enemy unit within 24\" of your unit. That enemy unit has +6\" detection range.",
      },
    },
  ],
  "Vindication Task Force": [
    {
      name: "REFUSAL TO YIELD",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an Ancient model from your army is destroyed.",
        target: "That **ANCIENT** model. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "At the end of the phase, set your model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of one or more enemy units, with its full wounds remaining.<br><br>**Restrictions:** You cannot target the same model with this Stratagem more than once per battle.",
      },
    },
    {
      name: "LITANIES OF PURGATION",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, if that model’s unit is within range of one or more objective markers or the target unit is within range of one or more objective markers, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "SPOOR OF THE UNHOLY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability and each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack’s Ballistic Skill or Weapon Skill characteristic; the Hit roll.",
      },
    },
    {
      name: "RECLAIM OUR HONOUR!",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit destroys an Ancient model from your army that has not been targeted with the Refusal to Yield Stratagem this phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army visible to that enemy unit.",
        effect: "Until the end of the battle, each time an **ADEPTUS** **ASTARTES** model from your army makes an attack that targets that enemy unit, add 1 to the Hit roll.<br><br>**Restrictions:** You cannot target that **ANCIENT** model with the Refusal to Yield Stratagem this phase.",
      },
    },
    {
      name: "RECITATION OF THE REVERED",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Ancient unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "PERFERVID INTERVENTION",
      cp: "2 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.",
        effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.<br><br>**Restrictions:** Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    },
  ],
  "Wrath of the Doomed": [
    {
      name: "DEATH BEGETS VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly DEATH COMPANY unit is destroyed by an enemy unit.",
        target: "That enemy unit.",
        effect: "That enemy unit is hated until the end of the battle:<br>While a unit is **hated**, friendly **DEATH** **COMPANY** units’ attacks that target that unit have +1 to wound rolls.",
      },
    },
    {
      name: "NO BARRIER TO RETRIBUTION",
      cp: "1 CP",
      rules: {
        when: "Your Movement or your Charge phase, when a friendly DEATH COMPANY DREADNOUGHT unit is selected to make a normal**/**advance**/**charge move.",
        target: "That **DEATH** **COMPANY** **DREADNOUGHT** unit.",
        effect: "Your unit has MOBILE.",
      },
    },
    {
      name: "RAGE-FUELLED RESPONSE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly unengaged DEATH COMPANY unit has shot.",
        target: "That **DEATH** **COMPANY** unit.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
  ],
  "Wrath of the Rock": [
    {
      name: "INESCAPABLE JUSTICE",
      cp: "2 CP",
      rules: {
        when: "Any phase, just after your Oath of Moment target is destroyed.",
        target: "One Adeptus Astartes Character unit that is on the battlefield.",
        effect: "Select one enemy unit within 12\" and visible to your unit. That enemy unit becomes your Oath of Moment target until the start of your next Command phase.",
      },
    },
    {
      name: "LION’S WILL",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that is within Engagement Range of one or more enemy units.",
        effect: "Until the start of your next Command phase, add 1 to the Objective Control characteristic of models in your unit. In addition, until the end of the turn, if your unit does not have the Deathwing, Ravenwing or Vehicle keyword, each time a model in your unit makes an attack, add 1 to the Hit roll.",
      },
    },
    {
      name: "ARMOUR OF CONTEMPT",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "TACTICAL MASTERY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced. If your unit has the Ravenwing keyword, it is also eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "RELICS OF THE DARK AGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, add 2 to the Strength characteristic of ranged weapons equipped by models in your unit.",
      },
    },
    {
      name: "LEONINE AGGRESSION",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Charge phase.",
        target: "One **ADEPTUS** **ASTARTES** unit from your army within 3\" of one or more enemy units, or one Deathwing unit from your army within 6\" of one or more enemy units.",
        effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.<br><br>**Restrictions:** Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    },
  ],
  "Wrathful Procession": [
    {
      name: "FUELLED BY FAITH",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly CHAPLAIN unit suffers a mortal wound.",
        target: "That **CHAPLAIN** unit.",
        effect: "Your unit has Feel No Pain 4+ against **mortal wounds**.",
      },
    },
    {
      name: "CASTIGATE THE DEMAGOGUES",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly CHAPLAIN unit is selected to fight.",
        target: "That **CHAPLAIN** unit.",
        effect: "Your unit’s melee attacks have [PRECISION].",
      },
    },
    {
      name: "RITE OF PERFERVID WRATH",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly CHAPLAIN unit is selected to fight.",
        target: "That **CHAPLAIN** unit.",
        effect: "Your unit’s melee attacks have +1 **S**.",
      },
    },
  ],
  "Advanced Acquisition Cadre": [
    {
      name: "MARKER BEACON",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One friendly PATHFINDER TEAM/STEALTH BATTLESUITS unit.",
        effect: "Select one objective your unit is controlling. That **objective** is secured.",
      },
    },
    {
      name: "MICRODRONE SUPPORT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly PATHFINDER TEAM/ STEALTH BATTLESUITS unit starts an action.",
        target: "That **PATHFINDER** **TEAM/STEALTH** **BATTLESUITS** unit.",
        effect: "That **action** does not prevent your unit from being eligible to shoot.",
      },
    },
    {
      name: "AUTOREACTIVE CAMOUFLAGE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly PATHFINDER TEAM/ STEALTH BATTLESUITS unit, if that friendly unit is hidden.",
        target: "That **PATHFINDER** **TEAM/STEALTH** **BATTLESUITS** unit.",
        effect: "Your unit has +1 **Sv**.",
      },
    },
  ],
  "Auxiliary Cadre": [
    {
      name: "EXPERIMENTAL MODIFICATIONS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly KROOT/VESPID STINGWINGS unit is selected to attack.",
        target: "That **KROOT/VESPID** **STINGWINGS** unit.",
        effect: "Your unit’s attacks have +1 **AP**.",
      },
    },
    {
      name: "ALIEN EXPERTISE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly KROOT/VESPID STINGWINGS unit is selected to make an advance move.",
        target: "That **KROOT/VESPID** **STINGWINGS** unit.",
        effect: "That move does not prevent your unit from being eligible to declare a charge.",
      },
    },
    {
      name: "GUIDED FIRE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly T’AU EMPIRE unit (excluding KROOT/VESPID STINGWINGS units) is selected to shoot.",
        target: "That **T’AU** **EMPIRE** unit.",
        effect: "Your unit’s ranged attacks that target a unit within 9\" of a friendly **KROOT/VESPID** **STINGWINGS** unit have [LETHAL HITS].",
      },
    },
  ],
  "Experimental Prototype Cadre": [
    {
      name: "EXPERIMENTAL AMMUNITION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly BATTLESUIT CHARACTER unit is selected to shoot.",
        target: "That **BATTLESUIT** **CHARACTER** unit.",
        effect: "Your unit’s ranged attacks have:<br><br>• +1 **S**.<br>• **OR:** +1 **S**, **AP** and [HAZARDOUS].",
      },
    },
  ],
  "Kauyon": [
    {
      name: "A TEMPTING TRAP",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **T’AU** **EMPIRE** unit from your army that has not been selected to shoot this phase. The first time you use this Stratagem, you must also select one objective marker that is not in your opponent’s deployment zone; until the end of the battle, this becomes your Trap objective marker.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within range of your Trap objective marker, add 1 to the Wound roll.<br><br>**Restrictions:** You cannot use this Stratagem during the first or second battle rounds.",
      },
    },
    {
      name: "POINT-BLANK AMBUSH",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **T’AU** **EMPIRE** unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within 9\", improve the Armour Penetration characteristic of that attack by 1.<br><br>**Restrictions:** You cannot use this Stratagem during the first or second battle rounds.",
      },
    },
    {
      name: "COORDINATE TO ENGAGE",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One **T’AU** **EMPIRE** unit from your army that has just been selected as an Observer unit (see For the Greater Good).",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets their Spotted unit, improve the Ballistic Skill characteristic of that attack by 1 and, if your unit has the Markerlight keyword, that attack has the [IGNORES COVER] ability.",
      },
    },
    {
      name: "COMBAT EMBARKATION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit has declared a charge.",
        target: "One T’au Empire Infantry unit from your army that was selected as one of the targets of that charge, and one friendly Transport.",
        effect: "Your unit can embark within that **TRANSPORT**. If it does, your opponent can select new targets for that charge.<br><br>**Restrictions:** Every model in your **T’AU** **EMPIRE** **INFANTRY** unit must be within 3\" of that **TRANSPORT** and there must be sufficient transport capacity to embark the entire unit.",
      },
    },
    {
      name: "PHOTON GRENADES",
      cp: "1 CP",
      rules: {
        when: "Your opponent's charge phase, just after an enemy unit has selected its charge target.",
        target: "One T’AU EMPIRE GRENADES unit from your army that was selected as one of the targets of that charge.",
        effect: "That enemy unit must immediately take a Battle-shock test, and until the end of the phase, subtract 2 from Charge rolls made for that enemy unit.<br><br>**Restrictions:** You cannot target a unit that is within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "WALL OF MIRRORS",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Stealth, Ghostkeel or Commander Shadowsun unit from your army.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.<br><br>**Restrictions:** You cannot target a unit that is within Engagement Range of one or more enemy units.",
      },
    },
  ],
  "Kroot Hunting Pack": [
    {
      name: "JOIN THE HUNT",
      cp: "2 CP",
      rules: {
        when: "Any phase.",
        target: "One Kroot Infantry or Kroot Hounds unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength.<br><br>**Restrictions:** This Stratagem cannot be used to return destroyed Character units to Attached units. You can only use this Stratagem once per battle.",
      },
    },
    {
      name: "A TRAP WELL LAID",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Kroot unit from your army that has not been selected to shoot or fight this phase.",
        effect: "After your unit has resolved its attacks this phase, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, each time a **KROOT** model from your army makes an attack that targets that enemy unit, unless the attacking unit is Battle-shocked, improve the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "EMP GRENADES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy **VEHICLE** unit is selected to shoot or fight.",
        target: "One Kroot Grenades unit from your army within 8\" of that enemy **VEHICLE** unit.",
        effect: "Until the end of the phase, worsen the Weapon Skill and Ballistic Skill characteristics of that enemy **VEHICLE** unit’s weapons by 1.",
      },
    },
    {
      name: "THE GRISLY FEAST",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Kroot unit from your army that destroyed one or more enemy units this phase.",
        effect: "In your opponent’s next Command phase, each enemy unit within 6\" of your unit must take a Battle-shock test. If the unit taking that test is Below Half-strength, subtract 1 from that test. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.",
      },
    },
    {
      name: "GUERRILLA WARRIORS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Kroot unit from your army Falls Back.",
        target: "That **KROOT** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge.",
      },
    },
    {
      name: "HIDDEN HUNTERS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Kroot unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
  ],
  "Mont’ka": [
    {
      name: "PINPOINT COUNTER-OFFENSIVE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One **T’AU** **EMPIRE** unit (excluding Kroot units) from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Until the end of the battle, each time a **T’AU** **EMPIRE** unit (excluding **KROOT** units) from your army makes an attack that targets the enemy unit that just destroyed your unit, you can re-roll the Hit roll.",
      },
    },
    {
      name: "AGGRESSIVE MOBILITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **T’AU** **EMPIRE** unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "FOCUSED FIRE",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "Two **T’AU** **EMPIRE** units from your army that have not been selected to shoot this phase, and one enemy unit.",
        effect: "Until the end of the phase, each time a model in either of your units makes an attack, it can only target that enemy unit (and only if it is an eligible target for that attack), and when resolving that attack, improve the Armour Penetration characteristic by 1.<br><br>**Restrictions:** You cannot use this Stratagem during the fourth or fifth battle rounds.",
      },
    },
    {
      name: "COMBAT DEBARKATION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One T’au Empire Infantry unit from your army that disembarked from a **TRANSPORT** this turn.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets the closest enemy unit, you can re-roll the Wound roll.",
      },
    },
    {
      name: "PULSE ONSLAUGHT",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One T’au Empire Infantry unit (excluding Kroot units) from your army that has just shot, and one enemy unit (excluding **MONSTERS** and **VEHICLES**) hit by one or more of those attacks.",
        effect: "Until the end of your opponent’s next turn, that enemy unit is shaken. While a unit is shaken, subtract 2 from its Move characteristic and subtract 2 from Advance and Charge rolls made for it.",
      },
    },
    {
      name: "COUNTERFIRE DEFENCE SYSTEMS",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One **T’AU** **EMPIRE** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
  ],
  "Retaliation Cadre": [
    {
      name: "FAIL-SAFE DETONATOR",
      cp: "2 CP",
      rules: {
        when: "Any phase, just after a T’au Empire Battlesuit model from your army is destroyed.",
        target: "That destroyed model’s unit. You can use this Stratagem on that unit even if that unit was just destroyed.",
        effect: "Before removing your model from play, if it has the Deadly Demise ability, do not roll for that ability; instead, you can choose whether the result of that roll is a 1 or a 6. If your model does not have the Deadly Demise ability, roll one D6 for each unit within 6\" of it: on a 4+, that unit suffers D3 mortal wounds.",
      },
    },
    {
      name: "STIMM INJECTORS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One T’au Empire Battlesuit unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability.",
      },
    },
    {
      name: "THE SHORTENED BLADE",
      cp: "2 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One T’au Empire Battlesuit unit from your army that is arriving using the Deep Strike ability this phase.",
        effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy models.<br><br>**Restrictions:** A unit targeted with this Stratagem is not eligible to declare a charge in the same turn.",
      },
    },
    {
      name: "THE ARRO’KON PROTOCOL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One T’au Empire Battlesuit unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that contains 6 or more models, that attack has the [SUSTAINED HITS 1] ability. If that attack targets an enemy unit that contains 11 or more models, it has the [SUSTAINED HITS 2] ability instead.",
      },
    },
    {
      name: "THE TORCHSTAR GAMBIT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One T’au Empire Battlesuit unit from your army that can **FLY** whose attacks have been resolved this phase.",
        effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move. If it does, your unit cannot declare a charge this turn",
      },
    },
    {
      name: "GRAV-INHIBITOR FIELD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit has declared a charge.",
        target: "One T’au Empire Battlesuit unit from your army that was selected as a target of that charge.",
        effect: "That enemy unit must immediately take a Battle-shock test and you must roll one D6 for each model in that enemy unit: for each 6, that enemy unit suffers 1 mortal wound.",
      },
    },
  ],
  "Changehost of Deceit": [
    {
      name: "SULPHUROUS VEIL",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Thousand Sons or Scintillating Legions unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "DECEPTIVE GLAMOUR",
      cp: "2 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One Thousand Sons unit from your army.",
        effect: "Until the end of the phase, each time an enemy model within Engagement Range of your unit selects targets for its attacks, it can only target your unit if there are no eligible Scintillating Legions targets for those attacks.",
      },
    },
    {
      name: "ETHEREAL PHANTASM",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "One Scintillating Legions unit from your army that is within 8\" of that enemy unit and not within Engagement Range of one or more enemy units.",
        effect: "Your unit can make a Normal move of up to D6\", or a Normal move of up to 6\" instead if it is wholly within 6\" of one or more friendly Thousand Sons units.",
      },
    },
    {
      name: "FRACTAL DISJUNCTION",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Scintillating Legions unit from your army (excluding Monsters) that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".",
      },
    },
    {
      name: "CHRONOSORCEROUS BLEED",
      cp: "1 CP",
      rules: {
        when: "Start of your opponent’s Charge phase.",
        target: "One friendly unengaged THOUSAND SONS PSYKER/SCINTILLATING LEGIONS unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. When that enemy unit declares a charge, that enemy unit has -1 to charge rolls.",
      },
    },
    {
      name: "GLIMMERSHIFT PORTAL",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to two Scintillating Legions units from your army (excluding Monsters), or one Scintillating Legions Monster unit from your army, if all of those units are more than 6\" horizontally away from all enemy units.",
        effect: "Remove those units from the battlefield and place them into Strategic Reserves.",
      },
    },
  ],
  "Grand Coven": [
    {
      name: "PSYCHIC DOMINION",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit has selected its targets.",
        target: "One Thousand Sons unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, Psychic weapons equipped by models in the attacking unit have the [hazardous] ability, and models in your unit have the Feel No Pain 4+ ability against Psychic Attacks.",
      },
    },
    {
      name: "DESTINED BY FATE",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after a saving throw is failed for a Thousand Sons Psyker model from your army. If you are using fast dice rolling, this Stratagem can still be used after rolling multiple saving throws at once.",
        target: "That **PSYKER** model.",
        effect: "Change the Damage characteristic of that attack to 0. If you are using fast dice rolling, select one of those attacks you failed a saving throw for.",
      },
    },
    {
      name: "EGOTISTICAL POWER",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Thousand Sons Psyker unit from your army.",
        effect: "Select the Imbued Manifestation, Psychic Maelstrom or Wrath of the Immaterium ability. Until the start of your next Command phase, that ability applies to your unit instead of any other Kindred Sorcery ability, even if you have already selected that ability this battle.",
      },
    },
    {
      name: "DESECRATION OF WORLDS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Thousand Sons Psyker unit from your army within range of an objective marker you control.",
        effect: "That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "ARCANE FOCUS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, just after you take a Psychic test for a Thousand Sons model from your army that Channelled the Warp (before resolving that Ritual).",
        target: "That **THOUSAND** **SONS** model.",
        effect: "Re-roll all of the D6 rolled for that Psychic test (including the additional D6 for Channelling the Warp).",
      },
    },
    {
      name: "DEVASTATING SORCERY",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Thousand Sons Psyker unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, add 9\" to the Range characteristic of Psychic weapons equipped by models in your unit, and each time a model in your unit makes an attack with a Psychic weapon, you can re-roll the Hit roll and you can re-roll the Wound roll.",
      },
    },
  ],
  "Hexwarp Thrallband": [
    {
      name: "WARDING HEX",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Thousand Sons Psyker unit from your army within range of an objective marker you control, if that objective marker is wholly within your army’s Flow of Magic.",
        effect: "That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "WRATH OF THE DOOMED",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **THOUSAND** **SONS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit is wholly within your army’s Flow of Magic: on a 4+, do not remove it from play. That destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "STRANDS OF TIME",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **THOUSAND** **SONS** **PSYKER** unit from your army Falls Back.",
        target: "That Thousand Sons Psyker unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot or declare a charge in a turn in which it Fell Back. If your unit is wholly within your army’s Flow of Magic when it is targeted with this Stratagem, then until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "THROUGH THE VEIL",
      cp: "1 CP",
      rules: {
        when: "Start of the Reinforcements step of your Movement phase.",
        target: "One Rubric Marines or Scarab Occult Terminators unit from your army that is in Strategic Reserves.",
        effect: "If it is a **RUBRIC** **MARINES** unit, until the end of the phase, it has the Deep Strike ability. When your unit is set up on the battlefield using the Deep Strike ability, if it is a **SCARAB** **OCCULT** **TERMINATOR** unit it can be set up anywhere on the battlefield that is wholly within your army’s Flow of Magic and more than 6\" horizontally away from all enemy models.<br><br>**Restrictions:** If a **SCARAB** **OCCULT** **TERMINATORS** unit is targeted with this Stratagem, it is not eligible to declare a charge in the same turn.",
      },
    },
    {
      name: "SCOURING WARPFLAME",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Thousand Sons Psyker unit from your army that has not been selected to shoot this phase and is wholly within your army’s Flow of Magic.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. After your unit has shot this phase, select one enemy unit hit by one or more of those attacks. Until the end of the phase, models in that unit cannot have the Benefit of Cover.",
      },
    },
    {
      name: "KALEIDOSCOPIC TEMPEST",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One THOUSAND SONS PSYKER unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "• Your unit has Stealth.<br>• If your unit is wholly within your army’s Flow of Magic, your unit has ‐3 detection range.",
      },
    },
  ],
  "Ritual of Regeneration": [
    {
      name: "RELENTLESS REBIRTH",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly INFANTRY/MOUNTED THOUSAND SONS PSYKER unit suffers a mortal wound.",
        target: "That **INFANTRY/MOUNTED** **THOUSAND** **SONS** **PSYKER** unit.",
        effect: "Your unit has Feel No Pain 5+ against **mortal wounds**.",
      },
    },
    {
      name: "MUTAGENIC MAGICKS",
      cp: "1 CP",
      rules: {
        when: "Start of the Fight phase.",
        target: "One friendly engaged THOUSAND SONS PSYKER unit.",
        effect: "Select one enemy unit engaged with your unit. Roll six D6:<br><br>• For each 4+, that enemy unit suffers 1 mortal wound.",
      },
    },
    {
      name: "MULTITUDINOUS LIMBS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly INFANTRY/MOUNTED THOUSAND SONS PSYKER unit is selected to make an advance/fall back move.",
        target: "That **INFANTRY/MOUNTED** **THOUSAND** **SONS** **PSYKER** unit.",
        effect: "That move does not prevent your unit from being eligible to start an action.",
      },
    },
  ],
  "Rubricae Phalanx": [
    {
      name: "ARDENT AUTOMATA",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Rubricae unit from your army Falls Back.",
        target: "That **RUBRICAE** unit.",
        effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "INEXORABLE ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Rubricae unit from your army.",
        effect: "Until the end of the turn, your unit can ignore any or all modifiers to its Move characteristic and to Advance rolls made for it, and ranged weapons equipped by models in your unit have the [ASSAULT] ability.",
      },
    },
    {
      name: "INFERNAL FUSILLADE",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Thousand Sons Psyker unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, all inferno bolt pistols, inferno boltguns, inferno combi-bolters and inferno combi-weapons equipped by models in your unit have the [PSYCHIC] ability and a Strength characteristic of 5.",
      },
    },
    {
      name: "REVENGE OF THE RUBRICAE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after a Thousand Sons Psyker model from your army is destroyed.",
        target: "One Rubricae unit from your army that was within 6\" of that **PSYKER** model when it was destroyed.",
        effect: "After the attacking unit has shot, your **RUBRICAE** unit can shoot as if it were your Shooting phase, but when resolving those attacks it can only target the enemy unit that just destroyed your **PSYKER** model (and only if it is an eligible target).",
      },
    },
    {
      name: "IMPLACABLE GUARDIANS",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Rubric Marines Psyker unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit (excluding **PSYKER** models), subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "UNWAVERING PHALANX",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit ends a Charge move.",
        target: "One Rubric Marines unit from your army within Engagement Range of that enemy unit.",
        effect: "Until the end of the turn, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
  ],
  "Sekhetar Cohort": [
    {
      name: "ARCANE VENTING",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One friendly SEKHETAR ROBOTS unit.",
        effect: "Select one objective your unit is controlling. That objective is secured.",
      },
    },
    {
      name: "ECTOPLASMIC EXTRUSION",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly SEKHETAR ROBOTS unit within 12\" of a friendly THOUSAND SONS PSYKER unit starts an action.",
        target: "That **SEKHETAR** **ROBOTS** unit.",
        effect: "That action does not prevent your unit from being eligible to shoot.",
      },
    },
    {
      name: "WARP FIELDS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit targets a friendly SEKHETAR ROBOTS unit within 12\" of a friendly THOUSAND SONS PSYKER unit.",
        target: "That **SEKHETAR** **ROBOTS** unit.",
        effect: "Ranged attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.",
      },
    },
  ],
  "Servants of Change": [
    {
      name: "PRISMATIC DISPLACEMENT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly INFANTRY/MOUNTED MUTANT unit is selected to make an advance/fall back move.",
        target: "That **INFANTRY/MOUNTED** **MUTANT** unit.",
        effect: "• Your unit’s ranged attacks have [ASSAULT] until the end of the turn.<br>• That move does not prevent your unit from being eligible to shoot/declare a charge.",
      },
    },
    {
      name: "TEMPORAL INSTABILITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly INFANTRY/MOUNTED MUTANT unit is selected to make an advance/fall back move.",
        target: "That **INFANTRY/MOUNTED** **MUTANT** unit.",
        effect: "In a turn your unit made an **advance/fall-back move**, that move does not prevent your unit from being eligible to start an action.",
      },
    },
    {
      name: "THE LAND WRITHES",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly MONSTER MUTANT unit is selected to move.",
        target: "That **MONSTER** **MUTANT** unit.",
        effect: "Your unit has MOBILE.",
      },
    },
  ],
  "Warpforged Cabal": [
    {
      name: "HEX-MARKED ARMOUR",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Thousand Sons Vehicle unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "MUTATE LANDSCAPE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Thousand Sons Psyker unit from your army within range of an objective marker you control.",
        effect: "That objective marker is mutated, and remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase. While an objective marker is mutated and under your control, each time an enemy unit ends a Normal, Advance, Fall Back or Charge move within range of that objective marker, roll one D6: on a 4+, that enemy unit suffers D3 mortal wounds.",
      },
    },
    {
      name: "CYBERSPIRIT MACHINATIONS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a Thousand Sons Vehicle unit from your army Falls Back.",
        target: "That **VEHICLE** unit, and one friendly Thousand Sons Psyker unit within 6\" of that **VEHICLE** unit.",
        effect: "Until the end of the turn, your **VEHICLE** unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
    },
    {
      name: "MALEVOLENT ANIMUS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Thousand Sons Vehicle unit from your army within 6\" of one or more friendly Thousand Sons Psyker units.",
        effect: "Until the start of your next Command phase, your **VEHICLE** unit is malevolent. While a unit is malevolent, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill and Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to saving throws).",
      },
    },
    {
      name: "ENSORCELLED INFUSION",
      cp: "2 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Thousand Sons Vehicle unit from your army that has not been selected to shoot this phase, that is within 6\" of one or more friendly Thousand Sons Psyker units.",
        effect: "Until the end of the phase, ranged weapons equipped by **VEHICLE** models in your unit have the [PSYCHIC] ability and each time an attack is made with such a weapon, add 1 to the Wound roll.",
      },
    },
    {
      name: "WARPFLAME GARGOYLES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Charge phase, just after an enemy unit ends a Charge move.",
        target: "One Thousand Sons Vehicle unit from your army within Engagement Range of that enemy unit.",
        effect: "Roll six D6: for each 5+, that enemy unit suffers 1 mortal wound. That enemy unit must then take a Battle-shock test.",
      },
    },
  ],
  "Warpmeld Pact": [
    {
      name: "GIFT OF CHANGE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Thousand Sons Character model from your army (excluding Monsters) that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "At the end of the phase, add one Tzeentch Chaos Spawn unit containing one model to your army, and set it up as close as possible to where your model was destroyed and not within Engagement Range of one or more enemy units.<br><br>**Restrictions:** You can only use this Stratagem once per battle round.",
      },
    },
    {
      name: "WARPED VICISSITUDE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Tzaangors unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.",
      },
    },
    {
      name: "DERANGED FEROCITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a Tzeentch Mutant unit from your army is selected to fight.",
        target: "That **TZEENTCH** **MUTANT** unit.",
        effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\", and when determining which models in it are eligible to fight, any models in it that are within 3\" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3\" of them and within Engagement Range of their unit.",
      },
    },
    {
      name: "BLESSED TRANSMUTATIONS",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One Thousand Sons Psyker model from your army, and one friendly Tzaangors unit that is below its Starting Strength and within 12\" of that **PSYKER** model.",
        effect: "Return up to D3+1 destroyed models (excluding Characters) to your **TZAANGORS** unit.",
      },
    },
    {
      name: "TOUCHED BY TZEENTCH",
      cp: "1 CP",
      rules: {
        when: "Start of your Movement phase.",
        target: "One Tzeentch Mutant unit from your army.",
        effect: "Until the end of the turn, your unit is eligible to shoot or declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "TWISTED MIRAGE",
      cp: "1 CP",
      rules: {
        when: "Reinforcements step of your Movement phase.",
        target: "One Tzeentch Mutant unit from your army that is arriving from Strategic Reserves this phase.",
        effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, or anywhere on the battlefield that is more than 8\" horizontally away from all enemy units if it is a Monster unit. In either case, until the end of the turn, it is not eligible to declare a charge.",
      },
    },
  ],
  "Ambush Predators": [
    {
      name: "COUNTERPREDATION",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly DEATHLEAPER/LICTOR/ NEUROLICTOR/VON RYAN’S LEAPERS unit is selected to fight.",
        target: "That **DEATHLEAPER/LICTOR/NEUROLICTOR/VON** **RYAN’S** **LEAPERS** unit.",
        effect: "Your unit’s attacks that target a hidden unit have +1 **S** and **AP**.",
      },
    },
    {
      name: "HYPERSENSORY ADAPTATIONS",
      cp: "1 CP",
      rules: {
        when: "Start of your Shooting phase.",
        target: "One friendly DEATHLEAPER/LICTOR/NEUROLICTOR/VON RYAN’S LEAPERS unit.",
        effect: "Select one visible enemy unit within 12\" of your unit. That enemy unit has +6\" detection range.",
      },
    },
    {
      name: "SCANNER GHEIST",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One friendly unengaged DEATHLEAPER/LICTOR/ NEUROLICTOR unit.",
        effect: "Place your unit in strategic reserves.",
      },
    },
  ],
  "Assimilation Swarm": [
    {
      name: "BROODGUARD IMPULSE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One Harvester unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Until the end of the battle, each time a friendly **TYRANIDS** model makes an attack that targets the enemy unit that just destroyed your **HARVESTER** unit, add 1 to the Wound roll.",
      },
    },
    {
      name: "RECLAIM BIOMASS",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a **TYRANIDS** unit from your army is destroyed, before the last model in it is removed from play.",
        target: "One Harvester unit from your army that is within 6\" of that destroyed unit.",
        effect: "Regenerate one friendly **TYRANIDS** unit within 6\" of your **HARVESTER** unit (See Feed the Swarm).",
      },
    },
    {
      name: "TYRANNOFORMED",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Harvester unit from your army that is within range of an objective marker you control.",
        effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
      },
    },
    {
      name: "ABLATIVE CARAPACE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Harvester unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability. If your unit is within range of an objective marker you control, until the end of the phase models in your unit have the Feel No Pain 4+ ability instead.",
      },
    },
    {
      name: "SECURE BIOMASS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One **TYRANIDS** unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If your unit is a Harvester unit, each time a model in that unit makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit as well.",
      },
    },
    {
      name: "RAPACIOUS HUNGER",
      cp: "1 CP",
      rules: {
        when: "Your Fight phase.",
        target: "One **TYRANIDS** unit from your army that just destroyed an enemy unit.",
        effect: "Your unit immediately Regenerates (See Feed the Swarm). When doing so, if your unit is a Harvester unit and you choose for one model to regain up to D3 lost wounds, that model regains up to 3 lost wounds instead.",
      },
    },
  ],
  "Crusher Stampede": [
    {
      name: "CORROSIVE VISCERA",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after a Tyranids Monster model from your army with the Deadly Demise ability that cannot **FLY** is destroyed.",
        target: "That **TYRANIDS** **MONSTER** model. You can use this Stratagem on that model even though it was just destroyed.",
        effect: "Do not roll one D6 to determine whether mortal wounds are inflicted by your model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted.",
      },
    },
    {
      name: "RAMPAGING MONSTROSITIES",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Tyranids Monster unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.",
      },
    },
    {
      name: "SAVAGE ROAR",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One Tyranids Monster unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "That enemy unit must take a Battle-shock test and, until the end of the phase, each time a model in that enemy unit makes an attack that targets your unit, subtract 1 from the Hit roll. If that Battle-shock test was failed, subtract 1 from the Wound roll as well.",
      },
    },
    {
      name: "UNTRAMMELLED FEROCITY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Tyranids Monster unit from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Normal, Advance or Fall Back move, it can move through models (excluding **TITANIC** models) and sections of terrain features that are 4\" or less in height. When doing so: <br><br>• It can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them. <br>• It can also move through sections of terrain features that are more than 4\" in height, but if it does, after its unit has moved, roll one D6: on a 1, your unit is Battle-shocked.",
      },
    },
    {
      name: "SWARM-GUIDED SALVOES",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase.",
        target: "One Tyranids Monster unit from your army that has not been selected to shoot this phase.",
        effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability, and until the end of the phase each time a model in your unit makes an attack, you can ignore any or all modifiers to that model’s Ballistic Skill characteristic and any or all modifiers to the Hit roll.",
      },
    },
    {
      name: "MASSIVE IMPACT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase, just after a Tyranids Monster model from your army ends a Charge move.",
        target: "That **TYRANIDS** **MONSTER** model.",
        effect: "Select one enemy unit within Engagement Range of your model and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.",
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
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within Synapse Range of your army, models in your unit have the Feel No Pain 5+ ability instead.",
      },
    },
    {
      name: "ADRENAL SURGE",
      cp: "2 CP",
      rules: {
        when: "Fight phase.",
        target: "Up to two **TYRANIDS** units from your army that are within Synapse Range of your army and are eligible to fight, or one other **TYRANIDS** unit from your army that is eligible to fight.",
        effect: "Until the end of the phase, each time a model in any of those selected units makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "DEATH FRENZY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One **TYRANIDS** unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "OVERRUN",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just before a **TYRANIDS** unit from your army Consolidates.",
        target: "That **TYRANIDS** unit.",
        effect: "Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3\" as long as your unit can end that move within Engagement Range of one or more enemy units. If your unit is within Synapse Range of your army and not within Engagement Range of any enemy units, instead of making that Consolidation move, it can make a Normal move of up to 6\".",
      },
    },
    {
      name: "PREDATORY IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "Up to two **TYRANIDS** units from your army that are within Synapse Range of your army, or one other **TYRANIDS** unit from your army.",
        effect: "Select one Hyper-adaptation. Until the start of your next Command phase, that Hyper-adaptation is active for those selected units in addition to any other that may be active for your army.<br><br>**Restrictions:** You cannot select the same Hyper-adaptation you selected at the start of the first battle round.",
      },
    },
    {
      name: "ENDLESS SWARM",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "Up to two Endless Multitude units from your army that are within Synapse Range of your army, or one other **ENDLESS** **MULTITUDE** unit from your army.",
        effect: "You can return up to D3+3 destroyed models to each of the selected units.",
      },
    },
  ],
  "Subterranean Assault": [
    {
      name: "ADAPTIVE OPTIMISATION",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Mawloc or Trygon unit from your army.",
        effect: "Until the start of your next Command phase, your unit has the Synapse keyword.",
      },
    },
    {
      name: "REPLENISHING SWARMS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Tyranids unit from your army, wholly within 9\" of one or more Tunnel Markers you placed.",
        effect: "One model in your unit regains up to D3+1 lost wounds, or you can return up to D3+1 destroyed models with a Wounds characteristic of 1 to your unit, with their full wounds remaining, instead.",
      },
    },
    {
      name: "ENFILADING EMERGENCE",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One Tyranids unit from your army that was set up as Reinforcements this turn.",
        effect: "Until the end of your next Fight phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] and [IGNORES COVER] abilities.",
      },
    },
    {
      name: "TUNNEL NETWORK",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One Tyranids unit from your army that is wholly within 9\" of one or more of your Tunnel Markers and not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and set it up again, wholly within 9\" of another Tunnel Marker you placed, and more than 6\" horizontally away from all enemy units.",
      },
    },
    {
      name: "SWARMING ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Charge phase.",
        target: "One Tyranids Monster unit from your army that was set up as Reinforcements this turn.",
        effect: "Until the end of the phase, friendly Tyranids units within 6\" of your unit can re-roll Charge rolls.",
      },
    },
    {
      name: "RETREAT BELOW",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Tyranids unit or up to two Burrower units from your army that are not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Synaptic Nexus": [
    {
      name: "THE SMOTHERING SHADOW",
      cp: "1 CP",
      rules: {
        when: "Any phase, just after an enemy unit fails a Battle-shock test.",
        target: "One Synapse unit from your army within 12\" of that enemy unit.",
        effect: "Roll six D6: for each 3+, that enemy unit suffers 1 mortal wound.",
      },
    },
    {
      name: "SYNAPTIC CHANNELLING",
      cp: "1 CP",
      rules: {
        when: "Command phase.",
        target: "One Synapse unit from your army.",
        effect: "Until the end of the turn, while a friendly **TYRANIDS** unit is within 9\" of the selected unit, that unit is within Synapse Range of your army.",
      },
    },
    {
      name: "IRRESISTIBLE WILL",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Synapse unit from your army that has not been selected to shoot or fight this phase, and one enemy unit within 24\" of and visible to the **SYNAPSE** unit.",
        effect: "Until the end of the phase, each time a friendly **TYRANIDS** model makes an attack that targets that enemy unit, if the attacking model’s unit is within 6\" of your **SYNAPSE** unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.",
      },
    },
    {
      name: "REINFORCED HIVE NODE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Synapse unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    },
    {
      name: "IMPERATIVE DOMINANCE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One **TYRANIDS** unit from your army that is within Synapse Range of your army.",
        effect: "Select one Synaptic Imperative, even if you have already selected that imperative this battle. Until the start of your next Command phase, that Synaptic Imperative is active for your unit instead of any other Synaptic Imperative that is active for your army.",
      },
    },
    {
      name: "OVERRIDE INSTINCTS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **TYRANIDS** unit from your army that is within Synapse Range of your army and made a Fall Back move this phase.",
        effect: "Your unit is eligible to shoot and declare a charge this turn.",
      },
    },
  ],
  "Talons of the Norn Queen": [
    {
      name: "CATALYTIC BIOFORTIFICATION",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly NORN ASSIMILATOR unit suffers a mortal wound.",
        target: "That NORN ASSIMILATOR unit.",
        effect: "Your unit has Feel No Pain 4+ against mortal wounds.",
      },
    },
    {
      name: "LESSER PREY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly NORN ASSIMILATOR/NORN EMISSARY unit is selected to fight.",
        target: "That **NORN** **ASSIMILATOR/NORN** **EMISSARY** unit.",
        effect: "Your unit’s melee attacks have +2 **S**.",
      },
    },
    {
      name: "TANGLESTRIKE ROUNDS",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly NORN ASSIMILATOR unit has shot.",
        target: "That **NORN** **ASSIMILATOR** unit.",
        effect: "Select one enemy unit hit by those attacks. That enemy unit is **tethered** until the start of your next Command phase:<br><br>• While a unit is **tethered**, that unit has -2\" **M**.",
      },
    },
  ],
  "Unending Swarm": [
    {
      name: "SYNAPTIC GOADING",
      cp: "1 CP",
      rules: {
        when: "Any phase, just before an Endless Multitude unit from your army that is within Synapse Range of your army makes a surge move.",
        target: "That **ENDLESS** **MULTITUDE** unit.",
        effect: "When making that **surge move**, you can re-roll the D6 to determine how far your unit moves, and your unit can end that move as close as possible to the closest objective marker (instead of as close as possible to the closest enemy unit]. All other rules for making **surge moves** still apply.",
      },
    },
    {
      name: "UNENDING WAVES",
      cp: "2 CP",
      rules: {
        when: "Any phase.",
        target: "One Endless Multitude unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength.<br><br>**Restrictions:** Any destroyed Character units that were attached to your unit are not returned. You can only use this Stratagem once per battle.",
      },
    },
    {
      name: "TEEMING MASSES",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Endless Multitude unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
    },
    {
      name: "SWARMING MASSES",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase.",
        target: "One Endless Multitude unit from your army that has not been selected to shoot or fight this phase.",
        effect: "Until the end of the phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability, and If your unit contains 15 or more models, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
    },
    {
      name: "BOUNDING ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Endless Multitude unit from your army.",
        effect: "Until the end of the phase, each time your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.",
      },
    },
    {
      name: "PRESERVATION IMPERATIVE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Endless Multitude unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit is treated as containing fewer than five models for the purpose of the [BLAST] ability.",
      },
    },
  ],
  "Vanguard Onslaught": [
    {
      name: "SURPRISE ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, just after a Vanguard Invader unit from your army has selected its targets.",
        target: "That **VANGUARD** **INVADER** unit.",
        effect: "Select one enemy unit that was selected as the target of one or more of your unit’s attacks. That enemy unit must take a Battle-shock test. Until the end of the phase, each time a model in your unit makes an attack that targets that enemy unit, add 1 to the Hit roll. If the Battle-shock test was failed, add 1 to the Wound roll as well.",
      },
    },
    {
      name: "ASSASSIN BEASTS",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Vanguard Invader Infantry unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
    },
    {
      name: "SEEDED BROODS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One **TYRANIDS** unit from your army that is in Reserves, or up to two Vanguard Invader units from your army that are in Reserves.",
        effect: "Until the end of the phase, for the purposes of setting up those selected units on the battlefield, treat the current battle round number as being one higher than it actually is.",
      },
    },
    {
      name: "HYPERSENSORY SCILLIA",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target: "Up to two Vanguard Invader units from your army that are within 8\" of that enemy unit, or one other Tyranids Infantry unit from your army that is within 8\" of that enemy unit.",
        effect: "Those selected units can each make a Normal move of up to 6\".<br><br>**Restrictions:** You cannot target units that are within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "UNSEEN LURKERS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
        target: "One Vanguard Invader unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\" or, if your unit has the Lone Operative ability, if the attacking model is within 6\". Your opponent can select new targets for the attacking unit’s attacks.",
      },
    },
    {
      name: "INVISIBLE HUNTER",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "Up to two Vanguard Invader units from your army, or one Tyranids Infantry unit from your army.",
        effect: "Remove the targeted units from the battlefield and place them into Strategic Reserves.<br><br>**Restrictions:** The targeted units must be more than 3\" away from all enemy units.",
      },
    },
  ],
  "Warrior Bioform Onslaught": [
    {
      name: "ALIEN PHYSIOLOGY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly TYRANID WARRIORS unit.",
        target: "That **TYRANID** **WARRIORS** unit.",
        effect: "Attacks that target your unit with a **S** greater than your unit’s **T** have -1 to wound rolls.",
      },
    },
    {
      name: "SYNAPTIC MICRONODES",
      cp: "1 CP",
      rules: {
        when: "End of your Movement phase.",
        target: "One friendly TYRANID WARRIORS unit.",
        effect: "Select one objective your unit is controlling. That **objective** is secured.",
      },
    },
    {
      name: "PARASITIC PAYLOAD",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase, when a friendly TYRANID WARRIORS unit is selected to shoot.",
        target: "That **TYRANID** **WARRIORS** unit.",
        effect: "Your unit’s ranged attacks have [IGNORE COVER].",
      },
    },
  ],
  "Berzerker Warband": [
    {
      name: "BLOOD OFFERING",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One World Eaters unit from your army that was just destroyed while it was within range of one or more objective markers you controlled at the end of the previous phase. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Select one of those objective markers. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
    },
    {
      name: "HACK AND SLASH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One World Eaters unit from your army that has not been selected to fight this phase and that made a charge move this turn.",
        effect: "Until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1.",
      },
    },
    {
      name: "FRENZIED RESILIENCE",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One World Eaters unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    },
    {
      name: "SKULLS FOR THE SKULL THRONE!",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a **WORLD** **EATERS** unit from your army destroys a **CHARACTER** or **MONSTER** model.",
        target: "That World Eaters unit.",
        effect: "Make a Blessings of Khorne roll and use the results to activate one Blessing of Khorne. Until the end of the battle round, that Blessing of Khorne is active in addition to any other Blessings of Khorne that are currently active.",
      },
    },
    {
      name: "APOPLECTIC FRENZY",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, just after a **KHORNE** **BERZERKERS** unit from your army is selected to Advance.",
        target: "That Khorne Berzerkers unit.",
        effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    },
    {
      name: "BERZERKER’S WRATH",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One KHORNE BERZERKERS unit from your army that can make a surge move as a result of those attacks.",
        effect: "Do not roll a D6 to determine how far models in your unit can move when they make a surge move. Instead, when making a surge move, those models can move up to 8\".",
      },
    },
  ],
  "Brazen Engines": [
    {
      name: "APOPLECTIC CLARITY",
      cp: "1 CP",
      rules: {
        when: "Your Shooting phase or the Fight phase, when a friendly DAEMON VEHICLE unit is selected to attack.",
        target: "That **DAEMON** **VEHICLE** unit.",
        effect: "Your unit’s attacks can ignore modifiers to:<br><br>• **BS**.<br>• **WS**.<br>• Hit rolls and wound rolls.",
      },
    },
    {
      name: "TRAIL OF DESTRUCTION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase, when a friendly DAEMON VEHICLE unit is selected to move.",
        target: "That **DAEMON** **VEHICLE** unit.",
        effect: "Your unit has MOBILE.",
      },
    },
    {
      name: "GOADED TO FURY",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, when an enemy unit that targeted a friendly unengaged DAEMON VEHICLE unit (excluding TITANIC units) has shot.",
        target: "That **DAEMON** **VEHICLE** unit.",
        effect: "Your unit can make a surge move of up to D6\".",
      },
    },
  ],
  "Butchers of Khorne": [
    {
      name: "FOCUSED FEROCITY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly TERMINATOR SQUAD unit is selected to fight.",
        target: "That **TERMINATOR** **SQUAD** unit.",
        effect: "Your unit’s melee attacks have +1 **A**.",
      },
    },
    {
      name: "A TROPHY FOR THE THRONE",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly TERMINATOR SQUAD unit is selected to fight.",
        target: "That **TERMINATOR** **SQUAD** unit.",
        effect: "Your unit’s attacks that target a **MONSTER/VEHICLE** unit have +1 to wound rolls.",
      },
    },
    {
      name: "WRATH BEYOND REASON",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting Phase, when an enemy unit targets a friendly TERMINATOR SQUAD unit.",
        target: "That **TERMINATOR** **SQUAD** unit.",
        effect: "Ranged attacks that target your unit have -1 **D** until that enemy unit has attacked.",
      },
    },
  ],
  "Cult of Blood": [
    {
      name: "BLOODY VENGEANCE",
      cp: "1 CP",
      rules: {
        when: "Any phase.",
        target: "One World Eaters Monster or World Eaters Titanic unit from your army that was just destroyed by an enemy unit. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Until the end of the battle, each time a model in a Jakhals or Goremongers unit from your army makes an attack that targets the enemy unit that just destroyed your unit, you can re-roll the Hit roll.",
      },
    },
    {
      name: "DRAWN TO THE SLAUGHTER",
      cp: "2 CP",
      rules: {
        when: "Any phase.",
        target: "One Jakhals unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength.<br><br>**Restrictions:** This Stratagem cannot be used to return destroyed Character units to Attached units. You can only use this Stratagem once per battle.",
      },
    },
    {
      name: "IN THE SHADOW OF BRASS IDOLS",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Jakhals or Goremongers unit from your army that was selected as the target as one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within 6\" of one or more friendly World Eaters Monster units, or within 9\" of one or more friendly World Eaters Titanic units, your unit has the Feel No Pain 5+ ability instead.",
      },
    },
    {
      name: "BLOODTHIRSTY HORDE",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Jakhals or Goremongers unit from your army that has not been selected to fight this phase and is within Engagement Range of one or more enemy units.",
        effect: "Until the end of the phase, each time your unit is selected to fight, when determining which models in it are eligible to fight, any models in your unit that are within 3\" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3\" of them and within Engagement Range of their unit.",
      },
    },
    {
      name: "FAIL NOT THE BLOOD GOD",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One Jakhals or Goremongers unit from your army.",
        effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1. If that model’s unit is within 6\" of one or more friendly World Eaters Monster units, or within 9\" of one or more friendly World Eaters Titanic units, you can re-roll the Hit roll instead.",
      },
    },
    {
      name: "BRAZEN IDOL",
      cp: "2 CP",
      rules: {
        when: "Your Command phase.",
        target: "One World Eaters Monster or World Eaters Titanic unit from your army.",
        effect: "Select the Idol of Infinite Rage, Idol of Burning Wrath or Idol of Blessed Blood. Until the start of your next Command phase, that Idols of Khorne ability is active for your unit instead of any other Idols of Khorne ability that is active for your army, even if you have already selected that ability this battle.<br><br>**Restrictions:** You can only use this Stratagem once per battle.",
      },
    },
  ],
  "Goretrack Onslaught": [
    {
      name: "ENDLESS PURSUIT OF VIOLENCE",
      cp: "1 CP",
      rules: {
        when: "End of the Fight phase.",
        target: "One World Eaters Infantry unit from your army and one friendly Transport that it is able to embark within.",
        effect: "If your **WORLD** **EATERS** **INFANTRY** unit is wholly within 6\" of that **TRANSPORT**, it can embark within it.",
      },
    },
    {
      name: "SMASH THROUGH",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One World Eaters Vehicle model from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time your unit makes a Normal or Advance move, it can move horizontally through terrain features.",
      },
    },
    {
      name: "AGGRESSIVE DISEMBARKATION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One World Eaters Rhino model from your army that has not been selected to move this phase.",
        effect: "One **WORLD** **EATERS** unit embarked within your **RHINO** can disembark. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6\" of your **RHINO** and can be set up within Engagement Range of one or more enemy units.",
      },
    },
    {
      name: "FULL-THROTTLE ASSAULT",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One World Eaters Rhino model from your army that has not been selected to move this phase.",
        effect: "Until the end of the phase, each time a **WORLD** **EATERS** unit disembarks from that model after it has made a Normal move, that unit makes an assault disembark move (Core Rules, 18.06) for that disembarkation.",
      },
    },
    {
      name: "UNRELENTING ADVANCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One World Eaters Vehicle model from your army that was hit by one or more of the attacking unit’s attacks.",
        effect: "Your model can make a Normal move of up to 6\".<br><br>**Restrictions:** A unit cannot be targeted by this Stratagem and the Fury Unleashed Stratagem in the same phase.",
      },
    },
    {
      name: "FURY UNLEASHED",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase, just after an enemy unit has shot.",
        target: "One WORLD EATERS RHINO model from your army that has one or more wounds remaining and was hit by one or more of the attacking unit’s attacks.",
        effect: "One KHORNE BERZERKERS unit embarked within your model can make a disembark move and then make a surge move of up to D6+2\".<br><br>**Restrictions:** A unit cannot be targeted by this Stratagem and the Unrelenting Advance Stratagem in the same phase.",
      },
    },
  ],
  "Khorne Daemonkin": [
    {
      name: "SUMMONED BY SLAUGHTER",
      cp: "1 CP",
      rules: {
        when: "Any phase, when the last model in a unit is destroyed, before removing it from play. (If that unit is a Transport, any units embarked within that **TRANSPORT** model must disembark first.)",
        target: "One Bloodletters unit from your army that is in Reserves.",
        effect: "Set your unit up anywhere on the battlefield wholly within 9\" of that destroyed model and more than 6\" horizontally away from all enemy units, then remove the destroyed model from play.<br><br>**Restrictions:** You cannot use this Stratagem more than once per battle round.",
      },
    },
    {
      name: "DAEMONIC FURY",
      cp: "1 CP",
      rules: {
        when: "Start of your Fight phase.",
        target: "One Blood Legions unit from your army.",
        effect: "Select one friendly World Eaters unit within 6\" of your unit. Until the end of the turn, melee weapons equipped by models in your **WORLD** **EATERS** unit have the [LANCE] ability. If the Daemonic Rage ability is active for your army, then until the end of the phase those melee weapons also have the [TWIN-LINKED] ability.",
      },
    },
    {
      name: "A WORTHY SKULL",
      cp: "1 CP",
      rules: {
        when: "Fight phase, just after a Blood Legions or World Eaters unit from your army has fought, and one or more enemy **CHARACTER** or **MONSTER** models were destroyed as a result of those attacks.",
        target: "That **BLOOD** **LEGIONS** or **WORLD** **EATERS** unit.",
        effect: "You gain D3BTP and you can then spend one or more BTP you have to activate one of the Blood Tithe abilities.",
      },
    },
    {
      name: "BLESSING OF BURNING BLOOD",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One Blood Legions unit from your army that is within 6\" of a friendly World Eaters unit that was selected as the target as one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, models in your **WORLD** **EATERS** unit have a 5+ invulnerable save. If the Boon of Blood ability is active for your army, then until the end of the phase, models in your **WORLD** **EATERS** unit have a 4+ invulnerable save.",
      },
    },
    {
      name: "DAEMONTIDE",
      cp: "1 CP",
      rules: {
        when: "Your Command phase.",
        target: "One World Eaters unit from your army.",
        effect: "Select one friendly Blood Legions unit within 6\" of your unit. One destroyed Mounted model, up to D3 destroyed Beast models, or up to D6 destroyed Infantry models are returned to that **BLOOD** **LEGIONS** unit with their full wounds remaining.<br><br>**Restrictions:** This Stratagem cannot be used to return destroyed Character models to Attached units.",
      },
    },
    {
      name: "MURDER-CALL",
      cp: "1 CP",
      rules: {
        when: "End of your opponent’s Fight phase.",
        target: "One Blood Legions unit from your army that is on the battlefield and not within Engagement Range of one or more enemy units.",
        effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    },
  ],
  "Possessed Slaughterband": [
    {
      name: "DAEMONIC RESISTANCE",
      cp: "2 CP",
      rules: {
        when: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target: "One World Eaters Possessed unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    },
    {
      name: "DAEMONIC STRENGTH",
      cp: "1 CP",
      rules: {
        when: "Fight phase.",
        target: "One World Eaters Possessed unit from your army that has not been selected to fight this phase.",
        effect: "Until the end of the phase, each time an attack made by a model in your unit is allocated to an enemy model, if your unit has the Eightbound keyword and that enemy model is not a **MONSTER** or **VEHICLE**, add 1 to the Damage characteristic of that attack. If your unit has the Exalted Eightbound keyword and that enemy model is a **MONSTER** or **VEHICLE**, add 1 to the Damage characteristic of that attack instead.",
      },
    },
    {
      name: "IMMORTAL FURY",
      cp: "2 CP",
      rules: {
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target: "One World Eaters Possessed unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
        effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
      },
    },
    {
      name: "RAPID MANIFESTATION",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase.",
        target: "One Exalted Eightbound unit from your army that is arriving using the Deep Strike ability this phase.",
        effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.<br><br>**Restrictions:** A unit targeted with this Stratagem is not eligible to declare a charge in the same turn.",
      },
    },
    {
      name: "WARP STALKERS",
      cp: "1 CP",
      rules: {
        when: "Your Movement phase or your Charge phase.",
        target: "One World Eaters Possessed unit from your army that has not been selected to move or declare a charge this phase.",
        effect: "Until the end of the phase, each time a model in your unit makes a Normal, Advance, Fall Back or Charge move, it can move through enemy models (excluding **MONSTERS** and **VEHICLES**). When doing so, it can move within Engagement Range of such models but, unless that move was a Charge move, it cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
    },
    {
      name: "HORRIFYING VIOLENCE",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Command phase.",
        target: "One World Eaters Possessed unit from your army.",
        effect: "Each enemy unit within Engagement Range of your unit must take a Battle-shock test, subtracting 1 from that test.",
      },
    },
  ],
  "Vessels of Wrath": [
    {
      name: "SCORN THE WITCH",
      cp: "1 CP",
      rules: {
        when: "Any phase, when a friendly WORLD EATERS CHARACTER unit (excluding EPIC HERO units) suffers a mortal wound.",
        target: "That **WORLD** **EATERS** **CHARACTER** unit.",
        effect: "Your unit has Feel No Pain 4+ against mortal wounds.",
      },
    },
    {
      name: "ASPIRE TO INFAMY",
      cp: "1 CP",
      rules: {
        when: "Fight phase, when a friendly WORLD EATERS CHARACTER unit (excluding EPIC HERO units) is selected to fight.",
        target: "That **WORLD** **EATERS** **CHARACTER** unit.",
        effect: "Your unit’s **CHARACTER** models’ melee attacks have:<br><br>• +1 **A**.<br>• +2 **S**.",
      },
    },
    {
      name: "PUNISH THE CRAVEN",
      cp: "1 CP",
      rules: {
        when: "Your opponent’s Movement phase, when a unit is selected to make a fall-back move, if that unit is engaged with a friendly WORLD EATERS CHARACTER unit.",
        target: "That **WORLD** **EATERS** **CHARACTER** unit.",
        effect: "When an enemy unit **engaged** with your unit is selected to make a **fall-back move**, that enemy unit must use the desperate escape mode. If that enemy unit is battle-shocked, -1 from those hazard rolls.",
      },
    },
  ],
};
