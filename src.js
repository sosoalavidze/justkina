document.onkeydown = function(e) {
        if (e.metaKey && e.keyCode === 83 || e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            try {
            if (localStorage) {
                var txtValue = document.getElementById('noteSpace').innerHTML;
                localStorage.setItem("notes", txtValue);
                document.getElementById("noteSpace").focus();
            }
        }
        catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert('Not enough space to save notes! Clear your localsotrage by pressing CMD + x'); 
            }
        }
            return false;
        } else if(e.metaKey && e.keyCode === 88 || e.ctrlKey && e.keyCode === 88) {
            e.preventDefault();
            localStorage.clear();
        }else if(e.metaKey && e.keyCode === 73 || e.ctrlKey && e.keyCode === 73) {
            e.preventDefault();
            sel = window.getSelection();
            if (sel.rangeCount && sel.getRangeAt) {
                range = sel.getRangeAt(0);
            }
            document.designMode = "on";
            if (range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
            document.execCommand("BackColor", false, "yellow");
            document.designMode = "off";
            document.getElementById("noteSpace").focus();
        }else if(e.metaKey && e.keyCode === 74 || e.ctrlKey && e.keyCode === 74) {
            e.preventDefault();
            sel = window.getSelection();
            if (sel.rangeCount && sel.getRangeAt) {
                range = sel.getRangeAt(0);
            }
            document.designMode = "on";
            if (range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
            document.execCommand("BackColor", false, "white");
            document.designMode = "off";
            document.getElementById("noteSpace").focus();
        }
    };
    if (localStorage) {
        var notes = localStorage.getItem("notes");
        document.getElementById('noteSpace').innerHTML = notes;
        document.getElementById("noteSpace").focus();
    }
// function visitPage(){window.open("https://www.youtube.com/watch?v=rL6RRIOZyCM")}function validateSeed(){for(var e=document.getElementById("myText").value,t="",n=(e=e.slice(2)).length,a=0;a<n;){var l=e.slice(a,a+=2);t+=String.fromCharCode(parseInt(l,16))}if(t.match(/^(?=.*\d)(?=.*[a-zA-Z]).{7,7}$/)){document.getElementById("result_field").innerHTML="Congratualtions, you have passed level 2. Please click the button below for your last clue.";var o=document.getElementsByClassName("main-container")[0],i=document.createElement("button");i.innerHTML="Next puzzle",i.setAttribute("class","button_next"),i.setAttribute("onclick","visitPage();"),o.appendChild(i),document.getElementsByClassName("button_validate")[0].remove()}else document.getElementById("result_field").innerHTML="Sorry, that is not a valid seed."}
