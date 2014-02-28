sap.ui.controller("com.bf.newtrial.view.Carriers", {

    handleItemSelect: function(oEvent) {
        this.navigation.navTo("Flights", oEvent.getSource().getBindingContext());
    },

    handleListSelect: function (oEvent) {
        this.navigation.navTo("Flights", oEvent.getParameter("listItem").getBindingContext());
    },

    handleSearch: function(oEvent) {
        var oBinding = this.getView().byId("list").getBinding("items");
        var aFilters = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery && sQuery.length) {
            aFilters.push(new sap.ui.model.Filter("Carrname", sap.ui.model.FilterOperator.Contains, sQuery));
        }
        oBinding.filter(aFilters);
    }

});