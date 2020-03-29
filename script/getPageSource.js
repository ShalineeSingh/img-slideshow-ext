function parseImagesFromDOM(document_root) {
  var image_array = [];
  var images = document_root.getElementsByTagName('img');
  for (var element of images) {
    if (element.naturalHeight > 100 && element.naturalWidth > 100)
      image_array.push(element.src);
  }
  return image_array;
}

chrome.runtime.sendMessage({
  action: 'getSource',
  source: parseImagesFromDOM(document)
});