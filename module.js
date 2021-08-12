

class Forecast  {
    constructor(item){
        this.date=item.valid_date;
        this.description=item.weather.description;
    }
}
module.export=Forecast;