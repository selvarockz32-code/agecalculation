"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

function AdSenseAd({ slot }: { slot: string }) {
  const hasPushedRef = useRef(false);

  useEffect(() => {
    if (hasPushedRef.current) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      hasPushedRef.current = true;
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className="w-full my-8">
      <div className="text-center text-xs text-gray-400 mb-2">
        Advertisement
      </div>

      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          minHeight: "100px",
        }}
        data-ad-client="ca-pub-4333070677760037"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

function parseBirthDate(value: string): Date | null {
  if (!value) return null;

  const trimmed = value.trim();

  // YYYY-MM-DD
  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (isoMatch) {
    const [, yearText, monthText, dayText] = isoMatch;

    const year = Number(yearText);
    const month = Number(monthText);
    const day = Number(dayText);

    const parsed = new Date(year, month - 1, day, 12, 0, 0);

    if (
      parsed.getFullYear() === year &&
      parsed.getMonth() === month - 1 &&
      parsed.getDate() === day
    ) {
      return parsed;
    }

    return null;
  }

  // DD/MM/YYYY or DD-MM-YYYY or DD.MM.YYYY
  const separatorMatch = trimmed.match(
    /^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/
  );

  if (separatorMatch) {
    const [, dayText, monthText, yearText] = separatorMatch;

    const day = Number(dayText);
    const month = Number(monthText);

    let year = Number(yearText);

    if (yearText.length === 2) {
      year = 2000 + year;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12) {
      return null;
    }

    const parsed = new Date(year, month - 1, day, 12, 0, 0);

    if (
      parsed.getFullYear() === year &&
      parsed.getMonth() === month - 1 &&
      parsed.getDate() === day
    ) {
      return parsed;
    }
  }

  return null;
}

export default function Home() {
  const [birthDate, setBirthDate] = useState("");

  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!birthDate) {
      alert("Please enter your birth date");
      return;
    }

    const birth = parseBirthDate(birthDate);

    if (!birth) {
      alert(
        "Please enter a valid birth date (YYYY-MM-DD or DD/MM/YYYY)"
      );
      return;
    }

    const today = new Date();

    if (birth > today) {
      alert("Birth date cannot be in the future");
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;

      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({
      years,
      months,
      days,
    });
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Age Calculator
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            The simple and accurate age calculator for everyone
          </p>
        </div>

        {/* Advertisement 1 */}
        <AdSenseAd slot="1234567890" />

        {/* Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Calculator Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Calculate Your Age
            </h2>

            <form
              onSubmit={calculateAge}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Birth Date
                </label>

                <input
                  id="birthDate"
                  type="text"
                  inputMode="numeric"
                  placeholder="DD/MM/YYYY or YYYY-MM-DD"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
              >
                Calculate Age
              </button>
            </form>
          </div>

          {/* Result Display */}
          {age && (
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg p-6 sm:p-8 text-white">

              <h2 className="text-2xl font-bold mb-6">
                Your Age
              </h2>

              <div className="space-y-4">

                {/* Years */}
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-5xl font-bold">
                    {age.years}
                  </div>

                  <div className="text-sm text-blue-100">
                    Years
                  </div>
                </div>

                {/* Months and Days */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold">
                      {age.months}
                    </div>

                    <div className="text-sm text-blue-100">
                      Months
                    </div>
                  </div>

                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold">
                      {age.days}
                    </div>

                    <div className="text-sm text-blue-100">
                      Days
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>

        {/* Advertisement 2 */}
        <AdSenseAd slot="2345678901" />

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">
              ⚡
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Instant Results
            </h3>

            <p className="text-gray-600">
              Get your exact age in years, months, and days instantly
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">
              📱
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Mobile Friendly
            </h3>

            <p className="text-gray-600">
              Works perfectly on smartphones, tablets, and desktops
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-4">
              🔒
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Secure & Private
            </h3>

            <p className="text-gray-600">
              Your data is never stored or shared with anyone
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg shadow-lg p-8 sm:p-12 text-center text-white">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Calculate?
          </h2>

          <p className="text-blue-100 mb-6">
            Scroll up to enter your birth date and find out your exact age
          </p>

          <Link
            href="/about"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Learn More About Us
          </Link>

        </div>

        {/* Advertisement 3 */}
        <AdSenseAd slot="3456789012" />

      </div>
    </div>
  );
}