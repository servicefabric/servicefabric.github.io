/**
 * Created by ronen on 10/07/2018.
 */

function getInputValue(selectId){
    return document.getElementById(selectId).value;
}

function getSelectValue(selectId){
    let e = document.getElementById(selectId);
    return e.options[e.selectedIndex].value;
}

function appendHtmlElement (parentId, html) {
    let container = document.getElementById(parentId);
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    container.appendChild(template.content.firstChild);
}