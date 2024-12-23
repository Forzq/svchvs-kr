import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    const tg = process.env.REACT_APP_API_URL + "tg.png";
    const gh = process.env.REACT_APP_API_URL + "github.png";
    return (
        <footer style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'black',
            padding: '1em',
            minHeight: '10vh',
            marginTop: '3%'
        }}>
            <Typography variant="h6" component="div" sx={{ color: 'white', marginBottom: '1em' }}>
                Запись на консультацию в соц сетях
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", marginBottom: '1em' }}>
                <img src={tg} alt="" />
                <Link to="/" style={{ color: "white", marginLeft: "1em", fontSize: "24px", fontWeight: "500" }}>Telegram</Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
                <img src={gh} alt="" />
                <Link to="/" style={{ color: "white", marginLeft: "1em", fontSize: "24px", fontWeight: "500" }}>Github</Link>
            </Box>
        </footer>
    )
}