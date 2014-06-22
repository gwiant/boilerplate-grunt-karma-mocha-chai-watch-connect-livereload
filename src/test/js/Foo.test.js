define(["chai", "Foo"], function (chai, Foo) {

	"use strict";

	var expect = chai.expect;

	describe("foo", function () {

		describe("set", function () {

			it("should set bar", function () {

				// given
				var bar = "bar";
				var foo = new Foo();
				
				// when 
				foo.setBar(bar);

				// then 
				expect(foo.bar).to.equal(bar);

			});

		});

	});

});