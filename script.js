let loc = "start";
let shouldBreak = false

// USER VARIABLES
let userGold = 1
let userWeapon = "Dřevěný Meč"
let userDmg = "2-5"
let userHP = 100

// SHOP VARIABLES
let shopBan = false;
let shopWeapon = ""
let shopWeaponPrice = ""
let userWeaponTier = 0;
let shopWeaponDmg = 0;
let userArmorTier = 0;
let shopArmorTier = userArmorTier + 1;

function weaponRNG(weapon1, weapon2) {
    let nahodneCislo = Math.random()
    if (nahodneCislo < 0.5) {
        return weapon1
    } else {
        return weapon2
    }
}

alert("Otevři si konzoli. Pak se můžeš vrhnout do dobrodružství!");

while (true) {
    if (loc === "start") {
        const name = prompt("Vítej dobroduhu! Sdělíš mi své jméno?");
        console.log("Zdravím tě, " + name + ". Doufám že si užiješ své dobrodružství!");
        console.log("")
        loc = "spawn";
        // break
    
    // SPAWN
    } else if (loc === "spawn") {
        console.log("Nacházíš se na spawnu. Rozhlédneš se kolem sebe.")
        console.log("Na levo vidíš obchod. Můžeš jít nakupovat k obchodníkovi Konstantinovi. Prodává zboží z celé říše!")
        console.log("Před sebou také vidíš magickou fontánu se zářící vodou. Zdejší léčící fontána z legend. Vyléčí vše.")
        console.log("Za fontánou zahlédneš obří bránu. Je to ta brána o které si četl ve všech těch knížkách.")
        console.log("Porta Magnifica! Magická brána, která tě může udělat silnějším. Drží v sobě nepředstavitelné bohatství.")
        console.log("Ale také spoustu nebezpečí...")
        console.log("")
        let decision1 = prompt("Kam se chceš vydat? Dobrodruhu. [1 - Obchod, 2 - Fontána, 3 - Brána]")
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
                                    break
                                case "Zlatý Meč":
                                    userDmg = "5-15"
                                    break
                                case "Železný Meč":
                                    userDmg = "6-20"
                                    break
                                case "Ocelový Meč":
                                    userDmg = "9-25"
                                    break
                                case "Diamantový Meč":
                                    userDmg = "10-30"
                                    break
                                case "Stormyxový Meč":
                                    userDmg = "15-40"
                                    break
                                case "Mythrilový Meč":
                                    userDmg = "20-50"
                                    break
                                case "Adamantiový Meč":
                                    userDmg = "25-75"
                                    break
                                case "Orichalcový Meč":
                                    userDmg = "45-90"
                                    break
                                case "Nebeský Meč":
                                    userDmg = "60-100"
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
                    loc = "armorShop"
                    continue
                case "3":
                    console.log("Jakmile přijde další zákazník a pozornost Konstantina přejde jinam,")
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
        } else if (shopBan === true) {
            console.log('Zastaví tě dva nabušení muži v černém. „Kampak, kampak? Zloději jeden."')
            console.log("Ihned tě vyrazí. Asi si neměl zkoušet okrást Konstantina...")
            console.log("")
            alert("Zmáčkni Enter pro pokračování.")
            loc = "spawn"
        }
    
    // FOUNTAIN
    } else if (loc === "fountain") {
        console.log("fountain")
        break
    
    // GATE
    } else if (loc === "gate") {
        console.log("gate")
        break
    }










































} 
// credit: matěj - název brány