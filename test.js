console.log("3대 운동 기록 측정 프로그램");
var listarr= new crt2DArr(4,5);
listarr[0]=["날짜","벤치프레스","스쿼트","데드리프트","합계"];
listarr[1]=["06-01",100,200,200,500];
listarr[2]=["06-02",200,300,400,900];
search_data(listarr,900);


function crt2DArr(rows, columns) {
    /*2차원 배열 처럼 배열 생성*/
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}
function input_data(arr,rows) {
    
}
function search_data(arr,val){
    /*3대 합계 val 값 이상인 기록을 출력해줌*/
    for(var i=0; i<4;i++){
        if(arr[i][4]>=val){
            console.log(arr[i]);
        }
    }
}