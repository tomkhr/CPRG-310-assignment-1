function Burger (){

    const burgerStyle = {
        width: '40px',
        height: '2px',
        backgroundColor: '#292C2D',
        marginBlock: '5px'
    };

    const burgerDiv = {
        height: '70px',
        width: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={burgerDiv}>
            <div style={burgerStyle}></div>
            <div style={burgerStyle}></div>
            <div style={burgerStyle}></div>
        </div>
    );
};

export default Burger;