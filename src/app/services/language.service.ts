import { Injectable } from '@angular/core';
import es from '../../assets/lang/es.json';
import en from '../../assets/lang/en.json';

type Dict = Record<string, any>;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private dictionaries: Record<string, Dict> = { es, en };
  private currentLang: 'es' | 'en' = 'es';

  constructor() {
    const saved = localStorage.getItem('language') as 'es' | 'en' | null;
    this.currentLang = saved ?? 'es';
  }

  setLanguage(lang: 'es' | 'en') {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
  }

  getLanguage(): 'es' | 'en' {
    return this.currentLang;
  }

  t(key: string): string {
    const dict = this.dictionaries[this.currentLang];
    return this.resolveKey(dict, key) ?? key;
  }

  
  private resolveKey(obj: Dict, path: string): string | undefined {
    return path.split('.').reduce((acc: any, part: string) => acc?.[part], obj);
  }
}
