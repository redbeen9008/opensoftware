//document.write("주간 3대 운동 기록 측정 프로그램<br>");
var listarr= new crt2DArr(10,5);
listarr[0]=["날짜","벤치프레스","스쿼트","데드리프트","합계\n"];
listarr[1]=["05-03",40,60,80,"180\n"];
listarr[2]=["05-10",45,65,90,"200\n"];
listarr[3]=["05-17",50,70,100,"220\n"];


var line;
var count=4;
var date_val;
while(line!=6){
    line=prompt("1:조회 2:입력 3:수정 4:삭제 5:조건검색 6:나가기");
    if(line==1){
        confirm(listarr);
    }
    if(line==2){
        listarr[count]=prompt("날짜 벤치프레스 스쿼트 데드리프트 입력\n ex: 06-01 100 150 170").split(" ");
        listarr[count][4]=Number(listarr[count][1])+Number(listarr[count][2])+Number(listarr[count][3])+"\n";
    }
    if(line==3){
        date_val=prompt("원하는 수정 날자 입력");
        listarr=modi(listarr,date_val);
    }
    if(line==4){
        date_val=prompt("원하는 삭제 날자 입력");
        delete_data(listarr,date_val);
    }
    if(line==5){
        date_val=prompt("입력한중량 합계값 이상만 조회하기 중량합계입력");
        search_data(listarr,date_val);
    }
    count++;
}

function modi(arr,date_val){
    for(var i=1;i<10;i++){
        if(arr[i][0]==date_val){
            arr[i]=prompt("날짜 벤치프레스 스쿼트 데드리프트 재입력\n ex:05-31 60 80 100").split(" ");
            listarr[i][4]=Number(listarr[i][1])+Number(listarr[i][2])+Number(listarr[i][3])+"\n";
            return arr;
        }
    }
    confirm("일치하는 날자를 찾지 못했습니다.");
    return arr;
}

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
    var parr = new Array(10);
    for (var i = 0; i < 10; i++) {
        parr[i] = new Array(5);
    }
    var k=0;
    for(var i=1; i<10;i++){
        if((Number(arr[i][1])+Number(arr[i][2])+Number(arr[i][3]))>=val){
           parr[k]=arr[i];
           k++;
        }
    }
    confirm(parr);
}

function delete_data(arr,date_val){
    for(var i =0;i<10;i++){
        if(arr[i][0]==date_val){
            arr[i]=new Array(5);
        }
    }
}