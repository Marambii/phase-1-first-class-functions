function receivesAFunction (callback){
    const result = callback();
    return result;
}

function returnsANamedFunction(){
    function sports(){
        console.log('this is a named function')
    }
    return sports
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('this is an anonymous function.')
    };
    
 }

