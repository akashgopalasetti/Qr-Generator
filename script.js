async  function dofunction(){
    const textinput=document.querySelector("#textinput").value;
    const url=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textinput;
    const response=await fetch(url);
    const img=document.querySelector("#img");
    img.src=response.url;
}
   