//btnの開閉
const EditContainer = document.getElementsByClassName('tools')[0];
const EditContainerOpen = document.getElementsByClassName('open')[0];
//editbtn
const EditBtn = document.getElementById('btn-edit');
const EditTools = document.getElementsByClassName('edit')[0];
//savebtn
const SaveBtn = document.getElementById('btn-save');
const SaveTools = document.getElementsByClassName('save')[0];
//helpbtn
const HelpBtn = document.getElementById('btn-help');
const HelpTools = document.getElementsByClassName('help')[0];
//listbtn
const ListBtn = document.getElementById('btn-list');
const ListTools = document.getElementsByClassName('list')[0];
//img
const BtnIMG = document.querySelectorAll('.navigation li');
const BtnP = document.querySelectorAll('.navigation li p');

EditBtn.addEventListener('click', function () {
    SaveTools.style.display = 'none';
    HelpTools.style.display = 'none';
    ListTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && EditTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        EditTools.style.display = 'none';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        EditTools.style.display = 'block';
    }
});

SaveBtn.addEventListener('click', function () {
    EditTools.style.display = 'none';
    HelpTools.style.display = 'none';
    ListTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && SaveTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        SaveTools.style.display = 'none';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        SaveTools.style.display = 'block';
    }
});

HelpBtn.addEventListener('click', function () {
    EditTools.style.display = 'none';
    SaveTools.style.display = 'none';
    ListTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && HelpTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        HelpTools.style.display = 'none';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        HelpTools.style.display = 'block';
    }
});

ListBtn.addEventListener('click', function () {
    EditTools.style.display = 'none';
    SaveTools.style.display = 'none';
    HelpTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && ListTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        ListTools.style.display = 'none';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        ListTools.style.display = 'block';
    }
});

///////////////////////////////////////////////