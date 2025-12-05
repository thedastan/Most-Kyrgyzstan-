export enum EnumIntl {
	ENGLISH = "en",
	RUSSIAN = "ru",
	GERMAN = "de",
	FRENCH = "fr",
	ITALIAN = "it",
	TURKISH = "tr",
	ARABIC = "ar",
}

// types
export type IntlType =
	| EnumIntl.ENGLISH
	| EnumIntl.RUSSIAN
	| EnumIntl.GERMAN
	| EnumIntl.FRENCH
	| EnumIntl.ITALIAN
	| EnumIntl.TURKISH
	| EnumIntl.ARABIC;

export interface ILocale {
	name: string;
	locale: IntlType;
	short_name: string;
}

export interface PropsWithTitle {
	title: string;
	query?: string;
}
