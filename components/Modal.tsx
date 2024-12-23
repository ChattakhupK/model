"use client";
import { Dialog, DialogContent, DialogOverlay } from "./ui/dialog";
import { useRouter } from "next/navigation";

const Model = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default Model;
