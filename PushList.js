
//textareaの動作(コピペ)
function flexTextarea(el) {
    const dummy = el.querySelector('.FlexTextarea__dummy')
    el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
        dummy.textContent = e.target.value + '\u200b'
    })
}

document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)
/////////////////////////////////////////

//second-を追加していく親要素
const ContentsArea = document.getElementsByClassName('contents')[0];
//textareaに入れられた文字(.value)
const Contents = document.getElementById('flexTextarea__textarea');
//.valueを表示する場所
const Log = document.getElementsByClassName('output_div')[0];
//previewコンテナ
const Preview = document.getElementsByClassName('preview')[0];
//送信ボタン(shift+enter)
const Button = document.getElementsByClassName('btn-enter')[0];
//body部
let body = document.body;
//閉じるボタン
const CloseWindow = document.getElementById('batu');

//second-termのdivをつくる
function clone() {
    const TermBox = document.createElement('div');
    TermBox.draggable = true;
    TermBox.className = 'second-term drag-drop';
    ContentsArea.appendChild(TermBox);
}
//second-termの取得(初期読み込み)
const TermBoxes = document.querySelectorAll(".second-term");

//TermList
const TermList = document.querySelectorAll('.ListDetails ol');
//TermListのliの追加
function ListPush() {
    const ListPush = document.createElement('li');
    ListPush.className = 'Term-List';
    TermList[0].appendChild(ListPush);
}
//ListPushの取得
const ListPushes = document.querySelectorAll('#TermList .Term-List');
//_Textcontent.valueをlistに代入
let _ContentsTextArray = [];

//first-termの取得
const FirstTerm = document.getElementById('first-term');
const FirstTermList = document.querySelector('#TermList .first-term');
//
const FTWindow = document.getElementById('firstTermWindow');
FirstTerm.addEventListener('click', function (e) {
    FTWindow.style.left = (e.pageX - 200) + 'px';
    FTWindow.style.top = (e.pageY - 100) + 'px';
    //メニューをblockで表示
    FTWindow.classList.add('show');
    CloseWindow.style.boxShadow = '1px 1px 3px rgba(34,0,102,0.2)';
});

CloseWindow.addEventListener('mousedown', function () {
    const Main = document.getElementById('Main');
    let _space = document.getElementsByClassName('space');
    CloseWindow.style.boxShadow = 'inset 2px 2px 6px rgba(34,0,102,0.2)';
    let _firstterm = Main.value;
    FirstTermList.innerHTML = _firstterm;
    FirstTerm.innerHTML = _firstterm;
    Preview.textContent = _firstterm;
    Contents.value = _firstterm;

});
CloseWindow.addEventListener('mouseup', function () {
    if (FTWindow.classList.contains('show')) {
        FTWindow.classList.remove('show');
    }
});

//
document.oncontextmenu = function () { return false; }

//オリジナル コンテキストメニュー
let con = document.getElementById('conmenu');
//sakuzyo
const Sakuzyo = document.getElementById('sakuzyo');
//innyou
const innyou = document.getElementById('innyou');

//Enter時の処理
function WordPush() {
    //_ContentsTextArrayに追加する
    _ContentsTextArray[_ContentsTextArray.length] = [Contents.value];
    //second-termに追加する
    clone();
    const TermBoxes = document.querySelectorAll(".second-term");
    //TermListに追加する
    ListPush();
    const ListPushes = document.querySelectorAll('#TermList .Term-List');

    //代入するやつ
    for (let i = 0; i < _ContentsTextArray.length; i++) {
        ListPushes[i].innerHTML = _ContentsTextArray[i];
        TermBoxes[i].innerHTML = _ContentsTextArray[i];
        //一時的な代入
        Log.textContent = _ContentsTextArray[i];
        Preview.textContent = _ContentsTextArray[i];

        ListPushes[i].addEventListener('click', function () {
            Contents.value = ListPushes[i].innerHTML;
            Preview.textContent = ListPushes[i].innerHTML;
        });

        TermBoxes[i].addEventListener('contextmenu', function (e) {
            Preview.textContent = TermBoxes[i].innerHTML;
            //マウスの位置を使ってスタイルを設定する
            con.style.left = e.pageX + 'px';
            con.style.top = e.pageY + 'px';
            //メニューをblockで表示
            con.classList.add('show');
            TermBoxes[i].classList.add('delete');
            ListPushes[i].classList.add('delete-list');

            const TermDelete = document.getElementsByClassName('delete');
            const ListDelete = document.getElementsByClassName('delete-list');
            let innerTerm = TermDelete[0].innerHTML;

            innyou.addEventListener('click', function () {
                Contents.value = TermBoxes[i].innerHTML;
            });

            Sakuzyo.addEventListener('click', function () {
                let result = _ContentsTextArray.filter(function (item, index, arr) {
                    arr.pop()
                    return item.innerHTML !== innerTerm;
                });
                result = _ContentsTextArray;
                if (ListDelete.length > 0) {
                    ListDelete[0].remove();
                }
                if (TermDelete.length > 0) {
                    TermDelete[0].remove();
                }
            });


            //左クリックで非表示に変更
            body.addEventListener('click', function () {
                if (con.classList.contains('show')) {
                    //非表示に戻す
                    con.classList.remove('show');
                }
                if (TermBoxes[i].classList.contains('delete')) {
                    TermBoxes[i].classList.remove('delete');
                }
                if (ListPushes[i].classList.contains('delete-list')) {
                    ListPushes[i].classList.remove('delete-list');
                }
            });
        });
        ListPushes[i].addEventListener('contextmenu', function (e) {
            Preview.textContent = TermBoxes[i].innerHTML;
            //マウスの位置を使ってスタイルを設定する
            con.style.left = e.pageX + 'px';
            con.style.top = e.pageY + 'px';
            //メニューをblockで表示
            con.classList.add('show');
            TermBoxes[i].classList.add('delete');
            ListPushes[i].classList.add('delete-list');

            const TermDelete = document.getElementsByClassName('delete');
            const ListDelete = document.getElementsByClassName('delete-list');
            let innerTerm = TermDelete[0].innerHTML;

            innyou.addEventListener('click', function () {
                Contents.value = TermBoxes[i].innerHTML;
            });

            Sakuzyo.addEventListener('click', function () {
                let result = _ContentsTextArray.filter(function (item, index, arr) {
                    arr.pop()
                    return item.innerHTML !== innerTerm;
                });
                result = _ContentsTextArray;
                if (ListDelete.length > 0) {
                    ListDelete[0].remove();
                }
                if (TermDelete.length > 0) {
                    TermDelete[0].remove();
                }
            });


            //左クリックで非表示に変更
            body.addEventListener('click', function () {
                if (con.classList.contains('show')) {
                    //非表示に戻す
                    con.classList.remove('show');
                }
                if (TermBoxes[i].classList.contains('delete')) {
                    TermBoxes[i].classList.remove('delete');
                }
                if (ListPushes[i].classList.contains('delete-list')) {
                    ListPushes[i].classList.remove('delete-list');
                }
            });
        });

    };
    //textboxを空にする
    Contents.value = "";
}

Contents.addEventListener("keydown", function () {
    if (event.shiftKey == true) {
        if (event.keyCode == 13) {
            WordPush();
        }
    }
});

Button.addEventListener("click", function () {
    WordPush();
});

const MainTermColor = document.getElementById("color");
const Sub1Color = document.getElementById("color1");
const Sub2Color = document.getElementById("color2");
const Sub3Color = document.getElementById("color3");
const Sub1Text = document.getElementById("Sub-1");
const Sub2Text = document.getElementById("Sub-2");
const Sub3Text = document.getElementById("Sub-3");

MainTermColor.addEventListener('input', function () {
    FirstTerm.style.backgroundColor = MainTermColor.value;
    FirstTermList.style.backgroundColor = MainTermColor.value;
});