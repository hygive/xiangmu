export default{


getWeek(i){
    var aa
    if(i>new Date().getDay()){
        aa = "星期" + "日一二三四五六".charAt(new Date().getDay()- i + 7);
    } else {
        aa = "星期" + "日一二三四五六".charAt(new Date().getDay()-i);
    }
    return aa
}


}