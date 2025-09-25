
export enum ZodiacSign {
    ARIES = 'Aries',
    TAURUS = 'Taurus',
    GEMINI = 'Gemini',
    CANCER = 'Cancer',
    LEO = 'Leo',
    VIRGO = 'Virgo',
    LIBRA = 'Libra',
    SCORPIO = 'Scorpio',
    SAGITTARIUS = 'Sagittarius',
    CAPRICORN = 'Capricorn',
    AQUARIUS = 'Aquarius',
    PISCES = 'Pisces',
}

export enum Language {
    ENGLISH = 'English',
    SINHALA = 'Sinhala',
    TAMIL = 'Tamil',
}

export interface FormData {
    name: string;
    dob: string;
    birthplace: string;
    zodiacSign: ZodiacSign;
    language: Language;
}
