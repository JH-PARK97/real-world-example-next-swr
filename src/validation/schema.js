import { z } from "zod";

// 각자 input value에 대한 validation

export const usernameSchema = z.string().min(1, { message: "유저명을 입력해주세요." });

export const passwordSchema = z.string().min(6, { message: "6글자 이상 입력해주세요." });

export const emailSchema = z.string().email({ message: "이메일 형식이 올바르지 않습니다" });
