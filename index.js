var app = {

    /**
     * 
     * @param {*} dateType : Enter the time you want to change as a string. ex) 2020-10-10
     * @param {*} nNumber : Put a number. However, when subtracting, a number including a hyphen (-) is added. ex) -2, 2
     * @param {*} type : Enter the specified type. date: d, month: m, year: y
     */
    dateAddDel : function(dateType, nNumber, type){

        dateType = dateType === undefined ? new Date() : new Date(dateType);
        nNumber = nNumber === undefined ? 0 : nNumber;
        type = type === undefined ? null : type;

        var year = dateType.getFullYear();
        var month = dateType.getMonth()+1;
        var day = dateType.getDate();
        
        var yy = parseInt(year);
        var mm = parseInt(month);
        var dd = parseInt(day);
        
        var date = type === null ? dateType : null;

        if(type == "d"){
            date = new Date(yy, mm - 1, dd + nNumber);
        }else if(type == "m"){
            date = new Date(yy, mm - 1, dd + (nNumber * 31));
        }else if(type == "y"){
            date = new Date(yy + nNumber, mm - 1, dd);
        }

        var data = dateFormetYmdHms(new Date(date));
        return data;
    },

    dataUtcChange : function(date){

        date = (date === undefined) ? new Date() : new Date(date);

        var returnData = null;
        
        if(!Date.prototype.toISOString){

            returnData = date.getUTCFullYear() +
            '-' + pad(date.getUTCMonth() + 1) +
            '-' + pad(date.getUTCDate()) +
            'T' + pad(date.getUTCHours()) +
            ':' + pad(date.getUTCMinutes()) +
            ':' + pad(date.getUTCSeconds()) +
            '.' + (date.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    
        }else{
            returnData = date.toISOString();
        }

        var data = dateFormetUtcYmdHms(returnData);

        return data;
    }
}

pad = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

dateFormetYmdHms = (dateType, type) => {

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

dateFormetUtcYmdHms = function(dateType){

    var data = dateType.split('T');

    var hms = data[1].substring(0, data[1].indexOf('.'));

    return data[0] + ' ' + hms;
}

app.dataUtmChange('2020-11-24 05:23:42');


module.exports = app;