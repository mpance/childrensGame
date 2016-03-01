'use strict';

var addition = [];

$(document).ready(init);

function init() {
	$('#starGenerator').click(generateStars);
	$('.ball').click(select);
	$('#submit').click(submit)
}

function generateStars() {
	var randomNum = Math.ceil(Math.random()*9)
	for(var i = 0; i < randomNum; i++) {
		$('#stars').append("<div class='star'></div>");
	}
}

function select() {
	$(this).addClass('select');
	addition.push($(this).text());
	// debugger;

}

function submit() {
	 var sum = addition.reduce(function(previousValue, currentValue) {
	 	return parseInt(previousValue) + parseInt(currentValue);
	 })
	 debugger;
	$('.select').remove();
	// debugger;
}

function equals() {
	// debugger;
	var string = $('.select').val();
	var arr = string.split('');

}













