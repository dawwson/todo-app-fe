import BasicModal from "../../components/organisms/BasicModal";

const NotFoundPage = () => {
  const title = "요청하신 페이지를 찾을 수 없습니다!";
  const content =
    "🙇🙇🙇\n\n" +
    "요청하신 페이지를 찾을 수 없습니다.\n" +
    "주소를 다시 확인해주세요.";
  return <BasicModal title={title} content={content} />;
};

export default NotFoundPage;
