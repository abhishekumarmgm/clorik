function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,0,0);

    return true;
}

function dragEnter() {
    event.preventDefault();
    return true;
}

function dragOver(ev) {
    return false;
}

function dragDrop(ev) {
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    ev.stopPropagation();
    return false;
}




    var putImagesOnPage = {



        putImageInDom: function(pathArray) {
            var imagesInDom = document.getElementsByClassName('picture');
            var i;
            var top;
            var left;
            var  current;

            for (i = 0; i < pathArray.length; i++) {
                imagesInDom[i].src = pathArray[i].image_path;
            }
        },

        ajaxGet: function () {
            var xhr = new XMLHttpRequest();
            var url = "images.json";

            xhr.onreadystatechange = function () {
                var imagePaths;

                if (xhr.readyState == 4 && xhr.status == 200) {
                    imagePaths = JSON.parse(xhr.responseText);
                    putImagesOnPage.putImageInDom(imagePaths);
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        }
    };

    putImagesOnPage.ajaxGet();


