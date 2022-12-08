let Player = function(){

    let Name = "";
    let rank = 0;

};
let index = 0;
let playerList = [];
let cnt = 10;

function addPlayer(){
    
    var count = document.getElementById('count');
    let select = document.querySelector('select');
    let nickName = document.querySelector('input');

    var rank = select.options[select.options.selectedIndex].value;
    var rankName = select.options[select.options.selectedIndex].text;
    var nickname_input = nickName.value;

    if(cnt <= 0 ){
        alert('10명 모두 입력하셨습니다.');
        nickName.value = "";
    }
    else{
    
        if(nickname_input.trim() === ""){
            alert('닉네임을 입력하세요')
           return false;  
        }
        
        var player = new Player();
        player.Name = nickname_input;
        player.rank = rank-1;
        
        playerList.push(player);
        cnt--;
        count.innerHTML = cnt + "명 남음";
        nickName.value = "";
        }
    // playerList.forEach((e)=>{
    //     console.log(e);
    // })
}
let view = 1;
function result(){

    // TODO 입력 받자
    let teams = [[], []];

    if(cnt > 0){
        alert('플레이어 등록을 완료 해주세요.');
        return false;
    }
    else if(view  >= 1){
        view--;
      
        var temp = 0;
            for(let i=0; i<playerList.length; i++){
                for(let j=0; j<playerList.length; j++){
                    if(playerList[i].rank < playerList[j].rank){
                        temp = playerList[i];
                        playerList[i]=playerList[j];
                        playerList[j]=temp;
                    }
                } 
            }
            let index = 0;
            for(let i = 0; i < 2; i++){
               for(let j=0; j<playerList.length/2; j++){
                
                    teams[i][j] = playerList[index];
                    index += 2;
                    }
                index = 1;
               }
          

        let div1 = document.getElementById('div1');
        let select = document.querySelector('select');
        div1.innerHTML = "";
        for(let i=0; i<2; i++){
            if(i === 0){
                div1.innerHTML += "팀 1 : ";
            }
            else{
                div1.innerHTML += "팀 2 : ";
            }
            for(let j = 0; j < playerList.length/2; j++){
                let name = "";
                let tear = "";
                console.log(teams);

                name = teams[i][j].Name;
                tear = select.options[teams[i][j].rank].text; 

                div1.innerHTML += `${name}(`;
                div1.innerHTML += `${tear}) `;

                // playerList.forEach((e)=>{
                //     console.log(e); ///saasfwefewfwef
                // })
            }
            div1.innerHTML += '<br><br><br><br><br>';
        }
    }
    else{
        alert('사용 횟수를 모두 사용하셨습니다.');
    } 
}
