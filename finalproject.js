function addListeners() {
    var previews = document.querySelectorAll('.preview');

    for (var i = 0; i < previews.length; i++) {
        previews[i].addEventListener('mouseover', function() {
            upDate(this);
        });
        previews[i].addEventListener('mouseleave', function() {
            unDo();
        });
        previews[i].addEventListener('focus', function() {
            upDate(this);
        });
        previews[i].addEventListener('blur', function() {
            unDo();
        });
    }
}

window.onload = function() {
    addListeners();
};
function addTabindexAttribute() {
    var previews = document.querySelectorAll('.preview');

    for (var i = 0; i < previews.length; i++) {
        previews[i].setAttribute('tabindex', i + 1);
    }
}
function upDate(previewPic) {
    // Update image and text
    console.log("Mouse over event triggered");
    // Your existing code for updating image and text
}

function unDo() {
    // Undo changes
    console.log("Mouse leave event triggered");
    // Your existing code for undoing changes
}

window.onload = function() {
    addListeners();
    addTabindexAttribute();
    console.log("Page loaded");
};
