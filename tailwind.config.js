module.exports = { 
  content: ["./*.{html,php}", "./html/*.{html,js}"],
  darkMode: 'class',
  theme: {
      screens: { 
          xs    : '321px',
          sm    : '481px',
          md    : '576px',
          lg    : '768px',
          xl    : '992px', 
          xxl   : '1200px',
          xxxl   : '1400px' ,
      },
      extend: {
          fontFamily: {  
            'nun': ['Nunito', 'sans-serif'],
            'pub': ['Public Sans', 'sans-serif'], 
          },
          container: {  
              padding: '16px',
          },
          colors: { 
              'primary' : '#F2DBDB',
              'body-color' : '#C9B6B6',
              'secondary' : '#009520',
              'black' : {
                'light' : '#1D1D1D',
                'default' : '#000000',
              } ,
          },
          borderRadius: {
            '35': '35px',
            '50': '50px',
          },
      },
  },

  plugins: [],
}
