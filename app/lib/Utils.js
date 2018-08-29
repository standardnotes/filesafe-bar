export default class Utils {

  static base64toBinary(dataURI) {
    var binary = atob(dataURI);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Uint8Array(array);
  }

  static downloadData(data, fileName, fileType) {
    var link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = this.hrefForData(data, fileType);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  static hrefForData(data, fileType) {
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (this.textFile !== null) {
      window.URL.revokeObjectURL(this.textFile);
    }

    this.textFile = window.URL.createObjectURL(new Blob([data], {type: fileType ? fileType : 'text/json'}));

    // returns a URL you can use as a href
    return this.textFile;
  }
}
