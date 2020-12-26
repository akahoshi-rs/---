const select_space = document.getElementById('select_space');
let _dropzone = document.getElementsByClassName('space');
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
        _space_div.className = 'space dropzone space' + i;
        ContentsArea.appendChild(_space_div);
    }
    let _space = document.getElementsByClassName('space');
    document.getElementsByClassName('space')[0].style.top = '40px';
    document.getElementsByClassName('space')[0].style.height = 'calc(100vh - 40px)';
    document.getElementsByClassName('space')[0].style.backgroundColor = Sub1Color.value;
    _space[0].dataset.textvalue = '';

}

function space_delete() {
    for (let i = 0; i < _dropzone.length; i++) {
        _dropzone[i].remove();
    }
}

function space_create() {
    let input_space = document.querySelector("select[name='space']")
    let currentSpace = input_space.value;
    space_delete();

    if (currentSpace == 1) {
        space_delete();
        for (let i = 1; i <= 1; i++) {
            let _space_div = document.createElement('div');
            _space_div.id = 'outer-dropzone';
            _space_div.className = 'space dropzone space' + i;
            ContentsArea.appendChild(_space_div);
        }
        let _space = document.getElementsByClassName('space');
        _space[0].style.top = '40px';
        _space[0].style.height = 'calc(100vh - 40px)';
        _space[0].style.backgroundColor = Sub1Color.value;
        Color1();
        _space[0].dataset.textvalue = '';
    } else if (currentSpace == 2) {
        space_delete();
        for (let i = 1; i <= 2; i++) {
            let _space_div = document.createElement('div');
            _space_div.id = 'outer-dropzone';
            _space_div.className = 'space dropzone space' + i;
            ContentsArea.appendChild(_space_div);
        }
        document.getElementsByClassName('space1')[0].style.top = '40px';
        document.getElementsByClassName('space2')[0].style.bottom = '0';
        let _space = document.getElementsByClassName('space');
        _space[0].style.height = 'calc((100vh - 40px)/2)';
        _space[1].style.height = 'calc((100vh - 40px)/2)';
        _space[0].style.backgroundColor = Sub1Color.value;
        _space[1].style.backgroundColor = Sub2Color.value;
        Color2();
        _space[0].dataset.textvalue = '';
        _space[1].dataset.textvalue = '';

    } else if (currentSpace == 3) {
        space_delete();
        for (let i = 1; i <= 3; i++) {
            let _space_div = document.createElement('div');
            _space_div.id = 'outer-dropzone';
            _space_div.className = 'space dropzone space' + i;
            ContentsArea.appendChild(_space_div);
        }
        document.getElementsByClassName('space1')[0].style.top = '40px';
        document.getElementsByClassName('space2')[0].style.top = 'calc(((100vh - 40px) / 3) + 40px)';
        document.getElementsByClassName('space3')[0].style.bottom = '0px';
        let _space = document.getElementsByClassName('space');
        _space[0].style.height = 'calc((100vh - 40px)/3)';
        _space[1].style.height = 'calc((100vh - 40px)/3)';
        _space[2].style.height = 'calc((100vh - 40px)/3)';
        _space[0].style.backgroundColor = Sub1Color.value;
        _space[1].style.backgroundColor = Sub2Color.value;
        _space[2].style.backgroundColor = Sub3Color.value;
        Color3();
        _space[0].dataset.textvalue = '';
        _space[1].dataset.textvalue = '';
        _space[2].dataset.textvalue = '';

    }
}

space_num();

window.onload = function () {
    select_space.addEventListener('change', space_create);
    let _dropzone = document.getElementsByClassName('space');
}

function Color1() {
    Sub1Color.addEventListener('input', function () {
        let _Sub1 = document.getElementsByClassName("space1");
        _Sub1[0].style.backgroundColor = Sub1Color.value;
    });
    // Sub1Text.addEventListener('input', function () {
    //     console.log(Sub1Text);
    //     _space[0].dataset.textvalue = Sub1Text.value;
    // });
}

function Color2() {
    Color1();
    Sub2Color.addEventListener('input', function () {
        let _Sub2 = document.getElementsByClassName("space2");
        if (_Sub2 == true) {
            _Sub2[0].style.backgroundColor = Sub2Color.value;
        };
    });

}

function Color3() {
    Color2();
    Sub3Color.addEventListener('input', function () {
        let _Sub3 = document.getElementsByClassName("space3");
        if (_Sub3 == true) {
            _Sub3[0].style.backgroundColor = Sub3Color.value;
        };
    });
}