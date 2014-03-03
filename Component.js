jQuery.sap.declare("com.bf.newtrial.Component");

sap.ui.core.UIComponent.extend("com.bf.newtrial.Component", {
    metadata: {
        name: "NTK New Trial",
        version: "1.0",
        dependencies: {
            libs: ["sap.m"]
        },
        config: {
            serviceConfig: {
                baseURL: "http://gblonsup01:8080",
                appName: "com.bf.sflight"
            }
        }

    },

    init : function() {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        // set device model for responsiveness
        var deviceModel = new sap.ui.model.json.JSONModel({
            isPhone : jQuery.device.is.phone,
            isNotPhone : !jQuery.device.is.phone,
            listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
            listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
        });
        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");
    },


    createRootView: function(sAPPCID) {
        var mServiceConfig = this.getMetadata().getConfig().serviceConfig;
        var oView = sap.ui.view({
            viewName: "com.bf.newtrial.view.Root",
            type: sap.ui.core.mvc.ViewType.XML,
            viewData: { component: this }
        });

        // Create the OData model and set against the view
        var oModel = new sap.ui.model.odata.ODataModel(
            mServiceConfig.baseURL + "/" + mServiceConfig.appName,
            true,
            "Test",
            "Test",
            {
                'X-SUP-APPCID': sAPPCID
            }
        );

        oView.setModel(oModel);
        return oView;
    },

    createContent: function() {

        var mServiceConfig = this.getMetadata().getConfig().serviceConfig;

        // First check in local storage
        var sAPPCID = localStorage.APPCID;

        if (!sAPPCID) {
            var oSMPModel = new sap.ui.model.odata.ODataModel(
                mServiceConfig.baseURL + "/odata/applications/latest/" + mServiceConfig.appName,
		true
            );

            oSMPModel.create('/Connections', { DeviceType: "Android" }, null, 

                // Success
                jQuery.proxy(function(mResult) {

                    // Store the APPCID locally
                    localStorage.APPCID = mResult.ApplicationConnectionId;

                    // Start the application with the root view
                    return this.getRootView(sAPPCID);

                }, this),

                // Error
                jQuery.proxy(function(oError) {

                    jQuery.sap.log.error("Connection creation failed");
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.alert("OH NOES!");

                }, this)
            );

        } else {
            return this.createRootView(sAPPCID);
        }
    }

});
