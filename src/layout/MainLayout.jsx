import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

function MainLayout({ children }) {
  return (
    <>
      <AppBar position="static" sx={{
        backgroundColor: "#6a1b9a",   // Purple
      }}>
        <Toolbar>
          <QueueMusicIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            Anisha"s Youtube
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 4, pb: 12 }}>
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
    </>
  );
}

export default MainLayout;