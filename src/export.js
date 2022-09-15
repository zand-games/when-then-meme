function downloadImage() {
  // Retrieve svg node
  const svgNode = foreignObjectSVG;

  // Get image quality index (basically,  index you can zoom in)
  const quality = 2;
  // Create image
  const image = new Image();
  image.onload = () => {
    // Create image canvas
    const canvas = document.createElement("canvas");
    // Set width and height based on SVG node
    const rect = svgNode.getBoundingClientRect();
    canvas.width = rect.width * quality;
    canvas.height = rect.height * quality;

    // Draw background
    const context = canvas.getContext("2d");
    context.fillStyle = "#FAFAFA";
    context.fillRect(0, 0, rect.width * quality, rect.height * quality);
    context.drawImage(image, 0, 0, rect.width * quality, rect.height * quality);

    // Set some image metadata
    let dt = canvas.toDataURL("image/png");

    // Invoke saving function
    saveAs(dt, "graph.png");
  };

  var url =
    "data:image/svg+xml; charset=utf8, " +
    encodeURIComponent(serializeString(svgNode));

  image.src = url; // URL.createObjectURL(blob);

  // This function invokes save window
  function saveAs(uri, filename) {
    // create link
    var link = document.createElement("a");
    if (typeof link.download === "string") {
      document.body.appendChild(link); // Firefox requires the link to be in the body
      link.download = filename;
      link.href = uri;
      link.click();
      document.body.removeChild(link); // remove the link when done
    } else {
      location.replace(uri);
    }
  }

  // This function serializes SVG and sets all necessary attributes
  function serializeString(svg) {
    const xmlns = "http://www.w3.org/2000/xmlns/";
    const xlinkns = "http://www.w3.org/1999/xlink";
    const svgns = "http://www.w3.org/2000/svg";
    svg = svg.cloneNode(true);
    const fragment = window.location.href + "#";
    const walker = document.createTreeWalker(
      svg,
      NodeFilter.SHOW_ELEMENT,
      null,
      false
    );
    while (walker.nextNode()) {
      for (const attr of walker.currentNode.attributes) {
        if (attr.value.includes(fragment)) {
          attr.value = attr.value.replace(fragment, "#");
        }
      }
    }
    svg.setAttributeNS(xmlns, "xmlns", svgns);
    svg.setAttributeNS(xmlns, "xmlns:xlink", xlinkns);
    const serializer = new XMLSerializer();
    const string = serializer.serializeToString(svg);
    return string;
  }
}
