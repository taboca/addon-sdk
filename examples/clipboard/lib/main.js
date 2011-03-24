const clip = require('clipboard');

const widgets = require('widget');
const data = require('self').data;

exports.main = function() {
 
  var dataimage = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAAFjH/EfgAgAAACBjSFJNAAB6JQAAgIMAAPn/AACA5gAAdS4AAOpfAAA6lwAAF29p5MQrAAABaElEQVR4nGL4f/w/SQgggBhI1QAQQDANR/7/P0aUBoAAAms4BtYAZOT/AKHWX/9P/Qehqf/+N/7+P+X3/5P//5+AagAIIJgGIEr99v/0fxA48/+/w5f/Du9BjId/QGTWb7gGgACCaQDyI9793/Dzf+vX/0Gf/jPc+M9w8T/Di/+Gb/9Xf/2f9RHuJIAAgmkAOsD32X/mp/8Z7v9nuPWf4dR/hkP/Gc79Z7j+n+n+/5zPcA0AAQTzNFDD4n//ve/8Zzz2nwGIDoM1gJHNlf9HEZ4GCCCYhtNgp6f9+u/z8D/bSbCGIyBke/V/z1+4B4AIIIBQNQBR/c//Pg/+M4I12F3/X/UbJIWkASCAMDQAUdDX/x63QartvoK4p1DiASCAYBpOImkAIu+H/+1vQdmoGgACCClpnELSANQf9h3EOI2uASCAkDScRHUYBJ0GiyNpAAggJA0nwIadRkUnUXwMRAABRHJqBQgwALsonvvjW7ZfAAAAAElFTkSuQmCC"
  clip.set(dataimage,"image");
  var widget = widgets.Widget({
    label: 'Clip',
    contentURL: data.url("data:image/jpg;base64,"+clip.get("image")),
    //contentScriptWhen: 'ready',
    //contentScriptFile: data.url('widget/widget.js'),
    onMessage: function(message) {
      if (message == 'left-click') {
        console.log('activate/deactivate');
        }
      else if (message == 'right-click') {
        console.log('show annotation list');
      }
    }
  });

  console.log(clip.get("image"));

}
