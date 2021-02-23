//ne plus proposer en rdv les dates antérieurs

(function () {
    $(document).ready(function(){
        let calendarByMonth = new CalendarByMonth();
    });
}) ();

class CalendarByMonth {

    constructor() {
        this.initializeCalendar();

        this.initializeDate();
        this.showDate();

        this.createTabCalendar();
        this.showTabCalendarByMonth();

        this.configureArrow();
    }

    initializeCalendar() {
        let calendar = $('#calendar');
        calendar.empty();
        this.setCalendarInfos(calendar);
        calendar.append('<div id="calendarContainer"></div>' +
                        '<div id="clickAction"></div>');

        this.months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        this.days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    }

    setCalendarInfos(calendar) {
        calendar.append('<div id="calendarInfos">' +
                            '<div id="previous">' +
                                '<img class="imgArrow" src="images/left-arrow.png">' +
                            '</div>' +
                            '<div id ="currentDate">' +
                                '<div id="currentMonth"></div>' +
                                '<div id="currentYear"></div>' +
                            '</div>' +
                            '<div id="next">' +
                                '<img class="imgArrow" src="images/right-arrow.png">' +
                            '</div>' +
                        '</div>');
    }

    initializeDate() {
        let today = new Date();
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();
    }

    showDate() {
       $('#currentMonth').append('<p>'+ this.months[this.currentMonth] +'</p>');
       $('#currentYear').append('<p>' + this.currentYear + '</p>');
    }

    createTabCalendar() {
        let tabCalendar = new CreateTabCalendarByMonth(this.currentMonth, this.currentYear);
        this.tabCalendarByMonth = tabCalendar.getTab();
    }

    showTabCalendarByMonth() {
        //éléments de la première ligne
        for (let i = 0; i < 7; i++) {
            $('#calendarContainer').append('<div id="div'+this.days[i]+'"></div>');
            $('#div'+this.days[i]+'').append('<div class="infosCase" style="border: none"><p>'+ this.days[i] +'</p></div>');
        }
        //fin éléments de la première ligne

        //chaque case est initialisée sans créneau
        for (let x = 0; x < this.tabCalendarByMonth.length; x++) {
            for (let y = 0; y < 7; y++) {
                if (this.tabCalendarByMonth[x][y] !== undefined) {
                    $('#div'+this.days[y]+'').append('<div id="'+ this.tabCalendarByMonth[x][y].getDate() +'" class="numDate"><div>'+ this.tabCalendarByMonth[x][y].getDate() +'</div></div>');
                    let msg = "";
                    $('#'+ this.tabCalendarByMonth[x][y].getDate() +'').css({'background-color':'rgba(244,244,244,0.67)'});
                    let idNum = this.tabCalendarByMonth[x][y].getDate();
                    $('#'+ idNum +'').append('<div id="'+idNum+'nbReservations">'+ msg +'</div>');
                }
                else {
                    $('#div'+this.days[y]+'').append('<div class="undefinedCase"></div>');
                }
            }
        }

        //appel ajax pour récupérer les réservations du mois
        let self = $(this);
        $.ajax({
            url: "php/requests/getReservationsByMonth.php",
            method: "get",
            data: {
                //prendre une date qui soit toujours disponible
                date: this.tabCalendarByMonth[2][2].toISOString().slice(0, 7),
                //pour éviter des bugs, prendre le mois
                month : this.currentMonth
            }
        }).done(function (data) {
            let tabReservations = JSON.parse(data);
            //pour éviter les bugs on vérifie le mois
            if (parseInt(tabReservations[0]) !== self[0].currentMonth) {
                return;
            }
            //ajouter les dates de réservations
            for (let i = 1; i < tabReservations.length; i++) {
                let currentTabReservation = $('#'+ tabReservations[i] +'nbReservations');
                if (currentTabReservation[0].innerText === "") {
                    currentTabReservation[0].innerText = "1 créneau disponible";
                    currentTabReservation[0].data = 1;
                    $('#'+ tabReservations[i] +'')
                        .click(function () {
                            let calendarByDay = new CalendarByDay(tabReservations[i], self[0].currentMonth, self[0].currentYear);
                        })
                        .mouseleave(function () {
                            $('#'+ tabReservations[i] +'').css({'background-color':'rgba(24,186,225,0.8)'});
                        })
                        .mouseover(function () {
                            $('#'+ tabReservations[i] +'').css({'background-color':'rgba(24,186,225,0.52)'});
                        })
                        .css({'background-color':'rgba(24,186,225,0.8)'});
                }
                else {
                    //on incrémente de 1 le nombre de réservation à ce jour
                    let num = $('#'+ tabReservations[i] +'nbReservations')[0].data;
                    num++;
                    currentTabReservation[0].data = num;
                    currentTabReservation[0].innerText = + num + " créneaux disponibles";
                }
            }
        }).fail(function () {
            alert("erreur de récuparation des dates de reservation.");
        });
    }

    configureArrow() {
        let self = $(this);
        $('#previous').click(function () {
            self[0].previous();
        });
        $('#next').click(function () {
            self[0].next();
        });
    }

    previous() {
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        else {
            this.currentMonth--;
        }
        this.reloadCalendar();

    }

    next() {
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        else {
            this.currentMonth++;
        }
        this.reloadCalendar();
    }

    reloadCalendar() {
        $('#currentMonth').empty();
        $('#currentYear').empty();
        this.showDate();
        $('#calendarContainer').empty();

        this.createTabCalendar();
        this.showTabCalendarByMonth();
    }
}

