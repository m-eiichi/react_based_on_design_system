import { useCallback, useEffect, type ReactElement, type FC } from "react";
import { useAtom } from "jotai";
import { dialogAtom } from "@/atoms";
import { Dialog as Component } from "@/components/ui_parts/dialog";

type DialogProps = Omit<Parameters<typeof Component>[0], "isOpen">;

type Result = {
  openDialog: (id: string) => void;
  closeDialog: (id: string) => void;
  Dialog: FC<DialogProps & { id: string }>;
};

export const useDialog = (): Result => {
  const [openDialogs, setOpenDialogs] = useAtom(dialogAtom);
  const openDialog = useCallback(
    (id: string): void => {
      setOpenDialogs(id);
    },
    [setOpenDialogs],
  );

  const closeDialog = useCallback(
    (id: string): void => {
      setOpenDialogs((prevDialogs) => (prevDialogs === id ? "" : prevDialogs));
    },
    [setOpenDialogs],
  );

  useEffect(() => {
    document.body.style.overflowY = openDialogs !== "" ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto"; // Ensure cleanup
    };
  }, [openDialogs]);

  const Dialog: FC<DialogProps & { id: string }> = useCallback(
    ({ id, ...props }: DialogProps & { id: string }): ReactElement | null => {
      const isOpen = openDialogs === id;
      return <Component isOpen={isOpen} {...props} />;
    },
    [openDialogs],
  );

  return { openDialog, closeDialog, Dialog };
};
