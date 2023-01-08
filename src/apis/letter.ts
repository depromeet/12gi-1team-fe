import { HTTP_METHOD } from "../constants/api";
import {
  CreatedLetterType,
  PostNewLetterCreateType,
  PostSendLetterCompleteType,
  PostSendLetterTempCompleteType,
} from "../types/letter";

import { requester } from "./requester";

export const postNewLetterCreate = async (payload: CreatedLetterType) => {
  const { data } = await requester<PostNewLetterCreateType>({
    method: HTTP_METHOD.POST,
    url: `/letters/draft`,
    data: payload,
  });
  return data;
};

export const postSendLetterComplete = async (letterId: number) => {
  const { data } = await requester<PostSendLetterCompleteType>({
    method: HTTP_METHOD.POST,
    url: `/letters/${letterId}/complete`,
  });
  return data;
};

export const postSendLetterTempComplete = async (letterId: number) => {
  const { data } = await requester<PostSendLetterTempCompleteType>({
    method: HTTP_METHOD.POST,
    url: `/letters/${letterId}/temp-complete`,
  });

  return data;
};
