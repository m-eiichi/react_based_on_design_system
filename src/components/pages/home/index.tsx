import { type ReactElement } from "react";
import { Box } from "@/components/ui_elements/box";
// import { FlexContainer } from "@/components/ui_elements/flex_container";
import { Headline } from "@/components/ui_elements/headline";
// import { useMediaQuery } from "react-responsive";

import { useCustomForm } from "@/hooks/useCustomForm";
import { z } from "zod";
import { createAnyValidate } from "@/utils/validation";
import { CheckBox } from "@/components/ui_parts/input/check_box";
import { RadioButton } from "@/components/ui_parts/input/radio_button";

const formSchema = z.object({
  c: createAnyValidate(),
  r: createAnyValidate(),
});

export const Home = (): ReactElement => {
  // const isLargeScreen = useMediaQuery({ query: "(max-width: 1280px)" });
  const defaultValues = {
    c: "",
    r: "",
  };

  const { register } = useCustomForm(formSchema, {
    defaultValues: defaultValues,
  });
  return (
    <Box as="section" padding="xl">
      <Headline size="xl" marginNone>
        Home
      </Headline>
      <CheckBox
        id="c"
        value="c"
        register={register("c")}
        checked
        readonly
        disabled
        text="check"
        width="500px"
      />
      <RadioButton
        id="r"
        value="r"
        register={register("r")}
        checked
        readonly
        text="radio"
        width="500px"
      />
    </Box>
  );
};
