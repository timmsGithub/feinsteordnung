import '../App.css';
import Header from "../parts/header"
import { CssBaseline, GeistProvider, Spacer, Text } from '@geist-ui/core'
import Cards from "../parts/cards"


const Index = () => {    return (
        <div className="App">
            <header className="App-header">
                <GeistProvider themeType={"dark"}>
                    <CssBaseline />
                    <div className="center-div">
                        <Header></Header>
                        <Cards></Cards>
                    <Spacer h={4} />
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <a href="/impressum" style={{ color: "white", padding: "5px" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Text>Impressum</Text>
                            </div>
                            </a>
                        <a href="/datenschutzinformationen" style={{ color: "white", padding: "5px" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Text>Datenschutzinformationen</Text>
                            </div>
                            </a>
                        </div>
                    </div>
                </GeistProvider>
            </header>
        </div>

    );
}

export default Index;
