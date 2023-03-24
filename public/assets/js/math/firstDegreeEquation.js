function firstDegreeEquation() {
    let coeffA = window.document.querySelector('#coeffA');
    let coeffB = window.document.querySelector('#coeffB');
    let root = window.document.querySelector('#root');

    let a = coeffA.value;
    let b = coeffB.value;

    if (a != 0 && b != 0) { 
        // função afim
        var x = -b/a;
    } else {
        if (a !=0 && b == 0) { 
            // função linear
            var x = -b/a;
        } else { 
            // função constante
            var x = b;
        }
    }

    root.innerHTML = `x = ${x.toFixed(2)}`;
}