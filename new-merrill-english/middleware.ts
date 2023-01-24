import {NextResponse, NextRequest } from "next/server";

 const spanishLocales = [
  "es-ar",
  "es-bo",
  "es-cl",
  "es-co",
  "es-cr",
  "es-do",
  "es-ec",
  "es-sv",
  "es-gt",
  "es-hn",
  "es-mx",
  "es-ni",
  "es-pa",
  "es-py",
  "es-pe",
  "es-pr",
  "es",
  "es-uy",
  "es-ve",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-DO",
  "es-EC",
  "es-SV",
  "es-GT",
  "es-HN",
  "es-MX",
  "es-NI",
  "es-PA",
  "es-PY",
  "es-PE",
  "es-PR",
  "es",
  "es-UY",
  "es-VE",
 ]

 export function middleware(request: NextRequest) {

  const url = request.nextUrl.clone()   
  const spanishLocale = request.headers.get('accept-language');
  if (url.pathname === '/' && spanishLocale !== null && spanishLocales.includes(spanishLocale) === false) {
      url.pathname = '/en'
      return NextResponse.redirect(url)   
  } 
  else if (url.pathname === '/' && spanishLocale !== null && spanishLocales.includes(spanishLocale)) {
    url.pathname = '/es'
    return NextResponse.redirect(url)   
  } 
}
