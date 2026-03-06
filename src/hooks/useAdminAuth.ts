"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

const ADMIN_EMAILS = ["youradmin@email.com"];

export function useAdminAuth() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && ADMIN_EMAILS.includes(user.email || "")) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
        router.replace("/admin/login");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  return { loading, isAdmin };
} 