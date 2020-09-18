import React from "react";

export function getYears(): string[] {
  let Years: string[] = [];
  for (let i = 2026; i >= 1950; i--) {
    Years.push(String(i));
  }
  return Years;
}
