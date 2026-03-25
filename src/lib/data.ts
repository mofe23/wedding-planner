import { readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';

export function loadData<T>(locale: string, file: string): T {
  const filePath = join(process.cwd(), 'src', 'data', locale, `${file}.yaml`);
  const raw = readFileSync(filePath, 'utf-8');
  return yaml.load(raw) as T;
}
