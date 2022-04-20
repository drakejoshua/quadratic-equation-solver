var aInput = document.getElementsByTagName("input").item(0);
var bInput = document.getElementsByTagName("input").item(1);
var cInput = document.getElementsByTagName("input").item(2);
var x2 = document.getElementsByTagName("input").item(4);
var x1 = document.getElementsByTagName("input").item(3);



//retrieve the input's values
function retrieveValues() {
    //check if no values were provided
    if ( aInput.value == "" || bInput.value == "" || cInput.value == "" ) {
        alert("no values provided");
    //check if invalid values were provided
    } else if ( isNaN( Number(aInput.value) ) == true || isNaN( Number(bInput.value) ) == true || isNaN( Number(cInput.value) ) == true ) {
        alert("invalid values provided");
    //if no invalid values were provied, solve the equations
    } else {
        calculateX1( Number(aInput.value), Number(bInput.value), Number(cInput.value) );
        calculateX2( Number(aInput.value), Number(bInput.value), Number(cInput.value) );
    }
}

function calculateX1( a, b, c ) {
    var result, bSquared, productOfAAndC, productOfA, sqrt;

    negativeB = (-b);
    bSquared = b**2;
    productOfAAndC = 4*a*c;
    productOfA = 2*a;

    if ( Math.sign( bSquared - productOfAAndC ) == -1 ) {
        sqrt = - ( Math.sqrt( ( Math.abs( bSquared - productOfAAndC ) ) ) );
        result = ( negativeB + sqrt ) / productOfA;
    } else {
        sqrt = Math.sqrt( bSquared - productOfAAndC );
        result = ( negativeB + sqrt ) / productOfA;
    }

    x1.value = result.toFixed(4);
}

function calculateX2( a, b, c ) {
    var result, bSquared, productOfAAndC, productOfA, sqrt;

    negativeB = (-b);
    bSquared = b**2;
    productOfAAndC = 4*a*c;
    productOfA = 2*a;

    if ( Math.sign( bSquared - productOfAAndC ) == -1 ) {
        sqrt = - ( Math.sqrt( ( Math.abs( bSquared - productOfAAndC ) ) ) );
        result = ( negativeB - sqrt ) / productOfA;
    } else {
        sqrt = Math.sqrt( bSquared - productOfAAndC );
        result = ( negativeB - sqrt ) / productOfA;
    }

    x2.value = result.toFixed(4);
}