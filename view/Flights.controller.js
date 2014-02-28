jQuery.sap.require("com.bf.newtrial.util.Formatter");
sap.ui.controller("com.bf.newtrial.view.Flights", {

    onInit: function(oEvent) {
        console.log("FLIGHTS ON INIT");
        this.getView().byId("idPageFlights").addEventDelegate({
            onBeforeShow: function(oEvent) {
                console.log("ON BEFORE SHOW");
            }
        });
    },

    handleNavButtonPress: function(oEvent) {
        this.navigation.navBack();
    }

});