
// Test set and get image from clipboard
exports.testWithImage = function(test) { 
  var clip = require("clipboard");
  var dataimage = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAAFjH/EfgAgAAACBjSFJNAAB6JQAAgIMAAPn/AACA5gAAdS4AAOpfAAA6lwAAF29p5MQrAAABaElEQVR4nGL4f/w/SQgggBhI1QAQQDANR/7/P0aUBoAAAms4BtYAZOT/AKHWX/9P/Qehqf/+N/7+P+X3/5P//5+AagAIIJgGIEr99v/0fxA48/+/w5f/Du9BjId/QGTWb7gGgACCaQDyI9793/Dzf+vX/0Gf/jPc+M9w8T/Di/+Gb/9Xf/2f9RHuJIAAgmkAOsD32X/mp/8Z7v9nuPWf4dR/hkP/Gc79Z7j+n+n+/5zPcA0AAQTzNFDD4n//ve/8Zzz2nwGIDoM1gJHNlf9HEZ4GCCCYhtNgp6f9+u/z8D/bSbCGIyBke/V/z1+4B4AIIIBQNQBR/c//Pg/+M4I12F3/X/UbJIWkASCAMDQAUdDX/x63QartvoK4p1DiASCAYBpOImkAIu+H/+1vQdmoGgACCClpnELSANQf9h3EOI2uASCAkDScRHUYBJ0GiyNpAAggJA0nwIadRkUnUXwMRAABRHJqBQgwALsonvvjW7ZfAAAAAElFTkSuQmCC"
  test.assertEqual(clip.set(dataimage,"image"), true, "clip test = true");
  test.assertEqual(clip.get("image").length, dataimage.length, "clip test = true");
};

// Test the typical use case, setting & getting with no flavors specified
exports.testWithNoFlavor = function(test) {
  var contents = "hello there";
  var flavor = "text";
  var fullFlavor = "text/unicode";
  var clip = require("clipboard");
  // Confirm we set the clipboard
  test.assert(clip.set(contents));
  // Confirm flavor is set
  test.assertEqual(clip.currentFlavors[0], flavor);
  // Confirm we set the clipboard
  test.assertEqual(clip.get(), contents);
  // Confirm we can get the clipboard using the flavor
  test.assertEqual(clip.get(flavor), contents);
  // Confirm we can still get the clipboard using the full flavor
  test.assertEqual(clip.get(fullFlavor), contents);
};

// Test the slightly less common case where we specify the flavor
exports.testWithFlavor = function(test) {
  var contents = "<b>hello there</b>";
  var flavor = "html";
  var fullFlavor = "text/html";
  var clip = require("clipboard");
  test.assert(clip.set(contents, flavor));
  test.assertEqual(clip.currentFlavors[0], flavor);
  // Confirm default flavor returns null
  test.assertEqual(clip.get(), null);
  test.assertEqual(clip.get(flavor), contents);
  test.assertEqual(clip.get(fullFlavor), contents);
};

// Test that the typical case still works when we specify the flavor to set
exports.testWithRedundantFlavor = function(test) {
  var contents = "<b>hello there</b>";
  var flavor = "text";
  var fullFlavor = "text/unicode";
  var clip = require("clipboard");
  test.assert(clip.set(contents, flavor));
  test.assertEqual(clip.currentFlavors[0], flavor);
  test.assertEqual(clip.get(), contents);
  test.assertEqual(clip.get(flavor), contents);
  test.assertEqual(clip.get(fullFlavor), contents);
};

exports.testNotInFlavor = function(test) {
  var contents = "hello there";
  var flavor = "html";
  var clip = require("clipboard");
  test.assert(clip.set(contents));
  // If there's nothing on the clipboard with this flavor, should return null
  test.assertEqual(clip.get(flavor), null);
};
// TODO: Test error cases.
