import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

import MainLogo from '../assets/MainLogo.svg'
import { Instagram, Telegram } from '@mui/icons-material';
const logoStyle = {
  width: '120px',
  height: 'auto',
  cursor: 'pointer',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://anodra.uz/">Anodra&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-5px' }}>
              <img
                src={MainLogo}
                style={logoStyle}
                alt="logo of Eduadd"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Biz haqimizda
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Tizimdan to'laqonli foydalanish uchun ro'yxatdan o'tishingiz lozim
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Email"
                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Enter your email address',
                }}
              />
              <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                Obuna bo'lish
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Menyu
          </Typography>
          <Link color="text.secondary" href="#">
            Afzalliklar
          </Link>
          <Link color="text.secondary" href="#">
            Kurslar
          </Link>
          <Link color="text.secondary" href="#">
            Bloglar
          </Link>
          <Link color="text.secondary" href="#">
            O'qituvchilar
          </Link>
          <Link color="text.secondary" href="#">
            FAQ
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Kompaniya
          </Typography>
          <Link color="text.secondary" href="#">
            Biz haqimizda
          </Link>
          <Link color="text.secondary" href="#">
          Karyera
          </Link>
          
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
          Huquqiy
          </Typography>
          <Link color="text.secondary" href="#">
          Shartlar
          </Link>
          <Link color="text.secondary" href="#">
          Maxfiylik
          </Link>
          <Link color="text.secondary" href="#">
            Aloqa
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
          Maxfiylik siyosati
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
          Xizmat ko'rsatish shartlari
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/yagafarov"
            aria-label="GitHub"
            target='_blank'
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://t.me/yagafarovd"
            aria-label="Telegram"
            target='_blank'
            sx={{ alignSelf: 'center' }}
          >
            <Telegram />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/"
            aria-label="INstagram"
            target='_blank'
            sx={{ alignSelf: 'center' }}
          >
            <Instagram />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}