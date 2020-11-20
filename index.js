var app = {

    dateAddDel : function(dateType, nNumber, type){

        var year = dateType.getFullYear();
        var month = dateType.getMonth()+1;
        var day = dateType.getDate();
        
        var yy = parseInt(year);
        var mm = parseInt(month);
        var dd = parseInt(day);
        
        var date = null;

        if(type == "d"){
            date = new Date(yy, mm - 1, dd + nNumber);
        }
        else if(type == "m"){
            date = new Date(yy, mm - 1, dd + (nNumber * 31));
        }
        else if(type == "y"){
            date = new Date(yy + nNumber, mm - 1, dd);
        }

        this.dateFormetYmdHms(date);
        
    },

    dateFormetYmdHms : function(dateType){

        yy = dateType.getFullYear();
        
        mm = dateType.getMonth() + 1; 
        mm = (mm < 10) ? '0' + mm : mm;
        
        dd = dateType.getDate(); 
        dd = (dd < 10) ? '0' + dd : dd;
        
        hh = dateType.getHours(); 
        hh = (hh < 10) ? '0' + hh : hh;

        min = dateType.getMinutes(); 
        min = (min < 10) ? '0' + min : min;

        ss = dateType.getSeconds(); 
        ss = (ss < 10) ? '0' + ss : ss;

        return '' + yy + '-' +  mm  + '-' + dd + " " + hh + ":" + mm + ":" + ss;

    }
}


module.exports = app;