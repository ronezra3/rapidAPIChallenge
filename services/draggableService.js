app.service('draggableService', function (storageService) {

    this.init = function (itemSelector) {

        setPreviousLocations(itemSelector);

        interact('.draggable')
            .draggable({
                inertia: true,
                restrict: {
                    restriction: "parent",
                    endOnly: true,
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                },
                autoScroll: true,

                onend: function (event) {
                    var textEl = event.target.querySelector('p');
                },
                onmove: function (event) {
                    var target = event.target,
                        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                    storageService.save('data-y', y);
                    storageService.save('data-x', x);
                },
            });



    }

    function setPreviousLocations(itemSelector) {
        var x = storageService.getItem("data-x");
        var y = storageService.getItem("data-y");
        var item = document.getElementById(itemSelector);

        item.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        item.setAttribute('data-x', x);
        item.setAttribute('data-y', y);
    }
});