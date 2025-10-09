import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { PetData } from './types';
import { TravelData } from './types';


/**
 * Reads CSV data using csv-parse/sync for flexible parsing.
 * Returns an array of objects with column headers as keys.
 * @param filePath - Relative path to the CSV file
 */
export function readCSVData(filePath: string): any[] {
  const absolutePath = path.resolve(__dirname, '..', filePath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });
}

/**
 * Reads CSV data manually and returns a typed array of PetData.
 * This is useful when you want strong typing and simple parsing.
 * @param fileName - CSV file name inside the /data folder
 */
export function readTestData(fileName: string): PetData[] {
  const filePath = path.resolve(__dirname, '../data', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const lines = fileContent.split('\n').filter(line => line.trim() !== '');
  const headers = lines[0].split(',').map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const row: any = {};
    headers.forEach((header, index) => {
      row[header] = values[index];
    });
    return row as PetData;
  });
}

/**
 * Reads CSV data manually and returns a typed array of TravelData.
 * This is useful when you want strong typing and simple parsing.
 * @param fileName - CSV file name inside the /data folder
 */
export function readTravelData(fileName: string): TravelData[] {
  const filePath = path.resolve(__dirname, '../data', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const lines = fileContent.split('\n').filter(line => line.trim() !== '');
  const headers = lines[0].split(',').map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const row: any = {};
    headers.forEach((header, index) => {
      row[header] = values[index];
    });
    return row as TravelData;
  });
}