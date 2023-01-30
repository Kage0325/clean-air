import { Box, Button, Card, CardContent, CardMedia, Container, Dialog, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { AlertTriangle, Check, ChevronLeft, ChevronRight, X } from 'react-feather';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { LinearGradient } from 'react-text-gradients';
import { Collapse } from '../components/common';
import './../styles/custom-css.css';

export const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const properties = {
        prevArrow:
            <Button>
                <IconButton>
                    <ChevronLeft
                        size={48}
                        color='#FFFFFF'
                    />
                </IconButton>
            </Button>,
        nextArrow:
            <Button>
                <IconButton>
                    <ChevronRight
                        size={48}
                        color='#FFFFFF'
                    />
                </IconButton>
            </Button>

    };

    return (
        <Box
            sx={{
                marginTop: '60px',
                marginBottom: '100px'
            }}
        >
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <Typography
                        component='h1'
                        fontWeight={400}
                        textAlign='center'
                        maxWidth={{
                            xs: 300,
                            md: 500,
                            lg: 600
                        }}
                        sx={{
                            position: 'relative',
                            typography: {
                                xs: 'h5',
                                sx: 'h4',
                                md: 'h3',
                                lg: 'h2'
                            }
                        }}
                    >
                        <LinearGradient gradient={['to right', '#2AA2CE, #2AA2CE ,#002D70']}>
                            Хайртай бүхнээ хамгаалъя
                        </LinearGradient>
                        <Box
                            component='img'
                            src={`${process.env.PUBLIC_URL}/images/leaves.png`}
                            height={{
                                xs: '50px',
                                sm: '80px',
                                md: '100px',
                                lg: '125px'
                            }}
                            width='auto'
                            sx={{
                                position: 'absolute',
                                top: {
                                    xs: -20,
                                    sm: -40,
                                    md: -60,
                                },
                                right: {
                                    xs: -20,
                                    sm: -40,
                                    md: -50,
                                    lg: -100
                                },
                                rotate: '20deg'
                            }}
                        />
                    </Typography>
                </Stack>
                <Stack
                    alignItems='center'
                    marginTop={2}
                >
                    <a
                        className="play-btn"
                        onClick={() => setOpen(true)}
                    />
                    <Dialog onClose={() => setOpen(false)} open={open}>
                        <Box
                            component='video'
                            src={`${process.env.PUBLIC_URL}/images/product_introduction.mp4`}
                            height='300px'
                            width='auto'
                            autoPlay
                        />
                    </Dialog>
                </Stack>
                <Grid
                    justifyContent='center'
                    spacing={5}
                    marginTop={12.5}
                    container
                >
                    <Grid
                        xs={12}
                        sm={6}
                        lg={4}
                        item
                    >
                        <Typography
                            variant='h6'
                            textAlign='center'
                        >
                            4 давхар нано шүүлтүүр
                        </Typography>
                        <Card variant='outlined'>
                            <CardMedia
                                sx={{ height: 220 }}
                                image={`${process.env.PUBLIC_URL}/images/22.png`}
                                title='4 давхар нано шүүлтүүр'
                            />
                            <CardContent>
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Нарийн тоос:
                                                </Typography>
                                                <Typography>
                                                    95%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    PM2.5:
                                                </Typography>
                                                <Typography>
                                                    89%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Хэт ягаан туяа:
                                                </Typography>
                                                <Typography>
                                                    61.7%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Гэрэл нэвтрүүлэг:
                                                </Typography>
                                                <Typography>
                                                    75%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Ашиглах хугацаа:
                                                </Typography>
                                                <Typography>
                                                    3 жил
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Улирал:
                                                </Typography>
                                                <Typography>
                                                    4 улирал
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Баталгаат хугацаа:
                                                </Typography>
                                                <Typography>
                                                    2 жил
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                Үзэгдэх орчин
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                Цэвэрлэгээ
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Typography
                                    textAlign='center'
                                    sx={{
                                        fontSize: '20px',
                                        marginTop: 2,
                                        fontWeight: 500
                                    }}
                                >
                                    ₮90’000
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={4}
                        item
                    >
                        <Typography
                            variant='h6'
                            textAlign='center'
                        >
                            PVC шүүлтүүр
                        </Typography>
                        <Card variant='outlined'>
                            <CardMedia
                                sx={{ height: 220 }}
                                image={`${process.env.PUBLIC_URL}/images/11.png`}
                                title='PVC шүүлтүүр'
                            />
                            <CardContent>
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Нарийн тоос:
                                                </Typography>
                                                <Typography>
                                                    95-99%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    PM2.5:
                                                </Typography>
                                                <Typography>
                                                    +90%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Хэт ягаан туяа:
                                                </Typography>
                                                <Typography>
                                                    100%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Гэрэл нэвтрүүлэг:
                                                </Typography>
                                                <Typography>
                                                    50%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Ашиглах хугацаа:
                                                </Typography>
                                                <Typography>
                                                    2-4 сар
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Улирал:
                                                </Typography>
                                                <Typography>
                                                    Өвөл
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Баталгаат хугацаа:
                                                </Typography>
                                                <Typography>
                                                    2 сар
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <X color='#666666' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                Үзэгдэх орчин
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <X color='#666666' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                Цэвэрлэгээ
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Typography
                                    textAlign='center'
                                    sx={{
                                        fontSize: '20px',
                                        marginTop: 2,
                                        fontWeight: 500
                                    }}
                                >
                                    ₮40’000
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={4}
                        item
                    >
                        <Typography
                            variant='h6'
                            textAlign='center'
                        >
                            Энгийн нано шүүлтүүр
                        </Typography>
                        <Card variant='outlined'>
                            <CardMedia
                                sx={{ height: 220 }}
                                image={`${process.env.PUBLIC_URL}/images/33.png`}
                                title='Энгийн нано шүүлтүүр'
                            />
                            <CardContent>
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Нарийн тоос:
                                                </Typography>
                                                <Typography>
                                                    72-80%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    PM2.5:
                                                </Typography>
                                                <Typography>
                                                    70%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Хэт ягаан туяа:
                                                </Typography>
                                                <Typography>
                                                    60%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Гэрэл нэвтрүүлэг:
                                                </Typography>
                                                <Typography>
                                                    70%
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Ашиглах хугацаа:
                                                </Typography>
                                                <Typography>
                                                    3-5 жил
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Улирал:
                                                </Typography>
                                                <Typography>
                                                    4 улирал
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Stack
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Typography fontWeight={300}>
                                                    Баталгаат хугацаа:
                                                </Typography>
                                                <Typography>
                                                    2 жил
                                                </Typography>
                                            </Stack>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                Үзэгдэх орчин
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <Check color='#2AA2CE' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography fontWeight={300}>
                                                Цэвэрлэгээ
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Typography
                                    textAlign='center'
                                    sx={{
                                        fontSize: '20px',
                                        marginTop: 2,
                                        fontWeight: 500
                                    }}
                                >
                                    ₮55’000
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Stack
                    alignItems='center'
                    marginTop={8}
                >
                    <Typography
                        textAlign='center'
                        fontStyle='italic'
                        width={{
                            xs: 400,
                            md: 500
                        }}
                    >
                        Захиалга өгөхийг хүсвэл 77006822, 94016822 дугаарлуу холбогдоорой.
                    </Typography>
                </Stack>
            </Container>
            <Box
                sx={{
                    marginTop: 12.5,
                    background: 'linear-gradient(30deg, #2AA2CE, #002D70)',
                    paddingY: 5
                }}
            >
                <Container maxWidth='lg'>
                    <Slide {...properties}>
                        <div className="each-slide-effect">
                            <div>
                                <Stack alignItems='center'>
                                    <Box
                                        component='img'
                                        src={`${process.env.PUBLIC_URL}/images/33.png`}
                                        height='64px'
                                        width='64px'
                                        sx={{
                                            borderRadius: '50%'
                                        }}
                                    />
                                </Stack>
                                <Typography
                                    variant='subtitle1'
                                    textAlign='center'
                                    color='text.light'
                                    marginTop={4}
                                >
                                    Slide 1
                                </Typography>
                                <Stack alignItems='center'>
                                    <Typography
                                        variant='body2'
                                        textAlign='center'
                                        color='text.light'
                                        marginTop={1}
                                        maxWidth={{
                                            xs: 300,
                                            sm: 400,
                                            md: 500
                                        }}
                                    >
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                    </Typography>
                                </Stack>
                            </div>
                        </div>
                    </Slide>
                </Container>
            </Box>
            <Container maxWidth='lg'>
                <Typography
                    variant='h4'
                    textAlign='center'
                    marginTop={12.5}
                    textTransform='uppercase'
                >
                    Анхаарах зүйлс
                </Typography>
                <Grid
                    spacing={2}
                    marginTop={5}
                    container
                >
                    <Grid
                        xs={12}
                        md={6}
                        item
                    >
                        <Box
                            component='img'
                            src={`${process.env.PUBLIC_URL}/images/woman_air_01.png`}
                            width='100%'
                            height='100%'
                            sx={{
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        md={6}
                        item
                    >
                        <List disablePadding>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Хурц үзүүртэй зүйлсээр цоолохоос сэргийл
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Хүүхэд унахаас хамгаалсан төмөр торыг орлохгүй учраас хүүхэд түшиж налахаас сэргийл
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Байгалийн онц аюултай үөд цонхоо нээж, онгойлгохгүй байх
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Шүүлтүүрийг авч угааж цэвэрлэхдээ зориулалтын бариулаас барьж салгах, гадна талаас нь зөөлөн даралттай бүлээн усаар шүршиж угаана.
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Хэт өндөр даралттай усаар угаах нь цонхны шуултуурийг гэмтээх эрсдэлтэй.
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Хэт халуун усаар угааж цэвэрлэж болохгүй.
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Цонхны агаар шүүгч нь борооны усаар угаагдаж цэвэрлэгдэх боломжтой.
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Шүүлтүүрийг угааж цэвэрлэсний дараа хатсан үөд буцаан суурилуулна.
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ paddingY: 0.5 }}>
                                <ListItemIcon>
                                    <AlertTriangle color='#2AA2CE' />
                                </ListItemIcon>
                                <ListItemText>
                                    Суурилуулалт хийхдээ зай завсар гаргахгуй тэгш суурилуулна.
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Typography
                    variant='h4'
                    textAlign='center'
                    marginTop={12.5}
                    textTransform='uppercase'
                >
                    Түгээмэл асуулт, хариулт
                </Typography>
                <Stack
                    spacing={1}
                    marginTop={5}
                >
                    <Collapse
                        summary="Хэдэн төрлийн рам байдаг вэ?"
                        details={
                            <Box>
                                <ul>
                                    <li>
                                        Соронзтой /цонхыг өрөмдөж цоолохгүй/.
                                    </li>
                                    <li>
                                        Хавчаартай /цонхыг өрөмдөж цоолохгүй/.
                                    </li>
                                    <li>
                                        Нугастай рам /гадагшаа онгойдог цонхонд суурилуулах боломжтой, шүрүүпээр өрөмдөж тогтооно/.
                                    </li>
                                </ul>
                                Рамуудыг тухайн цонхонд аль нь илүү тохиромжтойг хэрэглэгчтэй ярилцан сонгож суурилуулалт хийнэ.
                            </Box>
                        }
                    />
                    <Collapse
                        summary="Суурилуулалт хэдэн хоногт хийгдэх вэ?"
                        details={
                            <ul>
                                <li>
                                    Захиалга өгсөн өдрөөс хойш 24 цагийн дотор үйлчлүүлэгчтэй холбогдон суурилуулах цонхны хэмжээг авна.
                                </li>
                                <li>
                                    Хэмжээг авсан өдрөөс хойш 24-48 цагийн дотор цонхны шүүлтүүрийг суурилуулна.
                                </li>
                            </ul>
                        }
                    />
                    <Collapse
                        summary="Хөдөө орон нутагт яаж авах вэ?"
                        details={
                            <ul>
                                <li>
                                    Манайхаас танд утсаар цонхны хэмжээ авах заавар өгсний дагууд хэмжээгээр нь хийж өгнө.
                                </li>
                                <li>
                                    Төлбөрийг бүрэн шилжүүлснээр захиалгыг хийж эхэлнэ.
                                </li>
                                <li>
                                    Хөдөө орон нутагт унаанд тавьж өгнө.
                                </li>
                            </ul>
                        }
                    />
                    <Collapse
                        summary="Төлбөрийн нөхцөл"
                        details={
                            <ul>
                                <li>
                                    Урьдчилгаа 20% төлснөөр захиалга баталгаажна.
                                </li>
                                <li>
                                    Буцаалт хийх тохиолдолд 48 цагийн дотор мэдэгдэж үндсэн төлбөрийн 20% алданги төлснөөр буцаалт хийгдэнэ.
                                </li>
                            </ul>
                        }
                    />
                    <Collapse
                        summary="Сервис үйлчилгээ"
                        details="Гаднын хүчин зүйлээс хамааралтай гэмтэл гарсан тохиолдолд эвдрэлтэй рамыг засаж өгнө./Төлбөртэй/"
                    />
                    <Collapse
                        summary="Хамтран ажиллах боломжтой эсэх?"
                        details="Байгууллага болон аж ахуй нэгжүүдтэй хамтран ажиллана. Байгууллагын ажилчид болон тухайн ажлын байрны цонхонд тусгай нөхцөлөор хамтран ажиллана."
                    />
                </Stack>
                <Typography
                    variant='h4'
                    textAlign='center'
                    marginTop={12.5}
                    textTransform='uppercase'
                >
                    Холбоо барих
                </Typography>
                <Grid
                    justifyContent='center'
                    container
                    marginTop={5}
                >
                    <Grid
                        xs={10}
                        md={8}
                        lg={6}
                        item
                    >
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                // contactUs();
                            }}
                        >
                            <Grid
                                spacing={2}
                                container
                            >
                                <Grid
                                    xs={6}
                                    item
                                >
                                    <TextField
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        label="Нэр"
                                        variant="standard"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid
                                    xs={6}
                                    item
                                >

                                    <TextField
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        label="И-мэйл хаяг"
                                        variant="standard"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                >
                                    <TextField
                                        value={subject}
                                        onChange={e => setSubject(e.target.value)}
                                        label="Гарчиг"
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                >
                                    <TextField
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        label="Дэлгэрэнгүй"
                                        variant="standard"
                                        rows={4}
                                        multiline
                                        fullWidth
                                    />
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        type="submit"
                                        disableElevation
                                        fullWidth
                                    >
                                        Илгээх
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};