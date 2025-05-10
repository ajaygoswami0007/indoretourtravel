
"use client";

import { useState, useEffect, type ReactNode } from 'react';

interface ClientRenderedDateProps {
  placeholder?: ReactNode;
}

export default function ClientRenderedDate({ placeholder }: ClientRenderedDateProps) {
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  if (currentDate === null) {
    return <>{placeholder || "Loading date..."}</>;
  }

  return <>{currentDate}</>;
}
