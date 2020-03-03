let input = parseInt(prompt('Nhap nam'));
function findCentury(year) {
    let n= Math.floor(year/100);
if(year%100==0){
    return document.write('nam '+year+' thuoc the ki '+n);
}else {
    return document.write('nam '+year+' thuoc the ki '+(n+1));
}
}
findCentury(input);
