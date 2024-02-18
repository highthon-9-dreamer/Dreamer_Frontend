import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "./customAxios";

interface PostRequest {
  Title: string;
  Description: string;
  SeriesTitle: string | null;
  SeriesId: number | null;
}

interface GetPostDetailResponse {
  Contentid: number;
  Title: string;
  SeriesTitle: string;
  Number: number;
  Description: string;
  CreatedBy: {
    UserId: number;
    Profile: string;
    Name: string;
    Email: string;
    Introduce: string;
  };
  Replies: {
    ReplyId: string;
    UserName: string;
    Content: string;
  }[];
}

interface GetSeriesListResponse {
  SeriesList: {
    Id: number;
    Title: string;
  }[];
}

const writeContents = async (body: PostRequest) => {
  await instance.post("/c/add", body);
};

const getContentsDetail = async (id: number) => {
  return (await instance.get<GetPostDetailResponse>(`/c/${id}`)).data;
};

const getSeriesList = async () => {
  return (await instance.get<GetSeriesListResponse>("/s/my-series")).data;
};

export const useWriteContents = () => {
  return useMutation({
    mutationFn: writeContents,
    onError: (error) => alert(error),
    onSuccess: () => alert("글 작성에 성공했습니다."),
  });
};

export const useContentsDetail = (id: number) => {
  return useQuery({
    queryKey: ["/c", id],
    queryFn: () => getContentsDetail(id),
  });
};

export const useSeriesList = () => {
  return useQuery({
    queryKey: ["/s/my-series"],
    queryFn: () => getSeriesList(),
  });
};
