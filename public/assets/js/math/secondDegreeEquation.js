function secondDegreeEquation() {
    let coeffA = window.document.querySelector('#coeffA');
    let coeffB = window.document.querySelector('#coeffB');
    let coeffC = window.document.querySelector('#coeffC');
    let root = window.document.querySelector('#root');

    var a = coeffA.value;
    var b = coeffB.value;
    var c = coeffC.value;

    var delta = b*b-4*a*c;

    if (delta < 0) {
        var x1 = 0;
        var x2 = x1;
    } else {
        if (delta == 0) {
            var x1 = (-b+Math.sqrt(delta))/(2*a);
            var x2 = x1;
        } else {
            var x1 = (-b+Math.sqrt(delta))/(2*a);
            var x2 = (-b-Math.sqrt(delta))/(2*a);
        }
    }

    root.innerHTML = `Δ = ${delta.toFixed(2)}&nbsp;&nbsp;&nbsp;e&nbsp;&nbsp;&nbsp;x₁ = ${x1.toFixed(2)}&nbsp;&nbsp;&nbsp;e&nbsp;&nbsp;&nbsp;x₂ = ${x2.toFixed(2)}`;
}