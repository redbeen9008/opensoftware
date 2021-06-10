console.log("3대 운동 기록 측정 프로그램");
var listarr= new crt2DArr(4,5);
listarr[1]=["1-1",0,0,0,0];
delete_data(listarr,"1-1");
console.log(listarr);


function crt2DArr(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}

function delete_data(arr,date_val){
    for(var i =0;i<4;i++){
        if(arr[i][0]==date_val){
            arr[i]=new Array(5);
        }
    }
}