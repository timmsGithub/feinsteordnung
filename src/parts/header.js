import { Text, Spacer } from '@geist-ui/core'
import ProfilePicture from "../assets/profilbild.png"
import "../App.css"

const Header = () => {
    const style = {
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const imgStyle = {
        width: '100%',
        height: '100%',
    };

    return <>
        <div style={style} class="smallerCenter">
            <img src={ProfilePicture} alt={"FeinsteOrdnung profile"} style={imgStyle} />
        </div>
        <Text h1 className="font-big">Feinste Ordnung</Text>
        <Spacer h={2}/>
    </>
}

export default Header;