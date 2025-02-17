import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert";
import { ProductInfo } from "@/share/common/types";
import Link from "next/link";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  config: ProductInfo;
}

const ConfirmationDialog = ({
  isOpen,
  onClose,
  config,
}: ConfirmationDialogProps) => {
  if (!isOpen) return null; // 🔥 Добавил защиту от рендера пустого AlertDialog

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {config.title} added to{" "}
            <Link style={{ color: "blue" }} href="/cart">
              cart
            </Link>
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationDialog;
