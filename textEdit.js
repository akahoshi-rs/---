
const EditText = document.getElementsByClassName('edit-text')[0];

// let currentSpace = document.querySelectorAll('#outer-dropzone');


//currentFile
const Inner = document.getElementsByClassName('inner');
const EAall = document.getElementsByClassName('editArea-all')[0];
const EA1 = document.getElementsByClassName('editArea-1')[0];
const EA2 = document.getElementsByClassName('editArea-2')[0];
const EA3 = document.getElementsByClassName('editArea-3')[0];
let Titleall = document.getElementById('title-all');
let Title1 = document.getElementById('title-1');
let Title2 = document.getElementById('title-2');
let Title3 = document.getElementById('title-3');

const FlexTextarea = document.getElementsByClassName('all-area');
const CheckBox0 = document.getElementsByName('display_0');
const CheckBox1 = document.getElementsByName('display_1');
const CheckBox2 = document.getElementsByName('display_2');
const CheckBox3 = document.getElementsByName('display_3');

//初期読み込み
document.body.style.backgroundColor = Main.value;
FlexTextarea[1].style.backgroundColor = Sub1Color.value;
FlexTextarea[2].style.backgroundColor = Sub2Color.value;
FlexTextarea[3].style.backgroundColor = Sub3Color.value;
Titleall.value = Main.value;
Title1.value = Sub1Text.value;
Title2.value = Sub2Text.value;
Title3.value = Sub3Text.value;

//色の取得
MainTermColor.addEventListener('input', function () {
    document.body.style.backgroundColor = MainTermColor.value;
});

Sub1Color.addEventListener('input', function () {
    FlexTextarea[1].style.backgroundColor = Sub1Color.value;
});

Sub2Color.addEventListener('input', function () {
    FlexTextarea[2].style.backgroundColor = Sub2Color.value;
});


Sub3Color.addEventListener('input', function () {
    FlexTextarea[3].style.backgroundColor = Sub3Color.value;
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
    let currentSpace = document.querySelectorAll('#outer-dropzone');
    if (currentSpace.length == 1) {
        Inner[1].style.display = 'block';
        Inner[2].style.display = 'block';
        Inner[3].style.display = 'none';
        Inner[4].style.display = 'none';
    } else if (currentSpace.length == 2) {
        Inner[1].style.display = 'block';
        Inner[2].style.display = 'block';
        Inner[3].style.display = 'block';
        Inner[4].style.display = 'none';
    } else if (currentSpace.length == 3) {
        for (let i = 1; i <= 4; i++) {
            Inner[i].style.display = 'block';
        }
    }
};
select_space.addEventListener('change', function () {
    let currentSpace = document.querySelectorAll('#outer-dropzone');
    if (currentSpace.length == 1) {
        Inner[1].style.display = 'block';
        Inner[2].style.display = 'block';
        Inner[3].style.display = 'none';
        Inner[4].style.display = 'none';
    } else if (currentSpace.length == 2) {
        Inner[1].style.display = 'block';
        Inner[2].style.display = 'block';
        Inner[3].style.display = 'block';
        Inner[4].style.display = 'none';
    } else if (currentSpace.length == 3) {
        for (let i = 1; i <= 4; i++) {
            Inner[i].style.display = 'block';
        }
    }
});

//タイトルの取得

Main.addEventListener('input', function () {
    Titleall.value = Main.value;
});

Sub1Text.addEventListener('input', function () {
    Title1.value = Sub1Text.value;

});

Sub2Text.addEventListener('input', function () {
    Title2.value = Sub2Text.value;

});


Sub3Text.addEventListener('input', function () {
    Title3.value = Sub3Text.value;
});

//テキストの取得
let _TermList0 = document.querySelectorAll('#blank-list .Term-List');
let _TermList1 = document.querySelectorAll('#List1 li');
let _TermList2 = document.querySelectorAll('#List2 li');
let _TermList3 = document.querySelectorAll('#List3 li');

EditText.addEventListener('click', () => {
    _TermList0 = document.querySelectorAll('#blank-list .Term-List');
    _TermList1 = document.querySelectorAll('#List1 li');
    _TermList2 = document.querySelectorAll('#List2 li');
    _TermList3 = document.querySelectorAll('#List3 li');
});
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
                FlexTextarea[0].innerHTML = _blob2
            }
        } else if (_TermList3.length == 0) {
            if (_TermList2.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob3
            }
        } else {
            FlexTextarea[0].innerHTML = _blob23
        }
    } else if (_TermList2.length == 0) {
        if (_TermList1.length == 0) {
            if (_TermList3.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob3
            }
        } else if (_TermList3.length == 0) {
            if (_TermList1.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob1
            }
        } else {
            FlexTextarea[0].innerHTML = _blob13
        }
    } else if (_TermList3.length == 0) {
        if (_TermList1.length == 0) {
            if (_TermList2.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob2
            }
        } else if (_TermList2.length == 0) {
            if (_TermList1.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob1
            }
        } else {
            FlexTextarea[0].innerHTML = _blob12
        }
    } else {
        FlexTextarea[0].innerHTML = _blob123
    }
} else if (_TermList1.length == 0) {
    if (_TermList0.length == 0) {
        if (_TermList2.length == 0) {
            if (_TermList3.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob2
            }
        } else if (_TermList3.length == 0) {
            if (_TermList2.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob3
            }
        } else {
            FlexTextarea[0].innerHTML = _blob23
        }
    } else if (_TermList2.length == 0) {
        if (_TermList0.length == 0) {
            if (_TermList3.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob3
            }
        } else if (_TermList3.length == 0) {
            if (_TermList0.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob0
            }
        } else {
            FlexTextarea[0].innerHTML = _blob03
        }
    } else if (_TermList3.length == 0) {
        if (_TermList0.length == 0) {
            if (_TermList2.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob2
            }
        } else if (_TermList2.length == 0) {
            if (_TermList0.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob0
            }
        } else {
            FlexTextarea[0].innerHTML = _blob02
        }
    } else {
        FlexTextarea[0].innerHTML = _blob023
    }
} else if (_TermList2.length == 0) {
    if (_TermList1.length == 0) {
        if (_TermList0.length == 0) {
            if (_TermList3.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob0
            }
        } else if (_TermList3.length == 0) {
            if (_TermList0.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob3
            }
        } else {
            FlexTextarea[0].innerHTML = _blob03
        }
    } else if (_TermList0.length == 0) {
        if (_TermList1.length == 0) {
            if (_TermList3.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob3
            }
        } else if (_TermList3.length == 0) {
            if (_TermList1.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob1
            }
        } else {
            FlexTextarea[0].innerHTML = _blob13
        }
    } else if (_TermList3.length == 0) {
        if (_TermList1.length == 0) {
            if (_TermList0.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob0
            }
        } else if (_TermList0.length == 0) {
            if (_TermList1.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob1
            }
        } else {
            FlexTextarea[0].innerHTML = _blob01
        }
    } else {
        FlexTextarea[0].innerHTML = _blob013
    }
} else if (_TermList3.length == 0) {
    if (_TermList1.length == 0) {
        if (_TermList2.length == 0) {
            if (_TermList0.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob0
            }
        } else if (_TermList0.length == 0) {
            if (_TermList2.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob2
            }
        } else {
            FlexTextarea[0].innerHTML = _blob02
        }
    } else if (_TermList2.length == 0) {
        if (_TermList1.length == 0) {
            if (_TermList0.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob0
            }
        } else if (_TermList0.length == 0) {
            if (_TermList1.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob1
            }
        } else {
            FlexTextarea[0].innerHTML = _blob01
        }
    } else if (_TermList0.length == 0) {
        if (_TermList1.length == 0) {
            if (_TermList2.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob2
            }
        } else if (_TermList2.length == 0) {
            if (_TermList1.length == 0) {
            } else {
                FlexTextarea[0].innerHTML = _blob1
            }
        } else {
            FlexTextarea[0].innerHTML = _blob12
        }
    } else {
        FlexTextarea[0].innerHTML = _blob012
    }
} else {
    FlexTextarea[0].innerHTML = _blob0123
}

//文字数の表示
let _Counter = document.getElementsByClassName('counter');
let _Row = document.getElementsByClassName('row');

for (let i = 0; i < FlexTextarea.length; i++) {
    let _textValueBefore = FlexTextarea[i].innerHTML;
    if (_textValueBefore.length != 0) {
        let _textValueAfter = _textValueBefore.replace(/\n/g, "");
        _Counter[i].innerHTML = _textValueAfter.length;
        _Row[i].innerHTML = (_textValueBefore.length - _textValueAfter.length) + 1;
    }
}
//ダウンロード
const BtnDL = document.getElementsByClassName('downloads');

Titleall.addEventListener('input', function () {
    Titleall = document.getElementById('title-all');
    Title1 = document.getElementById('title-1');
    Title2 = document.getElementById('title-2');
    Title3 = document.getElementById('title-3');
});
Title1.addEventListener('input', function () {
    Titleall = document.getElementById('title-all');
    Title1 = document.getElementById('title-1');
    Title2 = document.getElementById('title-2');
    Title3 = document.getElementById('title-3');
});
Title2.addEventListener('input', function () {
    Titleall = document.getElementById('title-all');
    Title1 = document.getElementById('title-1');
    Title2 = document.getElementById('title-2');
    Title3 = document.getElementById('title-3');
});
Title3.addEventListener('input', function () {
    Titleall = document.getElementById('title-all');
    Title1 = document.getElementById('title-1');
    Title2 = document.getElementById('title-2');
    Title3 = document.getElementById('title-3');
});

for (let i = 0; i < FlexTextarea.length; i++) {
    FlexTextarea[i].addEventListener('input', function () {
        FlexTextarea[i].innerHTML = document.getElementsByClassName('FlexTextarea__dummy')[i].innerHTML;
        let _textValueBefore = FlexTextarea[i].innerHTML;
        let _textValueAfter = _textValueBefore.replace(/\n/g, "");
        if (FlexTextarea[i].innerHTML.length >= 1) {
            _Counter[i].innerHTML = (_textValueAfter.length - 1);
            _Row[i].innerHTML = (_textValueBefore.length - _textValueAfter.length) + 1;
        } else {
            _Counter[i].innerHTML = _textValueAfter.length;
            _Row[i].innerHTML = (_textValueBefore.length - _textValueAfter.length) + 1;
        }
    });
}

BtnDL[0].addEventListener('click', function () {
    _blob1 = Titleall.value + '\n' + FlexTextarea[0].innerHTML;
    let _blobout = new Blob([_blob1], { type: "text/plan" });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(_blobout);
    link.download = (Titleall.value + '.txt');
    document.body.appendChild(link);
    link.click();
});

BtnDL[1].addEventListener('click', function () {
    _blob1 = Title1.value + '\n' + FlexTextarea[1].innerHTML;
    let _blobout = new Blob([_blob1], { type: "text/plan" });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(_blobout);
    link.download = (Title1.value + '.txt');
    document.body.appendChild(link);
    link.click();
});

BtnDL[2].addEventListener('click', function () {
    _blob2 = Title2.value + '\n' + FlexTextarea[2].innerHTML;
    let _blobout = new Blob([_blob2], { type: "text/plan" });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(_blobout);
    link.download = (Title2.value + '.txt');
    document.body.appendChild(link);
    link.click();
});
BtnDL[3].addEventListener('click', function () {
    _blob3 = Title3.value + '\n' + FlexTextarea[3].innerHTML;
    let _blobout = new Blob([_blob3], { type: "text/plan" });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(_blobout);
    link.download = (Title3.value + '.txt');
    document.body.appendChild(link);
    link.click();
});