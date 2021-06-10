console.log("3대 운동 기록 측정 프로그램");
var listarr= new crt2DArr(4,4);



function crt2DArr(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}