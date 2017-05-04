var now_date = new Date();
$.each({
    '55.html':['2017/5/5','2017/5/5 23:59:59'],
},function(redirect_url,date_time){
    if(new Date(date_time[0]) <= now_date && now_date <= new Date(date_time[1])){
        //対象日時の場合
        document.location.href = redirect_url;
    } else {
        //対象日時外の処理をここに書く
    }
});