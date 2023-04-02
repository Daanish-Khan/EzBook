import { Container } from '@mui/system';
import './customerBookings.css';
import { COLORS } from '../components/consts'
import { Chip, Stack, Box, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Navbar from '../components/navbar';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Waves from '../components/Waves';
import * as React from 'react';

const chips = [
    {key: 0, label: 'Start - End Date'},
    {key: 1, label: 'Area'},
    {key: 2, label: 'Chain'},
    {key: 3, label: 'Category'},
    {key: 4, label: '# of Rooms'},
    {key: 5, label: 'Price'}
];

const innerElementType = React.forwardRef(({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        ...style,
        paddingTop: GUTTER_SIZE
      }}
      {...rest}
    />
  ));

const GUTTER_SIZE = 10;

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={{
            ...style,
            top: style.top + GUTTER_SIZE,
            height: style.height - GUTTER_SIZE,
            borderRadius: "30px",
            backgroundColor: COLORS.defaultColor,

        }} key={index} component="div" disableGutters>
            <ListItemButton sx={{
                 borderRadius: "30px",
            }}>
                <ListItemText primary={`Booking ${index + 1}`}
                sx={{
                    color:'white',
                    
                    
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
                    }}
                >
                    <AutoSizer>
                        {({ height, width }) => (
                            <FixedSizeList
                                height={height + GUTTER_SIZE}
                                innerElementType={innerElementType}
                                width={width}
                                itemSize={46}
                                itemCount={30}
                                overscanCount={5}
                            >
                                {renderRow}
                            </FixedSizeList> 
                        )}
                    </AutoSizer>
                     
                </Box>
            </Stack>
            
        </Container>
        
    );
}