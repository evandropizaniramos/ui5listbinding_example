sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("lst.listbinding.controller.App", {
		onInit: function () {
			var oMaterialList = { 
				material: [{
					id: "80009000",
					description: "Lenovo X250",
					type: "1"
				}, {
					id: "80009010",
					description: "HP Probook 440 G5",
					type: "1"
				}, {
					id: "90009000",
					description: "Microsoft Sculpt",
					type: "2"
				}]
			};
			
			var oView = this.getView();
			var oModel = new sap.ui.model.json.JSONModel(oMaterialList);
			oView.setModel(oModel);
			
			sap.ui.getCore().getMessageManager().registerObject(oView, true);
			
			var oi18nModel = oView.getModel("i18n");
			var oResourceBundle = oi18nModel.getResourceBundle();
			oResourceBundle.getText("message", ["Evandro"]);
		},
		
		onPress: function(oEvent) {
			debugger;
			
			var oSource = oEvent.getSource();
			var oBindingContext = oSource.getBindingContext();
			var sPath = oBindingContext.getPath();
			
			var oView = this.getView();
			var oVbox = oView.byId("boxForm");
			oVbox.bindElement(sPath);
			
			// var oInput = oView.byId("inputMaterialId");
			// oInput.bindElement(sPath);
			// oInput = oView.byId("inputMaterialDesc");
			// oInput.bindElement(sPath);
			// oInput = oView.byId("inputMaterialType");
			// oInput.bindElement(sPath);
		},
		
		formatType: function(sType) {
			if (sType === "1") {
				return "Laptop";
			} else if (sType === "2") {
				return "Acessórios";
			}
		}
	});
});