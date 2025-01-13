import { useState, useEffect, useRef, ReactElement, FC } from "react";
import { Typography } from "@/components/ui_elements/typography";
import { Divider } from "@/components/ui_elements/divider";
import { DefaultDialogContent } from "@/components/ui_parts/dialog/default_dialog_content";
import { DialogProps } from "../types";
import Styles from "../dialog.module.css";

export const Dialog: FC<DialogProps> = ({
  noOverlay,
  isOpen = true,
  title,
  size,
}: DialogProps): ReactElement | null => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogHeaderRef = useRef<HTMLDivElement>(null); // dialog直下のdiv要素のref
  const [isDragging, setIsDragging] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const dialogClasses = [
    Styles.dialog,
    noOverlay === true ? Styles.noOverlay : "",
    size !== undefined ? Styles[`size_${size}`] : Styles.size_l,
  ].join(" ");

  useEffect(() => {
    const currentDialog = dialogRef.current;
    const currentDialogHeader = dialogHeaderRef.current;
    if (!currentDialog || !currentDialogHeader) return;

    // Escapeボタンで閉じる動作を防止
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    };

    const handleMouseMove = (e: MouseEvent, margin: number = 40) => {
      if (!isDragging) return;

      const rect = currentDialog.getBoundingClientRect();
      const offsetX = e.clientX - dragStart.x;
      const offsetY = e.clientY - dragStart.y;

      const minX = margin - window.innerWidth / 2 - rect.width / 2;
      const maxX = window.innerWidth / 2 + rect.width / 2 - margin;
      const limitedX = Math.min(Math.max(offsetX, minX), maxX);

      const minY = -(window.innerHeight - rect.height) / 2 + margin;
      const maxY = window.innerHeight / 2 + rect.height / 2 - margin;
      const limitedY = Math.min(Math.max(offsetY, minY), maxY);

      setPosition({ x: limitedX, y: limitedY });
    };

    const handleMouseUp = () => setIsDragging(false);

    // Dialogイベント登録
    currentDialog.addEventListener("keydown", handleKeyDown);
    currentDialogHeader.addEventListener("mousedown", handleMouseDown);

    // スクロール制御とモーダル表示
    if (isOpen) {
      currentDialog.showModal();
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      currentDialog.close();
    }

    // Cleanup
    return () => {
      currentDialog.removeEventListener("keydown", handleKeyDown);
      currentDialogHeader.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isOpen, isDragging, dragStart]);

  return (
    <dialog className={dialogClasses} ref={dialogRef}>
      <div className={Styles.dialog_header} ref={dialogHeaderRef}>
        <div className={Styles.dialog_header_title_container}>
          <Typography size="h5" weight="normal">
            {title}
          </Typography>
        </div>

        <Divider vMarginType="none" />
      </div>

      <div className={Styles.dialog_content}>
        <DefaultDialogContent
          desc="dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description"
          button01={{ children: "OK" }}
          button02={{ children: "Cancel" }}
        />
      </div>
    </dialog>
  );
};
