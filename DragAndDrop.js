function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
};
// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: TermBoxes,
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.5,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        // draggableElement.textContent = 'Dragged in'
        if (document.getElementsByClassName('drop-target')[0].classList.contains('space1')) {
            Area1(event);
        } else if (document.getElementsByClassName('drop-target')[0].classList.contains('space2')) {
            Area2(event);
        } else if (document.getElementsByClassName('drop-target')[0].classList.contains('space3')) {
            Area3(event);
        };
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        // event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
        // event.relatedTarget.textContent = 'Dropped'
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
    }
})

interact('.drag-drop')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        // dragMoveListener from the dragging demo above
        listeners: { move: dragMoveListener }
    })

function Area1(event) {
    event.relatedTarget.classList.add('area1');
    // event.relatedTarget.style.border = "3px solid" + Sub1Color.value;
    if (event.relatedTarget.classList.contains('area2')) {
        event.relatedTarget.classList.remove('area2');
    } else if (event.relatedTarget.classList.contains('area3')) {
        event.relatedTarget.classList.remove('area3');
    };
};

function Area2(event) {
    event.relatedTarget.classList.add('area2');
    // event.relatedTarget.style.border = "3px solid" + Sub2Color.value;
    if (event.relatedTarget.classList.contains('area1')) {
        event.relatedTarget.classList.remove('area1');
    } else if (event.relatedTarget.classList.contains('area3')) {
        event.relatedTarget.classList.remove('area3');
    };
}

function Area3(event) {
    event.relatedTarget.classList.add('area3');
    // event.relatedTarget.style.border = "3px solid" + Sub3Color.value;
    if (event.relatedTarget.classList.contains('area2')) {
        event.relatedTarget.classList.remove('area2');
    } else if (event.relatedTarget.classList.contains('area1')) {
        event.relatedTarget.classList.remove('area1');
    };
}

// function Append() {
//     for (let i = 0; i < _ContentsTextArray.length; i++) {
//         if (TermBoxes[i].classList.contains('area1')) {
//             ListPushes[i].style.boxShadow = "inset 0 2px 6px" + Sub1Color.value;
//             this.innerHTML = event.relatedTarget.innerHTML;
//             TermList[0].appendChild(ListPushes[i]);
//         };
//     };
//     for (let i = 0; i < _ContentsTextArray.length; i++) {
//         if (TermBoxes[i].classList.contains('area2')) {
//             ListPushes[i].style.boxShadow = "inset 0 2px 6px" + Sub2Color.value;
//             this.innerHTML = event.relatedTarget.innerHTML;
//             TermList[1].appendChild(ListPushes[i]);
//         };
//     };
//     for (let i = 0; i < _ContentsTextArray.length; i++) {
//         if (TermBoxes[i].classList.contains('area3')) {
//             ListPushes[i].style.boxShadow = "inset 0 2px 6px" + Sub3Color.value;
//             this.innerHTML = event.relatedTarget.innerHTML;
//             TermList[2].appendChild(ListPushes[i]);
//         };
//     };
// }