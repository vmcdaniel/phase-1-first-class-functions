const receivesAFunction = function (thing) {
    return thing()
}

const returnsANamedFunction = () => {
    function namedFunction () {

    }
    return namedFunction;
    }

const returnsAnAnonymousFunction = () => {
    return function() {

    }
}