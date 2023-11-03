
if (navigator.onLine) {
    document.getElementById('createBtn').addEventListener('click',handleCreateBtn);
    document.getElementById('verifyBtn').addEventListener('click',handleVerifyBtn);
    document.getElementById('verifyId').addEventListener('click',handleVerify);
function handleCreateBtn(){
    document.getElementById('create').style.display='block';
    document.getElementById('createBtn').style.color='chartreuse';
    document.getElementById('verifyBtn').style.color='white';
    document.getElementById('verify').style.display='none';
}

function handleVerifyBtn(){
    document.getElementById('create').style.display='none';
    document.getElementById('verify').style.display='block';
    document.getElementById('createBtn').style.color='white';
    document.getElementById('verifyBtn').style.color='chartreuse';
}

async function handleVerify(){
    const id = document.getElementById('cert-num').value.trim();
    if(id.startsWith("CHAIN-ID-") || id.startsWith("chain-id-")){
       await downloadFile(`https://ipfs.io/ipfs/${id.substring(9)}`,'certificate.pdf');
       document.getElementById('message').innerHTML="Valid Certificate";
       document.getElementById('message').style.color='chartreuse';
    }
    else{
        document.getElementById('message').innerHTML="Not Valid Certificate";
        document.getElementById('message').style.color='red';
    }
}

async function downloadFile(url, fileName) {
    await fetch(url).then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = fileName;
            alink.click();
        });
    });
    
  };
  
}
else{
    document.getElementById('content').innerText = "No Internet Connection";
}
