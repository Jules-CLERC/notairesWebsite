class InfosAndPay {
    constructor(numRDV) {
        this.currentNumRDV = numRDV;
        this.addInfosAndPay();
    }

    addInfosAndPay() {
        let clickAction = $('#clickAction');
        clickAction.append('<div id="infosAndPay"></div>');
        let infosAndPay = $('#infosAndPay');
        infosAndPay.append('<div id="infos"></div><div id="pay"></div><button id="returnOnDay">Retour</button>');
        $('#returnOnDay').click(function () {
            infosAndPay.remove();
        });
        self = $(this);

        $.ajax({
            url: "php/requests/getInfosAndPay.php",
            method: "get",
            data: {
                numRDV: this.currentNumRDV
            }
        }).done(function (data) {
            let tabInfosAndPay = JSON.parse(data);
            //pour éviter les bugs
            if (tabInfosAndPay[0] !== self[0].currentNumRDV) {
                return;
            }
            if (tabInfosAndPay[4] === "1") {
                $('#infos').append('<p id="p-rdvInfos"> Ce rendez-vous est à ' + tabInfosAndPay[5] + ', préférez-vous effectuer votre rendez-vous par visio-conférence ?</p>' +
                    '<form id="formVisio">' +
                    '<input type="radio" id="choiceYes" name="yesOrNo" value="Oui" class="inputVisio"><label for="choiceYes" class="labelVisio">Oui</label>' +
                    '<input type="radio" id="choiceNo" name="yesOrNo" value="Non" class="inputVisio" checked><label for="choiceNo" class="labelVisio">Non</label>' +
                    '</form>');
            }
            else {
                $('#infos').append('<p id="p-rdvInfos"> Ce rendez-vous est à ' + tabInfosAndPay[5] + '. La visio-conférence est indisponible pour ce créneau.</p>');
            }
            $('#infos').append(
                '<p id="p-rdvInfosSup">Informations supplémentaires :</p>' +
                '<p id="p-rdvInfosSupResult">' + tabInfosAndPay[6] + '</p>');
            $('#pay').append('<p> Montant à régler : ' + tabInfosAndPay[3] + ' euros</p>' +
                '<button id="goToFormPayment"> Payer et réserver le rendez-vous</button>');
            $('#goToFormPayment').click(function () {
                let formPayment = new FormPayment();
            });
        }).fail(function () {
            alert("erreur lors de la récupération des informations de réservation de ce jour.")
        });
    }
}