export const globalStyles = {
  styles: {
    global: {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      'html, body': {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        overflow: 'hidden',
        margin: '0 auto',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
      '.chakra-ui-light': {
        background: 'transparent',
      },
      '.chakra-offset-slide': {
        height: '100%',
        width: '100%',
      },
      '.scalein': {},
      '.slidein': {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'aboslute',
        display: 'flex',
      },
      '.fade': {
        position: 'absolute',
        height: '100%',
        width: '100%',
      },
      '::-webkit-scrollbar': {
        width: '2px',
      },
      '::-webkit-scrollbar-track': {
        opacity: '100%',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#ff6969',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#fc3636',
        borderRadius: '10px',
      },
    },
  },
};
