

/* GET home page. */

 const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
   {
   	'baslik': 'Anasayfa',
   	'footer': 'Sarpkan Savaşkan 2020',
   	'sayfaBaslik':{
   		
   		'siteAd':'Mekan32',
   		'aciklama':'Isparta civarındaki mekanları keşfedin!'
   	},
   	'mekanlar':[
   	{
   		'ad':'Starbucks',
   		'adres':'Centrum Garden AVM',
   		'puan':3,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'10km'

   	},
   	{
   		'ad':'Gloria Jeans',
   		'adres':'İyaş Park AVM',
   		'puan':3,
   		'imkanlar':['Çay','Kekler','Pastalar','Kahve'],
   		'mesafe':'2km'

   	},
   	{
   		'ad':'Mado',
   		'adres':'Merkez',
   		'puan':4,
   		'imkanlar':['Dondurma','Kekler','Pastalar'],
   		'mesafe':'4km'

   	},
   	{
   		'ad':'MackBear Coffee',
   		'adres':'Fatih Mahallesi',
   		'puan':3,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'4km'

   	},
   	{
   		'ad':'Burç Fırın',
   		'adres':'Merkez',
   		'puan':5,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'5km'

   	},


   	]
   }
   );
}
const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay',{

  	'baslik':'Mekan Bigisi',
  	'footer': 'Sarpkan Savaşkan',
  	'sayfaBaslik':'Starbucks',
  	'mekanBilgisi':{
  		'ad':'Starbucks',
  		'adres':'Centrum Garden AVM',
  		'puan':5,
  		'imkanlar':['Dünya Kahveleri','Pasta','Kek'],
  		'koordinatlar':{
  			'enlem':37.781885,
  			'boylam':30.566034
  		},
  		'saatler':[
  		 {
  			'gunler':'Pazartesi-Cuma',
  			'acilis':'07:00',
  			'kapanis':'23:00',
  			'kapali':false
  		 },
  		 {
  			'gunler':'Cumartesi',
  			'acilis':'09:00',
  			'kapanis':'22:30',
  			'kapali':false
  		 },
  		 {
  			'gunler':'Pazar',
  			
  			'kapali':true
  		 }
  		],
  		'yorumlar':[
  		 {
  			'yorumYapan':'Sarpkan Savaşkan 2020',
  			'puan':3,
  			'tarih':'30 Kasım 2020',
  			'yorumMetni':'Kahveleri çok güzel'
  		 }

  		]
  	}
  });
}
 
const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle','footer': 'Sarpkan Savaşkan 2020', });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}