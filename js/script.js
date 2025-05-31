document.addEventListener('DOMContentLoaded', function () {
    const buttoncalc1 = document.getElementById('calc1');
    const buttoncalc2 = document.getElementById('calc2');

    buttoncalc1.classList.add('active');



    buttoncalc1.addEventListener('click', () => {
        document.getElementById('calc1_res').style.display = 'block'
        document.getElementById('calc2_res').style.display = 'none'
    });

    buttoncalc2.addEventListener('click', () => {
        document.getElementById('calc1_res').style.display = 'none'
        document.getElementById('calc2_res').style.display = 'block'
    })

});


document.querySelectorAll('.button-group button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.button-group button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
