

    // Get the readmemodal
    var readmemodal = document.getElementById("readmeModal");
    var bgrnd = document.getElementById("mask");


    // Get the button that opens the readmemodal
    var btn = document.getElementById("readmeBtn");

    // Get the <span> element that closes the readmemodal
    var span = document.getElementsByClassName("closerdm")[0];
    //--------------------------------------------------------------------------------
    // When the user clicks on the button, open the readmemodal
    btn.onclick = function () {
        readmemodal.style.display = "block";
        bgrnd.style.display = "block";
        disableScrolling();
    }

    // When the user clicks on <span> (x), close the readmemodal
        span.onclick = function () {
            readmemodal.style.display = "none";
            bgrnd.style.display = "none";
            enableScrolling();
        }

        bgrnd.onclick = function () {
            readmemodal.style.display = "none";
            bgrnd.style.display = "none";
            enableScrolling();
        }

        // When the user clicks anywhere outside of the readmemodal, close it
        window.onclick = function (event) {
            if (event.target == readmemodal) {
            readmemodal.style.display = "none";
            bgrnd.style.display = "none";
            enableScrolling();
        }
        }

        function disableScrolling() {
            window.scrollTo(0, 0);
            window.onscroll = function () {
            window.scrollTo(0, 0);
        };
        }

        function enableScrolling() {
            window.onscroll = function () {
            };
        }
        //--------------------------------------------------------------------------------

