//Visit Count Updator method
function updateVisitCount() {
    fetch('https://count.cab/hit/6P8pv5aksK').then(res => res.json()).then(res => {
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

        var delayInMilliseconds = 1500;

        setTimeout(function() {
            $(".spinner-wrapper").fadeIn("slow");
            setTimeout(spinnerWait, 2000);
            
            if (isChecked) {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
        }, delayInMilliseconds);

        
    });
}

//Spinner Appear - Wait 2 seconds - Disappear Method
function spinnerWait() {
    $(".spinner-wrapper").fadeOut("slow");
    return;
}
