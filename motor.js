function vibility(){
    if (document.getElementById("icon_vibility").textContent == "visibility"){
        document.getElementById("icon_vibility").textContent = "visibility_off";
        document.getElementById("icon_password").setAttribute("type","password");
    }
    else{
        document.getElementById("icon_vibility").textContent = "visibility"
        document.getElementById("icon_password").setAttribute("type","text");
    }
}
function vibilityV2(){
    if (document.getElementById("icon_vibilityV2").textContent == "visibility"){
        document.getElementById("icon_vibilityV2").textContent = "visibility_off";
        document.getElementById("icon_confirm").setAttribute("type","password");
    }
    else{
        document.getElementById("icon_vibilityV2").textContent = "visibility"
        document.getElementById("icon_confirm").setAttribute("type","text");
    }
}