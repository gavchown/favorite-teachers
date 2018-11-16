'use strict';

function setUpSexFilter() {
    var sexs;
    var sexList = [];
    $('.teacher').each(function() {
        sexs = $(this).attr('data-sexs').split(',');
        sexs.forEach(function(sex) {
            if(sexList.indexOf(sex) < 0) {
                sexList.push(sex);
            }
        });
    });
    sexList.sort();
    console.log(sexList);
    sexList.forEach(function(sex) {
        var optionTag = `<option value="${sex}">${sex}</option>`;
        $('#sex-filter').append(optionTag);
    });
};

function handleSexFilter() {
    $('#sex-filter').on('change', function() {
        if($(this).val()) {
            $('.teacher').hide();
            $(`.teacher[data-sexs*="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.teacher').fadeIn();
        }
    });
};

setUpSexFilter();
handleSexFilter();