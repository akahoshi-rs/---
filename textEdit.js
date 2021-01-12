//textareaの動作(コピペ)
function flexTextarea(el) {
    const dummy = el.querySelector('.FlexTextarea__dummy')
    el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
        dummy.textContent = e.target.value + '\u200b'
    })
}
////////////////////////////////////////////////////////////////////

document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)


const Sub1ColorAppend = window.opener.document.getElementById("color1");
const EditText = window.opener.document.getElementsByClassName('edit-text')[0];

document.body.style.backgroundColor = Sub1ColorAppend.value;
Sub1ColorAppend.addEventListener('input', function () {
    document.body.style.backgroundColor = Sub1ColorAppend.value;
});