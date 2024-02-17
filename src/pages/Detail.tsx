import { Viewer } from "@toast-ui/react-editor";
import { useContentsDetail } from "../api/contents";

const DetailPage = () => {
  const { data: contentsDetail } = useContentsDetail(123);

  console.log(contentsDetail);

  return <Viewer></Viewer>;
};

export default DetailPage;
