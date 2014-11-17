# sp.signature

Capture signatures easy peasy lemon squeezy. Converts to SVG format for proper storage.

![Screenshot](https://s3.amazonaws.com/tz-sp-signature/2014-11-17+11_00_41.gif)

## How to use

**Alloy View**

```xml
<Alloy>
	<Window id="win" onLoad="doLoad">
	    <Widget id="sigCapture" src="sp.signature" />
	</Window>
</Alloy>
```

**Alloy Controller**

```javascript
// Load Signature Capture widget
$.sigCapture.init({
  borderColor:"#444",
  top:5,
  width:(Alloy.Globals.deviceHeight-50),
  height:(Alloy.Globals.deviceWidth-100)
});

// Capture Signature
$.sigCapture.save();
```

## Methods

**Init**

Instantiate the canvas element.

**Save**

Generate SVG file. Fires a callback.

**Clear**

**Undo**

## Events

**app:signature:capture**

**app:signature:save**

Generate SVG file. Callback contains string representation. Must convert to Buffer before uploading to server as a file object.

**app:signature:undo**

Clear last gesture.

**app:signature:modified**

Determine if a signature has been started.

## License

Author: Terry Z Martin, [@tzmartin](http://twitter.com/tzmartin)

Copyright 2014 Semantic Press.  All rights reserved.