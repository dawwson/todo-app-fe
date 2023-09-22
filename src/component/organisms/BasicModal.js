import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

const BasicModal = (props) => {
  const { title, content } = props;

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={true}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography
          id="modal-desc"
          textColor="text.tertiary"
          textAlign="center"
          level="body-sm"
          whiteSpace="pre-wrap" // 개행문자를 줄바꿈으로 인식
        >
          {content}
        </Typography>
      </Sheet>
    </Modal>
  );
};

export default BasicModal;
