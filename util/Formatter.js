jQuery.sap.declare("com.bf.newtrial.util.Formatter");   

com.bf.newtrial.util.Formatter = {

    _percent: function(iPart, iWhole) {
        return (iPart / iWhole) * 100;
    },

    date: function (value) {
        if (value) {
            var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"}); 
            return oDateFormat.format(new Date(value));
        } else {
            return value;
        }
    },

    capacityPercent: function(iPart, iWhole) {
        try {
            return Math.round(com.bf.newtrial.util.Formatter._percent(iPart, iWhole));
        } catch (err) {
            return "Unknown";
        }
    },

    capacityState: function(iPart, iWhole) {
        var p = com.bf.newtrial.util.Formatter._percent(iPart, iWhole);
        switch (true) {
            case p > 75:
                return "Warning";
                break;

            case p < 75:
                return "Success";
                break;

            default:
                return "None";
        }
    },

};