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
//issuesbtn
const IssueBtn = document.getElementById('btn-issue');
const IssueTools = document.getElementsByClassName('issue')[0];
//listbtn
const ListBtn = document.getElementById('btn-list');
const ListTools = document.getElementsByClassName('list')[0];

EditBtn.addEventListener('click', function () {
    SaveTools.style.display = 'none';
    HelpTools.style.display = 'none';
    IssueTools.style.display = 'none';
    ListTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && EditTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        EditTools.style.display = 'none';
        ContentsArea.style.width = 'calc(100% - 60px)';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        EditTools.style.display = 'block';
        ContentsArea.style.width = 'calc(100% - 340px)';
    }
});

SaveBtn.addEventListener('click', function () {
    EditTools.style.display = 'none';
    HelpTools.style.display = 'none';
    IssueTools.style.display = 'none';
    ListTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && SaveTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        SaveTools.style.display = 'none';
        ContentsArea.style.width = 'calc(100% - 60px)';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        SaveTools.style.display = 'block';
        ContentsArea.style.width = 'calc(100% - 340px)';
    }
});

HelpBtn.addEventListener('click', function () {
    EditTools.style.display = 'none';
    SaveTools.style.display = 'none';
    IssueTools.style.display = 'none';
    ListTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && HelpTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        HelpTools.style.display = 'none';
        ContentsArea.style.width = 'calc(100% - 60px)';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        HelpTools.style.display = 'block';
        ContentsArea.style.width = 'calc(100% - 340px)';
    }
});

IssueBtn.addEventListener('click', function () {
    EditTools.style.display = 'none';
    SaveTools.style.display = 'none';
    HelpTools.style.display = 'none';
    ListTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && IssueTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        IssueTools.style.display = 'none';
        ContentsArea.style.width = 'calc(100% - 60px)';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        IssueTools.style.display = 'block';
        ContentsArea.style.width = 'calc(100% - 340px)';
    }
});

ListBtn.addEventListener('click', function () {
    EditTools.style.display = 'none';
    SaveTools.style.display = 'none';
    HelpTools.style.display = 'none';
    IssueTools.style.display = 'none';

    if (EditContainerOpen.dataset.open == 'open' && ListTools.style.display == 'block') {
        EditContainerOpen.dataset.open = 'close';
        EditContainer.style.display = 'none';
        ListTools.style.display = 'none';
        ContentsArea.style.width = 'calc(100% - 60px)';
    } else {
        EditContainerOpen.dataset.open = 'open';
        EditContainer.style.display = 'block';
        ListTools.style.display = 'block';
        ContentsArea.style.width = 'calc(100% - 340px)';
    }
});

///////////////////////////////////////////////