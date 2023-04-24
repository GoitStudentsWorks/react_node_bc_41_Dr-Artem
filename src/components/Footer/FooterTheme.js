export const theme = {
    section: {
      backgroundColor: '#0F3937',
      display: 'flex',
      height: '300px',
      width: '100%',
        '@media screen and (max-width: 767px)': {
           marginLeft: '20px',
        },
    },
    title: {    
      color: '#fff',
      marginTop: '16px',
      width: '309px',
      height: '48px',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
      '@media screen and (max-width: 767px)': {
        fontSize: '14px',
      },
    },
    text: {
     fontSize: '14px', 
     color: 'rgba(255, 255, 255, 0.3)',
     '@media screen and (max-width: 767px)': {
        fontSize: '8px',
      }, 
     
    },
    btn: {
     fontSize: '14px',
     color: '#fff',
     border: '1px solid rgba(255, 255, 255, 0.1)',
     borderRadius: '12px',
     padding: '16px 40px',
     marginTop: '24px',
     '&:hover': {
        background: '#477577',
     },
        '@media screen and (max-width: 767px)': {
         marginTop: '20px',
         fontSize: '12px',
         padding: '10px 16px',
        },
    },
    firstGrid: {
        '@media screen and (min-width: 768px)': {
            marginLeft: '32px',
        },
        '@media screen and (min-width: 1440px)': {
            marginLeft: '130px',
        },
    },
    box: {
        '@media screen and (max-width: 767px)': {
            marginLeft: '20px',
        },
    },
    copyright: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '16px',
        '@media screen and (max-width: 767px)': {
            marginBottom: '8px',
        },
    },
};

