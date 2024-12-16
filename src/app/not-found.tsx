import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <html className="flex items-center justify-center h-screen bg-background-whitebg">
      <body className="flex flex-col items-center justify-center text-center p-4 md:p-6">
        <h1 className="text-title font-extrabold text-text-blackPrimary mb-4">
          404
        </h1>
        <p className="text-h4 text-text-blackSecondary mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button variant="primary">Go Back to Home</Button>
        </Link>
      </body>
    </html>
  );
}
