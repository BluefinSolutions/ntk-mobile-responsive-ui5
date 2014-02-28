sap.ui.controller("com.bf.newtrial.view.Root", {

    onInit: function() {

        var giveNavigation = function(oPage) {
            var oController = oPage.getController();
            if (oController) {
                oController.navigation = this;
            }
        };

        // Use root control to give child page views this as navigation
        this.oRootControl = this.getView().byId("idRootControl");
        this.oRootControl.getMasterPages().forEach(jQuery.proxy(giveNavigation, this));
        this.oRootControl.getDetailPages().forEach(jQuery.proxy(giveNavigation, this));

    },

    navTo: function(sId, oContext) {
        var oTargetPage = this.getView().byId(sId);
        oTargetPage.setBindingContext(oContext);
        this.oRootControl.toDetail(oTargetPage);
    },

    navBack: function() {
        this.oRootControl.backToTopMaster();
    }
    
});