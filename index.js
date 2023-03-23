function receivesAFunction (spy) {
    return spy();
}

function returnsANamedFunction(){
    return function sayHello(){
        console.log("Hello");
    }
}

function returnsAnAnonymousFunction() {
    return function (){
        return "I'm an anonymous function"
    }
}