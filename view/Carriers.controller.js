sap.ui.controller("com.bf.newtrial.view.Carriers", {

    handleItemSelect: function(oEvent) {
        this.navigation.navTo("Flights", oEvent.getSource().getBindingContext());
    },

    handleListSelect : function (oEvent) {
        this.navigation.navTo("Flights", oEvent.getParameter("listItem").getBindingContext());
    },


});