class CalendarByDay {
    constructor(date, month, year) {
        this.months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        this.date = date;
        this.month = month;
        this.year = year;

        this.day = $('#'+ this.date +'')[0].parentElement.childNodes[0].textContent;

        let clickAction = $('#clickAction');
        clickAction.empty();
        clickAction.append('<div id="calendarResult"></div>');
        let calendarResult = $('#calendarResult');
        calendarResult.append('<div><p>Rendez-vous pour le ' + this.day + ' ' + this.date + ' ' + this.months[this.month] + ' ' + this.year + ' :</p></div>');

        this.getHoursRdv();
    }

    getHoursRdv() {
        let calendarResult = $('#calendarResult');
        calendarResult.append('<div id="hoursRDV"></div><div id="divButtonReturnOnCalender"><button id="returnOnCalendar"> Retour </button></div>');
        $('#returnOnCalendar').click(function () {
            $('#clickAction').empty();
        });

        this.currentDate = new Date(this.year, this.month, this.date + 1);
        let self = $(this);
        $.ajax({
            url: "php/requests/getReservationsByDay.php",
            method: "get",
            data: {
                date: this.currentDate.toISOString().slice(0,10)
            }
        }).done(function (data) {
            let tabReservations = JSON.parse(data);
            //pour éviter les bugs on vérifie le jour
            if (tabReservations[0] !== self[0].currentDate.toISOString().slice(0,10)) {
                return;
            }

            let hoursRDV = $('#hoursRDV');

            for (let i = 1; i < tabReservations.length; i = i + 3) {
                hoursRDV.append('<div id= numRDV' + tabReservations[i] + '>' +
                                '<p>' + tabReservations[i + 1] + '</p>' +
                                '<p>' + tabReservations[i + 2] + '</p>' +
                                '</div>');
                $('#numRDV' + tabReservations[i] +'').click(function () {
                    let infosAndPay = new InfosAndPay(this.id.slice(6));
                });
            }
        }).fail(function () {
            alert("erreur lors de la récupération des heures de rendez-vous");
        });
    }
}