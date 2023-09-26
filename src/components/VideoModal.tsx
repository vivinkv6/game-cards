import Modal from "@mui/material/Modal";
import ReactPlayer from "react-player";
import YouTubeIcon from "@mui/icons-material/YouTube";

type videoModalProp = {
  video: string;
};

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  boxShadow: 24,
  p: 4,
};

export default function VideoModal({ video }: videoModalProp) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {video && (
        <Button
          onClick={handleOpen}
          startIcon={<YouTubeIcon />}
          style={{ backgroundColor: "red", color: "white", marginLeft: "1rem" }}
        >
          Play Trailer
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {video && (
            <ReactPlayer
              url={video}
              controls={true}
              style={{ minWidth: "100%", maxWidth: "100%" }}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
