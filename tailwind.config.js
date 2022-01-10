module.exports = { 
    content: ["./*.{html,php}", "./html/*.{html,js}"],
    theme: {

        screens: {
            mm    : '480px',
            m    : '575px',
            esm    : '680px',
            sm    : '767px',
            md    : '991px',
            lg    : '1199px',
            xl    : '1366px', 
            '2xl' : '1460px', 
        },
        
        
        extend: {
            fontFamily: { 
                'work': ['Work Sans', 'sans-serif'], 
            },

            container: {  
                padding: '15px',
            },

            colors: { 
                'primary' : '#dd8d2a',
                'secondary' : '#009520',
            },
        },
    },

    plugins: [],
}
