"use client"
import { CommandDemo } from "@/components/landing/command-demo"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Search } from "lucide-react"

export function SearchModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm text-muted-foreground w-full max-w-sm"
        >
          <Search className="h-4 w-4" />
          <span className="text-sm">Cari sesuatu...</span>
          <kbd className="ml-auto text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">Ctrl K</kbd>
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-lg border-none shadow-xl">
        <CommandDemo />
      </DialogContent>
    </Dialog>
  )
}
