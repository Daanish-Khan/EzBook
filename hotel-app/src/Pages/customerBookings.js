import { Container } from '@mui/system';
import './customerBookings.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { COLORS } from '../components/consts'
import { Chip, Stack, Box } from '@mui/material';
import Navbar from '../components/navbar';
import { FixedSizeList } from 'react-window';
import Waves from '../components/Waves';

const chips = [
    {key: 0, label: 'Start - End Date'},
    {key: 1, label: 'Area'},
    {key: 2, label: 'Chain'},
    {key: 3, label: 'Category'},
    {key: 4, label: '# of Rooms'},
    {key: 5, label: 'Price'}
];

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Booking ${index + 1}`}
                style={{
                    color:'white'

                }}>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}
export default function customerBookings() {

    return (
        <Container disableGutters maxWidth="false"
        sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div className='bg' />

            <Waves
                    colorArray={[
                        "#FA7268",
                        "#EF5F67",
                        "#E34C67",
                        "#D53867",
                        "#C62368",
                    ]}
                    style={{
                        position:"absolute",
                        width: "100vw",
                        height: "55vh",
                        bottom:"0px",
                        left:"0px",
                        margin: "0px"
                    }}
                    gap={100}
                    height={500}
                    speed={0.35}
                    points={5}
                    amplitude={20}
                />

            
            <Stack useFlexGap sx={{width: "100vw", height: "100vh"}} spacing={0} >
                <Navbar sx={{
                    borderBottomLeftRadius: "20px", 
                    borderBottomRightRadius: "20px", 
                    backgroundColor: COLORS.defaultColor,
                    top: "0",
                    left: "0",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                }}/>
                
                <Box
                    sx={{
                        position: "relative",
                        marginX: "100px",
                        marginTop: "50px"
                    }}
                >
                    {chips.map((data) => {
                        return (
                            <Chip 
                                label={data.label}
                                sx={{
                                    color: "white",
                                    backgroundColor: COLORS.defaultColor,
                                    margin: "10px"
                                }}
                            />
                        );
                    })}
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        padding: "60px",
                        paddingTop: "20px",
                        marginTop: "10px",
                        marginX: "100px",
                        backgroundColor: "#fffff40",
                        backdropFilter: "blur(15px)",
                        border: "1px solid #fff",
                        borderBottom: "1px solid #ffffff80",
                        borderRight: "1px solid #ffffff80",
                        borderRadius: "20px",
                        height: "75vh",
                        boxShadow: "0 25px 50px #0000001a",
                    }}>
                    <FixedSizeList
                        height={400}
                        width={800}
                        itemSize={46}
                        itemCount={10}
                        overscanCount={5}
                    >
                        {renderRow}
                    </FixedSizeList>  
                </Box>
            </Stack>
            
        </Container>
        
    );
}