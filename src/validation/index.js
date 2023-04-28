// 여러 schema들이 모인 form의 validation
import { z } from "zod";

import { emailSchema, passwordSchema, usernameSchema } from "src/validation/schema";

export const registerSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});
