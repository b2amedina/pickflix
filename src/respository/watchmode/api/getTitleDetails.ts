import { TitleDetailsDto } from "../dto/titleDto";
import { getUrl } from "./utils";

export type GetTitleDetailParams = {
  id: number;
}

export const getTitleDetails = async (params: GetTitleDetailParams): Promise<TitleDetailsDto> => {
  const url = getUrl(`title/${params.id}/details`);
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`WatchMode getTitleDetails Error: ${response.status}`);
  }
  const data = await response.json();
  return data as TitleDetailsDto;
}