const theme = {
    main: {
        background: '#000',
        font: 'sans-serif',
        color: '#f1f1f1',
        borderRadius: '4px'
    },
    headings: {
        color: 'red',
        h1: {
            size: '3rem'
        },
        h2: {
            size: '2.5rem'
        },
        h3: {
            size: '2rem'
        },
        h4: {
            size: '1.5rem'
        },
        h5: {
            size: '1rem'
        },
        h6: {
            size: '0.5rem'
        }
    },
    containers: {
        background: 'transparent',
        border: '1px solid #ccc',
        padding: '1rem 2rem',
        podSeperator: '2rem'
    },
    mast: {
        background: '#000',
        shadow: true
    },
    buttons: {
        background: 'blue',
        borderRadius: () => theme.main.borderRadius
    }
}

export default theme