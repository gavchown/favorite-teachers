'use strict';

var teacher_list = [];

var Teacher = function(teacher){
    this.image = teacher.image;
    this.name = teacher.name;
    this.subjects = teacher.subjects;
    this.sex = teacher.sex;
    this.teacher_id = teacher.teacher_id;
    
};

Teacher.prototype.toHtml = function(){
    var source = $('#teacher-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};

teachers.forEach(function(teacher){
    teacher_list.push(new Teacher(teacher));
});


teacher_list.forEach(function(teacher){
    $('#teacher-listings').append(teacher.toHtml());
});