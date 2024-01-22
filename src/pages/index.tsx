import { Button, Typography } from "@mui/material";
import { signIn, useSession, signOut } from "next-auth/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link';

export default function Home() {
  const session = useSession();
  console.error(session);

  return (
    <div>
      {session.data && (
        <AppBar
          position="fixed"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {session.data.user?.email}
            </Typography>
            <Button color="inherit" onClick={() => signOut()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      )}

      {!session.data && (
        <AppBar
          position="fixed"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              E-com
            </Typography>
            <Button color="inherit" onClick={() => signIn()}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      )}
      <div>
        <img src="banner.jpg" alt="banner" style={{ zIndex: "1" }} />
        <div  style={{
            zIndex: "2",
            marginTop: "-450px",
            paddingLeft: "160px",
           
          }}>
        <Typography
          variant="h3"
          style={{
            zIndex: "2",
           
            color: "black",
          }}
        >
          Welcome to E-com
        </Typography>
        {session.data ? (
        <>
          <Link href="/admin/addproducts">
          <Button variant="contained" color="primary" style={{ backgroundColor: 'black', margin: '20px' }}>
            Shop Now
          </Button>
          </Link>
        </>
      ) : (
        <>
        <Button variant="contained" color="primary" style={{ backgroundColor: 'black', margin: '20px' }} onClick={() => signIn()}>
            Login
          </Button>
        </>
      )}
        </div>
      </div>
    </div>
  );
}
