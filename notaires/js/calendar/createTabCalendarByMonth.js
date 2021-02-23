class CreateTabCalendarByMonth {
    constructor(month, year) {
        this.currentMonth = month;
        this.currentYear = year;
        this.createTab();
    }

    createTab() {
        this.tabCalendarByMonth = [];
        this.tabCalendarByMonth[0] = [];
        let countWeeksByMonth = 0;
        for (let i = 1;;i++) {
            let currentDate = new Date(this.currentYear, this.currentMonth, i);
            if (currentDate.getMonth() !== this.currentMonth) {
                break;
            }
            //dimanche correspond au 0
            if (currentDate.getDay() === 0) {
                this.tabCalendarByMonth[countWeeksByMonth][6] = currentDate;
                countWeeksByMonth++;
                let tmpDate = new Date(this.currentYear, this.currentMonth, i + 1);
                if (tmpDate.getMonth() !== this.currentMonth) {
                    break;
                }
                this.tabCalendarByMonth[countWeeksByMonth] = [];
            }
            else {
                this.tabCalendarByMonth[countWeeksByMonth][currentDate.getDay()-1] = currentDate;
            }
        }
    }

    getTab() {
        return this.tabCalendarByMonth;
    }
}