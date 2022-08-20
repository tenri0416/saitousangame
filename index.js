const randomBtn=()=>{
    let randomNum=Math.floor(Math.random()*11);
    console.log(randomNum);
    if(randomNum <=5){
        result=confirm("ぺっぺっぺー");
        if(result){
            alert("ぺっぺっぺー");
        }else{
            alert("斎藤さんだぞ");
        }
    }else{
        resulT=confirm("斎藤さんだぞ");
        if(resulT){
            alert("斎藤さんだぞ");
        }else{
            alert("ぺっぺっぺー");
        }
    }
}