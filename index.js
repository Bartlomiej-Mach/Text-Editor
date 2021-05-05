let buttons = document.getElementsByClassName('button--tool');

//adding functionality of tool Bold Italic and List.
for (let btn of buttons) {
	btn.addEventListener('click', () => {
		let text = btn.dataset['command'];
		document.execCommand(text, false, null);	
	})
}


//EXPORT FILES TO *.JSON FILE
const exportBtn = document.querySelector('.button--export');

const exportFile = () => {
    
    isFalse = new Boolean(false);

    let textContainer = document.querySelector('.text-container').innerHTML;

    exportBtn.href = URL.createObjectURL(new Blob([JSON.stringify(textContainer, null, 2)], {
        type: "text/plain"
    }));
    exportBtn.setAttribute("download", "file.json");
    isFalse = true;
}

exportBtn.addEventListener('click', exportFile);



//IMPORT FUNCTION INTO HTML TEXT CONTAINER.
const importBtn = document.querySelector('.button--import');

const importFile = () => { 
    
    if (window.File && window.FileReader && window.FileList && window.Blob) {
       const fileSelected = document.querySelector('.button--import');
       fileSelected.addEventListener('change', function (e) { 
          
            const fileExtension = /text.*/; 
            const fileTobeRead = fileSelected.files[0];
            if (fileTobeRead.type.match(fileExtension)) { 
               
                const fileReader = new FileReader(); 
                fileReader.onload = function (e) { 
                    const fileContents = document.querySelector('.text-container'); 
                    fileContents.innerText = fileReader.result; 
                } 
                fileReader.readAsText(fileTobeRead); 
            } 
            else { 
                alert("Please select text file"); 
            }
    
       }, false);
    } 
    else { 
        alert("Files are not supported"); 
    } 
}

importBtn.addEventListener('click', importFile);