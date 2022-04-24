//Visit Count Updator method
function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/siteopen/okstartok/?amount=1').then(res => res.json()).then(res => {
        countEl.innerHTML = res.value;
    });
}


//Spinner Hide method
$(window).on("load",function(){
    setTimeout(spinnerWait, 1000);
})


//Light-Dark mode toggle
function togglelightdarkmode()   {
    toggle.addEventListener('input', e => {
        const isChecked = e.target.checked;

        $(".spinner-wrapper").fadeIn("slow");
        setTimeout(spinnerWait, 2000);
        
        if (isChecked) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    });
}


//Spinner Appear - Wait 1.5 seconds - Disappear Method
function spinnerWait() {
    $(".spinner-wrapper").fadeOut("slow");
    return;
}
