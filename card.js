
// Cards
function field(id) {
    $(`#${id}Out`).html($(`#${id}In`).val())
}

$('#details').submit(function (e) {
    e.preventDefault();
    field('quote');
});
let getCanvas;
$('#preview').on('click', function () {
    h2i();
});

window.addEventListener('load', () => {
    let getCanvas;

    h2i();

    $('#download').on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    $('#download').attr(
        "download", `AAIS_Receipt.png`).attr(
            "href", imgageData);
        });

})

function h2i() {
    html2canvas($('#dp'), {
        onrendered: function (canvas) {
            $('#preview').append(canvas);
            getCanvas = canvas;
        }
    });
}

$('#download').on('click', function () {

    var imgageData = getCanvas.toDataURL("image/png");
    $('#download').attr(
        "download", `aei.png`).attr(
            "href", imgageData);

});