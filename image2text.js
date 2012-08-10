function image2text(file, callback, error) {
	// not a image file
	if (!/^image\//.test(file.type)) {
		error('file is not an image');
		return;
	}

	var reader = new FileReader();

	reader.onload = function(e) {
		callback(e.target.result);
	};
	reader.onerror = error;

	reader.readAsDataURL(file);
}
