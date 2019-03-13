
var moverclass = {
    /**
     * 
     * @returns {undefined}
     */
    __init: function () {
        
        var elem = document.querySelector('.wrapper'),
                div = document.querySelector('.move'),
                x = 0,
                y = 0,
                mousedown = false;

        // div event mousedown
        div.addEventListener('mousedown', function (e) {
            // maus state auf true setzen
            mousedown = true;
            // offset abziehen
            x = div.offsetLeft - e.clientX;
            y = div.offsetTop - e.clientY;
        }, true);

        // div event mouseup
        div.addEventListener('mouseup', function (e) {
            // maus state auf false setzen
            mousedown = false;
        }, true);

        // element mousemove um zu stoppen
        elem.addEventListener('mousemove', function (e) {
            e.preventDefault();
            // Ist maus gedruekt
            if (mousedown) {
                // jetzt rechnen wir die differenz rauf
                div.style.left = e.clientX + x + 'px';
                div.style.top = e.clientY + y + 'px';
            }
        }, true);

    }
};

moverclass.__init();