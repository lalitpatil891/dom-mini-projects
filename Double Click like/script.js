var con = document.querySelector('#container')

var icon = document.querySelector('i')

con.addEventListener('dblclick', function () {

    icon.style.transform = 'translate(-50%, -50%) scale(1)'
    icon.style.opacity = 0.8
    console.log('Container was double clicked');


    setTimeout(function () {
        icon.style.opacity = 0
    }, 1000)

    setTimeout(function () {
        icon.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000)

})
