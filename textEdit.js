//textareaの動作(コピペ)
function flexTextarea(el) {
    const dummy = el.querySelector('.FlexTextarea__dummy')
    el.querySelector('.FlexTextarea__textarea').addEventListener('focus', e => {
        dummy.textContent = e.target.value + '\u200b'
    })
    el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
        dummy.textContent = e.target.value + '\u200b'
    })
}
document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)
////////////////////////////////////////////////////////////////////

//window.opener

const MainTermColorAppend = window.opener.document.getElementById("color");
const Sub1ColorAppend = window.opener.document.getElementById("color1");
const Sub2ColorAppend = window.opener.document.getElementById("color2");
const Sub3ColorAppend = window.opener.document.getElementById("color3");
const MainAppend = window.opener.document.getElementById('Main');
const Sub1TextAppend = window.opener.document.getElementById("Sub-1");
const Sub2TextAppend = window.opener.document.getElementById("Sub-2");
const Sub3TextAppend = window.opener.document.getElementById("Sub-3");
const EditText = window.opener.document.getElementsByClassName('edit-text')[0];

//space-check
const select_space = window.opener.document.getElementById('select_space');
let _CurrentSpace = window.opener.document.querySelectorAll('#outer-dropzone');


//currentFile
const Inner = document.getElementsByClassName('inner');
const EAall = document.getElementsByClassName('editArea-all')[0];
const EA1 = document.getElementsByClassName('editArea-1')[0];
const EA2 = document.getElementsByClassName('editArea-2')[0];
const EA3 = document.getElementsByClassName('editArea-3')[0];
const Titleall = document.getElementById('title-all');
const Title1 = document.getElementById('title-1');
const Title2 = document.getElementById('title-2');
const Title3 = document.getElementById('title-3');

const FlexTextarea = document.getElementsByClassName('FlexTextarea__textarea');
const CheckBox0 = document.getElementsByName('display_0');
const CheckBox1 = document.getElementsByName('display_1');
const CheckBox2 = document.getElementsByName('display_2');
const CheckBox3 = document.getElementsByName('display_3');

//初期読み込み
document.body.style.backgroundColor = MainAppend.value;
FlexTextarea[1].style.backgroundColor = Sub1ColorAppend.value;
FlexTextarea[2].style.backgroundColor = Sub2ColorAppend.value;
FlexTextarea[3].style.backgroundColor = Sub3ColorAppend.value;
Titleall.value = MainAppend.value;
Title1.value = Sub1TextAppend.value;
Title2.value = Sub2TextAppend.value;
Title3.value = Sub3TextAppend.value;

//色の取得
MainTermColorAppend.addEventListener('input', function () {
    document.body.style.backgroundColor = MainTermColorAppend.value;
});

Sub1ColorAppend.addEventListener('input', function () {
    FlexTextarea[1].style.backgroundColor = Sub1ColorAppend.value;
});

Sub2ColorAppend.addEventListener('input', function () {
    FlexTextarea[2].style.backgroundColor = Sub2ColorAppend.value;
});


Sub3ColorAppend.addEventListener('input', function () {
    FlexTextarea[3].style.backgroundColor = Sub3ColorAppend.value;
});

// ラジオボタン

for (let i = 0; i <= 1; i++) {
    CheckBox0[i].addEventListener('change', function () {
        if (CheckBox0[0].checked == false) {
            EAall.style.display = 'none';
        } else {
            EAall.style.display = 'initial';
        }
    });
    CheckBox1[i].addEventListener('change', function () {
        if (CheckBox1[0].checked == false) {
            EA1.style.display = 'none';
        } else {
            EA1.style.display = 'initial';
        }
    });
    CheckBox2[i].addEventListener('change', function () {
        if (CheckBox2[0].checked == false) {
            EA2.style.display = 'none';
        } else {
            EA2.style.display = 'initial';
        }
    });
    CheckBox3[i].addEventListener('change', function () {
        if (CheckBox3[0].checked == false) {
            EA3.style.display = 'none';
        } else {
            EA3.style.display = 'initial';
        }
    });
}

//表示数
window.onload = function () {
    let _CurrentSpace = window.opener.document.querySelectorAll('#outer-dropzone');
    if (_CurrentSpace.length == 1) {
        Inner[0].style.display = 'block';
        Inner[1].style.display = 'block';
        Inner[2].style.display = 'none';
        Inner[3].style.display = 'none';
    } else if (_CurrentSpace.length == 2) {
        Inner[0].style.display = 'block';
        Inner[1].style.display = 'block';
        Inner[2].style.display = 'block';
        Inner[3].style.display = 'none';
    } else if (_CurrentSpace.length == 3) {
        for (let i = 0; i <= 3; i++) {
            Inner[i].style.display = 'block';
        }
    }
    select_space.addEventListener('change', function () {
        let _CurrentSpace = window.opener.document.querySelectorAll('#outer-dropzone');
        if (_CurrentSpace.length == 0) {
            Inner[0].style.display = 'block';
            Inner[1].style.display = 'block';
            Inner[2].style.display = 'none';
            Inner[3].style.display = 'none';
        } else if (_CurrentSpace.length == 1) {
            Inner[0].style.display = 'block';
            Inner[1].style.display = 'block';
            Inner[2].style.display = 'block';
            Inner[3].style.display = 'none';
        } else if (_CurrentSpace.length == 2) {
            for (let i = 0; i <= 3; i++) {
                Inner[i].style.display = 'block';
            }
        }
    });
};

//タイトルの取得

MainAppend.addEventListener('input', function () {
    Titleall.value = MainAppend.value;
});

Sub1TextAppend.addEventListener('input', function () {
    Title1.value = Sub1TextAppend.value;

});

Sub2TextAppend.addEventListener('input', function () {
    Title2.value = Sub2TextAppend.value;

});


Sub3TextAppend.addEventListener('input', function () {
    Title3.value = Sub3TextAppend.value;
});

//テキストの取得
let _TermList0 = window.opener.document.querySelectorAll('#blank-list .Term-List');
let _TermList1 = window.opener.document.querySelectorAll('#List1 li');
let _TermList2 = window.opener.document.querySelectorAll('#List2 li');
let _TermList3 = window.opener.document.querySelectorAll('#List3 li');

//
let _array0 = [];
for (let i = 0; i < _TermList0.length; i++) {
    _array0.push(_TermList0[i].innerHTML);
}
let _string0 = _array0.join('\n');

//
let _array1 = [];
for (let i = 0; i < _TermList1.length; i++) {
    _array1.push(_TermList1[i].innerHTML);
}
let _string1 = _array1.join('\n');

//
let _array2 = [];
for (let i = 0; i < _TermList2.length; i++) {
    _array2.push(_TermList2[i].innerHTML);
}
let _string2 = _array2.join('\n');

//
let _array3 = [];
for (let i = 0; i < _TermList3.length; i++) {
    _array3.push(_TermList3[i].innerHTML);
}
let _string3 = _array3.join('\n');

//

let _blob0123 = _string0 + '\n' + '\n' + Title1.value + '\n' + _string1 + '\n' + '\n' + Title2.value + '\n' + _string2 + '\n' + '\n' + Title3.value + '\n' + _string3;
let _blob012 = _string0 + '\n' + '\n' + Title1.value + '\n' + _string1 + '\n' + '\n' + Title2.value + '\n' + _string2;
let _blob013 = _string0 + '\n' + '\n' + Title1.value + '\n' + _string1 + '\n' + '\n' + Title3.value + '\n' + _string3;
let _blob023 = _string0 + '\n' + '\n' + Title2.value + '\n' + _string2 + '\n' + '\n' + Title3.value + '\n' + _string3;
let _blob123 = Title1.value + '\n' + _string1 + '\n' + '\n' + Title2.value + '\n' + _string2 + '\n' + '\n' + Title3.value + '\n' + _string3;
let _blob01 = _string0 + '\n' + '\n' + Title1.value + '\n' + _string1;
let _blob02 = _string0 + '\n' + '\n' + Title2.value + '\n' + _string2;
let _blob03 = _string0 + '\n' + '\n' + Title3.value + '\n' + _string3;
let _blob12 = Title1.value + '\n' + _string1 + '\n' + '\n' + Title2.value + '\n' + _string2;
let _blob13 = Title1.value + '\n' + _string1 + '\n' + '\n' + Title3.value + '\n' + _string3;
let _blob23 = Title2.value + '\n' + _string2 + '\n' + '\n' + Title3.value + '\n' + _string3;
let _blob0 = _string0;
let _blob1 = Title1.value + '\n' + _string1;
let _blob2 = Title2.value + '\n' + _string2;
let _blob3 = Title3.value + '\n' + _string3;

FlexTextarea[1].innerHTML = _string1;
FlexTextarea[2].innerHTML = _string2;
FlexTextarea[3].innerHTML = _string3;

if (_TermList0.length == 0) {
    if (_TermList1.length == 0) {
        if (_TermList2.length == 0) {
            if (_TermList3.length == 0) {

            } else {
                FlexTextarea[0].innerHTML = _blob3;
            }
        } else if (_TermList3.length == 0) {
            FlexTextarea[0].innerHTML = _blob2;
        } else {
            FlexTextarea[0].innerHTML = _blob23;
        }
    } else if (_TermList2.length == 0) {
        if (_TermList1.length == 0) {
            FlexTextarea[0].innerHTML = _blob1;
        } else if (_TermList3.length == 0) {
            FlexTextarea[0].innerHTML = _blob3;
        } else {
            FlexTextarea[0].innerHTML = _blob13;
        }
    } else if (_TermList3.length == 0) {
        if (_TermList1.length == 0) {
            FlexTextarea[0].innerHTML = _blob1;
        } else if (_TermList2.length == 0) {
            FlexTextarea[0].innerHTML = _blob2;
        } else {
            FlexTextarea[0].innerHTML = _blob12;
        }
    } else {
        FlexTextarea[0].innerHTML = _blob123;
    }
} else if (_TermList1.length == 0) {
    if (_TermList2.length == 0) {
        if (_TermList3.length == 0) {
            FlexTextarea[0].innerHTML = _blob0;
        } else {
            FlexTextarea[0].innerHTML = _blob03;
        }
    } else if (_TermList3.length == 0) {
        lexTextarea[0].innerHTML = _blob02;
    } else {
        FlexTextarea[0].innerHTML = _blob023;
    }
} else if (_TermList2.length == 0) {
    if (_TermList3.length == 0) {
        FlexTextarea[0].innerHTML = _blob01;
    } else {
        FlexTextarea[0].innerHTML = _blob013;
    }
} else if (_TermList3.length == 0) {
    FlexTextarea[0].innerHTML = _blob012;
} else {
    FlexTextarea[0].innerHTML = _blob0123;
}



//ダウンロード
const BtnDL = document.getElementsByClassName('download');

Titleall.addEventListener('input', function () {
    Titleall = document.getElementById('title-all');
    Title1 = document.getElementById('title-1');
    Title2 = document.getElementById('title-2');
    Title3 = document.getElementById('title-3');
});

for (let i = 0; i < FlexTextarea.length; i++) {
    FlexTextarea[i].addEventListener('input', function () {
        FlexTextarea[0].innerHTML = document.getElementsByClassName('FlexTextarea__dummy')[0].innerHTML;
    });

    BtnDL[0].addEventListener('click', function () {

    });

    BtnDL[1].addEventListener('click', function () {
    });
    BtnDL[2].addEventListener('click', function () {
    });
    BtnDL[3].addEventListener('click', function () {
    });
}