var arr;
var undo_flag = 0;
$('ul').on('click','li',function(){
    $(this).toggleClass('completed'); 
});

$('ul').on('click','#undo',function(e){
    console.log($(this).parent().html(arr));
    e.stopPropagation();
    undo_flag = 1;
});


$('ul').on('click','span',function(e){
    undo_flag = 0;
    arr = $(this).parent().html();
    $(this).parent().removeClass('completed');
    var temp = $(this).parent();
    temp.html('<div id="undo">Undo</div>');   
    setTimeout(function(){
        if(undo_flag===0){
            temp.fadeOut(500,function(){
                temp.remove();
            });
        }   
    },1500);   
    e.stopPropagation();
});

$('input[type="text"]').keypress(function(e){
    if(e.which===13){
        var temp = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> '+temp+'</li>');
    }
});

$('h1 i').on('click', function(){
    // $(this).toggleClass('fas fa-angle-right');
    // $(this).toggleClass('fas fa-angle-down');
    $('input[type="text"]').fadeToggle(500,function(){
        $('h1 i').toggleClass('fas fa-angle-right');
        $('h1 i').toggleClass('fas fa-angle-down');
    });
    
})

