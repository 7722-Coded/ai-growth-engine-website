
import { cn } from "@/lib/utils"
import { Loader, BrainCircuit } from "lucide-react"
import { useState, useEffect } from "react"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  fullscreen?: boolean;
  type?: "pulse" | "loader" | "brain";
}

function Skeleton({
  className,
  fullscreen = false,
  type = "pulse",
  ...props
}: SkeletonProps) {
  if (fullscreen) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        {type === "pulse" && (
          <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
        )}
        {type === "loader" && (
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-t-primary border-l-primary border-b-transparent border-r-transparent rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
            <Loader className="absolute inset-0 m-auto w-10 h-10 text-primary animate-pulse" />
          </div>
        )}
        {type === "brain" && (
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-t-primary border-l-primary border-b-transparent border-r-transparent rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <BrainCircuit className="w-10 h-10 text-primary animate-pulse" />
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
