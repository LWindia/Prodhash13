"use client";
import React from 'react';
import Link from 'next/link';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { loading, isAdmin } = useAdminAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (!isAdmin) return null;
  
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/admin" className="hover:text-red-500">Dashboard</Link>
          <Link href="/admin/courses" className="hover:text-red-500">Courses</Link>
          <Link href="/admin/assets" className="hover:text-red-500">Assets</Link>
        </nav>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
} 