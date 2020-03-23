function parseImagesFromDOM(document_root) {
  var image_array = [];
  var images = document_root.getElementsByTagName('img');
  for (var element of images) {
    image_array.push(element.src);
  }
  return image_array;
}

chrome.runtime.sendMessage({
  action: 'getSource',
  source: parseImagesFromDOM(document)
});