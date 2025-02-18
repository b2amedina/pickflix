import { getUrl } from "./utils";
import { TitleListDto } from "../dto/titleDto";

type GetTitlesParams = {
  page?: number;
  limit?: number;
};

export const listTitles = async (params?: GetTitlesParams): Promise<TitleListDto> => {
  const url = getUrl("list-titles");
  params?.page && url.searchParams.append("page", params.page.toString());
  params?.limit && url.searchParams.append("limit", params.limit.toString());
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`WatchMode getTitle Error: ${response.status}`);
  }
  const data = await response.json();
  return data as TitleListDto;
};
