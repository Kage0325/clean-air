import { Box, Divider, Link, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';

export const AppFooter = () => {
    return (
        <Box sx={{ backgroundColor: '#F5F5F5' }}>
            <Container maxWidth='lg'>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    paddingY={4}
                >
                    <Box
                        component='img'
                        src={`${process.env.PUBLIC_URL}/images/logoGreen.png`}
                        width={{
                            xs: '100px',
                            sm: '150px'
                        }}
                        height='100%'
                    />
                    <Box>
                        <Stack
                            spacing={1}
                            alignItems='end'
                        >
                            <Link
                                href='tel:77006822'
                                sx={{
                                    color: '#000',
                                    textDecoration: 'none'
                                }}
                            >
                                <Typography
                                    fontWeight={300}
                                    sx={{
                                        typography: {
                                            xs: 'body2',
                                            sm: 'body1'
                                        }
                                    }}
                                >
                                    77006822
                                </Typography>
                            </Link>
                            <Link
                                href='tel:94016822'
                                sx={{
                                    color: '#000',
                                    textDecoration: 'none'
                                }}
                            >
                                <Typography
                                    fontWeight={300}
                                    sx={{
                                        typography: {
                                            xs: 'body2',
                                            sm: 'body1'
                                        }
                                    }}
                                >
                                    94016822
                                </Typography>
                            </Link>
                            <Link
                                href='mailto:sales@clean-air.mn'
                                sx={{
                                    color: '#000',
                                    textDecoration: 'none'
                                }}
                            >
                                <Typography
                                    fontWeight={300}
                                    sx={{
                                        typography: {
                                            xs: 'body2',
                                            sm: 'body1'
                                        }
                                    }}
                                >
                                    sales@clean-air.mn
                                </Typography>
                            </Link>
                            <Link
                                href='https://www.instagram.com/cleanairmgl'
                                target='_blank'
                                sx={{
                                    color: '#000',
                                    textDecoration: 'none'
                                }}
                            >
                                <Typography
                                    fontWeight={300}
                                    sx={{
                                        typography: {
                                            xs: 'body2',
                                            sm: 'body1'
                                        }
                                    }}
                                >
                                    instagram.com/cleanairmgl
                                </Typography>
                            </Link>
                            <Link
                                href='https://www.facebook.com/MongolianCleanAir'
                                target='_blank'
                                sx={{
                                    color: '#000',
                                    textDecoration: 'none'
                                }}
                            >
                                <Typography
                                    fontWeight={300}
                                    sx={{
                                        typography: {
                                            xs: 'body2',
                                            sm: 'body1'
                                        }
                                    }}
                                >
                                    facebook.com/MongolianCleanAir
                                </Typography>
                            </Link>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
            <Divider />
            <Stack
                alignItems='center'
                paddingY={2}
            >
                <Typography
                    variant='caption'
                    color='rgba(0, 0, 0, 0.38)'
                >
                    ©2023 Clean-Air. Бүх эрх хуулиар хамгаалагдсан.
                </Typography>
            </Stack>
        </Box >
    );
};