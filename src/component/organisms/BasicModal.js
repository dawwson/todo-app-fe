import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function BasicModal() {
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
          잠시 후 다시 확인해주세요!
        </Typography>
        <Typography
          id="modal-desc"
          textColor="text.tertiary"
          textAlign="center"
          level="body-sm"
        >
          🙇🙇🙇
          <br />
          지금 이 서비스와 연결할 수 없습니다.
          <br />
          문제를 해결하기 위해 열심히 노력하고 있습니다.
          <br />
          잠시 후 다시 확인해주세요.
        </Typography>
      </Sheet>
    </Modal>
  );
}
