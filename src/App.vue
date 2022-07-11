<template>
  <div class="container">
    <header>
      <div class="menu">
        <div class="logo">
          <img src="./assets/logo.png" alt="">
        </div>
        <ul>
          <li>About</li>
          <li>Rooms</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>


    <div class="welcome">
      <div class="level">
        <div>
          <div class="description">Get the celebrity treatment with world-class service at</div>
          <div class="name">Meliá Genova</div>
        </div>
        <div>
          <div class="line"></div>
          <div class="img-one">
            <img src="./assets/014.jpeg" alt="">
          </div>
          <div class="square-beige"></div>
        </div>
      </div>
      <div class="img-two">
        <img src="./assets/002.jpeg" alt="">
      </div>
      <div class="small-text">
        Thanks to its strategic position in a central but quiet tree-lined street, the Meliá Genova is a great choice
        for
        a business and leisure stay while discovering the city, but also for a romantic getaway or to celebrate special
        moments.
      </div>
      <button class="read-more">Explore More</button>
    </div>

    <div class="quote">
      <div class="quote-text">
        Melia Genova is a boutique hotel in the most elegant residential area of Genoa, within walking distance of the
        historical centre</div>
      <div class="img-one">
        <img src="./assets/003.jpeg" alt="">
      </div>
      <div class="circle"></div>
    </div>

    <div class="pic-text-pic">
      <div class="level">
        <div class="text-before">
          Just 600 m from the Fiera di Genova exhibition centre, the hotel is 5 minutes' walk from the
          Renaissance church of Santa Maria Assunta. Carlo Felice Theatre is just 10 minutes away on foot. Tickets for
          the
          Aquarium of Genoa, which is a 15-minute walk away, can be purchased at the reception.
        </div>
        <div class="img-one">
          <img src="./assets/004.jpeg" alt="">
        </div>
      </div>
      <div>
        <div class="text-after">
          Wellness centre with indoor swimming pool, hot tub, Turkish bath, rain shower and a fitness area, including a
          fully equipped 24-hour gym
          Suitable for hosting important meetings and small events in a flexible space, making it the ideal location for
          corporate and private events, cocktails or celebrations with a refined taste
        </div>
      </div>
    </div>

    <div class="rooms">
      <div class="text-first">The light and freshness of the rooms at the Meliá Genova complement the combination of
        warm
        platinum, titanium and copper tones in the fabrics, accompanied by delicate and luxurious facilities in the
        bathrooms made from fine white crystal and prestigious antique brown marble.
        <div class="img-one">
          <img src="./assets/011.jpeg" alt="">
        </div>
      </div>
      <h2>Rooms</h2>
      <div class="description">
        <div>
          The rooms and suites at this five star hotel have natural oak floors and superb facilities.
          Immerse yourself in a modern and luxurious atmosphere, enhanced by authentic photos by internationally famous
          photographers
          <div class="line"></div>
          <button>Check availability</button>
        </div>
        <div class="img-two">
          <img src="./assets/001.jpeg" alt="">
        </div>
      </div>

      <div class="circle"></div>

      <div class="text-to-img-two">The furnishings and decor are elegant and carefully selected, enriched with
        sophisticated
        details, beds with majestic headboards, an exclusive desk and a tantalizing minibar.</div>
      <div class="discount">
        <img src="./assets/006.jpeg" alt="">
        <div class="text">
          <div class="headline"><strong>5%</strong> discount for newcomers</div>
          <button class="m">Read More</button>
        </div>
      </div>
    </div>

    <div class="random">
      <div class="text-one">The living room adjacent to the lobby is ideal for customers seeking to relax in a
        comfortable reading room or a place reserved to meet and receive people. </div>
      <div class="square-big"></div>
      <div class="square-big2"></div>
      <div class="square-small"></div>
      <div class="imgs">
        <div class="img-one">
          <img src="./assets/007.jpeg" alt="">
        </div>
        <div class="img-two">
          <img src="./assets/008.jpeg" alt="">
        </div>
        <div class="img-three">
          <img src="./assets/009.jpeg" alt="">
        </div>
      </div>
      <div class="text-two">The historical building was designed by architect Giuseppe Crosa Vergagni in 1929, the same
        who gave life to the famous and historical Piazza De Ferrari in Genoa city center and other important buildings
        of the city.</div>
      <div class="headline">Blue Lounge & Restaurant to enjoy Ligurian and Mediterranean flavours, also very popular
        among locals</div>
      <div class="imgs2">
        <div class="img-four">
          <img src="./assets/010.jpeg" alt="">
        </div>
        <div class="square-color"></div>
        <div class="line"></div>
        <div class="img-five">
          <img src="./assets/005.jpeg" alt="">
        </div>
      </div>
      <div class="text-three">
        Guests can reserve the services of the wellness centre with an indoor swimming pool, gym, Turkish bath and hot
        tub.
      </div>
      <button class="more">More</button>
    </div>

    <div class="footer">
      <div class="small-logo">
        <img src="./assets/logo-black.svg" width="100px" alt="">
      </div>
      <ul>
        <li>Services</li>
        <li>Social Media</li>
        <li>Email Contact</li>
        <li>Find us</li>
      </ul>
    </div>


  </div>


</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #505050;
  
}
img {
  width: 400px;
}
header div{
  display: flex;
  flex-wrap: wrap;
}
header ul {
  list-style: none;
  display: flex;
  margin-left: auto;
  font-weight: 500;
}
header li {
  margin-left: 10px;
  cursor: pointer;
}
header li:hover {
  opacity: 0.7;
}
header .logo img {
  width: 100px;
  height: 50px;
  margin: 10px;
}

.welcome {
  width: 100%;
  max-width: 800px;
  margin: 100px auto;
}
.welcome .description {
  font-size: 2.6vw;
  margin-top: 100px;
}
.welcome .name {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 4vw;
  text-align: right;
  margin-right: 10px;
  font-weight: 900;
  margin-top:20px
  
}
.level {
  align-items: center;
  display: flex;
  justify-content: center;
}
.welcome .img-one img{
  max-width: 400px;
  width: 100%;
}

.welcome .line {
  position:absolute;
  width: 5px;
  margin-top: -40px;
  margin-left:10px;
  background-color: #deb887;
  height: 700px;
}
.welcome .square-beige {
  position: absolute;
  margin-top: -240px;
  margin-left: 100px;
  width: 100%;
  max-width: 200px;
  height: 400px;
  z-index:-1;
  background-color:#a1b394d1;
}
.welcome .img-two img{
  max-width: 540px;
  width: 100%;
  margin-top: 30px;
}
.welcome .small-text {
  width: 400px;
  margin-left: auto;
  font-style: italic;
  opacity: 0.8;
}
.welcome button {
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid #deb887;
  color: #deb887;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 300px;
}
.welcome button:hover {
  opacity: 0.6;
}

.quote {
  display: flex;
  width:100%;
  max-width: 700px;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 40px;
}
.quote img {
  width: 100%;
  
}
.quote .quote-text {
  max-width: 300px;
  font-size: clamp(14px, 3vw, 30px);
  text-align: right;
  margin-right:10px;
  
}
.quote .circle {
    width: 30vh;
      height: 30vh;
      background: repeating-linear-gradient(to bottom,
          transparent 0px,
          transparent 2.5px,
          #e4e195 2.5px,
          #e4e195 5px);
      border-radius: 50%;
      position: absolute;
      transform: rotate(20deg);
      margin-left: 50vw;
      margin-top: -140px;
      z-index: 0 !important;
  }


  .pic-text-pic {
    max-width: 800px;
    width: 100%;
    margin: 80px auto;
    
    
  }
    .pic-text-pic .text-before {
      font-size: clamp(12px, 2vw, 18px);
      max-width: 200px;
      padding-left: 10px;
      padding-right: 10px;
      border-left: 5px solid rgba(218, 174, 141, 0.656);
      text-align: justify;
      color:#505050be

    }

    .pic-text-pic img {
      max-width: 580px;
      width: 100%;
    }
    .pic-text-pic .text-after {
      max-width: 700px;
      width: 100%;
      text-align: center;
      margin: 30px auto;
      font-weight: 500;
      color:#c5914e
      
    }

.rooms {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  
}
.rooms .text-first {
  
  display: flex;
  align-items:center;
  font-size: clamp(12px, 2vw, 18px);
  font-weight: 600;
  color:#565656;
  text-align: justify;
  padding-bottom:40px;
  border-bottom: 10px solid #c5924e5e;
}
.rooms .img-one img {
  max-width: 380px;
  margin-left: 10px;
  margin-right: 0px;
  }

.rooms h2 {
 font-size: clamp(30px, 6vw, 60px);
  margin-top: -7vh;
    }
.rooms .description {
  display: flex;
  justify-content: center;
}
.rooms .line {
  width: 30%;
  margin: 20px auto;
  height: 3px;
  background-color: #505050;
}
.rooms button {
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid #de8787;
    color: #de8787;
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 20px;
   

}
.rooms .description img {
  margin-top:-40px;
}

.text-to-img-two {
  max-width:400px;
  text-align: justify;
  margin-left: 50%;
  

}
.rooms .circle {
   width: 20vh;
   height: 20vh;
   background: repeating-linear-gradient(to bottom,
       transparent 0px,
       transparent 2.5px,
       rgba(51, 51, 51, 0.802) 2.5px,
       rgba(51, 51, 51, 0.706) 5px);
   border-radius: 50%;
   position: absolute;
   transform: rotate(120deg);
   margin-left: 50vh;
   margin-top: -25vh;
   
 }
 .rooms .discount {
  display: flex;
  align-items: center;
  margin-top: 30px;
 }
 .rooms .discount .text {
  margin-left: 20px;
 }
 .rooms .discount img {
  width: 60%;
 }
  .rooms .discount .text .headline {
      font-size: 2rem;
      font-weight: 600;
      line-height: 28px;
      padding-bottom: 20px;
  }
    .rooms .discount .text .headline strong {
      font-weight: 900;
      font-size: 2.5rem;
      color:#c5914e;
    }
  .rooms .discount .text button {
    background-color: #deb887;
    color:#565656;
    border-color: #565656;
    cursor: pointer;
  }
    .rooms .discount .text button:hover {
      opacity: 0.5;
      background-color: transparent;
    }

  .random {
    position: relative;
    max-width: 800px;
    width: 100%;
    margin: 80px auto;
    
  }
  .random img {
    position: relative;
 
  }
  .random .square-big {
    width: 500px;
    height: 300px;
    background-color: #c5924ec4;
    position: absolute;
    margin-left: 300px;
    margin-top: 180px;
  }
   .random .square-big2 {
      width: 300px;
      height: 400px;
      background-color: #bcbb72a3;
      position: absolute;
      margin-left: 400px;
      margin-top: -150px;
      z-index: -1;
     }
  .random .square-small {
    width: 150px;
    height: 150px;
    background-color:#e4e195e1;
    position: absolute;
    margin-left: 330px;
    margin-top: 500px;
    z-index: 1;
    transform: rotate(160deg);
  }
  .random .imgs {
    display: flex;
    flex-wrap: wrap;
  }
 


    .random .imgs .img-one {
      margin-top: 40px;
      margin-left: 30px;
    }
     .random .imgs .img-one img {
      max-width: 600px;
      width: 100%;
      
     }

     .random .imgs .img-two img{
      margin-top: -70px;
     }

     .random .imgs .img-three img{
      margin-top: 70px;
      margin-left: 20px;
      max-width: 360px;
     }

     .random .text-one {
      width: 80%;
      margin:0 auto;
      font-size: 16px;
      font-weight: 500;
      font-style: italic;
      opacity: 0.9;
      text-align: center;
     }
     .random .text-two {
      width: 400px;
      margin-top: -100px;
      margin-bottom: 70px;
      text-align: justify;
     }
     .random  .headline {
      font-size: 30px;
      text-align: right;
      line-height: 20px;
      margin-bottom: 30px;
      color:#c5914e;
      border-right: 5px solid #505050;
      padding-right: 20px;
     }
     .random .imgs2 img {
      max-width: 350px;
      margin-right: 20px;
      position: relative;
      
     }
     .random .imgs2 {
      max-width: 800px;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
     }
      .random .line {
        width: 500px;
        height: 5px;
        background-color:#deb887;
        position: absolute;
        margin-top: 30px;
        margin-left: -400px;
        z-index: 1;
       
      }
      .random .square-color {
         width: 500px;
        height: 300px;
        margin-left: -50px;
        margin-top: 100px;
        background-color:#dbd1a3;
        position: absolute;
        z-index: -1;
      }
      .random .text-three {
        font-size: 20px;
        width: 80%;
        font-style: italic;
        margin: 30px auto;
      }
      .random .more  {
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid #a7a07e;
    color: #aca37f;
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 20px;
    
      }

  .footer {
    width: calc(100% + 20px);
    margin-left: -10px;
    margin-bottom: -20px;
    background-color: #565656;
    color: #f2efe2;
    display: flex;
    align-items: center;


  }
   .footer .small-logo {
    filter: invert(1);
   
   }
  .footer .small-logo img {
    width: 150px;
    margin: 40px;
  }
   .footer ul {
    list-style: none;
    margin-left: auto;
    display: flex;
   }
   .footer li {
    margin-right: 20px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
   }
     .footer li:hover {
      text-decoration: underline;
      text-decoration-style: wavy;
     text-decoration-color: #dbd1a3;
     }
</style>
