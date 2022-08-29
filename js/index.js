/*Vue*/

const app =  Vue.createApp({
    data() {
        return {
            lol: 'lol'
        }
    }
})
app.component('nav-bar', {
    props: {
        home: ''
    },
    computed: {
        link() {
            if (this.home) {
                return ''
            } else {
                return '../'
            }
        }
    },
    template: `
    <section class="sticky-top py-2">
      <div class="container p-0 nav-container position-relative">
        <nav class="navbar navbar-expand-lg navbar-light bg-blue-2 p-0" role="navigation">
          <button id="btn" class="navbar-toggler p-1" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container-fluid">
          <!-- Navigation using Bootstrap template -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav d-flex align-items-center mb-2 mb-lg-0 w-100">
                <li class="nav-item d-flex justify-content-center custom-btn btn-5">
                  <a class="nav-link w-25 d-flex justify-content-center p-0" aria-current="page" :href="link + 'index.html'">
                    <svg
                      id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 593.25 591.62">                      
                      <path class="cls-1"
                        d="M568.35,320.37h-.46c.13.19.26.38.4.56C568.31,320.74,568.34,320.56,568.35,320.37Z"
                        transform="translate(-2.03 -0.44)" />
                      <path class="cls-1"
                        d="M552.29,320.37H355.41c-2.93-.05-27.45-.58-33.86-2.86-3.82-1.35-5.71-4.89-5.71-10.6q0-13.05,19.58-13.06l24.47.41H595.28q-2.44,121.15-77.51,202.34A294.8,294.8,0,0,1,418,567a297.28,297.28,0,0,1-119.73,25.09q-53.85,0-106.06-20.4a296.59,296.59,0,0,1-92.6-57.11,289,289,0,0,1-76.7-113.82q-19.57-53-19.58-105.25,0-97.08,60-176.23A288.87,288.87,0,0,1,166.94,33q62.42-31.2,131-31.2,120.33,0,207.23,82.81,38.76,37.13,38.76,52.62a11.41,11.41,0,0,1-4.28,9,15.42,15.42,0,0,1-10.39,3.67q-9.37,0-20-14.28Q427.37,26.66,299.06,26.65a246,246,0,0,0-31.36,2l-2.45,289.64,2.09,246a170.19,170.19,0,0,0,30.94,2.85,262,262,0,0,0,89.21-15.5Q496.66,512.93,544.32,409.3a263.46,263.46,0,0,0,21.57-69.15"
                        transform="translate(-2.03 -0.44)" />
                      <path class="cls-1" d="M568.35,320.37" transform="translate(-2.03 -0.44)" />
                      <path class="cls-1"
                        d="M566.08,338.51c-14.3,8.13-65.12,41.93-65.12,41.93L379.07,453.19c-2.54,1.45-23.87,13.57-30.54,14.89q-6,1.19-10.34-6.18-6.69-11.2,10.12-21.24l21.23-12.19L553,320.37"
                        transform="translate(-2.03 -0.44)" />
                      <path class="cls-1" d="M551.61,320.37" transform="translate(-2.03 -0.44)" />
                      <path class="cls-2"
                        d="M267.39,28a245.52,245.52,0,0,1,31.33-2q128.17,0,210,108.92,10.57,14.28,19.93,14.28A15.43,15.43,0,0,0,539,145.44a11.41,11.41,0,0,0,4.28-9q0-15.5-38.72-52.62Q426,8.86,320,1.77H277A295.1,295.1,0,0,0,63.25,118.51Q3.36,197.67,3.35,294.74c0,5.65.19,11.3.53,17H265Z"
                        transform="translate(-2.03 -0.44)" />
                      <path class="cls-2"
                        d="M258.32,296c3.54,10.84-1.11,29.25-11.75,35.75-12.44,7.6-27.26-4.69-42.89,5.1-9.27,5.82-9.37,13.47-15.83,13.79-10.75.53-13.25-20.56-26.55-23-12.93-2.34-17.64,16.29-36.77,18.39-14.48,1.58-15.86-8.65-36.76-9.71-17-.85-20.5,5.68-32.17,1.53s-12-12.18-23.49-14.29c-11.07-2.05-16.95,4.28-22.47.51-6.55-4.48-5.06-18-4.09-22C16.21,259.07,241.89,245.72,258.32,296Z"
                        transform="translate(-2.03 -0.44)" />
                    </svg></a>
                </li>
                <li class="nav-item d-flex flex-column justify-content-center custom-btn btn-5 dropdown">
                  <a class="nav-link d-flex justify-content-center align-items-center text-uppercase dropdown-toggle"
                    href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My work
                  </a>
                  <ul class="dropdown-menu bg-blue-2 w-100 border-0" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item text-center text-white" :href="link + 'coding/index.html'">Front-end</a></li>
                    <li><a class="dropdown-item text-center text-white" :href="link + 'v&p/index.html'">Multimedia</a></li>
                  </ul>
                </li>
                <li class="nav-item d-flex justify-content-center custom-btn btn-5">
                  <a class="nav-link d-flex align-items-center text-uppercase" aria-current="page"
                    :href="link + 'about/index.html'">About</a>
                </li>
                <li class="nav-item d-flex justify-content-center custom-btn btn-5">
                  <a class="nav-link d-flex align-items-center text-uppercase" aria-current="page"
                    :href="link + 'contact/index.html'">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 class="bg-blue-2 text-uppercase d-none ms-auto text-end m-0">Guillermo Bereche</h1>
      </div>
    </section>
        
    `
})
app.component('footer-bar', {
    template: `
        <footer class="bg-white">
        <div class="footer-container text-black">
            <div class="row">
            <div class="d-flex col">
                <ul class="d-flex flex-column justify-content-center align-items-left">
                <li class="p-1"><a href="../about/index.html" class="f-link">About Us</a></li>
                <li class="p-1"><a href="../contact/index.html" class="f-link">Contact Us</a></li>
                </ul>
            </div>
            <div class="d-flex text-center align-items-center justify-content-center col-6" role="contentinfo"> &#169; 2022
                by Guillermo
                Bereche
            </div>
            <div class="d-flex justify-content-center col">
                <!-- Social icons effect template from 'https://codepen.io/vishalamipara/pen/ZEYZVvr' -->
                <div class="social-icons d-flex align-items-center  ms-auto  icon-container">
                <a href="#" title="twitter">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
                <a href="#" title="instagram">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#" title="linkedin">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
    `
}) 
app.component('front-end', {
  data () {
    return {
      articles: {
        noopimok: {
          title: 'Noopimok',
          images: ['noopimok-2.png', 'noopimok-3.png', 'noopimok-4.png', 'noopimok-6.png'],
          backgrounds: ['Noopimok is an e-learning game about Algonquin language and culture.', 'Together with my team, composed by developers and designers, and with Michel Lacroix, who is the creative director of the project, we worked on the final version of the game. Below you can find my main responsabilities as a developer.'],
          responsabilities: ['Worked together with developers and designers in 4 different games (2, 3, 4, 6)', 'Kept constant communication with client to ensure their needs were satisfied', 'Pre-tested games, fixed buggy games, add new functionalities', 'Resized images and edited audio'],
          coding: {
            languages: 'HTML, CSS, SVG, JavaScript',
            tools: 'FileZilla'
          },
          link: 'https://noopimok.ca/'
        },
        sushi: {
          title: 'Sushi Fresh Paris',
          images: ['sushi-fresh-hp.PNG', 'sushi-fresh-1.PNG', 'sushi-fresh-2.PNG', 'sushi-fresh-3.PNG'],
          classes: 'display-vertical',
          backgrounds: ['Sushi Fresh is a restaurant located in Paris. The objective of this project was redesign and code the Sushi Fresh app.'],
          responsabilities: ['Display products with their respective name, image and prices', 'Let the user select and deselect their favorite products', 'Save selected products in the cart', 'Let the user remove any product from the cart'],
          coding: {
            languages: 'Languages: HTML, CSS/SCSS and JavaScript/JSON',
            libraries: 'Bootstrap, JQuery',
            tools: 'SASS, REST API, Node JS, NPM, Firebase',
            frameworks: 'React',
          },
          source: {
            text: 'Fresh Sushi Paris website',
            link: 'https://www.sushifreshparis.fr/index'
          },
          link: 'https://bere0058.github.io/sushi-fresh-fr/'
        },
        contact: {
          title: 'Contact Book',
          images: ['contactBook-1.png', 'contactBook-1.png'],
          backgrounds: ["Contact Book is an editable interface that keeps record of your contact's info"],
          responsabilities: ['Contacts info are retrieved from Contact Book Firebase database', "Users are able to filter contacts by using the search bar", "Users are able to access to contact's info", "Users are able to create, delete and modify contact's name, email and phone"],
          functionalities: true,
          coding: {
            languages: 'HTML, CSS, JavaScript/JSON',
            librairies: 'Bootstrap',
            frameworks: 'Vue JS',
            tools: 'Vite JS, Node JS, NPM, Firebase',
          },
          link: 'https://bere0058.github.io/contact-book/'
        },
        apodo: {
          title: 'Apodo Search',
          images: ['apodo-search.png', 'apodo-search-1.png'],
          backgrounds: ['APODO search is a web application where the user can request different  Astronomy Pictures of the Day by date using NASA APOD API.'],
          responsabilities: ['Users are able to choose to request different astronomy pictures', 'The application displays the title, date and the information of the corresponding picture', 'Users can save pictures in Favorites', 'Users can remove pictures from Favorites'],
          coding: {
            languages: 'HTML, CSS, JavaScript/JSON',
            libraries: 'Bootstrap, JQuery',
            tools: 'API REST'
          },
          link: 'https://bere0058.github.io/mtm6302-project-2/'
        },
      }
    }
  },
  template: `
    <article v-for="article in articles">
      <h2>{{article.title}}</h2>
      <!-- Project 1 code embed from Codepen --> 
      <section class="availability display-images" :class="article.classes">
        <picture class="p-0" v-for="image in article.images">
          <img :src="'img/' + image" class="w-100" alt="noopimok-2">
        </picture>
      </section>
      <!-- Table template from Bootstrap -->
      <!-- Background -->
      <section class="d-flex justify-content-center pt-4 flex-wrap">
        <table class="table w-100" role="table">
          <thead>
            <tr>
              <th scope="col" class=" h3">About the project</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="background in article.backgrounds">
              <td class="">
                {{background}}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <!-- Responsabilities -->
      <section class="d-flex justify-content-center pt-4 flex-wrap">
        <table class="table w-100" role="table">
          <thead>
            <tr>
              <th v-if="article.functionalities" scope="col" class=" h3">Functionalities</th>
              <th v-else scope="col" class=" h3">Responsabilities</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="responsability in article.responsabilities">
              <td class="">{{responsability}}</td>
            </tr>
            <tr>
              <th scope="col" class=" h3">Code:</th>
            </tr>
            <tr v-for="(code, name) in article.coding">
              <td class="">
                <p class="text-capitalize">{{name}}:</p> 
                <p>{{code}}</p>
              </td>
            </tr>
            <tr v-if="article.source">
              <td class="">
                Content, imagery and logo taken from <a class="text-decoration-underline" :href="article.link">{{text}}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="d-flex justify-content-center mb-3 flex-wrap">
        <div class="align-self-start d-flex link-btn">
          <a :href="article.link" class="custom-btn btn-5 p-1 rounded">Check it on live</a>
        </div>
      </section>
    </article>
  `
})
app.component('videography', {
  data() {
    return {
      videos: {
        blinds: {
          title: "Supreme Blinds Canada's advertisement",
          link: "https://www.youtube.com/embed/KY2B0Hh-rhw",
          description: "This's an advertisement for Supreme Blinds Canada. The ad showcases the main products of the business in a creative way",
          software: ['Adobe After Effects', 'Adobe Premier Pro', 'Adobe Photoshop', 'Adobe Audition']
        },
        threeWays: {
          title: "3 Ways of helping the environment",
          link: "https://www.youtube.com/embed/ismxj43oHTc",
          description: "This infographic present us 3 measures we can take in our daily life to help the environment.",
          software: ['Adobe After Effects', 'Adobe Photoshop', 'Adobe Audition']
        },
        pandemic: {
          title: "The pandemic told by a father",
          link: "https://www.youtube.com/embed/GGcvO1yuFfs",
          description: "The addressed topic in this interview is the impact of the pandemic in the relationship of father and son.",
          software: ['Adobe Premier Pro', 'Adobe Audition']
        }
      }
    }
  },
  template: `
    <section class="py-3" v-for="video in videos">
      <h3 class="pt-0">{{video.title}}</h3>
      <p>{{video.description}}</p>
      <h4 class="py-3">Software</h4>
      <ul>
        <li v-for="software in video.software">{{software}}</li>
      </ul>
      <iframe class="w-100 my-5" :src="video.link" title="video.title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
  `
})
const vm = app.mount('#app')

/*General Script*/

/*Navigation*/

/**********Declatation of variables**********/

/*Button variables*/
const window992 = window.matchMedia("(max-width: 992px)");
export default window992;
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const navDiv = document.querySelector('.nav-container');
const navContainer = document.querySelector('.sticky-top');
const button = document.querySelector('.navbar-toggler');
const title = document.querySelector('h1');

const footer = document.querySelector('.footer-container');

/**********Button click event**********/

button.addEventListener('click', () => {
    main.classList.toggle('bg-tblack');
    main.classList.toggle('blur');
    nav.classList.toggle('width');
    nav.classList.toggle('navbar');
    nav.classList.toggle('bg-blue-2');
    navContainer.classList.toggle('height');
    title.classList.toggle('sticky-title');
    footer.classList.toggle('blur');
    footer.classList.toggle('bg-tblack');
});

/*Nav container height match*/
if (window992.matches) {
    navDiv.style.height = title.clientHeight + "px";
};