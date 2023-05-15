/*
FILE SYSTEM ACCESS API
Interfaces
FileSystemHandle
FileSystemFileHandle
FileSystemDirectoryHandle
FileSystemWritableFileStream
Methods
window.showOpenFilePicker()
window.showSaveFilePicker()
window.showDirectoryPicker()
DataTransferItem.getAsFileSystemHandle()


Don't use "open()" as a function, already in use
https://developer.mozilla.org/en-US/docs/Web/API/Window/open
(other MIME) accept:  'text/plain': ['.txt'],


const options = {
  startIn: 'pictures',  //how is this captured, custom address
  suggestedName: 'Untitled Text.txt',
  types: [
    {
      description: 'Images',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false
};

	const options = {
	  startIn: 'desktop',  //how is this captured, custom address
	  suggestedName: 'untitled.txt', // fileHandle.name
	};

*/

      
      let fileHandle;
let filePath = location.pathname.split("/")
let fileDirectory = "desktop"//filePath[filePath.length - 2].toLowerCase()//startIn option will not work with Uppercase letters
let fileLocation = filePath[filePath.length - 1]



  //fix this for codemirror
  function init(){
    async function openFile(){

      // Destructure the one-element array.
      [fileHandle] = await window.showOpenFilePicker(); //options
      // Do something with the file handle.
      const file = await fileHandle.getFile();
      const contents = await file.text();
      //editor.value = contents;
    };
    openFile()
  }

  
    function save(){
async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(contents);
  // Close the file and write the contents to disk.
  await writable.close();
} 
      writeFile(fileHandle, editor.state.doc.toString())
  }
  
    
    function saveAs(){
async function getNewFileHandle() {
	const options = {
	  startIn: fileDirectory,  //how is this captured, custom address, plit location.pathname
	  suggestedName: fileLocation, // split location.pathname
	};

   fileHandle = await window.showSaveFilePicker(options);
  
    // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(editor.state.doc.toString());
  // Close the file and write the contents to disk.
  await writable.close();

}
      
      getNewFileHandle()
    }

