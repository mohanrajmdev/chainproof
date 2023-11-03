
if (navigator.onLine) {
    document.getElementById('createBtn').addEventListener('click',handleCreateBtn);
    document.getElementById('verifyBtn').addEventListener('click',handleVerifyBtn);
    document.getElementById('verifyId').addEventListener('click',handleVerify);
function handleCreateBtn(){
    document.getElementById('create').style.display='block';
    document.getElementById('createBtn').style.color='green';
    document.getElementById('verifyBtn').style.color='white';
    document.getElementById('verify').style.display='none';
}

function handleVerifyBtn(){
    document.getElementById('create').style.display='none';
    document.getElementById('verify').style.display='block';
    document.getElementById('createBtn').style.color='white';
    document.getElementById('verifyBtn').style.color='green';
}
function handleVerify(){
    const id = document.getElementById('cert-num').value.trim();
    console.log(id);
    if(id.startsWith("CHAIN-ID-") || id.startsWith("chain-id-")){
        
    }
}

function downloadFile(url, fileName) {
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };
    

}
else{
    document.getElementById('content').innerText = "No Internet Connection";
}
