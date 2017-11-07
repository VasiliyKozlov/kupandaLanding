var modal = (function () {
    var modal = document.querySelector('.modal');
    var modalBody = modal.querySelector('.modal__body-inner');

    document.body.addEventListener('showModal', function(e) {
        alert("Окно открыто!! " + e.type)
    })
    document.body.addEventListener('click', function (e) {
        if(!e.target.classList.contains('modal-link')) return;
        var url = e.target.getAttribute('data-link');
        getTemplate(url);
        show();
    })



    document.body.addEventListener('click', function (e) {
        if(e.target.classList.contains('modal__overlay') || e.target.classList.contains('modal__close')) {

            close();
            modalBody.innerHTML = '';
        }
    })

    var show = function () {
        modal.classList.add('active');
    }

    var close = function () {
        modal.classList.remove('active')
    }

    var getTemplate = function (url) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET',url, true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if(xhr.readyState != 4) return;

            if(xhr.status == 200) {
                modalBody.innerHTML = xhr.responseText ;
                //console.log()
            }
        }

    }

    return {}
}) ()