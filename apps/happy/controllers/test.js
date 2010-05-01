// ==========================================================================
// Project:   Happy.testController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Happy */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Happy.testController = SC.ObjectController.create(
/** @scope Happy.testController.prototype */ {

	fetch: function() {
		
		SC.Request.getUrl('http://picasaweb.google.com/data/feed/api/user/ido.ran')
							.xml()
							.notify(this, this.didFetch)
							.send();
  },

	didFetch: function(response) {
		if (SC.ok(response)) {
			this.set('content', 'fetch!!!');
		} else {
			this.set('content', response);
		}
	}

}) ;
