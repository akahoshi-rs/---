//textareaの動作(コピペ)
function flexTextarea(el) {
    const dummy = el.querySelector('.FlexTextarea__dummy')
    el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
        dummy.textContent = e.target.value + '\u200b'
    })
}
document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)
////////////////////////////////////////////////////////////////////

const MainAppend = window.opener.document.getElementById('Main');
const Sub1ColorAppend = window.opener.document.getElementById("color1");
const Sub2ColorAppend = window.opener.document.getElementById("color2");
const Sub3ColorAppend = window.opener.document.getElementById("color3");
const EditText = window.opener.document.getElementsByClassName('edit-text')[0];

//space-check
const select_space = window.opener.document.getElementById('select_space');
let _CurrentSpace = window.opener.document.querySelectorAll('#outer-dropzone');

const Inner = document.getElementsByClassName('inner');
const EAall = document.getElementsByClassName('editArea-all')[0];
const EA1 = document.getElementsByClassName('editArea-1')[0];
const EA2 = document.getElementsByClassName('editArea-2')[0];
const EA3 = document.getElementsByClassName('editArea-3')[0];
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

//色の取得
MainAppend.addEventListener('input', function () {
    document.body.style.backgroundColor = MainAppend.value;
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

// チェックボックス

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

window.onload = function () {
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

//存在確認はspaceJSを参考に。

// (Current見て操作)
// boxShadowをSubColorから引き出す。
// タイトルをh2に突っ込む。
// 無ければデフォルトはColorValue。

// h2はta: c。
// groupをpo: aにして右側に寄せる。

// _ContentsTextArrayからarea - allは出せそうな気がする。
// 他はそれぞれのolからqueryselectorで引き出して出力。
// これらはtextJSからwindow.openerで抜き出す