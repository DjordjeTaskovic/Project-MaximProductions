
  $( document ).ready(function() {
    navigacija();
    aboutsekcija();
    features();
    servisi();
    komentari();
    portfolio();
    team();
    pitanjafaq();
    footerispis();
    author();
    forma();
    


    function navigacija(){

      //ispis navigacije
      let nizMeni = [
        ["index.html", "Home"],
        ["index.html#about", "About"],
        [ "index.html#services", "Services"],
        ["index.html#portfolio", "Portfolio"],
        ["index.html#team", 'Team'],
        ["index.html#contact", 'Contact']
        ];

        var Nav = document.getElementsByTagName('nav');
        //dohvatanje
        let ispis = "<ul>"
          for(let i=0;i<nizMeni.length;i++){
            ispis+=` <li><a href="${nizMeni[i][0]}">${ nizMeni[i][1]}</a></li>`
          }
        //ispisivanje
          ispis += "</ul>"
          for (let i =0; i< Nav.length;i++) {
            Nav[i].innerHTML+=ispis;
          }
    
    
        //mobile navigacija
     
      if ($('.nav-menu').length) {
        //cloniranje nav menija

        var mobile_nav =$('.nav-menu').clone();

        mobile_nav.removeClass('nav-menu d-none d-lg-block').addClass('mobile-nav d-lg-none');

        //ispisivanje elemenata
        $('.head').append(mobile_nav);
        $('.head').prepend(`<button type="button" class="mobile-nav-toggle d-lg-none">
        <i class="icofont-navigation-menu"></i></button>`
        );
        $('.head').append('<div class="mobile-nav-overly"></div>');

        //dodavanje gotovih css klasa
        $(document).on('click', '.mobile-nav-toggle', function(e) {
          $('.head').toggleClass('mobile-nav-active');
          //promena icokone nav menija
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').toggle();
        });
    
      } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
      }
     
    
 


    }

    function aboutsekcija(){
      let Naslov = ["Here is Something About us"];
      let Opisnaslova  = [" We are the group of people from many different places gatered into one organisation where our job is the number one to do list"];
    
      let TextAbout=[
        ["Our Experience","Among us are highly verified individuals with at, </br>least 3 year of professional work in our branch."],
        ["Dedication","Love towards our work is a just a small work,</br>compare to our dedication and fast closing deals."],
        ["Self Improvement","We believe that our group is progressing every day,</br>by learning new things and sharing opinions among colleges."]
          ];

      //kostrukcija
      let divabout= document.createElement('div');
      divabout.classList.add('container');
      let divred=document.createElement('div');
      divred.classList.add('row');
    

         let divslike=document.createElement('div');
         divslike.classList.add('col-xl-6','col-lg-7');
         divslike.innerHTML=`<img src="assets/img/about-img.jpg" class="img-fluid" alt="aboutslika">`
         //console.log(divslike);

         let divpodaci=document.createElement('div');
         divpodaci.classList.add('col-xl-6','col-lg-5','pt-5','pt-lg-0');

         divpodaci.innerHTML=`   <h3>${Naslov}</h3>
                                  <p>${Opisnaslova}</p>`

          for (let i = 0; i < TextAbout.length; i++) {
                divpodaci.innerHTML+=` <div class="icon-box" >
                                  <i class="bx bx-receipt"></i>
                                  <h4>${TextAbout[i][0]}</h4>
                                  <p>${TextAbout[i][1]}</p>
                                </div>`
                                }           
         //console.log(divpodaci);

                divred.append(divpodaci);
                divred.prepend(divslike);
                 divabout.append(divred);
                
                 if($('.about').length){
                  let Divaboutmain = document.querySelector('.about');
                  Divaboutmain.append(divabout);
                 }

                
                
       
    }
     function features(){
      let Naslov = ["Features"];
      let Opisnaslova  = ["A lot of verient service for better outcome."];
    
      let TextAbout=[
        ["Features","We like to distinctively add on our charm in making."],
        ["Volume of care","We tend to reserve every part for better outcome."],
        ["Design","Veriity of costumazation at our desposal."],
        ["Inovation","Ceration something new for vintage is our part."],
];
let Slike=[
  ["features-1.png","features-2.png"]
  ];
  let Filter=['tab1','tab2','tab1','tab2'];

      //kostrukcija fe
      let divred=document.createElement('div');
      divred.classList.add('row');
    
      let divnaslov=document.createElement('div');//Naslov
      divnaslov.classList.add('section-title');
      divnaslov.innerHTML=` <h3>${Naslov}</h3>
                                  <p>${Opisnaslova}</p>`


         let divslike=document.createElement('div');//Slike
         divslike.classList.add("col-lg-7","ml-auto");
        for (let index = 0; index < Slike.length; index++) {
          divslike.innerHTML+=`
          <div class="tab-content">
                          <div class="tab-pane active" id="tab1">
                            <figure>
                              <img src="assets/img/${Slike[index][0]}" alt="features${index}" class="img-fluid">
                            </figure>
                          </div>
                          <div class="tab-pane" id="tab2">
                            <figure>
                              <img src="assets/img/${Slike[index][1]}" alt="features${index+1}" class="img-fluid">
                            </figure>
                          </div>
                    </div>
         `
          
        }
         //console.log(divslike);

         let divpodaci=document.createElement('div');//podaci
         divpodaci.classList.add("col-lg-4","mb-5","mb-lg-0");
            let ul=document.createElement('ul');
            ul.classList.add("nav","nav-tabs","flex-column");
            

          for (let i = 0; i < TextAbout.length; i++) {
                ul.innerHTML+=` 
                <li class="nav-item" style="cursor:pointer" data-filter="${Filter[i]}">
                <a class="nav-link">
                    <h4>${TextAbout[i][0]}</h4>
                    <p>${TextAbout[i][1]}</p>
                  </a>
                </li>
                `
             }   
            divpodaci.append(ul);
         // console.log(divpodaci);
             divred.append(divslike);
             divred.prepend(divpodaci);
             if($('.features').length){
             let Divfeatures = document.querySelector('.features >.container');
             Divfeatures.appendChild(divnaslov);
             Divfeatures.appendChild(divred);
            
            }

    }
    //filter Features
$('.nav-tabs>li').click(function(){

  let filter = $(this).attr('data-filter');
  //console.log(filter);
  if(filter =='tab1'){
    $('.tab-pane').hide('1000');
    $('#'+filter).show('1000');
  } 
  else
  {
    $('.tab-pane').hide('1000');
    $('#'+filter).show('1000');

  }
  
});

    function servisi(){
      let Naslov = ["Services"];
      let Opisnaslova  = [" We offer a wide range of professional tailor-made design solutions, from Brand design and Illustration to Full Product Marketing ,Infographics and a lot of verient service for beter outcome."];
    
      let TextAbout=[ 
        ['Marketing','Distribition of our product acros a wide range of media for better recognison.'],
      ['Creative idea','Taking semi-old ideas and recreating something fain new for a minimum costumazation .'],
      ['Photography','We are masters in our craft, focusing on art direction,photography, set design & styling.'],
      ['Brand Building','Creative-brand buiding is a key to our sucsess and our substencial matter.']
     ];
     let Bojaicone=['pink','cyan','green','blue'];
     let Nazivicone=['phone','file','camera','world'];


      //kostrukcija
      let divred=document.createElement('div');
      divred.classList.add('row');
    
      let divnaslov=document.createElement('div');//Naslov
      divnaslov.classList.add('section-title');
      divnaslov.innerHTML=` <h2>${Naslov}</h2>
                                  <p>${Opisnaslova}</p>`
       
         //console.log(divpodaci);
          for (let i = 0; i < TextAbout.length; i++) {
                divred.innerHTML+=`<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" >
                    <div class="icon-box icon-box-${Bojaicone[i]}">
                    <div class="icon"><i class="bx bx-${Nazivicone[i]}"></i></div>
                    <h4 class="title"><a href="">${TextAbout[i][0]}</a></h4>
                    <p class="description">${TextAbout[i][1]}</p>
                  </div>
              </div>`
                 }  
               if($('.services').length){
                let Divservisi = document.querySelector('.services >.container');
                Divservisi.append(divnaslov);
                Divservisi.append(divred);
               }

    }

     function komentari(){
      if($('#testimonials').length){
      let Naslov = ["Tesimonials"];
      let Opisnaslova  = [" What our costomers say about us we take as pride and openig to new improvements..."];
    let KomentariDesc=[`Maxim is highly configurable and works great!The whole team went above and beyond to help me fix an issue which is remarkable.`,
    `I tried a dozen of sites, but this particular one was the most intuitive, with just the quickest service. Amazed buy the work.`,
    `They have flawlessly and very easy to recognize  workflow. I was kinda surprised at the start but over all nice work.`,
    ` I am impressed at first,and at the second thought amazed. Can't wait to try out with a different kind of project.`,
    ` Masters in craft, focusing on art direction, photography, set design & styling. Keep up the good work.`];
    
        let ImeKorisnika=['Saul Goodman','Sara Karlis','Janna Karlis','Matt Brandon','John Larson'];
      let ZanimanjeKorisnika=['Ceo &amp;Founder','Store Owner','Worker','Freelancer','Entrepreneur']

      let divnaslov=document.querySelector('#testimonials .section-title')//Naslov
      divnaslov.innerHTML+=` <h2>${Naslov}</h2>
                                  <p>${Opisnaslova}</p>`
      
      let divcontrols=document.querySelector('.controls');//Controls
      divcontrols.innerHTML+=` <div class="controls-top d-flex justify-content-center">
      <a class="btn-floating btn-lg" href="#multi-item-example" data-slide="prev"><i class="bx bx-left-arrow"></i></a>
      <a class="btn-floating btn-lg" href="#multi-item-example" data-slide="next"><i class="bx bx-right-arrow"></i></a>
    </div>`

    let divindicators=document.querySelector('.indicators');//Indicators
    divindicators.innerHTML+=` <ol class="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    <li data-target="#multi-item-example" data-slide-to="2"></li>
  </ol>`

  let divprvi=document.querySelector('.divprvi');
  let divprviRed=document.querySelector('.divprvi .row');
  for (let index = 0; index < 3; index++) {
   divprviRed.innerHTML+=`   <div class="col-md-4">
                    <div class="card mb-2">
                      <div class="testimonial-item">
                        <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>${KomentariDesc[index]}
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-${index}.jpg" class="testimonial-img" alt="">
                  <h3>${ImeKorisnika[index]}</h3>
                  <h4>${ZanimanjeKorisnika[index]}</h4>
                  </div>
                  </div>
                  </div>
                  `}

     let divdrugi=document.querySelector('.divdrugi');
     let divdrugiRed=document.querySelector('.divdrugi .row');
  
  for (let index = 3; index <5; index++) {
    divdrugiRed.innerHTML+=`   <div class="col-md-4">
                     <div class="card mb-2">
                       <div class="testimonial-item">
                         <p>
               <i class="bx bxs-quote-alt-left quote-icon-left"></i>${KomentariDesc[index]}<i class="bx bxs-quote-alt-right quote-icon-right"></i>
                   </p>
                   <img src="assets/img/testimonials/testimonials-${index}.jpg" class="testimonial-img" alt="">
                   <h3>${ImeKorisnika[index]}</h3>
                   <h4>${ZanimanjeKorisnika[index]}</h4>
                   </div>
                   </div>
                   </div>
                   `}

               }//length
    }//komentari

    function portfolio() {
      let Naslov = ["Portfolio"];
      let Opisnaslova  = [`Here is our collection of products that we reserved and rebranded into newly
      developed and repurposed brands that are highly notable even today. 
      Working just on this brand helped us improve into better organization
       group and made us official income along the way..`];

      let Opisslike=['Custom made headset','New-gen watch','Pine spice','Coverage faudation','Womans fragrance','Aqua-water','Aquosa water','Modified sungasses','Body oil'];
      let NazivSlike=['Accessories1','Accessories2','Consumables1','Beauty1','Beauty2','Consumables2','Consumables3','Accessories3','Beauty3'];
      let Fliterw=['app','app','card','web','web','card','card','app','web'];
      

      let divnaslov=document.createElement('div');//Naslov
      divnaslov.classList.add('section-title');
      divnaslov.innerHTML=` <h2>${Naslov}</h2>
                                  <p>${Opisnaslova}</p>`

      let Buttons=document.createElement('div');//Buttons
      Buttons.classList.add('row');
      Buttons.innerHTML+=`
      <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
                  <li data-filter="all" class="filter-active">All</li>
                  <li data-filter="app">Accessories</li>
                  <li data-filter="web">Beauty</li>
                  <li data-filter="card">Consumables</li>


            </ul>
    </div>
    `
   
    let Portfoliomain=document.createElement('div');//Portfoliomain
    Portfoliomain.classList.add('row');
    Portfoliomain.classList.add('portfolio-container');
      for (let index = 0; index < Fliterw.length; index++) {
       
        Portfoliomain.innerHTML+=`
        <div class="col-lg-4 col-md-6 portfolio-item ${Fliterw[index]} ">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-${index+1}.jpg" class="img-fluid"
           alt="port.slika${index+1}">
          <div class="portfolio-info">
            <h4>${NazivSlike[index]}</h4>
            <p>${Opisslike[index]}</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-${index+1}.jpg" data-gall="portfolioGallery" 
              class="venobox" title="${NazivSlike[index]}"><i class="bx bx-zoom-in"></i></a>
            </div>
          </div>
        </div>
      </div>` 
    
    }
    

      if($('.portfolio').length){
        let Portfoliocontainer=document.querySelector('.portfolio >.container');
      Portfoliocontainer.appendChild(divnaslov);
      Portfoliocontainer.appendChild(Buttons);
      Portfoliocontainer.appendChild(Portfoliomain);
      }

     
     

    }
    
    function team(){
      if($('.team').length){

        
      let Naslov= ["Meet our team "];
      let Opisnaslova = ["Yours truly are here.."];
      let TeamImena=['Walter White','Sarha Jonson','Peter Quill','Amanda Parker'];
      let TeamZanimanja=['Chief Executive Officer','Product Manager','CTO','Acountant'];

      let NaslovTeam = document.querySelector('.team>.container>.section-title');
      for (let i= 0; i < Naslov.length; i++) {
        NaslovTeam.innerHTML+=`
                      <h2>${Naslov[i]}</h2>
                      <p>${Opisnaslova[i]}</p>
                      `
        
      }
      let Teamred = document.querySelector('.team>.container>.row');
      for (let i = 0; i < TeamImena.length; i++) {
        Teamred.innerHTML+=` <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="member">
          <img src="assets/img/team/team-${i+1}.jpg" class="img-fluid" alt="member${i+1}">
          <div class="member-info">
            <div class="member-info-content">
              <h4>${TeamImena[i]}</h4>
              <span>${TeamZanimanja[i]}</span>
            </div>
            <div class="social">
              <a href=""><i class="icofont-twitter"></i></a>
              <a href=""><i class="icofont-facebook"></i></a>
              <a href=""><i class="icofont-instagram"></i></a>
              <a href=""><i class="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>`
        
      }
      }


    }
   function pitanjafaq(){
     if($('.faq').length){
      
        let Naslov= "F.A.Q";
        let Opisnaslova = "Here are some  asked questions..";
        let Pitanje=[`
        -What is Maxim agency and how does it work?`,
        `How much does Maxim services cost?`,
        `Do I need to be a designer or developer to use Shopify?`,
        `What happens when I receive an order?`,
        `In what countries can I use Shopify?`];
        let Odgovornapitanje=[`Maxim is a complete commerce platform that lets you start, grow, and manage a business.
         Via branding your suggested product we are innovating them into  selling products.`,
        `Try Maxim free for 14 days, no credit card required.
        After your trial expires, choose a pricing plan that suits the size and stage of your business
        Manage products, inventory, payments, and shipping`,
        `No, you don’t need to be a designer or developer to use our terms and services.
        Customize the look and feel of your Product with the online builder and themes.`,
        `Depending on your preferences, you’ll receive an email, mobile app notification, or RSS notification every time your receive an order.`,
        `You can use Maxim in nearly every country in the world.`];
  
  
        let Dnaslov = document.querySelector('.faq>.container>.section-title');
  
        Dnaslov.innerHTML=`
        <h3>${Naslov}</h3>
        <p>${Opisnaslova}</p>
        `
        let Dlista =document.querySelector('.faq>.container>.faq-list');
        let ul =document.createElement('ul');
  
        
         for (let i = 0; i < Pitanje.length; i++) {
          ul.innerHTML+=` 
          <li>
          <i class="bx bx-help-circle icon-help"></i> 
          <a data-toggle="collapse" class="collapse" href="#faq-list-${i}">
         ${Pitanje[i]}
          <i class="bx bx-chevron-down icon-show"></i>
          <i class="bx bx-chevron-up icon-close"></i></a>
  
          <div id="faq-list-${i}" class="collapse" data-parent=".faq-list">
            <p>${Odgovornapitanje[i]}</p>
          </div>
  
        </li>`
        
         }
       for (let i = 0; i< ul.length; i++) {
       // ul[i][0].classList.add('active');
        
       }
      
        Dlista.appendChild(ul);
        let Prvi=document.querySelector('#faq-list-0');
       Prvi.classList.add("show");
     
     }
   }
    function footerispis(){
      if($('#footer').length){
      let Smedia=['twitter','facebook','instagram','google-plus','linkedin'];
      let Links1=['About','Services','Portfolio'];
      let Links2=['Product-placement','Product-Management','Marketing','Graphic Design'];
      let sociallinks=document.querySelector('.footer-info>.social-links');
     for (let index = 0; index < Smedia.length; index++) {
       
      sociallinks.innerHTML+=`
      <a href="${Smedia[index]}.com" class="${Smedia[index]}"><i class="bx bxl-${Smedia[index]}"></i></a>`
     }

     let usefullinks=document.querySelector('.useful-links>ul');
     for (let index = 0; index < Links1.length; index++) {
       
      usefullinks.innerHTML+=`
           <li><i class="bx bx-chevron-right"></i> <a href="index.html#${Links1[index].toLowerCase()}">
           ${Links1[index]}</a></li>`
      
     }
     usefullinks.innerHTML+=` <li><i class="bx bx-chevron-right"></i> <a href="author.html">Author-page</a></li>
           <li><i class="bx bx-chevron-right"></i> <a href="Dokumentacija.pdf">Documentation-link</a></li>`
    
   
     let flinks=document.querySelector('.flinks>ul');
     for (let index = 0; index < Links2.length; index++) {
       
      flinks.innerHTML+=`
           <li><i class="bx bx-chevron-right"></i> <a href="">
           ${Links2[index]}</a></li>`
     }

   
    }
    }//footer
    function author(){
      if($('.author').length){
        let Opis=[` I am currently a student at the ICT College.
         In high school, I first encountered
          web design and a little bit of programming and I did not truly undertand it but liked it. 
          It made me choose this college. In my spare time, I like to watch movies,
           go running in park,explore new things.`];


           var Divautor= $('.author-inner');
           var divslike =document.createElement('div');
           divslike.classList.add('col-lg-5','col-sm-12','d-flex','justify-content-center');
           divslike.innerHTML=`<img class="img-fluid w-50  "  
           src="assets/img/author.jpg" alt="Author picture"/>
           
           `
           Divautor.append(divslike);

           var divopis =document.createElement('div');
           divopis.classList.add('col-lg-5','col-sm-12');
           divopis.innerHTML=`<p>${Opis}</p>`
           Divautor.append(divopis);

          

      }
    }//author
  
//Filter Portfolio

    $('#portfolio-flters>li').click(function(){
      $("#portfolio-flters>li").removeClass('filter-active');
      $(this).addClass('filter-active');

      let filter = $(this).attr('data-filter');
      if(filter =='all'){
      $('.portfolio-item').show('1000');
      }
      else{
        $('.portfolio-item').hide('1000');
        $('.' +filter).show('1000');
      }
    });
    

    
    // Back to top button
  $(document).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });

  //Provera podataka forme
function forma(){
    let podaciForme = [];
    let Dugme = $('#dugme');
    let Subscribe = $('#Subscribe');

Dugme.on('click',function() {

    let ime = $('#name');
    let email = $('#email');
    let subject = $('#subject');
    let message = $('#message');

  let imeRe=/^[A-Z]\w{1,9}$/;//Tonmawwq{8 karaktera}
  let emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;//test@gmail.edu.com
  let subjectRe=/^\w{2,15}(\s\w{2,20})*$/;//Project unindentified
 
//ime 
  if(ime.val() == '') { 	        
   
      ime.val("");
   ime.next().text('The name can not be empty.');

  }
   else if(!imeRe.test( ime.val() ) ) {
      
      ime.val("");
  ime.next().text('Eg: Nathaniel');
  } else {
     
      podaciForme.push(ime.val());
      ime.val("");
    ime.next().text('');
      }
      //email 
  if(email.val() == '') { 	       
   
      email.val("");
   email.next().text('The email can not be empty.');

  }
   else if(!emailRe.test( email.val() ) ) {
      
      email.val("");
  email.next().text('Eg: test@gmail.edu.com');
  } else {
     
      podaciForme.push(email.val());
      email.val("");
    email.next().text('');
      }
        //subject 
  if(subject.val() == '') { 	       
   
      subject.val("");
   subject.next().text('Please enter at least 8 chars of subject.');

  }
   else if(!subjectRe.test( subject.val() ) ) {
      
      subject.val("");
  subject.next().text('Eg: Product Request ');
  } else {
     
      podaciForme.push(subject.val());
      subject.val("");
    subject.next().text('');
      }
       //message 
  if(message.val() == '') { 	       
   
      message.val("");
   message.next().text('Please write something for us.');

  } else {
     
      podaciForme.push(message.val());
      message.val("");
    message.next().text('');
      }

    
    console.log(podaciForme)




});
Subscribe.on('click',function(){

  let email = $('#smail');
  let emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;//test@gmail.edu.com

 //smail 
 if(email.val() == '') { 	       
   
  email.val("");
email.next().text('The email can not be empty.');

}
else if(!emailRe.test( email.val() ) ) {
  
  email.val("");
email.next().text('Eg: test@gmail.edu.com');
} else {
 
  podaciForme.push(email.val());
  email.val("");
email.next().text('');
  }

})
  
}//forma

//tekst plugin text
$('.tlt').textillate({
  loop: true,
  in: {
    effect: 'tada',
    delayScale: 2.0,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
},

out: {
  effect: 'flash',
  delayScale: 1.5,
  delay: 200,
  sync: false,
  shuffle: false,
  reverse: false,
  callback: function () {}
} });
$('.weltext').textillate({
in:{
  effect: 'flash',
  delayScale: 1.5,
  delay: 50,
  sync: false,
  shuffle: false,
  reverse: false,
  callback: function () {}
}

});

     
});//ready

