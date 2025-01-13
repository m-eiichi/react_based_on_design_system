import { useState, useEffect, useRef, ReactElement, FC } from "react";
import { Portal } from "@/components/ui_parts/portal";
import { DialogHeader } from "./dialog_header";
import { DialogProps } from "./types";
import Styles from "./dialog.module.css";

/**
 * <Dialog/>コンポーネント
 *
 * @description ダイアログコンポーネント
 * @param {DialogProps} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */
export const Dialog: FC<DialogProps> = ({
  noOverlay,
  isOpen = false,
  title,
  children,
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
    <Portal>
      <dialog
        className={dialogClasses}
        style={{
          ...(position.x !== null &&
          position.y !== null &&
          (position.x !== 0 || position.y !== 0)
            ? { transform: `translate(${position.x}px, ${position.y}px)` }
            : {}),
        }}
        ref={dialogRef}
      >
        <DialogHeader title={title} dialogHeaderRef={dialogHeaderRef} />

        <div className={Styles.dialog_content}>{children}</div>
      </dialog>
    </Portal>
  );
};

// useEffect(() => {
//   const currentDialog = dialogRef.current;
//   if (!currentDialog) return;

//   // Show or hide the dialog based on `isOpen`
//   if (isOpen) {
//     currentDialog.showModal();
//     document.body.style.overflowY = "hidden";
//   } else {
//     currentDialog.close();
//     document.body.style.overflowY = "auto";
//   }

//   // Cleanup overflow setting when the component unmounts
//   return () => {
//     document.body.style.overflowY = "auto";
//   };
// }, [isOpen]);

// useEffect(() => {
//   const currentDialog = dialogRef.current;
//   const currentDialogHeader = dialogHeaderRef.current;
//   if (!currentDialog || !currentDialogHeader) return;

//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (e.key === "Escape") {
//       e.preventDefault();
//     }
//   };

//   const handleMouseDown = (e: MouseEvent) => {
//     setIsDragging(true);
//     setDragStart({
//       x: e.clientX - position.x,
//       y: e.clientY - position.y,
//     });
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging) return;

//     const rect = currentDialog.getBoundingClientRect();
//     const offsetX = e.clientX - dragStart.x;
//     const offsetY = e.clientY - dragStart.y;

//     const margin = 40;
//     const minX = margin - window.innerWidth / 2 - rect.width / 2;
//     const maxX = window.innerWidth / 2 + rect.width / 2 - margin;
//     const limitedX = Math.min(Math.max(offsetX, minX), maxX);

//     const minY = -(window.innerHeight - rect.height) / 2 + margin;
//     const maxY = window.innerHeight / 2 + rect.height / 2 - margin;
//     const limitedY = Math.min(Math.max(offsetY, minY), maxY);

//     setPosition({ x: limitedX, y: limitedY });
//   };

//   const handleMouseUp = () => setIsDragging(false);

//   currentDialog.addEventListener("keydown", handleKeyDown);
//   currentDialogHeader.addEventListener("mousedown", handleMouseDown);
//   window.addEventListener("mousemove", handleMouseMove);
//   window.addEventListener("mouseup", handleMouseUp);

//   // Clean up event listeners
//   return () => {
//     currentDialog.removeEventListener("keydown", handleKeyDown);
//     currentDialogHeader.removeEventListener("mousedown", handleMouseDown);
//     window.removeEventListener("mousemove", handleMouseMove);
//     window.removeEventListener("mouseup", handleMouseUp);
//   };
// }, [isDragging, dragStart]);
