import * as Yup from "yup";

export const HW19_SCHEMA = Yup.object({
  second: Yup.object({
    range: Yup.object({
      a: Yup.number(),
      b: Yup.number().test(
        "a",
        "Number must be bigger",
        (value, context) => !!value && value >= context.parent.a
      ),
    }),
  }),
});
