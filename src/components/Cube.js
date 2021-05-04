const Cube = (props) => {
    return <button
        onClick={props.onPress}
        style={Object.assign(style.container, props.containerStyle)}>
        <p style={{flex:1,fontSize:'5vh'}} >
            {
                props.type==1?
                    "x"
                    :props.type==2?
                    "O":
                    ""
            }
        </p>


    </button>
}

const style = {
    container: {
        flex: 1,
        margin: '1vh',
        borderWidth: '0.5vh',
        borderColor: 'teal',
        backgroundColor:'white',



    }
}

export default Cube;
