var args = arguments[0] || {};

$.sigCapture.setUrl(WPATH('sigsvg.html'));


$.init = function(args) {
  if (args) {
    
    delete args.id;
    var props = {
      width:Alloy.Globals.deviceWidth,
      height:Alloy.Globals.deviceHeight
    };
    // Style the widget
    $.sigCapture.applyProperties(_.extend(props,args));
  }
  
  // Initialize canvas
  $.sigCapture.evalJS('createSignature({width:'+args.width+',height:'+args.height+'});');
};

$.save = function() {
  $.sigCapture.evalJS('capture()');
};

$.clear = function() {
  $.sigCapture.evalJS('clear()');
};

$.undo = function() {
  $.sigCapture.evalJS('undo()');
};

$.setWidth = function(w) {
  $.sigCapture.evalJS('setViewPortWidth('+w+')');
};