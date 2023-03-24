function firstDegreeEquation() {
    let coeffA = window.document.querySelector('#coeffA');
    let coeffB = window.document.querySelector('#coeffB');
    let root = window.document.querySelector('#root');

    var a = coeffA.value;
    var b = coeffB.value;

    if (a != 0 && b != 0) { 
        // função afim
        var x = -b/a;
    } else {
        if (a !=0 && b == 0) { 
            // função linear
            var x = 0;
        } else { 
            if (a == 0 && b != 0) {
                // função constante
                var x = b/1;
            } else {
                
            }
        }
    }

    root.innerHTML = `x = ${x.toFixed(2)}`;
}