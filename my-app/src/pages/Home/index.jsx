import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Home(){
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        console.log(res);
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cards">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <div className="content">
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <Button onClick={handleOpen}>User Detail</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {albums.map((album)=>(
          <div key={user.id}>
            <ul>
              <li>{album.title}</li>
              <li>{album.id}</li>
              <li>{album.userId}</li>
            </ul>
          </div>
         ))}
        </Box>
      </Modal>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home;



