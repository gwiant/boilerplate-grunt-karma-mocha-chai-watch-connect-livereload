require.config({
    baseUrl: '../../assets/js',

    paths: {
        sinon: '../../test/lib/sinon-1.10.2',
        domReady: '../../test/lib/domReady-2.0.1',
        chai: '../../test/lib/chai-1.9.1',
    },

    shim: {
        sinon: { exports: 'sinon' },
        "Foo": { exports: "Foo" }
    }
});
