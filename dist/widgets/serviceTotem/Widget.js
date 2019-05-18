define(['dojo/_base/declare', 'jimu/BaseWidget', 'jimu/utils', 'dojo/_base/html', 'jimu/WidgetManager', 'bootstrap/Dropdown', 'bootstrap/Tab', 'bootstrap/Modal', 'dojo/domReady!'], function (declare, BaseWidget, utils, html, widgetManager) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {

        // Custom widget code goes here

        baseClass: 'service-totem',
        // this property is set by the framework when widget is loaded.
        // name: 'serviceTotem',
        // add additional properties here

        //methods to communication with app container:
        postCreate: function postCreate() {
            this.inherited(arguments);
            console.log('serviceTotem::postCreate');
        },

        startup: function startup() {
            this.inherited(arguments);
            console.log('serviceTotem::startup');
        },

        onOpen: function onOpen() {
            console.log('serviceTotem::onOpen');
            if (this.appConfig.theme.name === "BoxTheme" || this.appConfig.theme.name === "DartTheme" || this.appConfig.theme.name === "LaunchpadTheme") {
                this.inherited(arguments);
            } else {
                html.place(this.domNode, this.map.id);
                html.setStyle(this.domNode, 'bottom', '0px');
                html.setStyle(this.domNode, 'position', 'absolute');
            }
        },

        // onClose: function(){
        //   console.log('serviceTotem::onClose');
        // },

        // onMinimize: function(){
        //   console.log('serviceTotem::onMinimize');
        // },

        // onMaximize: function(){
        //   console.log('serviceTotem::onMaximize');
        // },

        // onSignIn: function(credential){
        //   console.log('serviceTotem::onSignIn', credential);
        // },

        // onSignOut: function(){
        //   console.log('serviceTotem::onSignOut');
        // }

        // onPositionChange: function(){
        //   console.log('serviceTotem::onPositionChange');
        // },

        // resize: function(){
        //   console.log('serviceTotem::resize');
        // }

        _close: function _close() {
            this.widgetManager.closeWidget(this.id);
        }

    });
});
//# sourceMappingURL=Widget.js.map
