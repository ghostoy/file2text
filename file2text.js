function file2text(file, callback, error) {
	var reader = new FileReader();

	reader.onload = function(e) {
		callback(e.target.result, file.type);
	};
	reader.onerror = error;

	reader.readAsDataURL(file);
}
