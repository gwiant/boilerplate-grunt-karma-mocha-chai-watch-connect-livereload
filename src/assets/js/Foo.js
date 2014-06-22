window.Foo = (function (window) {

	"use strict";

	function Foo () {
	    this.bar = null;
	}

	Foo.prototype.setBar = function (bar) {
	    this.bar = bar;
	};

	return Foo;

}(window));