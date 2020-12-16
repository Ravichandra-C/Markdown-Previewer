import "../scss/main.scss"
const marked=require('marked');
const dompurify=require("dompurify");
const reactdom=require("react-dom");
const React=require("react");
import {Workarea} from "../components/workarea"
let temp=document.createElement("div");
marked.setOptions({
    breaks: true,
})
let first=document.getElementById("initial").textContent;
reactdom.render(<Workarea initial={first}/>,temp);
document.querySelector(".container").append(temp.firstChild);
document.addEventListener("DOMContentLoaded", convertText)
editor.addEventListener("change", convertText)
editor.addEventListener("keydown", convertText);
editor.addEventListener("keyup",convertText);
function convertText() {
    preview.innerHTML = dompurify.sanitize( marked(editor.value) , {USE_PROFILES: {html: true}} );
}