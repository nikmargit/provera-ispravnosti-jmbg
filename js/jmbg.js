(function() {
    const jmbgHTML = document.getElementById("jmbg-input");
    const check = document.getElementById("check");
    const msg = document.getElementById("msg");
    console.log(msg);
    let jmbg,
        dan,
        mesec,
        godina,
        regija,
        jedinstveniBroj,
        kontrolna,
        ispravnaKontrolna;

    function checkJMBG() {
        if (dan < 1 || dan > 31) {
            msg.innerHTML = "Neispravan dan rodjenja";
        } else if (mesec < 1 || mesec > 12) {
            msg.innerHTML = "Neispravan mesec rodjenja";
        } else if (godina < 900 || godina > 2017) {
            msg.innerHTML = "Neispravna godina rodjenja";
        } else if ((regija > 50 && regija < 70) || regija > 99) {
            msg.innerHTML = "Neispravna regija rodjenja";
        } else if (jedinstveniBroj > 999) {
            msg.innerHTML = "Neispravno unet pol!"; //nepotrbno, uvek ce tri cifre biti manje od 1000
        } else if (kontrolna !== ispravnaKontrolna) {
            msg.innerHTML = "Neispravan kontrolni broj";
        } else {
            msg.innerHTML = "Ispravan maticni broj";
        }
    }

    function parseJMBG() {
        console.log("aaa");
        let jmbg = jmbgHTML.value.split("");
        console.log(jmbg);
        if (jmbg.length === 13) {
            dan = Number(jmbg[0] + jmbg[1]);
            mesec = Number(jmbg[2] + jmbg[3]);
            godina = Number(jmbg[4] + jmbg[5] + jmbg[6]);
            regija = Number(jmbg[7] + jmbg[8]);
            jedinstveniBroj = Number(jmbg[9] + jmbg[10] + jmbg[11]);
            kontrolna = Number(jmbg[12]);
            ispravnaKontrolna =
                11 -
                (7 * (Number(jmbg[0]) + Number(jmbg[6])) +
                    6 * (Number(jmbg[1]) + Number(jmbg[7])) +
                    5 * (Number(jmbg[2]) + Number(jmbg[8])) +
                    4 * (Number(jmbg[3]) + Number(jmbg[9])) +
                    3 * (Number(jmbg[4]) + Number(jmbg[10])) +
                    2 * (Number(jmbg[5]) + Number(jmbg[11]))) %
                    11;
            checkJMBG();
        } else {
            msg.innerHTML = "JMBG mora imati 13 cifara!";
        }
    }

    check.addEventListener("click", parseJMBG);
})();
