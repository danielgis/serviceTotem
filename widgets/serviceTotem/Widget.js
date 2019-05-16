define([
    'dojo/_base/declare', 
    'jimu/BaseWidget',
    'jimu/utils',
    'dojo/_base/html',
    // 'jimu/PanelManager',
    'dojo/domReady!'
    ],function(
        declare, 
        BaseWidget,
        utils,
        html
        // PanelManager
        ) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'service-totem',
    // this property is set by the framework when widget is loaded.
    // name: 'serviceTotem',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('serviceTotem::postCreate');
    },

    startup: function() {
      this.inherited(arguments);
      console.log('serviceTotem::startup');
    },

    onOpen: function(){
      console.log('serviceTotem::onOpen');

      var position = {
        left: "0px",
        right: "0px",
        bottom: "0px",
        height: 150,
      };

      var style = utils.getPositionStyle(position);
      style.position = 'absolute';
      html.place(this.domNode, this.map.id);
      html.setStyle(this.domNode, style);
      html.setStyle(this.domNode, 'background-color', '#ffffff')
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

    //methods to communication between widgets:

  });

});
