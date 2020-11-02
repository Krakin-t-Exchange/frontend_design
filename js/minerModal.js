
    var opened = false;

    // Get the modal
    var modal = document.getElementById("myModal");
    var bgrnd = document.getElementById("mask");


    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    //--------------------------------------------------------------------------------
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        if (!opened) {
        document.getElementById('ifr').src += 'https://krakint-miner.onrender.com';
        modal.style.display = "block";
        bgrnd.style.display = "block";
        disableScrolling();
        opened = true;
    } else {
        modal.style.display = "block";
        bgrnd.style.display = "block";
        disableScrolling();
    }
    }

    // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
            bgrnd.style.display = "none";
            enableScrolling();
        }

        bgrnd.onclick = function () {
            modal.style.display = "none";
            bgrnd.style.display = "none";
            enableScrolling();
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
            modal.style.display = "none";
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

