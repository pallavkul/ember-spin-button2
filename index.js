/* jshint node: true */
'use strict';

var path = require('path');
var MergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-ambari-ui-components'
  },

  included: function(appOrAddon) {
    var app = appOrAddon.app || appOrAddon;

    if (app.__emberSpinButton2IncludedInvoked) {
      return;
    }

    app.__emberSpinButton2IncludedInvoked = true;
    this._super.included && this._super.included.apply(this, arguments);

    app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  }

};
