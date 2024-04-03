let loc = "start";
let shouldBreak = false
let hardMode = false

// USER VARIABLES
let name = ""
let userGold = 99999999999999
let userWeapon = "Dřevěný Meč"
let userWeaponTier = 0;
let userDmg = "2-5"
let userMinDmg = 2
let userMaxDmg = 5
let userHP = 100
let userMaxHP = 100
let userArmor = "Žádné"
let userArmorBonus = 0
let userArmorTier = 0;
let userRank = "Začátečník"

// SHOP VARIABLES
let shopBan = false;
let shopWeapon = ""
let shopWeaponPrice = 0
let shopWeaponDmg = "";
let shopArmor = ""
let shopArmorPrice = 0;
let shopArmorHealth = 0;


alert("Otevři si konzoli. Pak se můžeš vrhnout do dobrodružství! [CTRL+SHIFT+C]");

while (true) {
    if (loc === "start") {
        name = prompt("Vítej dobroduhu! Sdělíš mi své jméno?");
        console.log("Zdravím tě, " + name + ". Doufám že si užiješ své dobrodružství!");
        console.log("")
        loc = "spawn"

    // SPAWN
    } else if (loc === "spawn") {
        console.log("Nacházíš se na spawnu. Rozhlédneš se kolem sebe.")
        console.log("Na levo vidíš obchod. Můžeš jít nakupovat k obchodníkovi Konstantinovi. Prodává zboží z celé říše!")
        console.log("Před sebou také vidíš magickou fontánu se zářící vodou. Zdejší léčící fontána z legend. Vyléčí vše.")
        console.log("Za fontánou zahlédneš obří bránu. Je to ta brána o které si četl ve všech těch knížkách.")
        console.log("Porta Magnifica! Magická brána, která tě může udělat silnějším. Drží v sobě nepředstavitelné bohatství.")
        console.log("Ale také spoustu nebezpečí...")
        console.log("")
        let decision1 = prompt("Kam se chceš vydat? Dobrodruhu. [1 - Obchod, 2 - Fontána, 3 - Brána, 4 - Status]")
        switch(decision1) {
            case "1":
                loc = "shop"
                break
            case "2":
                loc = "fountain"
                break
            case "3":
                loc = "gate"
                break
            case "4":
                loc = "status"
                break
            default:
                console.log("Špatná odpověď.")
                shouldBreak = true
                break
        }
        if (shouldBreak) {
            break
        }

    // SHOP
    } else if (loc === "shop") {
        if (shopBan === false) {
            console.log('„Zdravím tě, zákazníku." řekl Konstantin')
            console.log("Copak by sis rád koupil? Mohu ti nabídnout zbraně a brnění všeho druhu!")
            console.log("")
            decision2 = prompt("Co chceš jít  nakupovat? [1 - Zbraně, 2 - Brnění, 3 - Okrást Konstantina]")
            switch(decision2) {

                // WEAPON OFFERS
                case "1":
                    console.log("Potřebujete nějakou zbraň? Drahý zákazníku. Hned vám něco dobrého nabídnu...")
                    console.log("Aaaha! Tato zbraň je pro vás jako dělaná. Co vy na to?")
                    console.log("")
                    switch(userWeaponTier) {
                        case 0:
                            shopWeapon = "Bronzový Meč"
                            shopWeaponPrice = 100
                            shopWeaponDmg = "3-10"
                            break
                        case 1:
                            shopWeapon = "Zlatý Meč"
                            shopWeaponPrice = 250
                            shopWeaponDmg = "5-15"
                            break
                        case 2:
                            shopWeapon = "Železný Meč"
                            shopWeaponPrice = 750
                            shopWeaponDmg = "6-20"
                            break
                        case 3:
                            shopWeapon = "Ocelový Meč"
                            shopWeaponPrice = 2000
                            shopWeaponDmg = "9-25"
                            break
                        case 4:
                            shopWeapon = "Diamantový Meč"
                            shopWeaponPrice = 5000
                            shopWeaponDmg = "10-30"
                            break
                        case 5:
                            shopWeapon = "Stormyxový Meč"
                            shopWeaponPrice = 10000
                            shopWeaponDmg = "15-40"
                            break
                        case 6:
                            shopWeapon = "Mythrilový Meč"
                            shopWeaponPrice = 25000
                            shopWeaponDmg = "20-50"
                            break
                        case 7:
                            shopWeapon = "Adamantiový Meč"
                            shopWeaponPrice = 50000
                            shopWeaponDmg = "25-75"
                            break
                        case 8:
                            shopWeapon = "Orichalcový Meč"
                            shopWeaponPrice = 80000
                            shopWeaponDmg = "45-90"
                            break
                        case 9:
                            shopWeapon = "Nebeský Meč"
                            shopWeaponPrice = 125000
                            shopWeaponDmg = "60-100"
                            break
                    }
                    console.log("Konstantin ti nabízí ... " + shopWeapon + ". Chceš si koupit " + shopWeapon + " za " + shopWeaponPrice + " zlatých?")
                    console.log(shopWeapon + " útočí za " + shopWeaponDmg + " dmg.")
                    console.log("")

                    // WEAPON BUYING
                    let purchaseWeapon = prompt("Koupit zbraň? [1 - ano, 2 - ne]")
                    if (purchaseWeapon === "1") {

                        // SUCCESFULL PURCHASE
                        if (userGold >= shopWeaponPrice) {
                            userGold = userGold - shopWeaponPrice
                            console.log("Mnohokrát děkuji za koupi, drahý zákazníku. Přijďte zase někdy příště!")
                            console.log("Prohlížíš si svůj nově koupený meč. Ihned ho vyměníš za svůj starý.")
                            userWeapon = shopWeapon
                            switch(shopWeapon) {
                                case "Bronzový Meč":
                                    userDmg = "3-10"
                                    userWeaponTier = 1
                                    userMinDmg = 3
                                    userMaxDmg = 10
                                    break
                                case "Zlatý Meč":
                                    userDmg = "5-15"
                                    userWeaponTier = 2
                                    userMinDmg = 5
                                    userMaxDmg = 15
                                    break
                                case "Železný Meč":
                                    userDmg = "6-20"
                                    userWeaponTier = 3
                                    userMinDmg = 6
                                    userMaxDmg = 20
                                    break
                                case "Ocelový Meč":
                                    userDmg = "9-25"
                                    userWeaponTier = 4
                                    userMinDmg = 9
                                    userMaxDmg = 25
                                    break
                                case "Diamantový Meč":
                                    userDmg = "10-30"
                                    userWeaponTier = 5
                                    userMinDmg = 10
                                    userMaxDmg = 30
                                    break
                                case "Stormyxový Meč":
                                    userDmg = "15-40"
                                    userWeaponTier = 6
                                    userMinDmg = 15
                                    userMaxDmg = 40
                                    break
                                case "Mythrilový Meč":
                                    userDmg = "20-50"
                                    userWeaponTier = 7
                                    userMinDmg = 20
                                    userMaxDmg = 50
                                    break
                                case "Adamantiový Meč":
                                    userDmg = "25-75"
                                    userWeaponTier = 8
                                    userMinDmg = 25
                                    userMaxDmg = 75
                                    break
                                case "Orichalcový Meč":
                                    userDmg = "45-90"
                                    userWeaponTier = 9
                                    userMinDmg = 45
                                    userMaxDmg = 90
                                    break
                                case "Nebeský Meč":
                                    userDmg = "60-100"
                                    userWeaponTier = 10
                                    userMinDmg = 60
                                    userMaxDmg = 100
                                    break
                            }
                            console.log("Nyní máš na svém opasku, připravený k boji " + userWeapon + ". S útočnou silou " + userDmg + " dmg.")
                            console.log("")
                            alert("Zmáčkni Enter pro pokračování.")
                            loc = "spawn"

                        // NOT ENOUGH GOLD
                        } else {
                            console.log("Nemáš dostatek peněz! Snažíš se mě podvést?! Mazej pryč! Než ti zakážu vstup na doživotí!!!")
                            console.log("")
                            alert("Zmáčkni Enter pro pokračování.")
                            loc = "spawn"
                        }

                    // NOT BUYING
                    } else {
                        console.log("Jak myslíš teda.. Pokud si to rozmyslíš, neváhej přijít zase!")
                        console.log("")
                        alert("Zmáčkni Enter pro pokračování.")
                        loc = "spawn"
                    }
                    continue

                // ARMOR OFFERS
                case "2":
                    console.log("Potřebujete nějaké brnění? Milostivý zákazníku. Hned vám něco skvělého najdu...")
                    console.log("Noo jo! Tato zbroj je pro vás jako vyšitá. Co na ni říkáte?")
                    console.log("")
                    switch(userArmorTier) {
                        case 0:
                            shopArmor = "Kožené Brnění"
                            shopArmorHealth = 50;
                            shopArmorPrice = 50;
                            break
                        case 1:
                            shopArmor = "Řetězové Brnění"
                            shopArmorHealth = 100
                            shopArmorPrice = 100
                            break
                        case 2:
                            shopArmor = "Železné Brnění"
                            shopArmorHealth = 175
                            shopArmorPrice = 250
                            break
                        case 3:
                            shopArmor = "Ocelové Brnění"
                            shopArmorHealth = 250
                            shopArmorPrice = 1500
                            break
                        case 4:
                            shopArmor = "Diamantové Brnění"
                            shopArmorHealth = 325
                            shopArmorPrice = 5000
                            break
                        case 5:
                            shopArmor = "Stormyxové Brnění"
                            shopArmorHealth = 450
                            shopArmorPrice = 15000
                            break
                        case 6:
                            shopArmor = "Mythrilové Brnění"
                            shopArmorHealth = 600
                            shopArmorPrice = 40000
                            break
                        case 7:
                            shopArmor = "Adamantiové Brnění"
                            shopArmorHealth = 700
                            shopArmorPrice = 100000
                            break
                        case 8:
                            shopArmor = "Orichalcové Brnění"
                            shopArmorHealth = 800
                            shopArmorPrice = 150000
                            break
                        case 9:
                            shopArmor = "Nebeské Brnění"
                            shopArmorHealth = 1000
                            shopArmorPrice = 200000
                            break
                    }
                    console.log("Konstantin ti nabízí ... " + shopArmor + ". Chceš si koupit " + shopArmor + " za " + shopArmorPrice + " zlatých?")
                    console.log(shopArmor + " ti přidává " + shopArmorHealth + " životů.")
                    console.log("")

                    // ARMOR BUYING
                    let purchaseArmor = prompt("Koupit brnění? [1 - ano, 2 - ne]")
                    if (purchaseArmor === "1") {

                        // SUCCESFULL PURCHASE
                        if (userGold >= shopArmorPrice) {
                            userGold = userGold - shopArmorPrice
                            console.log("Děkuji, děkuji za koupi. Milostný zákazníku. Přijďte zase někdy příště!")
                            console.log("Prohlížíš si svoje nově koupené brnění. Ihned ho vyměníš za svoje staré.")
                            userArmor = shopArmor
                            switch(shopArmor) {
                                case "Kožené Brnění":
                                    userArmorBonus = 50
                                    userHP = 100 + 50
                                    userArmorTier = 1
                                    break
                                case "Řetězové Brnění":
                                    userArmorBonus = 100
                                    userHP = 100 + 100
                                    userArmorTier = 2
                                    break
                                case "Železné Brnění":
                                    userArmorBonus = 175
                                    userHP = 100 + 175
                                    userArmorTier = 3
                                    break
                                case "Ocelové Brnění":
                                    userArmorBonus = 250
                                    userHP = 100 + 250
                                    userArmorTier = 4
                                    break
                                case "Diamantové Brnění":
                                    userArmorBonus = 325
                                    userHP = 100 + 325
                                    userArmorTier = 5
                                    break
                                case "Stormyxové Brnění":
                                    userArmorBonus = 450
                                    userHP = 100 + 450
                                    userArmorTier = 6
                                    break
                                case "Mythrilové Brnění":
                                    userArmorBonus = 600
                                    userHP = 100 + 600
                                    userArmorTier = 7
                                    break
                                case "Adamantiové Brnění":
                                    userArmorBonus = 700
                                    userHP = 100 + 700
                                    userArmorTier = 8
                                    break
                                case "Orichalcové Brnění":
                                    userArmorBonus = 800
                                    userHP = 100 + 800
                                    userArmorTier = 9
                                    break
                                case "Nebeské Brnění":
                                    userArmorBonus = 1000
                                    userHP = 100 + 1000
                                    userArmorTier = 10
                                    break
                            }
                            userMaxHP = userHP
                            console.log("Nyní máš na sobě, připravené k boji, svoje nové " + userArmor + ". Máš teď " + userHP + " životů.")
                            console.log("")
                            alert("Zmáčkni Enter pro pokračování.")
                            loc = "spawn"

                        // NOT ENOUGH GOLD    
                        } else {
                            console.log("Nemáš dostatek peněz! Snažíš se mě podvést?! Mazej pryč! Než ti zakážu vstup na doživotí!!!")
                            console.log("")
                            alert("Zmáčkni Enter pro pokračování.")
                            loc = "spawn"
                        }

                    // NOT BUYING
                    } else {
                        console.log("Jak myslíš teda.. Pokud si to rozmyslíš, neváhej přijít zase!")
                        console.log("")
                        alert("Zmáčkni Enter pro pokračování.")
                        loc = "spawn"
                    }
                    continue

                // STEALING ATTEMPT
                case "3":
                    console.log("Jakmile přijde další zákazník a pozornost Konstantina přejde jinam:");
                    console.log("ihned to otočíš k pultu se třpytivými meči a začneš zkoumat co by se hodilo nejvíc.")
                    console.log("Než se ti podaří něco ukrást, tak se spustí alarm.")
                    console.log('Okamžitě tě vyhodí ven. „A už se sem nevracej!"')
                    console.log("")
                    alert("Zmáčkni Enter pro pokračování.")
                    shopBan = true
                    loc = "spawn"
                    continue
                default:
                    console.log("Špatná odpověď.")
                    break
            }

        // GG UNLUCKY
        } else if (shopBan === true) {
            console.log('Zastaví tě dva nabušení muži v černém. „Kampak, kampak? Zloději jeden."')
            console.log("Ihned tě vyrazí. Asi si neměl zkoušet okrást Konstantina...")
            console.log("")
            alert("Zmáčkni Enter pro pokračování.")
            loc = "spawn"
        }

    // FOUNTAIN
    } else if (loc === "fountain") {
        console.log("Obklopí tě léčivá magická síla. Všechna tvá únava mizí. Celé tvé tělo se léčí.")
        let healedHP = userMaxHP - userHP
        userHP = userMaxHP
        console.log("Jsi plně vyléčen. Fontána ti vyléčila " + healedHP + " bodů zdraví.")
        console.log("")
        alert("Zmáčkni Enter pro pokračování.")
        loc = "spawn"
        
     // STATUS   
    } else if (loc === "status") {
        
        // RANK CHANGE
        if (userWeaponTier === 10 && userArmorTier === 10) {
            userRank = "Overlord"
        } else if (userWeaponTier >= 8 && userArmorTier >= 8) {
            userRank = "Warlord"
        } else if (userWeaponTier >= 6 && userArmorTier >= 6) {
            userRank = "Lord"
        } else if (userWeaponTier >= 4 && userArmorTier >= 4) {
            userRank = "Bojovník"
        } else if (userWeaponTier >= 2 && userArmorTier >= 2) {
            userRank = "Dobrodruh"
        }
        
        // STATUS LOG
        console.log("Otevřeš svůj status.")
        console.log("")
        console.log("Jméno: " + name)
        console.log("Hodnost: " + userRank)
        console.log("Body života: " + userHP + "/" + userMaxHP)
        console.log("")
        console.log("Používaná zbraň: " + userWeapon)
        console.log("Útočná síla: " + userDmg)
        console.log("Úroveň zbraně: " + userWeaponTier)
        console.log("")
        console.log("Používané brnění: " + userArmor)
        console.log("Bonusové životy: " + userArmorBonus)
        console.log("Úroveň brnění: " + userArmorTier)
        console.log("")
        alert("Zmáčkni Enter pro pokračování.")
        loc = "spawn"
    
    // GATE
    } else if (loc === "gate") {
    
        // RANDOM RANDINT
        function randint(min,max) {
            let fromZero = min
            min = 0
            max -= fromZero
            return Math.floor(Math.random()*(max+1)) + fromZero
        }

        // BATTLE FUNCTION
        function battle(enemy) {
            let monsterName = ""
            let monsterHP = 0
            let monsterGold = 0
            let minDmg = 0
            let maxDmg = 0
            let userBattleDmg = 0
            let bossMonster = false
            let bossTier = 0
            
            // ENEMY SELECTION
            switch(enemy) {
                case "goblin":
                    monsterName = "Goblin"
                    monsterHP = 20
                    monsterGold = 10
                    minDmg = 2
                    maxDmg = 4
                    break
                case "goblinLeader":
                    monsterName = "Goblin Vůdce"
                    monsterHP = 35
                    monsterGold = 25
                    minDmg = 3
                    maxDmg = 10
                    bossMonster = true
                    bossTier = 1
                    break
                case "mummy":
                    monsterName = "Mumie"
                    monsterHP = 40
                    monsterGold = 25
                    minDmg = 3
                    maxDmg = 15
                    break
                case "sandman":
                    monsterName = "Písečný Muž"
                    monsterHP = 60
                    monsterGold = 50
                    minDmg = 5
                    maxDmg = 17
                    bossMonster = true
                    bossTier = 2
                    break
                case "iceGuardian":
                    monsterName = "Ledový Ochránce"
                    monsterHP = 65
                    monsterGold = 50
                    minDmg = 4
                    maxDmg = 17
                    break
                case "iceKnight":
                    monsterName = "Ledový Rytíř"
                    monsterHP = 80
                    monsterGold = 100
                    minDmg = 6
                    maxDmg = 20
                    bossMonster = true
                    bossTier = 3
                    break
                case "skeleton":
                    monsterName = "Kostlivec"
                    monsterHP = 85
                    monsterGold = 125
                    minDmg = 6
                    maxDmg = 23
                    break
                case "skeletonKing":
                    monsterName = "Král Kostlivců"
                    monsterHP = 95
                    monsterGold = 250
                    minDmg = 9
                    maxDmg = 25
                    bossMonster = true
                    bossTier = 4
                    break
                case "magmaMinion":
                    monsterName = "Magma Minion"
                    monsterHP = 100
                    monsterGold = 250
                    minDmg = 8
                    maxDmg = 25
                    break
                case "magmaTrasher":
                    monsterName = "Magma Trasher"
                    monsterHP = 130
                    monsterGold = 500
                    minDmg = 10
                    maxDmg = 30
                    bossMonster = true
                    bossTier = 5
                    break
                case "swampMonster":
                    monsterName = "Bažinové Monstrum"
                    monsterHP = 140
                    monsterGold = 500
                    minDmg = 10
                    maxDmg = 30
                    break
                case "swampGuardian":
                    monsterName = "Bažinový Ztrážce"
                    monsterHP = 170
                    monsterGold = 1000
                    minDmg = 15
                    maxDmg = 40
                    bossMonster = true
                    bossTier = 6
                    break
                case "orc":
                    monsterName = "Orc"
                    monsterHP = 175
                    monsterGold = 1000
                    minDmg = 15
                    maxDmg = 45
                    break
                case "orcLeader":
                    monsterName = "Orc Vojevůdce"
                    monsterHP = 240
                    monsterGold = 2000
                    minDmg = 20
                    maxDmg = 55
                    bossMonster = true
                    bossTier = 7
                    break
                case "cloudLurker":
                    monsterName = "Cloud Lurker"
                    monsterHP = 250
                    monsterGold = 2000
                    minDmg = 25
                    maxDmg = 70
                    break
                case "cloudLord":
                    monsterName = "Cloud Lord"
                    monsterHP = 320
                    monsterGold = 4000
                    minDmg = 30
                    maxDmg = 80
                    bossMonster = true
                    bossTier = 8
                    break
                case "vampire":
                    monsterName = "Upír"
                    monsterHP = 340
                    monsterGold = 3000
                    minDmg = 30
                    maxDmg = 80
                    break
                case "vampireKing":
                    monsterName = "Krák Upírů"
                    monsterHP = 400
                    monsterGold = 6000
                    minDmg = 45
                    maxDmg = 90
                    bossMonster = true
                    bossTier = 9
                    break
                case "corrupted":
                    monsterName = "Corrupted One"
                    monsterHP = 450
                    monsterGold = 5000
                    minDmg = 50
                    maxDmg = 95
                    break
                case "corruptionLord":
                    monsterName = "Corruption Lord"
                    monsterHP = 800
                    monsterGold = 10000
                    minDmg = 60
                    maxDmg = 100
                    bossMonster = true
                    bossTier = 10
                    break
            }
            
            // DMG GENERATION
            function attackMonsterRNG(min,max) {
                monsterDmg = randint(min,max)
            }
            function attackUserRNG(min,max) {
                userBattleDmg = randint(min,max)
            }

            // ATTACKING
            while (userHP > 0 && monsterHP > 0) {
                attackMonsterRNG(minDmg, maxDmg)
                attackUserRNG(userMinDmg, userMaxDmg)
                userHP -= monsterDmg
                monsterHP -= userBattleDmg
                userHP = userHP < 0 ? 0 : userHP
                monsterHP = monsterHP < 0 ? 0 : monsterHP
                console.log(`Útočíš na ${monsterName} za ${userBattleDmg} dmg. Zbývá mu ${monsterHP} životů.`);
                console.log(`${monsterName} na tebe útočí za ${monsterDmg} dmg. Zbývá ti ${userHP} životů.`);
                alert("Zmáčkni Enter pro pokračování.")
                console.log("")
            }
            if (userHP <= 0) {
                if (hardMode === true) {
                    console.log("Umřel jsi. Jelikož máš aktivovaný Hard Mode, tak se hra ukončí.")
                    loc = "end"
                } else {
                    console.log("Umřel jsi. Budeš teleportován zpátky na spawn.")
                    alert("Zmáčkni Enter pro pokračování.")
                    userHP = userMaxHP
                    console.log("")
                    loc = "spawn"
                }
            } else {
                console.log(`Porazil jsi ${monsterName}. Získáváš ${monsterGold} zlata.`)
                alert("Zmáčkni Enter pro pokračování.")
                console.log("")
            }
        }

        battle("corruptionLord")

    // HARD MORE DEATH
    } else if (loc === "end") {
        break
    }
    
    

}
// credit: matěj - název brány + randint
// vyřešit tier 10 kupování
// menu - play, info, credits