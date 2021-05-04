import './App.css';
import * as React from "react";
import Cube from "./components/Cube";

class App extends React.Component {

    state = {
        numberOfRowAndColumn:9,
        currentType:1,
        selectedCube:{},
        oPlayerScore:0,
        xPlayerScore:0

    }
    componentDidMount() {
        this.createCube();

    }

    createCube=()=>{
        let selectedCube= {};
        for (let i = 0; i <this.state.numberOfRowAndColumn; i++) {
            selectedCube["cube"+(i+1)]={
                key:i+1,
                type:-1
            }
        }
        this.setState({
            selectedCube
        })
    }

    render() {

        return (
            <div>
                <div>
                    {
                        "שחקן מספר 1:"+this.state.xPlayerScore
                    }
                    <br/>
                    {
                        "שחקן מספר 2:"+this.state.oPlayerScore
                    }
                </div>
                <div style={style.container}>

                    {
                        Object.values(this.state.selectedCube).map((item,index)=>{
                            return <Cube

                                key={item.key}
                                onPress={()=>{
                                    this.changeState(index+1);
                                    this.checkForMatch();
                                }}
                                type={item.type}
                            />
                        })
                    }
                </div>
            </div>

        )
    }
    checkForMatch=()=>{

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            if(this.state.selectedCube["cube"+(lines[i][0]+1)].type!=-1&&this.state.selectedCube["cube"+(lines[i][0]+1)].type==this.state.selectedCube["cube"+(lines[i][1]+1)].type&&this.state.selectedCube["cube"+(lines[i][0]+1)].type==this.state.selectedCube["cube"+(lines[i][2]+1)].type){
                setTimeout(()=>{
                    alert("נצחון לשחקן"+this.state.selectedCube["cube"+(lines[i][0]+1)].type);
                    if(this.state.selectedCube["cube"+(lines[i][0]+1)].type==1){
                        this.setState({
                            oPlayerScore:this.state.oPlayerScore+1
                        })
                    }else{
                        this.setState({
                            xPlayerScore:this.state.xPlayerScore+1
                        })
                    }
                    this.createCube()
                },500)

            }

        }

    }

    changeState=(number)=> {
        const selectedCube=this.state.selectedCube;
        selectedCube["cube"+number].type=this.state.currentType;
        this.setState({
            selectedCube,
            currentType:this.state.currentType==1?2:1
        })
    }
}

const style = {
    container: {
        flex: 1,
        height: '100vh',
        display: "grid",
        gridTemplateColumns:"repeat(3,1fr)",
    }
}

export default App;
