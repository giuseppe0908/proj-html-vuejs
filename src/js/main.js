Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    id: '',
    i: 0,
    open: false,

//--NAV-BAR
    link_list: [
      {
        name: "Courses",
        new: 0,
      },
      {
        name: "Course Formats",
        new: 0,
      },
      {
        name: "Add Course",
        new: 1,
      },
      {
        name: "Pages",
        new: 0,
      },
      {
        name: "Demos",
        new: 0,
      },

    ],
    icons: [
      {
        name: "invision",
        icone: "fab fa-invision",
      },
      {
        name: "instagram",
        icone: "fab fa-instagram",
      },
      {
        name: "facebook",
        icone: "fab fa-facebook",
      },
      {
        name: "twitter",
        icone: "fab fa-twitter",
      },
    ],
//-- ARRAY DI IMG PER CAROSEL
  img_array:[
    {
      srcc: "./assets/images/primo.jpg",
    },
    {
      srcc:"./assets/images/secondo.jpg",
    },
    {
      srcc:   "./assets/images/terza.jpg",
    }
  ],
  //-- TESTO DEI SUDENTI CAROSEL
  text:[
    {
      h3:" Come as you are",
      p: " MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.",
    },
    {
      h3:" Paints of the Future",
      p: " The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.”",
    },
    {
      h3:"Investing for Your",
      p: "It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life. Thanks again…. I am feeling energized and eager to start teaching my class next week. I can’t wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!",
    },
  ],
  //--FOOTER LIST
  about:[
    {
      title:"ABOUT",
      testo:"Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.Developed by StylemixThemes.",
      icone:[
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-instagram",
      ]
    }
  ],
  contact:[
    {
      title:"CONTACT",
      no_margin: false,
    },
    {
      testo:"USA, Callifornia 20, First Avenue, Callifornia",
      no_margin: false,
    },
    {
      testo:"Tel.: +1 212 458 300 32",
      no_margin: true,
    },
    {
      testo:"Fax: +1 212 375 24 14",
      no_margin: true,
    },
    {
      testo:"info@masterstudy.com",
      no_margin: false,
    },
  ],

  pages:[
    {
      title:"PAGES",
      text_1:[
        "Blog",
        "Home",
        "Shortcodes",
      ],
      text_2:[
        "Courses",
        "Membership A...",
        "Typography",
      ],
    }
  ],

      part_1:[
      {
        title:"BLOG",
        src:"./assets/images/photo.jpeg",
        text_1:"Our main target is to “Developing Yourself as a Leader",
        text_2:"- August 9, 2018",
      },
      ],
      part_2:[
      {
        src:"./assets/images/photo-2.jpeg",
        text_1:"Those Other College Expenses You Aren`t Thinking About",
        text_2:"-  June 3, 2015",
      },
      ],
},
//-- METHODS FUNZIONAMENTO CACROSEL
  methods:{
      next: function(e) {
        if (e && e.type == "click") {
        clearInterval(this.id);
        this.id = "";
        }
        if (this.i < this.img_array.length -1) {
          this.i++;
        }else {
          this.i = 0;
        }
      },
      prev: function(){
        if (this.i > 0) {
          this.i--;
        }else {
          this.i = this.img_array.length -1;
        }
      },
      autoplay: function () {
      if (!this.id) {
        this.id = setInterval(() => {
          this.next();
        }, 2000 );
      } else {
        clearInterval(this.id);
        this.id = "";
      }
      },

      cliccato: function(){
        this.open = !this.open;
      }
  },
  created: function () {
   this.id = setInterval(() => {
     this.next();
   }, 3000 );
  },
});
