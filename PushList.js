
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
const TermList = document.getElementById('TermList');
//TermListのliの追加
function ListPush() {
    const ListPush = document.createElement('li');
    ListPush.className = 'Term-List';
    TermList.appendChild(ListPush);
}
//ListPushの取得
const ListPushes = document.querySelectorAll('#TermList .Term-List');
//_Textcontent.valueをlistに代入
let _ContentsTextArray = [];

//first-termの取得
const FirstTerm = document.getElementById('first-term');
const FirstTermList = document.querySelector('#TermList .first-term');
//firsttermのみの処理
let _firstterm = ['first'];
FirstTermList.innerHTML = _firstterm;
FirstTerm.innerHTML = _firstterm;
FirstTerm.addEventListener('click', function () {
    Log.textContent = _firstterm;
    Preview.textContent = _firstterm;
    //Contents.value = _firstterm;
    FirstTerm.style.borderStyle = 'solid';
    FirstTerm.style.borderWidth = '2px';
    // if (onClick == 0) {
    // } else if (onClick == 1) {
    // }
});

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

        //クリックされた値を返す
        TermBoxes[i].addEventListener('click', function (index) {
            //TermBoxes[index].style.backgroundColor = '#ffff00';
            //let CurentClick = TermBoxes[index].innerHTML;
            //Log.textContent = CurentClick;
            //Preview.textContent = CurentClick;
            //Contents.value = CurentClick;
        }.bind(null, i));


    }
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
