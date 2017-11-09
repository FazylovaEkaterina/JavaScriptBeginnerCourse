// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать – массив значений одного из полей (отсортированных в порядке возрастания):
// ------------------------
function getFieldValues (arr, name){
	let arr2=[];
	arr.forEach(function(it) {
		if (it[name] !=null) arr2.push(it[name]);
	})
	return arr2.sort();
}
let usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// ------------------------


// 2) Написать функцию, фильтрующую массив с использованием предиката:
// ------------------------

let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x){
	x=x.filter(function(number) {
		return number%2==0;
	});
	return x;
}

console.log(isEven(numbers)); // --> [2, 8, 34]

// ------------------------


// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках
// ------------------------

function findSimilarWords(sl,sl2){
	let arr = sl.split(' ');
	let arr2 = sl2.split(' ');
	let sravni = [];
	for (i=0; i<arr.length; i++) {
		if (arr2.includes(arr[i])){
			if (sravni.includes(arr[i]) == false){
				sravni.push(arr[i]);
			}
		}
	}
	return sravni;
}
var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
var secondLongString = 'She is over bored and self assured oh no I know a dirty word';
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and', 'is'];


// ------------------------



// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:
// ------------------------
function generateBroadcastAndNetworsAddresses(ipy, mas){
	let ip=ipy.split(".");
	//проверка на валидность 
	for (i=0; i<ip.length; i++){
		let ipi= +ip[i];
		if (ipi >255){console.log("Not valid IP")}
	}
// поиск маски сети
let a = Math.floor(mas/8);
let mask = [];
for (i=0; i<4; i++){
	if (i<=(a-1)){mask[i]=255}
	else
	if (i>=a) {let l=mas%8; let t=7; let k=0;
	for (j=0; j<l;j++){
		//console.log("t ", t, " mask ", k," i ", i);
		let h=Math.pow(2,t);
		k=k+h;
		t=t-1;
		
	}
	mask[i] = k;}
} //console.log(mask);
//if ((Math.floor(mas/8)) > 2) {console.log("Not IP")}
//поиск сетевого адреса
let ip2=[];
for (i=0; i<ip.length; i++){
	if (i<a) {ip2[i]= +ip[i]}
	else {
let ipi= +ip[i];
let u= +(ipi.toString(2));
let y= +(mask[i].toString(2));
let k= y&u;

	ip2[i]= +(k.toString(10));}
}//console.log(ip2);
//поиск широковещательного
let ip3=[];
for (i=0; i<ip2.length; i++){
	if (mask[i]<255){
		let l=mas%8; let t=0; let k=0;
	for (j=0; j<l;j++){
	
		let h=Math.pow(2,t);
		k=k+h;
		t=t+1;
		
	}
	
	ip3[i]= k;
	}
	else{ip3[i]=ip2[i];
		
}}
return "Broadcast - " + ip3.join(".") + "   Network - " + ip2.join(".");
}
var IpAddress = '10.223.98.2';
var subnetMask = 28;
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// ------------------------


// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// ------------------------
function makeItClean(x){
	let arr=[];
	for (let i=0; i<x.length; i++){
		if (arr.includes(x[i])==false){
			arr=arr.concat(x[i]);
		}
arr=arr.filter(function(it, op){
	return arr.indexOf(it)==op;
});
	}
	return arr;
}
var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, '1', undefined, true];

// ------------------------
