"use client";
import { useState, useEffect } from "react";
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
    return result?.contributions?.length ? result.contributions : [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function CalendarWrapper({ data }: { data: Contribution[] }) {
  return (
    <div className="w-full">
      <ActivityCalendar
        data={data}
        theme={{
          light: ["#E0E0E0", "#d4f8d4", "#90d490", "#4cb04c", "#006400"],
          dark: ["#E0E0E0", "#d4f8d4", "#90d490", "#4cb04c", "#006400"],
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
    </div>
  );
}

interface Contribution {
  date: string;
  count: number;
  level: number;
}

export function GithubStats() {
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [data, setData] = useState<Contribution[] | null>(null);
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
        <CardContent className="overflow-x-auto p-6 w-full">
          <div className="flex flex-col justify-center w-full">
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              </div>
            ) : data ? (
              <CalendarWrapper data={data} />
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
