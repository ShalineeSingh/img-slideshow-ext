function parseImagesFromDOM(document_root, source_url) {
  var image_array = [];
  var images = document_root.getElementsByTagName('img');
  for (var element of images) {
    if (element.naturalHeight > 100 && element.naturalWidth > 100)
      if (source_url.includes('pinterest')) {
        element.src = element.src.replace('236x', '564x');
      }
    image_array.push(element.src);
  }
  return image_array;
}

chrome.runtime.sendMessage({
  action: 'getSource',
  source: parseImagesFromDOM(document, location.href)
});