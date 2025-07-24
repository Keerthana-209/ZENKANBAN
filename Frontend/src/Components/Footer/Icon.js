import { Stack, IconButton } from "@mui/material";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Icon() {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton
        component="a"
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        sx={{
          color: "#FFFFFF", // default color
          "&:hover": {
            color: "#C51162", // lightseagreen on hover
          },
        }}
      >
        <FaFacebookF size={25} style={{ color: "currentColor" }} />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        sx={{
          color: "#FFFFFF",
          "&:hover": {
            color: "#C51162",
          },
        }}
      >
        <FaInstagram size={25} style={{ color: "currentColor" }} />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        sx={{
          color: "#FFFFFF",
          "&:hover": {
            color: "#C51162",
          },
        }}
      >
        <FaLinkedin size={25} style={{ color: "currentColor" }} />
      </IconButton>
    </Stack>
  );
}
