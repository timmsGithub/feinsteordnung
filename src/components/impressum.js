import '../App.css';
import { CssBaseline, GeistProvider } from '@geist-ui/core'


const Impressum = () => {
    return (
        <div className="App">
            <header className="App-header">
                <GeistProvider themeType={"dark"}>
                    <CssBaseline />
                    <div className="center-div">
                        <h2>Impressum</h2>

                        <p>Tim Ordnung<br />
                            Kammergutweg 30<br />
                            95032 Hof</p>

                        <h3>Kontakt</h3>
                        <p>Telefon: 016093077277<br />
                            E-Mail: kontakt@feinsteordnung.de</p>

                        <h3>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h3>
                        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                        <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
                    </div>
                </GeistProvider>
            </header>
        </div>

    );
}

export default Impressum;
