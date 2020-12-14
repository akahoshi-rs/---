const select_space = document.getElementById('select_space');
let _dropzone = document.getElementsByClassName('dropzone');
let currentSpace = 1;

function space_num() {

    for (i = 1; i <= 3; i++) {
        let op = document.createElement('option');
        op.value = i;
        op.text = i;
        select_space.appendChild(op);
    }
    for (let i = 1; i <= 1; i++) {
        let _space_div = document.createElement('div');
        _space_div.id = 'outer-dropzone';
        _space_div.className = 'dropzone space' + i;
        ContentsArea.appendChild(_space_div);
    }
    document.getElementsByClassName('dropzone')[0].style.top = '40px';
    document.getElementsByClassName('dropzone')[0].style.height = 'calc(100vh - 40px)';

}

function space_delete() {
    for (let i = 0; i < _dropzone.length; i++) {
        _dropzone[i].remove();
    }
}

function space_create() {
    let input_space = document.querySelector("select[name=space]")
    let currentSpace = input_space.value;
    space_delete();

    if (currentSpace == 1) {
        space_delete();
        for (let i = 1; i <= 1; i++) {
            let _space_div = document.createElement('div');
            _space_div.id = 'outer-dropzone';
            _space_div.className = 'dropzone space' + i;
            ContentsArea.appendChild(_space_div);
        }
        document.getElementsByClassName('dropzone')[0].style.top = '40px';
        document.getElementsByClassName('dropzone')[0].style.height = 'calc(100vh - 40px)';

    } else if (currentSpace == 2) {
        space_delete();
        for (let i = 1; i <= 2; i++) {
            let _space_div = document.createElement('div');
            _space_div.id = 'outer-dropzone';
            _space_div.className = 'dropzone space' + i;
            ContentsArea.appendChild(_space_div);
        }
        document.getElementsByClassName('space1')[0].style.top = '40px';
        document.getElementsByClassName('space2')[0].style.bottom = '0';
        document.getElementsByClassName('dropzone')[0].style.height = 'calc((100vh - 40px)/2)';
        document.getElementsByClassName('dropzone')[1].style.height = 'calc((100vh - 40px)/2)';

    } else if (currentSpace == 3) {
        space_delete();
        for (let i = 1; i <= 3; i++) {
            let _space_div = document.createElement('div');
            _space_div.id = 'outer-dropzone';
            _space_div.className = 'dropzone space' + i;
            ContentsArea.appendChild(_space_div);
        }
        document.getElementsByClassName('space1')[0].style.top = '40px';
        document.getElementsByClassName('space2')[0].style.top = 'calc(((100vh - 40px) / 3) + 40px)';
        document.getElementsByClassName('space3')[0].style.bottom = '0px';
        document.getElementsByClassName('dropzone')[0].style.height = 'calc((100vh - 40px)/3)';
        document.getElementsByClassName('dropzone')[1].style.height = 'calc((100vh - 40px)/3)';
        document.getElementsByClassName('dropzone')[2].style.height = 'calc((100vh - 40px)/3)';

    }
}

space_num();

window.onload = function () {
    select_space.addEventListener('change', space_create);
    let _dropzone = document.getElementsByClassName('dropzone');
}