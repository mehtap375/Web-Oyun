
function ButterFlyGame(){};

ButterFlyGame.init = function() {
    
    Page.init();
    Map.init();
    Sound.init();
    Board.init();
    Player.init();
    Bug.init();

    //Start page in arka planını oyun olarak göster

    //Oyuncunun değerlerini resetle
    Player.clear();
    
    //Bölümü oluştur
    Level.createLevel(1);
    
    //Başlangıç sayfasını aç
    Page.show(Page.NAME.START);
    
    //Yüklenme sayfasını kapat
    document.getElementById("loading-page").style.display = "none";
    
    //Bu bir mobile browser değil
    if(window.mobileAndTabletcheck() == false){
        document.getElementById("keys-btn-container").style.display = "none";
    }

};

ButterFlyGame.startGame = function(){
    
    //Önce game sayfasına git
    Page.show(Page.NAME.GAME);
    
    //Oyuncunun değerlerini resetle
    Player.clear();
    
    //Bölümü oluştur
    Level.createLevel(1);
    
    //Oyuncunun ok tuşlarını aktif yap
    Player.active(1);

    //Önceki böcekleri temizle
    Bug.clear();

    //Yeni böcekleri oluştur.
    myBug1ID =  Bug.createNewBug("bug1");
    myBug2ID =  Bug.createNewBug("bug1");
    myBug3ID =  Bug.createNewBug("bug2");
    
};

//html sayfası yüklendiğinde ButterFlyGame.init fonksiyonunu çalıştır.
window.addEventListener( 'load', ButterFlyGame.init, false );

