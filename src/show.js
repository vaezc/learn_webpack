//具名导出
export function show(content) {
    window.document.getElementById("app").innerHTML = "Hello, test " + content;
}

export function displayName(name){
    let text =  window.document.getElementById("app").innerHTML;
    window.document.getElementById("app").innerHTML = text + name;
}