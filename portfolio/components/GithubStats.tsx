"use client";
import { useState, useEffect, Suspense } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ActivityCalendar from "react-activity-calendar";
import { Card, CardContent } from "@/components/ui/card";

async function getData(year: string) {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/ZEESHAN-HASAN-KHAN?y=${year}`
    );
    if (!response.ok) throw new Error("Failed to fetch data");

    const result = await response.json();
    return result?.contributions?.length ? result.contributions : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function CalendarWrapper({ data }: { data: any[] }) {
  return (
    <ActivityCalendar
      data={data}
      theme={{
        light: ["#f0f0f0", "#a3d9a5", "#6bbf73", "#3a8f3c", "#6bbf73"],
        dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
      }}
      labels={{
        legend: { less: "Less", more: "More" },
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        totalCount: "{{count}} contributions in {{year}}",
      }}
      hideTotalCount
    />
  );
}

export function GithubStats() {
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const contributions = await getData(year);
      setData(contributions);
      setLoading(false);
    }
    fetchData();
  }, [year]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-left w-full">
        GitHub Activity
      </h2>
      <div className="flex flex-row-reverse">
        <Select onValueChange={(value) => setYear(value)}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder={year} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Year</SelectLabel>
              <SelectItem value={String(new Date().getFullYear())}>
                {new Date().getFullYear()}
              </SelectItem>
              <SelectItem value={String(new Date().getFullYear() - 1)}>
                {new Date().getFullYear() - 1}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Card className="w-full mt-5">
        <CardContent className="overflow-x-auto p-6">
          <div className="flex flex-col justify-center">
            {loading ? (
              <div>Loading...</div>
            ) : data ? (
              <Suspense fallback={<div>Loading...</div>}>
                <CalendarWrapper data={data} />
              </Suspense>
            ) : (
              <div className="text-center text-gray-500">
                No contributions found for {year}.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
