let dropArea = document.querySelector('.drop-area')
let file = 0 ; 



dropArea.addEventListener('dragover', (e)=>{
    e.preventDefault();
    // console.log('dragover it');
    dropArea.style.border = "2px solid #fff";
    document.getElementById('ddo').innerHTML = "Release to upload the file"
});


dropArea.addEventListener('dragleave' , () =>{
    // console.log('dragOut it');
    dropArea.style.border = "2px dashed #fff";
    document.getElementById('ddo').innerHTML = "Drag & Drop to upload files"
});


dropArea.addEventListener('drop' , (e)=>{
    e.preventDefault();
    // console.log("You Drop it");
    file = event.dataTransfer.files[0];
    dropArea.style.border = "2px dashed #fff";
    let fileType = file.type;
    let validFileType = ["image/png" , "image/jpeg" , "image/jpg"];

    if (validFileType.includes(fileType)){
        let fileRead = new FileReader();

        fileRead.onload = () => {
            let fileURL =  fileRead.result
            
            let imgTag = `<img src=${fileURL} alt="Your IMG">`
            dropArea.innerHTML = imgTag;
            dropArea.style.padding = "0";
            dropArea.style.border = "2px solid #fff"
        }
    
    
    fileRead.readAsDataURL(file)
    }
    else {
        alert("Please Drop a Image format")
    };


});












