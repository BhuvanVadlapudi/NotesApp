let applyNotesMainheadingApplyText = document.getElementById("applyNotesMainheadingApplyText");

let textArea = document.getElementById("textArea");
let textAreaSm = document.getElementById("textAreaSm");
let textAreaMd = document.getElementById("textAreaMd");
let textAreaLg = document.getElementById("textAreaLg");
let textAreaXl = document.getElementById("textAreaXl");

let notesSaveBtn = document.getElementById("notesSaveBtn");
let notesClearBtn = document.getElementById("notesClearBtn");

let localStorageItem = localStorage.getItem("textArea");
let localStorageItemSm = localStorage.getItem("textAreaSm");
let localStorageItemMd = localStorage.getItem("textAreaMd");
let localStorageItemLg = localStorage.getItem("textAreaLg");
let localStorageItemXl = localStorage.getItem("textAreaXl");

let count = 1;

function animateText() {
    if (count % 2 !== 0) {
        applyNotesMainheadingApplyText.classList.add("notes-app-span-main-heading-1");
        applyNotesMainheadingApplyText.classList.remove("notes-app-span-main-heading-2");
    } else {
        applyNotesMainheadingApplyText.classList.add("notes-app-span-main-heading-2");
        applyNotesMainheadingApplyText.classList.remove("notes-app-span-main-heading-1");
    }
    // console.log(count);
    count += 1;
}
let spanTextId = setInterval(animateText, 1000);

if (localStorageItem === null) {
    textArea.value = "";
} else {
    textArea.value = localStorageItem;
}
if (localStorageItemSm === null) {
    textAreaSm.value = "";
} else {
    textAreaSm.value = localStorageItemSm;
}
if (localStorageItemMd === null) {
    textAreaMd.value = "";
} else {
    textAreaMd.value = localStorageItemMd;
}
if (localStorageItemLg === null) {
    textAreaLg.value = "";
} else {
    textAreaLg.value = localStorageItemLg;
}
if (localStorageItemXl === null) {
    textAreaXl.value = "";
} else {
    textAreaXl.value = localStorageItemXl;
}

notesSaveBtn.onclick = function() {
    let textAreaInput = textArea.value;
    let textAreaSmInput = textAreaSm.value;
    let textAreaMdInput = textAreaMd.value;
    let textAreaLgInput = textAreaLg.value;
    let textAreaXlInput = textAreaXl.value;

    localStorage.setItem("textArea", textAreaInput);
    localStorage.setItem("textAreaSm", textAreaSmInput);
    localStorage.setItem("textAreaMd", textAreaMdInput);
    localStorage.setItem("textAreaLg", textAreaLgInput);
    localStorage.setItem("textAreaXl", textAreaXlInput);
}

notesClearBtn.onclick = function() {
    localStorage.removeItem("textArea");
    localStorage.removeItem("textAreaSm");
    localStorage.removeItem("textAreaMd");
    localStorage.removeItem("textAreaLg");
    localStorage.removeItem("textAreaXl");

    textArea.value = "";
    textAreaSm.value = "";
    textAreaMd.value = "";
    textAreaLg.value = "";
    textAreaXl.value = "";
}