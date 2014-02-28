jQuery.sap.declare("com.bf.newtrial.util.Formatter");   

com.bf.newtrial.util.Formatter = {

    _percent: function(iPart, iWhole) {
        return (iPart / iWhole) * 100;
    },

    capacityPercent: function(iPart, iWhole) {
        try {
            return com.bf.newtrial.util.Formatter._percent(iPart, iWhole);
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