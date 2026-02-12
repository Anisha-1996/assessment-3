import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";
import FastForwardIcon from '@mui/icons-material/FastForward';

function SongGrid({ songs, currentIndex, setCurrentIndex }) {
  if (songs.length === 0) {
    return (
      <Typography sx={{ mt: 3 }}>
        No songs uploaded yet.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {songs.map((song, index) => {
        const isActive = index === currentIndex;

        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={song.id}>

            <Card
              onClick={() => setCurrentIndex(index)}
              className={`song-card ${isActive ? "active-card" : ""}`}
              sx={{ cursor: "pointer" }}
            >

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 180,
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <FastForwardIcon sx={{ fontSize: 40 }} />
                </Box>

                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%",
                  }}
                >
                  {song.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SongGrid;
