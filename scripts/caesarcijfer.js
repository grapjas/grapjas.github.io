//var x = document.getElementById("unencoded"); 

function rot13clicked() {
    var text = document.getElementById("inputtext").value;
    setText(rot13(text));
}

function setText(data) {
    document.getElementById("outputtext").value = data;

}

function rot13(str) {
	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
	var index = x => input.indexOf(x);
	var translate = x => index(x) > -1 ? output[index(x)] : x;
	return str.split('').map(translate).join('');
  }