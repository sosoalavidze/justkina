
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
