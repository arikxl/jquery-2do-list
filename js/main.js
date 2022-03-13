'use strict'
$(document).ready(function() {
    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('done')
    })

    $('ul').on('click', 'span', function(e) {
        e.stopPropagation();
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        })
    })

    $('form').on('submit', (e)=> {
        e.preventDefault();
        let task = $('input').val();
        $('ul').append(`<li><span class='delete'><i class='fas fa-trash-alt'></i></span>${task}</li>`);
        $('input').val('');
    })

    $('.plus').click(function(){
        $('input').fadeToggle()
    })

})