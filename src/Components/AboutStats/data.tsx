"use client";
type DataItem = {
  id: string;
  title: string;
  number: string;
};

export const usedata = (): DataItem[] => {
  return [
    {
      id: "1",
      title: "Experince",
      number: "+2",
    },
    {
      id: "2",
      title: "Project",
      number: "+10",
    },
  ];
};
